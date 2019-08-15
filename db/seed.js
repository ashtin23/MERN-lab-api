const Movie = require('./models')
const movieData = require('./data.json')

Movie.remove({}).then(movie => {
    Movie.collection.insert(movieData).then(movie => {
        console.log(movie)
    });
});