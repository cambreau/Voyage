<template>
  <div class="min-h-screen flex flex-col">
    <HeroHeader />

    <main class="flex-1 pt-4">
      <router-view />
    </main>

    <MainFooter />
  </div>
</template>

<script>
import HeroHeader from "./components/HeroHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    HeroHeader,
    MainFooter,
  },
};
</script>
