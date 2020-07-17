<template>
  <div class="page icon-page">
    <div class="icon-container" v-for="item in types">
      <vs-icon :type="item"/>
    </div>
  </div>
</template>

<script>
  import {Icon} from '../../../lib'
  export default {
    name: "icon",
    components: {
      'vs-icon': Icon
    },
    data() {
      return {
        types: [
          'icon-right',
          'icon-close',
          'icon-check',
          'icon-upload-img',
          'icon-the-end',
          'icon-spinner'
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .icon-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    .icon-container {
      background-color: #bebebc;
      width: 30vw;
      height: 30vw;
      margin: 1vw;
    }
  }
</style>
