const express = require("express");
const authController = require("./../controllers/authController");
const visitRequestController = require("./../controllers/visitRequestController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    visitRequestController.getAllVisitRequests
  )
  .post(
    authController.protect,
    authController.restrictTo("guest"),
    visitRequestController.createVisitRequest
  );

router.use(authController.protect, authController.restrictTo("admin"));
router
  .route("/:id")
  .get(visitRequestController.getVisitRequest)
  .delete(visitRequestController.deleteVisitRequest);

module.exports = router;
