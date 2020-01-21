const cheerio = require("cheerio");
const router = require("express").Router();
const axios = require("axios");
const db = require("../models");
const add = require("../controllers/notes")


router.get("/", function(req, res) {

    res.render("index")
})

router.post("/favorites", function(req, res) {
    const { title, link, img, summary, id } = req.body

    db.Favorites.create({ _headlineId: id, title, link, img, summary })
})

router.get("/favorites", function(req, res) {
    return  db.Favorites.find().then(function(favorites){
        console.log('favorites', favorites)
        res.render("favorites", {favorites: favorites})
    })
})


router.get("/scrape", function(req, res) {
    return axios.get("https://www.ksl.com/").then(function(response) {

        var $ = cheerio.load(response.data);

        var results = []

        $("div.queue_story").each(function(i, element) {
        
            var title = $(this).find("h2").text();
            
            var link = $(this).children().children("a").attr("href");
            
            var img = $(this).find("img").attr("data-srcset");

            var sum = $(this).find("h5").text()
            // console.log("$this: ", $(this))

            results.push({
                title: title,
                link: "https://www.ksl.com" + link,
                img: img,
                sum: sum
                
            }); 
            
            // console.log("results: ", results)
        });
           return db.Headline.create(results, function(err, headlines) {
                if (err) {
                  return  db.Headline.find().then(function(headlines){
                        res.render("scrape", {headlines: headlines})
                    })
                } else {
                    res.render("scrape", {headlines: headlines})
                }
                })
           
    });
    
});

module.exports = router