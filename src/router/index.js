import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/containers/Layout'
import Home from '@/containers/Home'
import MusicList from '@/containers/MusicList'
import Singer from '@/containers/Singer'
import Search from '@/containers/Search'
import Mine from '@/containers/Mine'

import Player from '@/containers/Player'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:"",
          component:Home
        },
        {
          path:"singer",
          component:Singer
        },
        {
          path:"musiclist",
          component:MusicList
        },
        {
          path:"search",
          component:Search
        },
        {
          path:"mine",
          component:Mine
        }
      ]
    },
    {
      path:"/player/:id",
      name:"player",
      component:Player
    }
  ]
})
