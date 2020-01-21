const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FavoritesSchema = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    title: {
        type: String,
        required: true,
        unique: {index: {unique: true}}
      },
      summary: {
        type: String,
        // required: true
      },
      date: String,
      saved: {
        type: Boolean,
        default: false
      },
      link: {
        type: String,
        // required: true
      },
      img: {
        type: String,
        // required: true
      },
      sum: {
        type: String,
        // required: true
      }
     
});
const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
