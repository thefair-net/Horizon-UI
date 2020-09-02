<template>
  <vs-infinity-scroll :loading-status="loadingStatus" @load-more="loadMore">
    <template v-slot:infinity-scroll>
      <div class="box" :key="key" v-for="(item, key) in array">{{key}}</div>
    </template>
  </vs-infinity-scroll>
</template>
<script>
  import {ref, watch, onMounted} from '@vue/composition-api'
  import {InfinityScroll} from '../../../lib'

  export default {
    components: {
      'vs-infinity-scroll': InfinityScroll
    },
    setup() {
      const {
        LOADING_STATUS_INITIAL,
        LOADING_STATUS_DONE,
        LOADING_STATUS_LOADING
      } = InfinityScroll.loadingStatus
      const array = ref(10)
      const loadingStatus = ref(LOADING_STATUS_INITIAL)
      const loadMore = () => {
        if (array.value === 50) {
          loadingStatus.value = LOADING_STATUS_DONE
          return
        }
        loadingStatus.value = LOADING_STATUS_LOADING
        setTimeout(() => {
          // loadingStatus.value = LOADING_STATUS_INITIAL
          array.value += 10
        }, 1000)
      }
      return {
        array,
        loadingStatus,
        loadMore
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../static/config.scss';

  .box {
    width: 100px;
    height: 100px;
    background-color: #b3b1b1;
    color: #30302f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
  }
</style>
