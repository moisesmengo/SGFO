const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    //função para criptografar a senha
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    const save = async (req, res) =>{
        const admin = { ...req.body }
        if(req.params.id) admin.id = req.params.id

        //algumas validações
        try{
            existsOrError(admin.nome, 'Nome não informado')
            existsOrError(admin.email, 'Email não informado')
            existsOrError(admin.senha, 'Senha não informada')
            existsOrError(admin.confirmarSenha, 'Confirmação de senha inválida')
            equalsOrError(admin.senha, admin.confirmarSenha, 'Senhas não correspondem')

            const adminFromDB = await app.db('admins')
                .where({email: admin.email}).first()

            if(!admin.id){
                notExistsOrError(adminFromDB, 'O e-mail já está cadastrado')
            }
            
        }catch(msg){
            return res.status(400).send(msg)
        }
        //criptografar a senha e excluir a confirmação de senha
        admin.senha = encryptPassword(admin.senha)
        delete admin.confirmarSenha
        //função para atualizar ou inserir
        if(admin.id){
            app.db('admins')
                .update(admin)
                .where({id: admin.id})
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('admins')
                .insert(admin)
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req,res)=>{
        app.db('admins')
            .select('id', 'nome', 'email')
            .then(admins => res.json(admins))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req,res)=>{
        app.db('admins')
            .select('id', 'nome', 'email')
            .where({id: req.params.id})
            .then(admin => res.json(admin))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) =>{
        const rowsDeleted =  await app.db('fornecedores')
            .where({id: req.params.id}).del()
            .then(_=> res.status(204).send())
            .catch(err => res.status(500).send)
        existsOrError(rowsDeleted, 'Fornecedor não encontrado')
    }

    return { save, get, getById, remove }
}