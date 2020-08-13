<template>
  <div class="page icon-page">
    <template v-for="item in types">
      <div class="icon-container">
        <div class="icon">
          <vs-icon :type="item"/>
        </div>
        <span>{{item}}</span>
      </div>
    </template>
    <div class="icon-container">
      <div class="icon">
        <vs-avatar type="normal" src="http://thirdwx.qlogo.cn/mmopen/vi_32/EhqC6icT7YE9uk7hemJFporns6n4UyHBbCaXyf6yuxTT9TSoeKico59S4LanOzhInYCHUwOPksciagRnBnbnjyEVA/132"/>
      </div>
      <span>Avatar normal</span>
    </div>
  </div>
</template>

<script>
  import {Avatar, Icon} from '../../../lib'

  export default {
    name: "icon",
    components: {
      'vs-icon': Icon,
      'vs-avatar':Avatar
    },
    data() {
      return {
        types: [
          'icon-right',
          'icon-close',
          'icon-close-round',
          'icon-close-round-white',
          'icon-check',
          'icon-upload-img',
          'icon-the-end',
          'icon-spinner',
          'icon-thumb-unselect',
          'icon-thumb-dark-unselect',
          'icon-thumb-selected',
          'icon-thumb-dark-selected',
          'icon-dot',
          'icon-loading-light',
          'icon-loading-dark',
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .icon-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
  }
</style>
