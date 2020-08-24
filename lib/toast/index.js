import Vue from 'vue'
import ToastVue from "../../src/components/toast"

const ToastConstructor = Vue.extend(ToastVue)
let instance;
const emptyOptions = {
  message: '',
  icon: '',
  duration: 2000,
}
const initInstance = (options) => {
  instance = new ToastConstructor({
    ...emptyOptions,
    ...options
  })
}

const Toast = (options) => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.toast')
  if (instanceHasBeenInit && instanceStillExistOnDocument) {
    instance.show = true;
    for (let key in emptyOptions) {
      instance[key] = options[key] || emptyOptions[key];
    }
    clearTimeout(instance.timer);
  } else {
    initInstance(options)
    instance.$mount()
    document.getElementById('app').appendChild(instance.$el);
    Vue.nextTick(function () {
      instance.show = true;
    })
  }
  instance.timer = setTimeout(() => {
      instance.show = false;
  }, instance.duration)
}

export default Toast


