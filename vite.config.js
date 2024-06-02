import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  // server: {
  //   host: '127.0.0.1',
  //   port: 5173
  // }
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis',
        },
    },
},
})
