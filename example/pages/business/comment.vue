<template>
  <div class="page">
    <vs-comment :title="'热门评论'" :icon-show="true" @handleTitleClick="handleTitleClick">
      <template v-slot:comment-card>
        <vs-comment-card
          :key="key"
          v-for="(item, key) in comments"
          :index="key"
          :detail="item"
          :avatar="item.data.user.avatar"
          :nickname="item.data.user.nickname"
          :like-count="item.data.likeCount"
          :message="item.data.message"
          :image-url="item.data.imageUrl"
          :create-time="item.data.createTime"
          :parent-reply="item.data.parentReply"
          :like="item.data.liked"
          @reply="showReplyOthersBox"
          @like="likeEvent"
          @operation="showMoreOperation"
          @avatar="handleAvatarClick"
        />
      </template>
    </vs-comment>
    <vs-reply-bar @click="handleBarClick" v-if="isShowBar" />
    <vs-popup  class="more-operation" v-model="moreOperation" position="bottom" :overlay="true" :showCancel="true" title="更多操作">
      <div class="pop-item" @click="showComplain">
        举报该条评论
      </div>
    </vs-popup>
    <vs-popup  class="reasons" v-model="showReasons" position="bottom" :overlay="true" :showCancel="true" title="显示举报原因">
      <div class="pop-item" v-for="(item,index) in COMPLAIN_REASONS" @click="complain(index)">
        {{item}}
      </div>
    </vs-popup>
  </div>
</template>
<script>
  import {ref, onBeforeUnmount} from '@vue/composition-api'
  import {comments} from "../../utils/mock";
  import {Comment, CommentCard, Popup, ReplyBar, ReplyBox} from '../../../lib'

  const COMPLAIN_REASONS = ['反动、色情、政治敏感内容','不友善、不文明语言','广告、刷屏等垃圾信息','与主题无关的恶意言论']
  export default {
    components: {
      'vs-comment': Comment,
      'vs-comment-card': CommentCard,
      'vs-reply-bar': ReplyBar,
      'vs-popup':Popup
    },
    setup(props, context) {
      const isShowBar = ref(true)
      const moreOperation = ref(false)
      const showReasons = ref(false)
      const operationId = ref('')
      // 自己的回复框，一直保留
      const myReply = ReplyBox({
        methods:{
          onClose: function() {
            isShowBar.value = true;
          },
          onConfirm:function (data){
            isShowBar.value = true;
            console.log('confirm',data)
            this.close();
          },
        },
      })
      // 回复别人的回复框，不保留
      const showReplyOthersBox = ({message,nickname}) => {
        console.log(message,nickname)
        const r = ReplyBox({
          title:nickname,
          subtitle: message,
          methods:{
            onClose: function() {
              isShowBar.value = true;
              this.unmount();
            },
            onConfirm:function (data) {
              console.log('confirm',data)
              isShowBar.value = true;
              this.unmount();
            },
          },
        })
        r.open();
        isShowBar.value = false;
      }
      const handleBarClick = () => {
        showMyReplyBox();
      }
      const showMyReplyBox =() =>{
        isShowBar.value = false;
        myReply.open();
      }
      onBeforeUnmount(() => {
        /**卸载所有回复窗口**/
        ReplyBox.unmountAll();
      })
      const likeEvent = (item) => {
        console.log('like')
      }
      const showMoreOperation = (item)=>{
        moreOperation.value = true;
        // operationId.value = item.data.id;
      }
      const complain = (index)=>{
        console.log(operationId,index)
      }
      const showComplain = ()=>{
        moreOperation.value = false;
        showReasons.value = true;
      }
      const handleTitleClick = () => {
        alert('去热评区')
      }
      const handleAvatarClick = (item) => {
      }
      return {
        isShowBar,
        comments,
        showReplyOthersBox,
        showMyReplyBox,
        likeEvent,
        showMoreOperation,
        moreOperation,
        showReasons,
        complain,
        COMPLAIN_REASONS,
        showComplain,
        handleBarClick,
        handleTitleClick,
        handleAvatarClick
      }
    }
  }
</script>
<style  lang="scss" scoped>
  .pop-item {
    padding: 0.22rem 0 0.21rem;
    border-bottom: solid 0.005rem #eeeeee;
  }
</style>
