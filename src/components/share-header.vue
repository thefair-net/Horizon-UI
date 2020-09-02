<template>
  <div class="vs-share-header-container">
   <div class="vs-share-header" @click="handleClick">
    <vs-avatar :src="avatar" type="normal"></vs-avatar>
    <div class="center">
      <div class="kaiyan"><span class="nick">{{nickname}}</span> 正在使用开眼eyepetizer</div>
      <div class="invite">{{message}}</div>
    </div>
     <div class="button">立即打开</div>
  </div>
  </div>

</template>

<script>
  import Avatar from "../../lib/avatar";
  import defaultImg from "../../static/img/logo-eyepetizer.png"

  export default {
    name: "vs-share-header",
    components: {
      'vs-avatar': Avatar
    },
    data() {
      return {
        nickname: this.$options.nickname || '开眼精选',
        avatar: this.$options.avatar || defaultImg,
        message: this.$options.message,
      }
    },
    methods: {
      handleClick() {
        this.onClick();
      },
      /**销毁方法**/
      destroyVM() {
        this.$destroy()
        document.getElementById('app').removeChild(this.$el)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";
  .vs-share-header-container {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    .vs-share-header {
      max-width: $iPadWidth;
      margin: 0 auto;
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      background-color: rgba(16, 17, 18, 0.5);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 15px;

      .center {
        flex: 1;
        margin-left: 8px;

        .kaiyan {
          font-family: $FONT-FZLTHJW;
          font-size: 12px;
          color: #ffffff;
          margin-bottom: 6px;

          .nick {
            display: inline-block;
            vertical-align: bottom;
            max-width: 90px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .invite {
          font-family: $FONT-FZLTZCHJW;
          font-size: 14px;
          color: #ffffff;
        }
      }

      .button {
        width: 64px;
        height: 24px;
        background-color: #4A90E2;
        border-radius: 5px;
        font-family: $FONT-FZLTZCHJW;
        color: $white;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 1px;
      }
    }
  }
</style>
