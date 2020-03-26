<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true" class="bgcolor">
    <el-tab-pane label="免费注册" name="first">
        <el-form ref="form" :rules="rules" :model="form" class="paddingW">
            <el-form-item prop="tel">
                <el-input prefix-icon="iconfont iconshoujihao"  v-model="form.tel" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item style="margin-left:0px" prop="code">
                <el-input prefix-icon="iconfont iconyanzhengma"  v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="companyname">
                <el-input prefix-icon="iconfont icongongsiqiye"  v-model="form.companyname" placeholder="请输入完整公司名称"></el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-input prefix-icon="iconfont iconyonghu"  v-model="form.name" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%" @click="onSubmit">立即注册</el-button>
            </el-form-item>
        </el-form>
    </el-tab-pane>
    <el-tab-pane label="登录" name="second">
        <el-form ref="lform" :model="lform" class="paddingW" :rules="rules">
            <el-form-item prop="phone">
                <el-input prefix-icon="iconfont iconshoujihao"  v-model="lform.phone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input prefix-icon="iconfont iconmima" font-size="14px"  v-model="lform.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="lcode">
                <div class="identi-div flexL">
                    <div style="width:150px">
                        <el-input prefix-icon="iconfont iconyanzhengma"  v-model="lform.lcode" placeholder="请输入验证码"></el-input>
                    </div>
                    
                    <div class="code" style="height:40px;width:100px" @click="refreshCode">
                        <SIdentify :identifyCode="identifyCode"></SIdentify>
                    </div>                    
                </div>

            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmits">立即登录</el-button>
            </el-form-item>
        </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import SIdentify from './identify/codeIdentify'
  export default {
    components: {
        SIdentify
    },
    data() {
        var checkPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('手机号不能为空'));
            } else {
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                console.log(reg.test(value));
                if (reg.test(value)) {
                    callback();
                } else {
                    return callback(new Error('请输入正确的手机号'));
                }
            }
        };
        return {
            identifyCodes: "1234567890",
            identifyCode: "",

            activeName: 'first',
            form: {
                tel: '',
                code:'',
                companyname:'',
                name:''
            },
            lform: {
                phone:'',
                password:'',
                lcode:''
            },
            rules: {
                tel: [
                    { required: true, validator: checkPhone, trigger: 'blur' },
                ],
                code: [
                    { required: true,  trigger: 'blur' }
                ],
                companyname: [
                    { required: true,  trigger: 'blur' }
                ],
                name: [
                    { required: true,  trigger: 'blur' }
                ],
                phone: [
                    { required: true,  trigger: 'blur' }
                ],
                password: [
                    { required: true,  trigger: 'blur' }
                ],
                lcode: [
                    { required: true,  trigger: 'blur' }
                ]
            }
      };
    },

    mounted() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
      onSubmits() {
        this.$refs.lform.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
          randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
    }
  };
</script>
<style lang="stylus" scoped>
.el-button--primary
    width 100%
</style>