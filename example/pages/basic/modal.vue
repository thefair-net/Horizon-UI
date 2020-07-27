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
    padding: .22rem 0 .21rem;
    border-bottom: solid .01rem #eeeeee;
    &.last{
      border-bottom: none;
    }
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
