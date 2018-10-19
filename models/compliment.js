const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ComplimentSchema = new Schema({
    compliment: String,
    author: String, //outdated version(pre-user version)
    user: String,
    time: String,
    upvotes: Number, //NOT IMPLEMENTED
    flagged: Boolean,
    ignoreFlag: Boolean,
    hashtag: [String]
});

module.exports = mongoose.model('Compliment', ComplimentSchema);
