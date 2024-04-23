import eslintPlugin from "vite-plugin-eslint";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: {
        fadeDown: `
        @keyframes fadeDown {
          0% {
            opacity: 0; /* 元素開始時完全透明 */
            transform: translateY(-10px); /* 元素開始時稍微向上移動 */
          }
          100% {
            opacity: 1; /* 元素最終變得完全不透明 */
            transform: translateY(0); /* 元素最終回到原始位置 */
          }
        }
        `,
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    eslintPlugin({
      exclude: ["/@react-refresh", "**/*.css"],
    }),
    require("tailwindcss-animated"),
  ],
};
