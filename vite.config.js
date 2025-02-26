import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/bg_header.webp')",
      },
      color: {
        "header-text": "#ffffff",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
