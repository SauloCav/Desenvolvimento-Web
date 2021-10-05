const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

sequelize.sync({
  alter: true,
});

const db = {};

db.posts = require("./post-model")(sequelize, Sequelize);
db.coments = require("./coment-model")(sequelize, Sequelize);

db.posts.hasMany(db.coments);
db.coments.belongsTo(db.posts);

module.exports = db;
