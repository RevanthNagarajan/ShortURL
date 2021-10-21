const mongoose = require('mongoose');

const URLSchema = mongoose.Schema({
    createdBy : String,
    shortUrl : String,
    url : String,
    title : String,
    description : String
}, {
    timestamps: true
});

module.exports = mongoose.model('urls', URLSchema);