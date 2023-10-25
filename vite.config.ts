import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      ext: ".ts",
      algorithm: "gzip",
    }),
    viteCompression({
      ext: ".tsx",
      algorithm: "gzip",
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: path.join(__dirname, "build"),
  },
});
