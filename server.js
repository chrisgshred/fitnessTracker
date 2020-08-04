// TODO List:
// -require dependencies
// -setup express app
// -add middleware to express: static, body parsing, logging with morgan
// -deploy
// -api routes (in separate folder)
// -create quality readme

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes");
const morgan = require("morgan");

const PORT = process.env.PORT || 7000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI , { useNewUrlParser: true , useFindAndModify:false});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });