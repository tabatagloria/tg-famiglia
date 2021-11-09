module.exports = {
   
    async store(req, res) {
        try{
        const { mulher, ano_casamento, ano_nascimento } = req.body;

        if(mulher === 'não'){
            return res.status(200).json({message: 'Cidadania via administrativa'});
        }
        if(mulher === 'sim'){
            if(ano_casamento >= 1948){
                return res.status(200).json({message: 'Cidadania via administrativa'});
            } else if(ano_casamento <= 1948 && ano_nascimento >= 1948){
                return res.status(200).json({message: 'Cidadania via administrativa'});
            } else{
                return res.status(200).json({message: 'Cidadania via judicial'});
            }
        }
        return res.status(200).json({ message: 'Cadastro realizado com sucesso' });
        }catch(error){
            if (error){
                return res.status(412).json({erro: 'Preenchimento inválido'});
            }
        }
    },
}
