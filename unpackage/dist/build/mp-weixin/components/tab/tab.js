(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tab/tab"],{"3a65":function(t,n,e){"use strict";var u=e("71b0"),a=e.n(u);a.a},"71b0":function(t,n,e){},"744d":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return u}));var u={uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"147c"))}},a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},a531:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{list:{type:Array,default:function(){return{}}},tabIndex:{type:Number,default:0}},watch:{tabIndex:function(t){this.activeIndex=t}},data:function(){return{activeIndex:0}},methods:{clickTab:function(t){this.activeIndex=t,this.$emit("tab",t)},open:function(){t.navigateTo({url:"/pages/home-label/home-label"})}}};n.default=e}).call(this,e("543d")["default"])},e8fc:function(t,n,e){"use strict";e.r(n);var u=e("744d"),a=e("f736");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("3a65");var i,o=e("f0c5"),r=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=r.exports},f736:function(t,n,e){"use strict";e.r(n);var u=e("a531"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tab/tab-create-component',
    {
        'components/tab/tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e8fc"))
        })
    },
    [['components/tab/tab-create-component']]
]);
