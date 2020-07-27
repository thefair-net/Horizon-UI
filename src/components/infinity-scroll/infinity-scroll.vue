<template>
  <div class="infinity-scroll" ref="infinityScroll">
    <slot name="infinity-scroll"></slot>
    <div v-if="loadingStatus !== LOADING_STATUS_INITIAL">
      <span class="loading" v-if="loadingStatus === LOADING_STATUS_LOADING">
        <vs-icon :key="'icon-spinner'" :type="'icon-spinner'"/>
      </span>
      <span class="the-end" v-if="loadingStatus === LOADING_STATUS_DONE">
        <vs-icon :key="'icon-the-end'" :type="'icon-the-end'"/>
      </span>
    </div>
  </div>
</template>

<script>
  import Icon from '../../../lib/icon'
  import {
    LOADING_STATUS_INITIAL,
    LOADING_STATUS_DONE,
    LOADING_STATUS_LOADING
  } from './config'

  export default {
    name: "vs-infinity-scroll",
    props: {
      loadingStatus: {
        type: String,
        default: LOADING_STATUS_INITIAL
      }
    },
    data() {
      return {
        touchEnd: false,
        LOADING_STATUS_INITIAL,
        LOADING_STATUS_DONE,
        LOADING_STATUS_LOADING,
      }
    },
    components: {
      'vs-icon': Icon
    },
    methods: {
      handleScroll(element) {
        const onScroll = (event) => {
          let scrollNode = event.target
          let docHeight = document.body.clientHeight
          let scrollHeight = scrollNode.scrollHeight

          if (scrollNode.scrollTop + docHeight >= scrollHeight - 10) {
            if (!this.touchEnd) {
              this.touchEnd = true
              this.$emit('load-more', {})
            }
          } else {
            if (this.touchEnd) {
              this.touchEnd = false
            }
          }
        }

        element.addEventListener('scroll', onScroll)
      }
    },
    mounted() {
      this.handleScroll(this.$refs.infinityScroll)
    },
  }
</script>

<style scoped lang="scss">
  @import "../../../static/config";
  .infinity-scroll {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background-color: white;

    .loading {
      width: 100%;
      /*padding: 20rem 0 calc(20rem + #{$reply-height} + #{$safe-area}) 0;*/
      padding: .20rem 0;
      display: flex;
      justify-content: center;
    }

    .the-end {
      width: 100%;
      padding: .45rem 0 2.30rem 0;
      display: flex;
      justify-content: center;
    }
  }
</style>
