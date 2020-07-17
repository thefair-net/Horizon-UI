<template>
  <div class="page">
    <vs-comment :title="'热门评论'" :to="'/all-hot-comments'">
      <template v-slot:comment-card>
        <vs-comment-card
          :key="key"
          v-for="(item, key) in comments"
          :detail="item"
          :avatar="item.data.user.avatar"
          :nickname="item.data.user.nickname"
          :like-count="item.data.likeCount"
          :message="item.data.message"
          :image-url="item.data.imageUrl"
          :create-time="item.data.createTime"
          :parent-reply="item.data.parentReply"
          @reply="showReplyBox"
        />
      </template>
    </vs-comment>
    <vs-reply-bar @click="showReplyBox" v-if="isShowBar"/>
  </div>
</template>
<script>
  import {ref, onBeforeUnmount} from '@vue/composition-api'
  import {comments} from "../../utils/mock";
  import {Comment, CommentCard, ReplyBar, ReplyBox} from '../../../lib'

  export default {
    components: {
      'vs-comment': Comment,
      'vs-comment-card': CommentCard,
      'vs-reply-bar': ReplyBar,
    },
    setup(props, context) {
      const isShowBar = ref(true)
      ReplyBox.mount({
        onClose: () => {
          isShowBar.value = true
        }
      })
      const showReplyBox = () => {
        ReplyBox.open()
        isShowBar.value = false
      }
      onBeforeUnmount(() => {
        ReplyBox.unmount()
      })
      return {
        isShowBar,
        comments,
        showReplyBox
      }
    }
  }
</script>
