/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'section': 'calc(100vh - 5rem)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'content': '1440px',
      },
      minHeight: {
        'section': 'calc(100vh - 5rem)',
        'card': '320px',
      },
      padding: {
        'section': '6rem',
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      gridTemplateColumns: {
        'skills': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      gap: {
        'skills': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    'bg-gray-50',
    'bg-gray-900',
    'bg-gray-800',
    'text-white',
    'text-gray-900',
    'text-gray-600',
    'text-blue-500',
    'text-blue-600',
    'font-semibold',
    'backdrop-blur',
  ],
}