<template>
  <div class="reply-bar-container">
    <div class="reply-bar">
      <vs-avatar class="avatar" @click.native="handleAvatarClick" :src="avatar" v-if="avatar"></vs-avatar>
      <div class="reply-bar-input" @click="handleClick">
        {{ placeholder }}
      </div>
    </div>
  </div>
</template>

<script>
import {Avatar} from "../../lib";

export default {
  name: "vs-reply-bar",
  components: {
    'vs-avatar': Avatar
  },
  props: {
    avatar: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '点击发表你的评论...'
    }
  },
  setup(props, context) {
    const handleAvatarClick = () => {
      context.emit('avatar')
    }
    const handleClick = () => {
      context.emit('click')
    }
    return {
      handleAvatarClick,
      handleClick
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../static/config";

.reply-bar-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  .reply-bar {
    max-width: $iPadWidth;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 14px 15px 14px 15px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.3);

    .avatar {
      border: 1px white solid;
      width: 40px;
      height: 40px;
      margin-right: 7px;
    }

    .reply-bar-input {
      flex: 1;
      height: 38px;
      border-radius: 3px;
      border: solid 1px rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.11);
      font-family: $FONT-FZLTZCHJW;
      font-size: 12px;
      letter-spacing: 1px;
      color: #bebebc;
      padding: 12px 8px;
    }
  }
}

@supports (bottom: env(safe-area-inset-bottom)) {
  .reply-bar {
    padding-bottom: calc(14px + env(safe-area-inset-bottom)) !important;
  }
}
</style>
