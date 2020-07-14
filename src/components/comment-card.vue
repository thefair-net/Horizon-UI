<template>
  <div :class="dark ? 'comment-card-dark' : 'comment-card-light'">
    <div class="left">
      <img class="avatar" :src="avatar" alt="">
    </div>
    <div class="right">
      <div class="right-top">
        <div class="name-container">
          <span class="name">{{nickname}}</span>
          <span class="reply-to" v-if="parentReply">回复 @{{parentReply.user.nickname}}</span>
        </div>
        <div class="like">
          <span>{{likeCount}}</span>
          <img v-if="!dark" :src="require('../../static/img/thumb_unselect.svg')" alt="">
          <img v-if="dark" :src="require('../../static/img/thumb_unselect_dark_mode.svg')" alt="">
        </div>
      </div>
      <div class="right-middle">
        <div class="comment-text">
          {{message}}
        </div>
        <div class="comment-img" v-if="imageUrl">
          <img @click="handleImgClick" :src="imageUrl" alt="">
        </div>
        <div class="parent-reply" v-if="parentReply">
          <div class="parent-reply-left">
            <img class="avatar" :src="parentReply.user.avatar" alt="">
          </div>
          <div class="parent-reply-right">
            <div class="name">
              {{parentReply.user.nickname}}
            </div>
            <div class="parent-reply-text">
              {{parentReply.message}}
            </div>
            <div class="parent-reply-img" v-if="parentReply.imageUrl">
              <img @click="handleImgClick" :src="parentReply.imageUrl" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="right-bottom">
        <div class="right-bottom-left">
          <div @click="viewConversation" class="view-conversation" v-if="parentReply">查看对话</div>
          <div class="reply">回复</div>
          <div class="create-time">{{moment(createTime).format('YYYY/MM/DD')}}</div>
        </div>
        <div class="dots">
          <div class="dot" v-for="item in 3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from '../utils/moment'
  import {ImageViewer} from '../../lib'

  export default {
    name: "vs-comment-card",
    props: {
      darkMode: {
        type: Boolean,
        default: false
      },
      avatar: {
        type: String,
        default: ''
      },
      nickname: {
        type: String,
        default: ''
      },
      likeCount: {
        type: Number,
        default: 0
      },
      message: {
        type: String,
        default: ''
      },
      imageUrl: {
        type: String,
        default: ''
      },
      createTime: {
        type: Number,
        default: 0
      },
      parentReply: {
        type: Object,
        default: null
      },
      detail: {
        type: Object
      }
    },
    setup(props, context) {
      let dark = false
      /**parent是通过comment slot传参**/
      /**props是通过comment-card单独使用时props传参**/
      /**其一成立即为暗黑模式**/
      if (context.parent.darkMode || props.darkMode) {
        dark = true
      }
      const handleImgClick = (e) => {
        ImageViewer({
          imgSrc: e.target.src
        })
      }
      const viewConversation = () => {
        context.emit('view-conversation', {})
      }
      return {
        handleImgClick,
        moment,
        dark,
        viewConversation
      }
    }
  }
</script>
<style scoped lang="scss" src="../../static/comment-card-light.scss"></style>
<style scoped lang="scss" src="../../static/comment-card-dark.scss"></style>
