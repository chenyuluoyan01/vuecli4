<template>
    <div class="right">
        <signUp></signUp>
        <hotWord>
            <template slot="hot">
                <div class="top">
                    <div class="flexM paddingW">
                        
                        <span><img class="shutiao" src="../assets/images/bd_left.png" alt="">招标热词</span>
                        <span class="more">更多</span>
                    </div>
                </div>
            </template>
            <template slot="hot">
                <div class="mid flexMW">
                    <span><i class="iconfont iconhuo" style="font-size:24px;"></i>望远镜</span>
                    <span><i class="iconfont iconnew" style="font-size:28px;"></i>色谱仪</span>
                </div>
            </template>
            <template slot="hotContent">
                <div class="bottom flexW">
                    <span v-for="(item,i) in words" :key="i">{{item}}</span>
                </div>
            </template>
        </hotWord>
        <hotWord>
            <template slot="hot">
                <div class="top">
                    <div class="flexM paddingW">
                        <span><img class="shutiao" src="../assets/images/bd_left.png" alt="">最新施工方案</span>
                        <span class="more">更多</span>
                    </div>
                </div>
            </template>
            <template slot="hotContent">
                <div class="bottom flexW">
                    <span class="wordwrap" v-for="(item,i) in buildWord" :key="i">{{item}}</span>
                </div>
            </template>
        </hotWord>
    </div>
</template>

<script>
import hotWord from './hotWords'
import signUp from './signUp'
export default {
    components:{
        signUp,
        hotWord
    },
  data() { 
    return {
        words:["三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器","三坐标","量规","量块","量具","医药","医疗","防疫药品","急救箱","采血管","绘图机","通用仪器"],
        buildWord:["广东恒建工程有限公司","中交二航局-广东广州","中交四航局-广州","中铁南方投资集团有限公司","鹤山市友和建筑工程有限公司","中铁建设集团有限公司华南分公司","中国能源建设集团广东火电工程有限公","中铁建设集团有限公司华南分公司"],       
    }
  }
 }
</script>

<style lang='stylus' scoped>
.mid,.bottom
    font-size 14px
.shutiao
    position relative
    padding-right 8px
    top 4px
.iconfont
    display: inline-block;
    height: 100%;
    vertical-align: middle;
</style>