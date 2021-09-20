const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { getProducts, createProduct } = require("../controller/product");
const {getProductsBySlug , getProductDetailsById}=require("../controller/product")
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture", 12),
  createProduct
);

router.get("/product/getproducts", getProducts);
router.get("/products/:slug", getProductsBySlug); // add by nitish 
router.get("/product/:productId", getProductDetailsById);

module.exports = router;
