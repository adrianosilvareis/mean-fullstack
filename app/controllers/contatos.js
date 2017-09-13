module.exports = (app) => {
  let controller = {}

  let contatos = [
    {id: 1, nome: 'contato 1', email: 'cont1@email.com'},
    {id: 2, nome: 'contato 2', email: 'cont2@email.com'},
    {id: 3, nome: 'contato 3', email: 'cont3@email.com'},
    {id: 4, nome: 'contato 4', email: 'cont4@email.com'},
    {id: 6, nome: 'contato 6', email: 'cont5@email.com'},
    {id: 5, nome: 'contato 5', email: 'cont6@email.com'}
  ]
  controller.listarContatos = (req, res, next) => {
      res.json(contatos)
  }

  controller.obterContato = (req, res, next) => {
    let idContato = req.params.id
    let contato = contatos.filter(contato => contato.id == idContato)[0]

    contato ? res.json(contato) : res.status(404).send("Contato não encontrado")
  }

  return controller
}
