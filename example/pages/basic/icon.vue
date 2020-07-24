<template>
  <div class="page icon-page">
    <div v-for="item in types">
    <div class="icon-container"  >
      <vs-icon :type="item"/>
    </div>
    <p>{{item}}</p>
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
          'icon-spinner',
          'icon-thumb-unselect',
          'icon-thumb-dark-unselect',
          'icon-thumb-selected',
          'icon-thumb-dark-selected',
          'icon-dot'
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
    p{
      text-align: center;
    }
  }
</style>
