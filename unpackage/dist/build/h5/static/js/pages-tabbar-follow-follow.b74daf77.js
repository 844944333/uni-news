(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-follow-follow"],{"118d":function(t,e,i){var n=i("aea1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("34dafc45",n,!0,{sourceMap:!1,shadowMode:!1})},"2f28":function(t,e,i){var n=i("d2cc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("ae45e152",n,!0,{sourceMap:!1,shadowMode:!1})},"52e3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{author:{type:Object,default:function(){return{}}}},data:function(){return{}}};e.default=n},"55b1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{activeIndex:0,list:[],articleShow:!1,authorList:[]}},onLoad:function(){var t=this;uni.$on("update_article",(function(e){console.log(e),t.getFollow()})),this.getFollow(),this.getAuthor(),uni.$on("update_author",(function(){console.log("监听到了"),t.getAuthor()}))},methods:{getAuthor:function(){var t=this;this.$api.get_author().then((function(e){var i=e.data;t.authorList=i}))},change:function(t){var e=t.detail.current;this.activeIndex=e},tab:function(t){this.activeIndex=t},getFollow:function(){var t=this;this.$api.get_follow().then((function(e){var i=e.data;t.list=i,t.articleShow=0===t.list.length}))}}};e.default=n},"6b2a":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"list-author"},[i("v-uni-view",{staticClass:"list-author__img"},[i("v-uni-image",{attrs:{src:t.author.avatar,mode:""}})],1),i("v-uni-view",{staticClass:"list-author__content"},[i("v-uni-view",{staticClass:"content-title"},[t._v(t._s(t.author.author_name))]),i("v-uni-view",{staticClass:"content-des"},[i("v-uni-view",{staticClass:"content-des__label"},[t._v(t._s(t.author.professional))]),i("v-uni-view",{staticClass:"content-des__info"},[i("v-uni-text",[t._v("发帖 "+t._s(t.author.article_ids.length))]),i("v-uni-text",[t._v("粉丝 "+t._s(t.author.fans_count))])],1)],1)],1)],1)},a=[]},7300:function(t,e,i){"use strict";var n=i("118d"),o=i.n(n);o.a},7548:function(t,e,i){"use strict";i.r(e);var n=i("b703"),o=i("f759");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("8cce");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"130f2508",null,!1,n["a"],r);e["default"]=s.exports},"87e1":function(t,e,i){"use strict";i.r(e);var n=i("52e3"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"8cce":function(t,e,i){"use strict";var n=i("2f28"),o=i.n(n);o.a},aea1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list-author[data-v-6c6bab9f]{display:-webkit-box;display:-webkit-flex;display:flex;padding:10px 0;margin:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #f5f5f5}.list-author .list-author__img[data-v-6c6bab9f]{-webkit-flex-shrink:0;flex-shrink:0;width:40px;height:40px;overflow:hidden}.list-author .list-author__img uni-image[data-v-6c6bab9f]{width:100%;height:100%}.list-author .list-author__content[data-v-6c6bab9f]{width:100%;margin-left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.list-author .list-author__content .content-title[data-v-6c6bab9f]{position:relative;padding-right:30px;font-size:14px;color:#333;font-weight:700;line-height:1.2}.list-author .list-author__content .content-des[data-v-6c6bab9f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:12px}.list-author .list-author__content .content-des .content-des__label[data-v-6c6bab9f]{color:#666}.list-author .list-author__content .content-des .content-des__info[data-v-6c6bab9f]{color:#999;line-height:1.5}.list-author .list-author__content .content-des .content-des__info uni-text[data-v-6c6bab9f]:first-child{margin-right:10px}',""]),t.exports=e},b703:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniLoadMore:i("90b8").default,listCard:i("7e4d").default,listAuthor:i("e4fc").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"follow"},[i("v-uni-view",{staticClass:"follow-tab"},[i("v-uni-view",{staticClass:"follow-tab__box"},[i("v-uni-view",{staticClass:"follow-tab__item",class:{active:0===t.activeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(0)}}},[t._v("文章")]),i("v-uni-view",{staticClass:"follow-tab__item",class:{active:1===t.activeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(1)}}},[t._v("作者")])],1)],1),i("v-uni-view",{staticClass:"follow-list"},[i("v-uni-swiper",{staticClass:"follow-list__swiper",attrs:{current:t.activeIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[i("v-uni-swiper-item",[i("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},[i("v-uni-view",[0!==t.list.length||t.articleShow?t._e():i("uni-load-more",{attrs:{iconType:"snow",status:"loading"}}),t._l(t.list,(function(t){return i("list-card",{key:t._id,attrs:{types:"follow",item:t}})})),t.articleShow?i("v-uni-view",{staticClass:"no-data"},[t._v("当前没有数据")]):t._e()],2)],1)],1),i("v-uni-swiper-item",[i("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0}},[i("v-uni-view",t._l(t.authorList,(function(t){return i("list-author",{key:t.id,attrs:{author:t}})})),1)],1)],1)],1)],1)],1)},a=[]},d2cc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-130f2508]{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.follow[data-v-130f2508]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:50px}.follow .follow-tab[data-v-130f2508]{border-bottom:1px solid #f5f5f5;height:50px;padding:10px 20px}.follow .follow-tab .follow-tab__box[data-v-130f2508]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;border:1px solid #f07373;-webkit-border-radius:4px;border-radius:4px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.follow .follow-tab .follow-tab__box .follow-tab__item[data-v-130f2508]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px;color:#666}.follow .follow-tab .follow-tab__box .follow-tab__item[data-v-130f2508]:first-child{border-right:1px solid #f07373}.follow .follow-tab .follow-tab__box .follow-tab__item.active[data-v-130f2508]{color:red;font-weight:700}.follow .follow-list[data-v-130f2508]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.follow .follow-list .follow-list__swiper[data-v-130f2508]{height:100%}.follow .follow-list .follow-list__swiper .scroll[data-v-130f2508]{height:100%}.no-data[data-v-130f2508]{padding:50px;font-size:14px;color:#999;text-align:center}',""]),t.exports=e},e4fc:function(t,e,i){"use strict";i.r(e);var n=i("6b2a"),o=i("87e1");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("7300");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"6c6bab9f",null,!1,n["a"],r);e["default"]=s.exports},f759:function(t,e,i){"use strict";i.r(e);var n=i("55b1"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a}}]);