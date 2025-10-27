// Importer les dépendances nécessaires
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Configuration CORS pour autoriser les requêtes depuis le frontend
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOption));

// Parser les requêtes JSON et URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route de bienvenue
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Nomadica" });
});

// Connexion à la base de données
const db = require("./app/models");
db.sequelize.sync();

// Importer les routes
require("./app/routes/forfait.route")(app);
require("./app/routes/categorie.route")(app);

// Démarrage du serveur
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}.`);
});
