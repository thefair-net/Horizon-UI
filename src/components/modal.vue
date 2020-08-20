<template>
  <transition name="fade">
    <div class="vs-modal" v-show="value" @click="closeModal" @touchmove.self.prevent>
      <div class="modal-content" :class="[position ? ''+ position : '',fadeout ?'fade_out':'fade_in']">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
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
      closeModal() {
        // this.fadeout = true;
        // setTimeout(() => {
        //
        //   this.fadeout = false;
        // }, 300)
        this.$emit("change", false)
      }
    },
    beforeDestroy() {
      document.body.style.overflow = this.docOverflow;
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/config";

  .vs-modal {
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);

    .modal-content {
      background-color: #fff;
      z-index: 1000;
      font-family: $FONT-FZLTXHJW;
      font-size: .14rem;
      text-align: center;
      color: #383838;
      border-radius: .10rem;
      padding: .30rem;
      min-width: .200rem;
      .content{
        display: flex;
        align-content: center;
        justify-content: center;
      }
      .title-box {
        font-family: $FONT-FZLTXHJW;
        font-size: .12rem;
        text-align: center;
        color: #888888;
      }


    }

  }
</style>
