const controller = require('../controllers/index')()

module.exports = (app) => {
  app.get('/index', controller.index)
  app.get('/', controller.index)
}
