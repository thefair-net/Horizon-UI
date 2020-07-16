<template>
  <div >
    <div  class="button" @click="showPop">弹出</div>
    <vs-popup v-model="show" position="bottom" :overlay="false" :showCancel="true" title="选择举报原因">
      <div class="pop-item">
        举报1
      </div>
      <div class="pop-item last">
        举报2
      </div>
    </vs-popup>
  </div>
</template>

<script>
  import popup from "../../../src/components/popup";

  export default {
    name: "drawer",
    components: {
      'vs-popup': popup
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
    padding: 22rem 0 21rem;
    border-bottom: solid 1rem #eeeeee;
    &.last{
      border-bottom: none;
    }
  }
  .button{
    width: 100rem;
    text-align: center;
    margin:30rem;
    padding: 10rem;
    color: #fafafa;
    background-color: #30302f;
  }
  .item{
    max-height: 300rem;
    overflow: auto;
  }
</style>
