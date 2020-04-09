<template>
    <div class="right">
        <haslogin v-if="logining" :data='loginData'></haslogin>
        <signUp v-else></signUp>
        <hotWord>
            <template slot="hot">
                <div class="top">
                    <div class="flexM paddingW">
                        <span><img class="shutiao" src="../assets/images/bd_left.png" alt="">招标热词</span>
                        <span class="more">更多</span>
                    </div>
                </div>
            </template>
            <template slot="hot">
                <div class="mid flexMW">
                    <span class="clickwords" @click="sendMsg(item)" v-for="(item, i) in hotwords" :key="i"><i class="iconfont" :class="[i==0?'iconhuo':'iconnew']" style="font-size:24px;"></i>{{item}}</span>
                    <!-- <span @click="sendMsg(item)"><i class="iconfont " style="font-size:28px;">{{item}}</i></span> -->
                </div>
            </template>
            <template slot="hotContent">
                <div class="bottom flexW">
                    <span class="clickwords" v-for="(item,i) in words" :key="i" @click="sendMsg(item)">{{item}}</span>
                </div>
            </template>
        </hotWord>
        <hotWord>
            <template slot="hot">
                <div class="top">
                    <div class="flexM paddingW">
                        <span><img class="shutiao" src="../assets/images/bd_left.png" alt="">最新施工方案</span>
                        <span class="more">更多</span>
                    </div>
                </div>
            </template>
            <template slot="hotContent">
                <div class="bottom flexW">
                    <span class="wordwrap" v-for="(item,i) in buildWord" :key="i">{{item}}</span>
                </div>
            </template>
        </hotWord>
        
    </div>
</template>

<script>
import hotWord from './hotWords'
import signUp from './login/signUp'
import haslogin from './login/haslogin'
export default {
    components:{
        signUp,
        hotWord,
        haslogin
    },
    data() { 
        return {
            hotwords:["望远镜","色谱仪"],
            words:["三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器","三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器"],
            buildWord:["广东恒建工程有限公司","中交二航局-广东广州","中交四航局-广州","中铁南方投资集团有限公司","鹤山市友和建筑工程有限公司","中铁建设集团有限公司华南分公司","中国能源建设集团广东火电工程有限公","中铁建设集团有限公司华南分公司"],       
            logining:false,
            loginData:null
        }
    },
    methods: {
        sendMsg(val) {
            this.$emit('func',val)
        },
        getHotWord() {
            this.get('bids/get/hot/word/').then((res) => {
                console.log(res.data)
                this.words = res.data.map((item) => {
                    return item[5]
                })
            })
        },
        doLogin() {
            if(localStorage.getItem("isLogin") == 'true') {
                if(localStorage.getItem('token')) {
                    this.get('user/index/').then((res) => {
                        if(res.code == '0') {
                            // this.$store.commit('isLogin', true)
                            // localStorage.setItem('token',res.data.token)
                            console.log(res.data)
                            this.logining = true
                            this.loginData = Object.assign({},res.data)
                            
                        }
                    })
                } else {
                    this.logining = false
                }
                
            } else {
                this.logining = false
            }
        }
    },
    //利用计算属性
    computed: {
        myLogin() {
            return this.$store.state.isLogin;
        }
    },
    //监听执行
    watch: {
        myLogin(val) {
            this.logining = val
            this.doLogin()
        }
    },
    created() {
        this.doLogin()
    },
    mounted() {
        this.getHotWord()
    },
 }
</script>

<style lang='stylus' scoped>
.mid,.bottom
    font-size 14px
.shutiao
    position relative
    padding-right 8px
    top 4px
.iconfont
    display inline-block
    height 100%;
    vertical-align middle
.clickwords
    cursor pointer
.bottom
    .clickwords:hover
        color #DE0403
</style>