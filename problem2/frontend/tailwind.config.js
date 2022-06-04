module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        0: '#FFFFFF',
        200: '#EAEAEA',
        400: '#A6A6A6',
        600: '#7B7B7B',
        800: '#555555',
        1000: '#232323',
      },
      secondary: {
        red: '#DC3545',
        green: '#3AE261',
        light: '#84A2C8',
        blue: '#1E90FF',
        dark: '#1765B1',
      },
    },
    fontSize: {
      h1: ['48px', { lineHeight: '64px' }],
      h2: ['36px', { lineHeight: '40px' }],
      h3: ['30px', { lineHeight: '36px' }],
      h4: ['24px', { lineHeight: '32px' }],
      subtitle: ['20px', { lineHeight: '24px' }],
      button: ['18px', { lineHeight: '24px' }],
      p1: ['16px', { lineHeight: 'auto' }],
      p2: ['12px', { lineHeight: 'auto' }],
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
