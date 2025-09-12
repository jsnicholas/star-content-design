module.exports = {
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#144156",
        "secondary": "#f000b8",
        "accent": "#1dcdbc",
        "neutral": "#FEFBF9",
        "base-100": "#ffffff",
        "info": "#3abff8",
        "success": "#80CCB8",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
    },],
  },
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    fontFamily: {
      'serif': ['Fraunces'],
      'body': ['Barlow'],
    }
  }
};
