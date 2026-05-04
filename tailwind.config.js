/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
      },
      fontSize: {
        /* Minor Third typescale — ratio 1.2, base 16px */
        '2xs':  ['11px', { lineHeight: '1.5' }],   /* step -2 */
        'xs':   ['13px', { lineHeight: '1.5' }],   /* step -1 */
        'sm':   ['13px', { lineHeight: '1.5' }],   /* alias for xs */
        'base': ['16px', { lineHeight: '1.6' }],   /* step  0 */
        'md':   ['19px', { lineHeight: '1.6' }],   /* step  1 */
        'lg':   ['23px', { lineHeight: '1.5' }],   /* step  2 */
        'xl':   ['28px', { lineHeight: '1.4' }],   /* step  3 */
        '2xl':  ['33px', { lineHeight: '1.3' }],   /* step  4 */
        '3xl':  ['40px', { lineHeight: '1.3' }],   /* step  5 */
        '4xl':  ['48px', { lineHeight: '1.2' }],   /* step  6 */
        '5xl':  ['57px', { lineHeight: '1.2' }],   /* step  7 */
        '6xl':  ['69px', { lineHeight: '1.1' }],   /* step  8 */
      },
      colors: {
        amber: {
          DEFAULT: '#FFB23E',
          light: '#FFD89F',
          warm: '#ffba60',
          dark: '#D58816',
          orange: '#ffa40d',
        },
        cream: '#FFF7EB',
        brown: '#534B38',
        'dark-blue-gray': '#313e47',
        'near-black': '#1f1f1f',
        'gray-bg': '#f7f7f7',
        'gray-subtle': 'rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [],
};
