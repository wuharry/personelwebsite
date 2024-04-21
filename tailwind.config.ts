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
      boxShadow: {
        "cyan-cus": "0 0 50px rgba(0, 128, 225, 1.8)", // 自定义阴影类
      },
    },
  },
  plugins: [
    eslintPlugin({
      exclude: ["/@react-refresh", "**/*.css"],
    }),
  ],
};
