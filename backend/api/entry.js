module.exports = app => {
    const {existsOrError} = app.api.validation 

    const save = (req, res) => {
        const entry = {...req.body}
        if(req.params.id) entry.id = req.params.id 

        try {
            existsOrError(entry.quantidadeOleo, 'Quantidade de óleo não informada')
            existsOrError(entry.itemId, 'Ítem não informado')
        } catch (error) {
            res.status(400).send(error)
        }

        if(entry.id){
            app.db('entradas')
                .update(entry)
                .where({id: entry.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            entry.data = new Date()
            app.db('entradas')
                .insert(entry)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
                console.log(entry)
        }
            
    }

    const limit = 10

    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('entradas').count('id').first()
        const count = parseInt(result.count)

        app.db('entradas')
            .select('id', 'quantidadeOleo', 'itemId', 'quantidadeEsperada', 'quantidadeReal', 'data')
            .limit(limit).offset(page * limit - limit)
            .then(entries => res.json({data: entries, count, limit}))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('entradas')
            .where({id: req.params.id})
            .first()
            .then(entries => {
                entries.content = entries.content.toString()
                return res.json(entries)
            }).catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}