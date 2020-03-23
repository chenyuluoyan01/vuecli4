<template>
  <div class="home">
    <Tender msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tender from '@/components/Tendering/Tendering'

export default {
  name: 'Home',
  components: {
    Tender
  }
}
</script>
