import Vue from 'vue'
import Router from 'vue-router'
import SacralCircle from '@/components/SacralCircle'
import Canvas from '@/components/Canvas'
import Tunnel from '@/components/Tunnel'
import Sunflower  from '@/components/SunflowerComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SacralCircle',
      component: SacralCircle
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: Canvas
    },
    {
      path: '/tunnel',
      name: 'Tunnel',
      component: Tunnel
    },
    {
      path: '/sunflower',
      name: 'Sunflower',
      component: Sunflower
    },
  ]
})
