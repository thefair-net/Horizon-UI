import {createRouter, createWebHistory} from 'vue-router';
import {RouterType} from './config'

const routes: Array<RouterType> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('example/pages/home.vue')
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('example/pages/vs-comment.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
