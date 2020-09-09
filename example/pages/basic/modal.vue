<template>
  <div class="page">
    <div class="button" @click="showPop">弹出Modal</div>

    <vs-modal v-model="show" :overlay="true" :showCancel="true">
      我是Modal
    </vs-modal>
  </div>
</template>

<script>
import {Modal} from "../../../lib";

export default {
  name: "drawer",
  components: {
    'vs-modal': Modal,
  },
  data() {
    return {
      show: false,
      num: 100
    }
  },
  methods: {
    showPop() {
      this.show = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-item {
  padding: 22px 0 21px;
  border-bottom: solid 1px #eeeeee;

  &.last {
    border-bottom: none;
  }
}

.button {
  width: 100px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}

.item {
  max-height: 300px;
  overflow: auto;
}
</style>
