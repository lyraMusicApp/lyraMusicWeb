import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist-vercel",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "index.vercel.html"),
    },
  },
});