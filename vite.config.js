import glsl from "vite-plugin-glsl";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react(), glsl()],  
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true, 
    port: 3000,     
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        tailwindcss(),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.glb')) {
            return 'assets/models/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
    
});
