<template>
  <div class="page">
    <vs-comment-card
      :key="key"
      v-for="(item, key) in comment"
      :detail="item"
      :like-count="item.feed_content.count_summary.favorite.count"
      :message="item.feed_content.content"
      :image-url="item.feed_content.cover_img"
      :create-time="item.feed_time"
      :nickname="item.feed_content.user.nick"
      :avatar="item.feed_content.user.avatar"
      :user ="item.feed_content.user"
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
