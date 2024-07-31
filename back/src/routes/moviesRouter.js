const express = require("express");
const movieRouter = express.Router();
const {getMovies, createMovies, putMovies,deleteMovies} = require("../controller/moviesController");


movieRouter.get("/", getMovies);
movieRouter.post("/", createMovies);
movieRouter.put("/", putMovies);
movieRouter.delete("/", deleteMovies);



module.exports = movieRouter;