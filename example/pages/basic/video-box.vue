<template>
  <div class="page">
    <div class="button" @click="VideoBoxClick">VideoBox</div>
  </div>
</template>

<script>
import VideoBox from "../../../lib/video-box";

export default {
  name: "video-box",
  methods: {
    VideoBoxClick() {
      VideoBox.open({
        src: 'https://static1.thefair.net.cn/ad/image/20201027/%E5%BC%80%E7%9C%BC%20X%20GLE%20coupe_%E4%B8%8D%E5%8A%A8%E5%A3%B0%E8%89%B2%E5%85%89%E5%BD%B1%E5%AD%A3.mp4',
        poster: 'https://static1.thefair.net.cn/ad/image/20201027/66399C34-6A45-4202-8D55-F4109B390A8F.png'
      }, (e) => {
        console.log(e)
      })
    },
  },
}
</script>

<style scoped>
.button {
  width: 200px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}
</style>
