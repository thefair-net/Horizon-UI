<template>
  <div class="page">
    <vs-reply-bar/>
  </div>
</template>

<script>
  import {ReplyBar} from '../../../lib'
  export default {
    name: "reply-bar",
    components: {
      'vs-reply-bar': ReplyBar,
    },
  }
</script>

<style scoped>

</style>
