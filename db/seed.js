const Movie = require('./models')
const movieData = require('./data.json')

Movie.remove({})
  .then(() => {
    Movie.create(movieData)
      .then((movies) => {
        console.log(movies)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })