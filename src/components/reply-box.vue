<template>
  <!-- prevent用来阻止背后页面内容滚动-->
  <div @touchmove.prevent.stop="handleTouchmove" ref="replyBoxContainer" class="reply-box-container">
    <div class="reply-box" @touchmove.prevent="handleTouchmove">
      <div class="top">
        <div class="close" @click="hideReplyBox">
          <vs-icon :type="'icon-close'"/>
        </div>
        <div class="title">
          评论
        </div>
        <div class="confirm">
          <vs-icon :type="'icon-check'"/>
        </div>
      </div>
      <div class="middle">
        <!-- stop用来限制输入框的触摸操作不会穿透到container上，从而避免了输入框内容无法滚动的问题-->
        <textarea
          @input="handleInput"
          @touchmove.stop="handleAreaTouchmove"
          ref="replyArea"
          class="reply-area"
          placeholder="写下你的评论"
          v-model="text"
        >
        </textarea>
      </div>
      <div class="bottom">
        <div class="upload">
          <vs-icon :type="'icon-upload-img'"/>
          <span class="text">图片</span>
        </div>
        <div class="left-count">
          500
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Icon} from '../../lib'

  export default {
    name: "vs-reply-box",
    data() {
      return {
        text: ''
      }
    },
    components: {
      'vs-icon': Icon
    },
    methods: {
      destroyVM() {
        this.$destroy()
        document.getElementById('app').removeChild(this.$el)
      },
      focusReplyArea() {
        this.$refs.replyArea.focus()
      },
      showReplyBox() {
        this.$refs.replyBoxContainer.style.marginBottom = '0'
      },
      hideReplyBox() {
        this.$refs.replyBoxContainer.style.marginBottom = '-100vh'
        this.$options.onClose()
      },
      handleTouchmove() {},
      handleAreaTouchmove(e) {
        if (this.text.length < 240) {
          e.preventDefault()
        }
      },
      handleInput(e) {
        this.text = e.target.value
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";

  .reply-box-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: flex-end;
    margin-bottom: -100vh;

    .reply-box {
      width: 100%;
      max-width: $iPadWidth;
      height: calc(266rem + env(safe-area-inset-bottom));
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding: 0 15rem env(safe-area-inset-bottom) 15rem;
      -webkit-backdrop-filter: blur(20rem);
      backdrop-filter: blur(20rem);
      background-color: rgba(0, 0, 0, 0.5);

      .top {
        width: 100%;
        height: 61rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $white;
        font-family: $FONT-FZLTZCHJW;
        border-bottom: 1rem rgba(255, 255, 255, 0.2) solid;

        .close {
        }

        .title {
        }

        .confirm {
        }
      }

      .middle {
        width: 100%;
        flex: 1;

        .reply-area {
          width: 100%;
          height: 100%;
          padding: 10rem 0;
        }
      }

      .bottom {
        width: 100%;
        height: 40rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $white;
        border-top: 1rem rgba(255, 255, 255, 0.2) solid;

        .upload {
          display: flex;
          align-items: center;
          font-family: $FONT-FZLTZCHJW;

          .text {
            margin-left: 3rem;
          }
        }

        .left-count {

        }
      }
    }
  }
</style>
