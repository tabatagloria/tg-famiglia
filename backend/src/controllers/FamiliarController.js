const Familiar = require('../models/Familiar');
const User = require('../models/User');

module.exports= {
    async store(req, res) {
        const { user_id } = req.params;
        const { nome, 
            parentesco, 
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
            parentesco, 
            data_nascimento, 
            casado, 
            data_casamento,
            falecido, 
            data_obito, 
            user_id,
        })
        return res.status(200).json({ message: 'Cadastro realizado com sucesso' });
    }
};