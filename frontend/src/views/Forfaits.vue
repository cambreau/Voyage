<template>
  <Catalogue
    :forfaits="forfaits"
    :categories="categories"
    @modifier-forfait="pageModifierForfait"
    @supprimer-forfait="supprimerForfait"
    @creer-forfait="pageCreerForfait"
  />
</template>

<script>
import Catalogue from "../components/Catalogue.vue";

export default {
  name: "Forfaits",
  components: {
    Catalogue,
  },
  data() {
    return {
      forfaits: [],
      categories: [],
    };
  },
  methods: {
    // Récupère la liste des forfaits depuis l'API
    async loadForfaits() {
      try {
        const response = await fetch("http://localhost:8080/api/forfaits");
        this.forfaits = await response.json();
      } catch (error) {
        console.error("Erreur lors du chargement des forfaits:", error);
      }
    },

    // Récupère la liste des catégories depuis l'API
    async loadCategories() {
      try {
        const response = await fetch("http://localhost:8080/api/categories");
        this.categories = await response.json();
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    },

    // Navigue vers la page d'édition pour le forfait donné
    pageModifierForfait(forfait) {
      this.$router.push(`/formulaire/${forfait.id}`);
    },

    // Navigue vers la page de création d'un nouveau forfait
    pageCreerForfait() {
      this.$router.push("/formulaire");
    },

    // Supprime un forfait puis met à jour la liste localement
    async supprimerForfait(forfaitId) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/forfaits/${forfaitId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          this.forfaits = this.forfaits.filter((f) => f.id !== forfaitId);
          console.log("Forfait supprimé:", forfaitId);
        }
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    },
  },

  // Charge forfaits et catégories à la création de la vue
  async created() {
    await Promise.all([this.loadForfaits(), this.loadCategories()]);
  },
};
</script>
