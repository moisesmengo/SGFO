const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const cors = require('cors')
const multer = require('multer')

app.use(multer({
    dest:"./uploads"
}).single('img'))

app.db = db

app.use(cors())

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000 || process.env.PORT , () => {
    console.log("Backend rodando...")
})