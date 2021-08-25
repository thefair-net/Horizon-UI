<template>
  <div class="_checkbox">
    <template v-if="type === 'checkbox'">
      <div class="_Checkbox" :class="{_large: size === 'large', _mini: size === 'mini'}" :style="{borderColor: color, opacity: disabled && 0.2}">
        <div v-if="value" class="_checked" :style="{backgroundColor: color}"/>
      </div>
    </template>
    <template v-if="type === 'radio'">
      <div class="_Checkbox _Radio" :class="{_large: size === 'large', _mini: size === 'mini'}" :style="{borderColor: color, opacity: disabled && 0.2}">
        <div v-if="value" class="_checked _Radio" :style="{backgroundColor: color}"/>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    type: {
      default: 'checkbox', // radio checkbox
      required: true,
      type: String
    },
    size: {
      default: 'regular', // mini large 10px...
      required: false,
      type: String
    },
    value: {
      default: false,
      required: true,
      type: Boolean
    },
    color: {
      default: 'black',
      required: false,
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
._checkbox {
  ._Checkbox {
    width: 12px;
    height: 12px;
    border: 1px black solid;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1px;
  }

  ._Radio {
    border-radius: 50%;
    overflow: hidden;
  }

  ._checked {
    width: 100%;
    height: 100%;
    background-color: black;
  }

  ._large {
    width: 15px;
    height: 15px;
  }

  ._mini {
    width: 10px;
    height: 10px;
  }
}
</style>
