<template>
  <div class="vs-toast" :class="showContent ? 'fade-in':'fade-out'" >
    <vs-icon :type="icon" class="toast-icon" v-if="icon" :style="{marginBottom:message?'5rem':'0'}"></vs-icon>
    <span class="toast-text" v-if="message">{{message}}</span>
  </div>
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
        duration: this.$options.duration,
        showContent: this.showContent,
      }
    },
    methods: {
      destroyVM() {
        this.showContent = false
        setTimeout(() => {
          this.$destroy()
          document.getElementById('app').removeChild(this.$el)
        }, 160)
      },
    }
  }
</script>

<style  lang="scss" scoped>
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

  .vs-toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    border-radius: 5rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    z-index: 10000;
    padding:10rem;
    .toast-icon{
      margin:0 auto;
    }
  }

</style>
