(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5677b04f"],{"30a9":function(e,o,n){"use strict";var t=n("f5c5"),a=n.n(t);a.a},ac37:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"page"},[e._l(e.comments,(function(o,t){return n("vs-comment-card",{key:t,attrs:{"dark-mode":!0,index:t,detail:o,avatar:o.data.user.avatar,nickname:o.data.user.nickname,"like-count":o.data.likeCount,message:o.data.message,"image-url":o.data.imageUrl,"create-time":o.data.createTime,"parent-reply":o.data.parentReply,like:o.data.liked},on:{reply:e.showReplyOthersBox,like:e.likeEvent,operation:e.showMoreOperation,avatar:e.handleAvatarClick}})})),e.isShowBar?n("vs-reply-bar",{on:{click:e.handleBarClick}}):e._e(),n("vs-popup",{staticClass:"more-operation",attrs:{position:"bottom",overlay:!0,showCancel:!0,title:"更多操作"},model:{value:e.moreOperation,callback:function(o){e.moreOperation=o},expression:"moreOperation"}},[n("div",{staticClass:"pop-item",on:{click:e.showComplain}},[e._v(" 举报该条评论 ")])]),n("vs-popup",{staticClass:"reasons",attrs:{position:"bottom",overlay:!0,showCancel:!0,title:"显示举报原因"},model:{value:e.showReasons,callback:function(o){e.showReasons=o},expression:"showReasons"}},e._l(e.COMPLAIN_REASONS,(function(o,t){return n("div",{staticClass:"pop-item",on:{click:function(o){return e.complain(t)}}},[e._v(" "+e._s(o)+" ")])})),0)],2)},a=[],i=n("a6f4"),s=n("5040"),l=n("9b0a"),c=["反动、色情、政治敏感内容","不友善、不文明语言","广告、刷屏等垃圾信息","与主题无关的恶意言论"],r={components:{"vs-comment":l["b"],"vs-comment-card":l["c"],"vs-reply-bar":l["m"],"vs-popup":l["l"]},setup:function(e,o){var n=Object(i["d"])(!0),t=Object(i["d"])(!1),a=Object(i["d"])(!1),r=Object(i["d"])(""),u=Object(l["n"])({methods:{onClose:function(){n.value=!0},onConfirm:function(e){n.value=!0,console.log("confirm",e),this.close()}}}),p=function(e){var o=e.message,t=e.nickname;console.log(o,t);var a=Object(l["n"])({title:t,subtitle:o,methods:{onClose:function(){n.value=!0,this.unmount()},onConfirm:function(e){console.log("confirm",e),n.value=!0,this.unmount()}}});a.open(),n.value=!1},m=function(){v()},v=function(){n.value=!1,u.open()};Object(i["b"])((function(){l["n"].unmountAll()}));var d=function(e){console.log("like")},f=function(e){t.value=!0},h=function(e){console.log(r,e)},k=function(){t.value=!1,a.value=!0},b=function(){alert("去热评区")},w=function(e){};return{isShowBar:n,comments:s["a"],showReplyOthersBox:p,showMyReplyBox:v,likeEvent:d,showMoreOperation:f,moreOperation:t,showReasons:a,complain:h,COMPLAIN_REASONS:c,showComplain:k,handleBarClick:m,handleTitleClick:b,handleAvatarClick:w}}},u=r,p=(n("30a9"),n("2877")),m=Object(p["a"])(u,t,a,!1,null,"2776e9da",null);o["default"]=m.exports},f5c5:function(e,o,n){}}]);
//# sourceMappingURL=chunk-5677b04f.72383507.js.map