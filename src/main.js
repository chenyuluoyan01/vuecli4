import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import './assets/base.styl'

import request from './network/request'
import SIdentify from './components/identify/codeIdentify'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(SIdentify)

Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


