module.exports = (app) => {
  let controller = {}

  controller.index = (req, res, next) => {
    res.render('index', {nome: 'Express'})
  }

  return controller
}
