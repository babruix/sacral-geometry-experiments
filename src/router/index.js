import Vue from 'vue'
import Router from 'vue-router'
import Spiral from '@/components/Spiral'
import SacralCircle from '@/components/SacralCircle'
import Canvas from '@/components/Canvas'
import Tunnel from '@/components/Tunnel'
import Sunflower from '@/components/SunflowerComponent'
import Rainbow from '@/components/RainbowComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/color-spiral',
      name: 'SacralCircle',
      component: SacralCircle
    },
    {
      path: '/spiral',
      name: 'Spiral',
      component: Spiral
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
    {
      path: '/rainbow',
      name: 'Rainbow',
      component: Rainbow
    }
  ]
})
