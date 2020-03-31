<template>
    <div class="r-container">
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
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
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
                <addTable></addTable>
            </el-form-item>
            <el-form-item label="文件上传" style="width:400px">
                <el-upload
                    ref="upload"
                    class="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.xls,.xlsx"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :file-list="fileList"
                    :on-change="onUploadChange"
                    :auto-upload="false"
                    >
                        <el-button slot="trigger" size="small" type="primary">选取</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不能超过1m</div> -->
                </el-upload>
            </el-form-item>

            
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
                desc: ''
            },
            rules:{
                name:[{ required: true, message: '请输入招标名称', trigger: 'change' }],
                region: [{ required: true, message: '请选择省份', trigger: 'change' }],
                date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                desc: [{ required: true, message: '请填写招标内容', trigger: 'blur' }]
            },
            fileList:[]
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
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
        onUploadChange(file)
        {
            const testmsg=file.name.substring(file.name.lastIndexOf('.')+1)
            const extension1 = testmsg === 'xls'
            const extension2 = testmsg === 'xlsx'
            const extension3 = testmsg === 'jpg'
            const isLt50M = file.size / 1024 / 1024 < 50;

            if (extension1 || extension2 || extension3) {
                this.$message({
                    message: '上传文件格式不正确!',
                    type: 'warning'
                });
            }
            if (!isLt50M) {
                this.$message.error('上传文件大小不能超过 50MB!');
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){
                console.log(this.result)//图片的base64数据
            }
        }
    },
    created() {
        
    }
}
</script>

<style lang='stylus' scoped>
.r-container
    padding 20px 0 0 50px
    height 100%
    // width 800px
.fromItem
    width 500px
.upload
    margin-bottom 50px
</style>