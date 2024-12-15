/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'xs1':['10px']
      },
      minHeight:{
        '500':'500px'
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

        'music-background':'#121212',
        'music-btn-green':'#27d999',
        'music-border-btn-green':'#22aa79',
        'music-text-btn-green':'#1e392f',
        'music-text-border-green':'#24c78d',
        'music-text-silver':'#888888',
        'music-text-subtitle':'#d3d3d3',
      },
    },
  },
  plugins: [],
}

