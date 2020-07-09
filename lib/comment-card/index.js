import CommentCard from "../../src/components/comment-card"

CommentCard.install = function (Vue) {
  Vue.component(CommentCard.name, CommentCard)
}

export default CommentCard
