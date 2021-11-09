const User = require('../models/User');

module.exports = {
    async index(req, res){
        try{
            const users = await User.findAll();
            return res.json(users);
        }catch(error){
            if(error){
                return res.status(404).json({erro: 'Not Found'});
            }
        }       
    },

    async store(req, res) {
        try{
        const { name, user_name, password } = req.body;

        const user = await User.create({ name, user_name, password });

        return res.status(200).json({ message: 'Cadastro realizado com sucesso' });
        }catch(error){
            if (error){
                return res.status(412).json({erro: 'Preenchimento inválido'});
            }
        }
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
