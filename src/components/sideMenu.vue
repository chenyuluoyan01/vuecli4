<template>
    <div>
        <div class="nav">
            <div class="navContent flexM">
                <div class="toggle-button " @click="toggleCollapse">
                    <i class="iconfont" :class="{iconzhankai2:!isCollapse,iconzhedie1:isCollapse}"></i>
                </div>
                <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group> -->
                <div class="dropdown">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        {{downName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, i) in downList" :key="i" @click.native="click_drop(i)">{{item}}</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="r-container">
            <router-view class="menu-right"/>
        </div>
        
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :default-active = "activeMenu" router>
            <el-submenu index="1">
                <template slot="title" >
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <template v-for="(item, index) in nav_menu_data">
                    <el-menu-item :index = "item.path" :key = "index">
                        {{item.title}}
                    </el-menu-item>
                </template>
            </el-submenu>

            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>

        <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="新密码" prop="newPwd" :label-width="formLabelWidth">
                    <el-input v-model="form.newPwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirm" :label-width="formLabelWidth">
                    <el-input v-model="form.confirm" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="vscode" :label-width="formLabelWidth">
                    <el-input v-model="form.vscode" autocomplete="off"></el-input>
                    <span class="get-code" @click="getCodes()" v-show="!hasCode">获取验证码</span>
                    <span class="get-code" v-show="hasCode">{{countdown+'s'}}</span>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="modifyPwd">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
  export default {
    data() {
        let validateNewPassword = (rule, value, callback) => {
            if (value !== this.form.newPwd) {
                callback(new Error('与新密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            isCollapse: false,
            activeMenu: '/userInfo/release',
            notice_id: '',
            nav_menu_data: [{
                title: '发布招标',
                path: '/userInfo/release',
                index:'/userInfo/release'
            }, {
                title: '查询我的招标',
                path: '/userInfo/queryRelease',
                index: '/userInfo/queryRelease'
            }, {
                title: '我的中标',
                path: '/userInfo/winbid'
            }, {
                title: '发布中标',
                path: '/userInfo/issuewinbid'
            }],
            downName:'下拉菜单',
            downList:["修改密码", "退出登录"],
            countdown:60,
            timer:null,
            dialogFormVisible: false,
            hasCode: false,
            form: {
                newPwd: '',
                confirm: '',
                vscode: '',
            },
            rules: {
                newPwd: [
                    { required: true, pattern: /^.{6,20}$/, trigger: 'blur' ,message:'请输入6位以上的数字或字母或字符'},
                ],
                confirm: [
                    { required: true, validator: validateNewPassword, trigger: 'blur' },
                ],
                vscode: [
                    { required: true,  trigger: 'blur,change', pattern: /\d{4}/,message:'请输入4位数验证码'}
                ]
            },
            formLabelWidth: '120px'
       }
    },
    watch: { // 路由监听：监听路由的变化，从而做出相应操作
        $route: {
            immediate: true, // 一旦监听到路由的变化立即执行
            handler(to,from) {
                this.activeMenu = to.path // 给activeMenu重新赋值为当前组件的路由地址           
            },
            deep: true,
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        toggleCollapse () {
            this.isCollapse = !this.isCollapse
        },
        click_drop(i) {
            if(i == 0) {
                this.dialogFormVisible = true
            }else if(i == 1) { // 点击退出
                this.get('user/logout/').then((res) => {
                    if(res.code == '0') {
                        this.$message({
                            showClose: true,
                            message: '退出成功',
                            type: 'warning'
                        });
                        this.$store.commit('isLogin', false)
                        localStorage.setItem("isLogin", false)
                        this.$store.commit('loginPhone', '')
                        localStorage.setItem("loginPhone", '')
                        this.$router.push('/')
                    }else {
                        this.$message({
                            showClose: true,
                            message: '错了哦，退出失败',
                            type: 'error'
                        });
                    }
                })
            }
        },
        getCodes() {
            let params = {
                cell_phone: this.$store.state.loginPhone
            }
            this.get('user/modify/password/', params).then((res) => {
                if(res.code == '0') {
                    this.hasCode = true
                    this.cut_time()
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 倒计时
        cut_time() {
            let that = this
            this.timer = setInterval(() => {
                if(that.countdown > 0) {
                    that.countdown--
                } 
                if(that.countdown <=0){
                    that.hasCode = false
                    that.countdown = 60
                    clearInterval(that.timer)
                }
            }, 1000)
        },
        modifyPwd() {
            if(this.$store.state.loginPhone == '') {
                this.$message({
                    showClose: true,
                    message: '您需要登录之后，才能修改密码',
                    type: 'error'
                });
                this.$router.push('/')
            } else {
                this.$refs.form.validate((valid) => {
                    let params =  {
                        cell_phone: this.$store.state.loginPhone,
                        vcode: this.form.vscode,
                        new_password: this.form.newPwd,
                    }
                    console.log(params)
                    if (valid) {
                        this.post('user/modify/password/',params).then((res)=>{
                            if(res.code == '0') {
                                this.$message({
                                    showClose: true,
                                    message: '密码修改成功，请重新登录',
                                    type: 'success'
                                });
                                this.$store.commit('isLogin', false)
                                localStorage.setItem("isLogin", false)
                                this.$router.push('/')
                            }else if(res.code == '1005') {
                                this.$message({
                                    showClose: true,
                                    message: '验证码不正确',
                                    type: 'error'
                                });
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
            }
            
        }
    }
  }
</script>
<style lang="stylus" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse)
    width 200px
    min-height 400px
.toggle-button
    font-size 48px
    color #fff
    width 50px
    height 60px
    line-height 40px
    text-align center
    cursor pointer
    padding-left 200px
.navContent
    width 100%
.el-menu
    position absolute
    top 60px
    height 100%

.el-dropdown-link
    cursor pointer
    color #409EFF
.el-icon-arrow-down
    font-size 12px
.dropdown
    padding-right 70px
.el-dropdown-link
    color #fff
.get-code
    position absolute
    top 0
    right 0
    height 40px
    padding 0 10px
    cursor pointer
    color #e1121b
.r-container
    padding 20px 0 0 50px
    position absolute
    top 60px
    left 200px
    height 100%
</style>>