/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "agency-primary": "#79c7c5",
        "agency-secondary": "#2d5a4f",
        "agency-dark": "#123a2d",
        "agency-light": "#e0f2f1",
      },
    },
  },
  plugins: [],
};
