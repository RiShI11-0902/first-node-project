const jwt = require('jsonwebtoken');
const modal = require('../modal/user')
const User = modal.User


exports.createUser = async (req, res) => {
    const user = new User(req.body)
    var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
    user.token = token
   
    try {
     await user.save();
     // console.log(User);
     res.status(201).json(user);
   } catch (error) {
     console.log(error);
   }
   };