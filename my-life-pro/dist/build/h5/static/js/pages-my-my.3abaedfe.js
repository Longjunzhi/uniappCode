"use strict";(self["webpackChunkmy_life_pro"]=self["webpackChunkmy_life_pro"]||[]).push([[483],{8907:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var i=t(3957),a={props:{hasLeftWin:{type:Boolean},leftWinActive:{type:String}},data:function(){return{list:[{id:"media",name:"媒体组件",open:!1,pages:["image","video"]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"media",name:"媒体组件",open:!1,pages:["image","video"]}]}},watch:{$route:{immediate:!0,handler:function(n){if(n.matched.length){var e,t=n.path.split("/")[3],a=(0,i.Z)(this.list);try{for(a.s();!(e=a.n()).done;){var l=e.value;if(Array.isArray(l.pages)){var s,r=(0,i.Z)(l.pages);try{for(r.s();!(s=r.n()).done;){var u=s.value;(u===t||u.url&&u.url===n.path)&&(l.open=!0)}}catch(o){r.e(o)}finally{r.f()}}}}catch(o){a.e(o)}finally{a.f()}}}}},methods:{triggerCollapse:function(n,e){if(this.list[n].pages)for(var t=0;t<this.list.length;++t)this.list[t].open=n===t&&!this.list[t].open;else this.goDetailPage("",this.list[n].url)},goDetailPage:function(n,e){if("string"===typeof e){var t="/pages/component/"+e+"/"+e;this.hasLeftWin?uni.reLaunch({url:t}):uni.navigateTo({url:t})}else this.hasLeftWin?uni.reLaunch({url:e.url}):uni.navigateTo({url:e.url})}}},l=a,s=t(9453),r=(0,s.Z)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"uni-container"},[n.hasLeftWin?n._e():t("v-uni-view",{staticClass:"uni-header-logo"},[t("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/logo.png"}})],1),n.hasLeftWin?n._e():t("v-uni-view",{staticClass:"uni-hello-text"},[t("v-uni-text",{staticClass:"hello-text"},[n._v("uni-app内置组件，展示样式仅供参考，文档详见：")]),t("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),n._l(n.list,(function(e,i){return t("v-uni-view",{key:e.id,staticClass:"uni-panel"},[t("v-uni-view",{staticClass:"uni-panel-h",class:e.open?"uni-panel-h-on":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.triggerCollapse(i,e.id)}}},[t("v-uni-text",{staticClass:"uni-panel-text"},[n._v(n._s(e.name))]),t("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:e.open?"uni-panel-icon-on":""},[n._v(n._s(e.pages?"":""))])],1),e.open?t("v-uni-view",{staticClass:"uni-panel-c"},n._l(e.pages,(function(i,a){return t("v-uni-view",{key:a,staticClass:"uni-navigate-item",class:{"left-win-active":n.leftWinActive===(i.url?i.url.split("/")[3]:i)&&n.hasLeftWin},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goDetailPage(e.id,i)}}},[t("v-uni-text",{staticClass:"uni-navigate-text"},[n._v(n._s(i.name?i.name:i))]),t("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[n._v("")])],1)})),1):n._e()],1)}))],2)}),[],!1,null,"17214be5",null,!1,undefined,undefined),u=r.exports},3957:function(n,e,t){t.d(e,{Z:function(){return a}});t(9749),t(6544),t(228),t(4254),t(1694),t(6265),t(1057),t(8932);var i=t(5384);function a(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=(0,i.Z)(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var a=0,l=function(){};return{s:l,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return r=n.done,n},e:function(n){u=!0,s=n},f:function(){try{r||null==t["return"]||t["return"]()}finally{if(u)throw s}}}}}}]);