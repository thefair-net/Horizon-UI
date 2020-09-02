<template>
  <div class="vs-popup" v-show="value" @touchmove.self.prevent>
    <div  v-if="overlay" @click="closePopup" :class="fadeout ?'vs-popup-mask hide':'vs-popup-mask'"></div>
    <div class="vs-popup-content" :class="[position ? ''+ position : '',fadeout ?'fade_out':'fade_in']">
      <div class="popup-title" v-if="title">{{title}}</div>
      <slot></slot>
      <div class="popup-cancel" v-if="showCancel" @click="closePopup">
        取消
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vs-popup",
    props: {
      value: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'bottom'
      },
      overlay: {
        type: Boolean,
        default: true
      },
      showCancel: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        fadeout: false,
        docOverflow: 'visible'
      }
    },
    model: {
      prop: "value",
      event: 'change'
    },
    watch: {
      value(val) {
        if (val) {
          this.docOverflow = document.body.style.overflow;
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = this.docOverflow;
        }
      }
    },
    methods: {
      closePopup() {
        this.fadeout = true;
        setTimeout(() => {
          this.$emit("change", false)
          this.fadeout = false;
        }, 300)

      }
    },
    beforeDestroy() {
      document.body.style.overflow = this.docOverflow;
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/config";
  /*弹层动画 从下往上*/
  @keyframes fadeBottom_in {
    0% {
      -webkit-transform: translate3d(0, 100%, 0);
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeBottom_out {
    100% {
      -webkit-transform: translate3d(0, 100%, 0);
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    0% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeTop_in {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
    100% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes fadeTop_out {
    100% {
      -webkit-transform: translate3d(0, -100%, 0);
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
    0% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }


  .vs-popup {
    touch-action: none;

    .vs-popup-mask {
      position: fixed;
      z-index: 999;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .4);
      opacity: 1;
      transition: opacity 0.2s ease-out;
      &.hide{
        opacity: 0;
      }
    }

    .vs-popup-content {
      position: fixed;
      max-width: $iPadWidth;
      width: 100%;
      background-color: #fff;
      z-index: 1000;
      font-family: $FONT-FZLTHJW;
      font-size: 14px;
      text-align: center;
      color: #383838;

      &.bottom {
        bottom: 0;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);

        &.fade_in {
          animation: fadeBottom_in .2s ease-out forwards;
        }

        &.fade_out {
          animation: fadeBottom_out .2s ease-out forwards;
        }
      }

      &.top {
        top: 0;
        padding-top: constant(safe-area-inset-top);
        padding-top: env(safe-area-inset-top);

        &.fade_in {
          animation: fadeTop_in 0.2s ease-out forwards;
        }

        &.fade_out {
          animation: fadeTop_out 0.2s ease-out forwards;
        }
      }



      .title-box {
        font-family: $FONT-FZLTHJW;
        font-size: 12px;
        text-align: center;
        color: #888888;
      }

      .popup-title {
        font-size: 12px;
        text-align: center;
        color: #888888;
        padding: 24px 0 22px;
        border-bottom: solid .5px #eeeeee;
      }

      .popup-cancel {
        padding: 22px 0;
        font-family: $FONT-FZLTZCHJW;
      }
    }
  }

</style>
