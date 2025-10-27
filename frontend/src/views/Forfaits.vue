<template>
  <div>
    <Catalogue :forfaits="forfaits" :categories="categories" />
  </div>
</template>

<script>
import Catalogue from "../components/Catalogue.vue";

export default {
  name: "Forfaits",
  components: {
    Catalogue,
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
