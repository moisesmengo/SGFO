
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', table => {
    table.increments('id').primary()
    table.string('nome').notNull()
    table.string('email').notNull().unique()
    table.string('senha').notNull()
    table.timestamp('deletedAt')
    table.string('imagemUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins')
};
