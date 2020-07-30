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
import Loading from "./loading";
import Modal from "./modal";
import ShareHeader from "./share-header";

const components = [
  Comment,
  CommentCard,
  Avatar,
  Icon,
  ReplyBar,
  InfinityScroll,
  PageBanner,
  PageDescription,
  Popup,
  Modal
]

function install(Vue) {
  Vue.use(Loading.directive)

  components.map(component => {
    Vue.component(component.name, component)
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
  Loading,
  Popup,
  ShareHeader,
  Modal
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
  Loading,
  Popup,
  ShareHeader,
  Modal
}
