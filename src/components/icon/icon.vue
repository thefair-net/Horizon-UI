<template>
    <i class="Icon" :class="type"/>
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
    }
  }
</script>
<style scoped lang="scss" src="./icon.scss"></style>
