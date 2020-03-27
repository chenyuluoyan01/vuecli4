import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        author: '建筑公司',
        isLogin: ''
    },
    mutations: {
        newAuthor(state, msg) {
            state.author = msg
            localStorage.setItem("author", msg)
        },
        isLogin(state, msg) {
            state.isLogin = msg
            localStorage.setItem("isLogin", msg)
        }
    },
    actions: {
    },
    modules: {
    }
})
