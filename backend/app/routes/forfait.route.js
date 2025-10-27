module.exports = (app) => {
  const forfaits = require("../controllers/forfait.controller.js");

  // Créer un nouveau forfait
  app.post("/api/forfaits", forfaits.create);

  // Récupérer tous les forfaits
  app.get("/api/forfaits", forfaits.findAll);

  // Récupérer un forfait par son id
  app.get("/api/forfaits/:id", forfaits.findOne);

  // Mettre à jour un forfait par son id
  app.put("/api/forfaits/:id", forfaits.update);

  // Supprimer un forfait par son id
  app.delete("/api/forfaits/:id", forfaits.delete);
};
