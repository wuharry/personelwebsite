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
        slideDown: {
          // "0%": { transform: "translateY(-100%)" },
          // "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-in-out forwards", // 确保动画持续时间和缓动效果适当
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
