import eslintPlugin from "vite-plugin-eslint";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { opacity: '0', width: '0' },
          '100%': { opacity: '1', },
        },
      },
      animation: {
        progress: 'progress 1.5s ease-in-out forwards',
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    eslintPlugin({
      exclude: ["/@react-refresh", "**/*.css"],
    }),
    require("tailwindcss-animated"),
  ],
};
