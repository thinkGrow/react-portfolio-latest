import path from "path";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // ✅ Automatically create 200.html for Surge after build
    {
      name: "copy-200-html",
      closeBundle: () => {
        const indexPath = path.resolve(__dirname, "dist/index.html");
        const targetPath = path.resolve(__dirname, "dist/200.html");

        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, targetPath);
          console.log("✅ 200.html copied for Surge.");
        } else {
          console.warn("⚠️ index.html not found in dist folder.");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
