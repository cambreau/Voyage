<template>
  <FormulaireForfait
    :forfait="forfaitAEditer"
    :categories="categories"
    @sauvegarder="sauvegarderForfait"
  />
</template>

<script>
import FormulaireForfait from "../components/FormulaireForfait.vue";

export default {
  name: "FormulaireView",
  components: {
    FormulaireForfait,
  },
  data() {
    return {
      forfaitAEditer: null,
      categories: [],
    };
  },
  methods: {
    // Charge la liste des catégories depuis l'API
    async loadCategories() {
      try {
        const response = await fetch("http://localhost:8080/api/categories");
        this.categories = await response.json();
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    },

    // Charge le forfait courant depuis l'API s'il y a un id dans l'URL
    async loadForfait() {
      try {
        const forfaitId = this.$route.params.id;
        if (forfaitId) {
          const res = await fetch(
            `http://localhost:8080/api/forfaits/${forfaitId}`
          );
          const data = await res.json();
          this.forfaitAEditer = data;
        } else {
          this.forfaitAEditer = null;
        }
      } catch (error) {
        console.error("Erreur lors du chargement du forfait:", error);
      }
    },

    // Crée ou met à jour un forfait via l'API
    async sauvegarderForfait(forfaitData) {
      try {
        let response;
        const url = "http://localhost:8080/api/forfaits";

        if (forfaitData.id) {
          response = await fetch(`${url}/${forfaitData.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(forfaitData),
          });
        } else {
          response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(forfaitData),
          });
        }

        if (response.ok) {
          console.log("Forfait sauvegardé avec succès");
          this.$router.push("/forfaits");
        } else {
          console.error("Erreur lors de la sauvegarde");
        }
      } catch (error) {
        console.error("Erreur lors de la sauvegarde:", error);
      }
    },
  },

  // Initialise automatiquement le formulaire à la création du composant
  async created() {
    await this.loadCategories();
    await this.loadForfait();
  },
  // Observe les changements d'id dans l'URL et recharge le forfait correspondant
  watch: {
    "$route.params.id"() {
      this.loadForfait();
    },
  },
};
</script>
