<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/">招标信息</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f8f8f8
}
#app .flexL {
  display: flex;
  justify-content: flex-start;
}
#app .flexM {
  display: flex;
  justify-content: space-between
}
#app .flexMW {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#app .flexW {
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.bgcolor {
  background-color: #fff;
}
#nav {
  padding: 30px;
}
.paddingW {
  padding:0 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
