import Comment  from './comment'
import CommentCard from './comment-card'

const components = [
  Comment,
  CommentCard
]

function install(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  Comment,
  CommentCard
}

export default {
  install,
  Comment,
  CommentCard
}
