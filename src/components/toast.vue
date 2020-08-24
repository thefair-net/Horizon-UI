<template>
  <transition name="fade">
    <div class="toast" v-show="show">
      <vs-icon :type="icon" class="toast-icon" v-if="icon"></vs-icon>
      <div class="toast-text" v-if="message" :style="{marginTop:icon ?'0.05rem':'0'}">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
import Icon from '../../lib/icon'

export default {
  name: "vs-toast",
  components: {
    'vs-icon': Icon
  },
  data() {
    return {
      message: this.$options.message,
      icon: this.$options.icon,
      show: this.show,
      duration:this.$options.duration,
    }
  },
  methods: {
    destroyVM() {
      this.$destroy()
      document.getElementById('app').removeChild(this.$el)
    },
  }
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

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  /*border-radius: .05rem;*/
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  z-index: 10000;
  padding: .14rem .25rem;

  .toast-icon {
    margin: 0 auto;
  }
}

</style>
