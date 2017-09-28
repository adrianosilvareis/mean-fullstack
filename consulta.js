const { MongoClient, ObjectID } = require('mongodb')

const _idProcurado = new ObjectID("59cd3a14c5f5ee2dd89f3abf")

const pessoa = {
    nome: "Adriano ES6",
    sobrenome: "ECMAScript 6",
    idade: 27
}

const insert = (db, nomeCollection, dado) => {
    return new Promise((resolve, reject) => {
        const collection = db.collection(nomeCollection)
        collection.insert(dado, (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

const find = (db, nomeCollection, condicao) =>{
    return new Promise((resolve, reject) => {
        const collection = db.collection(nomeCollection)
        collection.find(condicao, (err, result) =>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

MongoClient.connect('mongodb://localhost:27017/contato', async (err, db) => {
    await insert(db, 'pessoas', pessoa)

    const consulta = await find(db, 'pessoas', {})
    consulta.forEach(p => console.log(p))
})