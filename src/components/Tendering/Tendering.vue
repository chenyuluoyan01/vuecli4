<template>
    <div class="container">
        <Carousel></Carousel>
        <navcontent :title="ntitle"></navcontent>
        <div class="flexM">
            <div class="left bgcolor">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="类别：">
                        <el-radio-group v-model="form.type" >
                            <el-radio :label="item[0]" v-for="item in typesData" :key="item[0]">{{item[1]}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="地区：">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <el-checkbox-group v-model="form.resource" @change="handleCheckedCitiesChange">
                            <el-checkbox :label="item[0]" name="type" v-for="item in regionData" :key="item[0]">{{item[1]}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="时间：">
                        <el-radio-group v-model="form.time">
                            <el-radio :label="item[0]" v-for="item in time_range" :key="item[0]">{{item[1]}}</el-radio>
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
                v-loading="loading"
                element-loading-text="拼命加载中"
                
                :data="tableData"
                style="width: 100%;margin-left:18px">
                    <el-table-column
                        prop="1"
                        label="类型"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="2"
                        label="地址"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="3"
                        label="招标信息标题">
                        <template slot-scope="scope">
                            <router-link class="table_link" :to="{name:'tenderDetail',query:{id:scope.row[0]}}">{{scope.row[3]}}</router-link>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="4"
                        label="发布时间"
                        width="180">
                    </el-table-column>
                </el-table>
                <div class="pages">
                    <el-pagination
                    background
                    layout="sizes, prev, pager, next"
                    @current-change="handleCurrentChange"
                    @size-change = "handleSizeChange"
                    :current-page="currentPage"
                    :page-sizes="[1, 20, 30, 50]"
                    :page-size="pageSize"
                    :total="total">
                    </el-pagination>
                </div>

            </div>
            <rightContent @func="getMsgFormSon"></rightContent>
        </div>
        <!-- <addTable></addTable> -->
    </div>
</template>

<script>
import navcontent from '../NavTab/navcontent'
import rightContent from '../rightContent'
// import addTable from '../login/addTable'
import Carousel from '../carousel'
export default {
    components:{
        navcontent,
        rightContent,
        // addTable,
        Carousel
    },
    data () {
        return {
            ntitle:["招标信息"],
            typesData:[],
            regionData:[],
            time_range:[],
            currentPage:1,
            pageSize:1,
            total:5,
            isIndeterminate: true,
            checkAll: false,
            loading: true,
            form: {
                name: '',
                resource: ['-1'],
                type: '-1',
                time:'-1'
            },
            tableData: []
        }
    },
    created() {
        this.getSearch()
        this.onSubmit()
    },
    methods: {
        // 搜索功能
        onSubmit() {
            let params = {
                types: this.form.type,
                region: JSON.stringify(this.form.resource),
                time: this.form.time,
                search: this.form.name,
                page_size: this.pageSize,
                now_page: this.currentPage
            }
            this.get('bids/index/content/',params).then((res) => {
                this.loading = true 
                if(res.code == '0') {
                    this.tableData = res.data.data
                    this.total = parseInt(res.data.pagination.number_of_page)
                    this.currentPage = parseInt(res.data.pagination.now_page)
                    setTimeout(() => {
                        this.loading = false 
                    },800)          
                } else {
                    setTimeout(() => {
                        this.loading = false 
                    },800) 
                    this.$confirm('请求不到数据, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.onSubmit()
                        }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        })  
                    })
                }
            })
        },

        // 渲染表单内容
        getSearch() {
            this.get('bids/index/top/').then((res) => {
                this.typesData = res.data.types
                this.regionData = res.data.region
                this.time_range = res.data.time_range
            })
        },

        // 分页功能
        handleSizeChange(val){
            this.pageSize = val
            this.onSubmit()
        },
        handleCurrentChange(val){
            console.log(val)
            this.currentPage = val
            this.onSubmit()
        },

        // 表单多选框部分
        handleCheckAllChange(val) {
            if(val) {
                this.form.resource = this.regionData.map((val,key) => {return val[0]})
            } else {
                this.form.resource = []
            }
            this.isIndeterminate = false;
            console.log(this.form.resource)
        },
        handleCheckedCitiesChange(value) {
            
            this.form.resource = value
            console.log(this.form.resource)
            let checkedCount = value.length
            this.checkAll = checkedCount === this.regionData.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.regionData.length
        },

        // 子组件传值给父组件
        getMsgFormSon(data) {
            this.form.name = data
            this.onSubmit()
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