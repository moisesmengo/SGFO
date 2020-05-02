exports.up = function(knex, Promise) {
  return knex.schema.createTable('itens', table => {
    table.increments('id').primary()
    table.string('nome').notNull().unique()
    table.string('imagemUrl')
    table.string('descricao').notNull()
    table.integer('qtdEstoque').defaultTo(0)
    table.timestamp('deletedAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('itens')
};
