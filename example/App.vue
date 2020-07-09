<template>
  <NavBar v-if="visible" :title="title"/>
  <router-view></router-view>
</template>
<script>
  import NavBar from './components/nav-bar'
  import {getCurrentInstance, computed, onMounted, onUpdated} from 'vue'
  export default {
    components: {
      NavBar
    },
    setup() {
      const {ctx} = getCurrentInstance()
      const visible = computed(() => ctx.$router.currentRoute.value.path !== '/')
      const title = computed(() => ctx.$router.currentRoute.value.name)
      return {
        visible,
        title
      }
    }
  }
</script>
<style>

</style>
