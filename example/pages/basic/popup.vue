<template>
  <div class="page">
    <div class="button" @click="showPop('bottom')">弹出底部弹层</div>
    <div class="button" @click="showPop('top')">弹出顶部弹层</div>
    <vs-popup v-model="show" :position="position" :overlay="true" :showCancel="true" title="选择举报原因">
      <div class="content">
        <div class="pop-item">
          item1
        </div>
        <div class="pop-item " >
          item2
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
  import { Popup} from "../../../lib";

  export default {
    components: {
      'vs-popup': Popup
    },
    data() {
      return {
        show: false,
        position: ''
      }
    },
    methods: {
      showPop(position) {
        this.show = true;
        this.position = position;
        // console.log('show', this.show)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    min-height: 6rem;
  }

  .pop-item {
    padding: .22rem 0 .21rem;
    border-bottom: solid .01rem #eeeeee;
  }

  .button {
    text-align: center;
    margin: .30rem;
    padding: .10rem;
    color: #fafafa;
    background-color: #30302f;
  }

  .item {
    max-height: 3.00rem;
    overflow: auto;
  }
</style>
