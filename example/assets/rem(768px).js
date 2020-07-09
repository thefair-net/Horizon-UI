(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      var rate = 1 // 1px = 1rem
      // var rate = 100 // 1px = 0.01rem
      var UIStandardPxWidth = 375 // 设计稿常规尺寸 px
      var mobilePhone = 375
      var iPad = 768
      if (!clientWidth) return;
      // if (clientWidth >= mobilePhone) {
      //   docEl.style.fontSize = '1px';
      if (clientWidth >= iPad) {
        docEl.style.fontSize = '2.048px';
      } else {
        docEl.style.fontSize = rate * (clientWidth / UIStandardPxWidth) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
