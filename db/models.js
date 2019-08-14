const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const Movie = new Schema({
  movie: String,
  year: Number
})


module.exports = mongoose.model("Movie", Movie)