<template>
  <transition name="fade" mode="out-in">
    <div class="cover" v-if="show" @click="close">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "vs-cover",
  data() {
    return {
      show: this.show,
      message: this.$options.message,
      maskClosable: this.$options.maskClosable
    }
  },
  methods: {
    close() {
      if (this.maskClosable) this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
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

  color: white;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.56px;
}

</style>
