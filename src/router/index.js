import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import UserPage from '@/components/UserPage'
import DetailPage from '@/components/DetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:uid',
      name: 'UserPage',
      component: UserPage
    },{
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
