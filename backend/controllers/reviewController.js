const ReviewRoom = require("../models/reviewRoomModel");
const factory = require("../controllers/handleFactory");

exports.getAllReviews = factory.getAll(ReviewRoom, "Reviews");
exports.getReview = factory.getOne(ReviewRoom, "Review");
exports.createReview = factory.createOne(ReviewRoom, "Review");
exports.updateReview = factory.updateOne(ReviewRoom, "Review");
exports.deleteReview = factory.deleteOne(ReviewRoom, "Review");

exports.setRoomUserIds = (req, res, next) => {
  //! allow nested routes
  if (!req.body.room) req.body.room = req.params.roomId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};
