const express = require("express");
const pgController = require("../controllers/pgController");
const authController = require("./../controllers/authController");
const roomRouter = require("../routes/roomRoutes");

const router = express.Router();

router.use("/:pgId/rooms", roomRouter);

router.route("/top-5-pgs").get(pgController.aliasTopPG, pgController.getAllPG);
router.route("/pg-stats").get(pgController.getPGStats);

router
  .route("/pgs-within/:distance/center/:latlng/unit/:unit")
  .get(pgController.getPgsWithin);

router.route("/distances/:latlng/unit/:unit").get(pgController.getDistances);

router
  .route("/")
  .get(pgController.getAllPG)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    pgController.createPG
  );

router
  .route("/:id")
  .get(pgController.getPG)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "owner"),
    // pgController.uploadPGImages,
    // pgController.resizePGImages,
    pgController.updatePG
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    pgController.deletePG
  );

module.exports = router;
