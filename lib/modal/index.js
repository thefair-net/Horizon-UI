import Modal from "../../src/components/modal"

Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export default Modal
