import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@forms": path.resolve(__dirname, "./src/forms/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@services": path.resolve(__dirname, "./src/services/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@types": path.resolve(__dirname, "./src/types/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@layouts": path.resolve(__dirname, "./src/layouts/"),
      "@validations": path.resolve(__dirname, "./src/validations/"),
    },
  },
  plugins: [react(), svgr()],
});
