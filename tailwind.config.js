import eslintPlugin from "vite-plugin-eslint";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    eslintPlugin({
      exclude: ["/@react-refresh", "**/*.css"],
    }),
  ],
};
