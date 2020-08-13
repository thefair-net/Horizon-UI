<template>
    <div class="nav-bar" @click="handleNavClick">
      <img class="left" src="../assets/img/left.svg" alt="">
      {{title}}
    </div>
</template>

<script>
  import {computed, onMounted, onUpdated} from '@vue/composition-api'
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
      return {
        handleNavClick
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
  }
</style>
