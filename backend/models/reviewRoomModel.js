const mongoose = require("mongoose");
const Room = require("./roomModel");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review cannot be empty"]
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: "Room",
      required: [true, "Review must belong to a room"]
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"]
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

reviewSchema.index(
  { room: 1, user: 1 },
  {
    unique: true
  }
);
//! QUERY MIDDLEWARE
reviewSchema.pre(/^find/, function(next) {
  this.populate({
    path: "user",
    select: "name photo"
  });

  next();
});

//!((((((((  Calculate ratingsAverage and ratingsQuantity On Rooms ))))))))
reviewSchema.statics.calcAverageRatings = async function(roomId) {
  const stats = await this.aggregate([
    {
      $match: { room: roomId }
    },
    {
      $group: {
        _id: "$room",
        numRating: { $sum: 1 },
        avgRating: { $avg: "$rating" }
      }
    }
  ]);

  if (stats.length > 0) {
    await Room.findByIdAndUpdate(roomId, {
      ratingsQuantity: stats[0].numRating,
      ratingsAverage: stats[0].avgRating
    });
  } else {
    await Room.findByIdAndUpdate(roomId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5
    });
  }
};

reviewSchema.post("save", function() {
  // 'this' points to current review
  this.constructor.calcAverageRatings(this.room);
});

reviewSchema.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  next();
});
reviewSchema.post(/^findOneAnd/, async function() {
  // await this.findOne(); does NOT work here, query has already been executed
  await this.r.constructor.calcAverageRatings(this.r.room);
});

const Review = mongoose.model("ReviewRoom", reviewSchema);

module.exports = Review;
