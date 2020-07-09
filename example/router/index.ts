import {createRouter, createWebHistory} from 'vue-router';
import {RouterType} from './config'
const NavConfig = require('./nav.config.json');

const routeRegister = (config: []) => {
  let routes: Array<RouterType> = [{
    path: '/',
    name: 'Index',
    component: () => import('example/pages/home.vue')
  }]
  config.map((nav: {list: []}) => {
    nav.list.map((item: {path: string, name: string}) => {
      routes.push({
        path: item.path,
        name: item.name,
        component: () => import(`example/pages${item.path}.vue`)
      })
    })
  })
  return routes
}

// console.log(routeRegister(NavConfig))
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routeRegister(NavConfig)
})

export {NavConfig}
export default router
