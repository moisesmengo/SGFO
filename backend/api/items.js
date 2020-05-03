module.exports = app =>{
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = async (req, res) =>{
        const item = {...req.body}
        if(req.params.id) item.id = req.params.id

        try{
            existsOrError(item.nome, 'Nome não informado')
            existsOrError(item.descricao, 'Descrição não informada')

            const itemFromDb = await app.db('itens')
                .where({nome: item.nome}).first()

            if(!item.id){
                notExistsOrError(itemFromDb, 'O item já está cadastrado')
            }

        }catch(msg){
            res.status(400).send(msg)
        }

        if(item.id){
            app.db('itens')
                .update(item)   
                .where({id: item.id})
                .whereNull('deletedAt')           
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('itens')
                .insert(item)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const limit = 12

    const get = async (req, res) =>{
        const page = req.query.page || 1

        const result = await app.db('itens').count('id').first()
        const count = parseInt(result.count)

        app.db('itens')
            .select('id', 'nome', 'imagemUrl', 'descricao', 'qtdEstoque')
            .whereNull('deletedAt')
            .limit(limit).offset(page * limit - limit)
            .then(items => res.json({data:items, count, limit}))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) =>{
        app.db('itens')
            .where({ id: req.params.id })
            .first()
            .then(item => res.json(item))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res)=>{
        try {
            const rowsUpdated = await app.db('itens')
                .update({deletedAt: new Date()})
                .where({id: req.params.id})
            existsOrError(rowsUpdated, 'Item não foi encontrado')

            res.status(204).send()
        } catch (error) {
            res.status(400).send(error)
        }
    }

    return {save, get, getById, remove}
}