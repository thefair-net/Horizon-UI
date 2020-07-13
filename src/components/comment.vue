<template>
  <div class="comment">
    <div class="title">{{title}}</div>
    <slot name="comment-card"></slot>
  </div>
</template>

<script>
  export default {
    name: "vs-comment",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";

  .comment {
    width: 100%;

    .title {
      padding: 25rem 0 12rem 17rem;
      font-family: $FONT-FZLTZCHJW;
    }
  }
</style>
