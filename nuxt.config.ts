import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  compatibilityDate: '2025-07-02',

  css: [
    '~/assets/css/tailwind.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    'swiper/css/autoplay'
  ],

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  app: {
    head: {
      title: 'ACOOLA | Создание и продвижение сайтов',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: true
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false        // <BaseButton> вместо <UiBaseButton>
    }
  ]
})
