<template>

</template>

<script>
  import {ShareHeader} from "../../../lib";

  export default {
    name: "share-header",
    components: {

    },
    mounted() {
      ShareHeader.open({
        avatar:'',
        nickname:'邻家惊悚美少女',
        message:'你参与话题投票',
        methods:{
          onClick(){
            console.log('onclick')
          },
        }
      })
    },
    beforeDestroy() {
          ShareHeader.close();
    }
  }
</script>

<style scoped>

</style>
