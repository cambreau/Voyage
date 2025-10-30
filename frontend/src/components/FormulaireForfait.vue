<template>
  <section class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-agency-dark mb-8 text-center">
      {{ isEditing ? "Modifier le forfait" : "Nouveau forfait" }}
    </h2>

    <!-- Empêche le submit -->
    <form
      @submit.prevent="sauvegarderForfait"
      class="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <label
          for="nom"
          class="block text-sm font-medium text-agency-dark mb-2"
        >
          Nom du forfait
        </label>
        <input
          id="nom"
          name="nom"
          v-model="formData.nom"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agency-primary"
          required
          placeholder="Ex: Séjour à Paris"
        />
      </div>

      <div>
        <label
          for="description"
          class="block text-sm font-medium text-agency-dark mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          v-model="formData.description"
          rows="5"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agency-primary"
          required
          placeholder="Décrivez votre forfait..."
        ></textarea>
      </div>

      <div>
        <label
          for="image"
          class="block text-sm font-medium text-agency-dark mb-2"
        >
          URL de l'image
        </label>
        <input
          id="image"
          name="image"
          v-model="formData.image"
          type="url"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agency-primary"
          placeholder="https://exemple.com/image.jpg"
          required
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            for="prix"
            class="block text-sm font-medium text-agency-dark mb-2"
          >
            Prix ($)
          </label>
          <input
            id="prix"
            name="prix"
            v-model.number="formData.prix"
            type="number"
            min="0"
            step="0.01"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agency-primary"
            required
            placeholder="999"
          />
        </div>

        <div>
          <label
            for="categorie"
            class="block text-sm font-medium text-agency-dark mb-2"
          >
            Catégorie
          </label>
          <select
            id="categorie"
            name="categorie"
            v-model.number="formData.categorie"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agency-primary"
            required
          >
            <option value="">Sélectionner une catégorie</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.nom }}
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        class="px-6 py-2 bg-agency-primary text-white rounded hover:bg-agency-dark transition-colors ml-auto block"
      >
        {{ isEditing ? "Enregistrer" : "Créer" }}
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "FormulaireForfait",
  props: {
    forfait: {
      type: Object,
      default: null,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  emits: ["sauvegarder"],
  data() {
    return {
      formData: {
        nom: "",
        description: "",
        prix: 0,
        categorie: "",
        image: "",
      },
    };
  },
  // Propriétés calculées à partir des props/données locales
  computed: {
    isEditing() {
      return this.forfait !== null;
    },
  },
  // Observe les changements du prop forfait pour remplir/réinitialiser le formulaire
  watch: {
    forfait: {
      immediate: true,
      handler(newForfait) {
        if (newForfait) {
          this.formData = {
            nom: newForfait.nom || "",
            description: newForfait.description || "",
            prix: newForfait.prix || 0,
            categorie: newForfait.categorieId || newForfait.categorie || "",
            image: newForfait.image || "",
          };
        } else {
          this.formData = {
            nom: "",
            description: "",
            prix: 0,
            categorie: "",
            image: "",
          };
        }
      },
    },
  },
  methods: {
    sauvegarderForfait() {
      const forfaitData = {
        nom: this.formData.nom,
        description: this.formData.description,
        prix: this.formData.prix,
        image: this.formData.image,
        categorieId: this.formData.categorie,
        id: this.forfait?.id,
      };
      this.$emit("sauvegarder", forfaitData);
    },
  },
};
</script>
