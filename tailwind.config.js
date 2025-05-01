export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        pulse: 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}