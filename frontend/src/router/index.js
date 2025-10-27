import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Forfaits from "../views/Forfaits.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/forfaits", name: "Forfaits", component: Forfaits },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
