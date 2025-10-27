<template>
  <section
    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6"
  >
    <h3 class="text-xl font-bold text-agency-dark mb-2">
      {{ forfait.nom }}
    </h3>

    <span
      class="inline-block bg-agency-light text-agency-secondary px-3 py-1 rounded-full text-sm mb-3"
    >
      {{ getCategoryName(forfait.categorie) }}
    </span>

    <p class="text-agency-secondary mb-4 text-sm leading-relaxed">
      {{ forfait.description }}
    </p>

    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-agency-primary"
        >{{ forfait.prix }}$</span
      >
      <button
        class="bg-agency-secondary text-white px-4 py-2 rounded hover:bg-agency-dark transition-colors duration-300"
      >
        Voir détails
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CarteForfait",
  props: {
    forfait: {
      type: Object,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getCategoryName(categoryId) {
      const category = this.categories.find((cat) => cat.id === categoryId);
      return category ? category.nom : "Inconnue";
    },
  },
};
</script>
