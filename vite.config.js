import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://JasonEstrada.github.io/JJEH_OPTZN.github.io",
});
