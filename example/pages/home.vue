<template>
  <div class="page">
    <div class="home-title">
      Horizon UI - web前端组件库
    </div>
    <div class="group" v-for="group in navs">
      <div class="group-title">
        <img src="../assets/img/title.svg" alt="">
        {{ group.title }}
      </div>
      <div @click="handleItemClick(item)" v-for="item in group.list" class="cell" v-if="!item.meta.hide">
        <span>{{ item.name }} - {{ item.desc }}</span>
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
@import '../../static/config.scss';

.home-title {
  font-size: 20px;
  padding: 20px 0;
  margin: 0 auto;
  text-align: center;
  display: block;
  line-height: 1;
  border: 1px #eee solid;
  background-color: #fafafa;
}

.group-title {
  font-size: 15px;
  padding: 15px 0 15px 15px;
  border-bottom: 1px #eee solid;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.cell {
  padding: 15px;
  border-bottom: 1px #eee solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
