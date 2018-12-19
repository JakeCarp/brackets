import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import create from './views/create.vue'
// @ts-ignore
import join from './views/join.vue'
// @ts-ignore
import active from './views/active.vue'
// @ts-ignore
import about from './views/about.vue'
// @ts-ignore
import test from './views/testBracket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/join/:tournamentId',
      name: 'join',
      component: join
    },
    {
      path: '/tournament/:tournamentId',
      name: 'active',
      component: active
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/test',
      name: 'test',
      component: test
    },

    {
      path: "*",
      redirect: '/'
    }

    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: function () { 
    //     return import(/* webpackChunkName: "about" */ './views/About.vue')
    //   }
    // }
  ]
})
