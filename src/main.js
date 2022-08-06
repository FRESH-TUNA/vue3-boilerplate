import { createApp } from 'vue'



import App from './App.vue'

//import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// QuillEditor
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// global style (main, body)
import '@/assets/main.scss'

import router from './router'
import store from './store'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
