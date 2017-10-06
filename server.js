const http = require('http')
const app = require('./config/express')()
require('./config/database.js')('mongodb://localhost:27017/contato')

http.createServer(app).listen(app.get('port'), ()=> {
    console.log('Escutando na porta ' + app.get('port'))
})
