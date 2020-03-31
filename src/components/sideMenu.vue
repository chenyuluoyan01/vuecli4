<template>
    <div>
        <div class="nav">
            <div class="navContent">
                <div class="toggle-button " @click="toggleCollapse">
                    <i class="iconfont" :class="{iconzhankai2:!isCollapse,iconzhedie1:isCollapse}"></i>
                </div>
                <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group> -->
            </div>
        </div>

        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :default-active = "activeIndex" router>
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

    </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        activeIndex: '/userInfo/release',
        nav_menu_data: [{
            title: '发布招标',
            path: '/userInfo/release',
        }, {
            title: '导航二',
            path: '/Menu/Page2'
        }, {
            title: '导航三',
            path: '/Menu/Page3'
        }, {
            title: '导航四',
            path: '/Menu/Page4'
        }]
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
    cursor pointer
    padding-left 200px
.navContent
    width 100%
</style>>