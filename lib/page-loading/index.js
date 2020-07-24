import PageLoading from "../../src/components/page-loading"

PageLoading.install = function (Vue) {
  Vue.component(PageLoading.name, PageLoading)
}

export default PageLoading
