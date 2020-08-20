import Vue from 'vue'
import IndicatorVue from "../../src/components/indicator"

let instance
const IndicatorConstructor = Vue.extend(IndicatorVue)
const initInstance = (options) => {
  instance = new IndicatorConstructor({
    icon: 'icon-loading-dark',
    ...options,
  })
}

const Indicator = (options) => {
  const instanceHasBeenInit = !!instance
  const instanceStillExistOnDocument = !!document.querySelector('.indicator')
  if (instanceHasBeenInit && instanceStillExistOnDocument) {
    instance.show = true;
    for (let key in options) {
      instance[key] = options[key]
    }
  } else {
    initInstance(options)
    instance.$mount()
    document.getElementById('app').appendChild(instance.$el);
    Vue.nextTick(function () {
      instance.show = true;
    })
  }
}

Indicator.open = (options) => {
  Indicator(options)
}
Indicator.close = () => {
  instance.show = false;
}

export default Indicator
