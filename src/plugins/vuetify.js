// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import pl from 'vuetify/lib/locale/pl'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  lang: {
    locales: { pl},
    current: 'pl',
  },
icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})
