(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"2d40":function(t,n,e){"use strict";(function(t){e("17aa");a(e("66fd"));var n=a(e("798f"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("a821")["createPage"])},"34db":function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=c(e("a34a"));function c(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,a,u,c,i){try{var o=t[c](i),r=o.value}catch(s){return void e(s)}o.done?n(r):Promise.resolve(r).then(a,u)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(a,u){var c=t.apply(n,e);function o(t){i(c,a,u,o,r,"next",t)}function r(t){i(c,a,u,o,r,"throw",t)}o(void 0)}))}}var r={data:function(){return{imgList:[],content:""}},methods:{delImg:function(t){this.imgList.splice(t,1)},addImg:function(){var n=this,e=6-this.imgList.length;t.chooseImage({count:e,success:function(t){var a=t.tempFilePaths;a.forEach((function(t,a){a<e&&n.imgList.push({url:t})}))}})},submit:function(){var n=this;return o(u.default.mark((function e(){var a,c,i;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=[],t.showLoading(),c=0;case 3:if(!(c<n.imgList.length)){e.next=13;break}return i=n.imgList[c].url,e.next=7,n.uploadFiles(i);case 7:i=e.sent,a.push(i),console.log(i);case 10:c++,e.next=3;break;case 13:n.updateFeedback({content:n.content,feedbackImages:a});case 14:case"end":return e.stop()}}),e)})))()},uploadFiles:function(t){return o(u.default.mark((function n(){var e;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.uploadFile({filePath:t,cloudPath:t});case 2:return e=n.sent,console.log(e),n.abrupt("return",e.fileID);case 5:case"end":return n.stop()}}),n)})))()},updateFeedback:function(n){var e=n.content,a=n.feedbackImages;this.$api.update_feedback({content:e,feedbackImages:a}).then((function(n){t.hideLoading(),t.showToast({title:"意见反馈成功"}),setTimeout((function(){t.switchTab({url:"../tabbar/my/my"})}),2e3)})).catch((function(){t.hideLoading(),t.showToast({title:"意见反馈成功",icon:"none"})}))}}};n.default=r}).call(this,e("a821")["default"],e("a9ff")["default"])},"798f":function(t,n,e){"use strict";e.r(n);var a=e("92f4"),u=e("f845");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("d7a8");var i,o=e("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=r.exports},"92f4":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"b0fe"))}},u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},cc60:function(t,n,e){},d7a8:function(t,n,e){"use strict";var a=e("cc60"),u=e.n(a);u.a},f845:function(t,n,e){"use strict";e.r(n);var a=e("34db"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a}},[["2d40","common/runtime","common/vendor"]]]);