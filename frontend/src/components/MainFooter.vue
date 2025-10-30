<template>
  <footer class="w-full bg-agency-light text-agency-secondary py-8 mt-auto">
    <div
      class="max-w-6xl mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-baseline gap-3">
        <h1 class="text-2xl font-bold tracking-wide">
          <router-link
            to="/"
            class="text-agency-secondary hover:text-agency-primary transition-colors duration-300"
          >
            Nomadica
          </router-link>
        </h1>
        <span
          class="text-agency-secondary text-sm opacity-80 font-light tracking-wider uppercase"
        >
          Voyages & Découvertes
        </span>
      </div>

      <nav class="flex justify-center">
        <ul class="list-none p-0 m-0 flex flex-row gap-6">
          <li>
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li>
            <router-link to="/forfaits" class="nav-link">Forfaits</router-link>
          </li>
          <li>
            <router-link to="/apropos" class="nav-link"
              >À propos de l'agence</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="text-agency-secondary opacity-80 md:text-right">
        <p class="m-0 text-sm">&copy; 2025 Nomadica. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>
