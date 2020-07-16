<template>
  <div>
    <div class="button" @click="clickBtn">toast</div>
    <div class="button" @click="clean">clean</div>
  </div>
</template>

<script>

  import Toast from "../../../lib/toast";

  export default {
    name: "toast",
    methods: {
      clickBtn() {
        Toast({
          message: '我是toast',
          duration: 40000
        })
      },
      clean() {
        Toast.destroyOne();
      }
    },
    destroyed() {
      Toast.destroyAll()
    }
  }
</script>

<style scoped>
.button{
  width: 100rem;
  text-align: center;
  margin:30rem;
  padding: 10rem;
  color: #fafafa;
  background-color: #30302f;
}
</style>
