<template>
  <div class="comment-card">
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
          <img :src="require('../../static/img/thumb_unselect.svg')" alt="">
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
          <div class="view-conversation" v-if="parentReply">查看对话</div>
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
    setup() {
      const handleImgClick = (e) => {
        ImageViewer({
          imgSrc: e.target.src
        })
      }
      return {
        handleImgClick,
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
        width: 40rem;
        height: 40rem;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
        margin-right: 12rem;
      }
    }

    .right {
      width: 100%;
      padding-right: 18rem;
      padding-bottom: 11rem;
      border-bottom: 1rem $gray-ed solid;
      display: flex;
      flex-direction: column;

      .right-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name-container {
          display: flex;
          flex-direction: column;

          .name {
            font-family: $FONT-FZLTZCHJW;
            color: $black-44;
            line-height: 1;
          }

          .reply-to {
            font-family: $FONT-FZLTXIHJW;
            font-size: 10rem;
            color: $gray-88;
            margin-top: 7rem;
          }
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
            max-width: 170rem;
            max-height: 192rem;
            object-fit: cover;
            object-position: center center;
            border-radius: 4rem;
          }
        }

        .parent-reply {
          width: 100%;
          display: flex;
          align-items: flex-start;
          padding: 10rem 10rem 10rem 8rem;
          margin-top: 10rem;
          border-radius: 4rem;
          background-color: rgba(0, 0, 0, 0.1);

          .parent-reply-left {
            .avatar {
              width: 30rem;
              height: 30rem;
              object-fit: cover;
              object-position: center center;
              border-radius: 50%;
              margin-right: 12rem;
            }
          }

          .parent-reply-right {
            .name {
              font-family: $FONT-FZLTZCHJW;
              color: $gray-a5;
            }

            .parent-reply-text {
              margin-top: 4rem;
              font-family: $FONT-FZLTXIHJW;
              color: $gray-a5;
            }

            .parent-reply-img {
              margin-top: 8rem;

              img {
                max-width: 170rem;
                max-height: 192rem;
                object-fit: cover;
                object-position: center center;
                border-radius: 4rem;
              }
            }
          }
        }
      }

      .right-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 22rem;
        font-family: $FONT-FZLTZCHJW;
        font-size: 12rem;
        color: $gray-88;

        .right-bottom-left {
          display: flex;

          .view-conversation {
            margin-right: 15rem;
          }

          .reply {
            margin-right: 15rem;
          }

          .create-time {
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
