<template>
  <div class="page">
    <vs-comment-card
      :key="key"
      v-for="(item, key) in comments"
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
  export default {
    data() {
      return {
        comments: [
          {
            "type": "reply",
            "data": {
              "dataType": "ReplyBeanForClient",
              "id": 1281463251460161536,
              "videoId": 341,
              "videoTitle": null,
              "parentReplyId": 1281097126327091200,
              "rootReplyId": 1281097126327091200,
              "sequence": 148,
              "message": "现高二的我记住了你这句话，明年高考为我祝福.",
              "replyStatus": "PUBLISHED",
              "createTime": 1594359622000,
              "user": {
                "uid": 302787806,
                "nickname": "清晨点支烟_1556802689892",
                "avatar": "http://qzapp.qlogo.cn/qzapp/1104373357/B77CB36AB222A1FBC8B5FF1AC26F5D4E/100",
                "userType": "NORMAL",
                "ifPgc": false,
                "description": null,
                "area": null,
                "gender": null,
                "registDate": 1556802690000,
                "releaseDate": null,
                "cover": null,
                "actionUrl": "eyepetizer://pgc/detail/302787806/?title=%E6%B8%85%E6%99%A8%E7%82%B9%E6%94%AF%E7%83%9F_1556802689892&userType=NORMAL&tabIndex=0",
                "followed": false,
                "limitVideoOpen": false,
                "library": "BLOCK",
                "birthday": null,
                "country": null,
                "city": null,
                "university": null,
                "job": null,
                "expert": false
              },
              "likeCount": 0,
              "liked": false,
              "hot": false,
              "userType": null,
              "type": "topic",
              "actionUrl": null,
              "imageUrl": null,
              "ugcVideoId": null,
              "parentReply": {
                "id": 1281097126327091200,
                "user": {
                  "uid": 303407829,
                  "nickname": "靠近一点点😀",
                  "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/uG9ofHRqPISdRfCKwNxct2UhI9AMW0teeLrC5QTUp8WfYWsoicGW8uc2uIV74u6mzx2coXkDiaCXDX68gSkicrJ6w/132",
                  "userType": "NORMAL",
                  "ifPgc": false,
                  "description": "懦弱只会让人越来越差，做你想做之事，追你爱之人。",
                  "area": null,
                  "gender": "male",
                  "registDate": 1574007395000,
                  "releaseDate": null,
                  "cover": null,
                  "actionUrl": "eyepetizer://pgc/detail/303407829/?title=%E9%9D%A0%E8%BF%91%E4%B8%80%E7%82%B9%E7%82%B9%F0%9F%98%80&userType=NORMAL&tabIndex=0",
                  "followed": false,
                  "limitVideoOpen": false,
                  "library": "BLOCK",
                  "birthday": 990588119000,
                  "country": null,
                  "city": "天津市",
                  "university": "天津理工大学",
                  "job": "学生",
                  "expert": false
                },
                "message": "回想自己的高中三年，有欢喜有忧愁。高一高二是懵懂的年纪，高三才知道自己背负的是什么。我忘记不了高三的奋笔疾书，忘不了高三因为考的差而彻夜难眠，同样也忘不了高一高二的无忧无虑。祝高考的你们一切顺利，愿你们以梦为马，不负韶华。高考只是一个开始，未来还长，愿你们永远心怀梦想，拥抱阳光。",
                "imageUrl": "http://img.kaiyanapp.com/11593bd3f3edd71365147c6f05406b7e.png?w=500&h=312",
                "replyStatus": "PUBLISHED"
              },
              "showParentReply": true,
              "showConversationButton": true,
              "ugcVideoUrl": null,
              "cover": null,
              "userBlocked": false,
              "sid": "1281463251460161536"
            },
            "tag": null,
            "id": 0,
            "adIndex": -1
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
