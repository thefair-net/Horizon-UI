<template>
  <div class="page">
    <div class="button" @click="clickBtn">toast</div>
  </div>
</template>

<script>

import Toast from "../../../lib/toast";

export default {
  name: "toast",
  methods: {
    clickBtn() {
      Toast({
        message: '我是toast',
        duration: 2000,
        icon: 'icon-check'
      })
    },
  },
}
</script>

<style scoped>
.button {
  width: 100px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}
</style>
