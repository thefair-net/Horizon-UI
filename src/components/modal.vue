<template>
  <transition name="fade">
    <div class="vs-modal" v-if="value" @click="maskClosable && handleCancelClick()" @touchmove.self.prevent>
      <div class="modal-content" @click.stop>
        <vs-icon
          class="close"
          :type="'icon-close-gray'"
          @click="handleCancelClick"
        />
        <div :class="defaultContentStyle && 'content'">
          <slot></slot>
        </div>
        <div v-if="confirmButtonVisible" class="confirm" @click="handleConfirmClick">
          确定
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from "../../lib/icon";

export default {
  name: "vs-modal",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    confirmButtonVisible: {
      type: Boolean,
      default: true
    },
    defaultContentStyle: {
      type: Boolean,
      default: true
    }
  },
  components: {
    'vs-icon': Icon
  },
  methods: {
    handleConfirmClick() {
      this.$emit("confirm")
    },
    handleCancelClick() {
      this.$emit("cancel")
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../static/config";

.vs-modal {
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);

  .modal-content {
    min-width: 289px;
    max-width: 334px;
    max-height: 497px;
    background-color: #fff;
    z-index: 1000;
    position: relative;

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
    }

    .content {
      padding: 70px 24px 120px 24px;

      font-family: $FONT-SourceHanSansCN-Normal;
      font-size: 16px;
      line-height: 26px;
      color: #000000;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .confirm {
      width: 245px;
      height: 46px;
      position: absolute;
      bottom: 22px;
      left: 22px;
      background-color: black;
      color: white;

      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
