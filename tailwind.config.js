export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      360: '360px',
      768: '768px',
      1024: '1024px'
    },
    extend: {
      colors: {
        primaryColor: '#8734AD',
        // Добавьте стандартные цвета Tailwind CSS
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        gray: {
          50: '#f9fafb'
          // другие оттенки серого
        }
        // другие стандартные цвета
      }
    }
  },
  plugins: []
}
