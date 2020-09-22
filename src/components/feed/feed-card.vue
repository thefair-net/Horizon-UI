<template>
  <div :id="id" :class="dark ? 'feed-card-dark' : 'feed-card-light'">
    <div class="left">
      <vs-avatar :key="uniqueId()" class='avatar' :src="avatar" @click.native="avatarClick"/>
    </div>
    <div class="right">
      <div class="right-top">
        <div class="name-container">
          <span class="name">{{ nickname }}</span>
        </div>
        <div class="like" v-if="like === 'liked' || like === 'unliked'">
          <span @click="thumbsUp">{{ likeCount }}</span>
          <div v-show="like === 'unliked'" @click="thumbsUp">
            <vs-icon :key="uniqueId()" :type="dark ? 'icon-thumb-dark-unselect' : 'icon-thumb-unselect'"/>
          </div>
          <transition name="thumbsUp">
            <div v-show="like === 'liked'" @click="thumbsUp">
              <vs-icon :key="uniqueId()"
                       :type="dark ? 'icon-thumb-dark-selected' : 'icon-thumb-selected'"/>
            </div>
          </transition>
        </div>
      </div>
      <div class="right-middle">
        <div class="comment-text">
          <span v-if="replyTo.nick">回复&nbsp;<span class="nick">{{ replyTo.nick }}</span>：</span>
          {{ message }}
        </div>
        <div class="comment-img" v-if="imageUrl && imageUrlThumb">
          <img @click="handleImgClick(imageUrl)" :src="imageUrlThumb" alt="">
        </div>
        <div class="replies" v-if="firstTwoComments.length !== 0">
          <div class="reply-cell" :key="key" v-for="(item, key) in firstTwoComments">
            <span class="nickname">{{ item.user.nick }}</span>
            <span v-if="item.at_user && item.at_user.nick" class="reply-to">&nbsp;回复&nbsp;
              <span class="nickname">{{ item.at_user && item.at_user.nick }}</span>
            </span>:
            <span>{{ item.comment_content }}</span>
          </div>
          <div class="view-all-replies" @click="viewAllReplies">
            共{{ commentsCount }}条回复 >
          </div>
        </div>
      </div>
      <div class="right-bottom">
        <div class="right-bottom-left">
          <div class="reply" @click="reply">回复</div>
          <div class="create-time">{{ createTime }}</div>
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
  name: "vs-feed-card",
  components: {
    'vs-icon': Icon,
    'vs-avatar': Avatar
  },
  props: {
    darkMode: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: uniqueId()
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
      type: String,
      default: 'unliked'
    },
    message: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    imageUrlThumb: {
      type: String,
      default: ''
    },
    createTime: {
      default: 0
    },
    detail: {
      type: Object,
      default: () => ({})
    },
    firstTwoComments: {
      type: Array,
      default: () => []
    },
    commentsCount: {
      type: Number,
      default: 0
    },
    replyTo: {
      type: Object,
      default: () => ({})
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
    const handleImgClick = (url) => {
      ImageViewer({
        imgSrc: url
      })
    }
    const reply = () => {
      const {message, nickname} = props;
      context.emit('reply', {
        message,
        nickname,
        detail: props.detail
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
    const viewAllReplies = () => {
      context.emit('view-all-replies', props.detail)
    }
    return {
      handleImgClick,
      moment,
      dark,
      reply,
      thumbsUp,
      operation,
      avatarClick,
      viewAllReplies,
      uniqueId
    }
  },
  beforeDestroy() {
    ImageViewer.close()
  }
}
</script>
<style scoped lang="scss" src="../../../static/feed-card-light.scss"></style>
<style scoped lang="scss" src="../../../static/feed-card-dark.scss"></style>
