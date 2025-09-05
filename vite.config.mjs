import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import removeConsole from 'vite-plugin-remove-console';
import stylelint from 'vite-plugin-stylelint';

import _config from './_config.js';

export default defineConfig({
  root: _config.root,
  server: {
    host: _config.server.host,
    port: _config.server.port,
    open: _config.server.open,
    watch: {
      ignored: ['**/.stylelintcache', '**/.eslintcache'],
    },
  },
  preview: { port: _config.preview.port },
  plugins: [
    removeConsole({}),
    eslint({
      cache: true,
    }),
    stylelint(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
});
