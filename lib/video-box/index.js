import Vue from 'vue'
import VideoBoxVue from "../../src/components/video-box"

let instance
const VideoBoxConstructor = Vue.extend(VideoBoxVue)
const initInstance = (options) => {
  instance = new VideoBoxConstructor({
    ...options
  })
}

const VideoBox = (options, callback) => {
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
      instance.callback = callback;
    })
  }
}

VideoBox.open = (options, callback) => {
  VideoBox(options, callback)
}

export default VideoBox
