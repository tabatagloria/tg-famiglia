const Familiar = require('../models/Familiar');
const User = require('../models/User');
const Documento = require('../models/Documento');


module.exports= {
        
    async store(req, res) {
        const { familiar_id } = req.params;

        const { local } = req.body;

        const familiar = await Familiar.findByPk(familiar_id);

        if(!familiar){
            return res.status(400).json({ error: 'User not found'});
        }

        const [ docs ] = await Documento.findOrCreate({
            where: { local }
        });
        await familiar.addDocumento(docs);

        return res.json(docs);
    },
 
};