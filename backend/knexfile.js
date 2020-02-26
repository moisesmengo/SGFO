// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'sgfo',
    user:     'postegres',
    password: '12345'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
