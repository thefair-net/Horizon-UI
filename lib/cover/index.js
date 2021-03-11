import Vue from 'vue'
import CoverVue from "../../src/components/cover"

let instance
const CoverConstructor = Vue.extend(CoverVue)
const emptyOptions = {
  message: '加载中...',
  maskClosable: false
}
const initInstance = (options) => {
  instance = new CoverConstructor({
    ...emptyOptions,
    ...options
  })
}

const Cover = (options) => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.cover')
  if (instanceHasBeenInit && instanceStillExistOnDocument) {
    instance.show = true;
    for (let key in emptyOptions) {
      instance[key] = options[key] || emptyOptions[key];
    }
  } else {
    initInstance(options)
    instance.$mount()
    document.getElementById('app').appendChild(instance.$el);
    Vue.nextTick(function () {
      instance.show = true;
    })
  }
}

Cover.open = (options) => {
  Cover(options)
}
Cover.close = () => {
  instance.show = false;
}

export default Cover
