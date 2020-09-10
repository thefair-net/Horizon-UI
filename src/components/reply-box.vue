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
          <div class="subtitle" v-if="subtitle" :style="{marginTop:'5px'}">{{subtitle}}</div>
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
                accept="image/png, image/jpeg, image/gif, image/jpg"
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
        this.text = e.target.value.replace(/\s+/g, ""); // 去空格
      },
      handleImg(e) {
        let reader = new FileReader();
        if (!e.target.files[0].type.includes('image')) {
          Toast({message: '请上传图片文件'})
          return;
        }
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
      height: 266px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding: 0 15px;
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 14px;

      .top {
        width: 100%;
        height: 61px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $white;
        font-family: $FONT-FZLTZCHJW;
        border-bottom: 0.5px rgba(255, 255, 255, 0.2) solid;

        .close {
        }

        .title-box {
          text-align: center;
          font-size: 14px;

          .subtitle {
            max-width: 275px;
            height: 14px;
            opacity: 0.8;
            font-family: $FONT-FZLTHJW;
            font-size: 12px;
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
        height: 165px;
        flex: 1;

        .reply-area {
          width: 100%;
          height: 100%;
          padding: 10px 0;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
        height: 40px;
        color: $white;
        border-top: .5px rgba(255, 255, 255, 0.2) solid;

        .img {
          position: relative;

          img {
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: 1px;
            border: solid 1px rgba(255, 255, 255, 0.9);
            vertical-align:bottom;
          }

          .icon {
            position: absolute;
            right: 0;
            top: 0;
            width: 12px;
            height: 12px;
          }
        }

        .upload {
          label {
            display: flex;
            align-items: center;
            font-family: $FONT-FZLTZCHJW;
          }

          .text {
            margin-left: 3px;
          }
        }

        .left-count {

        }
      }
    }
  }
</style>
