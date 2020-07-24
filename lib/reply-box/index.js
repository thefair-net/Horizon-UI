import Vue from 'vue'
import ReplyBoxVue from "../../src/components/reply-box"

let ReplyBoxList = [];
const ReplyBoxConstructor = Vue.extend(ReplyBoxVue)
console.log(ReplyBoxConstructor)

ReplyBoxConstructor.prototype.open = function(cb){
  this.showReplyBox();
  this.focusReplyArea();
  cb && cb('ReplyBox open success')
}

ReplyBoxConstructor.prototype.close = function(cb){
  this.hideReplyBox();
  cb && cb('ReplyBox close success')
}
ReplyBoxConstructor.prototype.clear = function(cb){
  this.clearReplyBox();
  cb && cb('ReplyBox close success')
}
ReplyBoxConstructor.prototype.unmount = function(cb){
  const index = ReplyBoxList.indexOf(this)
  if (index != -1) {
    this.destroyVM();
    ReplyBoxList.splice(index, 1)
  }
  cb && cb('ReplyBox unmount success');
}

const initInstance = (options) => {
  const instance = new ReplyBoxConstructor(options)
  return instance;
}

const ReplyBox = (options) => {
  const instance = initInstance(options)
  instance.$mount()
  document.getElementById('app').appendChild(instance.$el);
  ReplyBoxList.push(instance)
  return instance;
}

ReplyBox.mount = (options = {onClose: () => {}}) => {
  return ReplyBox(options)
}

ReplyBox.unmountAll = ()=> {
  if (ReplyBoxList.length > 0) {
    ReplyBoxList.forEach(instance => {
      instance.destroyVM();
    })
    ReplyBoxList.splice(0, ReplyBoxList.length);
  }
}



export default ReplyBox
