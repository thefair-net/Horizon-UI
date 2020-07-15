<template>
  <div class="reply-box-container">
    <div ref="replyBox" class="reply-box">
      <div class="top">
        <div class="close">
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
        <textarea ref="replyArea" class="reply-area" maxlength="500" placeholder="写下你的评论"></textarea>
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
        this.$refs.replyBox.style.marginBottom = '0'
      },
      hideReplyBox() {
        this.$refs.replyBox.style.marginBottom = '-266rem'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";

  .reply-box-container {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;

    .reply-box {
      max-width: $iPadWidth;
      height: 266rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto -266rem auto;
      padding: 0 15rem;
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
