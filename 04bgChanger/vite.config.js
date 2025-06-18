import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ official plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 this is correct per docs
  ],
});
