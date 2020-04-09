<template>
   <div>
        <slot name="edit">
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    border>
                <el-table-column
                        label="编号"
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="材料名称"
                        width="200">
                        
                    <template slot-scope="scope">
                        <!-- <el-form-item :prop="'tableData.' + scope.$index + '.input'" :rules='model.rules.name'>
                            <el-input style="width:80px"  v-model="scope.row.input" ></el-input>
                        </el-form-item> -->
                        <el-input v-model="scope.row.name" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="alias"
                        label="别名"
                        width="150">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.alias" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="specification"
                        label="材料规格"
                        width="120">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.specification" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="材料类型"
                        width="100">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.type" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="unit"
                        label="单位"
                        width="80">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.unit" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="number"
                        label="数量"
                        width="80">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.number" type="number"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="brand"
                        label="品牌"
                        width="80">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.brand" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column width="120" label="编辑" prop="edit">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="addLine(scope.$index)">+</el-button>
                        <el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">-</el-button>
                    </template>
                </el-table-column>
            </el-table>        
        </slot>
        <slot name="unedit">
            <el-table
                    :data="tableDatas"
                    style="width: 100%"
                    border>
                <el-table-column
                        label="编号"
                        type="index"
                        width="59">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="材料名称"
                        width="200">
                        
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.name" type="text"></el-input> -->
                        <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="alias"
                        label="别名"
                        width="120">
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.alias" type="text"></el-input> -->
                        <span>{{scope.row.alias}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="specification"
                        label="材料规格"
                        width="150">
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.specification" type="text"></el-input> -->
                        <span>{{scope.row.specification}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="材料类型"
                        width="100">
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.type" type="text"></el-input> -->
                        <span>{{scope.row.type}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="unit"
                        label="单价"
                        width="50">
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.unit" type="text"></el-input> -->
                        <span>{{scope.row.unit}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="number"
                        label="数量"
                        width="60">
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.number" type="number"></el-input> -->
                        <span>{{scope.row.number}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="brand"
                        label="品牌"
                        class="brand">
                    <template slot-scope="scope">
                        <!-- <el-input v-model="scope.row.brand" type="text"></el-input> -->
                        <div v-if="scope.row.brand">
                            <span v-for="(val, index) in JSON.parse(scope.row.brand)" :key="index">{{val}}、 </span>
                        </div>
                        
                    </template>
                </el-table-column>
                <!-- <el-table-column width="120" label="编辑" prop="edit">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="addLine(scope.$index)">+</el-button>
                        <el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">-</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
        </slot>
        <!-- <slot name="bid"></slot> -->
        <!-- <slot name="bid">
            <el-table
                    :data="tableDatass"
                    style="width: 100%"
                    border>
                <el-table-column
                        label="编号"
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="材料名称"
                        width="200">
                        
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.name" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="alias"
                        label="别名"
                        width="150">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.alias" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="specification"
                        label="材料规格"
                        width="120">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.specification" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="材料类型"
                        width="100">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.type" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="unit"
                        label="单位"
                        width="80">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.unit" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="number"
                        label="数量"
                        width="80">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.number" type="number"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="brand"
                        label="品牌"
                        width="80">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.brand" type="text"></el-input>
                    </template>
                </el-table-column>
                <el-table-column width="120" label="编辑" prop="edit">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="addLine(scope.$index)">+</el-button>
                        <el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">-</el-button>
                    </template>
                </el-table-column>
            </el-table>        
        </slot> -->
   </div>
</template>

<script>
export default {
    props:['tableDatas'],
    data() {
        return {
            tableData:[{
                "name": "",
                "alias": "",
                "specification": "",
                "type": "",
                "unit": "",
                "number": "",
                "brand": "",
            }],
        }
    },
    methods:{
        addLine(index){ //添加行数
            var newValue = {
                "name": "",
                "alias": "",
                "specification": "",
                "type": "",
                "unit": "",
                "number": "",
                "brand": "",
              };
            //添加新的行数
            // this.tableData.push(newValue);
            this.tableData.splice(index+1,0,newValue)
            console.log(index)
            console.log(this.tableData)
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
.el-button--small
    font-size 16px
</style>