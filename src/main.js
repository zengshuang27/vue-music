// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Tabs from "./components/Tab"
import BackTop from "./components/BackTop"

// require styles
import 'swiper/dist/css/swiper.css'
import "./assets/font/iconfont.css"
import "./assets/css/bootstrap/css/bootstrap.min.css"

Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)
Vue.use(BackTop)

Vue.prototype.$axios = Axios
Vue.prototype.HOST = "/baidu_music_api"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
