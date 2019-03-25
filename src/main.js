// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import config from '@/config'
import './index.less'
import '@/assets/icons/iconfont.css'
// 实际打包时应该不引入mock
/* eslint-disable */
import service from './service.js'
import commonPlugin from '@/libs/commonPlugin'
Vue.use(commonPlugin)
Vue.prototype.$service = service(Vue)
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView)

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
