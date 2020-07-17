import Vue from 'vue'
import ReplyBoxVue from "../../src/components/reply-box"

let instance
const ReplyBoxConstructor = Vue.extend(ReplyBoxVue)
const initInstance = (options) => {
  instance = new ReplyBoxConstructor(options)
}

const ReplyBox = (options) => {
  initInstance(options)
  instance.$mount()
  document.getElementById('app').appendChild(instance.$el);
}
ReplyBox.mount = (options = {onClose: () => {}}) => {
  ReplyBox(options)
}
ReplyBox.open = (cb) => {
  instance.showReplyBox()
  instance.focusReplyArea()
  cb && cb('ReplyBox open success')
}
ReplyBox.close = (cb) => {
  instance.hideReplyBox()
  cb && cb('ReplyBox close success')
}

ReplyBox.unmount = (cb) => {
  instance.destroyVM()
  cb && cb('ReplyBox unmount success')
}

export default ReplyBox
