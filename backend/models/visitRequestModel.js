const mongoose = require("mongoose");

const visitRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
    maxlength: [40, "Name must have less than 40 characters "],
    minlength: [3, "Name must be at least 10 characters"]
  },
  room: {
    type: mongoose.Schema.ObjectId,
    ref: "Room"
  },
  phone: {
    type: Number,
    required: [true, "Please provide phone number"],
    min: [999999999, "Please provide a valid phone number"]
  }
});

visitRequestSchema.index(
  { room: 1, user: 1 },
  {
    unique: true
  }
);
visitRequestSchema.pre(/^find/, function(next) {
  this.populate({
    path: "room",
    select: "pg roomNo"
  });
  next();
});
const VisitRequest = mongoose.model("VisitRequest", visitRequestSchema);
module.exports = VisitRequest;
