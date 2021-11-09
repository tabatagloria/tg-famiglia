const { Op } = require('sequelize');
const Familiar = require('../models/Familiar');
const Documento = require('../models/Documento');

module.exports = {
    async show(req, res) {
        const nome = req.body;
        const familiar = await Familiar.findAll({
            attribute: [ 'nome' ],
            where:{
                nome: {
                    [Op.like]: `%${req.body.nome}%`
                  }
            },
            include: [{
                association: 'documentos'
            }]
            
        });
        return res.json(familiar);
    }
}