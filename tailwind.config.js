// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/bg_header.webp')",
      },
      colors: {
        "header-text": "#ffffff",
      },
    },
  },
  plugins: [],
};
