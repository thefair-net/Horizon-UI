import FeedCard from "../../src/components/feed/feed-card"

FeedCard.install = function (Vue) {
  Vue.component(FeedCard.name, FeedCard)
}

export default FeedCard
