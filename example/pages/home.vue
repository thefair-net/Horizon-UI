<template>
  <div class="home">
    <div class="home-title">
      眼界vision - web前端组件库
    </div>
    <div class="group" v-for="group in navs">
      <div class="group-title">
        <img src="../assets/img/title.svg" alt="">
        {{group.title}}
      </div>
      <div @click="handleItemClick(item)" v-for="item in group.list" class="cell">
        <span>{{item.name}} - {{item.desc}}</span>
        <img src="../assets/img/right.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {NavConfig} from '../router'
  export default {
    setup(props, context) {
      const handleItemClick = (item) => {
        context.root.$router.push(item.path)
      }
      return {
        handleItemClick,
        navs: NavConfig
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-title {
    font-size: 20rem;
    padding: 20rem 0;
    margin: 0 auto;
    text-align: center;
    display: block;
    line-height: 1;
    border: 1rem #eee solid;
    background-color: #fafafa;
  }
  .group-title {
    font-size: 15rem;
    padding: 15rem 0 15rem 15rem;
    border-bottom: 1rem #eee solid;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .cell {
    padding: 15rem;
    border-bottom: 1rem #eee solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
