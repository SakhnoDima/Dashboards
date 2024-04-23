import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/dashboards/", for gh-pages
  plugins: [react()],
  define: {
    "process.env": {},
  },
});
