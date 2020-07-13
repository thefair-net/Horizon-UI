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
  import {onBeforeUnmount, onMounted, onUnmounted, ref} from "@vue/composition-api";

  export default {
    name: "vs-image-viewer",
    setup(props, context) {
      const originClientX = ref(0)
      const originClientY = ref(0)
      const lastClientY = ref(0)
      const operationY = ref('')
      const CONSTANT_SWIPE_UP = 'CONSTANT_SWIPE_UP'
      const CONSTANT_SWIPE_DOWN = 'CONSTANT_SWIPE_DOWN'
      const vm = context.root
      const imgSrc = vm.$options.imgSrc
      const imgClientX = vm.$options.imgClientX
      const imgClientY = vm.$options.imgClientY
      const imgWidth = vm.$options.imgWidth
      const imgHeight = vm.$options.imgHeight
      const fadeIn = ref(true)
      const fadeOut = ref(false)
      const handleTouchStart = (e) => {
        /**获取触摸初始坐标、初始化lastClientY**/
        originClientX.value = e.touches[0].clientX
        originClientY.value = e.touches[0].clientY
        lastClientY.value = originClientY.value
      }
      const handleTouchMove = (e) => {
        /**获取触摸坐标**/
        const clientX = e.touches[0].clientX
        const clientY = e.touches[0].clientY
        /**判断上下滑动**/
        if (lastClientY.value > clientY) {
          operationY.value = CONSTANT_SWIPE_UP
        } else {
          operationY.value = CONSTANT_SWIPE_DOWN
        }
        lastClientY.value = clientY
        /**计算滑动距离**/
        const clientXDiff = clientX - originClientX.value
        const clientYDiff = clientY - originClientY.value
        /**获取元素样式**/
        const targetStyle = e.target.style
        const imgStyle = e.target.firstElementChild.style
        /**还原transition duration为0**/
        imgStyle.transitionDuration = `0s`
        targetStyle.transitionDuration = `0s`
        /**根据移动距离计算缩放、透明度比例**/
        let rate = 1
        rate -= clientYDiff / 1000
        if (rate > 1) {
          rate = 1
        } else if (rate < 0.1) {
          rate = 0.1
        }
        /**根据比例改变缩放、背景透明度，并且改变移动距离，达到跟手效果**/
        imgStyle.transform = `scale(${rate}, ${rate}) translate(${clientXDiff}rem, ${clientYDiff}rem)`
        imgStyle.transformOrigin = `${clientX}rem ${clientY}rem`
        targetStyle.backgroundColor = `rgba(0, 0, 0, ${rate})`
      }
      /**销毁ImageViewer的方法**/
      const destroyVM = () => {
        vm.$destroy()
        document.getElementById('app').removeChild(vm.$el)
      }
      const handleTouchEnd = (e) => {
        // console.log('width', e.target.firstElementChild.width)
        // console.log('height', e.target.firstElementChild.height)
        // console.log('offsetTop', e.target.firstElementChild.offsetTop)
        // console.log('offsetLeft', e.target.firstElementChild.offsetLeft)
        // console.log('imgClientY', imgClientY)
        // console.log('imgClientX', imgClientX)
        const targetStyle = e.target.style
        const imgStyle = e.target.firstElementChild.style
        /**为销毁或还原图片，增加线性动画**/
        targetStyle.transition = `all 150ms linear`
        imgStyle.transition = `transform 150ms linear`
        if (operationY.value === CONSTANT_SWIPE_UP) { // 判断为上滑
          imgStyle.transform = `scale(1, 1) translate(0rem, 0rem)`
          imgStyle.transformOrigin = `center center`
          targetStyle.backgroundColor = `rgba(0, 0, 0, 1)`
        } else { // 判断为下滑
          fadeIn.value = false
          fadeOut.value = true
          // imgStyle.transform = `scale(${imgWidth / e.target.firstElementChild.width}, ${imgHeight / e.target.firstElementChild.height})`
          imgStyle.transform = `scale(0, 0)`
          imgStyle.transformOrigin = `center center`
          // targetStyle.backgroundColor = `rgba(0, 0, 0, 0)`
          setTimeout(() => {
            destroyVM()
          }, 150)
        }
      }
      const handleClick = (e) => {
        destroyVM()
      }
      return {
        imgSrc,
        handleClick,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        destroyVM,
        fadeIn,
        fadeOut
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
