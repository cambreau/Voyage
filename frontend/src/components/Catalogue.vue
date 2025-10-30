<template>
  <section class="catalogue mb-16">
    <h2 class="text-3xl font-bold text-agency-dark mb-8 mt-16 text-center">
      Nos Forfaits
    </h2>

    <button
      @click="creer"
      class="bg-agency-primary text-white px-8 py-3 rounded-lg hover:bg-agency-dark transition-colors duration-300 block mx-auto mb-8"
    >
      Créer un nouveau forfait
    </button>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
    >
      <CarteForfait
        v-for="forfait in forfaits"
        :key="forfait.id"
        :forfait="forfait"
        :categories="categories"
        @modifier="modifier"
        @supprimer="supprimer"
      />
    </div>
  </section>
</template>

<script>
import CarteForfait from "./CarteForfait.vue";

export default {
  name: "Catalogue",
  components: {
    CarteForfait,
  },
  props: {
    forfaits: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  emits: ["modifier-forfait", "supprimer-forfait", "creer-forfait"],
  methods: {
    modifier(forfait) {
      this.$emit("modifier-forfait", forfait);
    },
    supprimer(forfaitId) {
      this.$emit("supprimer-forfait", forfaitId);
    },
    creer() {
      this.$emit("creer-forfait");
    },
  },
};
</script>
