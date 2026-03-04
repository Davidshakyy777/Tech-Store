import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Tech-Store/', // Бұл жол GitHub-та сайт көрінуі үшін ӨТЕ МАҢЫЗДЫ
})