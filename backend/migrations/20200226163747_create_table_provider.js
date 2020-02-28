
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fornecedores', table =>{
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('email').notNull().unique()
      table.string('senha').notNull()
      table.string('cidade').notNull()
      table.string('estado').notNull()
      table.string('endereco').notNull()
      table.string('imagem', 1000)
      table.boolean('admin').notNull().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fornecedores')
};
