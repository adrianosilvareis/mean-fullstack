const express = require('express')
const load = require('express-load')

module.exports = () =>{
  let app = express()

  //variaveis constantes
  app.set('port', 3000)
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  //midlewares
  app.use(express.static('./public'))

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app
}
