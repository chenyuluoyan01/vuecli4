<template>
    <div class="container">
        <Carousel></Carousel>
        <navcontent :title="ntitle"></navcontent>
        <div class="flexM">
            <div class="lContent">
                <div class="tableContent">
                    <addTable style="padding-bottom:10px" :tableDatas="tableDatas">
                        <div slot="edit"></div>
                    </addTable>
                </div>        
                <!-- <addTable style="padding-bottom:10px" :tableDatas="tableDatass">
                    <div slot="unedit"></div>
                </addTable> -->
                <div class="tableContent">
                    <el-form :model="tableDataForm" ref="myForm" >
                        <el-table :data="tableData" style="width: 100%" ref="tableData" border>
                            <el-table-column label="编号" type="index" width="60"></el-table-column>
                            <el-table-column prop="name" label="名称" width="170">
                                <template slot-scope="scope">
                                    <span>{{scope.row.name}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="type" label="型号" width="90">                        
                                <template slot-scope="scope">
                                    <span>{{scope.row.type}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="unit" label="单位" width="70">
                                <template slot-scope="scope">
                                    <span>{{scope.row.unit}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="number" label="数量" width="120">
                                <template slot-scope="scope">
                                    <el-form-item :prop= "'products.'+scope.$index+'.number'" :rules="fromaDataRules.number">
                                        <el-input v-model="scope.row.number" type="number" :min="0"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column prop="price" label="单价" width="120">
                                <template slot-scope="scope">
                                    <el-form-item :prop= "'products.'+scope.$index+'.price'" :rules="fromaDataRules.price">
                                        <el-input v-model="scope.row.price" type="number" :min="0"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column prop="brand" label="品牌" width="145">
                                <template slot-scope="scope">
                                    <el-form-item  :prop= "'products.'+scope.$index+'.select_value'" :rules="fromaDataRules.select_value">
                                        <el-select v-model="scope.row.select_value" placeholder="请选择品牌">
                                            <el-option :label="item" :value="item"  v-for='(item, i) in scope.row.brand' :key="i">{{item}}</el-option>
                                        </el-select>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column prop="total_price" label="合价" width="90">
                                <template slot-scope="scope">
                                    <span>{{scope.row.unit_price*scope.row.number || 0}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="remark" label="备注" >
                                <template slot-scope="scope">
                                    <el-form-item :prop= "'products.'+scope.$index+'.remark'">
                                        <el-input v-model="scope.row.remark" type="textarea"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>
                            <el-table-column width="100" label="编辑" prop="edit">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="small" @click="addLine(scope.$index)">+</el-button>
                                    <el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">-</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                    <div class="tableContent">
                        <el-form :model="producerData" ref="myForms" :rules="tableRules" :inline="true">
                            <el-form-item label="预付款比例" prop="down_payment" style="width:30%">
                                <el-input v-model="producerData.down_payment" type="number" style="width:88%" :min="0"></el-input>
                                <span style="display:inline-block;text-align:center;width:12%;">%</span>
                            </el-form-item>
                            <el-form-item label="是否卸货" prop="unloading" style="width:30%">
                                <el-select v-model="producerData.unloading" placeholder="请选择">
                                    <el-option label="是" value="1" ></el-option>
                                    <el-option label="否" value="0" ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="税率" prop="taxes" style="width:30%">
                                <el-input v-model="producerData.taxes" type="number" style="width:88%" :min="0"></el-input>
                                <span style="display:inline-block;text-align:center;width:12%;">%</span>
                            </el-form-item>
                        <!-- <el-table :data="producerData" style="width: 551px" ref="producerData" border>
                                <el-table-column label="编号" type="index" width="60"></el-table-column>
                                <el-table-column label="预付款比例" width="180">
                                    <template slot-scope="scope">
                                        <el-col :span="18">
                                            
                                            <el-form-item :prop="scope.row.down_payment" :rules="tableRules.down_payment">
                                                <el-input v-model="scope.row.down_payment" type="number"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6" style="text-align:center;height:40px;line-height:40px"><span>%</span></el-col>
                                    </template>
                                    
                                </el-table-column>
                                <el-table-column label="是否卸货" width="130">
                                    <template slot-scope="scope">
                                        <el-form-item  :prop="scope.row.unloading" :rules="tableRules.unloading">
                                            <el-select v-model="scope.row.unloading" placeholder="请选择">
                                                <el-option label="是" value="1" ></el-option>
                                                <el-option label="否" value="0" ></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="taxes" label="税率" width="180">
                                    <template slot-scope="scope">
                                        <el-col :span="18">
                                            <el-form-item :prop="scope.row.taxes" :rules="tableRules.taxes">
                                                <el-input v-model="scope.row.taxes" type="number"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6" style="text-align:center;height:40px;line-height:40px">
                                            <span>%</span>
                                        </el-col>
                                    </template>
                                </el-table-column>
                            </el-table> -->
                        </el-form>
                    </div>
                    </div>
                <div class="btn">
                    <el-button type="primary" round @click="submit">提交</el-button>
                </div>
            </div>
            <!-- <div class="rContent">
                <rightContent></rightContent>
            </div> -->
        </div>
    </div>
</template>

<script>
import navcontent from '../NavTab/navcontent'
// import rightContent from '../rightContent'
import Carousel from '../carousel'
import addTable from '../userInfo/addTable'
export default {
    components:{
        navcontent,
        // rightContent,
        Carousel,
        addTable
    },
    data() { 
        return {
            ntitle: [" 招标信息"," 招标详情页"," 投标信息"],
            tableDatas: [],
            tableData:[],
            tableDataForm:{},
            producerData:{},
            pageId:'',
            selectVal:'',
            fromaDataRules:{
                price:[{ required: true, message: '请输入', trigger: 'blur' }],
                number:[ { required: true, message: '请填写', trigger: 'blur' }],
                select_value:[ { required: true, message: '请选择', trigger: ['blur','change']}],
            },
            tableRules: {
                down_payment:[ { required: true, message: '请填写', trigger: 'blur' }],
                unloading:[ { required: true, message: '请选择', trigger: ['blur','change']}],
                taxes:[ { required: true, message: '请填写', trigger: 'blur' }],
            }
        }
    },
        // 路由监听
    watch: {
        $route: {
          handler() {
            this.pageId = this.$route.query.bid // 详情页中上一页和下一页之间的切换
            //深度监听，同时也可监听到param参数变化
            this.getBidTable(this.pageId)
        },
            deep: true,
        },
    },
    mounted() {
        this.tableDatas = JSON.parse(localStorage.getItem('bidTable'))
        this.pageId = this.$route.query.bid
        this.getBidTable(this.pageId)
    },
    methods: {
        getBidTable(id) {
            this.get('producer/toubiao/',{"notice_id": id}).then((res) => {
                let newData = res.data.top.products
                newData.forEach(function(value,index){
                    value.product_id = value.id
                    delete value.create_time
                    delete value.is_delete
                    delete value.specification
                    delete value.update_time
                    delete value.notice_id
                    delete value.alias
                    delete value.id
                })
                this.tableData = newData
                this.tableDataForm = res.data.top
                res.data.bottom.forEach(function(value, index){
                    value.down_payment = ''
                    value.taxes = ''
                    value.unloading = '0'
                })
                this.producerData = res.data.bottom[0]
            })
        },
        submit() {
            console.log(JSON.stringify(this.tableData))
            this.$refs.myForm.validate((valid) => {
                if (valid) {
                     this.$refs.myForms.validate((valids) => {
                        if(valids) {
                            let product_list = JSON.stringify(this.tableData)
                            let producer_list = JSON.stringify(this.producerData)
                            this.post('producer/toubiao/', {"product_list":product_list,"producer_list":producer_list,"notice_id":this.pageId}).then((res) => {
                                if(res.code == '3003') {
                                    this.$notify({
                                        title: '警告',
                                        message: '该招标信息您已投过',
                                        type: 'warning'
                                    });
                                } else if(res.code == '0') {
                                    this.$message({
                                        showClose: true,
                                        message: '提交投标数据成功',
                                        type: 'success'
                                    });
                                }
                            })
                        }
                     })
                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },
        addLine(index){ //添加行数
            console.log(this.tableData[index])
            var newValue = {
                "name": this.tableData[index].name,
                "alias": this.tableData[index].name,
                "specification": this.tableData[index].specification,
                "type": this.tableData[index].type,
                "unit": this.tableData[index].unit,
                "number": this.tableData[index].number,
                "brand": this.tableData[index].brand,
                "product_id": this.tableData[index].id
              };
            this.tableData.splice(index+1,0,newValue)
        },
        handleDelete(index){ //删除行数
            let tableData = this.tableData
            if(tableData.length>1) {
                this.tableData.splice(index, 1)
            } else {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是最后一行，不能执行删除',
                    type: 'warning'
                });
            }
            
        },
    }
}
</script>
<style lang='stylus' scoped>
.container
    width 1200px
    margin 0 auto
.lContent
    width 100%
    font-size 24px
    color #333
    margin-bottom 20px
    // margin-right 20px
    font-size 14px
    padding 20px
    background-color #fff
.rContent
    width 300px
.btn
    margin-top 30px
    .el-button
        width 300px
        height 40px
        display block
        margin 0 auto
        font-size 16px
.el-button--small
    padding 5px 12px
.tableContent
    margin 0 auto
    margin-top 40px
.MaterialName
    width 250px
</style>