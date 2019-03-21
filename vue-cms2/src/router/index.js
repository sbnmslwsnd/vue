import Vue from 'vue'
import Router from 'vue-router'
import Fly from '@/components/Fly'
import Svip from '@/components/Svip'
import Vip from '@/components/Vip'
import Xy from '@/components/Xy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fly',
      component: Fly
    },
    {
      path: '/svip',
      component: Svip
    },
    {
      path: '/xy',
      component: Xy
    },
    {
      path: '/vip',
      component: Vip
    },
  ]
})
