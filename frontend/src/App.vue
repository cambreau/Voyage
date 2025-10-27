<template>
  <div class="min-h-screen flex flex-col">
    <HeroHeader />
    <main class="flex-1 pt-4">
      <div id="accueil" class="mb-16">
        <h1 class="text-4xl font-bold text-center text-agency-dark mb-8">
          Bienvenue chez Nomadica
        </h1>
        <p class="text-center text-agency-secondary text-lg">
          Votre agence de voyage pour des expériences inoubliables
        </p>
      </div>
      <div id="forfaits">
        <Catalogue :forfaits="forfaits" :categories="categories" />
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import HeroHeader from "./components/HeroHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import Catalogue from "./components/Catalogue.vue";

export default {
  name: "App",
  components: {
    HeroHeader,
    MainFooter,
    Catalogue,
  },
  data() {
    return {
      forfaits: [],
      categories: [],
    };
  },
  methods: {
    async loadForfaits() {
      try {
        const response = await fetch("/src/forfaits.json");
        this.forfaits = await response.json();
      } catch (error) {
        console.error("Erreur lors du chargement des forfaits:", error);
      }
    },
    async loadCategories() {
      try {
        const response = await fetch("/src/categories.json");
        this.categories = await response.json();
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    },
  },
  async mounted() {
    await Promise.all([this.loadForfaits(), this.loadCategories()]);
  },
};
</script>
