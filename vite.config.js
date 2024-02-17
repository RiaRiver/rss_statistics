import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import autoprefixer from 'autoprefixer';
import svgLoader from 'vite-svg-loader';

export default {
  publicDir: 'assets',
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      webp: {
        quality: 70,
      },
    }),
    svgLoader(),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    minify: false,
    compact: false,
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
};
