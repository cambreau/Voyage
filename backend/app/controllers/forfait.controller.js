const db = require("../models");
const Forfait = db.forfait;

// Créer et sauvegarder un nouveau forfait
exports.create = (req, res) => {
  const forfait = {
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
    image: req.body.image,
    categorieId: req.body.categorieId,
  };

  Forfait.create(forfait)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création du forfait.",
      });
    });
};

// Récupérer tous les forfaits de la base de données
exports.findAll = (req, res) => {
  Forfait.findAll({
    include: ["categorie"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des forfaits.",
      });
    });
};

// Trouver un forfait par son id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Forfait.findByPk(id, {
    include: ["categorie"],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible de trouver le forfait avec l'id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la récupération du forfait avec l'id=" + id,
      });
    });
};

// Mettre à jour un forfait par son id
exports.update = (req, res) => {
  const id = req.params.id;

  Forfait.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Le forfait a été mis à jour avec succès.",
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour le forfait avec l'id=${id}. Le forfait n'a peut-être pas été trouvé ou req.body est vide !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la mise à jour du forfait avec l'id=" + id,
      });
    });
};

// Supprimer un forfait avec l'id spécifié
exports.delete = (req, res) => {
  const id = req.params.id;

  Forfait.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Le forfait a été supprimé avec succès !",
        });
      } else {
        res.send({
          message: `Impossible de supprimer le forfait avec l'id=${id}. Le forfait n'a peut-être pas été trouvé !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Impossible de supprimer le forfait avec l'id=" + id,
      });
    });
};
