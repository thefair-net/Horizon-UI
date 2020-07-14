<template>
  <div :class="darkMode ? 'comment-dark' : 'comment-light'">
    <div v-if="title" class="title" @click="handleTitleClick">
      {{title}}
      <vs-icon class="icon" type="icon-right" v-if="to"/>
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
      to: {
        type: String,
        default: ''
      }
    },
    components: {
      'vs-icon': Icon
    },
    methods: {
      handleTitleClick() {
        if (this.to) {
          this.$router.push(this.to)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";

  .comment-light {
    width: 100%;

    .title {
      padding: 25rem 0 12rem 17rem;
      font-family: $FONT-FZLTZCHJW;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 5rem;
      }
    }
  }

  .comment-dark {
    width: 100%;
    background-color: $black-30;

    .title {
      padding: 25rem 0 12rem 17rem;
      font-family: $FONT-FZLTZCHJW;
      color: $white;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 5rem;
      }
    }
  }
</style>
