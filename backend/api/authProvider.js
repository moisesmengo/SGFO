const { authSecretProvider } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const signinProvider = async (req, res) => {

        if (!req.body.email || !req.body.senha) {
            return res.status(400).send('Informe usuário e senha! (Fornecedor)')
        }
        

        const fornecedor = await app.db('fornecedores')
            .where({ email: req.body.email })
            .first()

            if (fornecedor.bloqueado) {
                return res.status(400).send('Fornecedor bloqueado ou aguardando aprovação')
            }

        if (!fornecedor) return res.status(400).send('Fornecedor não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.senha, fornecedor.senha)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos! (Fornecedor)')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: fornecedor.id,
            estabelecimento: fornecedor.estabelecimento,
            email: fornecedor.email,
            referencia: fornecedor.referencia,
            telefone: fornecedor.telefone,
            responsavel: fornecedor.responsavel,
            cidade: fornecedor.cidade,
            estado: fornecedor.estado,
            endereco: fornecedor.endereco,
            bloqueado: fornecedor.bloqueado,

            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecretProvider)
        })
    }

    const validateTokenProvider = async (req, res) => {
        const providerData = req.body || null
        try {
            if(providerData) {
                const token = jwt.decode(providerData.token, authSecretProvider)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(err) {
            return Promise.reject('Oops!').catch(err => {
                throw new Error(err);
              });
        }

        res.send(false)
    }
    

    return { signinProvider, validateTokenProvider }
}