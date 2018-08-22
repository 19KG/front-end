// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$notify = ElementUI.Notification
Vue.prototype.$alert = ElementUI.MessageBox.alert
Vue.prototype.$message = ElementUI.Message
Vue.prototype.$loading = ElementUI.Loading.service

Vue.prototype.$ajax = axios
axios.interceptors.response.use(
  function (response) {
    if (response.status > 400 && response.status < 599) {
      Vue.prototype.$notify({
        title: '发生错误',
        message: '服务器错误，稍后再试',
        type: 'error',
        position: 'top-right'
      })
      return Promise.reject(false)
    }
    return response
  },
  function (error) {
    Vue.prototype.$notify({
      title: '网络错误',
      message: '网络连接失败，请检查您的网络链接',
      type: 'error',
      position: 'top-right'
    })
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
