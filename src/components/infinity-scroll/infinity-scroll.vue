<template>
  <div class="infinity-scroll" ref="infinityScroll">
    <slot name="infinity-scroll"></slot>
    <div v-if="loadingStatus !== LOADING_STATUS_INITIAL">
      <span class="loading" v-if="loadingStatus === LOADING_STATUS_LOADING">
        <vs-icon :key="uniqueId()" :type="'icon-spinner'"/>
      </span>
      <span class="the-end" v-if="loadingStatus === LOADING_STATUS_DONE">
        <vs-icon :key="uniqueId()" :type="'icon-the-end'"/>
      </span>
    </div>
  </div>
</template>

<script>
  import {uniqueId} from "../../utils/uniqueId";
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
        uniqueId
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
          let scrollTop = scrollNode.scrollTop

          if (scrollTop + docHeight >= scrollHeight - 10) {
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

        const onWindowScroll = event => {
          let docHeight = document.documentElement.clientHeight || document.body.clientHeight;
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          // console.log(scrollTop, docHeight, scrollHeight);

          if (scrollTop + docHeight >= scrollHeight - 10) {
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
        // element.addEventListener('scroll', onScroll)
        window.addEventListener('scroll', onWindowScroll)
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

    .loading {
      width: 100%;
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
