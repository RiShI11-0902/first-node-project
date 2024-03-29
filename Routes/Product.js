const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  .post("/", productController.createProduct)
  .get("/ssr", productController.getAllProductSSR)
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getIndividualProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.routes = router;