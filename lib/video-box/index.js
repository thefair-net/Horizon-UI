import Vue from 'vue'
import VideoBoxVue from "../../src/components/video-box"

let instance
const VideoBoxConstructor = Vue.extend(VideoBoxVue)
const initInstance = (options) => {
  instance = new VideoBoxConstructor({
    ...options
  })
}

const VideoBox = (options) => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.video-box')
  if (instanceHasBeenInit && instanceStillExistOnDocument) {
    instance.show = true;
  } else {
    initInstance(options)
    instance.$mount()
    document.getElementById('app').appendChild(instance.$el);
    Vue.nextTick(function () {
      instance.show = true;
    })
  }
}

VideoBox.open = (options) => {
  VideoBox(options)
}

export default VideoBox
