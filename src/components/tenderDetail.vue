<template>
    <div>
        <navcontent :title="ntitle"></navcontent>
        <p>招标详情页</p>
    </div>
</template>
<script>
import navcontent from './NavTab/navcontent'
export default {
    components:{
        navcontent
    },
    data() {
        return {
            ntitle:["> 招标信息","> 招标详情页"],
        }
    }
}
</script>