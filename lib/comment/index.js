import Comment from "../../src/components/comment/comment"

Comment.install = function (Vue) {
  Vue.component(Comment.name, Comment)
}

export default Comment
