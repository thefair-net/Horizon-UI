<template>
  <div class="vs-share-header-container">
   <div class="vs-share-header" @click="handleClick">
    <vs-avatar :src="avatar" type="normal"></vs-avatar>
    <div class="center">
      <div class="kaiyan"><span class="nick">{{nickname}}</span> 正在使用开眼eyepetizer</div>
      <div class="invite">邀请{{message}}</div>
    </div>
    <img class="button" src="../../static/img/share-header-button.svg"/>
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
      -webkit-backdrop-filter: blur(0.20rem);
      backdrop-filter: blur(0.20rem);
      background-color: rgba(16, 17, 18, 0.5);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.08rem 0.15rem;

      .center {
        flex: 1;
        margin-left: 0.08rem;

        .kaiyan {
          font-family: 'FZLTHJW';
          font-size: 0.12rem;
          color: #ffffff;
          margin-bottom: 0.06rem;

          .nick {
            display: inline-block;
            vertical-align: bottom;
            max-width: 0.90rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .invite {
          font-family: 'FZLTZCHJW';
          font-size: 0.14rem;
          color: #ffffff;
        }
      }

      .button {
        width: .64rem;
        height: .24rem;
        object-fit: contain;
      }
    }
  }
</style>
