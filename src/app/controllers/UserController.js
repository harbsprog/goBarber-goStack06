const { User } = require('../models')

class UserController {
  create(req, res) {
    return res.render('auth/signup')
  }

  async store(req, res) {
   await User.create(req.body)

   return res.redirect('/')
  }
}

module.exports = new UserController()