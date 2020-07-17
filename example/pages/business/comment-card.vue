<template>
  <div class="page">
    <vs-comment-card
      :key="key"
      v-for="(item, key) in comment"
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
  import {CommentCard} from '../../../lib'
  import {comment} from "../../utils/mock";
  export default {
    components: {
      'vs-comment-card': CommentCard,
    },
    setup() {
      return {
        comment
      }
    }
  }
</script>

<style scoped>

</style>
