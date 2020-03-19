
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('fornecedores', table =>{
      table.string('imagemUrl', 1000)
      table.string('telefone')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fornecedores')
};
