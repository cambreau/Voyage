/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs de l'agence
        agency: {
          primary: "#79c7c5",
          secondary: "#4db6ac",
          dark: "#123a2d",
          light: "#e0f2f1",
        },
      },
    },
  },
  plugins: [],
};
