<template>
  <section class="catalogue">
    <h2 class="text-3xl font-bold text-agency-dark mb-8 text-center">
      Nos Forfaits
    </h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
    >
      <CarteForfait
        v-for="forfait in forfaits"
        :key="forfait.id"
        :forfait="forfait"
        :categories="categories"
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
};
</script>
