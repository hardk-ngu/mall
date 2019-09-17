import Vue from 'vue'
import Router from 'vue-router'
//下面是路由懒加载的最新写法，es6加webpack的写法
const home = () => import('../pages/home/home')
const category = () => import('../pages/category/category')
const cart = () => import('../pages/cart/cart')
const profile = () => import('../pages/profile/profile')
const detail = () => import('../pages/detail/detail')
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    }, {
      path: '/profile',
      component: profile
    },
    {
      //path:'/detail/'+iid
      path: '/detail',
      component: detail
    }
  ]
})
