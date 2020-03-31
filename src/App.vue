<template>
    <div id="app">
        <div class="nav" v-show="!$store.state.toCenter">
            <div class="navContent">
                <ul class="flexL">
                    <li class="nav_item">
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li class="nav_item">
                        <router-link to="/">招标信息</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            
        }
    },
    created() {
        // console.log(localStorage.getItem('token'))
        // let session = window.localStorage.getItem('isLogin')
        // this.$store.commit('isLogin', session)
        // console.log(this.$store.state.isLogin)
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f8f8f8;
}
.nav {
    height:60px;
    line-height:60px;
    position:fixed;
    width:100%;
    left:0;
    top:0;
    z-index:100;
    animation-duration: 1s;
    visibility: visible;
    opacity: 1;
    animation: MenuAnimIn3 1s ease-in-out;
    background: #333;
    box-shadow: 0 0 6px rgba(0,0,0,0.25);
}
.nav .navContent {
    position: absolute;
    width:1200px;
    left:50%;
    top:0;
    height:60px;
    transform: translate(-50%, 0%);
    transition: background-color 500ms ease;
}
.nav a {
  font-weight: bold;
  color: #ededed;
  font-weight: normal;
  font: normal normal 15px / 23px "微软雅黑",Helvetica,Arial,Verdana,sans-serif;
}
.nav a.router-link-exact-active {
  /* color: #42b983; */
  color:#409eff
}
</style>
<style lang="stylus" scoped>
.flexL
    height 100%
.nav_item
    margin-right 15px
    height 100%
    a
        width 100%
        height 100%
        vertical-align center
        padding-right 15px
    

</style>
