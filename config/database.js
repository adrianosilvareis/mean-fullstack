const mongoose = require('mongoose')

module.exports = (uri) => {
    mongoose.connect(uri, { useMongoClient: true })
    mongoose.Promise = global.Promise

    mongoose.connection.on('connected', () => console.log(`Mongoose! conectado em ${uri}`))
    mongoose.connection.on('disconnected', () => console.log(`Mongoose! desconectado de ${uri}`))
    mongoose.connection.on('error', (error) => console.log(`Mongoose! ${error}`))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log("Mongoose! desconectado pelo termino da aplicação")
            process.exit(0)
        })
    })

}