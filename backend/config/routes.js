module.exports = app =>{
    app.route('/admins')
        .post(app.api.admin.save)
        .get(app.api.admin.get)

    app.route('/admins/:id')
        .get(app.api.admin.getById)
        .put(app.api.admin.save)
}