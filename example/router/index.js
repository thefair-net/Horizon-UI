import Vue from 'vue'
import VueRouter from 'vue-router'
const NavConfig = require('./nav.config.json');

Vue.use(VueRouter)

const routeRegister = config => {
  let routes = [{
    path: '/',
    name: 'Index',
    component: () => import('example/pages/home.vue')
  }]
  config.map(nav => {
    nav.list.map(item => {
      routes.push({
        path: item.path,
        name: item.name,
        component: () => import(`example/pages/${nav.type}${item.path}.vue`)
      })
    })
  })
  return routes
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routeRegister(NavConfig)
})

export {NavConfig}
export default router
