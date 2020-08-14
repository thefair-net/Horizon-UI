<template>
  <div class="page">
    <div class="button" @click="handleOpenClick">点击回复</div>
  </div>
</template>

<script>
  import {onBeforeUnmount} from '@vue/composition-api'
  import {ReplyBox} from '../../../lib'

  export default {
    name: "reply-box",
    setup() {
      const handleOpenClick = ({message,nickname}) => {
        const r = ReplyBox({
          title:nickname,
          subtitle: message,
          uploadDisabled: false,
          methods:{
            onClose: function() {
              this.unmount(()=>{
                console.log('onClose unmount myself')
              });
            },
            onConfirm:function (data) {
              console.log('confirm data:',data)
              this.unmount(()=>{
                console.log('onConfirm unmount myself')
              });
            },
          },
        })
        r.open();
      }
      onBeforeUnmount(() => {
        ReplyBox.unmountAll(()=>{
          console.log('unmount All')
        })
      })
      return {
        handleOpenClick,
      }
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
