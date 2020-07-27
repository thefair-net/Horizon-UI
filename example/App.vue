<template>
  <div id="app">
    <NavBar v-if="visible" :title="title"/>
    <!--    <transition name="fade" mode="out-in">-->
    <router-view></router-view>
    <!--    </transition>-->
  </div>
</template>
<script>
  import NavBar from './components/nav-bar'
  import {computed, onMounted, onUpdated, ref} from '@vue/composition-api'

  export default {
    components: {
      NavBar
    },
    setup(props, context) {
      const visible = ref(false)
      const title = ref('')
      onUpdated(() => {
        // console.log(context.root.$router.currentRoute)
        visible.value = context.root.$router.currentRoute.path !== '/'
        title.value = context.root.$router.currentRoute.name
      })
      return {
        visible,
        title
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../static/config.scss';

  #app {
    max-width: $iPadWidth;
    min-height: 100vh;
    margin: 0 auto;
  }

  .page {
    background-color: $white;
  }
</style>
