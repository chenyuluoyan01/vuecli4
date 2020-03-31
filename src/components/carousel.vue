<template>
    <div>
        <div class="lunbo-box">
            <el-carousel indicator-position="none">
            <el-carousel-item
                class="lunbo-box-item"
                v-for="(item,index) in abc_img"
                :key="index"
            >
                <img :src="item.src" class="lunbotu" alt="轮播图">
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            abc_img: [
                { src: require("../assets/banner/img1.jpg") },
                { src: require("../assets/banner/img2.jpg") },
                { src: require("../assets/banner/img3.jpg") },
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
.lunbo-box
    width 1200px
    margin 0 auto
    margin-top 60px
    padding-top 30px
    .lunbotu
        width 100%
        height 300px
</style>