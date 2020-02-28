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
            existsOrError(fornecedor.nome, "Nome não informado")
            existsOrError(fornecedor.email, "E-mail não informado")
            existsOrError(fornecedor.cidade, "Cidade não informada")
            existsOrError(fornecedor.estado, "Estado não informado")
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

    const get = (req,res)=>{
        app.db('fornecedores')
            .select('id', 'nome', 'email')
            .then(fornecedores => res.json(fornecedores))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res)=>{
        app.db('fornecedores')
            .select('id', 'nome', 'email')
            .where({id : req.params.id})
            .first()
            .then(fornecedor => res.json(fornecedor))
            .catch(err => res.status(500).send(err))
    }

    return {save, getById, get}
}