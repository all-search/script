import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/all-search/',
  routes: [
    {
      path: '/',
      name: 'setting',
      component: () => import('../views/setting.vue'),
      meta: {}
    },
    {
      path: '/sites',
      name: 'index',
      component: () => import('../views/sites.vue'),
      meta: {}
    }
  ]
})