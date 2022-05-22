const express = require("express");
const roomController = require("../controllers/roomController");
const authController = require("./../controllers/authController");
const reviewRoomRouter = require("./reviewRoomRoutes");

const router = express.Router({ mergeParams: true });

router.use("/:roomId/roomReviews", reviewRoomRouter);

router.route("/rooms-stats").get(roomController.getRooomsStats);

router
  .route("/")
  .get(roomController.getAllRooms)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    roomController.setPgIds,
    roomController.createRoom
  );

router
  .route("/:id")
  .get(roomController.getRoom)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    // roomController.uploadRoomImages,
    // roomController.resizeRoomImages,
    roomController.updateRoom
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    roomController.deleteRoom
  );

module.exports = router;
