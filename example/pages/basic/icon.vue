<template>
  <div class="page icon-page">
    <div v-for="item in types">
      <div class="icon-container">
        <div class="icon">
          <vs-icon :type="item"/>
        </div>
        <span>{{item}}</span>
      </div>
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
          'icon-dot',
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
    justify-content: space-around;
    align-items: flex-start;

    .icon-container {
      background-color: #ededed;
      width: 30vw;
      height: 30vw;
      margin: 1vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: .12rem;
      .icon {
        margin-top: .10rem;
        height: 5vw;
        display: flex;
        align-items: center;
      }
      span {
        margin-top: .10rem;
        text-align: center;
      }

    }

    p {
      text-align: center;
    }
  }
</style>
