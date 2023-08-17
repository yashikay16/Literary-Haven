// defines the structure of the user details
// defines the details field.

// schema is class and model is a function.
const {model, Schema} = require('../connection');

const mySchema = new Schema({
    bookname: String,
    author : String,
    genre : String,
    pages : Number,
    description:String,
    link:String,
    image:String,
    likes: { type: Number, default: 0 },
});

module.exports = model('addbook', mySchema);