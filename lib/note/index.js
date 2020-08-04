import Note from "../../src/components/note/note"

Note.install = function (Vue) {
  Vue.component(Note.name, Note)
}

export default Note
