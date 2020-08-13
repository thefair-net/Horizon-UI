import Vue from 'vue'
import ShareHeaderVue from "../../src/components/share-header"

let instance
const ShareHeaderConstructor = Vue.extend(ShareHeaderVue)
const initInstance = (options) => {
  instance = new ShareHeaderConstructor({
    ...options
  })
}


const ShareHeader = (options) => {
  initInstance(options)
  instance.$mount()
  document.getElementById('app').appendChild(instance.$el);
}
ShareHeader.open = (options) => {
  ShareHeader(options)
}

ShareHeader.close = () => {
  instance.destroyVM()
}

export default ShareHeader
