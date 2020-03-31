import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        author: '建筑公司',
        isLogin: '',
        toCenter:false,
        // loginPhone: '',
        // loginCode: '',
        // loginPwd: ''
    },
    mutations: {
        newAuthor(state, msg) {
            state.author = msg
            localStorage.setItem("author", msg)
        },
        isLogin(state, msg) {
            state.isLogin = msg
            localStorage.setItem("isLogin", msg)
        },
        toCenter(state, msg) {
            state.toCenter = msg
        }
        // loginPhone(state, msg) {
        //     state.loginPhone = msg
        //     localStorage.setItem("loginPhone", msg)
        // },
        // loginCode(state, msg) {
        //     state.loginCode = msg
        //     localStorage.setItem("loginCode", msg)
        // },
        // loginPwd(state, msg) {
        //     state.loginPwd = msg
        //     localStorage.setItem("loginPwd", msg)
        // }

    },
    actions: {
    },
    modules: {
    }
})
