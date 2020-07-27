<template>
  <div>
    <div>
      <div class="button" @click="clickBtn">toast</div>
      <div class="button" @click="clean">clean</div>
    </div>
    <vs-page-description>
      toast组件<br>
      使用: Toast({…options})<br>
      销毁: Toast.destroyAll() <br>
      <br>
      options 可选参数<br>
      message: string <br>
      duration: int 默认值2000ms 单位ms<br>
      icon: string 与icon组件中的type一致 <br>
    </vs-page-description>
  </div>
</template>

<script>

  import Toast from "../../../lib/toast";
  import {PageDescription} from "../../../lib";

  export default {
    name: "toast",
    components:{
      'vs-page-description': PageDescription
    },
    methods: {
      clickBtn() {
        Toast({
          message: '我是toast',
          duration: 2000,
          icon:'icon-check'
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
  width: 1.00rem;
  text-align: center;
  margin:.30rem;
  padding: .10rem;
  color: #fafafa;
  background-color: #30302f;
}
</style>
