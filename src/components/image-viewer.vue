<template>
  <div>
    <div class="close"
         :class="{'fade-in': fadeIn, 'fade-out': fadeOut}"
         @click="handleClick">
      <vs-icon :type="'icon-close-round-white'"/>
    </div>
    <div
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      class="image-viewer"
      :class="{'fade-in': fadeIn, 'fade-out': fadeOut}"
      ref="imageViewer"
    >
      <img class="image" :src="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
  import Icon from '../../lib/icon'

  export default {
    name: "vs-image-viewer",
    components: {
      'vs-icon': Icon
    },
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
        isHitTop: true,
        isHitBottom: false,
      }
    },
    methods: {
      handleTouchStart(e) {
        /**获取触摸初始坐标、初始化lastClientY**/
        this.originClientX = e.touches[0].clientX
        this.originClientY = e.touches[0].clientY
        this.lastClientY = this.originClientY
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
        if (!this.isHitTop && !this.isHitBottom) {
          return
        }
        if (this.isHitTop && this.operationY === this.CONSTANT_SWIPE_DOWN) {
          e.preventDefault()
        }
        if (this.isHitBottom && this.operationY === this.CONSTANT_SWIPE_UP) {
          e.preventDefault()
        }
        this.lastClientY = clientY
        /**计算滑动距离**/
        const clientXDiff = clientX - this.originClientX
        const clientYDiff = clientY - this.originClientY
        /**根据移动距离计算缩放、透明度比例**/
        let rate = 1
        rate -= clientYDiff / 1000
        if (rate > 1) {
          rate = 1
        } else if (rate < 0.1) {
          rate = 0.1
        }
        /**根据比例改变缩放、背景透明度，并且改变移动距离，达到跟手效果**/
        this.imgStyle.transform = `scale(${rate}, ${rate}) translate(${clientXDiff / 100}rem, ${clientYDiff / 100}rem)`
        this.imgStyle.transformOrigin = `${clientX / 100}rem ${clientY / 100}rem`
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
          if (!this.isHitTop && !this.isHitBottom) {
            return
          }
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
        this.wrapperStyle.transition = `all 150ms linear`
        this.imgStyle.transition = `transform 150ms linear`
        this.fadeIn = false
        this.fadeOut = true
        this.imgStyle.transform = `scale(0, 0)`
        this.imgStyle.transformOrigin = `center center`
        setTimeout(() => {
          this.destroyVM()
        }, 150)
      }
    },
    mounted() {
      this.$refs.imageViewer.addEventListener('scroll', (e) => {
        if (e.target.scrollTop === 0) {
          console.log('到顶了')
          this.isHitTop = true
        } else {
          this.isHitTop = false
        }
        if (e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight) {
          console.log('到底了')
          this.isHitBottom = true
        } else {
          this.isHitBottom = false
        }
      })
      setTimeout(() => {
        const imageViewer = this.$refs.imageViewer
        const image = this.$refs.imageViewer.firstElementChild
        this.wrapperStyle = imageViewer.style
        this.imgStyle = image.style
        if (imageViewer.clientHeight > image.clientHeight) {
          imageViewer.style.alignItems = 'center'
        }
      }, 10)
    }
  }
</script>

<style scoped lang="scss">
  .close {
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
    z-index: 2001;
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
    align-items: flex-start;
    overflow-y: scroll;

    .image {
      width: 100%;
      object-position: center center;
      object-fit: contain;
      pointer-events: none;
    }
  }

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
</style>
