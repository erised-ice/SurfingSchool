import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import ExamplesPage from '@/pages/ExamplesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/examples',
      name: 'examples',
      component: ExamplesPage
    }
  ]
})
