<template>
  <div class="page">
    <button @click="handleOpenClick">点击回复</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <button @click="handleCloseClick">点击关闭</button>
  </div>
</template>

<script>
  import {onBeforeUnmount} from '@vue/composition-api'
  import {ReplyBox} from '../../../lib'

  export default {
    name: "reply-box",
    setup() {
      ReplyBox.mount((msg) => {
        console.log(msg)
      })
      const handleOpenClick = () => {
        ReplyBox.open((msg) => {
          console.log(msg)
        })
      }
      const handleCloseClick = () => {
        ReplyBox.close((msg) => {
          console.log(msg)
        })
      }
      onBeforeUnmount(() => {
        ReplyBox.unmount(msg => {
          console.log(msg)
        })
      })
      return {
        handleOpenClick,
        handleCloseClick
      }
    }
  }
</script>

<style scoped>

</style>
