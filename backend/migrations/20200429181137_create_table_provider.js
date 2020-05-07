exports.up = function(knex, Promise) {
    return knex.schema.createTable('fornecedores', table =>{
        table.increments('id').primary()
        table.string('estabelecimento').notNull()
        table.string('referencia').notNull()
        table.string('email').notNull().unique()
        table.string('senha').notNull()
        table.string('telefone').notNull()
        table.string('responsavel').notNull()
        table.string('cidade').notNull()
        table.string('estado').notNull()
        table.string('endereco').notNull()
        table.timestamp('deletedAt')
        table.boolean('bloqueado').notNull().defaultTo(true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fornecedores')
  };
  
