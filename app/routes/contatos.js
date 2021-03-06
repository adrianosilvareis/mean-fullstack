module.exports = (app) => {
  let controller = app.controllers.contatos

  app.route('/contatos')
    .get(controller.listarContatos)
    .post(controller.salvarContato)

  app.route('/contatos/:id')
    .get(controller.obterContato)
    .delete(controller.removerContato)
}
