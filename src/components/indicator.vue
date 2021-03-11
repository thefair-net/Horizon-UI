<template>
  <transition name="fade">
    <div class="cover" v-if="show">
      <div class="indicator">
        <vs-icon :type="icon" class="toast-icon" v-if="icon"></vs-icon>
        <div v-if="message" :style="{marginTop:icon ?'5px':'0'}">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../../lib/icon'

export default {
  name: "vs-indicator",
  components: {
    'vs-icon': Icon
  },
  data() {
    return {
      message: this.$options.message,
      icon: this.$options.icon,
      show: this.show,
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-in {
  animation: fade-in 150ms ease-in;
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
  animation: fade-out 150ms ease-out;
  opacity: 0;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .indicator {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    z-index: 10000;
    padding: 14px 25px;

    .toast-icon {
      margin: 0 auto;
    }
  }
}

</style>
