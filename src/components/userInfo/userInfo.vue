<template>
    <div class="u-container">
        <sideMenu></sideMenu>
    </div>
</template>
<script>
import sideMenu from '../sideMenu'
export default {
    components: {
        sideMenu
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