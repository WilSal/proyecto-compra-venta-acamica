const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router
  .route("/validarusuario")
  .post(userController.validateUser);

router
  .route("/registrarusuario")
  .post(userController.registerUser);

module.exports = router;
