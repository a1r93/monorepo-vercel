import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "dashes",
    },
  },
  plugins: [tsconfigPaths(), react()],
});
