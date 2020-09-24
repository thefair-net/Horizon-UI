<template>
  <transition name="fade" mode="out-in">
    <div class="open-in-browser" v-show="show" @click="close">
      <img class="img" src="../../static/img/open-in-browser.svg" alt="">
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
      show: this.show,
    }
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.open-in-browser {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 10px;
  padding-right: 10px;
}

</style>
