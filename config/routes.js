
// const db = require("./models");
const router = require("express").Router();
const axios = require("axios");

router.get("/", function(req, res) {
    console.log("routes")

    res.render("index")
})


router.get("/scrape", function(req, res) {
    axios.get("https://www.ksl.com/").then(function(response) {

        var $ = cheerio.load(ressonse.data);

        var results = []

        $("div.headline").each(function(i, element) {

            var title = $(element).text();

            var link = $(element).children().attr("href");

            results.push({
                title: title,
                link: link
            });
            res.render("scrape", results)
        });
    });
});

module.exports = router