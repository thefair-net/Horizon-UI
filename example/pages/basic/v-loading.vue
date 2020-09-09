<template>
  <div class="page" v-loading="loading">
    <vs-page-description>
      每秒钟切换v-loading的布尔值
      setInterval(() => {
          this.loading = !this.loading
      }, 1000)
    </vs-page-description>
  </div>
</template>

<script>
import {PageDescription} from "../../../lib";

export default {
  name: "v-loading",
  data() {
    return {
      loading: true
    }
  },
  components: {
    'vs-page-description': PageDescription
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
