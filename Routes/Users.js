const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router
  .post("/", userController.createProduct)
  .get("/", userController.getAllProduct)
  .get("/:id", userController.getIndividualProduct)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct);

exports.routes = router;