<template>
  <div
    @click="handleClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    class="image-viewer"
    :class="{'fade-in': fadeIn, 'fade-out': fadeOut}"
  >
    <img class="image" :src="imgSrc" alt="">
  </div>
</template>

<script>
  export default {
    name: "vs-image-viewer",
    data() {
      return {
        originClientX: 0,
        originClientY: 0,
        lastClientY: 0,
        operationY: '',
        CONSTANT_SWIPE_UP: 'CONSTANT_SWIPE_UP',
        CONSTANT_SWIPE_DOWN: 'CONSTANT_SWIPE_DOWN',
        imgSrc: this.$options.imgSrc,
        fadeIn: true,
        fadeOut: false,
        wrapperStyle: null,
        imgStyle: null,
      }
    },
    methods: {
      handleTouchStart(e) {
        /**获取触摸初始坐标、初始化lastClientY**/
        this.originClientX = e.touches[0].clientX
        this.originClientY = e.touches[0].clientY
        this.lastClientY = this.originClientY
        this.wrapperStyle = e.target.style
        this.imgStyle = e.target.firstElementChild.style
        /**还原transition duration为0**/
        this.imgStyle.transitionDuration = `0s`
        this.wrapperStyle.transitionDuration = `0s`
      },
      handleTouchMove(e) {
        /**获取触摸坐标**/
        const clientX = e.touches[0].clientX
        const clientY = e.touches[0].clientY
        /**判断上下滑动**/
        if (this.lastClientY > clientY) {
          this.operationY = this.CONSTANT_SWIPE_UP
        } else {
          this.operationY = this.CONSTANT_SWIPE_DOWN
        }
        this.lastClientY = clientY
        /**计算滑动距离**/
        const clientXDiff = (clientX - this.originClientX)/100
        const clientYDiff = (clientY - this.originClientY )/100
        /**根据移动距离计算缩放、透明度比例**/
        let rate = 1
        rate -= clientYDiff / 1000
        if (rate > 1) {
          rate = 1
        } else if (rate < 0.1) {
          rate = 0.1
        }
        /**根据比例改变缩放、背景透明度，并且改变移动距离，达到跟手效果**/
        this.imgStyle.transform = `scale(${rate}, ${rate}) translate(${clientXDiff}rem, ${clientYDiff}rem)`
        this.imgStyle.transformOrigin = `${clientX}rem ${clientY}rem`
        this.wrapperStyle.backgroundColor = `rgba(0, 0, 0, ${rate})`
      },
      /**销毁ImageViewer的方法**/
      destroyVM() {
        this.$destroy()
        document.getElementById('app').removeChild(this.$el)
      },
      handleTouchEnd(e) {
        /**为销毁或还原图片，增加线性动画**/
        this.wrapperStyle.transition = `all 150ms linear`
        this.imgStyle.transition = `transform 150ms linear`
        if (this.operationY === this.CONSTANT_SWIPE_UP) { // 判断为上滑
          this.imgStyle.transform = `scale(1, 1) translate(0rem, 0rem)`
          this.imgStyle.transformOrigin = `center center`
          this.wrapperStyle.backgroundColor = `rgba(0, 0, 0, 1)`
        } else { // 判断为下滑
          this.fadeIn = false
          this.fadeOut = true
          this.imgStyle.transform = `scale(0, 0)`
          this.imgStyle.transformOrigin = `center center`
          setTimeout(() => {
            this.destroyVM()
          }, 150)
        }
      },
      handleClick(e) {
        this.destroyVM()
      }
    }
  }
</script>

<style scoped lang="scss">
  .fade-in {
    animation: fade-in 150ms linear;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fade-out {
    animation: fade-out 150ms linear;
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .image-viewer {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    .image {
      width: 100%;
      object-position: center center;
      object-fit: contain;
      pointer-events: none;
    }
  }
</style>
