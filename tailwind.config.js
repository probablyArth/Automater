module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      fontSize: {
        xs: ['15px', '1'],
        base: ['22px', '1'],
        sm: ['60px', '1'],
        vs: ['12px', '1']
      },
      width: {
        'main': '543px',
        'side': '211px'
      },
      height: {
        'main': '650px',
        'side': '650px'
      },
      margin: {
        sm: '50px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
