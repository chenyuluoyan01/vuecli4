<template>
    <div class="container">
        <navcontent :title="ntitle"></navcontent>
        <div class="flexM">
            <div class="left bgcolor">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="类别：">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="全部"></el-radio>
                            <!-- <el-radio label="招标预告"></el-radio> -->
                            <el-radio label="招标公告"></el-radio>
                            <!-- <el-radio label="招标变更"></el-radio> -->
                            <el-radio label="中标公告"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="地区：">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="全部" name="type"></el-checkbox>
                            <el-checkbox label="吉林" name="type"></el-checkbox>
                            <el-checkbox label="黑龙江" name="type"></el-checkbox>
                            <el-checkbox label="辽宁" name="type"></el-checkbox>
                            <el-checkbox label="北京" name="type"></el-checkbox>
                            <el-checkbox label="天津" name="type"></el-checkbox>
                            <el-checkbox label="河北" name="type"></el-checkbox>
                            <el-checkbox label="山西" name="type"></el-checkbox>
                            <el-checkbox label="内蒙古" name="type"></el-checkbox>
                            <el-checkbox label="上海" name="type"></el-checkbox>
                            <el-checkbox label="江苏" name="type"></el-checkbox>
                            <el-checkbox label="浙江" name="type"></el-checkbox>
                            <el-checkbox label="山东" name="type"></el-checkbox>
                            <el-checkbox label="安徽" name="type"></el-checkbox>
                            <el-checkbox label="江西" name="type"></el-checkbox>
                            <el-checkbox label="福建" name="type"></el-checkbox>
                            <el-checkbox label="四川" name="type"></el-checkbox>
                            <el-checkbox label="重庆" name="type"></el-checkbox>
                            <el-checkbox label="云南" name="type"></el-checkbox>
                            <el-checkbox label="贵州" name="type"></el-checkbox>
                            <el-checkbox label="西藏" name="type"></el-checkbox>
                            <el-checkbox label="广东" name="type"></el-checkbox>
                            <el-checkbox label="广西" name="type"></el-checkbox>
                            <el-checkbox label="湖南" name="type"></el-checkbox>
                            <el-checkbox label="湖北" name="type"></el-checkbox>
                            <el-checkbox label="河南" name="type"></el-checkbox>
                            <el-checkbox label="陕西" name="type"></el-checkbox>
                            <el-checkbox label="甘肃" name="type"></el-checkbox>
                            <el-checkbox label="新疆" name="type"></el-checkbox>
                            <el-checkbox label="宁夏" name="type"></el-checkbox>
                            <el-checkbox label="青海" name="type"></el-checkbox>
                            <el-checkbox label="海南" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="时间：">
                        <el-radio-group v-model="form.time">
                            <el-radio label="全部"></el-radio>
                            <el-radio label="一周"></el-radio>
                            <el-radio label="一个月"></el-radio>
                            <el-radio label="三个月"></el-radio>
                            <el-radio label="半年"></el-radio>
                            <el-radio label="一年"></el-radio>
                            <el-radio label="两年"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="搜索：">
                        <div class="flexL">
                            <el-input v-model="form.name" placeholder="请输入招标信息标题关键词，关键词要简短"></el-input>
                            <el-button type="primary" class="serach-btn" @click="onSubmit">搜索</el-button>
                        </div>
                        
                    </el-form-item>
                </el-form>

                <el-table
                :data="tableData"
                style="width: 100%;margin-left:18px">
                    <el-table-column
                        prop="classes"
                        label="类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="titles"
                        label="招标信息标题">
                        <template slot-scope="scope">
                            <router-link class="table_link" :to="{name:'tenderDetail',query:{id:scope.row.id}}">{{scope.row.titles}}</router-link>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="发布时间"
                        width="180">
                    </el-table-column>
                </el-table>
                <div class="pages">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
                    </el-pagination>
                </div>

            </div>
            <rightContent></rightContent>
        </div>
        <addTable></addTable>
    </div>
</template>

<script>
import navcontent from '../NavTab/navcontent'
import rightContent from '../rightContent'
import addTable from '../login/addTable'
export default {
    components:{
        navcontent,
        rightContent,
        addTable
    },
    data () {
        return {
            ntitle:["招标信息"],
            words:["三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器","三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器"],
            buildWord:["广东恒建工程有限公司","中交二航局-广东广州","中交四航局-广州","中铁南方投资集团有限公司","鹤山市友和建筑工程有限公司","中铁建设集团有限公司华南分公司","中国能源建设集团广东火电工程有限公","中铁建设集团有限公司华南分公司"],
            form: {
                name: '',
                type: ['全部'],
                resource: '全部',
                time:'全部'
            },
            tableData: [{
                classes: '招标公告',
                address: '四川',
                titles: '四川省资阳市乐至县盛池乡卫生院数字化X线摄影系统（DR）政府采购项目询价采购公告',
                time: '2020-03-23',
                id: '1'
            }, {
                classes: '招标公告',
                address: '四川',
                titles: '四川省巴中市南江县人民医院住院大楼大厅LED采购项目询价采购公告',
                time: '2020-03-23',
                id: '2'
            },{
                classes: '招标公告',
                address: '四川',
                titles: '四川省内江市东兴区自然资源和规划局内江市东兴区2019年中央财政森林抚育采购项目公开招标采购公告更正公告',
                time: '2020-03-23',
                id: '3'
            },{
                classes: '招标公告',
                address: '四川',
                titles: '四川省巴中市南江县人民医院住院大楼大厅LED采购项目询价采购公告',
                time: '2020-03-23',
                id: '4'
            }]
        }
    },
    created() {
        this.$get('home',{"name":"zhangsan"}).then(res => {
            console.log(res)
        })
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style lang="stylus">
.container
    width 1200px
    margin 0 auto
.serach-btn
    margin-left 15px
.left
    width 880px
    padding-right 20px
    margin-right 20px
.right
    width 300px
.pages
    display flex
    flex-wrap wrap
    justify-content center
    margin-top 20px
.table_link
    color #606266
.el-table__body tr:hover>td a
    color #de0403
</style>