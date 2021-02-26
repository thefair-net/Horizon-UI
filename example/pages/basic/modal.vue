<template>
  <div class="page">
    <div class="button" @click="showPop">弹出Modal</div>

    <vs-modal
      v-model="show"
      mask-closable
      @confirm="handleModalConfirm"
      @cancel="handleModalCancel"
    >
      确认后无法回退，是否确认选择？
    </vs-modal>

    <div class="button" @click="showPop1">弹出Modal1</div>

    <vs-modal
      v-model="show1"
      @confirm="handleModal1Confirm"
      @cancel="handleModal1Cancel"
    >
      选择新用户登录，将无法同步老账号数据，是否确认选择新用户登录。
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
      show1: false,
    }
  },
  methods: {
    showPop() {
      this.show = true;
    },
    showPop1() {
      this.show1 = true;
    },
    handleModalConfirm() {
      this.show = false;
    },
    handleModalCancel() {
      this.show = false;
    },
    handleModal1Confirm() {
      this.show1 = false;
    },
    handleModal1Cancel() {
      this.show1 = false;
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
