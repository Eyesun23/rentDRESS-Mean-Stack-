var path = require('path')
var users = require('../controllers/users.js')
var dress = require('../controllers/dresses.js')
module.exports = function(app) {
  app.post('/register', users.register)
  // app.get('/dresses', (req, res, next) =>{
  //   notes.show(req, res);
  // });
  // app.post('/dress', dress.create);
  app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./DressApp/dist/index.html"))
    })

}
