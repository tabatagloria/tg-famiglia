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
        }catch {
            return res.status(404).json({erro: 'Not Found'});} 
        },

      
    async store(req, res) {
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
    },

};