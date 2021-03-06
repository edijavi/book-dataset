let mongoose = require('mongoose');

//Book Schema
let bookSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "authors": {
        type: String,
        required: true
    },
    "average_rating": {
        type: String,
        required: true
    },
    "isbn": {
        type: String,
        required: true
    },
    "language_code": {
        type: String,
        required: true
    },
    "publication_date": {
        type: String,
        required: true
    },
    "publisher":{
        type: String,
        required: true
    }
});

let Book = module.exports = mongoose.model('Book', bookSchema)