const http = require('http')

let app = require('./config/express')()

http.createServer(app).listen(app.get('port'), ()=> {
    console.log('Escutando na porta ' + app.get('port'))
})
