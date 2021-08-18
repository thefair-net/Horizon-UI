<template>
  <label class="mint-switch">
    <input
      class="mint-switch-input"
      :disabled="disabled"
      @change="$emit('change')"
      type="checkbox"
      v-model="currentValue"
    >
    <span class="mint-switch-core" :style="{
      opacity: disabled ? 0.5 : 1,
      borderColor: value ? activeColor : '#d9d9d9',
      backgroundColor: value ? activeColor : '#d9d9d9',
    }"></span>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: 'vs-switch',

  props: {
    value: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#26a2ff'
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../static/var";

.mint-switch {
  display: flex;
  align-items: center;
  position: relative;

  * {
    pointer-events: none;
  }

  .mint-switch-input {
    display: none;

    &:checked {
      + .mint-switch-core {
        border-color: $color-blue;
        background-color: $color-blue;

        &::before {
          transform: scale(0);
        }

        &::after {
          transform: translateX(20px);
        }
      }
    }
  }

  .mint-switch-core {
    display: inline-block;
    position: relative;
    width: 52px;
    height: 32px;
    border: 1px solid $color-grey;
    border-radius: 16px;
    box-sizing: border-box;
    background: $color-grey;

    &::after, &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      transition: transform .3s;
      border-radius: 15px;
    }

    &::after {
      width: 30px;
      height: 30px;
      background-color: $color-white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }

    &::before {
      width: 50px;
      height: 30px;
      background-color: #fdfdfd;
    }
  }
}
</style>
