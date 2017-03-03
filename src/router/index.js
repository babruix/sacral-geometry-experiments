import Vue from 'vue'
import Router from 'vue-router'
import SacralCircle from '@/components/SacralCircle'
import Canvas from '@/components/Canvas'
import Canvas2 from '@/components/Canvas2'
import Canvas3 from '@/components/Canvas3'

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
      path: '/canvas2',
      name: 'Canvas2',
      component: Canvas2
    },
    {
      path: '/canvas3',
      name: 'Canvas3',
      component: Canvas3
    },
  ]
})
