const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NotesSchema = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
     date: String,
     noteText: String
});
const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;