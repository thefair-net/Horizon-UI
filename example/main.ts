import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
const Vision = require('../lib')
import './assets/font.css'
import './assets/normalize.css'
import './assets/rem(768px)'

createApp(App)
  .use(Vision)
  .use(router)
  .mount('#app')
