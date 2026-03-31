export default defineNuxtConfig({
  compatibilityDate: '2026-03-31',
  modules: ['@nuxt/ui'],
  
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'vue', 'vue-router']
    }
  },

  app: {
    head: {
      title: 'Mê Coffee - Order QR',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }
      ]
    }
  }
})