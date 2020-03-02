const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const signinProvider = async (req, res) => {
        if (!req.body.email || !req.body.senha) {
            return res.status(400).send('Informe usuário e senha!')
        }

        const fornecedor = await app.db('fornecedores')
            .where({ email: req.body.email })
            .first()

        if (!fornecedor) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.senha, fornecedor.senha)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: fornecedor.id,
            nome: fornecedor.nome,
            email: fornecedor.email,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateTokenProvider = async (req, res) => {
        const providerData = req.body || null
        try {
            if(providerData) {
                const token = jwt.decode(providerData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signinProvider, validateTokenProvider }
}