import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import './assets/base.styl'
import Vuex from 'vuex'
import request from './network/request'
import SIdentify from './components/login/codeIdentify'
import { Message } from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI,SIdentify,Vuex)

Vue.prototype.post = request.post
Vue.prototype.get = request.get
Vue.prototype.$message = Message

router.beforeEach((to,from,next) => {
    // localStorage.setItem('author','')
    const role = localStorage.getItem('author')
    const isLogin = localStorage.getItem('isLogin')
    // 判断是否已经登录，即判断用户名是否存在
    // const role = localStorage.getItem('mc_usernamne')
    if(to.path === '/tenderDetail' && isLogin === 'false') {
        Message.warning({message: '请先登录',showClose: true})
        next('/')
    }else {
        next()
    }
    if(to.path.includes('/userInfo')) {
        store.commit('toCenter', true)
        // console.log(store.state.toCenter)
    }
    
})
new Vue({
  router,
  store,
  created() {
      if(localStorage.getItem('isLogin') === null) {
            localStorage.setItem('isLogin', '')
        }
      if(localStorage.getItem('author') === null) {
            localStorage.setItem('author', '建筑')
        }
  },
  render: h => h(App)
}).$mount('#app')
