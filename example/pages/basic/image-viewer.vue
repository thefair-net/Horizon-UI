<template>
  <div v-html="dom"></div>
</template>

<script>
  export default {
    setup() {
      let dom = `<div class="image-viewer">12341231234</div>`
      return {
        dom
      }
    }
  }
</script>

<style>
  .image-viewer {
    color: red;
  }
</style>
