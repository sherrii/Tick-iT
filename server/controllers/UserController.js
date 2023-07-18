const User = require('../models/userModel');

const UserController = {

  createUser(req, res, next) {

    const {username,password} = req.body;

    if(!username || !password) return next('Caught error in createUser');
    
    User.create({ username,password })
    .then(user => {
      console.log('user created sucessfully:', user);
      res.locals.user = user;
      return next();
    })
    .catch(err => {
      console.error('Caught error in User.create', err);
      return res.status(400).send('Caught error in User.create');
    });
    
  },

  verifyUser(req, res, next) {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return next('Caught error in createUser');
    }
  
    User.findOne({ username })
      .then(user => {
        if (!user) {
          // user with provided username not found
          return next('User not found');
        }
  
        // check if password matches
        if (user.password !== password) {
          return next('Incorrect password');
        }
  
        console.log('user is found!', user);
  
        res.locals.isVerified = true;
        return next();
      })
      .catch(err => {
        console.error(err);
        return next(`caught error in verifyUser: ${err}`);
      });
  }
  
  

  // updateUser (req,res,next) {
  //   const {}
  // }

};

module.exports = UserController;