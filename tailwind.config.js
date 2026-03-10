/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Jost', 'sans-serif'],
      },
      colors: {
        'cream': '#F5F0E8',
        'warm-white': '#FAFAF7',
        'stone': '#8C8476',
        'charcoal': '#2A2A2A',
        'deep': '#1A1A1A',
        'gold': '#C9A96E',
        'muted': '#E8E4DC',
      },
      letterSpacing: {
        'widest2': '0.25em',
        'widest3': '0.35em',
      }
    },
  },
  plugins: [],
}
