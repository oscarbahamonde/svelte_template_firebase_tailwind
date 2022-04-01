module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,svelte}'],
  theme: {
    extend: {},
  },
  variants: {
   extend: {},
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes: ['dracula']
  }
}
