import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import * as path from "path";

console.log(process.env.SENTRY_AUTH_TOKEN);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // gzip 최적화
    viteCompression({
      ext: ".ts",
      algorithm: "gzip",
    }),

    // gzip 최적화
    viteCompression({
      ext: ".tsx",
      algorithm: "gzip",
    }),

    // Sentry vite plugin
    sentryVitePlugin({
      org: "hobom",
      project: "hbpin-front",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      sourcemaps: {
        assets: "./build/**",
        // Source Map 유출 방지
        filesToDeleteAfterUpload: "./build/**/*.map",
      },
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

    // Build 후 기존 소스코드 원복 불가하게 Sentry를 위해 켜야하는 옵션
    sourcemap: true,
  },
});
