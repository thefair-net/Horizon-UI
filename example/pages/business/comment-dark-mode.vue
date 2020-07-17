<template>
  <div class="page">
    <vs-comment :dark-mode="true">
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
        />
      </template>
    </vs-comment>
    <vs-reply-bar/>
  </div>
</template>
<script>
  import {Comment, CommentCard, ReplyBar} from '../../../lib'
  import {comments} from "../../utils/mock";
  export default {
    components: {
      'vs-comment': Comment,
      'vs-comment-card': CommentCard,
      'vs-reply-bar': ReplyBar,
    },
    setup() {
      return {
        comments
      }
    }
  }
</script>
