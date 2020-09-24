<template>
  <div class="page">
    <div class="button" @click="clickBtn">toast</div>
    <div class="button" @click="OpenInBrowserClick">openInBrowser</div>
  </div>
</template>

<script>
import Toast from "../../../lib/toast";
import OpenInBrowser from "../../../lib/open-in-browser";

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
    OpenInBrowserClick() {
      OpenInBrowser.open()
    }
  },
}
</script>

<style scoped>
.button {
  width: 200px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}
</style>
