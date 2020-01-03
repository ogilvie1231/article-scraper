const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
// importing Cheerio
const cheerio = require("cheerio");
// importing models folder
// const db = require("./models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, }, function(error){
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection success")
    }
});

const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

app.listen(PORT, function() {
    console.log("listening on port: " + PORT)
})