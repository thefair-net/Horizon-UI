import Comment from './comment'
import CommentCard from './comment-card'
import Avatar from './avatar'
import ImageViewer from './image-viewer'
import Icon from './icon'
import ReplyBar from './reply-bar'
import ReplyBox  from './reply-box'
import InfinityScroll  from './infinity-scroll'
import PageBanner from './page-banner'
import PageDescription from "./page-description";
import Toast from "./toast";
import Popup from "./popup";

const components = [
  Comment,
  CommentCard,
  Avatar,
  ImageViewer,
  Icon,
  ReplyBar,
  ReplyBox,
  InfinityScroll,
  PageBanner,
  PageDescription,
  Toast,
  Popup
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
  Icon,
  ReplyBar,
  ReplyBox,
  InfinityScroll,
  PageBanner,
  PageDescription,
  Toast,
  Popup
}

export default {
  install,
  Comment,
  CommentCard,
  Avatar,
  ImageViewer,
  Icon,
  ReplyBar,
  ReplyBox,
  InfinityScroll,
  PageBanner,
  PageDescription,
  Toast,
  Popup
}
