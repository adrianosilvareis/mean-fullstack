module.exports = (app) => {
  let controller = {}

  let contatos = [
    {_id: 1, nome: 'contato 1', email: 'cont1@email.com'},
    {_id: 2, nome: 'contato 2', email: 'cont2@email.com'},
    {_id: 3, nome: 'contato 3', email: 'cont3@email.com'},
    {_id: 4, nome: 'contato 4', email: 'cont4@email.com'},
    {_id: 5, nome: 'contato 5', email: 'cont5@email.com'},
    {_id: 6, nome: 'contato 6', email: 'cont6@email.com'}
  ]
  controller.listarContatos = (req, res, next) => {
      res.json(contatos)
  }

  controller.obterContato = (req, res, next) => {
    let idContato = req.params.id
    let contato = contatos.filter(contato => contato.id == idContato)[0]

    contato ? res.json(contato) : res.status(404).send("Contato não encontrado")
  }

  controller.removerContato = (req, res, next) =>{
    let idContato = req.params.id

    contatos = contatos.filter(contato => idContato != contato._id)

    res.end()
  }

  return controller
}
