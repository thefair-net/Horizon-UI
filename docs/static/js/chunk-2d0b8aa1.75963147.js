(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8aa1"],{"303a":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page"},e._l(e.feed,(function(n,o){return t("vs-feed-card",{key:o,attrs:{index:o,detail:n,avatar:n.feed_content.user.avatar,nickname:n.feed_content.user.nick,"like-count":n.feed_content.count_summary.favorite.count,message:n.feed_content.content,"image-url":n.feed_content.image_list[0]&&n.feed_content.image_list[0].url,"image-url-thumb":n.feed_content.image_list[0]&&n.feed_content.image_list[0].url_thumbnail,"create-time":n.feed_time.txt,like:n.feed_content.be_favorite?"liked":"unliked","first-two-comments":n.feed_content.comment_info.item_list,"comments-count":n.feed_content.count_summary.comment.count,"reply-to":{}},on:{reply:e.showReplyOthersBox,like:e.likeEvent,operation:e.showMoreOperation,avatar:e.handleAvatarClick,"view-all-replies":e.viewAllReplies}})})),1)},i=[],a=t("9b0a"),l=t("a6f4"),c=t("5040"),u={name:"feed-card.vue",components:{"vs-feed-card":a["e"]},setup:function(e,n){var t=Object(l["d"])(!0),o=Object(l["d"])(!1),i=Object(l["d"])(!1),u=Object(l["d"])(""),s=Object(a["n"])({methods:{onClose:function(){t.value=!0},onConfirm:function(e){t.value=!0,console.log("confirm",e),this.close()}}}),r=function(e){var n=e.message,o=e.nickname;console.log(n,o);var i=Object(a["n"])({title:o,subtitle:n,methods:{onClose:function(){t.value=!0,this.unmount()},onConfirm:function(e){console.log("confirm",e),t.value=!0,this.unmount()}}});i.open(),t.value=!1},f=function(){m()},m=function(){t.value=!1,s.open()};Object(l["b"])((function(){a["n"].unmountAll()}));var d=function(e){console.log("like")},v=function(e){o.value=!0},p=function(e){console.log(u,e)},_=function(){o.value=!1,i.value=!0},h=function(){alert("去热评区")},k=function(e){},w=function(){};return{isShowBar:t,feed:c["c"],showReplyOthersBox:r,showMyReplyBox:m,likeEvent:d,showMoreOperation:v,moreOperation:o,showReasons:i,complain:p,showComplain:_,handleBarClick:f,handleTitleClick:h,handleAvatarClick:k,viewAllReplies:w}}},s=u,r=t("2877"),f=Object(r["a"])(s,o,i,!1,null,"67a1a3ee",null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b8aa1.75963147.js.map