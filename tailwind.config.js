module.exports = {
  content: [
    './index.html',
    './app.jsx',
    './main.jsx',
    './Header.jsx',
    './Tabs.jsx',
    './Notification.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // morado principal
          light: '#a5b4fc',  // morado claro
          dark: '#3730a3',   // morado oscuro
        },
        accent: {
          DEFAULT: '#6366f1', // igual al morado del botón
          light: '#a5b4fc',  // morado claro
          dark: '#3730a3',   // morado oscuro
        },
        soft: {
          DEFAULT: '#f3f0ff', // lila muy claro
        },
        success: {
          DEFAULT: '#4ade80', // verde éxito
        },
        error: {
          DEFAULT: '#f87171', // rojo suave
        },
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
};
