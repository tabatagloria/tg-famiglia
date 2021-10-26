const Cadastro_familia = require('../models/Cadastro_familia');
const User = require('../models/User');


module.exports = {
    async index(req, res){
        const { user_id } = req.params;
        
        const user = await User.findByPk(user_id, { 
            include: { association: 'cadastros_familia' }
         });

         return res.json(user);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { nome, 
            parentesco, 
            data_nascimento, 
            local_nascimento, 
            casado, 
            nome_conjuge, 
            data_casamento,
            local_casamento, 
            falecido, 
            data_obito, 
            local_obito } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        const cadastro_familia = await Cadastro_familia.create({
            nome, 
            parentesco, 
            data_nascimento, 
            local_nascimento, 
            casado, 
            nome_conjuge, 
            data_casamento,
            local_casamento, 
            falecido, 
            data_obito, 
            local_obito,
            user_id,
        });

        return res.json(cadastro_familia);
    },

};