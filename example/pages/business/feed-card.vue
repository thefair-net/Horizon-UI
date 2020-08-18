<template>
  <div class="page">
  <vs-feed-card
    :key="key"
    v-for="(item, key) in note"
    :index="key"
    :detail="item"
    :avatar="item.feed_content.user.avatar"
    :nickname="item.feed_content.user.nick"
    :like-count="item.feed_content.count_summary.favorite.count"
    :message="item.feed_content.content"
    :image-url="item.feed_content.image_list[0] && item.feed_content.image_list[0].url"
    :image-url-thumb="item.feed_content.image_list[0] && item.feed_content.image_list[0].url_thumbnail"
    :create-time="item.feed_time.txt"
    :like="item.feed_content.be_favorite ? 'liked' : 'unliked'"
    :first-two-comments="item.feed_content.comment_info.item_list"
    :comments-count="item.feed_content.count_summary.comment.count"
    @reply="showReplyOthersBox"
    @like="likeEvent"
    @operation="showMoreOperation"
    @avatar="handleAvatarClick"
    @view-all-replies="viewAllReplies"
  />
  </div>
</template>

<script>
  import { FeedCard, ReplyBox} from "../../../lib";
  import {onBeforeUnmount, ref} from "@vue/composition-api";
  import {note} from "../../utils/mock";

  export default {
    name: "feed-card.vue",
    components: {
      'vs-feed-card': FeedCard,
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
      const viewAllReplies = ()=>{

      }
      return {
        isShowBar,
        note,
        showReplyOthersBox,
        showMyReplyBox,
        likeEvent,
        showMoreOperation,
        moreOperation,
        showReasons,
        complain,
        showComplain,
        handleBarClick,
        handleTitleClick,
        handleAvatarClick,
        viewAllReplies
      }
    }
    }
</script>

<style scoped>

</style>
