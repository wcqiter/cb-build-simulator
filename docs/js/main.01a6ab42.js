(function(t){function e(e){for(var c,o,f=e[0],i=e[1],l=e[2],m=0,d=[];m<f.length;m++)o=f[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);r&&r(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],c=!0,f=1;f<a.length;f++){var i=a[f];0!==n[i]&&(c=!1)}c&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var c={},n={main:0},s=[];function o(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=c,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(a,c,function(e){return t[e]}.bind(null,c));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cb-build-simulator/";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=e,f=f.slice();for(var l=0;l<f.length;l++)e(f[l]);var r=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1ad9":function(t){t.exports=JSON.parse('{"key":"","num":1}')},"4d26":function(t,e,a){"use strict";a("8db4")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh",display:"flex","flex-direction":"column"},attrs:{id:"app"}},[a("b-navbar",{attrs:{type:"dark",variant:"secondary"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("CBU Simulator")])],1),a("div",{staticStyle:{flex:"1"}},[a("b-container",[a("Simulator")],1)],1),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"right"}},[a("small",[t._v("Power by "),a("a",{attrs:{target:"_blank",href:"https://github.com/wcqiter"}},[t._v("天虹@BRD")])])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ready?a("div",{staticClass:"mt-4"},[t.storageUsed?a("b-tabs",{attrs:{pills:""},scopedSlots:t._u([{key:"tabs-end",fn:function(){return[t._l(t.tabs,(function(e,c){return a("b-nav-item",{key:c,attrs:{href:"#",active:t.tab===c},on:{click:function(e){return t.onClickTab(c)}}},[t._v(" "+t._s(e.name)+" ")])})),a("b-nav-item",{attrs:{href:"#"},on:{click:t.onAddTab}},[a("i",{staticClass:"fa fa-plus"})])]},proxy:!0}],null,!1,2630559030)}):t._e(),a("b-row",[a("div",{staticClass:"col-md-4"},[a("b-card",[a("div",[t.storageUsed?a("b-form-group",{attrs:{label:"配置名稱","label-cols":"3"}},[a("b-form-input",{model:{value:t.tabs[t.tab].name,callback:function(e){t.$set(t.tabs[t.tab],"name",e)},expression:"tabs[tab].name"}})],1):t._e()],1),a("h5",{staticClass:"mb-2"},[t._v("數值")]),a("small",[t._v("1. 輸入機體數值")]),a("table",t._l(Object.keys(t.defaultStat),(function(e,c){return a("tr",{key:c},[a("td",[t._v(t._s(t.cat[e]))]),a("td",[a("b-form-input",{attrs:{type:"number",size:"sm"},model:{value:t.defaultStat[e],callback:function(a){t.$set(t.defaultStat,e,t._n(a))},expression:"defaultStat[key]"}})],1),a("td",[t._v("→")]),a("td",{staticClass:"td-result"},[t._v(t._s(t.finalData[e]))])])})),0),t.storageUsed?a("div",{staticClass:"mt-2",staticStyle:{"text-align":"center"}},[a("b-button",{attrs:{variant:"primary"},on:{click:t.onSave}},[a("i",{staticClass:"fa fa-save"}),t._v(" 儲存 ")]),t.tabs.length>1?a("b-button",{staticClass:"ml-2",attrs:{variant:"danger"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onDeleteTab(t.tab)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" 刪除配置 ")]):t._e()],1):t._e()])],1),a("div",{staticClass:"col-md-8"},[a("b-card",[a("h5",{staticClass:"mb-2"},[t._v("強化項目")]),a("small",[t._v("2. 添加機體強化項目")]),a("div",{staticClass:"mb-2 mt-2"},[a("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onAddMod}},[a("i",{staticClass:"fa fa-plus"}),t._v(" 新強化項目 ")])],1),t._l(t.mod,(function(e,c){return a("div",{key:c,staticStyle:{display:"flex"}},[a("b-button",{staticClass:"mr-2",attrs:{variant:"danger"},on:{click:function(e){return t.onDeleteMod(c)}}},[a("i",{staticClass:"fa fa-trash"})]),a("b-row",{staticStyle:{flex:"1"}},[a("b-form-group",{staticClass:"col-8",attrs:{label:"強化項目"}},[a("b-select",{attrs:{size:"sm",options:t.computedOptions},model:{value:t.mod[c].key,callback:function(e){t.$set(t.mod[c],"key",e)},expression:"mod[i].key"}})],1),a("b-form-group",{staticClass:"col-4",attrs:{label:"數量"}},[a("b-form-input",{attrs:{size:"sm",type:"number"},model:{value:t.mod[c].num,callback:function(e){t.$set(t.mod[c],"num",t._n(e))},expression:"mod[i].num"}})],1)],1)],1)}))],2)],1)])],1):t._e()},f=[],i=(a("b0c0"),a("159b"),a("b64b"),a("4de4"),a("caad"),a("2532"),a("d81d"),a("ac1f"),a("5319"),a("d3b7"),a("25f0"),a("a434"),a("c740"),a("a15b"),[{cat:["hp"],name:"能量再生",cost:10,effect:{hp:15}},{cat:["hp"],name:"進化能量再生",cost:20,effect:{hp:25}},{cat:["hp"],name:"強化能量再生",cost:35,effect:{hp:40}},{cat:["tgh","hp"],name:"守衛",cost:15,effect:{hp:8,tgh:1}},{cat:["tgh","hp"],name:"野獸",cost:15,effect:{hp:8,str:1}},{cat:["tec","hp"],name:"遊俠",cost:15,effect:{hp:8,tec:1}},{cat:["wlk","hp"],name:"坦克",cost:15,effect:{hp:8,wlk:1}},{cat:["fly","hp"],name:"飛鷹",cost:15,effect:{hp:8,fly:1}},{cat:["tgh","hp"],name:"高級守衛",cost:40,effect:{hp:25,tgh:2}},{cat:["tgh","hp"],name:"高級野獸",cost:40,effect:{hp:25,str:2}},{cat:["tec","hp"],name:"高級遊俠",cost:40,effect:{hp:25,tec:2}},{cat:["wlk","hp"],name:"高級坦克",cost:40,effect:{hp:25,wlk:2}},{cat:["fly","hp"],name:"高級飛鷹",cost:40,effect:{hp:25,fly:2}},{cat:["str","tec"],name:"突擊",cost:15,effect:{str:1,tec:1}},{cat:["str","tec"],name:"高級突擊",cost:35,effect:{str:2,tec:2}},{cat:["wlk","fly"],name:"高速",cost:15,effect:{wlk:1,fly:1}},{cat:["wlk","fly"],name:"高級高速",cost:35,effect:{wlk:2,fly:2}},{cat:["tgh"],name:"體質能源",cost:5,effect:{tgh:1}},{cat:["tgh"],name:"高級體質能源",cost:15,effect:{tgh:2}},{cat:["tgh"],name:"高級體質能源α",cost:10,effect:{tgh:2,wlk:-1}},{cat:["tgh"],name:"高級體質能源β",cost:10,effect:{tgh:2,fly:-1}},{cat:["tgh"],name:"高級體質能源γ",cost:5,effect:{tgh:2,wlk:-1,fly:-1}},{cat:["tgh"],name:"頂級體質能源",cost:30,effect:{tgh:3}},{cat:["tgh"],name:"頂級體質能源α",cost:20,effect:{tgh:3,wlk:-1,fly:-1}},{cat:["tgh"],name:"頂級體質能源β",cost:10,effect:{tgh:3,str:-1,tec:-1,fly:-1,wlk:-1}},{cat:["str"],name:"力之能源",cost:5,effect:{str:1}},{cat:["str"],name:"高級力之能源",cost:15,effect:{str:2}},{cat:["str"],name:"高級力之能源α",cost:10,effect:{str:2,tec:-1}},{cat:["str"],name:"高級力之能源β",cost:5,effect:{str:2,tec:-1,wlk:-1}},{cat:["str"],name:"高級力之能源γ",cost:5,effect:{str:2,tec:-1,fly:-1}},{cat:["str"],name:"頂級力之能源",cost:30,effect:{str:3}},{cat:["str"],name:"頂級力之能源α",cost:20,effect:{str:3,tec:-1,wlk:-1}},{cat:["str"],name:"頂級力之能源β",cost:20,effect:{str:3,tec:-1,fly:-1}},{cat:["str"],name:"頂級力之能源γ",cost:10,effect:{str:3,tec:-1,wlk:-1,fly:-1,tgh:-1}},{cat:["tec"],name:"技之能源",cost:5,effect:{tec:1}},{cat:["tec"],name:"高級技之能源",cost:15,effect:{tec:2}},{cat:["tec"],name:"高級技之能源α",cost:10,effect:{tec:2,str:-1}},{cat:["tec"],name:"高級技之能源β",cost:5,effect:{tec:2,str:-1,wlk:-1}},{cat:["tec"],name:"高級技之能源γ",cost:5,effect:{tec:2,str:-1,fly:-1}},{cat:["tec"],name:"頂級技之能源",cost:30,effect:{tec:3}},{cat:["tec"],name:"頂級技之能源α",cost:20,effect:{tec:3,str:-1,wlk:-1}},{cat:["tec"],name:"頂級技之能源β",cost:20,effect:{tec:3,str:-1,fly:-1}},{cat:["tec"],name:"頂級技之能源γ",cost:10,effect:{tec:3,str:-1,wlk:-1,fly:-1,tgh:-1}},{cat:["wlk"],name:"動之能源",cost:5,effect:{wlk:1}},{cat:["wlk"],name:"高級動之能源",cost:15,effect:{wlk:2}},{cat:["wlk"],name:"高級動之能源α",cost:10,effect:{wlk:2,fly:-1}},{cat:["wlk"],name:"高級動之能源β",cost:5,effect:{wlk:2,str:-1,fly:-1}},{cat:["wlk"],name:"高級動之能源γ",cost:5,effect:{wlk:2,tec:-1,fly:-1}},{cat:["wlk"],name:"頂級動之能源",cost:30,effect:{wlk:3}},{cat:["wlk"],name:"頂級動之能源α",cost:20,effect:{wlk:3,str:-1,fly:-1}},{cat:["wlk"],name:"頂級動之能源β",cost:20,effect:{wlk:3,tec:-1,fly:-1}},{cat:["wlk"],name:"頂級動之能源γ",cost:10,effect:{wlk:3,str:-1,tec:-1,fly:-1,tgh:-1}},{cat:["fly"],name:"飛行能源",cost:5,effect:{fly:1}},{cat:["fly"],name:"高級飛行能源",cost:15,effect:{fly:2}},{cat:["fly"],name:"高級飛行能源α",cost:10,effect:{fly:2,wlk:-1}},{cat:["fly"],name:"高級飛行能源β",cost:5,effect:{fly:2,str:-1,wlk:-1}},{cat:["fly"],name:"高級飛行能源γ",cost:5,effect:{fly:2,tec:-1,wlk:-1}},{cat:["fly"],name:"頂級飛行能源",cost:30,effect:{fly:3}},{cat:["fly"],name:"頂級飛行能源α",cost:20,effect:{fly:3,str:-1,wlk:-1}},{cat:["fly"],name:"頂級飛行能源β",cost:20,effect:{fly:3,tec:-1,wlk:-1}},{cat:["fly"],name:"頂級飛行能源γ",cost:10,effect:{fly:3,str:-1,tec:-1,wlk:-1,tgh:-1}},{cat:["other"],name:"永恆之光",cost:5,effect:{}},{cat:["other","hp"],name:"高等永恆之光",cost:15,effect:{hp:8}},{cat:["main"],name:"強力",cost:10,effect:{}},{cat:["main"],name:"高級強力",cost:25,effect:{}},{cat:["main"],name:"高級強力α",cost:20,effect:{}},{cat:["main"],name:"高級強力β",cost:20,effect:{}},{cat:["main"],name:"高級強力γ",cost:20,effect:{}},{cat:["main"],name:"頂級強力",cost:40,effect:{}},{cat:["main"],name:"頂級強力α",cost:30,effect:{}},{cat:["main"],name:"頂級強力β",cost:30,effect:{}},{cat:["main"],name:"頂級強力γ",cost:30,effect:{}},{cat:["main"],name:"頂級強力",cost:40,effect:{}},{cat:["main"],name:"頂級強力α",cost:30,effect:{}},{cat:["main"],name:"頂級強力β",cost:30,effect:{}},{cat:["main"],name:"頂級強力γ",cost:30,effect:{}},{cat:["main"],name:"射程",cost:5,effect:{}},{cat:["main"],name:"高級射程",cost:15,effect:{}},{cat:["main"],name:"高級射程α",cost:10,effect:{}},{cat:["main"],name:"高級射程β",cost:10,effect:{}},{cat:["main"],name:"頂級射程",cost:10,effect:{}},{cat:["main"],name:"頂級射程α",cost:20,effect:{}},{cat:["main"],name:"頂級射程β",cost:20,effect:{}},{cat:["main"],name:"疾速",cost:5,effect:{}},{cat:["main"],name:"高級疾速",cost:15,effect:{}},{cat:["main"],name:"高級疾速α",cost:10,effect:{}},{cat:["main"],name:"高級疾速β",cost:10,effect:{}},{cat:["main"],name:"頂級疾速",cost:30,effect:{}},{cat:["main"],name:"頂級疾速α",cost:20,effect:{}},{cat:["main"],name:"頂級疾速β",cost:20,effect:{}},{cat:["main"],name:"補給",cost:5,effect:{}},{cat:["main"],name:"高級補給",cost:15,effect:{}},{cat:["main"],name:"高級補給α",cost:10,effect:{}},{cat:["main"],name:"高級補給β",cost:10,effect:{}},{cat:["main"],name:"頂級補給",cost:30,effect:{}},{cat:["main"],name:"頂級補給α",cost:20,effect:{}},{cat:["main"],name:"頂級補給β",cost:20,effect:{}},{cat:["main"],name:"空戰",cost:20,effect:{}},{cat:["main"],name:"高級空戰",cost:45,effect:{}},{cat:["main"],name:"射手",cost:20,effect:{}},{cat:["main"],name:"高級射手",cost:45,effect:{}},{cat:["main"],name:"麻痺",cost:25,effect:{}},{cat:["sub"],name:"劍鬥士",cost:20,effect:{}},{cat:["sub"],name:"高級劍鬥士",cost:45,effect:{}},{cat:["sub"],name:"格鬥家",cost:10,effect:{}},{cat:["sub"],name:"高級格鬥家",cost:25,effect:{}},{cat:["sub"],name:"高級格鬥家α",cost:20,effect:{}},{cat:["sub"],name:"頂級格鬥家",cost:40,effect:{}},{cat:["sub"],name:"頂級格鬥家α",cost:30,effect:{}}]),l={hp:"HP",str:"STR",tec:"TEC",wlk:"WLK",fly:"FLY",tgh:"TGH",capa:"初始容量",slot:"初始孔數",other:"其他",main:"主武器",sub:"副武器"},r=a("1ad9"),m={name:"Simulator",components:{},data:function(){return{defaultStat:{hp:0,str:0,tec:0,wlk:0,fly:0,tgh:0,slot:0,capa:0},tabs:[],tab:0,mod:[],computedOptions:[],ready:!1,storageUsed:!1,initialized:!1}},watch:{tab:function(t,e){if(this.storageUsed){this.initialized&&(window.localStorage.setItem("cb-build-"+this.tabs[e].id,JSON.stringify({stat:this.defaultStat,mod:this.mod,name:this.tabs[e].name})),console.log("Loaded build "+this.tabs[e].name));var a=this.tabs[t].id,c=window.localStorage.getItem("cb-build-"+a);if(c){var n=JSON.parse(c),s=n.stat,o=n.mod;this.defaultStat=this.deepCopy(s),this.mod=this.deepCopy(o),console.log("Loaded build "+this.tabs[t].name)}window.localStorage.setItem("cb-build-tab-index",t),this.initialized=!0}}},computed:{cat:function(){return l},flattenedOptions:function(){return i},finalData:function(){var t=this,e=this.deepCopy(this.defaultStat);return this.mod.forEach((function(a){var c=t.findOptionByName(a.key);c&&(e["capa"]-=c.cost*a.num,e["slot"]-=a.num,Object.keys(c.effect).forEach((function(t){e[t]+=c.effect[t]*a.num})))})),e}},methods:{initData:function(){if(window.localStorage){console.log("localStorage enabled."),this.storageUsed=!0;var t=window.localStorage.getItem("cb-build-tab-index");t?(this.tab=parseInt(t),console.log("Tab index detected, changed to "+t)):(this.tab=0,console.log("Tab index not detected, changed to 0"));var e=Object.keys(window.localStorage).filter((function(t){return t.includes("cb-build")&&"cb-build-tab-index"!==t}));if(console.log("Found "+e.length+" set of build in localStorage"),e.length>0){this.tabs=e.map((function(t){var e=window.localStorage.getItem(t);if(e){var a=JSON.parse(e),c=a.name,n=t.replace("cb-build-","");return{id:n,name:c}}return null})),"undefined"===typeof this.tabs[this.tab]&&(this.tab=0);var a=this.tabs[this.tab].id,c=window.localStorage.getItem("cb-build-"+a);if(c){var n=JSON.parse(c),s=n.stat,o=n.mod;this.defaultStat=this.deepCopy(s),this.mod=this.deepCopy(o),console.log("Loaded build "+this.tabs[this.tab].name)}}else{var f=this.uuid();this.tabs=[{id:f,name:"New Build 1"}],this.tab=0}}else this.storageUsed=!1,this.onErrorStorage()},deepCopy:function(t){return JSON.parse(JSON.stringify(t))},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"==t?e:3&e|8;return a.toString(16)}))},onAddMod:function(){this.mod.splice(this.mod.length,0,this.deepCopy(r))},onDeleteMod:function(t){this.mod.splice(t,1)},findOptionByName:function(t){var e=this.flattenedOptions.findIndex((function(e){return e.name===t}));return-1!==e?this.flattenedOptions[e]:null},options:function(){var t=this,e=[];return i.forEach((function(a){a.cat.forEach((function(c){var n=e.findIndex((function(e){return e.label===t.cat[c]}));-1===n&&e.push({label:t.cat[c],options:[]});var s=e.findIndex((function(e){return e.label===t.cat[c]})),o=["cost "+a.cost];Object.keys(a.effect).forEach((function(t){var e=a.effect[t]<0?a.effect[t]:"+"+a.effect[t];o.push(t+e)})),e[s].options.push({text:a.name+" ("+o.join(" ,")+")",value:a.name})}))})),e},onErrorStorage:function(){this.$bvToast.toast("你的瀏覽器不支持LocalStorage，無法儲存配置。",{variant:"danger",solid:!0})},onClickTab:function(t){this.tab=t},onAddTab:function(){var t=this.uuid(),e="New Build "+(this.tabs.length+1);this.tabs.splice(this.tabs.length,0,{name:e,id:t}),this.tab=this.tabs.length-1,this.onClearData()},onSave:function(){this.storageUsed?(window.localStorage.setItem("cb-build-"+this.tabs[this.tab].id,JSON.stringify({stat:this.defaultStat,mod:this.mod,name:this.tabs[this.tab].name})),this.$bvToast.toast("已儲存配置",{variant:"primary",solid:!0,"auto-hide-delay":1e3,toaster:"b-toaster-bottom-right"})):this.onErrorStorage()},onClearData:function(){this.defaultStat={hp:0,str:0,tec:0,wlk:0,fly:0,tgh:0,slot:0,capa:0},this.mod=[]},onDeleteTab:function(t){window.localStorage.removeItem("cb-build-"+this.tabs[t].id),this.tabs.splice(t,1),this.tab=0;var e=0,a=this.tabs[e].id,c=window.localStorage.getItem("cb-build-"+a);if(c){var n=JSON.parse(c),s=n.stat,o=n.mod;this.defaultStat=this.deepCopy(s),this.mod=this.deepCopy(o),console.log("Loaded build "+this.tabs[e].name)}}},mounted:function(){var t=this;this.initData(),this.$nextTick((function(){t.computedOptions=t.deepCopy(t.options()),t.ready=!0}))}},d=m,u=(a("4d26"),a("2877")),h=Object(u["a"])(d,o,f,!1,null,"b434bc70",null),b=h.exports,p={name:"App",components:{Simulator:b}},y=p,g=Object(u["a"])(y,n,s,!1,null,null,null),v=g.exports,w=a("5f5b");a("f9e3"),a("2dd8"),a("15f5");c["default"].config.productionTip=!1,c["default"].use(w["a"]),new c["default"]({render:function(t){return t(v)}}).$mount("#app")},"8db4":function(t,e,a){}});
//# sourceMappingURL=main.01a6ab42.js.map