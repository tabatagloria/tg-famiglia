const Familiar = require('../models/Familiar');
const User = require('../models/User');
const Documento = require('../models/Documento');


module.exports= {
    async index(req, res){
        const { user_id } = req.params;
        const { familiar_id } = req.params;

        const user = await User.findByPk(user_id);
        const familiar = await Familiar.findByPk(familiar_id, {
            include: {association: 'documentos',
            attributes: ['local'],
            through: { 
                attributes: []}
         } }); 
        return res.json(familiar.documentos);

    },
    async store(req, res) {
        try{
            const { user_id } = req.params;
            const { familiar_id } = req.params;

            const { local } = req.body;
    
            const user = await User.findByPk(user_id);
            const familiar = await Familiar.findByPk(familiar_id);
    
            if(!user || !familiar){
                return res.status(400).json({ error: 'User not found'});
            }
    
            const [ docs ] = await Documento.findOrCreate({
                where: { local }
            });
            await familiar.addDocumento(docs);
    
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
        const { familiar_id } = req.params;
        const { local_id } = req.params;

        const user = await User.findByPk(user_id);
        const familiar = await Familiar.findByPk(familiar_id);

        if(!user || !familiar){
            return res.status(400).json({ error: 'User not found'});
        }

        const local_update = await Documento.findByPk(local_id);
        local_update.update(req.body);

        const resultadoSave = await local_update.save();
        
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
        const { familiar_id } = req.params;
        const { local } = req.body;

        const user = await User.findByPk(user_id);
        const familiar = await Familiar.findByPk(familiar_id);
    
        if(!user || !familiar){
            return res.status(400).json({ error: 'User not found'});
        }
        const docs = await Documento.findOne({
            where: { local }
        });
        await familiar.removeDocumento(docs);

        return res.status(200).json({ message: 'Cadastro deletado com sucesso' });
        }catch(error){
            if (error){
                return res.status(404).json({erro: 'Cadastro não encontrado'});
            }
        }
    }
};