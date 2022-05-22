const multer = require("multer");
const sharp = require("sharp");
const PG = require("./../models/pgModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("../controllers/handleFactory");
const AppError = require("../utils/appError");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image .Please upload only images 🙂", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadPGImages = upload.fields([
  {
    name: "imageCover",
    maxCount: 1
  },
  {
    name: "images",
    maxCount: 10
  }
]);

exports.resizePGImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();

  // 1) process cover image
  req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/tours/${req.body.imageCover}`);

  // 2) process images
  req.body.images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `tour-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/tours/${filename}`);

      req.body.images.push(filename);
    })
  );
  next();
});

exports.aliasTopPG = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,rentPrice";
  req.query.fields = "pgName,rentPrice,ratingsAverage,standard";

  next();
};

exports.getAllPG = factory.getAll(PG, "PGs");
exports.getPG = factory.getOne(PG, "PG");
exports.createPG = factory.createOne(PG, "PG");
exports.updatePG = factory.updateOne(PG, "PG");
exports.deletePG = factory.deleteOne(PG, "PG");

exports.getPGStats = catchAsync(async (req, res, next) => {
  const stats = await PG.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: "$standard" },
        avgRating: { $avg: "$ratingsAverage" },
        numRating: { $sum: "$ratingsQuantity" },
        numPG: { $sum: 1 }
      }
    }
  ]);

  res.status(200).json({
    stats: "success",
    data: {
      stats
    }
  });
});

//! ((((((((((  PGs within a radius  ))))))))))

exports.getPgsWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;

  const [lat, lng] = latlng.split(",");
  let radius;

  if (unit === "mi") radius = distance / 3963.2;
  else if (unit === "km") radius = distance / 6378.1;
  else if (unit === "mt") radius = distance / 6378100;

  if (!lat || !lng) {
    return next(new AppError("Location not found", 400));
  }

  const pgs = await PG.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  });

  console.log(distance, lat, lng, unit, radius);
  res.status(200).json({
    status: "success",
    results: pgs.length,
    data: {
      pgs
    }
  });
});

//! (((((((((  Calculate distances  )))))))))

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;

  const [lat, lng] = latlng.split(",");

  let multiplier;

  if (unit === "mi") multiplier = 0.000621371;
  else if (unit === "km") multiplier = 0.001;
  else multiplier = 1;

  if (!lat || !lng) {
    return next(new AppError("Location not found", 400));
  }

  const distances = await PG.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [lng * 1, lat * 1],
          key: "location"
        },
        distanceField: "distance",
        distanceMultiplier: multiplier
      }
    },
    {
      $project: {
        distance: 1,
        pgName: 1
      }
    }
  ]);
  res.status(200).json({
    status: "success",
    data: {
      distances
    }
  });
});
