const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res)=>{
        const fornecedor = { ...req.body }
        if(req.params.id) fornecedor.id = req.params.id

        try {
            existsOrError(fornecedor.estabelecimento, "Estabelecimento não informado")
            existsOrError(fornecedor.email, "E-mail não informado")
            existsOrError(fornecedor.cidade, "Cidade não informada")
            existsOrError(fornecedor.estado, "Estado não informado")
            existsOrError(fornecedor.referencia, "Ponto de referência não informado")
            existsOrError(fornecedor.responsavel, "Funcionário responsável não informado")
            existsOrError(fornecedor.telefone, "Telefone não informado")
            existsOrError(fornecedor.endereco, "Endereço não informado")
            existsOrError(fornecedor.senha, "Senha não informada")
            existsOrError(fornecedor.confirmarSenha, "Confirmação de senha inválida")
            equalsOrError(fornecedor.senha, fornecedor.confirmarSenha, "Senhas não correspondem")

            const providerFromDB = await app.db('fornecedores')
                .where({email: fornecedor.email}).first()

            if(!fornecedor.id){
                notExistsOrError(providerFromDB, 'O e-mail já está cadastrado')
            }

        } catch (msg) {
            return res.status(400).send(msg)
        }

        fornecedor.senha = encryptPassword(fornecedor.senha)
        delete fornecedor.confirmarSenha

        if(fornecedor.id){
            app.db('fornecedores')
                .update(fornecedor)
                .whereNull('deletedAt')
                .where({id: fornecedor.id})
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('fornecedores')
                .insert(fornecedor)
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //consultas paginadas
    const limit = 5

    const get = async (req, res)=>{
        const page = req.query.page || 1

        const result = await app.db('fornecedores').count('id').first()
        const count = parseInt(result.count)

        app.db('fornecedores')
            .select('id','estabelecimento','email', 'cidade')
            .whereNull('deletedAt')
            .limit(limit).offset(page * limit - limit)
            .then(fornecedores => res.json({data:fornecedores, count, limit}))
            .catch(err => res.status(500).send(err))
    }
        
    const getById = (req,res)=>{
        app.db('fornecedores')
            .where({id: req.params.id})
            .first()
            .then(fornecedor =>{
                res.json(fornecedor)
            })
            .catch(err => res.status(500).send(err))
    }

    const block = async (req, res)=>{
        try {
            const rowsUpdated = await app.db('fornecedores')
                .update({deletedAt: new Date()})
                .where({id: req.params.id})
            existsOrError(rowsUpdated, 'Usuário não foi encontrado')

            res.status(204).send()
        } catch (error) {
            res.status(400).send(error)
        }
    }

    return {save, getById, get, block}
}