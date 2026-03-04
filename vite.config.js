import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/Tech-Store/', // Осы жерге GitHub-тағы репозиторий атын дәл осылай жаз
})