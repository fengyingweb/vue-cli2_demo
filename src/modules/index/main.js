import 'babel-polyfill' // 解决ie9, 及高级浏览器低版本不能使用es6语法问题
// import 'amfe-flexible'
import '@/assets/style/base.less'
import '@/styles/base.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/index'
import App from './App'
import lang from '@/lang/index'
import './api/mock'
import {Cell, CellGroup, NavBar, Icon, Notify, Button} from 'vant'
import Dialog from '@/components/dialog'
import Toast from '@/components/toast'

Vue.use(Cell).use(CellGroup).use(Notify).use(Button)
Vue.use(NavBar).use(Icon).use(Toast).use(Dialog)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const i18n = lang.initLanguage()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
