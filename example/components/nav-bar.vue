<template>
  <div class="nav-bar">
    <img class="left" src="../assets/img/left.svg" alt="" @click="handleNavClick">
    {{ currentMode ? currentMode : title }}
    <div class="right" @click="switchMode" v-if="isShowSwitchButton">
      切换模式
    </div>
  </div>
</template>

<script>
import {ref, watchEffect} from '@vue/composition-api'

export default {
  name: "nav-bar",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const handleNavClick = () => {
      context.root.$router.push('/')
    }
    const isShowSwitchButton = context.root.$route.path.includes('comment') || context.root.$route.path.includes('feed')
    let currentMode = ref('')
    watchEffect(() => {
      if (isShowSwitchButton) {
        if (context.root.$route.path.includes('dark')) {
          currentMode.value = '🌜深夜模式'
        } else {
          currentMode.value = '☀️日间模式'
        }
      }
    })
    const switchMode = () => {
      const currentPath = context.root.$route.path
      let targetPath = ''
      if (currentPath === '/feed') {
        targetPath = '/feed-dark-mode'
      }
      if (currentPath === '/feed-dark-mode') {
        targetPath = '/feed'
      }
      if (currentPath === '/feed-card') {
        targetPath = '/feed-card-dark-mode'
      }
      if (currentPath === '/feed-card-dark-mode') {
        targetPath = '/feed-card'
      }
      if (currentPath === '/comment') {
        targetPath = '/comment-dark-mode'
      }
      if (currentPath === '/comment-dark-mode') {
        targetPath = '/comment'
      }
      if (currentPath === '/comment-card') {
        targetPath = '/comment-card-dark-mode'
      }
      if (currentPath === '/comment-card-dark-mode') {
        targetPath = '/comment-card'
      }
      context.root.$router.replace({
        path: targetPath
      })
    }
    return {
      handleNavClick,
      isShowSwitchButton,
      currentMode,
      switchMode
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 15px;
  line-height: 1;
  border: 1px #eee solid;
  background-color: #fafafa;
  position: relative;

  .left {
    position: absolute;
    left: 15px;
  }

  .right {
    position: absolute;
    top: 9px;
    right: 15px;
    border: #45af7f 1px solid;
    padding: 6px 10px;
    border-radius: 5px;
    color: #fafafa;
    background-color: #45af7f;
    cursor: pointer;
  }
}
</style>
