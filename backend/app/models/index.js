const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importer les modèles
db.categorie = require("./categorie.model.js")(sequelize, Sequelize);
db.forfait = require("./forfait.model.js")(sequelize, Sequelize);

// Définir les associations
db.categorie.hasMany(db.forfait, { foreignKey: "categorieId", as: "forfaits" });
db.forfait.belongsTo(db.categorie, {
  foreignKey: "categorieId",
  as: "categorie",
});

module.exports = db;
