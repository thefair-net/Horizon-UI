import VsComment  from './vs-comment'

const components = [
  VsComment
]

function install(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  VsComment,
}

export default {
  install,
  VsComment,
}
