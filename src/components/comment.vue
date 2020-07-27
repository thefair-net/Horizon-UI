<template>
  <div :class="darkMode ? 'comment-dark' : 'comment-light'">
    <div v-if="title" class="title" @click="handleTitleClick">
      {{title}}
      <div class="icon-right" v-if="iconShow"></div>
    </div>
    <slot name="comment-card" :dark-mode="darkMode"></slot>
  </div>
</template>

<script>
  import Icon from '../../lib/icon'
  export default {
    name: "vs-comment",
    props: {
      title: {
        type: String,
        default: ''
      },
      darkMode: {
        type: Boolean,
        default: false
      },
      iconShow:{
        type: Boolean,
        default: false
      }
    },
    components: {
      'vs-icon': Icon
    },
    methods: {
      handleTitleClick() {
        this.$emit('handleTitleClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";

  .comment-light {
    width: 100%;

    .title {
      padding: 0.25rem 0 0.12rem 0.17rem;
      font-family: $FONT-FZLTZCHJW;
      display: flex;
      align-items: center;
      .icon-right {
        width: 0.08rem;
        height: 0.08rem;
        transform: rotate(45deg);
        border-top: solid 0.015rem $gray-97;
        border-right: solid 0.015rem $gray-97;
        margin-bottom: 0.02rem;
        margin-right: 0.02rem;
        margin-left: 0.05rem;
      }
    }
  }

  .comment-dark {
    width: 100%;
    background-color: $black-30;

    .title {
      padding: 0.25rem 0 0.12rem 0.17rem;
      font-family: $FONT-FZLTZCHJW;
      color: $white;
      display: flex;
      align-items: center;
      .icon-right {
        width: 0.08rem;
        height: 0.08rem;
        transform: rotate(45deg);
        border-top: solid 0.015rem $gray-97;
        border-right: solid 0.015rem $gray-97;
        margin-bottom: 0.02rem;
        margin-right: 0.02rem;
        margin-left: 0.05rem;
      }
    }
  }
</style>
