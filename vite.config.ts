import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react(), sassDts()],
    // css: {
    //   modules: {
    //     generateScopedName: isDevelopment
    //       ? "[name]__[local]__[hash:base64:5]"
    //       : "[hash:base64:5]",
    //   },
    // },
  };
});
