<template>
  <div class="containers bgcolor">
      <slot name="hotTitle"></slot>
      <slot name="hot"></slot>
      <slot name="hotContent"></slot>

      <!-- <div class="bottom flexW">
          <span v-for="(item,i) in words" :key="i">{{item}}</span>
      </div> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            // words:["三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器","三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器"]
        }
    }
}

</script>
<style lang='stylus' scoped>
.containers
    margin-top 15px
    display flex
    flex-direction column
.top
    border-bottom 1px solid #ddd
    height 48px
    line-height 48px
.mid
    padding 0 15px
    height 32px
    line-height 32px
    color #de0403
.bottom
    line-height 32px
    padding-right 15px
    span
        padding-left 15px

.wordwrap
    width 100%
    height 32px
    overflow hidden
</style>