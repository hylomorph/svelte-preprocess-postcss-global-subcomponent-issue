import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: preprocess({
        postcss: true,
      }),
      emitCss: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'fixed',
      // the proper extensions will be added
      fileName: 'fixed'
    },
  }
});
