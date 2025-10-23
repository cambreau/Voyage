<template>
  <footer
    class="bg-agency-dark text-agency-light py-8 mt-auto max-w-6xl mx-auto px-4 grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left"
  >
    <div class="flex flex-col items-center gap-2 md:items-start">
      <h1
        class="text-agency-light text-3xl md:text-4xl font-bold m-0 tracking-wide"
      >
        Nomadica
      </h1>
      <p
        class="text-agency-light text-sm opacity-80 font-light tracking-wider uppercase"
      >
        Voyages & Découvertes
      </p>
    </div>

    <nav class="flex justify-center">
      <ul
        class="list-none p-0 m-0 flex flex-col gap-4 md:flex-row md:justify-center"
      >
        <li class="m-0">
          <a
            href="#philosophie"
            class="text-agency-light no-underline font-medium px-4 py-2 rounded transition-all duration-300 inline-block hover:bg-agency-secondary hover:text-agency-dark hover:-translate-y-0.5"
            >Notre Philosophie</a
          >
        </li>
        <li class="m-0">
          <a
            href="#destinations"
            class="text-agency-light no-underline font-medium px-4 py-2 rounded transition-all duration-300 inline-block hover:bg-agency-secondary hover:text-agency-dark hover:-translate-y-0.5"
            >Nos Destinations</a
          >
        </li>
        <li class="m-0">
          <a
            href="#contact"
            class="text-agency-light no-underline font-medium px-4 py-2 rounded transition-all duration-300 inline-block hover:bg-agency-secondary hover:text-agency-dark hover:-translate-y-0.5"
            >Nous Contacter</a
          >
        </li>
      </ul>
    </nav>

    <div
      class="border-t border-agency-secondary pt-4 text-agency-light opacity-80 md:text-right"
    >
      <p class="m-0 text-sm">
        &copy; 2025 Nom de l'Agence. Tous droits réservés.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>
