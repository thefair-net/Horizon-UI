import Vue from 'vue'
import Loading from './loading'

const LoadingConstructor = Vue.extend(Loading)

const loadingDirective = {}
loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      insertDom(document.getElementById('app'), el, binding)
    } else {
      el.loadingInstance.visible = false
    }
  }
  const insertDom = (parent, el, binding) => {
    el.loadingInstance.visible = true
    parent.appendChild(el.loadingInstance.$el) // appendChild 添加的元素若为同一个，则不会重复添加
  }
  const deleteDom = (parent, el, binding) => {
    if (el.loadingInstance) {
      el.loadingInstance.visible = false
      el.loadingInstance.$destroy()
    }
    parent.removeChild(el.loadingInstance.$el)
  }

  Vue.directive('loading', {
    bind: function (el, binding) {
      const instance = new LoadingConstructor()
      instance.$mount()
      el.loadingInstance = instance
      binding.value && toggleLoading(el, binding)
    },
    update: function (el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }
    },
    unbind: function (el, binding) {
      deleteDom(document.getElementById('app'), el, binding)
    }
  })
}
export default loadingDirective;
