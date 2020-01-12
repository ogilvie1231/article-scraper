
const db = require("../models");

module.exports = {
    get: function(data, cb) {
        Note.find({
            _headlineId: data._id
        }, cb);
    },
    save: function(data, cb) {
        var newFav = {
            _headlineId: data._id,

        };
        Note.create(newFav, function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log(doc)
                cb(doc)
            }
        });
    },
    delete: function(data, cb) {
        Note.remove({
            _id: data._id
        }, cb);
    }
}








// let addFav = function(favs) {
//     $("#addFav").on("click", function() {
//         var favs = []

//         results.push({
//             title: this.title,
//             link: "https://www.ksl.com" + this.link,
//             img: this.img,
//             sum: this.sum
            
//         }); 
//     // db.Notes.create()
// })
// }

// // module.exports = notes