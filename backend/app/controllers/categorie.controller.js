const db = require("../models");
const Categorie = db.categorie;

// Récupérer toutes les catégories de la base de données
exports.findAll = (req, res) => {
  Categorie.findAll({
    include: ["forfaits"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des catégories.",
      });
    });
};
