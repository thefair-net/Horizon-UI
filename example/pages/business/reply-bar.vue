<template>
  <div class="page">
    <vs-reply-bar
      @avatar="handleAvatarClick"
      @click="handleClick"
      :avatar="'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKV5rK9hs2yA4q30dvdcicPlCiaHyZdbsCj9IeQFQRNfCakK0cHIiastqDKXzlKUvPU8fjJkKAs0JuYw/132'"
      :placeholder="'我是placeholder，可以自定义...'"
    />
  </div>
</template>

<script>
import {ReplyBar, Toast} from '../../../lib'

export default {
  name: "reply-bar",
  components: {
    'vs-reply-bar': ReplyBar,
  },
  methods: {
    handleAvatarClick() {
      Toast({message: 'handleAvatarClick'})
    },
    handleClick() {
      Toast({message: 'handleClick'})
    }
  }
}
</script>

<style scoped>

</style>
