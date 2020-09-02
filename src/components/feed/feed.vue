<template>
  <div :class="darkMode ? 'feed-dark' : 'feed-light'">
    <div v-if="title" class="title" @click="handleTitleClick">
      {{title}}
      <vs-icon class="icon-right" :key="uniqueId()" type="icon-right" v-if="iconShow"/>
    </div>
    <slot name="feed-card" :dark-mode="darkMode"></slot>
  </div>
</template>

<script>
  import {uniqueId} from "../../utils/uniqueId";
  import Icon from '../../../lib/icon'
  export default {
    name: "vs-feed",
    props: {
      title: {
        type: String,
        default: ''
      },
      darkMode: {
        type: Boolean,
        default: false
      },
      iconShow:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        uniqueId
      }
    },
    components: {
      'vs-icon': Icon
    },
    methods: {
      handleTitleClick() {
        this.$emit('handleTitleClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../static/config";

  .feed-light {
    width: 100%;

    .title {
      padding: 25px 0 12px 17px;
      font-family: $FONT-FZLTZCHJW;
      display: flex;
      align-items: center;
      .icon-right {
        margin-left: 5px;
      }
    }
  }

  .feed-dark {
    width: 100%;
    background-color: $black-30;

    .title {
      padding: 25px 0 12px 17px;
      font-family: $FONT-FZLTZCHJW;
      color: $white;
      display: flex;
      align-items: center;
      .icon-right {
        margin-left: 5px;
      }
    }
  }
</style>
