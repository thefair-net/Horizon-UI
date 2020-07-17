<template>
  <div class="page">
    <vs-comment-card
      :dark-mode="true"
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
  </div>
</template>

<script>
  import {comment} from "../../utils/mock";
  import {CommentCard} from '../../../lib'
  export default {
    components: {
      'vs-comment-card': CommentCard,
    },
    data() {
      return {
        comments: comment
      }
    }
  }
</script>

<style scoped>

</style>
