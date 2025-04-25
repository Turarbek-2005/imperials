// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: {
            wght: [300, 400, 500, 600, 700, 900],
          },
          "Open Sans": {
            wght: [300, 400, 500, 600, 700, 900],
          },
        },
      },
    ],
    "@nuxt/ui",
    "nuxt-swiper",
    "vue3-carousel-nuxt",
  ],
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },
});
