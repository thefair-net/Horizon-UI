<template>
  <div class="page">
    <div class="button" @click="CoverClick">Cover</div>
  </div>
</template>

<script>
import Cover from "../../../lib/cover";

export default {
  name: "cover",
  methods: {
    CoverClick() {
      Cover.open({message: '数据同步中...'})
      setTimeout(() => {
        Cover.open({message: '同步完成，返回APP', maskClosable: true})
        setTimeout(() => {
          Cover.close()
        }, 2000)
      }, 2000)
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
