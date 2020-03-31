<template>
    <div class="u-container flexL">
        <sideMenu></sideMenu>
        <release></release>
    </div>
</template>
<script>
import sideMenu from '../sideMenu'
import release from './release'
export default {
    components: {
        sideMenu,
        release
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
.u-container
    margin-top:60px
</style>