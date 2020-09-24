import Vue from 'vue'
import OpenInBrowserVue from "../../src/components/open-in-browser"

let instance
const OIBConstructor = Vue.extend(OpenInBrowserVue)
const initInstance = () => {
  instance = new OIBConstructor()
}

const OpenInBrowser = () => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.open-in-browser')
  if (instanceHasBeenInit && instanceStillExistOnDocument) {
    instance.show = true;
  } else {
    initInstance()
    instance.$mount()
    document.getElementById('app').appendChild(instance.$el);
    Vue.nextTick(function () {
      instance.show = true;
    })
  }
}

OpenInBrowser.open = () => {
  OpenInBrowser()
}

export default OpenInBrowser
