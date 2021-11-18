const Familiar = require('../models/Familiar');
const User = require('../models/User');
const Documento = require('../models/Documento');
const Parentesco = require('../models/Parentesco');



module.exports= {
    
    async index(req, res){
        try {
            const  { user_id } = req.params;
            const user = await User.findByPk(user_id, {
                include: {
                    association: 'familiares',
                }        
            });
            const familiar = await Familiar.findAll({
                include: [{
                    association: 'documentos',
                    attributes: ['local'],
                    through: { 
                        attributes: []
            } },
                    {
                        association: 'parentescos',
                        attributes: ['grau_parentesco'],
                        through: { 
                            attributes: []
                        }
                    }]         
            });   
             return res.send(familiar); 

        }catch(error){
            if(error){
                return res.status(404).send({erro: 'Not Found'});
            }
        }
    },

    async store (req, res) {
        try{
            const { user_id } = req.params;
        const { nome, 
            data_nascimento, 
            casado, 
            data_casamento,
            falecido, 
            data_obito} = req.body;
                
        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }
        const cadastro_familiar = await Familiar.create({
            nome, 
            data_nascimento, 
            casado, 
            data_casamento,
            falecido, 
            data_obito, 
            user_id,
        })
        return res.status(200).json({ message: 'Cadastro realizado com sucesso' });
        }catch(error) {
            if (error){
                return res.status(404).json({erro: 'Not Found'});
            }
        }
    },

    async update(req, res){
        try{

        const { user_id } = req.params;        
        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }

        const familiar_update = await Familiar.findByPk(req.body.id);
        familiar_update.update(req.body);

        const resultadoSave = await familiar_update.save();
        
        return res.status(201).json({ message: 'Alteração realizada com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).json({erro: 'Usuário não encontrado'});
            }
        }
    },
    async delete(req, res){
        try{
        const { user_id } = req.params;        
        const user = await User.findByPk(user_id);
    
        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }
        const familia_delete = await Familiar.findByPk(req.body.id);
        familia_delete.destroy();

        return res.status(200).json({ message: 'Cadastro deletado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).json({erro: 'Cadastro não encontrado'});
            }
        }
    }
};