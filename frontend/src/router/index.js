import { createRouter, createWebHistory } from "vue-router";

import Accueil from "../views/Accueil.vue";
import Forfaits from "../views/Forfaits.vue";
import APropos from "../views/APropos.vue";
import Formulaire from "../views/Formulaire.vue";

const routes = [
  { path: "/", name: "Accueil", component: Accueil },
  { path: "/accueil", redirect: "/" },
  { path: "/forfaits", name: "Forfaits", component: Forfaits },
  { path: "/apropos", name: "APropos", component: APropos },
  {
    path: "/formulaire",
    name: "Formulaire",
    component: Formulaire,
  },
  {
    path: "/formulaire/:id",
    name: "FormulaireEdit",
    component: Formulaire,
    // Passe automatiquement les params de route en props au composant
    props: true,
  },
];

// Instancie le routeur de l'application avec l'historique HTML et les routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
