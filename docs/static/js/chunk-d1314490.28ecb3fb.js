(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1314490"],{3862:function(e,n,t){"use strict";var o=t("7f99"),i=t.n(o);i.a},6038:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page"},[t("vs-feed",{attrs:{title:"热门评论","icon-show":!0,"dark-mode":!0},on:{handleTitleClick:e.handleTitleClick},scopedSlots:e._u([{key:"feed-card",fn:function(){return e._l(e.feeds,(function(n,o){return t("vs-feed-card",{key:o,attrs:{index:o,detail:n,avatar:n.feed_content.user.avatar,nickname:n.feed_content.user.nick,"like-count":n.feed_content.count_summary.favorite.count,message:n.feed_content.content,"image-url":n.feed_content.image_list[0]&&n.feed_content.image_list[0].url,"image-url-thumb":n.feed_content.image_list[0]&&n.feed_content.image_list[0].url_thumbnail,"create-time":n.feed_time.txt,like:n.feed_content.be_favorite?"liked":"unliked","first-two-comments":n.feed_content.comment_info.item_list,"comments-count":n.feed_content.count_summary.comment.count,"reply-to":n.feed_content.at_user},on:{reply:e.showReplyBox,like:e.likeEvent,operation:e.showMoreOperation,avatar:e.handleAvatarClick,"view-all-replies":e.viewAllReplies}})}))},proxy:!0}])}),e.isShowBar?t("vs-reply-bar",{on:{click:e.handleBarClick}}):e._e(),t("vs-popup",{staticClass:"more-operation",attrs:{position:"bottom",overlay:!0,showCancel:!0,title:"更多操作"},model:{value:e.moreOperation,callback:function(n){e.moreOperation=n},expression:"moreOperation"}},[t("div",{staticClass:"pop-item",on:{click:e.showComplain}},[e._v(" 举报该条评论 ")])]),t("vs-popup",{staticClass:"reasons",attrs:{position:"bottom",overlay:!0,showCancel:!0,title:"显示举报原因"},model:{value:e.showReasons,callback:function(n){e.showReasons=n},expression:"showReasons"}},e._l(e.COMPLAIN_REASONS,(function(n,o){return t("div",{staticClass:"pop-item",on:{click:function(n){return e.complain(o)}}},[e._v(" "+e._s(n)+" ")])})),0)],1)},i=[],a=t("a6f4"),s=t("5040"),l=t("9b0a"),c=["反动、色情、政治敏感内容","不友善、不文明语言","广告、刷屏等垃圾信息","与主题无关的恶意言论"],r={components:{"vs-feed":l["d"],"vs-feed-card":l["e"],"vs-reply-bar":l["m"],"vs-popup":l["l"]},setup:function(e,n){var t=Object(a["d"])(!0),o=Object(a["d"])(!1),i=Object(a["d"])(!1),r=Object(a["d"])(""),u=function(e){var n=e.message,o=void 0===n?"":n,i=e.nickname,a=void 0===i?"":i,s=Object(l["n"])({title:a,subtitle:o,methods:{onClose:function(){t.value=!0,this.unmount()},onConfirm:function(e){console.log("confirm",e),t.value=!0,this.unmount()}}});s.open(),t.value=!1},d=function(){u({message:"",nickname:""})};Object(a["b"])((function(){l["n"].unmountAll()}));var f=function(e){console.log("like")},m=function(e){o.value=!0},p=function(e){console.log(r,e)},v=function(){o.value=!1,i.value=!0},_=function(){Object(l["p"])({message:"去热评区"})},h=function(e){},k=function(e){console.log(e)};return{isShowBar:t,feeds:s["d"],showReplyBox:u,likeEvent:f,showMoreOperation:m,moreOperation:o,showReasons:i,complain:p,COMPLAIN_REASONS:c,showComplain:v,handleBarClick:d,handleTitleClick:_,handleAvatarClick:h,viewAllReplies:k}}},u=r,d=(t("3862"),t("2877")),f=Object(d["a"])(u,o,i,!1,null,"3d8de4f8",null);n["default"]=f.exports},"7f99":function(e,n,t){}}]);
//# sourceMappingURL=chunk-d1314490.28ecb3fb.js.map