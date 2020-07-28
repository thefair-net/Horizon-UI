<template>
  <div v-loading="loading">
    你好呀！
  </div>
</template>

<script>
  export default {
    name: "v-loading",
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      setInterval(() => {
        this.loading = !this.loading
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
