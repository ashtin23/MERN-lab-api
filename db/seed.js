const Translation = require('./models')
const translationData = require('./translation-data.json')

Translation.remove({})
  .then(() => {
    Translation.create(translationData)
      .then((translations) => {
        console.log(translations)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })