const express = require("express");
const homeRouter = express.Router();
const { getHome } = require("../controller/homeController");

homeRouter.get("/", getHome);

module.exports = homeRouter;