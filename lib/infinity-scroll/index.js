import InfinityScroll from "../../src/components/infinity-scroll/infinity-scroll"
import {
  LOADING_STATUS_INITIAL,
  LOADING_STATUS_DONE,
  LOADING_STATUS_LOADING
} from '../../src/components/infinity-scroll/config'

InfinityScroll.install = function (Vue) {
  Vue.component(InfinityScroll.name, InfinityScroll)
}

InfinityScroll.loadingStatus = {
  LOADING_STATUS_INITIAL,
  LOADING_STATUS_DONE,
  LOADING_STATUS_LOADING
}

export default InfinityScroll
