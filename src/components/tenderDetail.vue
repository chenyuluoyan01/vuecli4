<template>
    <div class="container">
        <Carousel></Carousel>
        <navcontent :title="ntitle"></navcontent>
        <div class="flexM">
            <div class="lContent">
                <div class="top">
                    <div class="title">
                        <span>{{titleVal}}</span>
                    </div>
                    <div class="time">
                        <span>发布日期：</span>
                        <span>{{timeDate}}</span>
                    </div>
                    <div class="content">
                        <p>四川省凉山彝族自治州越西县越西县农业农村局越西县****年竹阿觉镇麻姑村产业园基础设施建设项目竞争性磋商采购公告信息来源：四川政府采购网发表时间：************ 采购项目名称 四川省凉山彝族自治州越西县越西县农业农村局越西县****年竹阿觉镇麻姑村产业园基础设施建设项目 采购项目编号 **************** 采购方式 竞争性磋商采购 行政区划 四川省凉山彝族自治州越西县 公告发布时间 ************ 采购人 四川省凉山彝族自治州越西县越西县农业农村局 采购人地址和联系方式 地址：越西县农业农村局联系方式：黄先生*********** 采购代理机构名称 北京明安建设项目管理有限公司 采购代理机构地址和联系方式 地址：北京市朝阳区安华西里*区*号楼*层联系方式：徐雅菡*********** 采购项目联系人姓名和电话 联系人：罗先生电话：*********** 项目包个数 * 各包描述 附件 供应商参加磋商应当具备的资格条件和应当提供的相关证明材料 *、具有独立承担民事责任的能力； *、具有良好的商业信誉和健全的财务会计制度； *、具有履行合同所必须的设备和专业技术能力； *、具有依法缴纳税收和社会保障资金的良好记录； *、参加政府采购活动前三年内在经营活动中没有重大违法记录； *、法律、行政法规规定的其他条件； *、针对本采购项目的特殊要求： **、竞标人须具备房屋建筑工程施工总承包叁级及以上资质证明文件复印件；同时具有有效的安全生产许可证。 **、具有良好的售后服务措施； **、对参加本次政府采购活动的诚信承诺； **、竞标人需提供信用信息查询记录复印件或网络截图；信用中国网站和中国政府采购网等渠道查询 **、竞标人需提供竞标人及其现任法定代表、主要负责人无行贿犯罪记录承诺书； 获取磋商文件开始时间 ************ 获取磋商文件结束时间 ************ 获取磋商文件发售方式 获取方式：现场发售；经办人员当场提交以下资料：需提供房屋建筑工程施工总承包叁级及以上资质证明文件复印件；有效的安全生产许可证复印件。供应商为法人或者其他组织的需提供单位介绍信、经办人身份证明；上述所有材料均须加盖竞标人鲜章 获取磋商文件地点 北京明安建设项目管理有限公司四川省西昌市尤家屯安置新村**,**号办公室*楼。 磋商文件售价元 *** 磋商文件发售及供应商报名地点 北京明安建设项目管理有限公司四川省西昌市尤家屯安置新村**,**号办公室*楼。 响应文件递交开始时间 ************ 响应文件递交结束时间 ************ 响应文件递交地点 北京明安建设项目管理有限公司四川省西昌市尤家屯安置新村**,**号办公室*楼。 响应文件开启时间 ************ 响应文件开启地点 北京明安建设项目管理有限公司四川省西昌市尤家屯安置新村**,**号办公室*楼。 供应商交纳磋商保证金的金额和缴纳方式 *、金额：*******元。 *、交款方式：投标保证金可以以支票、汇票、本票或者金融机构出具的保函等非现金形式提交包括网银转账电汇等方式所有递交方式均以到帐时间为准。若以保函方式提交的必须在保证金截止时间前开具。 *、收款单位：北京明安建设项目管理有限公司四川分公司。 开户行：中国民生银行股份有限公司成都经济技术开发区支行 银行帐号：********* 交款截止时间：到账保函提交截止时间与投标响应截止时间一致。 *、若以保函方式提交的须在递交投标文件截止时间前提交保函原件到采购代理机构。 *、供应商应将保函复印件或银行转账凭证复印件或电汇凭证复印件或采购代理机构出具的收据复印件或加盖采购代理机构财务专用章的保证金交纳证明材料原件装订在投标文件中。 注：不满足以上*****投标保证金要求的将在资格审查时作无效投标。 预算金额元 ******** 采购品目名称 房屋附属设施施工 行业划分 *** 采购项目需要落实的政府采购政策 促进中小企业发展,促进监狱企业发展,促进残疾人福利性单位发展 项目的用途、数量、简要技术要求或招标项目的性质 详见招标文件 其它补充事宜 备注 项目标识 否</p>
                    </div>
                    <div class="notice">
                        温馨提示：详细信息及联系方式只对会员开放，请
                        <span class="noticeSign">登录/申请免费试用</span>
                        成为会员，或拨打咨询电话：0755-26921213
                    </div>
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
import navcontent from './NavTab/navcontent'
import rightContent from './rightContent'
import Carousel from './carousel'
export default {
    components:{
        navcontent,
        rightContent,
        Carousel
    },
    data() {
        return {
            ntitle:["> 招标信息","> 招标详情页"],
            titleVal:"四川省凉山彝族自治州越西县越西县农业农村局越西县2020年竹阿觉镇麻姑村产业园基础设施建设项目竞争性磋商采购公告",
            timeDate:"2020-03-24",
            pjtid: '',
            preId: '1',
            nextId: '2',
            pageId:''
        }
    },

    
    mounted() {
        this.pjtid = this.$route.query.id  // 从其他首页进入详情页的id
        this.pageIdDetail(this.pjtid)
    },
    // 路由监听
    watch: {
        $route: {
          handler() {
            this.pageId = this.$route.query.ids // 详情页中上一页和下一页之间的切换
            this.pageIdDetail(this.pageId);
            //深度监听，同时也可监听到param参数变化
        },
        deep: true,
        },
    },
    methods:{
        pageIdDetail(idVal) {
            console.log(idVal) // 这里可以向后台提供id，并请求数据
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
    background-color #fff
    font-size 14px
    .top
        padding 20px
        .title
            font-weight 700
            display flex
            text-align center
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
        .pre_txt
            width 50%
            overflow hidden
            a
                color #0898ff
.rContent
    width 300px
</style>