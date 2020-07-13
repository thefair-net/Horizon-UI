<template>
  <div class="page">
    倒计时{{time}}
  </div>
</template>

<script>
  import {onMounted, onBeforeUnmount, onUnmounted, ref} from '@vue/composition-api'
  import {ImageViewer} from '../../../lib'
  export default {
    mounted() {
    },
    setup() {
      const time = ref(5)
      ImageViewer({
        img: 'http://img.kaiyanapp.com/11593bd3f3edd71365147c6f05406b7e.png?w=500&h=312'
      })
      onMounted(() => {
        // setInterval(() => {
        //   time.value--
        // }, 1000)
        // setTimeout(() => {
        //   ImageViewer.close()
        // }, 5000)
      })
      return {
        time
      }
    }
  }
</script>

<style scoped>

</style>
