<template>
  <div >
    <div  class="button" @click="showPop">弹出</div>

    <vs-modal v-model="show" :overlay="true" :showCancel="true" >
      aaaa
    </vs-modal>
  </div>
</template>

<script>
  import modal from "../../../src/components/modal";
  export default {
    name: "drawer",
    components: {

      'vs-modal': modal,
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
    padding: 22px 0 21px;
    border-bottom: solid 1px #eeeeee;
    &.last{
      border-bottom: none;
    }
  }
  .button{
    width: 100px;
    text-align: center;
    margin:30px;
    padding: 10px;
    color: #fafafa;
    background-color: #30302f;
  }
  .item{
    max-height: 300px;
    overflow: auto;
  }
</style>
