(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1254ba10"],{2722:function(e,n,o){"use strict";var t=o("6e6c"),i=o.n(t);i.a},"6e6c":function(e,n,o){},"9ffa":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"page"},[o("vs-note",{attrs:{title:"热门评论","icon-show":!0},on:{handleTitleClick:e.handleTitleClick},scopedSlots:e._u([{key:"note-card",fn:function(){return e._l(e.notes,(function(n,t){return o("vs-note-card",{key:t,attrs:{index:t,detail:n,avatar:n.feed_content.user.avatar,nickname:n.feed_content.user.nick,"like-count":n.feed_content.count_summary.favorite.count,message:n.feed_content.content,"image-url":n.feed_content.image_list[0]&&n.feed_content.image_list[0].url,"image-url-thumb":n.feed_content.image_list[0]&&n.feed_content.image_list[0].url_thumbnail,"create-time":n.feed_time.txt,like:n.feed_content.be_favorite?"liked":"unliked","first-two-comments":n.feed_content.comment_info.item_list,"comments-count":n.feed_content.count_summary.comment.count},on:{reply:e.showReplyOthersBox,like:e.likeEvent,operation:e.showMoreOperation,avatar:e.handleAvatarClick,"view-all-replies":e.viewAllReplies}})}))},proxy:!0}])}),e.isShowBar?o("vs-reply-bar",{on:{click:e.handleBarClick}}):e._e(),o("vs-popup",{staticClass:"more-operation",attrs:{position:"bottom",overlay:!0,showCancel:!0,title:"更多操作"},model:{value:e.moreOperation,callback:function(n){e.moreOperation=n},expression:"moreOperation"}},[o("div",{staticClass:"pop-item",on:{click:e.showComplain}},[e._v(" 举报该条评论 ")])]),o("vs-popup",{staticClass:"reasons",attrs:{position:"bottom",overlay:!0,showCancel:!0,title:"显示举报原因"},model:{value:e.showReasons,callback:function(n){e.showReasons=n},expression:"showReasons"}},e._l(e.COMPLAIN_REASONS,(function(n,t){return o("div",{staticClass:"pop-item",on:{click:function(n){return e.complain(t)}}},[e._v(" "+e._s(n)+" ")])})),0)],1)},i=[],l=o("a6f4"),a=o("5040"),s=o("9b0a"),c=["反动、色情、政治敏感内容","不友善、不文明语言","广告、刷屏等垃圾信息","与主题无关的恶意言论"],r={components:{"vs-note":s["h"],"vs-note-card":s["i"],"vs-reply-bar":s["m"],"vs-popup":s["l"]},setup:function(e,n){console.log(a["d"]);var o=Object(l["d"])(!0),t=Object(l["d"])(!1),i=Object(l["d"])(!1),r=Object(l["d"])(""),u=Object(s["n"])({methods:{onClose:function(){o.value=!0},onConfirm:function(e){o.value=!0,console.log("confirm",e),this.close()}}}),f=function(e){var n=e.message,t=e.nickname;console.log(n,t);var i=Object(s["n"])({title:t,subtitle:n,methods:{onClose:function(){o.value=!0,this.unmount()},onConfirm:function(e){console.log("confirm",e),o.value=!0,this.unmount()}}});i.open(),o.value=!1},m=function(){p()},p=function(){o.value=!1,u.open()};Object(l["b"])((function(){s["n"].unmountAll()}));var v=function(e){console.log("like")},d=function(e){t.value=!0},h=function(e){console.log(r,e)},_=function(){t.value=!1,i.value=!0},k=function(){alert("去热评区")},w=function(e){},b=function(e){console.log(e)};return{isShowBar:o,notes:a["d"],showReplyOthersBox:f,showMyReplyBox:p,likeEvent:v,showMoreOperation:d,moreOperation:t,showReasons:i,complain:h,COMPLAIN_REASONS:c,showComplain:_,handleBarClick:m,handleTitleClick:k,handleAvatarClick:w,viewAllReplies:b}}},u=r,f=(o("2722"),o("2877")),m=Object(f["a"])(u,t,i,!1,null,"cffd508a",null);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1254ba10.a98e63a7.js.map