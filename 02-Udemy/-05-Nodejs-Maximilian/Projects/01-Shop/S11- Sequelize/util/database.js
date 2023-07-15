const Sequelize = require('sequelize');

const sequelize = new Sequelize("node_complete", "root", "k000000", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
