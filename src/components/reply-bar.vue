<template>
  <div class="reply-bar-container">
    <div class="reply-bar" @click="handleClick">
      <div class="avatar">

      </div>
      <div class="reply-bar-input">
        点击发表你的评论...
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vs-reply-bar",
    setup(props, context) {
      const handleClick = () => {
        context.emit('click')
      }
      return {
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
      /**因为无限滚动页面为定高page，所以写死safe-area了**/
      /*padding: 14rem 15rem calc(14rem + env(safe-area-inset-bottom) + 34rem) 15rem;*/
      padding: .13rem .15rem calc(.13rem + #{$safe-area}) .15rem;
      -webkit-backdrop-filter: blur(.20rem);
      backdrop-filter: blur(.20rem);
      background-color: rgba(0, 0, 0, 0.3);

      .avatar {
        width: .40rem;
        height: .40rem;
        border-radius: 50%;
        border: .01rem white solid;
        margin-right: .07rem;
      }

      .reply-bar-input {
        flex: 1;
        height: .38rem;
        border-radius: .03rem;
        border: solid .01rem rgba(255, 255, 255, 0.1);
        background-color: rgba(0, 0, 0, 0.11);
        font-family: $FONT-FZLTZCHJW;
        font-size: .12rem;
        letter-spacing: .01rem;
        color: #bebebc;
        padding: .12rem .8rem;
      }
    }
  }
</style>
