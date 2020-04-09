import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        author: '建筑公司',
        isLogin: '',
        toCenter:false,
        bidTable:[],
        regionData:[],
        loginList:{},
        loginPhone: '',
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
        },
        bidTable(state, msg) {
            state.bidTable = msg
            localStorage.setItem("bidTable", msg)
        },
        regionData(state, msg) {
            state.regionData = msg
            localStorage.setItem("regionData", msg)
        },
        loginList(state, msg) {
            state.loginList = msg
        },
        loginPhone(state, msg) {
            state.loginPhone = msg
            localStorage.setItem("loginPhone", msg)
        },
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
        getLoginAction({ commit }) {
            axios.get('user/index/')
                .then((res) => {
                    commit('loginList', res.data.data) //调用mutations下面的changeListMutation方法并且传值过去
                })
                .catch((error) => {
                    console.log(error)
                })

        }
    },
    modules: {
    }
})
