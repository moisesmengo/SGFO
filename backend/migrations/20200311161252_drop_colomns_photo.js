
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('fornecedores', table=>{
    table.dropColumn('imagem')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('fornecedores', table=>{
        table.dropColumn('imagem')
      })
};
