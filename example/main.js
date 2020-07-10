import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import Vision from '../lib'
import './assets/fade-in.css'
import '../static/font.css'
import '../static/normalize.css'
import '../src/utils/rem(768px)'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(Vision)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
