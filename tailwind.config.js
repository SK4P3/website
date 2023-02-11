/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
}
