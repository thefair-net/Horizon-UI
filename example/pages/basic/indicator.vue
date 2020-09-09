<template>
  <div class="page">
    <div class="button" @click="clickBtn">Indicator.open</div>
    <div class="button" @click="clean">Indicator.close</div>
  </div>
</template>

<script>
import Indicator from "../../../lib/indicator";

export default {
  name: "indicator",
  methods: {
    clickBtn() {
      Indicator.open({
        message: '加载中',
      })
    },
    clean() {
      Indicator.close();
    }
  },
  destroyed() {
    Indicator.close()
  }
}
</script>

<style scoped>
.button {
  width: 150px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}
</style>
