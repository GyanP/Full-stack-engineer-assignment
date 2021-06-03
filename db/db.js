require('dotenv').config();

const Sequelize = require('sequelize');

//Establishing MySQL database connection using Sequelize

const db = new Sequelize(
  'd4pvnf0ub7fqkj',
  'asxaxoaoqxdzrk',
  'd7de2f29f37a1bacfd74256d7392a7967fbd217339a0b985d19ad8bef42a9c5a',
  {
    host: '117.207.212.88',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = db;
