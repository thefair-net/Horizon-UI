import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import {ImageViewer, Loading} from '../lib'
import './assets/fade-in.css'
import '../static/font.css'
import '../static/normalize.css'
import VConsole from 'vconsole'

Vue.use(Loading)
Vue.config.productionTip = false
Vue.prototype.$imgViewer = ImageViewer
process.env.NODE_ENV === 'development' && new VConsole()

Vue.use(VueCompositionAPI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
