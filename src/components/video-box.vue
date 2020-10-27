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
      src: this.$options.src,
      poster: this.$options.poster,
    }
  },
  components: {
    'vs-icon': Icon
  },
  methods: {
    close() {
      this.show = false
    }
  },
  mounted() {
    setTimeout(() => {
      document.getElementById('video-box').play()
    })
  }
}
</script>

<style lang="scss" scoped>
.video-box {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
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
