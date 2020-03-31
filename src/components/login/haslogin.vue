<template>
    <div class="containers bgcolor">
        <div class="top flexL font_sm">
            <div class="imgDiv">
                <img src="../../assets/images/head_img.png" alt="">
            </div>
            <div class="infoDiv">
                <p>{{data.cell_phone}}</p>
                <p class="member">
                    <i class="iconfont iconyanzhengma"></i>
                    <span>{{member}}</span>
                </p>
                <p class="company">{{data.company_name}}</p>
            </div>
        </div>
        <div class="mid flexM font_mid">
            <el-button type="primary" plain @click="toCenter">会员中心</el-button>
            <el-button plain @click="exit()">退出登录</el-button>
        </div>
        <div class="bottom font_sm">
            <div class="kefu">我的专属客服</div>
            <ul class="list" v-for="(item,i) in kflist" :key="i">
                <li>
                    <span><span class="title_litst">姓名：</span>{{item.name}}</span>
                </li>
                <li>
                    <span><span class="title_litst">电话：</span>{{item.tel}}</span>
                </li>
                <li>
                    <span><span class="title_litst">邮箱：</span>{{item.email}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    data() { 
        return {
            tel: '19908429295',
            member: '试用会员',
            kflist:[{
                name: '王莲娣',
                tel: '18926491548',
                email: 'lisa.wang@china0001.com.cn'
            }]
        }
    },
    methods: {
        exit() {
            this.$store.commit('isLogin', false)
            localStorage.setItem('token', '')
        },
        toCenter() {
            this.$router.push({path:'/userInfo'})
        }
    }
}
</script>

<style lang='stylus' scoped>
.containers
    padding 15px
.top
    .imgDiv
        position relative
        flex 1
        img
            position absolute
            top 50%
            transform translate(0, -50%)
    .company
        padding 1px 10px
        color #3391e4
        background-color #ddeefd
        border-radius 1rem
    .infoDiv
        width 140px
        overflow hidden
        .iconfont
            color #3391e4
            margin-right 8px
            font-weight bolder
.mid
    padding 30px 0
    border-bottom 1px solid rgba(221,221,221,1)
    margin-bottom 20px
    .el-button
        padding 10px 25px

.bottom
    .kefu
        background-color #ecebeb
        font-weight bold
        text-align center
        height 28px
        line-height 28px
        border-radius 4px
        margin-bottom 10px
    .list
        line-height 25px
    .title_litst
        display inline-block
        padding-right 2px
</style>