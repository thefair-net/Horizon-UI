<template>
  <div class="page">

  </div>
</template>
<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup() {
      const {ctx} = getCurrentInstance()
      const back = () => {
        ctx.$router.push('/')
      }
      return {
        back
      }
    }
  }
</script>
<style scoped>

</style>
