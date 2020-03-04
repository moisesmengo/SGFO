
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('fornecedores', table =>{
      table.timestamp('deletedAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('fornecedores', table =>{
      table.dropColumn('deletedAt')
  })
};
