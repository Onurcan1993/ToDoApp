/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // React dosyaları için Tailwind class'ları
  ],
  important: "#root",  // Tailwind class'larını önceliklendirmek için
  theme: {
    extend: { 
      backgroundImage: {
        'hero-pattern': "url('/src/hero.png')",  // Doğru dosya yolu olduğundan emin olun
      },
      color:{
        black:'black',
      }
    },
  },
  plugins: [],
});

