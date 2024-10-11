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
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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

