<template>
  <div class="vs-page-banner">
    <div class="banner-box" :style="{ backgroundImage: 'url(' + cover + ')' }">
      <div class="banner-content">
        <div class="title-box">
          <slot name="title"></slot>
        </div>
        <div class="subtitle-box">
          <slot name="subtitle"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vs-page-banner",
    props: {
      cover: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../static/config";
  .vs-page-banner {
    .banner-box {
      width: 100%;
      height: 223px;
      padding: 17px;
      background-color: #fff;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
      }

      .banner-content {
        position: relative;
        z-index: 2;
        color: #ffffff;
        font-family: $FONT-FZLTZCHJW;

        .title-box {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 150px;
          text-align: left;
          font-family: $FONT-FZLTZCHJW;
          font-size: 20px;
          line-height: 1.3;
        }

        .subtitle-box {
          margin-top: 20px;
          font-family: $FONT-FZLTZCHJW;
        }
      }
    }
  }
</style>
