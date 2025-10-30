<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
  >
    <picture class="block h-48 bg-gray-200 mb-4 overflow-hidden">
      <img
        v-if="forfait.image"
        :src="forfait.image"
        :alt="forfait.nom"
        class="w-full h-full object-cover"
      />
    </picture>

    <section class="p-6 flex flex-col flex-grow">
      <header class="mb-3">
        <h3
          class="text-xl font-bold text-agency-dark min-h-[3rem] flex items-start"
        >
          {{ forfait.nom }}
        </h3>
      </header>

      <span
        class="inline-block bg-agency-light text-agency-secondary px-3 py-1 rounded-full text-sm mb-3 self-start"
      >
        {{ getCategoryName(forfait.categorieId || forfait.categorie) }}
      </span>

      <p class="text-agency-secondary mb-4 text-sm leading-relaxed flex-grow">
        {{ forfait.description }}
      </p>

      <footer class="flex flex-col gap-2 mt-auto">
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
        <div
          class="bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-2 p-2 rounded"
        >
          <button
            @click="$emit('modifier', forfait)"
            class="bg-agency-primary text-white px-3 py-1 rounded hover:bg-agency-dark transition-colors duration-300 text-sm"
          >
            Modifier
          </button>
          <button
            @click="$emit('supprimer', forfait.id)"
            class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300 text-sm"
          >
            Supprimer
          </button>
        </div>
      </footer>
    </section>
  </div>
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
  emits: ["modifier", "supprimer"],
  methods: {
    getCategoryName(categorieId) {
      const categorie = this.categories.find((cat) => cat.id === categorieId);
      return categorie ? categorie.nom : "Inconnue";
    },
  },
};
</script>
