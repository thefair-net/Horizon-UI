<template>
  <transition name="fade" mode="out-in">
    <div class="loading-container" v-show="visible">
      <div class="loading">
        <vs-icon class='icon' :type="darkMode ? 'icon-loading-dark' : 'icon-loading-light'"></vs-icon>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../../../lib/icon'

export default {
  name: "loading",
  data() {
    return {
      visible: true
    }
  },
  components: {
    'vs-icon': Icon
  },
  props: {
    darkMode: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
}

.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  border-radius: .05rem;
  /*background: rgba(0, 0, 0, 0.7);*/
  color: #fff;
  text-align: center;
  /*padding:10rem;*/
  .icon {
    margin: 0 auto;
    width: .5rem;
    height: .5rem;
  }
}
</style>
