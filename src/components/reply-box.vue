<template>
  <!-- prevent用来阻止背后页面内容滚动-->
  <div @click="handleMaskClose" @touchmove.prevent.stop="handleTouchmove" ref="replyBoxContainer" class="reply-box-container">
    <div class="reply-box" @touchmove.prevent="handleTouchmove" @click.stop>
      <div class="top">
        <div class="close" @click="hideReplyBox">
          <vs-icon :type="'icon-close'"/>
        </div>
        <div class="title-box">
          <div class="title">{{title}}</div>
          <div class="subtitle" v-if="subtitle" :style="{marginTop:'0.05rem'}">{{subtitle}}</div>
        </div>
        <div class="confirm" @click="confirm">
          <vs-icon :type="'icon-check'"/>
        </div>
      </div>
      <div class="middle">
        <!-- stop用来限制输入框的触摸操作不会穿透到container上，从而避免了输入框内容无法滚动的问题-->
        <textarea
          @input="handleInput"
          :maxlength="WORDS_LIMIT"
          @touchmove.stop="handleAreaTouchmove"
          ref="replyArea"
          class="reply-area"
          placeholder="写下你的评论"
          v-model="text"
        >
        </textarea>
      </div>
      <div class="bottom">
        <div class="left-count">
          {{wordLeft}}
        </div>
        <div class="upload-img" v-if="!uploadDisabled">
          <div class="img" v-if="img">
            <img class="" src="" ref="previewImage" alt="">
            <vs-icon class="icon" :type="'icon-close'" @click.native="deleteImg"/>
          </div>
          <div class="upload" v-else>
            <label>
              <vs-icon :type="'icon-upload-img'"/>
              <span class="text">图片</span>
              <input
                class="img-input"
                ref="fileInput"
                type="file"
                id='img'
                accept="image/*"
                style="display:none;"
                @input="handleImg"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Icon, Toast} from '../../lib'

  const WORDS_LIMIT = 500;
  export default {
    name: "vs-reply-box",
    data() {
      return {
        subtitle: this.$options.subtitle,
        uploadDisabled: this.$options.uploadDisabled || false,
        maskClosable: this.$options.maskClosable || true,
        text: '',
        WORDS_LIMIT,
        img: '',
        file: '',
        imgInfo: {
          width: 0,
          height: 0,
          scale: 1,
        }
      }
    },
    components: {
      'vs-icon': Icon
    },
    computed: {
      wordLeft: function () {
        return WORDS_LIMIT - this.text.length > 0 ? WORDS_LIMIT - this.text.length : 0;
      },
      title: function () {
        return this.$options.title ? '@' + this.$options.title : '评论'
      }
    },
    methods: {
      destroyVM() {
        this.$destroy()
        document.getElementById('app').removeChild(this.$el)
      },
      handleMaskClose(){
        if (!this.maskClosable){
          return;
        }
        this.hideReplyBox()
      },
      focusReplyArea() {
        this.$refs.replyArea.focus()
      },
      showReplyBox() {
        this.$refs.replyBoxContainer.style.marginBottom = '0';
      },
      hideReplyBox() {
        this.$refs.replyBoxContainer.style.marginBottom = '-200vh';
        this.onClose();
      },
      clearReplyBox() {
        this.img = '';
        this.text = '';
      },
      handleTouchmove() {
      },
      handleAreaTouchmove(e) {
        if (this.text.length < 240) {
          e.preventDefault()
        }
      },
      handleInput(e) {
        this.text = e.target.value;
      },
      handleImg(e) {
        let reader = new FileReader();
        this.file = e.target.files[0];
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          const imgCode = e.target.result;
          this.img = imgCode;
          const _this = this;
          const image = new Image();
          image.src = imgCode;
          image.onload = function () {
            _this.imgInfo.width = this.width;
            _this.imgInfo.height = this.height;
            _this.imgInfo.scale = (this.width / this.height).toFixed(2);
          }
          this.$nextTick(() => {
            _this.$refs.previewImage.src = imgCode;
          })
        }
      },
      deleteImg() {
        this.img = '';
        this.file = '';
      },
      confirm() {
        this.onConfirm({
          text: this.text,
          file: this.file,
          imgInfo: this.imgInfo
        });
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
    margin-bottom: -200vh;

    .reply-box {
      width: 100%;
      max-width: $iPadWidth;
      height: 2.66rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding: 0 0.15rem;
      -webkit-backdrop-filter: blur(0.20rem);
      backdrop-filter: blur(0.20rem);
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 0.14rem;

      .top {
        width: 100%;
        height: 0.61rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $white;
        font-family: $FONT-FZLTZCHJW;
        border-bottom: 0.01rem rgba(255, 255, 255, 0.2) solid;

        .close {
        }

        .title-box {
          text-align: center;
          font-size: 0.14rem;

          .subtitle {
            max-width: 2.75rem;
            height: .14rem;
            opacity: 0.8;
            font-family: 'FZLTXIHJW';
            font-size: .12rem;
            text-align: center;
            color: #ffffff;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
        }

        .confirm {
        }
      }

      .middle {
        width: 100%;
        height: 1.65rem;
        flex: 1;

        .reply-area {
          width: 100%;
          height: 100%;
          padding: .10rem 0;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
        height: .40rem;
        color: $white;
        border-top: .01rem rgba(255, 255, 255, 0.2) solid;

        .img {
          position: relative;

          img {
            width: .30rem;
            height: .30rem;
            object-fit: cover;
            border-radius: .01rem;
            border: solid .01rem rgba(255, 255, 255, 0.9);
            vertical-align:bottom;
          }

          .icon {
            position: absolute;
            right: 0;
            top: 0;
            width: 0.12rem;
            height: 0.12rem;
          }
        }

        .upload {
          label {
            display: flex;
            align-items: center;
            font-family: $FONT-FZLTZCHJW;
          }

          .text {
            margin-left: 0.03rem;
          }
        }

        .left-count {

        }
      }
    }
  }
</style>
