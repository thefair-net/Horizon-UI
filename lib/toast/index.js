import Vue from 'vue'
import ToastVue from "../../src/components/toast"

const ToastConstructor = Vue.extend(ToastVue)
const ToastList = [];
const initInstance = (options) => {
  const instance = new ToastConstructor({
    ...options,
  })

  instance.$mount()
  document.getElementById('app').appendChild(instance.$el);
  ToastList.push(instance)
  return instance
}

const Toast = (options) => {
  const instance = initInstance(options)
  Vue.nextTick(function() {
    instance.show= true;
  })
  setTimeout(() => {
    const index = ToastList.indexOf(instance)
    if (index != -1) {
      instance.show= false;
      instance.$el.addEventListener('transitionend', ()=>{instance.destroyVM()});
      ToastList.splice(index, 1)
    }
  }, instance.duration)
}
Toast.destroyAll = () => {
  if (ToastList.length > 0) {
    ToastList.forEach(instance => {
      instance.show= false;
      instance.$el.addEventListener('transitionend', ()=>{instance.destroyVM()});
    })
    ToastList.splice(0, ToastList.length);
  }
}
Toast.destroyOne = () => {
  if (ToastList.length > 0) {
    const instance = ToastList.pop();
    instance.show= false;
    instance.$el.addEventListener('transitionend', ()=>{instance.destroyVM()});
  }
}

export default Toast
