const express = require("express");
const { rentApp } = require("../modules");
const { tokenAuthentication } = require("../middlewares/auth");
const checkError = require("../middlewares/validator");
const { rentValidators } = require("../validators");

const router = express.Router();

router.post(
  "/add",
  tokenAuthentication,
  rentValidators.addToRentTable,
  checkError,
  rentApp.rentController.makeRent
);

router.post(
  "/check-back",
  tokenAuthentication,
  rentValidators.returnVehicleValidator,
  checkError,
  rentApp.rentController.returnVehicle
);

router.get(
  "/history",
  tokenAuthentication,
  rentApp.rentController.getUserRentHistory
);

module.exports = router;
