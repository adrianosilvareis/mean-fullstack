const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')

module.exports = () =>{
  let app = express()

  //variaveis constantes
  app.set('port', 3000)
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  //midlewares
  app.use(express.static('./public'))

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(require('method-override')())

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app)

  return app
}
