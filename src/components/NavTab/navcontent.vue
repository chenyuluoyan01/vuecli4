<template>
    <navtab>
        <template v-slot:navTitle>
            <div class="content">
                <i class="iconfont iconshouye-"></i>
                <span class="navItem">
                    <router-link to="/home">首页</router-link>
                    <span v-for="(links, i) in title" :key="i">
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
    padding-left 45px
    height 30px
</style>