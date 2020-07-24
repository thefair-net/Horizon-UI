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
      :like="item.data.liked"
      :message="item.data.message"
      :image-url="item.data.imageUrl"
      :create-time="item.data.createTime"
      :parent-reply="item.data.parentReply"
      @like="likeEvent"
    />
  </div>
</template>

<script>
  import {comment, comments} from "../../utils/mock";
  import {CommentCard} from '../../../lib'
  export default {
    components: {
      'vs-comment-card': CommentCard,
    },
    data() {
      return {
        comments: comment
      }
    },
    methods:{
      likeEvent(item){
        console.log(item)
        // comments[index].data = Object.assign( comments[index].data,{liked:!comments[index].data.liked})
        item.data =  Object.assign( item.data,{liked:!item.data.liked})
        console.log(item)
      }

    }
  }
</script>

<style scoped>

</style>
