const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../config')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
