<template>
  <div class="page">
    <div class="cell">
      正常使用：<vs-switch v-model="value1" @change="handleChange" :active-color="'#6219FF'"/> （自定义颜色）
    </div>
    <div class="cell">
      被禁用的：<vs-switch disabled v-model="value2"/>
    </div>
    <div class="cell">
      被禁用的：<vs-switch disabled v-model="value3"/>
    </div>
  </div>
</template>

<script>
import {Switch} from "../../../lib";

export default {
  name: "MySwitch",
  components: {
    'vs-switch': Switch,
  },
  data() {
    return {
      value1: true,
      value2: true,
      value3: false,
    }
  },
  methods: {
    handleChange() {
      console.log(this.value1)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 30px;
}
.cell {
  display: flex;
  align-items: center;
  margin: 30px;
}
.button {
  width: 100px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}
</style>
