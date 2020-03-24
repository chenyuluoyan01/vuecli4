<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true" class="bgcolor">
    <el-tab-pane label="免费注册" name="first">
        <el-form ref="form" :model="form" class="paddingW">
            <el-form-item>
                <el-input prefix-icon="iconfont iconshoujihao"  v-model="form.name" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item style="margin-left:0px">
                <el-input prefix-icon="iconfont iconyanzhengma"  v-model="form.name" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="iconfont iconyanzhengma"  v-model="form.name" placeholder="请输入完整公司名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="iconfont iconyonghu"  v-model="form.name" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%" @click="onSubmit">立即注册</el-button>
            </el-form-item>
        </el-form>
    </el-tab-pane>
    <el-tab-pane label="登录" name="second">
        <el-form ref="form" :model="form" class="paddingW">
            <el-form-item>
                <el-input prefix-icon="iconfont iconshoujihao"  v-model="form.name" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="iconfont iconyanzhengma"  v-model="form.name" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="iconfont iconyanzhengma"  v-model="form.name" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即登录</el-button>
            </el-form-item>
        </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        form: {
            name: '',
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
<style lang="stylus" scoped>
.el-button--primary
    width 100%
</style>