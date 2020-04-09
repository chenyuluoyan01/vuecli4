<template>
    <div class="">
        <el-table :data="data_list" style="width: 100%" border>
        <!-- <el-table-column  :label="val" v-for="(val, key) in header" :key="key" :min-width="80">
            <template slot-scope="scope">
                {{data_list[scope.$index][key]}}
            </template>
        </el-table-column> -->
            <el-table-column
                    label="编号"
                    type="index"
                    width="60">
            </el-table-column>
            
            <el-table-column
                    label="中标公告标题"
                    width="200">
                <template slot-scope="scope">
                    <span>{{scope.row[4]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="中标公告时间"
                    width="120">
                <template slot-scope="scope">
                    <span>{{scope.row[5]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="中标公告内容"
                    width="400">
                <template slot-scope="scope">
                    <span>{{scope.row[6]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="招标类型"
                    width="100">
                <template slot-scope="scope">
                    <span>{{scope.row[8] == 0?'招标公告':'中标公告'}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="公告状态"
                    width="80">
                <template slot-scope="scope">
                    <span>{{scope.row[8]==0?'显示':'隐藏'}}</span>
                </template>
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
</template>

<script>
export default {
    data() { 
        return {
            header:["创建时间","更新时间", "是否删除", '所属中标公告id','中标公告标题','中标公告时间','中标公告内容','中标公告地区','类型','状态','用户id'],
            data_list:[],
            currentPage:1,
            pageSize:1,
            total:5,
        }
    },
    created() {
        this.onSubmit()
    },
    methods: {
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
        onSubmit() {
            let params = {
                page_size: this.pageSize,
                now_page: this.currentPage
            }
            this.get('user/my/bids/', params).then(res=>{
                console.log("-----")
                console.log(res.data.my_tender)
                this.data_list = res.data.my_tender
                this.total = res.data.pagination.pagenum
            })            
        }

    }

}
</script>

<style lang='stylus' scoped>
</style>