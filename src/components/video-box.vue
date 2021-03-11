<template>
  <transition name="fade" mode="out-in">
    <div class="video-box" v-if="show">
      <vs-icon :type="'icon-close'" class="close" @click="close"/>
      <video
        id="video-box"
        :poster="poster"
        controls
        playsinline
        :src="src"
        class="video"
        preload="auto"
      />
    </div>
  </transition>
</template>

<script>
import Icon from '../../lib/icon'

export default {
  name: "video-box",
  data() {
    return {
      show: this.show,
      callback: this.callback,
      src: this.$options.src,
      poster: this.$options.poster,
    }
  },
  components: {
    'vs-icon': Icon
  },
  watch: {
    show(newV) {
      if (newV) {
        this.callback({status: 'open'})
      } else {
        this.callback({status: 'close'})
      }
    }
  },
  methods: {
    close() {
      this.show = false
    }
  },
  mounted() {
    setTimeout(() => {
      const videoBox = document.getElementById('video-box')
      videoBox.play()
      videoBox.addEventListener('play', () => {
        this.callback({status: 'play'})
      })
      videoBox.addEventListener('pause', () => {
        this.callback({status: 'pause'})
      })
      videoBox.addEventListener('seeking', () => { // 拖动滚动条
        this.callback({status: 'seeking'})
      })
      videoBox.addEventListener('volumechange', () => { // 音量变更
        this.callback({status: 'volumechange'})
      })
      videoBox.addEventListener('ended', () => {
        this.callback({status: 'ended'})
      })
      videoBox.addEventListener('waiting', () => { // 加载中
        this.callback({status: 'waiting'})
      })
      videoBox.addEventListener('playing', () => { // 加载完、暂停、拖动后继续播放
        this.callback({status: 'playing'})
      })
      videoBox.addEventListener('error', () => { // 出错
        this.callback({status: 'error'})
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.video-box {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;

  .close {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .video {
    width: 100%;
  }
}

</style>
