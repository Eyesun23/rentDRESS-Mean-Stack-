var mongoose = require('mongoose')

var User = mongoose.model('User')

module.exports = {
  register: function(req, res){
    console.log("we're in user controller", req.body)
    User.findOne({email: req.body.email}, function(err,user){
      if(err){
        console.log(err)
        res.status(500).json({message: "AHH"})
      }
      else{
        if(user){
          console.log(err)
          res.status(500).json({message: "You have already registered with us!"})
        }
        else{
          var user = new User(req.body)
          user.save(function(err){
            if(err){
              console.log("error")
            }
            else{
              res.json({user: user, message: "Created"})
            }
          })
        }
      }
    })

  }
}
