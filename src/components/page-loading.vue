<template>
    <div class="vs-page-loading" >
      <vs-icon class = 'icon' :type="darkMode ? 'icon-loading-dark' : 'icon-loading-light'"  ></vs-icon>
    </div>
</template>

<script>
  import Icon from '../../lib/icon'
    export default {
      name: "vs-page-loading",
      components:{
        'vs-icon': Icon
      },
      props:{
        darkMode: {
          type: Boolean,
          default: false
        },
      }
    }
</script>

<style lang="scss" scoped>
  .vs-page-loading{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    border-radius: .05rem;
    /*background: rgba(0, 0, 0, 0.7);*/
    color: #fff;
    text-align: center;
    z-index: 10000;
    /*padding:10rem;*/
    .icon{
      margin:0 auto;
    }
  }
</style>
