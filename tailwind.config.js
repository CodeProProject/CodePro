/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url(assets/CodeBanner1.jpg)',
      },
    },
  },
  plugins: [],
}

