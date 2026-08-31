import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://construction.kreedum.com",
      generateRobotsTxt: false, // we ship our own public/robots.txt
      dynamicRoutes: [
        "/",
        "/civil-construction",
        "/prefabricated-buildings",
        "/sports-infrastructure",
        "/projects",
        "/about",
        "/contact",
      ],
    }),
  ],
});
