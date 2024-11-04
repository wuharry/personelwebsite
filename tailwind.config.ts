import eslintPlugin from 'vite-plugin-eslint';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { opacity: '0', width: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        progress: 'progress 1.5s ease-in-out forwards',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        width: 'width',
        transform: 'transform',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transitionDuration: {
        '200': '200ms',
      },
      width: {
        'bar-width': '30px',
        'hamburger-close-width': '2rem',
      },
      height: {
        'bar-height': '4px',
      },
      gap: {
        'hamburger-gap': '6px',
      },
      translate: (theme: (arg0: string) => any) => ({
        'close-bar-height-after': `calc(${theme('height.bar-height')} / 2)`,
        'close-bar-height-before': `calc(${theme('height.bar-height')} / -2)`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    eslintPlugin({
      exclude: ['/@react-refresh', '**/*.css'],
    }),
    require('tailwindcss-animated'),
  ],
};
