<template>
  <div class="page">
    <vs-reply-bar :avatar="'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKV5rK9hs2yA4q30dvdcicPlCiaHyZdbsCj9IeQFQRNfCakK0cHIiastqDKXzlKUvPU8fjJkKAs0JuYw/132'"/>
  </div>
</template>

<script>
  import {ReplyBar} from '../../../lib'
  export default {
    name: "reply-bar",
    components: {
      'vs-reply-bar': ReplyBar,
    },
  }
</script>

<style scoped>

</style>
