import Feed from "../../src/components/feed/feed"

Feed.install = function (Vue) {
  Vue.component(Feed.name, Feed)
}

export default Feed
