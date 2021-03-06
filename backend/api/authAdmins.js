const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const signinAdmin = async (req, res) => {
        if (!req.body.email || !req.body.senha) {
            return res.status(400).send('Informe usuário e senha! (Admin)')
        }

        const admin = await app.db('admins')
            .where({ email: req.body.email })
            .first()

        if (admin.deletedAt) {
            return res.status(400).send('Sua conta encotra-se bloqueada')
        }

        if (!admin) return res.status(400).send('admin não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.senha, admin.senha)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos! (admin)')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: admin.id,
            nome: admin.nome,
            email: admin.email,
            admin: admin.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 10)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateTokenAdmin = async (req, res) => {
        const adminData = req.body || null
        try {
            if(adminData) {
                const token = jwt.decode(adminData.token, authSecret)
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
    

    return { signinAdmin, validateTokenAdmin }
}