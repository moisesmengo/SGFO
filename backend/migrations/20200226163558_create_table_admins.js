
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', table =>{
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('email').notNull().unique()
    table.string('senha').notNull()
    table.boolean('admin').notNull().defaultTo(true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins')
};
