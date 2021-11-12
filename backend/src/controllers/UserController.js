const User = require('../models/User');
const bcrypt = require('bcryptjs');



module.exports = {

    async index(req, res){
        try{
            const users = await User.findAll({
                attributes: ['name', 'user_name'],
            });
            return res.json(users);
        }catch(error){
            if(error){
                return res.status(404).json({erro: 'Not Found'});
            }
        }       
    },

    async store(req, res) {
        
        const { password } = req.body;
        const hash  = await bcrypt.hash(password, 10);
        req.body.password = hash;

        const {name, user_name} = await User.create(req.body);

        return res.status(200).json({ message: 'Cadastro realizado com sucesso' });
    },

    async delete(req, res){
        try{
        const user_delete = await User.findByPk(req.body.id);
        user_delete.destroy();

        return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).json({erro: 'Usuário não encontrado'});
            }
        }
    },

    async update(req, res){
        try{
        const user_update = await User.findByPk(req.body.id);
        user_update.update(req.body);

        const resultadoSave = await user_update.save();

        return res.status(201).json({ message: 'Usuário atualizado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).json({erro: 'Usuário não encontrado'});
            }
        }
    },
    }
