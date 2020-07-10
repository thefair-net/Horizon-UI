<template>
  <div class="comment-card">
    <div class="left">
      <img class="avatar" :src="detail.user.avatar" alt="">
    </div>
    <div class="right">
      <div class="right-top">
        <span class="name">{{detail.user.nickname}}</span>
        <div class="like">
          <span>{{detail.likeCount}}</span>
          <img :src="require('../../static/img/thumb_unselect.svg')" alt="">
        </div>
      </div>
      <div class="right-middle">
        <div class="comment-text">
          {{detail.message}}
        </div>
        <div class="comment-img" v-if="detail.commentImg">
          <img :src="detail.commentImg" alt="">
        </div>
      </div>
      <div class="right-bottom">
        <div class="right-bottom-left">
          <div class="view-conversation">查看对话</div>
          <div class="reply">回复</div>
          <div class="create-time">{{moment(detail.createTime).format('YYYY/MM/DD')}}</div>
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

  export default {
    name: "vs-comment-card",
    props: {
      detail: {
        type: Object
      }
    },
    setup() {
      return {
        moment
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/config";

  .comment-card {
    display: flex;
    align-items: flex-start;
    padding: 15rem 0 0 17rem;

    .left {
      .avatar {
        width: 40px;
        height: 40px;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
        margin-right: 12rem;
      }
    }

    .right {
      padding-right: 18rem;
      padding-bottom: 11rem;
      border-bottom: 1rem $gray-ed solid;
      display: flex;
      flex-direction: column;

      .right-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          font-family: $FONT-FZLTZCHJW;
          color: #444444;
          line-height: 1;
        }

        .like {
          font-family: $FONT-FZLTZCHJW;
          display: flex;
          align-items: center;

          span {
            margin-right: 3rem;
            font-size: 12rem;
          }
        }
      }

      .right-middle {
        margin-top: 10rem;

        .comment-text {
          font-family: $FONT-FZLTXIHJW;
          line-height: 1.5;
        }

        .comment-img {
          margin-top: 8rem;

          img {
            max-width: calc(100vw - 17rem - 40rem - 12rem - 18rem);
            max-height: 192rem;
            object-fit: contain;
            object-position: center left;
            border-radius: 4rem;
          }
        }
      }

      .right-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 22rem;
        font-family: $FONT-FZLTZCHJW;
        font-size: 12px;
        color: $gray-88;

        .right-bottom-left {
          display: flex;

          .view-conversation {
          }

          .reply {
            margin-left: 15rem;
          }

          .create-time {
            margin-left: 15rem;
            font-family: $FONT-FZLTXIHJW;
          }
        }

        .dots {
          width: 28rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 5rem;

          .dot {
            width: 3rem;
            height: 3rem;
            background-color: $gray-b3;
          }
        }
      }
    }
  }
</style>
