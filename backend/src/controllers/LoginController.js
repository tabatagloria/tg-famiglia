const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
    async login(req, res) {
      const user = await User.findOne({ where: {user_name : req.body.user_name}});
      
      if (user) {
        const password_valid = await bcrypt.compare(req.body.password, user.password)
        if(password_valid){
            user.password = undefined;
            const user_id = await User.findByPk();
            const token = jwt.sign({ id: user.id }, authConfig.secret, { 
            expiresIn: 86400,
        });
            res.status(200).send({user, auth: true, token});
        }else{
            res.status(400).send({ error : "Invalid password" });
        }
      }else{
        res.status(404).send({ error : "User does not exist" });
      }
    },
    
    async logout(req, res){
      res.send({auth: false, token: null });
    }
}