const admin = require('./admin')

module.exports = app =>{
    app.post('/signupAdmin', app.api.admin.save)
    app.post('/signinAdmin', app.api.authAdmins.signinAdmin)
    app.post('/validateTokenAdmin', app.api.authAdmins.validateTokenAdmin)

    app.post('/signinProvider', app.api.authProvider.signinProvider)
    app.post('/validateTokenProvider', app.api.authProvider.validateTokenProvider)
    
    app.route('/admins')
        //.all(app.config.passport.authenticate())
        .post(admin(app.api.admin.save))
        .get(admin(app.api.admin.get))

    app.route('/admins/:id')
        //.all(app.config.passport.authenticate())
        .get(admin(app.api.admin.getById))
        .put(admin(app.api.admin.save))
        .delete(admin(app.api.admin.remove))        
    
    app.route('/fornecedores')
        .get((app.api.provider.get))
        .post(app.api.provider.save)

    app.route('/fornecedores/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.provider.getById)
        .put(app.api.provider.save)
        .delete(app.api.provider.block)
        
}