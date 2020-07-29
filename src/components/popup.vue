<template>
  <div class="vs-popup" v-show="value" @touchmove.self.prevent>
    <div class="vs-popup-mask" v-if="overlay" @click="closePopup"></div>
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
      title:{
        type: String,
        default: ''
      }
    },
    data() {
      return {
        fadeout: false,
        docOverflow:'visible'
      }
    },
    model: {
      prop: "value",
      event: 'change'
    },
    watch:{
      value(val){
        if(val){
          this.docOverflow = document.body.style.overflow;
          document.body.style.overflow = 'hidden'
        }else {
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
  @keyframes fadeBottom_in {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    50% {
      -webkit-transform: translateY(60%);
      transform: translateY(60%);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeBottom_out {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(40%);
      transform: translateY(40%);
    }
    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes fadeTop_in {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    50% {
      -webkit-transform: translateY(-40%);
      transform: translateY(-40%);
    }
    100% {
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
  }

  @keyframes fadeTop_out {
    0% {
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
    50% {
      -webkit-transform: translateY(-60%);
      transform: translateY(-60%);
    }
    100% {

      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
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
    }

    .vs-popup-content {
      position: fixed;
      width: 100%;
      background-color: #fff;
      z-index: 1000;
      font-family: 'FZLTXIHJW';
      font-size: .14rem;
      text-align: center;
      color: #383838;

      &.bottom {
        bottom: 0;

        &.fade_in {
          animation: fadeBottom_in 200ms linear forwards;
        }

        &.fade_out {
          animation: fadeBottom_out 200ms linear forwards;
        }
      }

      &.top {
        top: 0%;
        padding-top: constant(safe-area-inset-top);
        padding-top: env(safe-area-inset-top);

        &.fade_in {
          animation: fadeTop_in 0.3s linear forwards;
        }

        &.fade_out {
          animation: fadeTop_out 0.3s linear forwards;
        }
      }
      &.center {
        max-width: 3.00rem;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        margin: 0 auto;
      }

      .title-box {
        font-family: 'FZLTXIHJW';
        font-size: .12rem;
        text-align: center;
        color: #888888;
      }

      .popup-title {
        font-size: .12rem;
        text-align: center;
        color: #888888;
        padding: .24rem 0 .22rem;
        border-bottom: solid .01rem #eeeeee;
      }

      .popup-cancel {
        padding: .22rem 0 .22rem;
      }
    }
  }

  /* iphoneX,XS */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .bottom {
      padding-bottom: 0.34rem !important;
    }

  }

  /* iphoneXR*/
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    .bottom {
      padding-bottom: 0.34rem !important;
    }
  }

  /* iphoneXS Max */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    .bottom {
      padding-bottom: 0.34rem !important;
    }
  }
</style>
