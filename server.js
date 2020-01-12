const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const cheerio = require("cheerio");
const hb = require("express-handlebars");

// importing models folder
require("./models");

const PORT = process.env.PORT || 3030;

const routes = require("./config/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.use(logger("dev"));

app.engine(
    "handlebars",
    hb({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");



app.use(routes)


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, }, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection success")
    }
});

app.listen(PORT, function () {
    console.log("listening on port: " + PORT)
})

module.exports = app;