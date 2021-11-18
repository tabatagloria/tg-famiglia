const Familiar = require('../models/Familiar');
const User = require('../models/User');
const Parentesco = require('../models/Parentesco');


module.exports= {
    async index(req, res){
        const { user_id } = req.params;
        const { familiar_id } = req.params;

        const user = await User.findByPk(user_id);
        const familiar = await Familiar.findByPk(familiar_id, {
            include: {association: 'parentescos',
            attributes: ['grau_parentesco'],
            through: { 
                attributes: []}
         } }); 
        return res.send(familiar.parentescos);

    },
   
    async store(req, res) {
        try{
            const { user_id } = req.params;
            const { familiar_id } = req.params;

            const { grau_parentesco } = req.body;
    
            const user = await User.findByPk(user_id);
            const familiar = await Familiar.findByPk(familiar_id);
    
            if(!user || !familiar){
                return res.status(400).json({ error: 'User not found'});
            }
    
            const [ parentesco ] = await Parentesco.findOrCreate({
                where: { grau_parentesco }
            });
            await familiar.addParentesco(parentesco);
    
            return res.status(200).send({ message: 'Cadastro realizado com sucesso' });
        }catch(error){
            if(error){
                return res.status(404).send({erro: 'Not Found'});
            }
        }
    },
   
    async delete(req, res){
        try{
        const { user_id } = req.params; 
        const { familiar_id } = req.params;
        const { grau_parentesco } = req.body;

        const user = await User.findByPk(user_id);
        const familiar = await Familiar.findByPk(familiar_id);
    
        if(!user || !familiar){
            return res.status(400).send({ error: 'User not found'});
        }
        const parentesco = await Parentesco.findOne({
            where: { grau_parentesco }
        });
        await familiar.removeParentesco(parentesco);

        return res.status(200).send({ message: 'Cadastro deletado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).send({erro: 'Cadastro não encontrado'});
            }
        }
    }
};