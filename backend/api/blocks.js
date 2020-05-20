module.exports = app =>{

    const limit = 5

    const getBlocksProvider = async (req, res)=>{
        const page = req.query.page || 1

        const result = await app.db('fornecedores').count('id').first()
        const count = parseInt(result.count)
        
        app.db('fornecedores')
            .select('id','estabelecimento','email', 'cidade')
            .whereNotNull('deletedAt')
            .limit(limit).offset(page * limit - limit)
            .then(fornecedores => res.json({data:fornecedores, count, limit}))
            .catch(err => res.status(500).send(err))
    }

    const getRemovedsAdmin = async (req, res)=>{
        const page = req.query.page || 1

        const result = await app.db('admins').count('id').first()
        const count = parseInt(result.count)
        
        app.db('admins')
            .select('id','nome','email')
            .whereNotNull('deletedAt')
            .limit(limit).offset(page * limit - limit)
            .then(admins => res.json({data:admins, count, limit}))
            .catch(err => res.status(500).send(err))
    }

    return {getBlocksProvider, getRemovedsAdmin}
}