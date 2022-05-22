const mongoose = require("mongoose");
const slugify = require("slugify");

const roomSchema = new mongoose.Schema(
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
    roomFor: {
      type: String,
      enum: {
        values: ["male", "female"],
        message: "Please enter correct value for gender"
      }
    },
    floor: {
      type: Number,
      default: 0
    },
    roomNo: {
      type: String,
      required: [true, "Room must have room number"]
    },

    facilities: {
      type: [String],
      required: [true, "Please provide pg  facilities"]
    },

    rent: {
      type: Number,
      required: [true, "Please provide rent price"]
    },
    slug: String,
    deposit: {
      type: Number,
      required: [true, "Pg should have a deposit price"],
      validate: {
        validator: function(value) {
          return value < this.rent;
        },
        message: "Security ({VALUE}) should be less than rent price "
      }
    },
    isBooked: {
      type: Boolean,
      default: false
    },
    maxGuests: {
      type: Number,
      required: [true, "Pg should have a  max guest number"]
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
    secretRoom: {
      type: Boolean,
      default: false
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
    },
    pg: {
      type: mongoose.Schema.ObjectId,
      ref: "PG"
    },
    phone: {
      type: Number,
      required: [true, "Please provide phone number"],
      min: [999999999, "Please provide a valid phone number"]
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
roomSchema.index({ ratingsAverage: -1 });
roomSchema.index({ slug: 1 });

roomSchema.pre("save", function(next) {
  this.slug = slugify(this.roomNo, { lower: true });

  next();
});

//! QUERY MIDDLEWARE
roomSchema.pre(/^find/, function(next) {
  this.find({ secretRoom: { $ne: true } });

  next();
});

roomSchema.pre("aggregate", function(next) {
  this.pipeline().unshift({
    $match: { secretRoom: { $ne: true } }
  });

  next();
});

roomSchema.pre(/^find/, function(next) {
  this.populate({
    path: "pg",
    select: "pgName"
  });

  next();
});
// //! virtual populate
roomSchema.virtual("reviews", {
  ref: "ReviewRoom",
  foreignField: "room",
  localField: "_id"
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
