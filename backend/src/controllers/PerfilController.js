const Perfil = require('../models/Perfil');
const User = require('../models/User');


module.exports= {
    async index(req, res){
        try{
            const  { user_id } = req.params;
            const user = await User.findByPk(user_id, {
                include: { association: 'perfil' }
            });
    
            return res.json(user.perfil); 
        }catch(error) {
            if(error){
                return res.status(404).json({erro: 'Not Found'});
            }
        } 
    },

    async store(req, res) {
        try{
            const { user_id } = req.params;
        const { email, 
            data_nascimento, 
            sobrenomes} = req.body;
                
        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }
        const cadastro_perfil = await Perfil.create({
            email, 
            data_nascimento, 
            sobrenomes,
            user_id
        })
        return res.status(200).json({ message: 'Cadastro realizado com sucesso' });  
        } catch(error){
            if(error){
                return res.status(404).json({erro: 'Not Found'});
            }
        }
        
    },
    async update(req, res){
        try{
            const { user_id } = req.params;        
            const user = await User.findByPk(user_id);

            if(!user){
                return res.status(400).send({ error: 'User not found'});
            }

            const perfil_update = await Perfil.findByPk(req.body.id);
            perfil_update.update(req.body);

            const resultadoSave = await perfil_update.save();
            
            return res.status(201).json({ message: 'Alteração realizada com sucesso' });
            }catch(error){
                if (error){
                    return res.status(404).send({erro: 'Usuário não encontrado'});
                }
            }
    },
    async delete(req, res){
        try{
        const { user_id } = req.params;        
        const user = await User.findByPk(user_id);
    
        if(!user){
            return res.status(400).send({ error: 'User not found'});
        }
        const perfil_delete = await Perfil.findByPk(req.body.id);
        perfil_delete.destroy();

        return res.status(200).send({ message: 'Perfil deletado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).send({erro: 'Perfil não encontrado'});
            }
        }
    }
};