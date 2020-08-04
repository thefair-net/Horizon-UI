import NoteCard from "../../src/components/note/note-card"

NoteCard.install = function (Vue) {
  Vue.component(NoteCard.name, NoteCard)
}

export default NoteCard
