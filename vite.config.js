import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // 👈 AGREGAR ESTO
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['moment/locale/es'],
  },
})
