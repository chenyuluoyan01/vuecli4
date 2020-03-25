<template>
    <navtab>
        <template v-slot:navTitle>
            <div class="content">
                <span class="icon"><i class="iconfont iconshouye-" style="font-size:18px"></i></span>
                <span class="navItem">
                    <router-link to="/home">首页</router-link>
                    <span v-for="(links, i) in title" :key="i">
                        <i class="iconfont iconarrow-right-copy-copy"></i>
                        <router-link to="/">{{links}}</router-link>
                    </span>
                </span>
            </div>
        </template>
    </navtab>
</template>
<script>
import navtab from '../NavTab/navtab'
export default {
    components:{
        navtab
    },
    props:['title']
}
</script>
<style lang="stylus" scoped>
.content
    display flex
    justify-content flex-start
    height 30px
    padding-top 20px
.navItem
    a
        color #666
.icon
    height 20px
    line-height 20px
    padding-right 4px
    
</style>