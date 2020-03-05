import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/mymain' //重定向
    },
    {
    	  path:'/mymain',
    	  name:'mymain',
    	  //路由栏加载,性能更好
    	  component: () => import(/* webpackChunkName: "mymain" */ '../pages/mymain.vue')
    },
    {
    	  path:'/myfind',
    	  name:'myfind',
    	  //路由栏加载,性能更好
    	  component: () => import(/* webpackChunkName: "myfind" */ '../pages/myfind.vue')
    },
    {
    	  path:'/mymessage',
    	  name:'mymessage',
    	  //路由栏加载,性能更好
    	  component: () => import(/* webpackChunkName: "mymessage" */ '../pages/mymessage.vue')
    },
    {
    	  path:'/myme',
    	  name:'myme',
    	  //路由栏加载,性能更好
    	  component: () => import(/* webpackChunkName: "myme" */ '../pages/myme.vue')
    }
  ]
})
