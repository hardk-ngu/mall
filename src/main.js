import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Carousel,CarouselItem,Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Notification)
Vue.config.productionTip = false
//在vue原型上添加一个事件总线方法,这个方法可以应用于非父子组件，这样的话更便捷
Vue.prototype.$bus=new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
