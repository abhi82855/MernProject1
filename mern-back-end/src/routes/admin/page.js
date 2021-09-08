const express = require("express");
const { upload } = require("../../common-middleware");
const router = express.Router();

router.post(
  `/page/create`,
  upload.fileds([{ name: "banner" }, { name: "product" }]),
  createPage
);
module.exports = router;
