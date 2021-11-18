const User = require('../models/User');
const bcrypt = require('bcryptjs');



module.exports = {

    async index(req, res){
        try{
            const users = await User.findAll({
                attributes: ['name', 'user_name'],
            });
            return res.send(users);
        }catch(error){
            if(error){
                return res.status(404).send({erro: 'Not Found'});
            }
        }       
    },

    async store(req, res) {
           try{
            const { password } = req.body;
            const hash  = await bcrypt.hash(password, 10);
            req.body.password = hash;
            
            const {name, user_name} = req.body
            const user = await User.findOne({ where: {user_name : req.body.user_name}});

            if (user) {
                return res.status(400).send({message: 'Usuário já cadastrado no sistema'});
            } 
            const cadastro = await User.create(req.body);
            return res.status(200).send({ message: 'Cadastro realizado com sucesso' }); 
           } catch(error){
               if(error){
                   return res.status(400).send({message: 'Not found'});
               }
           }       
        },


    async delete(req, res){
        try{
        const user_delete = await User.findByPk(req.body.id);    
        user_delete.destroy();

        return res.status(200).send({ message: 'Usuário deletado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).send({erro: 'Usuário não encontrado'});
            }
        }
    },

    async update(req, res){
        try{
        const user_update = await User.findByPk(req.body.id);
        const { password } = req.body;
        const hash  = await bcrypt.hash(password, 10);
        req.body.password = hash;
        const {name, user_name} = await user_update.update(req.body);
        
        const resultadoSave = await user_update.save();

        return res.status(201).send({ message: 'Usuário atualizado com sucesso' });
        }catch(error) {
            if (error){
                return res.status(404).send({erro: 'User Not Found'});
            }
        }
        
    },
    }
    
