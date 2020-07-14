<template>
  <div class="Icon">
    <div :class="type"></div>
  </div>
</template>

<script>
  export default {
    name: "vs-icon",
    props: {
      type: {
        type: String,
        default: '',
        required: true
      },
    }
  }
</script>
<style scoped lang="scss" src="./icon.scss"></style>
