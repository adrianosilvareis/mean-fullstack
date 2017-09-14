module.exports = (app) => {
  let controller = app.controllers.contatos

  app.get('/contatos', controller.listarContatos)
  app.get('/contatos/:id', controller.obterContato)

  app.delete('/contatos/:id', controller.removerContato)
}
