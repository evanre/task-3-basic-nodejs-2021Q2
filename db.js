require('dotenv').config();
const Sequelize = require('sequelize');

const { env } = process;

const sequelize = new Sequelize(env.DB, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'postgres',
  port: env.DB_PORT,
});

sequelize
  .authenticate()
  .then(() => console.log('Connected to DB'))
  .catch((e) => console.log(`Error: ${e}`));

module.exports = { sequelize, Sequelize };
