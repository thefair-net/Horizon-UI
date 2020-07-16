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
        fadeout: false
      }
    },
    model: {
      prop: "value",
      event: 'change'
    },
    methods: {
      closePopup() {
        this.fadeout = true;
        setTimeout(() => {
          this.$emit("change", false)
          this.fadeout = false;
        }, 300)

      }
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
      font-size: 14rem;
      text-align: center;
      color: #383838;

      &.bottom {
        bottom: 0%;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);

        &.fade_in {
          animation: fadeBottom_in 0.3s linear forwards;
        }

        &.fade_out {
          animation: fadeBottom_out 0.3s linear forwards;
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

      .title-box {
        font-family: 'FZLTXIHJW';
        font-size: 12rem;
        text-align: center;
        color: #888888;
      }

      .popup-title {
        font-size: 12rem;
        text-align: center;
        color: #888888;
        padding: 24rem 0 22rem;
        border-bottom: solid 1rem #eeeeee;
      }

      .popup-cancel {
        padding: 22rem 0 34rem;
        border-top: solid 1rem #eeeeee;
      }
    }

  }
</style>
