<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="标题" prop="name" class="fromItem">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="日期" prop="date" class="fromItem">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容" prop="desc" class="fromItem">
                <el-input type="textarea" v-model="form.desc" style="width: 100%;" :rows="10"></el-input>
            </el-form-item>
            <el-form-item label="省份" prop="region" class="fromItem">
                <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%;">
                    <el-option :label="item[1]" :value="item[0]"  v-for='(item, i) in regiondata' :key="i"></el-option>
                </el-select>
            </el-form-item>
            

            <!-- <el-upload
            :action="uploadUrl"
            ref="upload"
            :multiple="false"
            :on-change="fileChange"
            :before-upload="beforeUpload"
            :on-success="handleAvatarSuccess"
            :on-preview="file_click"
            class="upload-demo"
            list-type="text"
            accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF"
            :file-list="uploadForm.personFileList"
            :auto-upload="false">
                <el-button size="small" type="primary">选择文件</el-button>
                <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="color:red;margin-right:5px"></i>单个文件不超过5MB</div>
            </el-upload> -->

            <el-form-item label="材料">
                <addTable ref="table">
                    <div slot="unedit"></div>
                </addTable>
            </el-form-item>
            <!-- <el-form-item label="文件上传" style="width:400px">
                <el-upload
                    multiple
                    ref="upload"
                    class="upload"
                    action="bids/make/notice/"
                    :limit = "1"
                    :before-upload="beforeUpload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :file-list="fileList"
                    :on-change="onUploadChange"
                    :on-success="handleSuccess"
                    :auto-upload="false"
                    >
                        <el-button slot="trigger" size="small" type="primary">选取</el-button>
                </el-upload>
            </el-form-item> -->

            
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即上传</el-button>
                <el-button @click="resetForm">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import upload from '../upload'
import addTable from './addTable'
export default {
    components: {
        // upload
        addTable
    },
    data() { 
        return {
            form: {
                name: '',
                region: '',
                date: '',
                desc: '',
            },
            rules:{
                name:[{ required: true, message: '请输入招标名称', trigger: 'change' }],
                region: [{ required: true, message: '请选择省份', trigger: 'change' }],
                date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                desc: [{ required: true, message: '请填写招标内容', trigger: 'blur' }]
            },
            fileList:[],
            files: {},
            formData: new FormData(),
            param: '', // 表单要提交的参数
            regiondata:[]
        }
    },
    mounted() {
        // console.log(this.$refs.table.tableData)
        this.regiondata = JSON.parse(localStorage.getItem('regionData'))
        // console.log(this.regiondata)
    },

    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {          
                let len = this.regiondata.length   
                let params = {
                    notice_title: this.form.name,
                    notice_date: this.form.date,
                    notice_content: this.form.desc,
                    notice_area: this.form.region,
                    notice_bids: JSON.stringify(this.$refs.table.tableData),
                }
                
                // this.$refs.upload.submit()
                // this.param.append('notice_title', this.form.name)
                // this.param.append('notice_date', this.form.date)
                // this.param.append('notice_content', this.form.desc)
                // this.param.append('notice_area', 110000)
                // this.param.append('notice_bids', JSON.stringify(this.$refs.table.tableData))
                // this.param.append('file', this.fileList[0])
                if (valid) {
                    // this.$refs.upload.submit()
                    this.post('bids/make/notice/', params).then((res)=>{
                        if(res.code == '0') {
                            this.$message({
                                message: '上传成功',
                                type: 'success'
                            })
                            this.$refs.form.resetFields()
                        }      
                    }).catch((error) => {
                    // catch 指请求出错的处理
                        console.log(error);
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        beforeUpload(file) {
            // this.formData.append('file', file)
            // console.log("file_name",this.formData.get("file"))
            this.param = new FormData()
            this.fileList.push(file) // 把单个文件变成数组
            let images = [...this.fileList] // 把数组存储为一个参数，便于后期操作
            // 2.2，遍历数组
            images.forEach((img, index) => {
                this.param.append(`img_${index}`, img) // 把单个图片重命名，存储起来（给后台）
            })
            return false
        },
        handleSuccess(response, file, fileList) {
            this.fileList = fileList
        },
        resetForm() {
            this.$refs.form.resetFields();
        },
        submitUpload(){
            this.$refs.upload.submit()
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        onUploadChange(file, fileList)
        {
            // const testmsg = file.name.substring(file.name.lastIndexOf('.')+1)
            // let fileArr = ['xls', 'xlsx', 'jpg', 'jpeg', 'png', 'gif', 'pdf']
            // const extension = fileArr.includes(testmsg)
            // const isLt50M = file.size / 1024 / 1024 < 50;

            // if (extension) {
            //     this.$message({
            //         message: '上传文件格式不正确!',
            //         type: 'warning'
            //     });
            // }
            // if (!isLt50M) {
            //     this.$message.error('上传文件大小不能超过 50MB!');
            //     return false;
            // }
            console.log(fileList)
            this.files['files'] = fileList;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){
                // console.log(this.result)//图片的base64数据
            }
        }
    },
    created() {
        
    }
}
</script>

<style lang='stylus' scoped>
.fromItem
    width 500px
.upload
    margin-bottom 50px
</style>