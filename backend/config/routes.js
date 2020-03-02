module.exports = app =>{
    app.post('/signupAdmin', app.api.admin.save)
    app.post('/signinAdmin', app.api.authAdmins.signinAdmin)
    app.post('/validateTokenAdmin', app.api.authAdmins.validateTokenAdmin)

    app.post('/signinProvider', app.api.authProvider.signinProvider)
    app.post('/validateTokenProvider', app.api.authProvider.validateTokenProvider)
    
    app.route('/admins')
        .post(app.api.admin.save)
        .get(app.api.admin.get)

    app.route('/admins/:id')
        .get(app.api.admin.getById)
        .put(app.api.admin.save)
        .delete(app.api.admin.remove)
    
    app.route('/fornecedores')
        .post(app.api.provider.save)
        .get(app.api.provider.get)

    app.route('/fornecedores/:id')
        .get(app.api.provider.getById)
        .put(app.api.provider.save)
        .delete(app.api.provider.remove)
        
}