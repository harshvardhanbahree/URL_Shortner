const express = require("express");
const router = express.Router();
const controller = require("../controller/url");

router.post("/", controller.generateShortUrl);

module.exports = {
  router,
};
