import { defineConfig } from "astro/config";
import WindiCSS from "vite-plugin-windicss";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCSS()],
  },

  integrations: [WindiCSS(), image()],
});
