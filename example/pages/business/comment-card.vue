<template>
  <div>
    <vs-comment-card :key="key" v-for="(item, key) in comments" :detail="item"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comments: [{
          "commentImg": "https://wx3.sinaimg.cn/large/005EfzLfgy1ggkiqrsdd4j30ru0fogqr.jpg",
          "id": 1270943931059666944,
          "videoId": 196491,
          "videoTitle": "视觉混剪：我们想得太多，又做得太少",
          "parentReplyId": 0,
          "rootReplyId": 1270943931059666944,
          "sequence": 20,
          "message": "臆想症在周边越来越多。孤独和单身者居多，这类人没什么问题，问题在于现实里没钱。是接受现实还是继续生活。有钱他们像一阵风一样。没钱他们像幽灵一样。",
          "replyStatus": "PUBLISHED",
          "createTime": 1591851621000,
          "user": {
            "uid": 303238268,
            "nickname": "我们都是行动上的矮子",
            "avatar": "http://img.kaiyanapp.com/df20fa694d1ad89484beaa0037250f11.jpeg?imageMogr2/quality/60/format/jpg",
            "userType": "NORMAL",
            "ifPgc": false,
            "description": "",
            "area": null,
            "gender": "male",
            "registDate": 1567903276000,
            "releaseDate": 1588151510000,
            "cover": null,
            "actionUrl": "eyepetizer://pgc/detail/303238268/?title=%E6%88%91%E4%BB%AC%E9%83%BD%E6%98%AF%E8%A1%8C%E5%8A%A8%E4%B8%8A%E7%9A%84%E7%9F%AE%E5%AD%90&amp;userType=NORMAL&amp;tabIndex=0",
            "followed": false,
            "limitVideoOpen": false,
            "library": "BLOCK",
            "birthday": 0,
            "country": null,
            "city": null,
            "university": null,
            "job": null,
            "expert": false
          },
          "likeCount": 59,
          "liked": false,
          "hot": true,
          "userType": null,
          "type": "video",
          "actionUrl": null,
          "imageUrl": null,
          "ugcVideoId": null,
          "userBlocked": false,
          "sid": "1270943931059666944"
        },]
      }
    }
  }
</script>

<style scoped>

</style>
