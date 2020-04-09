<template>
    <div style="min-width:500px">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules" v-show="!dialog">
            <el-form-item label="标题" prop="notice_title" class="fromItem">
                <el-input v-model="form.notice_title"></el-input>
            </el-form-item>
            <el-form-item label="日期" prop="notice_date" class="fromItem">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.notice_date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容" prop="notice_content" class="fromItem">
                <el-input type="textarea" v-model="form.notice_content" style="width: 100%;" :rows="10"></el-input>
            </el-form-item>
            <el-form-item label="省份" prop="notice_area" class="fromItem">
                <el-input v-model="form.notice_area" style="width: 100%;" :rows="10" disabled></el-input>
            </el-form-item>
            <el-form-item label="投标公司">
                <el-table :data="bidderData" ref="multipleTable" highlight-current-row style="width: 100%" border @current-change="handleSelectionChange">
                    <el-table-column
                        type="selection"
                        label="编号"
                        width="60">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="用户名"
                        width="200">
                        <template slot-scope="scope">{{scope.row.username}}</template>
                    </el-table-column>
                    <el-table-column
                        label="公司名"
                        width="200">
                        <template slot-scope="scope">{{scope.row.company_name}}</template>
                    </el-table-column>
                    <el-table-column
                        label="所投材料数"
                        width="200">
                        <template slot-scope="scope">{{scope.row.material_count}}</template>
                    </el-table-column>
                    <el-table-column
                        label="所投品牌数"
                        width="200">
                        <template slot-scope="scope">{{scope.row.brand_count}}</template>
                    </el-table-column>
                    
                </el-table>
            </el-form-item>

            <!-- <el-form-item label="投标公司">
                <el-table>

                </el-table>
                
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即发布</el-button>
                <el-button @click="resetForm">取消</el-button>
            </el-form-item>
        </el-form>

        <el-dialog
            title="提示"
            :visible.sync="dialog"
            :show-close=false
            width="30%">
            <span>您需要在查询我的招标页面，点击招标，才能进入该页面</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="toRelease">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            notice_id: '',
            bid_user_id:'',
            dialog: false,
            bidderData: [],
            form: {
                notice_title: '',
                notice_date: new Date(),
                notice_content: '',
                notice_area:''
            },
            rules:{
                notice_title:[{ required: true, message: '请输入招标名称', trigger: 'change' }],
                notice_area: [{ required: true, message: '请选择省份', trigger: 'change' }],
                notice_date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                notice_content: [{ required: true, message: '请填写招标内容', trigger: 'blur' }]
            },
            regionData: JSON.parse(localStorage.getItem('regionData'))
        }
    },
    mounted() {
        this.notice_id = this.$route.query.notice_id || ''
        this.form.notice_title = this.$route.query.title
        this.form.notice_area = this.$route.query.area
        if(!this.notice_id) {
            this.dialog = true
        } else {
            // 获取投标者的信息
            this.getBidInfo(this.notice_id)
        }
    },
    methods: {
        // 取消对话框
        toRelease() {
            this.$router.push({name: 'queryRelease'})
            this.dialog = false
        },
        resetForm() {
            this.$refs.form.resetFields();
        },
        getBidInfo(id) {
            this.get('user/my/bids/tender/', {my_notice_id: id}).then((res)=>{
                if(res.code == '0') {
                    console.log(res.data)
                    let data = res.data
                    let dataArr = []
                    // 获取数组对象中user对象，并加入到数组中，变成新的数组对象
                    this.bidderData = data.forEach(item => {
                        dataArr.push(item.user)
                    })
                    dataArr.forEach(item => {
                        item.checked = false
                    })
                    this.bidderData = dataArr
                    console.log(this.bidderData)
                }      
            }).catch((error) => {
                console.log(error);
            })
        },
      handleSelectionChange (row) {
        this.bidderData.forEach(item => {
          if (item.user_id !== row.user_id) {
                item.checked = false
          }else {
                item.checked = true
          }
        })
        
        this.bid_user_id = row.user_id
        console.log(this.bid_user_id)
      },
        onSubmit() {
            this.$refs.form.validate((valid) => {    
                let len = this.regionData.length
                let region = this.form.notice_area
                for(let i =0; i < len; i++) {
                    if (this.regionData[i].includes(region)) {
                        region = this.regionData[i][0]
                    }
                }
                let params = {
                    notice_title: this.form.notice_title,
                    notice_date: this.form.notice_date,
                    notice_content: this.form.notice_content,
                    notice_area: region, // 地区编码
                    notice_id: this.notice_id,
                    notice_user_list: [],
                    bid_user_id: this.bid_user_id
                }
                if (valid) {
                    // this.$refs.upload.submit()
                    this.post('user/set/winning/bid/', params).then((res)=>{
                        if(res.code == '0') {
                            this.$message({
                                message: '上传成功',
                                type: 'success'
                            })
                            this.$refs.form.resetFields()
                        }      
                    }).catch((error) => {
                        console.log(error);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
    }
}
</script>

<style lang='stylus' scoped>
.fromItem
    width 500px
.title
    display inline-block
    padding 10px 15px
    font-size 14px
    width 150px
    box-sizing border-box
.everyRow
    border-bottom 1px solid #ddd
    cursor pointer

.table-simple-checkbox
    .el-checkbox__label
        display none
</style>