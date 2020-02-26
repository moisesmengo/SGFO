module.exports = app =>{
    app.route('/admins')
        .post(app.api.admin.save)
}