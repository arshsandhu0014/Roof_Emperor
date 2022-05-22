const Room = require("./../models/roomModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("../controllers/handleFactory");

exports.setPgIds = (req, res, next) => {
  //! allow nested routes
  if (!req.body.pg) req.body.pg = req.params.pgId;

  next();
};

exports.getAllRooms = factory.getAll(Room, "Rooms");
exports.getRoom = factory.getOne(
  Room,
  { path: "reviews", select: "review rating user -room" },
  "Room"
);
exports.createRoom = factory.createOne(Room, "Room");
exports.updateRoom = factory.updateOne(Room, "Room");
exports.deleteRoom = factory.deleteOne(Room, "Room");

exports.getRooomsStats = catchAsync(async (req, res, next) => {
  const stats = await Room.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: "$standard" },
        avgRating: { $avg: "$ratingsAverage" },
        numRating: { $sum: "$ratingsQuantity" },
        numRooms: { $sum: 1 },
        avgPrice: { $avg: "$rent" },
        maxPrice: { $max: "$rent" },
        minPrice: { $min: "$rent" }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
  ]);

  res.status(200).json({
    stats: "success",
    data: {
      stats
    }
  });
});
