const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const movieRouter = require("./routes/moviesRouter");
const homeRouter = require("./routes/homeRouter");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", homeRouter);
app.use("/movies", movieRouter);

module.exports = app;