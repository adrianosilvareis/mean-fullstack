const express = require('express')

const home = require('../app/routes/index')

module.exports = () =>{
  let app = express()

  //variaveis constantes
  app.set('port', 3000)
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  //midlewares
  app.use(express.static('./public'))

  home(app)

  return app
}
