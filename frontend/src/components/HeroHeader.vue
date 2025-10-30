<template>
  <header
    class="w-full bg-agency-light text-agency-secondary py-4 sticky top-0 z-50 shadow-lg"
  >
    <nav class="max-w-6xl mx-auto px-2 flex justify-between items-center">
      <h1 class="text-2xl font-bold tracking-wide">
        <router-link
          to="/"
          class="text-agency-secondary hover:text-agency-primary transition-colors duration-300"
        >
          Nomadica
        </router-link>
      </h1>

      <ul class="hidden md:flex list-none">
        <li class="mr-8">
          <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li class="mr-8">
          <router-link to="/forfaits" class="nav-link">Forfaits</router-link>
        </li>
        <li>
          <router-link to="/apropos" class="nav-link"
            >À propos de l'agence</router-link
          >
        </li>
      </ul>

      <button
        class="md:hidden text-agency-secondary hover:text-agency-primary transition-colors duration-300"
        @click="toggleMobileMenu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>

    <nav
      v-if="isMobileMenuOpen"
      class="md:hidden mt-4 pb-4 border-t border-agency-secondary pt-4"
    >
      <ul class="flex flex-col space-y-4 list-none px-2">
        <li>
          <router-link to="/" class="nav-link" @click="toggleMobileMenu"
            >Accueil</router-link
          >
        </li>
        <li>
          <router-link to="/forfaits" class="nav-link" @click="toggleMobileMenu"
            >Forfaits</router-link
          >
        </li>
        <li>
          <router-link to="/apropos" class="nav-link" @click="toggleMobileMenu"
            >À propos de l'agence</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeroHeader",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
