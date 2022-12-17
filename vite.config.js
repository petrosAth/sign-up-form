import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/sign-up-form/",
  css: {
    devSourcemap: true,
  },
  postcss: {
    plugins: [autoprefixer({})],
  },
});
