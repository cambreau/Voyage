<template>
  <div
    class="mt-16 mb-16 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
  >
    <picture>
      <img
        src="https://images.pexels.com/photos/2533090/pexels-photo-2533090.jpeg"
        alt="Voyage"
        class="w-full rounded-lg shadow-2xl"
      />
    </picture>
    <section>
      <header>
        <h1 class="text-5xl font-bold text-agency-dark mb-6">
          Bienvenue chez Nomadica
        </h1>
        <p class="text-agency-secondary text-xl mb-8">
          Votre agence de voyage pour des expériences inoubliables
        </p>
      </header>
      <div class="flex flex-col sm:flex-row gap-4">
        <router-link
          to="/forfaits"
          class="bg-agency-primary text-white px-8 py-3 rounded-lg hover:bg-agency-dark transition-colors duration-300 text-lg text-center"
        >
          Découvrez nos forfaits
        </router-link>
        <router-link
          to="/formulaire"
          class="bg-agency-secondary text-white px-8 py-3 rounded-lg hover:bg-agency-dark transition-colors duration-300 text-lg text-center"
        >
          Créer un nouveau forfait
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AccueilView",
};
</script>
