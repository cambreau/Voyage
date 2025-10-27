module.exports = (app) => {
  const categories = require("../controllers/categorie.controller.js");

  // Récupérer toutes les catégories
  app.get("/api/categories", categories.findAll);
};
