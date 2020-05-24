exports.up = function(knex, Promise) {
  return knex.schema.createTable('entradas', table => {
      table.increments('id').primary()
      table.float('quantidadeOleo').notNull()
      table.integer('itemId').references('id').inTable('itens').notNull()
      table.integer('quantidadeEsperada')
      table.integer('quantidadeReal')
      table.timestamp('data')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entradas')
};
