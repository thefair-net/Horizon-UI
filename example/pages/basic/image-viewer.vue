<template>
  <div class="page">
    <div class="button" @click="ImageViewer({
        imgSrc: 'http://img.kaiyanapp.com/11593bd3f3edd71365147c6f05406b7e.png?w=500&h=312'
      })">点击查看大图1
    </div>
    <div class="button" @click="ImageViewer({
        imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595853825973&di=463f010e092eb5188d0ac14ef7403a0c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F08%2F20150908003022_FYV3h.jpeg'
      })">点击查看大图2
    </div>
  </div>
</template>

<script>
import {ImageViewer} from '../../../lib'

export default {
  mounted() {
  },
  setup() {
    return {
      ImageViewer
    }
  }
}
</script>

<style scoped>
.button {
  width: 150px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}
</style>
