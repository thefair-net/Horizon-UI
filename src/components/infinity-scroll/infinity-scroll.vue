<template>
  <div class="infinity-scroll" ref="infinityScroll">
    <slot name="infinity-scroll"></slot>
    <div v-if="loadingStatus !== LOADING_STATUS_INITIAL">
      <template v-if="loadingStatus === LOADING_STATUS_LOADING">
        <slot name="loading">
          <div class="loading" >
            <vs-icon :key="uniqueId()" :type="'icon-loading-light'"/>
          </div>
        </slot>
      </template>
      <template v-if="loadingStatus === LOADING_STATUS_DONE">
        <slot name="end">
          <div class="the-end">
            <vs-icon :key="uniqueId()" :type="'icon-the-end'"/>
          </div>
        </slot>
      </template>
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
    onWindowScroll(event) {
      let docHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

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
    },
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
      // element.addEventListener('scroll', onScroll)
      window.addEventListener('scroll', this.onWindowScroll)
    }
  },
  mounted() {
    this.handleScroll(this.$refs.infinityScroll)
  },
  activated() {
    this.handleScroll(this.$refs.infinityScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.onWindowScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll)
  }
}
</script>

<style scoped lang="scss">
@import "../../../static/config";

.infinity-scroll {
  width: 100%;

  .loading {
    width: 100%;
    padding: 20px 0 86px 0;
    display: flex;
    justify-content: center;
  }

  .the-end {
    width: 100%;
    padding: 45px 0 230px 0;
    display: flex;
    justify-content: center;
  }
}

@supports (bottom: env(safe-area-inset-bottom)) {
  .loading {
    padding-bottom: calc(86px + env(safe-area-inset-bottom)) !important;
  }
}
</style>
