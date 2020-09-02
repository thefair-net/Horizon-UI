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

<style lang="scss" scoped>
  @import "../../static/config";
  .vs-page-description {
    padding: 15px 17px;
    opacity: 0.8;
    font-family: $FONT-FZLTHJW;
    font-size: 14px;
    line-height: 1.5;
    text-align: justify;
    color: #444444;
  }
</style>
