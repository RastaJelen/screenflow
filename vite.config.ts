import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Sprawdzenie, czy jesteśmy w dev na Replit (opcjonalne)
const isReplitDev =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined;

// Import synchronizujący plugin Replit, jeśli chcesz, możesz to usunąć jeśli nie potrzebujesz
let cartographerPlugin = null;
if (isReplitDev) {
  try {
    // wymuś synchron import przez require (jeśli używasz CommonJS)
    // @ts-ignore
    cartographerPlugin = require("@replit/vite-plugin-cartographer").cartographer();
  } catch (e) {
    console.warn("Replit cartographer plugin not loaded:", e);
  }
}

const plugins = [react()];
if (cartographerPlugin) {
  plugins.push(cartographerPlugin);
}

export default defineConfig({
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  plugins,
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
