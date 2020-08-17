<template>
  <div>
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
  width: 1.00rem;
  text-align: center;
  margin: .30rem;
  padding: .10rem;
  color: #fafafa;
  background-color: #30302f;
}
</style>
