<template>
    <i class="Icon" :class="type" @click="handleClick"/>
</template>

<script>
  export default {
    name: "vs-icon",
    props: {
      type: {
        type: String,
        default: '',
        required: true
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('click', {e})
      }
    }
  }
</script>
<style scoped lang="scss" src="./icon.scss"></style>
