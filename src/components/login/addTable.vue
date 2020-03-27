<template>
   <div>
         <el-table
                :data="tableData"
                style="width: 100%"
                border>
            <el-table-column
                    prop="bookname"
                    label="材料名称"
                    width="140px">
                <!-- <template slot-scope="scope">
                    <el-input v-model="scope.row.bookname" type="number"></el-input>
                </template> -->
            </el-table-column>

            <el-table-column
                    prop="recoveryTwo"
                    label="材料规格"
                    width="140px">
                <!-- <template slot-scope="scope">
                    <el-input v-model="scope.row.bookvolume" type="number"></el-input>
                </template> -->
            </el-table-column>

            <el-table-column
                    prop="bookborrower"
                    label="材料价格"
                    width="150px">
                <!-- <template slot-scope="scope">
                    <el-input v-model="scope.row.bookborrower" type="number"></el-input>
                </template> -->
            </el-table-column>

            <el-table-column>
                <template slot-scope="scope">
                    <!-- <button @click="addLine(scope.$index)"
                            class="addBtn"
                            v-if="scope.$index == tableData.length - 1"
                            >
                        <i class="el-icon-plus"></i>
                    </button> -->

                    <!-- <button @click="addLine(scope.$index)"
                            class="addBtn">
                        <i class="el-icon-plus"></i>
                    </button> -->
                    <el-button type="primary" size="small" @click="addLine(scope.$index)">+</el-button>
                    <el-button type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">-</el-button>
                    <!-- <button v-if="tableData.length > 1"
                            @click="handleDelete(scope.$index, scope.row)"
                            class="del-btn">
                        <i class="el-icon-minus"></i>
                    </button> -->
                </template>
            </el-table-column>
        </el-table>
   </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[{
                bookname: 'one',
                bookborrower: 'one',
                bookvolume:'one'
            },{
                bookname: 'two',
                bookborrower: 'two',
                bookvolume:'two'
            },{
                bookname: 'three',
                bookborrower: 'three',
                bookvolume:'three'
            }]
        }
    },
    methods:{
        addLine(index){ //添加行数
            var newValue = {
                bookname: '1',
                bookborrower: '2',
                bookvolume:'3'
              };
            //添加新的行数
            // this.tableData.push(newValue);
            this.tableData.splice(index+1,0,newValue)
            console.log(index)
        },
        handleDelete(index){ //删除行数
            this.tableData.splice(index, 1)
        },
        save(){
          //这部分应该是保存提交你添加的内容
          console.log(JSON.stringify(this.tableData))
        }
    }
 
}
</script>

<style lang='stylus' scoped>
</style>