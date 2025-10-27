// Modèle de forfait
module.exports = (sequelize, Sequelize) => {
  const Forfait = sequelize.define("forfait", {
    // Identifiant unique du forfait
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Nom du forfait
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // Description du forfait
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    // Prix du forfait
    prix: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    // URL de l'image du forfait
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    // Identifiant de la catégorie associée
    categorieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
  });

  return Forfait;
};
