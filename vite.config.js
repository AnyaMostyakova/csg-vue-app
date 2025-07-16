import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repo = 'csg-vue-app'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['swiper'],
  },
})
