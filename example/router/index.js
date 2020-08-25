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

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {//返回之前的原位置
    // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    return savedPosition
  } else {
    const position = {}
    position.x = 0
    position.y = 0
    return position
  }
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: routeRegister(NavConfig)
})

export {NavConfig}
export default router
