<template>
    <div class="container">
        <Carousel></Carousel>
        <navcontent :title="ntitle"></navcontent>
        <div class="flexM">
            <div class="lContent">
                <div class="top">
                    <div class="title">
                        {{titleVal}}
                    </div>
                    <div class="time">
                        <span>发布日期：</span>
                        <span>{{timeDate}}</span>
                    </div>
                    <div class="content">
                        <p>{{content}}</p>
                    </div>
                    <addTable :tableDatas="tableDatas" style="padding-bottom:10px" v-show="typeId!=1">
                        <div slot="edit"></div>
                    </addTable>
                    <div class="notice">
                        温馨提示：详细信息及联系方式只对会员开放，请
                        <span class="noticeSign">登录/申请免费试用</span>
                        成为会员，或拨打咨询电话：0755-26921213
                    </div>
                    <el-button type="primary" round @click="toBid" v-show="typeId!=1">
                       我要投标
                    </el-button>
                </div>

                <div style="height: 20px;width: 100%;background: #f8f8f8"></div>
                <div class="pre_next flexM">
                    <span class="pre_txt">上一条：<router-link :to="{name:'tenderDetail',query:{ids: preId}}">张家口市公安局万全区分局物业管理服务项目中标公告</router-link></span>
                    <span class="pre_txt">下一条：<router-link :to="{name:'tenderDetail',query:{ids: nextId}}">四川省凉山彝族自治州冕宁县职业技术学校厨房设备采购项目公开招标结果公告更正公告</router-link></span>
                </div>
            </div>
            <div class="rContent">
                <rightContent></rightContent>
            </div>
        </div>
    </div>
</template>
<script>
import navcontent from '../NavTab/navcontent'
import rightContent from '../rightContent'
import Carousel from '../carousel'
import addTable from '../userInfo/addTable'
export default {
    components:{
        navcontent,
        rightContent,
        Carousel,
        addTable
    },
    data() {
        return {
            ntitle:[" 招标信息"," 招标详情页"],
            titleVal:"",
            timeDate:"",
            pjtid: '',
            preId: '1',
            nextId: '2',
            pageId:'',
            content:'',
            tableDatas:[],
            typeId:'',
        }
    },
    mounted() {
        this.pjtid = this.$route.query.id || this.$route.query.ids  // 从其他首页进入详情页的id
        this.pageIdDetail(this.pjtid)
    },
    // 路由监听
    watch: {
        $route: {
          handler() {
            this.pageId = this.$route.query.ids // 详情页中上一页和下一页之间的切换
            this.pageIdDetail(this.pageId) //深度监听，同时也可监听到param参数变化
        },
            deep: true,
        },
    },
    methods:{
        pageIdDetail(idVal) {
            console.log(idVal) // 这里可以向后台提供id，并请求数据
            this.get("/bids/get/notice/",{"notice_id":idVal}).then((res) => {
                this.typeId = res.data.notice.type
                this.content = res.data.notice.notice_content
                this.titleVal = res.data.notice.title
                this.timeDate = res.data.notice.declare_date
                this.tableDatas = res.data.bids || []
                this.$store.commit('bidTable', res.data.bids)
                localStorage.setItem('bidTable', JSON.stringify(res.data.bids))
            })
        },
        toBid() {
            console.log(this.pjtid)
            this.$router.push({  //核心语句
                name:'bid',   //跳转的路径
                query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                    bid:this.pjtid, 
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.container
    width 1200px
    margin 0 auto
.lContent
    width 880px
    font-size 24px
    color #333
    margin-bottom 20px
    margin-right 20px
    font-size 14px
    .top
        padding 20px
        background-color #fff
        .title
            font-weight 700
            display flex
            justify-content center
            flex-wrap wrap
            font-size 20px
        .time
            heigt 30px
            line-height 30px
            margin 20px 0
            text-align center
            color #999
            font-size 12px
        .content
            text-align left
            word-wrap break-word
            word-break break-word
            padding 10px
            text-indent 29px
            line-height 24px
        .notice
            border 1px red solid
            padding 10px
            color red
            border-radius 4px
            margin 15px 0
            text-indent 29px
        .noticeSign
            color #0898FF
            cursor pointer
    .pre_next
        padding 0 15px 20px 15px
        height 40px
        line-height 40px
        background-color #fff
        .pre_txt
            width 50%
            overflow hidden
            a
                color #0898ff
.rContent
    width 300px
.el-button
    width 300px
    height 40px
    display block
    margin 0 auto
    font-size 16px
</style>