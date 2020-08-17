import Vue from 'vue'
import ToastVue from "../../src/components/toast"

const ToastConstructor = Vue.extend(ToastVue)
let instance
const initInstance = (options) => {
  instance = new ToastConstructor({
    ...options,
  })
}

const Toast = (options) => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.toast')
  if (instanceHasBeenInit && instanceStillExistOnDocument) {
    instance.show = true;
    for (let key in options) {
      instance[key] = options[key]
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
      instance.$el.addEventListener('transitionend', () => {
        instance.destroyVM()
      });
  }, options.duration || 2000)
}

export default Toast


