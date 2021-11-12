
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async login(req, res) {
      
      const user = await User.findOne({ where: {user_name : req.body.user_name}});
      

      if (user) {
        const password_valid = await bcrypt.compare(req.body.password, user.password)
        if(password_valid){
            res.status(200).json(user);
        }else{
            res.status(400).json({ error : "Invalid password" });
        }
      }else{
        res.status(404).json({ error : "User does not exist" });
      }
    },

}