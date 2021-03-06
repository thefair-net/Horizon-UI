<template>
  <div :class="dark ? 'comment-card-dark' : 'comment-card-light'">
    <div class="left">
      <vs-avatar :key="uniqueId()" class='avatar' :src="avatar" @click.native="avatarClick"/>
    </div>
    <div class="right">
      <div class="right-top">
        <div class="name-container">
          <span class="name">{{nickname}}</span>
          <span class="reply-to" v-if="parentReply">回复 @{{parentReply.user.nickname}}</span>
        </div>
        <div class="like">
          <span @click="thumbsUp">{{likeCount}}</span>
          <div v-show="!like" @click="thumbsUp">
            <vs-icon :key="uniqueId()" :type="dark ? 'icon-thumb-dark-unselect' : 'icon-thumb-unselect'"/>
          </div>
          <transition name="thumbsUp">
            <div v-show="like" @click="thumbsUp">
              <vs-icon :key="uniqueId()" :type="dark ? 'icon-thumb-dark-select' : 'icon-thumb-select'"/>
            </div>
          </transition>
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
            <vs-avatar :key="uniqueId()" class='avatar' :src="parentReply.user.avatar" @click.native="avatarClick"/>
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
          <div class="reply" @click="reply">回复</div>
          <div class="create-time">{{moment(createTime).format('YYYY/MM/DD')}}</div>
        </div>
        <vs-icon :key="uniqueId()" type="icon-dot" @click="operation"/>
      </div>
    </div>
  </div>

</template>

<script>
  import moment from '../../utils/moment'
  import {ImageViewer} from '../../../lib'
  import Icon from '../../../lib/icon'
  import Avatar from '../../../lib/avatar'
  import {uniqueId} from '../../utils/uniqueId';

  export default {
    name: "vs-comment-card",
    components: {
      'vs-icon': Icon,
      'vs-avatar': Avatar
    },
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
      like: {
        type: Boolean,
        default: false
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
        default: 0
      },
      parentReply: {
        type: Object,
        default: null
      },
      detail: {
        type: Object
      },
      index: {
        type: Number,
        default: 0
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
      const reply = () => {
        const {message, nickname} = props;
        context.emit('reply', {
          message,
          nickname
        })
      }
      const thumbsUp = () => {
        context.emit('like', props.detail)
      }
      const operation = () => {
        context.emit('operation', props.detail)
      }
      const avatarClick = () => {
        context.emit('avatar', props.detail)
      }
      return {
        handleImgClick,
        moment,
        dark,
        reply,
        thumbsUp,
        operation,
        avatarClick,
        uniqueId
      }
    },
    beforeDestroy() {
      ImageViewer.close()
    }
  }
</script>
<style scoped lang="scss" src="../../../static/comment-card-light.scss"></style>
<style scoped lang="scss" src="../../../static/comment-card-dark.scss"></style>
