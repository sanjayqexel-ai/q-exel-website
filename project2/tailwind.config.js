/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f8',
          100: '#d5dcee',
          200: '#aab9dd',
          300: '#7f95cc',
          400: '#5472bb',
          500: '#2a4faa',
          600: '#1e3d8f',
          700: '#162d6b',
          800: '#112966',
          900: '#0d1f4e',
          950: '#080f2a',
        },
        emerald: {
          50: '#edfaf4',
          100: '#d3f3e4',
          200: '#a7e7c9',
          300: '#6ed5a8',
          400: '#36bd84',
          500: '#22b573',
          600: '#169159',
          700: '#127347',
          800: '#0e5b39',
          900: '#0b4a2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
