// GoogleAnalytics.js

export const initGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
   gtag('config', 'G-HTG0RJ84VF');
};
