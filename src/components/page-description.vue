<template>
  <div class="vs-page-description">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vs-page-description"
  }
</script>

<style scoped>
  .vs-page-description {
    padding: 15rem 17rem;
    opacity: 0.8;
    font-family: "FZLTXIHJW";
    font-size: 14rem;
    line-height: 1.5;
    text-align: justify;
    color: #444444;
  }
</style>
