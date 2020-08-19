<template>
  <div class="nav-bar">
    <img class="left" src="../assets/img/left.svg" alt="" @click="handleNavClick">
    {{ title }}
    <div class="right" @click="switchMode" v-if="isShowSwitchButton">
      切换模式
    </div>
  </div>
</template>

<script>
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
    const isShowSwitchButton = context.root.$route.path.includes('comment') ||  context.root.$route.path.includes('feed')
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
  font-size: 0.15rem;
  padding: 0.15rem;
  line-height: 1;
  border: 0.01rem #eee solid;
  background-color: #fafafa;

  .left {
    position: absolute;
    left: 0.15rem;
  }

  .right {
    position: absolute;
    right: 0.15rem;
    border: #45af7f 0.01rem solid;
    padding: 0.06rem 0.1rem;
    border-radius: 0.05rem;
    color: #fafafa;
    background-color: #45af7f;
    cursor: pointer;
  }
}
</style>
