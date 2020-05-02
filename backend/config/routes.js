
module.exports = app =>{
    app.post('/signupAdmin', app.api.admin.save)
    app.post('/signinAdmin', app.api.authAdmins.signinAdmin)
    app.post('/validateTokenAdmin', app.api.authAdmins.validateTokenAdmin)

    app.post('/signinProvider', app.api.authProvider.signinProvider)
    app.post('/validateTokenProvider', app.api.authProvider.validateTokenProvider)
    
    app.route('/admins')
        //.all(app.config.passport.authenticate())
        .post((app.api.admin.save))
        .get((app.api.admin.get))

    app.route('/admins/:id')
        //.all(app.config.passport.authenticate())
        .get((app.api.admin.getById))
        .put((app.api.admin.save))
        .delete((app.api.admin.remove))        
    
    app.route('/fornecedores')
        .get((app.api.provider.get))
        .post(app.api.provider.save)

    app.route('/fornecedores/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.provider.getById)
        .put(app.api.provider.save)
        .delete(app.api.provider.block)

    app.route('/itens')
        .post(app.api.items.save)
        .get(app.api.items.get)
    
    app.route('/itens/:id')
        .get(app.api.items.getById)
        .put(app.api.items.save)
        .delete(app.api.items.remove)
}