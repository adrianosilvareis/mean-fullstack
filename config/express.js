const express = require('express')

module.exports = () =>{
  let app = express()

  //variaveis constantes
  app.set('port', 3000)

  //midlewares
  app.use(express.static('./public'))

  return app
}
