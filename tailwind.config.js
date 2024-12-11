/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-green': 'inset 0 -5px 0 #9dc082',
      },
      colors: {
        'app-fondo': '#f3f6f9',
        'app-card-verde':'#9dc082',
        'app-box-plomo':'#f3f6f9',
        'app-box-border':'#e5e7eb',
        'app-btn-success':'#9dc082',
        'app-btn-icon-more':'#989eae',
        'app-text-title':'#1d212d',
        'app-text-subtitle':'#6c717a',
        'app-text-blue':'#1777bd',
      },
    },
  },
  plugins: [],
}

