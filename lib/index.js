import Comment  from './comment'
import CommentCard from './comment-card'
import Avatar from './avatar'
import ImageViewer from './image-viewer'
import Icon from './icon'

const components = [
  Comment,
  CommentCard,
  Avatar,
  ImageViewer,
  Icon
]

function install(Vue) {
  components.map(component => {
    // 过滤指令型组件
    component.constructor !== Function && Vue.component(component.name, component)
  })
}

export {
  install,
  Comment,
  CommentCard,
  Avatar,
  ImageViewer,
  Icon
}

export default {
  install,
  Comment,
  CommentCard,
  Avatar,
  ImageViewer,
  Icon
}
