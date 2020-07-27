<template>
  <div>
    <div class="button" @click="handleOpenClick">点击回复</div>
    <vs-page-description>
      reply-box 组件<br>
      使用: ReplyBox({…options})<br>
      销毁全部: ReplyBox.destroyAll() <br>
      <br>
      options 可选参数 :<br>
      title: string <br>
      subtitle: string<br>
      methods: {<br>
      onClose:function 关闭的回调函数<br>
      onConfirm:function 确认的回调函数<br>
      } <br>
    </vs-page-description>
  </div>
</template>

<script>
  import {onBeforeUnmount} from '@vue/composition-api'
  import {PageDescription, ReplyBox} from '../../../lib'

  export default {
    name: "reply-box",
    components:{
      'vs-page-description': PageDescription
    },
    setup() {
      const handleOpenClick = ({message,nickname}) => {
        const r = ReplyBox({
          title:nickname,
          subtitle: message,
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
