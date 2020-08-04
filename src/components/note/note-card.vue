<template>
  <div :class="dark ? 'note-card-dark' : 'note-card-light'">
    <div class="left">
      <vs-avatar class='avatar' :src="avatar" @click.native="avatarClick"></vs-avatar>
    </div>
    <div class="right">
      <div class="right-top">
        <div class="name-container">
          <span class="name">{{nickname}}</span>
        </div>
        <div class="like">
          <span @click="thumbsUp">{{likeCount}}</span>
          <div v-show="!like" @click="thumbsUp">
            <div class="icon-thumbs-unlike"></div>
          </div>
          <transition name="thumbsUp">
            <div v-show="like" @click="thumbsUp">
              <div class="icon-thumbs-like"></div>
            </div>
          </transition>
        </div>
      </div>
      <div class="right-middle">
        <div class="comment-text">
          {{message}}
        </div>
        <div class="comment-img" v-if="imageUrl && imageUrlThumb">
          <img @click="handleImgClick(imageUrl)" :src="imageUrlThumb" alt="">
        </div>
        <div class="replies" v-if="firstTwoComments.length !== 0">
          <div class="reply-cell" :key="key" v-for="(item, key) in firstTwoComments">
            <span class="nickname">{{item.user.nick}}：</span>
            <span>{{item.comment_content}}</span>
          </div>

<!--          todo lqq 缺少回复评论-->
<!--          <div class="reply-cell">-->
<!--            <span class="nickname">{{'哈哈怪'}}-->
<!--              <span class="reply-to">-->
<!--                回复-->
<!--                <span class="nickname">{{'哈哈怪11'}}：</span>-->
<!--              </span>-->
<!--            </span>-->
<!--            <span>{{'或哈哈哈哈哈男女主角很像么'}}</span>-->
<!--          </div>-->
          <div class="view-all-replies" @click="viewAllReplies">
            共{{commentsCount}}条回复 >
          </div>
        </div>
      </div>
      <div class="right-bottom">
        <div class="right-bottom-left">
          <div class="reply" @click="reply">回复</div>
          <div class="create-time">{{createTime}}</div>
        </div>
        <div class="icon-dot" @click="operation"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import moment from '../../utils/moment'
  import {ImageViewer} from '../../../lib'
  import Icon from '../../../lib/icon'
  import Avatar from '../../../lib/avatar'

  export default {
    name: "vs-note-card",
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
      imageUrlThumb: {
        type: String,
        default: ''
      },
      createTime: {
        default: 0
      },
      detail: {
        type: Object
      },
      firstTwoComments: {
        type: Array,
        default: []
      },
      commentsCount: {
        type: Number,
        default: 0
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
      const handleImgClick = (url) => {
        ImageViewer({
          imgSrc: url
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
        console.log('thumbsup')
        context.emit('like', props.detail)
      }
      const operation = () => {
        console.log('showPopup')
        context.emit('operation', props.detail)
      }
      const avatarClick = () => {
        console.log('avatar')
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
        viewAllReplies
      }
    },
    beforeDestroy() {
      ImageViewer.close()
    }
  }
</script>
<style scoped lang="scss" src="../../../static/note-card-light.scss"></style>
<style scoped lang="scss" src="../../../static/note-card-dark.scss"></style>
