import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [vue(), vueDevTools(), svgLoader({ defaultImport: 'component' })];

  if (mode === 'analyze') {
    // Для визуального отображения размера чанков
    plugins.push(
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Разбиваем библиотеки на чанки
            if (id.includes('node_modules')) {
              if (id.includes('primevue')) return 'primevue';
              if (id.includes('primeicons')) return 'primeicons';
              if (id.includes('@tanstack')) return 'vue-query';
              if (id.includes('vue-i18n')) return 'vue-i18n';
              if (id.includes('vue-router')) return 'vue-router';
              if (id.includes('@zod')) return 'zod';
              return 'vendor';
            }
          },
        },
      },
    },
  };
});
