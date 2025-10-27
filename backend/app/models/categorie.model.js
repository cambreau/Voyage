// Modèle de catégorie
module.exports = (sequelize, Sequelize) => {
  const Categorie = sequelize.define("categorie", {
    // Identifiant unique de la catégorie
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Nom de la catégorie
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // Description de la catégorie
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });

  return Categorie;
};
