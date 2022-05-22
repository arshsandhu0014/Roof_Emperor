const mongoose = require("mongoose");
const slugify = require("slugify");

const pgSchema = new mongoose.Schema(
  {
    location: {
      // GeoJSON
      type: {
        type: String,
        default: "Point",
        enum: ["Point"]
      },
      coordinates: [Number],
      address: String,
      city: String
    },
    pgName: {
      type: String,
      required: [true, "Please provide pg name"],
      trim: true,
      maxlength: [40, "Pg name must have less than 40 characters"],
      minlength: [10, "Pg name must have more than 10 characters"]
    },
    electricity: {
      type: Number,
      required: [true, "Please provide electricity per unit"],
      default: 5,
      min: [1, "electricity per unit should be greater than 0"]
    },
    numRooms: {
      type: Number,
      required: [true, "Please provide number of rooms"],
      min: [1, "Pg name must have atleast one room"]
    },
    NumOccupiedRooms: {
      type: Number,
      defualt: 0
    },
    facilities: {
      type: [String],
      required: [true, "Please provide pg  facilities"]
    },
    phone: {
      type: Number,
      required: [true, "Please provide phone number"],
      min: [999999999, "Please provide a valid phone number"]
    },
    priceRange: {
      type: [Number],
      required: [true, "Please provide rent price range"]
    },
    deposit: {
      type: Number,
      required: [true, "Pg should have a deposit price"]
    },
    slug: String,
    preBookingFees: {
      type: Number,
      required: [true, "Pg must have a preBookingFees"]
    },
    standard: {
      type: String,
      required: [true, "Pg should have a standard"],
      enum: {
        values: ["standard", "premium", "delux"],
        message: "Pg standard can either be standard ,premium or delux"
      }
    },
    imageCover: {
      type: String,
      required: [true, "Pg should have a cover image"]
    },
    images: [String],

    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    manager: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: val => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

pgSchema.index({ ratingsAverage: -1 });
pgSchema.index({ location: "2dsphere" });
pgSchema.index({ slug: 1 });

pgSchema.virtual("numVacantRooms").get(function() {
  return this.numRooms - this.NumOccupiedRooms;
});

//! QUERY MIDDLEWARE
pgSchema.pre(/^find/, function(next) {
  this.populate({
    path: "owner",
    select: "name phone"
  }).populate({
    path: "manager",
    select: "name phone"
  });

  next();
});

//!DOCUMENT MIDDLEWARE
pgSchema.pre("save", function(next) {
  this.slug = slugify(this.pgName, { lower: true });

  next();
});

//! Embedding tour guides
// pgSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

//!Aggregation MIDDLEWARE
// pgSchema.pre("aggregate", function(next) {
//   this.pipeline().unshift({
//     $match: { secretPg: { $ne: true } }
//   });

//   next();
// });
const PG = mongoose.model("PG", pgSchema);

module.exports = PG;
