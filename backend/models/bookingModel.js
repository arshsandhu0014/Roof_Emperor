const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  pg: {
    type: mongoose.Schema.ObjectId,
    ref: "PG",
    required: [true, "Booking must belong to a PG"]
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "You need to log in"]
  },
  rentPrice: {
    type: Number,
    require: [true, "Booking must have a price"]
  },
  deposit: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: true
  }
});

bookingSchema.pre(/^find/, function(next) {
  this.populate("user").populate({
    path: "pg",
    select: "pgName"
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
