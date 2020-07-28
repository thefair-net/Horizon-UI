import Vue from 'vue'
import Loading from './loading'

const Mask = Vue.extend(Loading)

const loadingDirective = {}
loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      insertDom(document.getElementById('app'), el, binding)
    } else {
      el.instance.visible = false
    }
  }
  const insertDom = (parent, el, binding) => {
    el.instance.visible = true
    parent.appendChild(el.mask) // appendChild 添加的元素若为同一个，则不会重复添加
  }

  Vue.directive('loading', {
    bind: function (el, binding) {
      const mask = new Mask()
      mask.$mount()
      el.instance = mask
      el.mask = mask.$el
      binding.value && toggleLoading(el, binding)
    },
    update: function (el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }
    },
    unbind: function (el, binding) {
      el.instance && el.instance.$destroy()
    }
  })
}
export default loadingDirective;
