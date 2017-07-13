module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/flyshop_dev'
  },
  useNullAsDefault: true, 
  migrations: {
    directory: '../../migrations'
  }
};
