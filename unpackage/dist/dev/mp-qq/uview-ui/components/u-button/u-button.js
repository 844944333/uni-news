(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-button/u-button"],{

/***/ 184:
/*!****************************************************************************!*\
  !*** D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-button.vue?vue&type=template&id=6e15e680&scoped=true& */ 185);
/* harmony import */ var _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-button.vue?vue&type=script&lang=js& */ 187);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-button.vue?vue&type=style&index=0&id=6e15e680&scoped=true&lang=scss& */ 189);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e15e680",
  null,
  false,
  _u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-button/u-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/*!***********************************************************************************************************************!*\
  !*** D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue?vue&type=template&id=6e15e680&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-button.vue?vue&type=template&id=6e15e680&scoped=true& */ 186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_6e15e680_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 186:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue?vue&type=template&id=6e15e680&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([
    _vm.customStyle,
    {
      overflow: _vm.ripple ? "hidden" : "visible"
    }
  ])

  var m0 = Number(_vm.hoverStartTime)
  var m1 = Number(_vm.hoverStayTime)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        m0: m0,
        m1: m1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 187:
/*!*****************************************************************************************************!*\
  !*** D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-button.vue?vue&type=script&lang=js& */ 188);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * button 按钮
 * @description Button 按钮
 * @tutorial https://www.uviewui.com/components/button.html
 * @property {String} size 按钮的大小
 * @property {Boolean} ripple 是否开启点击水波纹效果
 * @property {String} ripple-bg-color 水波纹的背景色，ripple为true时有效
 * @property {String} type 按钮的样式类型
 * @property {Boolean} plain 按钮是否镂空，背景色透明
 * @property {Boolean} disabled 是否禁用
 * @property {Boolean} hair-line 是否显示按钮的细边框(默认true)
 * @property {Boolean} shape 按钮外观形状，见文档说明
 * @property {Boolean} loading 按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈)
 * @property {String} form-type 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
 * @property {String} open-type 开放能力
 * @property {String} data-name 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
 * @property {String} hover-class 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果(App-nvue 平台暂不支持)
 * @property {Number} hover-start-time 按住后多久出现点击态，单位毫秒
 * @property {Number} hover-stay-time 手指松开后点击态保留时间，单位毫秒
 * @property {Object} custom-style 对按钮的自定义样式，对象形式，见文档说明
 * @event {Function} click 按钮点击
 * @event {Function} getphonenumber open-type="getPhoneNumber"时有效
 * @event {Function} getuserinfo 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
 * @event {Function} error 当使用开放能力时，发生错误的回调
 * @event {Function} opensetting 在打开授权设置页并关闭后回调
 * @event {Function} launchapp 打开 APP 成功的回调
 * @example <u-button>月落</u-button>
 */var _default2 =
{
  name: 'u-button',
  props: {
    // 是否细边框
    hairLine: {
      type: Boolean,
      default: true },

    // 按钮的预置样式，default，primary，error，warning，success
    type: {
      type: String,
      default: 'default' },

    // 按钮尺寸，default，medium，mini
    size: {
      type: String,
      default: 'default' },

    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: 'square' },

    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: false },

    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: false },

    // 是否加载中
    loading: {
      type: Boolean,
      default: false },

    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: '' },

    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: '' },

    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: '' },

    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: false },

    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: 'en' },

    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: '' },

    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: '' },

    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: '' },

    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: '' },

    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: false },

    // 手指按（触摸）按钮时按钮时的背景颜色
    hoverBgColor: {
      type: String,
      default: '' },

    // 水波纹的背景颜色
    rippleBgColor: {
      type: String,
      default: '' },

    // 是否开启水波纹效果
    ripple: {
      type: Boolean,
      default: false },

    // 按下的类名
    hoverClass: {
      type: String,
      default: '' },

    // 自定义样式，对象形式
    customStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: '' },

    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: 1000 },

    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: 20 },

    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: 150 } },


  computed: {
    // 当没有传bgColor变量时，按钮按下去的颜色类名
    getHoverClass: function getHoverClass() {
      // 如果开启水波纹效果，则不启用hover-class效果
      if (this.loading || this.disabled || this.ripple || this.hoverClass) return '';
      var hoverClass = '';
      hoverClass = this.plain ? 'u-' + this.type + '-plain-hover' : 'u-' + this.type + '-hover';
      return hoverClass;
    },
    // 在'primary', 'success', 'error', 'warning'类型下，不显示边框，否则会造成四角有毛刺现象
    showHairLineBorder: function showHairLineBorder() {
      if (['primary', 'success', 'error', 'warning'].indexOf(this.type) >= 0 && !this.plain) {
        return '';
      } else {
        return 'u-hairline-border';
      }
    } },

  data: function data() {
    return {
      rippleTop: 0, // 水波纹的起点Y坐标到按钮上边界的距离
      rippleLeft: 0, // 水波纹起点X坐标到按钮左边界的距离
      fields: {}, // 波纹按钮节点信息
      waveActive: false // 激活水波纹
    };
  },
  methods: {
    // 按钮点击
    click: function click(e) {var _this = this;
      // 进行节流控制，每this.throttle毫秒内，只在开始处执行
      this.$u.throttle(function () {
        // 如果按钮时disabled和loading状态，不触发水波纹效果
        if (_this.loading === true || _this.disabled === true) return;
        // 是否开启水波纹效果
        if (_this.ripple) {
          // 每次点击时，移除上一次的类，再次添加，才能触发动画效果
          _this.waveActive = false;
          _this.$nextTick(function () {
            this.getWaveQuery(e);
          });
        }
        _this.$emit('click', e);
      }, this.throttleTime);
    },
    // 查询按钮的节点信息
    getWaveQuery: function getWaveQuery(e) {var _this2 = this;
      this.getElQuery().then(function (res) {
        // 查询返回的是一个数组节点
        var data = res[0];
        // 查询不到节点信息，不操作
        if (!data.width || !data.width) return;
        // 水波纹的最终形态是一个正方形(通过border-radius让其变为一个圆形)，这里要保证正方形的边长等于按钮的最长边
        // 最终的方形（变换后的圆形）才能覆盖整个按钮
        data.targetWidth = data.height > data.width ? data.height : data.width;
        if (!data.targetWidth) return;
        _this2.fields = data;
        var touchesX = '',
        touchesY = '';









        touchesX = e.touches[0].clientX;
        touchesY = e.touches[0].clientY;

        // 获取触摸点相对于按钮上边和左边的x和y坐标，原理是通过屏幕的触摸点（touchesY），减去按钮的上边界data.top
        // 但是由于`transform-origin`默认是center，所以这里再减去半径才是水波纹view应该的位置
        // 总的来说，就是把水波纹的矩形（变换后的圆形）的中心点，移动到我们的触摸点位置
        _this2.rippleTop = touchesY - data.top - data.targetWidth / 2;
        _this2.rippleLeft = touchesX - data.left - data.targetWidth / 2;
        _this2.$nextTick(function () {
          _this2.waveActive = true;
        });
      });
    },
    // 获取节点信息
    getElQuery: function getElQuery() {var _this3 = this;
      return new Promise(function (resolve) {
        var queryInfo = '';
        // 获取元素节点信息，请查看uniapp相关文档
        // https://uniapp.dcloud.io/api/ui/nodes-info?id=nodesrefboundingclientrect
        queryInfo = uni.createSelectorQuery().in(_this3);



        queryInfo.select('.u-btn').boundingClientRect();
        queryInfo.exec(function (data) {
          resolve(data);
        });
      });
    },
    // 下面为对接uniapp官方按钮开放能力事件回调的对接
    getphonenumber: function getphonenumber(res) {
      this.$emit('getphonenumber', res);
    },
    getuserinfo: function getuserinfo(res) {
      this.$emit('getuserinfo', res);
    },
    error: function error(res) {
      this.$emit('error', res);
    },
    opensetting: function opensetting(res) {
      this.$emit('opensetting', res);
    },
    launchapp: function launchapp(res) {
      this.$emit('launchapp', res);
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 189:
/*!**************************************************************************************************************************************!*\
  !*** D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=6e15e680&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-button.vue?vue&type=style&index=0&id=6e15e680&scoped=true&lang=scss& */ 190);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_6e15e680_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 190:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Desktop/uni-app/blog_ui/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=6e15e680&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDovRGVza3RvcC91bmktYXBwL2Jsb2dfdWkvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWU/ODI3MCIsIndlYnBhY2s6Ly8vRDovRGVza3RvcC91bmktYXBwL2Jsb2dfdWkvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWU/NGYwMiIsIndlYnBhY2s6Ly8vRDovRGVza3RvcC91bmktYXBwL2Jsb2dfdWkvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWU/MDk0MyIsIndlYnBhY2s6Ly8vRDovRGVza3RvcC91bmktYXBwL2Jsb2dfdWkvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWU/NTJjOCIsInVuaS1hcHA6Ly8vdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL0Q6L0Rlc2t0b3AvdW5pLWFwcC9ibG9nX3VpL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlPzYzMDEiLCJ3ZWJwYWNrOi8vL0Q6L0Rlc2t0b3AvdW5pLWFwcC9ibG9nX3VpL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlP2E0NTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpSTtBQUNqSTtBQUM0RDtBQUNMO0FBQ3NDOzs7QUFHN0Y7QUFDMks7QUFDM0ssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBZ29CLENBQWdCLDRuQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0RwcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQVBBOztBQVdBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBWkE7O0FBZ0JBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHVCQUZBLEVBakJBOztBQXFCQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQXRCQTs7QUEwQkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUEzQkE7O0FBK0JBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBaENBOztBQW9DQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBdENBOztBQTBDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBNUNBOztBQWdEQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBbERBOztBQXNEQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQXZEQTs7QUEyREE7QUFDQTtBQUNBLGtCQURBO0FBRUEsbUJBRkEsRUE1REE7O0FBZ0VBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBakVBOztBQXFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBdkVBOztBQTJFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBN0VBOztBQWlGQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBbkZBOztBQXVGQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBekZBOztBQTZGQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQTlGQTs7QUFrR0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFuR0E7O0FBdUdBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBeEdBOztBQTRHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQTdHQTs7QUFpSEE7QUFDQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQWxIQTs7QUF3SEE7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUF6SEE7O0FBNkhBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLG1CQUZBLEVBOUhBOztBQWtJQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQW5JQTs7QUF1SUE7QUFDQTtBQUNBLDRCQURBO0FBRUEsa0JBRkEsRUF4SUEsRUFGQTs7O0FBK0lBO0FBQ0E7QUFDQSxpQkFGQSwyQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0E7QUFDQSxzQkFWQSxnQ0FVQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FoQkEsRUEvSUE7O0FBaUtBLE1BaktBLGtCQWlLQTtBQUNBO0FBQ0Esa0JBREEsRUFDQTtBQUNBLG1CQUZBLEVBRUE7QUFDQSxnQkFIQSxFQUdBO0FBQ0EsdUJBSkEsQ0FJQTtBQUpBO0FBTUEsR0F4S0E7QUF5S0E7QUFDQTtBQUNBLFNBRkEsaUJBRUEsQ0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBLE9BWkEsRUFZQSxpQkFaQTtBQWFBLEtBakJBO0FBa0JBO0FBQ0EsZ0JBbkJBLHdCQW1CQSxDQW5CQSxFQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTs7Ozs7Ozs7OztBQVdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FoQ0E7QUFpQ0EsS0FyREE7QUFzREE7QUFDQSxjQXZEQSx3QkF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BWkE7QUFhQSxLQXJFQTtBQXNFQTtBQUNBLGtCQXZFQSwwQkF1RUEsR0F2RUEsRUF1RUE7QUFDQTtBQUNBLEtBekVBO0FBMEVBLGVBMUVBLHVCQTBFQSxHQTFFQSxFQTBFQTtBQUNBO0FBQ0EsS0E1RUE7QUE2RUEsU0E3RUEsaUJBNkVBLEdBN0VBLEVBNkVBO0FBQ0E7QUFDQSxLQS9FQTtBQWdGQSxlQWhGQSx1QkFnRkEsR0FoRkEsRUFnRkE7QUFDQTtBQUNBLEtBbEZBO0FBbUZBLGFBbkZBLHFCQW1GQSxHQW5GQSxFQW1GQTtBQUNBO0FBQ0EsS0FyRkEsRUF6S0EsRTs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFrckMsQ0FBZ0Isc21DQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdHNDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoidXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlMTVlNjgwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmUxNWU2ODAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZlMTVlNjgwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTYtMCFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUxNWU2ODAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBzMCA9IF92bS5fX2dldF9zdHlsZShbXG4gICAgX3ZtLmN1c3RvbVN0eWxlLFxuICAgIHtcbiAgICAgIG92ZXJmbG93OiBfdm0ucmlwcGxlID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXG4gICAgfVxuICBdKVxuXG4gIHZhciBtMCA9IE51bWJlcihfdm0uaG92ZXJTdGFydFRpbWUpXG4gIHZhciBtMSA9IE51bWJlcihfdm0uaG92ZXJTdGF5VGltZSlcbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBzMDogczAsXG4gICAgICAgIG0wOiBtMCxcbiAgICAgICAgbTE6IG0xXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8YnV0dG9uXHJcblx0XHRpZD1cInUtd2F2ZS1idG5cIlxyXG5cdFx0Y2xhc3M9XCJ1LWJ0biB1LWxpbmUtMSB1LWZpeC1pb3MtYXBwZWFyYW5jZVwiXHJcblx0XHQ6Y2xhc3M9XCJbXHJcblx0XHRcdCd1LXNpemUtJyArIHNpemUsXHJcblx0XHRcdHBsYWluID8gJ3UtYnRuLS0nICsgdHlwZSArICctLXBsYWluJyA6ICcnLFxyXG5cdFx0XHRsb2FkaW5nID8gJ3UtbG9hZGluZycgOiAnJyxcclxuXHRcdFx0c2hhcGUgPT0gJ2NpcmNsZScgPyAndS1yb3VuZC1jaXJjbGUnIDogJycsXHJcblx0XHRcdGhhaXJMaW5lID8gc2hvd0hhaXJMaW5lQm9yZGVyIDogJ3UtYnRuLS1ib2xkLWJvcmRlcicsXHJcblx0XHRcdCd1LWJ0bi0tJyArIHR5cGUsXHJcblx0XHRcdGRpc2FibGVkID8gYHUtYnRuLS0ke3R5cGV9LS1kaXNhYmxlZGAgOiAnJyxcclxuXHRcdF1cIlxyXG5cdFx0OmhvdmVyLXN0YXJ0LXRpbWU9XCJOdW1iZXIoaG92ZXJTdGFydFRpbWUpXCJcclxuXHRcdDpob3Zlci1zdGF5LXRpbWU9XCJOdW1iZXIoaG92ZXJTdGF5VGltZSlcIlxyXG5cdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0OmZvcm0tdHlwZT1cImZvcm1UeXBlXCJcclxuXHRcdDpvcGVuLXR5cGU9XCJvcGVuVHlwZVwiXHJcblx0XHQ6YXBwLXBhcmFtZXRlcj1cImFwcFBhcmFtZXRlclwiXHJcblx0XHQ6aG92ZXItc3RvcC1wcm9wYWdhdGlvbj1cImhvdmVyU3RvcFByb3BhZ2F0aW9uXCJcclxuXHRcdDpzZW5kLW1lc3NhZ2UtdGl0bGU9XCJzZW5kTWVzc2FnZVRpdGxlXCJcclxuXHRcdHNlbmQtbWVzc2FnZS1wYXRoPVwic2VuZE1lc3NhZ2VQYXRoXCJcclxuXHRcdDpsYW5nPVwibGFuZ1wiXHJcblx0XHQ6ZGF0YS1uYW1lPVwiZGF0YU5hbWVcIlxyXG5cdFx0OnNlc3Npb24tZnJvbT1cInNlc3Npb25Gcm9tXCJcclxuXHRcdDpzZW5kLW1lc3NhZ2UtaW1nPVwic2VuZE1lc3NhZ2VJbWdcIlxyXG5cdFx0OnNob3ctbWVzc2FnZS1jYXJkPVwic2hvd01lc3NhZ2VDYXJkXCJcclxuXHRcdEBnZXRwaG9uZW51bWJlcj1cImdldHBob25lbnVtYmVyXCJcclxuXHRcdEBnZXR1c2VyaW5mbz1cImdldHVzZXJpbmZvXCJcclxuXHRcdEBlcnJvcj1cImVycm9yXCJcclxuXHRcdEBvcGVuc2V0dGluZz1cIm9wZW5zZXR0aW5nXCJcclxuXHRcdEBsYXVuY2hhcHA9XCJsYXVuY2hhcHBcIlxyXG5cdFx0OnN0eWxlPVwiW2N1c3RvbVN0eWxlLCB7XHJcblx0XHRcdG92ZXJmbG93OiByaXBwbGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xyXG5cdFx0fV1cIlxyXG5cdFx0QHRhcC5zdG9wPVwiY2xpY2soJGV2ZW50KVwiXHJcblx0XHQ6aG92ZXItY2xhc3M9XCJnZXRIb3ZlckNsYXNzXCJcclxuXHRcdDpsb2FkaW5nPVwibG9hZGluZ1wiXHJcblx0PlxyXG5cdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0di1pZj1cInJpcHBsZVwiXHJcblx0XHRcdGNsYXNzPVwidS13YXZlLXJpcHBsZVwiXHJcblx0XHRcdDpjbGFzcz1cIlt3YXZlQWN0aXZlID8gJ3Utd2F2ZS1hY3RpdmUnIDogJyddXCJcclxuXHRcdFx0OnN0eWxlPVwie1xyXG5cdFx0XHRcdHRvcDogcmlwcGxlVG9wICsgJ3B4JyxcclxuXHRcdFx0XHRsZWZ0OiByaXBwbGVMZWZ0ICsgJ3B4JyxcclxuXHRcdFx0XHR3aWR0aDogZmllbGRzLnRhcmdldFdpZHRoICsgJ3B4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IGZpZWxkcy50YXJnZXRXaWR0aCArICdweCcsXHJcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiByaXBwbGVCZ0NvbG9yIHx8ICdyZ2JhKDAsIDAsIDAsIDAuMTUpJ1xyXG5cdFx0XHR9XCJcclxuXHRcdD48L3ZpZXc+XHJcblx0PC9idXR0b24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKipcclxuICogYnV0dG9uIOaMiemSrlxyXG4gKiBAZGVzY3JpcHRpb24gQnV0dG9uIOaMiemSrlxyXG4gKiBAdHV0b3JpYWwgaHR0cHM6Ly93d3cudXZpZXd1aS5jb20vY29tcG9uZW50cy9idXR0b24uaHRtbFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gc2l6ZSDmjInpkq7nmoTlpKflsI9cclxuICogQHByb3BlcnR5IHtCb29sZWFufSByaXBwbGUg5piv5ZCm5byA5ZCv54K55Ye75rC05rOi57q55pWI5p6cXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSByaXBwbGUtYmctY29sb3Ig5rC05rOi57q555qE6IOM5pmv6Imy77yMcmlwcGxl5Li6dHJ1ZeaXtuacieaViFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSDmjInpkq7nmoTmoLflvI/nsbvlnotcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBwbGFpbiDmjInpkq7mmK/lkKbplYLnqbrvvIzog4zmma/oibLpgI/mmI5cclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkaXNhYmxlZCDmmK/lkKbnpoHnlKhcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBoYWlyLWxpbmUg5piv5ZCm5pi+56S65oyJ6ZKu55qE57uG6L655qGGKOm7mOiupHRydWUpXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hhcGUg5oyJ6ZKu5aSW6KeC5b2i54q277yM6KeB5paH5qGj6K+05piOXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbG9hZGluZyDmjInpkq7lkI3np7DliY3mmK/lkKbluKYgbG9hZGluZyDlm77moIcoQXBwLW52dWUg5bmz5Y+w77yM5ZyoIGlvcyDkuIrkuLrpm6roirHvvIxBbmRyb2lk5LiK5Li65ZyG5ZyIKVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZm9ybS10eXBlIOeUqOS6jiA8Zm9ybT4g57uE5Lu277yM54K55Ye75YiG5Yir5Lya6Kem5Y+RIDxmb3JtPiDnu4Tku7bnmoQgc3VibWl0L3Jlc2V0IOS6i+S7tlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gb3Blbi10eXBlIOW8gOaUvuiDveWKm1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS1uYW1lIOmineWkluS8oOWPguWPguaVsO+8jOeUqOS6juWwj+eoi+W6j+eahGRhdGEteHh45bGe5oCn77yM6YCa6L+HdGFyZ2V0LmRhdGFzZXQubmFtZeiOt+WPllxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gaG92ZXItY2xhc3Mg5oyH5a6a5oyJ6ZKu5oyJ5LiL5Y6755qE5qC35byP57G744CC5b2TIGhvdmVyLWNsYXNzPVwibm9uZVwiIOaXtu+8jOayoeacieeCueWHu+aAgeaViOaenChBcHAtbnZ1ZSDlubPlj7DmmoLkuI3mlK/mjIEpXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBob3Zlci1zdGFydC10aW1lIOaMieS9j+WQjuWkmuS5heWHuueOsOeCueWHu+aAge+8jOWNleS9jeavq+enklxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gaG92ZXItc3RheS10aW1lIOaJi+aMh+advuW8gOWQjueCueWHu+aAgeS/neeVmeaXtumXtO+8jOWNleS9jeavq+enklxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gY3VzdG9tLXN0eWxlIOWvueaMiemSrueahOiHquWumuS5ieagt+W8j++8jOWvueixoeW9ouW8j++8jOingeaWh+aho+ivtOaYjlxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDmjInpkq7ngrnlh7tcclxuICogQGV2ZW50IHtGdW5jdGlvbn0gZ2V0cGhvbmVudW1iZXIgb3Blbi10eXBlPVwiZ2V0UGhvbmVOdW1iZXJcIuaXtuacieaViFxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBnZXR1c2VyaW5mbyDnlKjmiLfngrnlh7vor6XmjInpkq7ml7bvvIzkvJrov5Tlm57ojrflj5bliLDnmoTnlKjmiLfkv6Hmga/vvIzku47ov5Tlm57lj4LmlbDnmoRkZXRhaWzkuK3ojrflj5bliLDnmoTlgLzlkIx1bmkuZ2V0VXNlckluZm9cclxuICogQGV2ZW50IHtGdW5jdGlvbn0gZXJyb3Ig5b2T5L2/55So5byA5pS+6IO95Yqb5pe277yM5Y+R55Sf6ZSZ6K+v55qE5Zue6LCDXHJcbiAqIEBldmVudCB7RnVuY3Rpb259IG9wZW5zZXR0aW5nIOWcqOaJk+W8gOaOiOadg+iuvue9rumhteW5tuWFs+mXreWQjuWbnuiwg1xyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBsYXVuY2hhcHAg5omT5byAIEFQUCDmiJDlip/nmoTlm57osINcclxuICogQGV4YW1wbGUgPHUtYnV0dG9uPuaciOiQvTwvdS1idXR0b24+XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3UtYnV0dG9uJyxcclxuXHRwcm9wczoge1xyXG5cdFx0Ly8g5piv5ZCm57uG6L655qGGXHJcblx0XHRoYWlyTGluZToge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0Ly8g5oyJ6ZKu55qE6aKE572u5qC35byP77yMZGVmYXVsdO+8jHByaW1hcnnvvIxlcnJvcu+8jHdhcm5pbmfvvIxzdWNjZXNzXHJcblx0XHR0eXBlOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ2RlZmF1bHQnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5oyJ6ZKu5bC65a+477yMZGVmYXVsdO+8jG1lZGl1be+8jG1pbmlcclxuXHRcdHNpemU6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnZGVmYXVsdCdcclxuXHRcdH0sXHJcblx0XHQvLyDmjInpkq7lvaLnirbvvIxjaXJjbGXvvIjkuKTovrnkuLrljYrlnIbvvInvvIxzcXVhcmXvvIjluKblnIbop5LvvIlcclxuXHRcdHNoYXBlOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ3NxdWFyZSdcclxuXHRcdH0sXHJcblx0XHQvLyDmjInpkq7mmK/lkKbplYLnqbpcclxuXHRcdHBsYWluOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0Ly8g5piv5ZCm56aB5q2i54q25oCBXHJcblx0XHRkaXNhYmxlZDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdC8vIOaYr+WQpuWKoOi9veS4rVxyXG5cdFx0bG9hZGluZzoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdC8vIOW8gOaUvuiDveWKm++8jOWFt+S9k+ivt+eci3VuaWFwcOeos+WumuWFs+S6jmJ1dHRvbue7hOS7tumDqOWIhuivtOaYjlxyXG5cdFx0Ly8gaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL2NvbXBvbmVudC9idXR0b25cclxuXHRcdG9wZW5UeXBlOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHQvLyDnlKjkuo4gPGZvcm0+IOe7hOS7tu+8jOeCueWHu+WIhuWIq+S8muinpuWPkSA8Zm9ybT4g57uE5Lu255qEIHN1Ym1pdC9yZXNldCDkuovku7ZcclxuXHRcdC8vIOWPluWAvOS4unN1Ym1pdO+8iOaPkOS6pOihqOWNle+8ie+8jHJlc2V077yI6YeN572u6KGo5Y2V77yJXHJcblx0XHRmb3JtVHlwZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5omT5byAIEFQUCDml7bvvIzlkJEgQVBQIOS8oOmAkueahOWPguaVsO+8jG9wZW4tdHlwZT1sYXVuY2hBcHDml7bmnInmlYhcclxuXHRcdC8vIOWPquW+ruS/oeWwj+eoi+W6j+OAgVFR5bCP56iL5bqP5pyJ5pWIXHJcblx0XHRhcHBQYXJhbWV0ZXI6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOaMh+WumuaYr+WQpumYu+atouacrOiKgueCueeahOelluWFiOiKgueCueWHuueOsOeCueWHu+aAge+8jOW+ruS/oeWwj+eoi+W6j+acieaViFxyXG5cdFx0aG92ZXJTdG9wUHJvcGFnYXRpb246IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHQvLyDmjIflrprov5Tlm57nlKjmiLfkv6Hmga/nmoTor63oqIDvvIx6aF9DTiDnroDkvZPkuK3mlofvvIx6aF9UVyDnuYHkvZPkuK3mlofvvIxlbiDoi7HmlofjgILlj6rlvq7kv6HlsI/nqIvluo/mnInmlYhcclxuXHRcdGxhbmc6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnZW4nXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Lya6K+d5p2l5rqQ77yMb3Blbi10eXBlPVwiY29udGFjdFwi5pe25pyJ5pWI44CC5Y+q5b6u5L+h5bCP56iL5bqP5pyJ5pWIXHJcblx0XHRzZXNzaW9uRnJvbToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5Lya6K+d5YaF5raI5oGv5Y2h54mH5qCH6aKY77yMb3Blbi10eXBlPVwiY29udGFjdFwi5pe25pyJ5pWIXHJcblx0XHQvLyDpu5jorqTlvZPliY3moIfpopjvvIzlj6rlvq7kv6HlsI/nqIvluo/mnInmlYhcclxuXHRcdHNlbmRNZXNzYWdlVGl0bGU6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOS8muivneWGhea2iOaBr+WNoeeJh+eCueWHu+i3s+i9rOWwj+eoi+W6j+i3r+W+hO+8jG9wZW4tdHlwZT1cImNvbnRhY3RcIuaXtuacieaViFxyXG5cdFx0Ly8g6buY6K6k5b2T5YmN5YiG5Lqr6Lev5b6E77yM5Y+q5b6u5L+h5bCP56iL5bqP5pyJ5pWIXHJcblx0XHRzZW5kTWVzc2FnZVBhdGg6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOS8muivneWGhea2iOaBr+WNoeeJh+WbvueJh++8jG9wZW4tdHlwZT1cImNvbnRhY3RcIuaXtuacieaViFxyXG5cdFx0Ly8g6buY6K6k5b2T5YmN6aG16Z2i5oiq5Zu+77yM5Y+q5b6u5L+h5bCP56iL5bqP5pyJ5pWIXHJcblx0XHRzZW5kTWVzc2FnZUltZzoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0Ly8g5piv5ZCm5pi+56S65Lya6K+d5YaF5raI5oGv5Y2h54mH77yM6K6+572u5q2k5Y+C5pWw5Li6IHRydWXvvIznlKjmiLfov5vlhaXlrqLmnI3kvJror53kvJrlnKjlj7PkuIvop5LmmL7npLpcIuWPr+iDveimgeWPkemAgeeahOWwj+eoi+W6j1wi5o+Q56S677yMXHJcblx0XHQvLyDnlKjmiLfngrnlh7vlkI7lj6/ku6Xlv6vpgJ/lj5HpgIHlsI/nqIvluo/mtojmga/vvIxvcGVuLXR5cGU9XCJjb250YWN0XCLml7bmnInmlYhcclxuXHRcdHNob3dNZXNzYWdlQ2FyZDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdC8vIOaJi+aMh+aMie+8iOinpuaRuO+8ieaMiemSruaXtuaMiemSruaXtueahOiDjOaZr+minOiJslxyXG5cdFx0aG92ZXJCZ0NvbG9yOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHQvLyDmsLTms6LnurnnmoTog4zmma/popzoibJcclxuXHRcdHJpcHBsZUJnQ29sb3I6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdC8vIOaYr+WQpuW8gOWQr+awtOazoue6ueaViOaenFxyXG5cdFx0cmlwcGxlOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0Ly8g5oyJ5LiL55qE57G75ZCNXHJcblx0XHRob3ZlckNsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHQvLyDoh6rlrprkuYnmoLflvI/vvIzlr7nosaHlvaLlvI9cclxuXHRcdGN1c3RvbVN0eWxlOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDpop3lpJbkvKDlj4Llj4LmlbDvvIznlKjkuo7lsI/nqIvluo/nmoRkYXRhLXh4eOWxnuaAp++8jOmAmui/h3RhcmdldC5kYXRhc2V0Lm5hbWXojrflj5ZcclxuXHRcdGRhdGFOYW1lOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHQvLyDoioLmtYHvvIzkuIDlrprml7bpl7TlhoXlj6rog73op6blj5HkuIDmrKFcclxuXHRcdHRocm90dGxlVGltZToge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAxMDAwXHJcblx0XHR9LFxyXG5cdFx0Ly8g5oyJ5L2P5ZCO5aSa5LmF5Ye6546w54K55Ye75oCB77yM5Y2V5L2N5q+r56eSXHJcblx0XHRob3ZlclN0YXJ0VGltZToge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAyMFxyXG5cdFx0fSxcclxuXHRcdC8vIOaJi+aMh+advuW8gOWQjueCueWHu+aAgeS/neeVmeaXtumXtO+8jOWNleS9jeavq+enklxyXG5cdFx0aG92ZXJTdGF5VGltZToge1xyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAxNTBcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Ly8g5b2T5rKh5pyJ5LygYmdDb2xvcuWPmOmHj+aXtu+8jOaMiemSruaMieS4i+WOu+eahOminOiJsuexu+WQjVxyXG5cdFx0Z2V0SG92ZXJDbGFzcygpIHtcclxuXHRcdFx0Ly8g5aaC5p6c5byA5ZCv5rC05rOi57q55pWI5p6c77yM5YiZ5LiN5ZCv55SoaG92ZXItY2xhc3PmlYjmnpxcclxuXHRcdFx0aWYgKHRoaXMubG9hZGluZyB8fCB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmlwcGxlIHx8IHRoaXMuaG92ZXJDbGFzcykgcmV0dXJuICcnO1xyXG5cdFx0XHRsZXQgaG92ZXJDbGFzcyA9ICcnO1xyXG5cdFx0XHRob3ZlckNsYXNzID0gdGhpcy5wbGFpbiA/ICd1LScgKyB0aGlzLnR5cGUgKyAnLXBsYWluLWhvdmVyJyA6ICd1LScgKyB0aGlzLnR5cGUgKyAnLWhvdmVyJztcclxuXHRcdFx0cmV0dXJuIGhvdmVyQ2xhc3M7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5ZyoJ3ByaW1hcnknLCAnc3VjY2VzcycsICdlcnJvcicsICd3YXJuaW5nJ+exu+Wei+S4i++8jOS4jeaYvuekuui+ueahhu+8jOWQpuWImeS8mumAoOaIkOWbm+inkuacieavm+WIuueOsOixoVxyXG5cdFx0c2hvd0hhaXJMaW5lQm9yZGVyKCkge1xyXG5cdFx0XHRpZiAoWydwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnZXJyb3InLCAnd2FybmluZyddLmluZGV4T2YodGhpcy50eXBlKSA+PSAwICYmICF0aGlzLnBsYWluKSB7XHJcblx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAndS1oYWlybGluZS1ib3JkZXInO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmlwcGxlVG9wOiAwLCAvLyDmsLTms6LnurnnmoTotbfngrlZ5Z2Q5qCH5Yiw5oyJ6ZKu5LiK6L6555WM55qE6Led56a7XHJcblx0XHRcdHJpcHBsZUxlZnQ6IDAsIC8vIOawtOazoue6uei1t+eCuVjlnZDmoIfliLDmjInpkq7lt6bovrnnlYznmoTot53nprtcclxuXHRcdFx0ZmllbGRzOiB7fSwgLy8g5rOi57q55oyJ6ZKu6IqC54K55L+h5oGvXHJcblx0XHRcdHdhdmVBY3RpdmU6IGZhbHNlIC8vIOa/gOa0u+awtOazoue6uVxyXG5cdFx0fTtcclxuXHR9LFxuXHRtZXRob2RzOiB7XHJcblx0XHQvLyDmjInpkq7ngrnlh7tcclxuXHRcdGNsaWNrKGUpIHtcclxuXHRcdFx0Ly8g6L+b6KGM6IqC5rWB5o6n5Yi277yM5q+PdGhpcy50aHJvdHRsZeavq+enkuWGhe+8jOWPquWcqOW8gOWni+WkhOaJp+ihjFxyXG5cdFx0XHR0aGlzLiR1LnRocm90dGxlKCgpID0+IHtcclxuXHRcdFx0XHQvLyDlpoLmnpzmjInpkq7ml7ZkaXNhYmxlZOWSjGxvYWRpbmfnirbmgIHvvIzkuI3op6blj5HmsLTms6LnurnmlYjmnpxcclxuXHRcdFx0XHRpZiAodGhpcy5sb2FkaW5nID09PSB0cnVlIHx8IHRoaXMuZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcclxuXHRcdFx0XHQvLyDmmK/lkKblvIDlkK/msLTms6LnurnmlYjmnpxcclxuXHRcdFx0XHRpZiAodGhpcy5yaXBwbGUpIHtcclxuXHRcdFx0XHRcdC8vIOavj+asoeeCueWHu+aXtu+8jOenu+mZpOS4iuS4gOasoeeahOexu++8jOWGjeasoea3u+WKoO+8jOaJjeiDveinpuWPkeWKqOeUu+aViOaenFxyXG5cdFx0XHRcdFx0dGhpcy53YXZlQWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5nZXRXYXZlUXVlcnkoZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcclxuXHRcdFx0fSwgdGhpcy50aHJvdHRsZVRpbWUpO1xyXG5cdFx0fSxcclxuXHRcdC8vIOafpeivouaMiemSrueahOiKgueCueS/oeaBr1xyXG5cdFx0Z2V0V2F2ZVF1ZXJ5KGUpIHtcclxuXHRcdFx0dGhpcy5nZXRFbFF1ZXJ5KCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdC8vIOafpeivoui/lOWbnueahOaYr+S4gOS4quaVsOe7hOiKgueCuVxyXG5cdFx0XHRcdGxldCBkYXRhID0gcmVzWzBdO1xyXG5cdFx0XHRcdC8vIOafpeivouS4jeWIsOiKgueCueS/oeaBr++8jOS4jeaTjeS9nFxyXG5cdFx0XHRcdGlmICghZGF0YS53aWR0aCB8fCAhZGF0YS53aWR0aCkgcmV0dXJuO1xyXG5cdFx0XHRcdC8vIOawtOazoue6ueeahOacgOe7iOW9ouaAgeaYr+S4gOS4quato+aWueW9oijpgJrov4dib3JkZXItcmFkaXVz6K6p5YW25Y+Y5Li65LiA5Liq5ZyG5b2iKe+8jOi/memHjOimgeS/neivgeato+aWueW9oueahOi+uemVv+etieS6juaMiemSrueahOacgOmVv+i+uVxyXG5cdFx0XHRcdC8vIOacgOe7iOeahOaWueW9ou+8iOWPmOaNouWQjueahOWchuW9ou+8ieaJjeiDveimhuebluaVtOS4quaMiemSrlxyXG5cdFx0XHRcdGRhdGEudGFyZ2V0V2lkdGggPSBkYXRhLmhlaWdodCA+IGRhdGEud2lkdGggPyBkYXRhLmhlaWdodCA6IGRhdGEud2lkdGg7XHJcblx0XHRcdFx0aWYgKCFkYXRhLnRhcmdldFdpZHRoKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5maWVsZHMgPSBkYXRhO1xyXG5cdFx0XHRcdGxldCB0b3VjaGVzWCA9ICcnLFxyXG5cdFx0XHRcdFx0dG91Y2hlc1kgPSAnJztcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQkFJRFVcclxuXHRcdFx0XHR0b3VjaGVzWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuXHRcdFx0XHR0b3VjaGVzWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtQUxJUEFZXHJcblx0XHRcdFx0dG91Y2hlc1ggPSBlLmRldGFpbC5jbGllbnRYO1xyXG5cdFx0XHRcdHRvdWNoZXNZID0gZS5kZXRhaWwuY2xpZW50WTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIE1QLUJBSURVIHx8IE1QLUFMSVBBWVxyXG5cdFx0XHRcdHRvdWNoZXNYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0XHRcdFx0dG91Y2hlc1kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyDojrflj5bop6bmkbjngrnnm7jlr7nkuo7mjInpkq7kuIrovrnlkozlt6bovrnnmoR45ZKMeeWdkOagh++8jOWOn+eQhuaYr+mAmui/h+Wxj+W5leeahOinpuaRuOeCue+8iHRvdWNoZXNZ77yJ77yM5YeP5Y675oyJ6ZKu55qE5LiK6L6555WMZGF0YS50b3BcclxuXHRcdFx0XHQvLyDkvYbmmK/nlLHkuo5gdHJhbnNmb3JtLW9yaWdpbmDpu5jorqTmmK9jZW50ZXLvvIzmiYDku6Xov5nph4zlho3lh4/ljrvljYrlvoTmiY3mmK/msLTms6Lnurl2aWV35bqU6K+l55qE5L2N572uXHJcblx0XHRcdFx0Ly8g5oC755qE5p2l6K+077yM5bCx5piv5oqK5rC05rOi57q555qE55+p5b2i77yI5Y+Y5o2i5ZCO55qE5ZyG5b2i77yJ55qE5Lit5b+D54K577yM56e75Yqo5Yiw5oiR5Lus55qE6Kem5pG454K55L2N572uXHJcblx0XHRcdFx0dGhpcy5yaXBwbGVUb3AgPSB0b3VjaGVzWSAtIGRhdGEudG9wIC0gZGF0YS50YXJnZXRXaWR0aCAvIDI7XHJcblx0XHRcdFx0dGhpcy5yaXBwbGVMZWZ0ID0gdG91Y2hlc1ggLSBkYXRhLmxlZnQgLSBkYXRhLnRhcmdldFdpZHRoIC8gMjtcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLndhdmVBY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvLyDojrflj5boioLngrnkv6Hmga9cclxuXHRcdGdldEVsUXVlcnkoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHRsZXQgcXVlcnlJbmZvID0gJyc7XHJcblx0XHRcdFx0Ly8g6I635Y+W5YWD57Sg6IqC54K55L+h5oGv77yM6K+35p+l55yLdW5pYXBw55u45YWz5paH5qGjXHJcblx0XHRcdFx0Ly8gaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL2FwaS91aS9ub2Rlcy1pbmZvP2lkPW5vZGVzcmVmYm91bmRpbmdjbGllbnRyZWN0XHJcblx0XHRcdFx0cXVlcnlJbmZvID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0XHQvLyNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHRxdWVyeUluZm8gPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG5cdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdFx0cXVlcnlJbmZvLnNlbGVjdCgnLnUtYnRuJykuYm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0cXVlcnlJbmZvLmV4ZWMoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvLyDkuIvpnaLkuLrlr7nmjqV1bmlhcHDlrpjmlrnmjInpkq7lvIDmlL7og73lipvkuovku7blm57osIPnmoTlr7nmjqVcclxuXHRcdGdldHBob25lbnVtYmVyKHJlcykge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdnZXRwaG9uZW51bWJlcicsIHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0dXNlcmluZm8ocmVzKSB7XHJcblx0XHRcdHRoaXMuJGVtaXQoJ2dldHVzZXJpbmZvJywgcmVzKTtcclxuXHRcdH0sXHJcblx0XHRlcnJvcihyZXMpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnZXJyb3InLCByZXMpO1xyXG5cdFx0fSxcclxuXHRcdG9wZW5zZXR0aW5nKHJlcykge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdvcGVuc2V0dGluZycsIHJlcyk7XHJcblx0XHR9LFxyXG5cdFx0bGF1bmNoYXBwKHJlcykge1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdsYXVuY2hhcHAnLCByZXMpO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgJy4uLy4uL2xpYnMvY3NzL3N0eWxlLmNvbXBvbmVudHMuc2Nzcyc7XHJcbi51LWJ0bjo6YWZ0ZXIge1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnUtYnRuIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdC8vYm9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1x0XHRcclxuXHQvKiAjZW5kaWYgKi9cclxuXHQvLyDpgb/lhY3ovrnmoYbmn5DkupvlnLrmma/lj6/og73ooqvigJzoo4HliarigJ3vvIzkuI3og73orr7nva7kuLpoaWRkZW5cclxuXHRvdmVyZmxvdzogdmlzaWJsZTtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHRAaW5jbHVkZSB2dWUtZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwYWRkaW5nOiAwIDQwcnB4O1xyXG5cdHotaW5kZXg6IDE7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcblx0XHJcblx0Ji0tYm9sZC1ib3JkZXIge1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuXHR9XHJcblx0XHJcblx0Ji0tZGVmYXVsdCB7XHJcblx0XHRjb2xvcjogJHUtY29udGVudC1jb2xvcjtcclxuXHRcdGJvcmRlci1jb2xvcjogI2MwYzRjYztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cdFxyXG5cdCYtLXByaW1hcnkge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtcHJpbWFyeTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1LXR5cGUtcHJpbWFyeTtcclxuXHR9XHJcblx0XHJcblx0Ji0tc3VjY2VzcyB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdGJvcmRlci1jb2xvcjogJHUtdHlwZS1zdWNjZXNzO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHUtdHlwZS1zdWNjZXNzO1xyXG5cdH1cclxuXHRcclxuXHQmLS1lcnJvciB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdGJvcmRlci1jb2xvcjogJHUtdHlwZS1lcnJvcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1LXR5cGUtZXJyb3I7XHJcblx0fVxyXG5cdFxyXG5cdCYtLXdhcm5pbmcge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtd2FybmluZztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1LXR5cGUtd2FybmluZztcclxuXHR9XHJcblx0XHJcblx0Ji0tZGVmYXVsdC0tZGlzYWJsZWQge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItY29sb3I6ICNlNGU3ZWQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHRcclxuXHQmLS1wcmltYXJ5LS1kaXNhYmxlZCB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtcHJpbWFyeS1kaXNhYmxlZCFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLXByaW1hcnktZGlzYWJsZWQhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQmLS1zdWNjZXNzLS1kaXNhYmxlZCB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtc3VjY2Vzcy1kaXNhYmxlZCFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLXN1Y2Nlc3MtZGlzYWJsZWQhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQmLS1lcnJvci0tZGlzYWJsZWQge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdS10eXBlLWVycm9yLWRpc2FibGVkIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1LXR5cGUtZXJyb3ItZGlzYWJsZWQhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQmLS13YXJuaW5nLS1kaXNhYmxlZCB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtd2FybmluZy1kaXNhYmxlZCFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLXdhcm5pbmctZGlzYWJsZWQhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQmLS1wcmltYXJ5LS1wbGFpbiB7XHJcblx0XHRjb2xvcjogJHUtdHlwZS1wcmltYXJ5IWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHUtdHlwZS1wcmltYXJ5LWRpc2FibGVkIWltcG9ydGFudDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1LXR5cGUtcHJpbWFyeS1saWdodCFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdFxyXG5cdCYtLXN1Y2Nlc3MtLXBsYWluIHtcclxuXHRcdGNvbG9yOiAkdS10eXBlLXN1Y2Nlc3MhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkdS10eXBlLXN1Y2Nlc3MtZGlzYWJsZWQhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHUtdHlwZS1zdWNjZXNzLWxpZ2h0IWltcG9ydGFudDtcclxuXHR9XHJcblx0XHJcblx0Ji0tZXJyb3ItLXBsYWluIHtcclxuXHRcdGNvbG9yOiAkdS10eXBlLWVycm9yIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1jb2xvcjogJHUtdHlwZS1lcnJvci1kaXNhYmxlZCFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLWVycm9yLWxpZ2h0IWltcG9ydGFudDtcclxuXHR9XHJcblx0XHJcblx0Ji0td2FybmluZy0tcGxhaW4ge1xyXG5cdFx0Y29sb3I6ICR1LXR5cGUtd2FybmluZyFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItY29sb3I6ICR1LXR5cGUtd2FybmluZy1kaXNhYmxlZCFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLXdhcm5pbmctbGlnaHQhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuLnUtaGFpcmxpbmUtYm9yZGVyOmFmdGVyIHtcclxuXHRjb250ZW50OiAnICc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdC8vIOiuvue9ruS4umJvcmRlci1ib3jvvIzmhI/lkbPnnYDkuIvpnaLnmoRzY2FsZee8qeWwj+S4ujAuNe+8jOWunumZheS4iue8qeWwj+eahOaYr+S8quWFg+e0oOeahOWGheWuue+8iGJvcmRlci1ib3jmhI/lkbPnnYDlhoXlrrnkuI3lkKtib3JkZXLvvIlcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC8vIOS4reW/g+eCueS9nOS4uuWPmOW9oihzY2FsZSgpKeeahOWOn+eCuVxyXG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTk5LjglO1xyXG5cdGhlaWdodDogMTk5LjclO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51LXdhdmUtcmlwcGxlIHtcclxuXHR6LWluZGV4OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG5cclxuLnUtd2F2ZS1yaXBwbGUudS13YXZlLWFjdGl2ZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyLCB0cmFuc2Zvcm0gMC40cyBsaW5lYXI7XHJcbn1cclxuXHJcbi51LXJvdW5kLWNpcmNsZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG59XHJcblxyXG4udS1yb3VuZC1jaXJjbGU6OmFmdGVyIHtcclxuXHRib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcbn1cclxuXHJcbi51LWxvYWRpbmc6OmFmdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjM1KTtcclxufVxyXG5cclxuLnUtc2l6ZS1kZWZhdWx0IHtcclxuXHRmb250LXNpemU6IDMwcnB4O1xyXG5cdGhlaWdodDogODBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG59XHJcblxyXG4udS1zaXplLW1lZGl1bSB7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1x0XHRcclxuXHQvKiAjZW5kaWYgKi9cclxuXHR3aWR0aDogYXV0bztcclxuXHRmb250LXNpemU6IDI2cnB4O1xyXG5cdGhlaWdodDogNzBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDcwcnB4O1xyXG5cdHBhZGRpbmc6IDAgODBycHg7XHJcbn1cclxuXHJcbi51LXNpemUtbWluaSB7XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1x0XHRcclxuXHQvKiAjZW5kaWYgKi9cclxuXHR3aWR0aDogYXV0bztcclxuXHRmb250LXNpemU6IDIycnB4O1xyXG5cdHBhZGRpbmctdG9wOiAxcHg7XHJcblx0aGVpZ2h0OiA1MHJweDtcclxuXHRsaW5lLWhlaWdodDogNTBycHg7XHJcblx0cGFkZGluZzogMCAyMHJweDtcclxufVxyXG5cclxuLnUtcHJpbWFyeS1wbGFpbi1ob3ZlciB7XHJcblx0Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiAkdS10eXBlLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udS1kZWZhdWx0LXBsYWluLWhvdmVyIHtcclxuXHRjb2xvcjogJHUtdHlwZS1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiAkdS10eXBlLXByaW1hcnktbGlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnUtc3VjY2Vzcy1wbGFpbi1ob3ZlciB7XHJcblx0Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kOiAkdS10eXBlLXN1Y2Nlc3MtZGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udS13YXJuaW5nLXBsYWluLWhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6ICR1LXR5cGUtd2FybmluZy1kYXJrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51LWVycm9yLXBsYWluLWhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6ICR1LXR5cGUtZXJyb3ItZGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udS1pbmZvLXBsYWluLWhvdmVyIHtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6ICR1LXR5cGUtaW5mby1kYXJrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51LWRlZmF1bHQtaG92ZXIge1xyXG5cdGNvbG9yOiAkdS10eXBlLXByaW1hcnktZGFyayAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1jb2xvcjogJHUtdHlwZS1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkdS10eXBlLXByaW1hcnktbGlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnUtcHJpbWFyeS1ob3ZlciB7XHJcblx0YmFja2dyb3VuZDogJHUtdHlwZS1wcmltYXJ5LWRhcmsgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnUtc3VjY2Vzcy1ob3ZlciB7XHJcblx0YmFja2dyb3VuZDogJHUtdHlwZS1zdWNjZXNzLWRhcmsgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnUtaW5mby1ob3ZlciB7XHJcblx0YmFja2dyb3VuZDogJHUtdHlwZS1pbmZvLWRhcmsgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnUtd2FybmluZy1ob3ZlciB7XHJcblx0YmFja2dyb3VuZDogJHUtdHlwZS13YXJuaW5nLWRhcmsgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnUtZXJyb3ItaG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICR1LXR5cGUtZXJyb3ItZGFyayAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlMTVlNjgwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFGOlxcXFzov4Xpm7fkuIvovb1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUY6XFxcXOi/hembt+S4i+i9vVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxc6L+F6Zu35LiL6L29XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmUxNWU2ODAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwOTc0NTM0NzE2OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJGOi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-button/u-button-create-component',
    {
        'uview-ui/components/u-button/u-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(184))
        })
    },
    [['uview-ui/components/u-button/u-button-create-component']]
]);
