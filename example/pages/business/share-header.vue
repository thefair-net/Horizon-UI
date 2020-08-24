<template>

</template>

<script>
import {ShareHeader, Toast} from "../../../lib";

export default {
  name: "share-header",
  components: {},
  mounted() {
    ShareHeader.open({
      avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKV5rK9hs2yA4q30dvdcicPlCiaHyZdbsCj9IeQFQRNfCakK0cHIiastqDKXzlKUvPU8fjJkKAs0JuYw/132',
      nickname: '邻家美少女',
      message: '邀请你参与话题投票',
      methods: {
        onClick() {
          Toast({message: '立即打开'})
        },
      }
    })
  },
  beforeDestroy() {
    ShareHeader.close();
  }
}
</script>

<style scoped>

</style>
