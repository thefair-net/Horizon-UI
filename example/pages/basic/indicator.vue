<template>
  <div>
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
  width: 1.50rem;
  text-align: center;
  margin: .30rem;
  padding: .10rem;
  color: #fafafa;
  background-color: #30302f;
}
</style>
