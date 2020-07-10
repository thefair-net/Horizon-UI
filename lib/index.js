import Comment  from './comment'
import CommentCard from './comment-card'
import Avatar from './avatar'

const components = [
  Comment,
  CommentCard,
  Avatar
]

function install(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  Comment,
  CommentCard,
  Avatar
}

export default {
  install,
  Comment,
  CommentCard,
  Avatar
}
