/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        'featured': 'var(--featured-color)',
        'featured-md': 'var(--featured-md-color)',
        'featured-light': 'var(--featured-light-color)',
        'mustard': 'var(--mustard-color)',
        'yam': 'var(--yam-color)',
        'apricot': 'var(--apricot-color)',
        'lipstick': 'var(--lipstick-color)',
        'cherry': 'var(--cherry-color)',
        'base-light': 'var(--base-light-color)',
        'base-dark': 'var(--base-dark-color)',
      }
    },
  },
  plugins: [],
}