<template>
  <div class="page">
    <button @click="ImageViewer({
        imgSrc: 'http://img.kaiyanapp.com/11593bd3f3edd71365147c6f05406b7e.png?w=500&h=312'
      })">点击查看大图</button>
  </div>
</template>

<script>
  import {ImageViewer} from '../../../lib'
  export default {
    mounted() {
    },
    setup() {
      return {
        ImageViewer
      }
    }
  }
</script>

<style scoped>

</style>
