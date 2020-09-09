<template>
  <div class="page popup-page">
    <div class="button" @click="showPop('bottom')">弹出底部弹层</div>
    <div class="button" @click="showPop('top')">弹出顶部弹层</div>
    <vs-popup v-model="show" :position="position" :overlay="true" :showCancel="true" title="选择举报原因">
      <div class="content">
        <div class="pop-item">
          item1
        </div>
        <div class="pop-item ">
          item2
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import {Popup} from "../../../lib";

export default {
  components: {
    'vs-popup': Popup
  },
  data() {
    return {
      show: false,
      position: ''
    }
  },
  methods: {
    showPop(position) {
      this.show = true;
      this.position = position;
    },
  }
}
</script>

<style lang="scss" scoped>
.popup-page {
  padding: 30px;
}

.pop-item {
  padding: 22px 0 21px;
  border-bottom: solid .5px #eeeeee;
}

.button {
  text-align: center;
  margin-bottom: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}

.item {
  max-height: 300px;
  overflow: auto;
}
</style>
