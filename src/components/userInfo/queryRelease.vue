<template>
    <div>
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
                    label="标题"
                    width="180">
                <template slot-scope="scope">
                    <span>{{scope.row[4]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="发布日期"
                    width="100">
                <template slot-scope="scope">
                    <span>{{scope.row[5]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="招标内容"
                    width="350">
                <template slot-scope="scope">
                    <span>{{scope.row[6]}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="招标省份"
                    width="80">
                <template slot-scope="scope">
                    <span>{{scope.row[7]}}</span>
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
                    label="状态"
                    width="80">
                <template slot-scope="scope">
                    <span>{{scope.row[9]==0?'可招标':'已结束'}}</span>
                </template>
            </el-table-column>
            <el-table-column width="120" label="编辑" prop="edit">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="clickTender(scope.row[3],scope.row[4],scope.row[7])" v-if="scope.row[9] == 0">发布中标</el-button>
                    <el-button type="info" size="small" disabled v-else>发布中标</el-button>
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
            header:["招标信息创建时间","更新时间", "是否删除", '招标信息的id','标题','发布日期','招标内容','招标省份编码','招标类型','状态','发布人id'],
            data_list:[],
            currentPage:1,
            pageSize:1,
            total:5,
            region:JSON.parse(localStorage.getItem("regionData"))
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
            this.currentPage = val
            this.onSubmit()
        },
        onSubmit() {
            let params = {
                page_size: this.pageSize,
                now_page: this.currentPage
            }
            this.get('user/my/tender/', params).then(res=>{
                this.data_list = res.data.my_tender
                this.total = res.data.pagination.pagenum
                let data_list = this.data_list
                let region = this.region
                let len = region.length
                for(let i =0; i < len; i++) {
                    for(let j = 0; j < data_list.length;j++) {
                        if(region[i].includes(data_list[j][7])) {
                            this.data_list[j][7] = region[i][1]
                        }
                    }    
                }
                
            })
              
        },
        clickTender(id, val, area) {
            this.$router.push({ name: 'issuewinbid', query: { notice_id: id, title: val, area: area}})
        }

    }

}
</script>

<style lang='stylus' scoped>
.el-table_1_column_1
    width 180px
</style>