module.exports = app => {
    const limit = 10
    const { existsOrError } = app.api.validation
    
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('fornecedores').count('id').first()
        const count = parseInt(result.count)

        app.db('fornecedores')
            .select('id','estabelecimento','email', 'cidade')
            .whereNull('deletedAt')
            .where('bloqueado', true)
            .limit(limit).offset(page * limit - limit)
            .then(fornecedores => res.json({data:fornecedores, count, limit}))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('fornecedores')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Fornecedor não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return {get, remove}
}