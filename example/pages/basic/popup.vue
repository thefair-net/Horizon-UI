<template>
  <div >
    <div  class="button" @click="showPop">弹出</div>
    <vs-popup v-model="show" position="bottom" :overlay="true" :showCancel="true" title="选择举报原因">
      <div class="pop-item">
        举报1
      </div>
      <div class="pop-item last">
        举报2
      </div>
    </vs-popup>
    <vs-page-description>
      popup组件<br>
      定义了一个slot,来显示主内容
      <br>
      <br>
      可配置项<br>
      position: string, bottom/top/left/right 控制弹层位置 <br>
      overlay: boolean, 是否显示蒙层，默认值true<br>
      showCancel: boolean, 是否显示取消项，默认值false <br>
      title: string, 设置弹层标题 <br>
    </vs-page-description>
  </div>
</template>

<script>
  import {PageDescription,Popup} from "../../../lib";

  export default {
    name: "drawer",
    components: {
      'vs-popup': Popup,
      'vs-page-description': PageDescription
    },
    data() {
      return {
        show: false,
        num:100
      }
    },
    methods: {
      showPop() {
        this.show = true;
        console.log('show', this.show)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .pop-item {
    padding: .22rem 0 .21rem;
    border-bottom: solid .01rem #eeeeee;
  }
  .button{
    width: 1.00rem;
    text-align: center;
    margin:.30rem;
    padding: .10rem;
    color: #fafafa;
    background-color: #30302f;
  }
  .item{
    max-height: 3.00rem;
    overflow: auto;
  }
</style>
