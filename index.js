const express = require("express");
const parser = require("body-parser");
const Movie = require("./db/models");

const cors = require("cors")

const app = express();

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())
// app.use("/api/movies")

app.get('/api/movies', (req, res) => {
    Movie.find({})
      .then((movies) => {
          console.log(movies)
        res.json(movies)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  
  app.post('/api/movies', (req, res) => {
    Movie.create(req.body)
      .then((movie) => {
        res.json(movie)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  
  app.get('/api/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
      .then((movie) => {
        res.json(movie)
      })
      .catch((err) => {
        console.log(err)
      })
  })

app.set("", )

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });

//   mongodb+srv://ashtin23:buckeye92@cluster0-t0lh6.mongodb.net/test?retryWrites=true&w=majority