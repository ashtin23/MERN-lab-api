const mongoose = require('./connection.js')

const TranslationSchema = new mongoose.Schema({
  text: String,
  audioSource: String
})


module.exports = mongoose.model("Translation", TranslationSchema)