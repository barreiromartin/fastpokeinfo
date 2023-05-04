import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    // otras opciones de optimización...
    app: {
      // Configura unwrapInjectedRef a true para desenrollar las referencias inyectadas
      unwrapInjectedRef: true
    }
  },
  build: {
    outDir: 'dist', // El directorio de salida por defecto es "dist"
    // ...
  },
})
