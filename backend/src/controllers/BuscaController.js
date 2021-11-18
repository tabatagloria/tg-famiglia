const { Op, Sequelize} = require('sequelize');
const Familiar = require('../models/Familiar');
const Documento = require('../models/Documento');


module.exports = {
    async show(req, res) {
        try{
            const nome = req.body;
            nome.toString().toLowerCase();

            const familiar = await Familiar.findAll({
                attribute: [ 'nome', [Sequelize.fn('lower', Sequelize.col('nome'))] ],
                where: {
                    nome:
                        {
                            [Op.like]: `%${req.body.nome}%`
                        },                
                },
                include: [{
                    association: 'documentos',
                    attribute: ['local'],
                    through: { 
                        attributes: []
                    }
                }]
                
            });
            return res.send(familiar);
            }catch(error){
                if (error){
                    return res.status(404).json({erro: 'Usuário não encontrado'});
                }
        } 
    }
}