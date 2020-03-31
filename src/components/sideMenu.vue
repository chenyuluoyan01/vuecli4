<template>
    <div>
        <div class="nav">
            <div class="navContent">
                <div class="toggle-button" @click="toggleCollapse">
                    <i class="iconfont" :class="{iconzhankai2:isCollapse,iconzhedie1:!isCollapse}"></i>
                </div>
                <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group> -->
            </div>
        </div>

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
            
            </el-menu-item-group> -->
            <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
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

    </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
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
.navContent
    width 100%
    margin 0 60px
</style>>