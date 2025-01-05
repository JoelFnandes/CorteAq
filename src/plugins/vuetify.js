import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';


export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: '#002B5B',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi', // Correção aqui
    aliases,
    sets: {
      mdi,
    },
  },
});
