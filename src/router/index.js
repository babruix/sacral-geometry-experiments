import Vue from 'vue'
import Router from 'vue-router'
import SacralCircle from '@/components/SacralCircle'
import Canvas from '@/components/Canvas'

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
  ]
})
