import Vue from 'vue'
import ImageViewerVue from "../../src/components/image-viewer"

let instance
const ImageViewerConstructor = Vue.extend(ImageViewerVue)
const initInstance = (options) => {
  instance = new ImageViewerConstructor({
    /** 等效于在ImageViewer中调用instance.$mount() **/
    // el: document.createElement('div'),
    ...options
  })
}


const ImageViewer = (options) => {
  if (!options.imgSrc) {
    console.error('[ImageViewer]缺少图片src: imgSrc，请检查')
    return
  }
  // TODO 通过imgClientX Y 完善图片消失的动画
  // imgWidth: e.target.width,
  // imgHeight: e.target.height,
  // imgClientX: e.clientX - e.offsetX,
  // imgClientY: e.clientY - e.offsetY,
  initInstance(options)
  instance.$mount()
  document.getElementById('app').appendChild(instance.$el);
}
ImageViewer.open = (options) => {
  ImageViewer(options)
}

ImageViewer.close = () => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.image-viewer')
  instanceHasBeenInit && instanceStillExistOnDocument && instance.destroyVM()
}

export default ImageViewer
