const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ComplimentSchema = new Schema({
    compliment: String,
    author: String,
    time: String,
    upvotes: Number, //NOT IMPLEMENTED
    flagged: Boolean,
    ignoreFlag: Boolean
});

module.exports = mongoose.model('Compliment', ComplimentSchema);
