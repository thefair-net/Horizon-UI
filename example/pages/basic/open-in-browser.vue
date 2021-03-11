<template>
  <div class="page">
    <div class="button" @click="OpenInBrowserClick">OpenInBrowser</div>
  </div>
</template>

<script>
import OpenInBrowser from "../../../lib/open-in-browser";

export default {
  name: "open-in-browser",
  methods: {
    OpenInBrowserClick() {
      OpenInBrowser.open()
    },
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
