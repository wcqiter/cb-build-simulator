(function(t){function e(e){for(var c,o,i=e[0],f=e[1],r=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(t[c]=f[c]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],c=!0,i=1;i<a.length;i++){var f=a[i];0!==s[f]&&(c=!1)}c&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var c={},s={main:0},n=[];function o(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=c,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(a,c,function(e){return t[e]}.bind(null,c));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cb-build-simulator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=e,i=i.slice();for(var r=0;r<i.length;r++)e(i[r]);var l=f;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04cd":function(t){t.exports=JSON.parse('{"hp":0,"str":0,"tec":0,"wlk":0,"fly":0,"tgh":0,"slot":0,"capa":0,"cost":0,"type":"lnd","capaType":"type1","weaponUsed":false,"weaponType":"type1"}')},"120a":function(t){t.exports=JSON.parse('[{"date":"2021/4/14","version":"v1.1.2-rev1","content":["添加爬升之力","修改容量顯示方式","修復輸出為TXT時CAPA錯誤的數值"]},{"date":"2021/4/14","version":"v1.1.2","content":["添加輸出為TXT功能"]},{"date":"2021/4/14","version":"v1.1.1","content":["添加外置插卡","更改顯示樣式"]},{"date":"2021/4/14","version":"v1.1.0","content":["添加強化卡片功能"]},{"date":"2021/4/13","version":"v1.0.4","content":["修復添加新配置時會清掉舊配置的錯誤"]},{"date":"2021/4/13","version":"v1.0.3","content":["修復野獸的數據"]},{"date":"2021/4/12","version":"v1.0.2","content":["修復高級野獸等數據"]},{"date":"2021/4/12","version":"v1.0.1","content":["增加強化類別，避免打開強化項目的時候卡頓","添加更新歷程"]},{"date":"2021/4/12","version":"v1.0.0","content":["初始版本"]}]')},"1ad9":function(t){t.exports=JSON.parse('{"cat":"","key":"","num":1}')},"336a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100vh",display:"flex","flex-direction":"column"},attrs:{id:"app"}},[a("div",{staticStyle:{flex:"1"}},[a("div",{staticClass:"app-content"},[a("Simulator")],1)]),a("div",{staticClass:"ml-2 mr-2"},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",[a("small",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.modalShow=!0}}},[t._v(t._s(t.latestVersion))])])]),a("b-col",{staticStyle:{"text-align":"right"}},[a("small",{staticClass:"mr-2"},[t._v("Powered by 天虹@BRD")]),a("a",{attrs:{target:"_blank",href:"https://github.com/wcqiter/cb-build-simulator/issues"}},[a("i",{staticClass:"fab fa-github"})])])],1)],1),a("b-modal",{attrs:{"hide-footer":"",title:"更新歷程"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},t._l(t.version,(function(e,c){return a("div",{key:c},[a("h5",[t._v(t._s(e.version))]),a("small",[t._v(t._s(e.date))]),a("ul",t._l(e.content,(function(e,c){return a("li",{key:c},[t._v(" "+t._s(e)+" ")])})),0)])})),0)],1)},n=[],o=a("120a"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ready?a("div",[a("b-navbar",{attrs:{type:"dark",variant:"secondary"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("CBU Simulator")]),t.storageUsed?a("b-navbar-nav",[t._l(t.tabs,(function(e,c){return a("b-nav-item",{key:"tab-"+c,attrs:{href:"#",active:t.tab===e.id},on:{click:function(a){return t.onClickTab(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),a("b-nav-item",{attrs:{href:"#"},on:{click:t.onAddTab}},[a("i",{staticClass:"fa fa-plus"})])],2):t._e()],1),a("div",{staticClass:"whole-panel"},[a("b-container",{attrs:{fluid:""}},[a("b-row",{staticClass:"mt-4 mb-2"},[a("div",{staticClass:"col-md-4 content-panel"},[a("b-card",{staticClass:"mb-2"},[a("div",[t.storageUsed?a("b-form-group",{attrs:{label:"配置名稱","label-cols":"3"}},[a("b-form-input",{model:{value:t.tabs[t.findTabIndexById(t.tab)].name,callback:function(e){t.$set(t.tabs[t.findTabIndexById(t.tab)],"name",e)},expression:"tabs[findTabIndexById(tab)].name"}})],1):t._e()],1),t.storageUsed?a("div",{staticClass:"mt-2",staticStyle:{"text-align":"center"}},[a("b-button",{attrs:{variant:"primary"},on:{click:t.onSave}},[a("i",{staticClass:"fa fa-save"}),t._v(" 儲存 ")]),a("b-button",{staticClass:"ml-2",attrs:{variant:"success"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onExportAsTxt()}}},[a("i",{staticClass:"fa fa-download"}),t._v(" 儲存為TXT文件 ")]),t.tabs.length>1?a("b-button",{staticClass:"ml-2",attrs:{variant:"danger"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.onDeleteTab(t.findTabIndexById(t.tab))}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" 刪除配置 ")]):t._e()],1):t._e()]),a("b-card",{staticClass:"mb-2"},[a("h5",{staticClass:"mb-2"},[t._v("機體基本資料")]),a("b-form-group",[a("b-form-radio-group",{attrs:{size:"sm",options:t.typeOptions},model:{value:t.defaultStat.type,callback:function(e){t.$set(t.defaultStat,"type",e)},expression:"defaultStat.type"}})],1),a("b-form-group",{attrs:{label:"戰力卡類別","label-cols-md":"4"}},[a("b-form-select",{attrs:{size:"sm",options:t.capaTypeOptions},model:{value:t.defaultStat.capaType,callback:function(e){t.$set(t.defaultStat,"capaType",e)},expression:"defaultStat.capaType"}})],1),a("b-form-group",[a("b-form-checkbox",{attrs:{size:"sm","checked-value":!0,"unchecked-value":!1},model:{value:t.defaultStat.weaponUsed,callback:function(e){t.$set(t.defaultStat,"weaponUsed",e)},expression:"defaultStat.weaponUsed"}},[t._v(" 有核心強化 ")])],1),t.defaultStat.weaponUsed?a("b-form-group",{attrs:{label:"核心卡類別","label-cols-md":"4"}},[a("b-form-select",{attrs:{size:"sm",options:t.weaponTypeOptions},model:{value:t.defaultStat.weaponType,callback:function(e){t.$set(t.defaultStat,"weaponType",e)},expression:"defaultStat.weaponType"}})],1):t._e()],1),a("b-card",{staticClass:"mb-2"},[a("h5",{staticClass:"mb-2"},[t._v("機體數值")]),a("div",{staticStyle:{overflow:"auto"}},[a("table",{attrs:{border:"1"}},[a("tr",[a("td",{staticClass:"text-center"},[t._v(t._s(t.cat["capa"]))]),t.hideStatDetails?t._e():a("td",{staticClass:"input-td"},[a("b-form-input",{staticClass:"input-field",attrs:{type:"number",size:"sm",min:0},model:{value:t.defaultStat["cost"],callback:function(e){t.$set(t.defaultStat,"cost",t._n(e))},expression:"defaultStat['cost']"}})],1),t.hideStatDetails?t._e():a("td",{staticClass:"text-center",staticStyle:{"min-width":"50px"}},[t._v("+ "+t._s(t.deltaData["cost"])+" /")]),t.hideStatDetails?t._e():a("td",{staticClass:"input-td"},[a("b-form-input",{staticClass:"input-field",attrs:{type:"number",size:"sm",min:0},model:{value:t.defaultStat["capa"],callback:function(e){t.$set(t.defaultStat,"capa",t._n(e))},expression:"defaultStat['capa']"}})],1),t.hideStatDetails?t._e():a("td",{staticClass:"text-center",staticStyle:{"min-width":"50px"}},[t._v("+ "+t._s(t.deltaData["capa"])+" /")]),t.hideStatDetails?a("td",{staticClass:"text-center"},[a("b",[t._v(t._s(t.defaultStat["cost"]+t.deltaData["cost"])+" / "+t._s(t.defaultStat["capa"]+t.deltaData["capa"]))])]):a("td",{staticClass:"text-center"},[t._v("= "),a("b",[t._v(t._s(t.finalData["finalCapa"]))])])]),a("tr",[a("td",{staticClass:"text-center"},[t._v(t._s(t.cat["slot"]))]),t.hideStatDetails?t._e():a("td",{staticClass:"input-td",attrs:{colspan:"3"}},[a("b-form-input",{staticClass:"input-field",attrs:{type:"number",size:"sm",min:0},model:{value:t.defaultStat["slot"],callback:function(e){t.$set(t.defaultStat,"slot",t._n(e))},expression:"defaultStat['slot']"}})],1),t.hideStatDetails?t._e():a("td",{staticClass:"text-center"},[t._v("− "+t._s(t.deltaData["slot"]))]),a("td",{staticClass:"text-center"},[t.hideStatDetails?t._e():a("span",[t._v("= ")]),a("b",[t._v(t._s(t.finalData["slot"]))])])]),t._l(t.basicStatKeys,(function(e,c){return a("tr",{key:c},[a("td",{staticClass:"text-center"},[t._v(t._s(t.cat[e]))]),t.hideStatDetails?t._e():a("td",{staticClass:"input-td",attrs:{colspan:"3"}},[a("b-form-input",{staticClass:"input-field",attrs:{type:"number",size:"sm",min:0},model:{value:t.defaultStat[e],callback:function(a){t.$set(t.defaultStat,e,t._n(a))},expression:"defaultStat[key]"}})],1),t.hideStatDetails?t._e():a("td",{staticClass:"text-center"},[t._v(t._s(t.deltaData[e]>=0?"+":"-")+" "+t._s(Math.abs(t.deltaData[e])))]),a("td",{staticClass:"text-center"},[t.hideStatDetails?t._e():a("span",[t._v("= ")]),a("b",[t._v(t._s(t.finalData[e]))])])])}))],2)]),a("b-button",{staticClass:"mt-1",attrs:{size:"sm",variant:t.hideStatDetails?"outline-primary":"outline-danger",block:""},on:{click:function(e){t.hideStatDetails=!t.hideStatDetails}}},[a("i",{staticClass:"fa",class:t.hideStatDetails?"fa-plus":"fa-minus"}),t._v(" "+t._s(t.hideStatDetails?"顯示詳細":"隱藏詳細")+" ")])],1)],1),a("div",{staticClass:"col-md-5 content-panel"},[a("b-card",[a("h5",{staticClass:"mb-2"},[t._v("機體強化項目")]),a("div",{staticClass:"mb-2 mt-2"},[a("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onAddMod}},[a("i",{staticClass:"fa fa-plus"}),t._v(" 新強化項目 ")])],1),t._l(t.mod,(function(e,c){return a("div",{key:c,staticStyle:{display:"flex"}},[a("div",{staticClass:"mr-2",staticStyle:{padding:"0.25rem"}},[a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.onDeleteMod(c)}}},[a("i",{staticClass:"fa fa-trash"})])],1),a("b-row",{staticStyle:{flex:"1"}},[a("b-form-group",{staticClass:"col-3",attrs:{label:"強化類別"}},[a("b-select",{attrs:{size:"sm",options:t.catOptions},model:{value:t.mod[c].cat,callback:function(e){t.$set(t.mod[c],"cat",e)},expression:"mod[i].cat"}})],1),a("b-form-group",{staticClass:"col-5",attrs:{label:"強化項目"}},[t.mod[c].cat?a("b-form-select",{attrs:{size:"sm",options:t.options[t.mod[c].cat]},model:{value:t.mod[c].key,callback:function(e){t.$set(t.mod[c],"key",e)},expression:"mod[i].key"}}):a("b-form-input",{attrs:{plaintext:"",size:"sm",value:"<= 先選擇類別"}})],1),a("b-form-group",{staticClass:"col-4",attrs:{label:"數量"}},[a("b-form-input",{attrs:{size:"sm",type:"number"},model:{value:t.mod[c].num,callback:function(e){t.$set(t.mod[c],"num",t._n(e))},expression:"mod[i].num"}})],1)],1)],1)}))],2)],1),a("div",{staticClass:"col-md-3 content-panel"},[a("b-card",{staticClass:"mb-2"},[a("div",{staticClass:"pull-right"},[a("table",[a("tr",[a("td",{staticClass:"text-center td-small-padding"},[a("small",[t._v("機體等級")])])]),a("tr",[a("td",{staticClass:"text-center td-small-padding"},[t._v(t._s(t.level)+" / 10")])])])]),a("h5",{staticClass:"mb-2"},[t._v("機體強化卡片")]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"mb-2"},[t._l(t.findCardByType("capa").num,(function(e){return a("b-button",{key:"capa-"+e,staticClass:"mr-1 mb-1 card-all",class:t.capaCards[e-1]?"card-capa-active":"card-capa",attrs:{size:"sm",variant:"success",disabled:t.isLevelMaxed&&!t.capaCards[e-1],block:""},on:{click:function(a){return t.onClickCapaCards(e-1)}}},[a("b-row",{attrs:{"no-gutters":""}},[a("small",{staticClass:"col-4 text-left"},[t._v("CAPA "+t._s(t.findCardByType("capa").effect[t.defaultStat["capaType"]].capa)+", HP "+t._s(t.findCardByType("capa").effect[t.defaultStat["capaType"]].hp))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(t.findCardByType("capa").name))]),a("small",{staticClass:"col-4 text-right"},[t._v("COST "+t._s(t.findCardByType("capa").effect[t.defaultStat["capaType"]].cost))])])],1)})),a("div",[a("small")])],2),t.defaultStat.weaponUsed?a("div",{staticClass:"mb-2"},t._l(t.findCardByType("weapon").num,(function(e){return a("b-button",{key:"weapon-"+e,staticClass:"mr-1 mb-1 card-all",class:t.weaponCards[e-1]?"card-weapon-active":"card-weapon",attrs:{size:"sm",variant:"danger",disabled:t.isLevelMaxed&&!t.weaponCards[e-1],block:""},on:{click:function(a){return t.onClickWeaponCards(e-1)}}},[a("b-row",{attrs:{"no-gutters":""}},[a("small",{staticClass:"col-4 text-left"},[t._v("CAPA "+t._s(t.findCardByType("weapon").effect[t.defaultStat["weaponType"]].capa)+", HP "+t._s(t.findCardByType("weapon").effect[t.defaultStat["weaponType"]].hp))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(t.findCardByType("weapon").name))]),a("small",{staticClass:"col-4 text-right"},[t._v("COST "+t._s(t.findCardByType("weapon").effect[t.defaultStat["weaponType"]].cost))])])],1)})),1):t._e(),a("div",{staticClass:"mb-2"},t._l(t.defenseCardOptions,(function(e,c){return a("b-button",{key:"card-"+c,staticClass:"mr-1 mb-1 card-all",class:t.cards.includes(e.name)?"card-defense-active":"card-defense",attrs:{size:"sm",variant:"primary",disabled:t.isLevelMaxed&&!t.cards.includes(e.name),block:""},on:{click:function(a){return t.onClickCards(e.name)}}},[a("b-row",{attrs:{"no-gutters":""}},[a("small",{staticClass:"col-4 text-left"}),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.name))]),a("small",{staticClass:"col-4 text-right"},[t._v("COST "+t._s(e.effect[t.defaultStat["type"]].cost))])])],1)})),1),a("div",{staticClass:"mb-2"},t._l(t.moveCardOptions,(function(e,c){return a("b-button",{key:"card-"+c,staticClass:"mr-1 mb-1 card-all",class:t.cards.includes(e.name)?"card-move-active":"card-move",attrs:{size:"sm",variant:"warning",disabled:t.isLevelMaxed&&!t.cards.includes(e.name),block:""},on:{click:function(a){return t.onClickCards(e.name)}}},[a("b-row",{attrs:{"no-gutters":""}},[a("small",{staticClass:"col-4 text-left"}),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.name))]),a("small",{staticClass:"col-4 text-right"},[t._v("COST "+t._s(e.effect[t.defaultStat["type"]].cost))])])],1)})),1),a("div",{staticClass:"mb-2"},[t._l(t.otherCardOptions,(function(e,c){return a("b-button",{key:"card-"+c,staticClass:"mr-1 mb-1 card-all",class:t.cards.includes(e.name)?"card-other-active":"card-other",attrs:{size:"sm",variant:"secondary",disabled:t.isLevelMaxed&&!t.cards.includes(e.name),block:""},on:{click:function(a){return t.onClickCards(e.name)}}},[a("b-row",{attrs:{"no-gutters":""}},[a("small",{staticClass:"col-4 text-left"}),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.name))]),a("small",{staticClass:"col-4 text-right"},[t._v("COST "+t._s(e.effect[t.defaultStat["type"]].cost))])])],1)})),t._l(t.extraMoveCardOptions,(function(e,c){return a("b-button",{key:"card-"+c,staticClass:"mr-1 mb-1 card-all",class:t.extraCards.includes(e.name)?"card-move-active":"card-move",attrs:{size:"sm",variant:"warning",block:""},on:{click:function(a){return t.onClickExtraCards(e.name)}}},[a("b-row",{attrs:{"no-gutters":""}},[a("small",{staticClass:"col-4 text-left"},[t._v("外置插卡")]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.name))]),a("small",{staticClass:"col-4 text-right"},[t._v("COST "+t._s(e.effect[t.defaultStat["type"]].cost))])])],1)}))],2)])],1)])],1)],1)],1):t._e()},f=[],r=(a("b0c0"),a("d81d"),a("b64b"),a("159b"),a("a15b"),a("4de4"),a("caad"),a("2532"),a("c740"),a("ac1f"),a("5319"),a("d3b7"),a("25f0"),a("a434"),a("3ca3"),a("ddb0"),a("2b3d"),[{cat:["hp"],name:"能量再生",cost:10,effect:{hp:15}},{cat:["hp"],name:"強化能量再生",cost:20,effect:{hp:25}},{cat:["hp"],name:"進化能量再生",cost:35,effect:{hp:40}},{cat:["tgh","hp"],name:"守衛",cost:15,effect:{hp:8,tgh:1}},{cat:["str","hp"],name:"野獸",cost:15,effect:{hp:8,str:1}},{cat:["tec","hp"],name:"遊俠",cost:15,effect:{hp:8,tec:1}},{cat:["wlk","hp"],name:"坦克",cost:15,effect:{hp:8,wlk:1}},{cat:["fly","hp"],name:"飛鷹",cost:15,effect:{hp:8,fly:1}},{cat:["tgh","hp"],name:"高級守衛",cost:40,effect:{hp:25,tgh:2}},{cat:["str","hp"],name:"高級野獸",cost:35,effect:{hp:20,str:2,tec:-1}},{cat:["tec","hp"],name:"高級遊俠",cost:35,effect:{hp:20,tec:2,str:-1}},{cat:["wlk","hp"],name:"高級坦克",cost:35,effect:{hp:20,wlk:2,fly:-1}},{cat:["fly","hp"],name:"高級飛鷹",cost:35,effect:{hp:20,fly:2,wlk:-1}},{cat:["str","tec"],name:"突擊",cost:15,effect:{str:1,tec:1}},{cat:["str","tec"],name:"高級突擊",cost:35,effect:{str:2,tec:2}},{cat:["wlk","fly"],name:"高速",cost:15,effect:{wlk:1,fly:1}},{cat:["wlk","fly"],name:"高級高速",cost:35,effect:{wlk:2,fly:2}},{cat:["tgh"],name:"體質能源",cost:5,effect:{tgh:1}},{cat:["tgh"],name:"高級體質能源",cost:15,effect:{tgh:2}},{cat:["tgh"],name:"高級體質能源α",cost:10,effect:{tgh:2,wlk:-1}},{cat:["tgh"],name:"高級體質能源β",cost:10,effect:{tgh:2,fly:-1}},{cat:["tgh"],name:"高級體質能源γ",cost:5,effect:{tgh:2,wlk:-1,fly:-1}},{cat:["tgh"],name:"頂級體質能源",cost:30,effect:{tgh:3}},{cat:["tgh"],name:"頂級體質能源α",cost:20,effect:{tgh:3,wlk:-1,fly:-1}},{cat:["tgh"],name:"頂級體質能源β",cost:10,effect:{tgh:3,str:-1,tec:-1,fly:-1,wlk:-1}},{cat:["str"],name:"力之能源",cost:5,effect:{str:1}},{cat:["str"],name:"高級力之能源",cost:15,effect:{str:2}},{cat:["str"],name:"高級力之能源α",cost:10,effect:{str:2,tec:-1}},{cat:["str"],name:"高級力之能源β",cost:5,effect:{str:2,tec:-1,wlk:-1}},{cat:["str"],name:"高級力之能源γ",cost:5,effect:{str:2,tec:-1,fly:-1}},{cat:["str"],name:"頂級力之能源",cost:30,effect:{str:3}},{cat:["str"],name:"頂級力之能源α",cost:20,effect:{str:3,tec:-1,wlk:-1}},{cat:["str"],name:"頂級力之能源β",cost:20,effect:{str:3,tec:-1,fly:-1}},{cat:["str"],name:"頂級力之能源γ",cost:10,effect:{str:3,tec:-1,wlk:-1,fly:-1,tgh:-1}},{cat:["tec"],name:"技之能源",cost:5,effect:{tec:1}},{cat:["tec"],name:"高級技之能源",cost:15,effect:{tec:2}},{cat:["tec"],name:"高級技之能源α",cost:10,effect:{tec:2,str:-1}},{cat:["tec"],name:"高級技之能源β",cost:5,effect:{tec:2,str:-1,wlk:-1}},{cat:["tec"],name:"高級技之能源γ",cost:5,effect:{tec:2,str:-1,fly:-1}},{cat:["tec"],name:"頂級技之能源",cost:30,effect:{tec:3}},{cat:["tec"],name:"頂級技之能源α",cost:20,effect:{tec:3,str:-1,wlk:-1}},{cat:["tec"],name:"頂級技之能源β",cost:20,effect:{tec:3,str:-1,fly:-1}},{cat:["tec"],name:"頂級技之能源γ",cost:10,effect:{tec:3,str:-1,wlk:-1,fly:-1,tgh:-1}},{cat:["wlk"],name:"動之能源",cost:5,effect:{wlk:1}},{cat:["wlk"],name:"高級動之能源",cost:15,effect:{wlk:2}},{cat:["wlk"],name:"高級動之能源α",cost:10,effect:{wlk:2,fly:-1}},{cat:["wlk"],name:"高級動之能源β",cost:5,effect:{wlk:2,str:-1,fly:-1}},{cat:["wlk"],name:"高級動之能源γ",cost:5,effect:{wlk:2,tec:-1,fly:-1}},{cat:["wlk"],name:"頂級動之能源",cost:30,effect:{wlk:3}},{cat:["wlk"],name:"頂級動之能源α",cost:20,effect:{wlk:3,str:-1,fly:-1}},{cat:["wlk"],name:"頂級動之能源β",cost:20,effect:{wlk:3,tec:-1,fly:-1}},{cat:["wlk"],name:"頂級動之能源γ",cost:10,effect:{wlk:3,str:-1,tec:-1,fly:-1,tgh:-1}},{cat:["fly"],name:"飛行能源",cost:5,effect:{fly:1}},{cat:["fly"],name:"高級飛行能源",cost:15,effect:{fly:2}},{cat:["fly"],name:"高級飛行能源α",cost:10,effect:{fly:2,wlk:-1}},{cat:["fly"],name:"高級飛行能源β",cost:5,effect:{fly:2,str:-1,wlk:-1}},{cat:["fly"],name:"高級飛行能源γ",cost:5,effect:{fly:2,tec:-1,wlk:-1}},{cat:["fly"],name:"頂級飛行能源",cost:30,effect:{fly:3}},{cat:["fly"],name:"頂級飛行能源α",cost:20,effect:{fly:3,str:-1,wlk:-1}},{cat:["fly"],name:"頂級飛行能源β",cost:20,effect:{fly:3,tec:-1,wlk:-1}},{cat:["fly"],name:"頂級飛行能源γ",cost:10,effect:{fly:3,str:-1,tec:-1,wlk:-1,tgh:-1}},{cat:["other"],name:"永恆之光",cost:5,effect:{}},{cat:["other","hp"],name:"高等永恆之光",cost:15,effect:{hp:8}},{cat:["main"],name:"強力",cost:10,effect:{}},{cat:["main"],name:"高級強力",cost:25,effect:{}},{cat:["main"],name:"高級強力α",cost:20,effect:{}},{cat:["main"],name:"高級強力β",cost:20,effect:{}},{cat:["main"],name:"高級強力γ",cost:20,effect:{}},{cat:["main"],name:"頂級強力",cost:40,effect:{}},{cat:["main"],name:"頂級強力α",cost:30,effect:{}},{cat:["main"],name:"頂級強力β",cost:30,effect:{}},{cat:["main"],name:"頂級強力γ",cost:30,effect:{}},{cat:["main"],name:"頂級強力",cost:40,effect:{}},{cat:["main"],name:"頂級強力α",cost:30,effect:{}},{cat:["main"],name:"頂級強力β",cost:30,effect:{}},{cat:["main"],name:"頂級強力γ",cost:30,effect:{}},{cat:["main"],name:"射程",cost:5,effect:{}},{cat:["main"],name:"高級射程",cost:15,effect:{}},{cat:["main"],name:"高級射程α",cost:10,effect:{}},{cat:["main"],name:"高級射程β",cost:10,effect:{}},{cat:["main"],name:"頂級射程",cost:30,effect:{}},{cat:["main"],name:"頂級射程α",cost:20,effect:{}},{cat:["main"],name:"頂級射程β",cost:20,effect:{}},{cat:["main"],name:"疾速",cost:5,effect:{}},{cat:["main"],name:"高級疾速",cost:15,effect:{}},{cat:["main"],name:"高級疾速α",cost:10,effect:{}},{cat:["main"],name:"高級疾速β",cost:10,effect:{}},{cat:["main"],name:"頂級疾速",cost:30,effect:{}},{cat:["main"],name:"頂級疾速α",cost:20,effect:{}},{cat:["main"],name:"頂級疾速β",cost:20,effect:{}},{cat:["main"],name:"補給",cost:5,effect:{}},{cat:["main"],name:"高級補給",cost:15,effect:{}},{cat:["main"],name:"高級補給α",cost:10,effect:{}},{cat:["main"],name:"高級補給β",cost:10,effect:{}},{cat:["main"],name:"頂級補給",cost:30,effect:{}},{cat:["main"],name:"頂級補給α",cost:20,effect:{}},{cat:["main"],name:"頂級補給β",cost:20,effect:{}},{cat:["main"],name:"空戰",cost:20,effect:{}},{cat:["main"],name:"高級空戰",cost:45,effect:{}},{cat:["main"],name:"射手",cost:20,effect:{}},{cat:["main"],name:"高級射手",cost:45,effect:{}},{cat:["main"],name:"麻痺",cost:25,effect:{}},{cat:["sub"],name:"劍鬥士",cost:20,effect:{}},{cat:["sub"],name:"高級劍鬥士",cost:45,effect:{}},{cat:["sub"],name:"格鬥家",cost:10,effect:{}},{cat:["sub"],name:"高級格鬥家",cost:25,effect:{}},{cat:["sub"],name:"高級格鬥家α",cost:20,effect:{}},{cat:["sub"],name:"頂級格鬥家",cost:40,effect:{}},{cat:["sub"],name:"頂級格鬥家α",cost:30,effect:{}}]),l={hp:"HP",str:"STR",tec:"TEC",wlk:"WLK",fly:"FLY",tgh:"TGH",capa:"CAPA",slot:"SLOT",other:"其他",main:"主武器",sub:"副武器"},d={lnd:"陸",air:"空",art:"炮",msc:"輔"},p=[{type:"capa",name:"提升戰力值上限",effect:{type1:{cost:20,capa:75,hp:10},type2:{cost:20,capa:80,hp:14},type3:{cost:20,capa:80,hp:18},type4:{cost:25,capa:80,hp:14},type5:{cost:25,capa:85,hp:18},type6:{cost:25,capa:95,hp:25}},effectKey:"capaType",num:6},{type:"weapon",name:"強化武器",effect:{type1:{cost:30,capa:60,hp:15},type2:{cost:30,capa:65,hp:15},type3:{cost:35,capa:65,hp:15},type4:{cost:35,capa:70,hp:15}},effectKey:"weaponType",num:2},{type:"defense",name:"近戰防護",effect:{lnd:{cost:20},air:{cost:15}},effectKey:"type"},{type:"defense",name:"裝甲防護",effect:{lnd:{cost:20},air:{cost:30},art:{cost:20}},effectKey:"type"},{type:"defense",name:"光束防護",effect:{air:{cost:20},art:{cost:15}},effectKey:"type"},{type:"defense",name:"暴風防護",effect:{lnd:{cost:15},art:{cost:20}},effectKey:"type"},{type:"move",name:"緊急迴避",effect:{lnd:{cost:15},art:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"move",name:"高速移動",effect:{lnd:{cost:15},art:{cost:15},msc:{cost:20}},effectKey:"type"},{type:"move",name:"浮游衝刺",effect:{air:{cost:15},art:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"move",name:"短距跳躍",effect:{lnd:{cost:15},art:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"move",name:"安定降落",effect:{lnd:{cost:25},air:{cost:25},art:{cost:25},msc:{cost:25}},effectKey:"type"},{type:"move",name:"高速爬升",effect:{air:{cost:30},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"move",name:"突擊步伐",effect:{lnd:{cost:15}},effectKey:"type"},{type:"move",name:"噴射步伐",effect:{art:{cost:15}},effectKey:"type"},{type:"move",name:"滑翔噴射",effect:{air:{cost:15}},effectKey:"type"},{type:"move",name:"水中步行",effect:{lnd:{cost:10}},effectKey:"type"},{type:"move",name:"空中衝刺",effect:{air:{cost:30}},effectKey:"type"},{type:"move",name:"空中翻轉",effect:{air:{cost:30}},effectKey:"type"},{type:"other",name:"推進燃料",effect:{lnd:{cost:20},air:{cost:20},art:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"other",name:"爬升之力",effect:{air:{cost:20}},effectKey:"type"},{type:"other",name:"強硬突擊",effect:{lnd:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"other",name:"硬直回復",effect:{lnd:{cost:15},air:{cost:20},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"other",name:"EX防護",effect:{lnd:{cost:20},air:{cost:20},art:{cost:10},msc:{cost:10}},effectKey:"type"},{type:"other",name:"突擊移動",effect:{lnd:{cost:20},air:{cost:20},art:{cost:10},msc:{cost:20}},effectKey:"type"},{type:"other",name:"狙擊精準器",effect:{lnd:{cost:20},air:{cost:20},art:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"other",name:"反偵測系統",effect:{lnd:{cost:40},air:{cost:40},art:{cost:40},msc:{cost:40}},effectKey:"type"},{type:"other",name:"強化雷達",effect:{lnd:{cost:50},air:{cost:50},art:{cost:40},msc:{cost:30}},effectKey:"type"},{type:"other",name:"狀態異常抵抗",effect:{lnd:{cost:30},air:{cost:30},art:{cost:30},msc:{cost:20}},effectKey:"type"},{type:"other",name:"緩速抵抗",effect:{lnd:{cost:20},msc:{cost:20}},effectKey:"type"},{type:"other",name:"燃燒抵抗",effect:{lnd:{cost:20}},effectKey:"type"},{type:"other",name:"超效能散熱器",effect:{lnd:{cost:20}},effectKey:"type"},{type:"other",name:"緩衝撞擊",effect:{lnd:{cost:20},air:{cost:15},art:{cost:15},msc:{cost:20}},effectKey:"type"},{type:"other",name:"復仇槍擊",effect:{air:{cost:30},art:{cost:25},msc:{cost:25}},effectKey:"type"},{type:"other",name:"必殺值增加",effect:{lnd:{cost:30},air:{cost:30},msc:{cost:20}},effectKey:"type"},{type:"other",name:"必殺回復",effect:{msc:{cost:40}},effectKey:"type"},{type:"other",name:"落下充能",effect:{air:{cost:25}},effectKey:"type"},{type:"extra-move",name:"緊急迴避",effect:{lnd:{cost:30},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"extra-move",name:"短距跳躍",effect:{lnd:{cost:30},air:{cost:30},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"extra-move",name:"浮游衝刺",effect:{air:{cost:30},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"extra-move",name:"突擊墊步",effect:{lnd:{cost:30}},effectKey:"type"},{type:"extra-move",name:"滑翔噴射",effect:{air:{cost:30}},effectKey:"type"},{type:"extra-move",name:"推進墊步",effect:{art:{cost:30}},effectKey:"type"},{type:"extra-move",name:"空中衝刺",effect:{lng:{cost:30},air:{cost:30},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"extra-move",name:"空中翻轉",effect:{air:{cost:30}},effectKey:"type"},{type:"extra-move",name:"空中墊步",effect:{lng:{cost:30},air:{cost:30},art:{cost:30},msc:{cost:30}},effectKey:"type"},{type:"extra-move",name:"幻影迴避",effect:{air:{cost:30}},effectKey:"type"}],u=a("1ad9"),m=a("04cd"),y={name:"Simulator",components:{},data:function(){return{defaultStat:this.deepCopy(m),tabs:[],tab:0,mod:[],cards:[],extraCards:[],capaCards:[!1,!1,!1,!1,!1,!1],weaponCards:[!1,!1],computedOptions:[],ready:!1,storageUsed:!1,hideStatDetails:!1}},watch:{tab:function(t){if(this.storageUsed){var e=window.localStorage.getItem("cb-build-"+t);if(e){var a=JSON.parse(e);this.onLoadData(a),console.log("Loaded build "+this.tabs[this.findTabIndexById(t)].name)}else this.onClearData(),console.log("Cannot found build "+this.tabs[this.findTabIndexById(t)].name+", initialize new build.");window.localStorage.setItem("cb-build-tab-index",this.tabs[this.findTabIndexById(t)].id)}}},computed:{cat:function(){return l},flattenedOptions:function(){return r},basicStatKeys:function(){return["hp","str","tec","wlk","fly","tgh"]},typeOptions:function(){return Object.keys(d).map((function(t){return{text:d[t],value:t}}))},cardOptions:function(){return p},capaTypeOptions:function(){var t=this,e=[],a=this.findCardByType("capa");return a&&Object.keys(a.effect).forEach((function(c){var s=[];Object.keys(a.effect[c]).forEach((function(t){var e=a.effect[c][t]<0?a.effect[c][t]:"+"+a.effect[c][t];s.push(t+e)})),e.push({text:s.join(", "),value:c,effect:a.effect[t.defaultStat.capaType]})})),e},weaponTypeOptions:function(){var t=this,e=[],a=this.findCardByType("weapon");return a&&Object.keys(a.effect).forEach((function(c){var s=[];Object.keys(a.effect[c]).forEach((function(t){var e=a.effect[c][t]<0?a.effect[c][t]:"+"+a.effect[c][t];s.push(t+e)})),e.push({text:s.join(", "),value:c,effect:a.effect[t.defaultStat.weaponType]})})),e},defenseCardOptions:function(){var t=this;return this.cardOptions.filter((function(t){return"defense"===t.type})).filter((function(e){return!!Object.prototype.hasOwnProperty.call(e.effect,t.defaultStat[e.effectKey])}))},moveCardOptions:function(){var t=this;return this.cardOptions.filter((function(t){return"move"===t.type})).filter((function(e){return!!Object.prototype.hasOwnProperty.call(e.effect,t.defaultStat[e.effectKey])}))},otherCardOptions:function(){var t=this;return this.cardOptions.filter((function(t){return"other"===t.type})).filter((function(e){return!!Object.prototype.hasOwnProperty.call(e.effect,t.defaultStat[e.effectKey])}))},extraMoveCardOptions:function(){var t=this;return this.cardOptions.filter((function(t){return"extra-move"===t.type})).filter((function(e){return!!Object.prototype.hasOwnProperty.call(e.effect,t.defaultStat[e.effectKey])}))},level:function(){var t=this,e=this.capaCards.filter((function(t){return!0===t})).length,a=0;this.defaultStat.weaponUsed&&(a=this.weaponCards.filter((function(t){return!0===t})).length);var c=this.cards.filter((function(e){var a=t.findCardByName(e);return!!a&&!!Object.prototype.hasOwnProperty.call(a.effect,t.defaultStat[a.effectKey])})).length;return e+a+c},isLevelMaxed:function(){return this.level>=10},deltaData:function(){var t=this,e=Object.assign({},this.deepCopy(m));this.mod.forEach((function(a){var c=t.findOptionByName(a.key);c&&c.cat.includes(a.cat)&&(e["cost"]+=c.cost*a.num,e["slot"]+=a.num,Object.keys(c.effect).forEach((function(t){e[t]+=c.effect[t]*a.num})))}));var a=this.capaCards.filter((function(t){return!0===t})).length;if(Object.keys(this.capaCardEffect).forEach((function(c){e[c]+=t.capaCardEffect[c]*a})),this.defaultStat.weaponUsed){var c=this.weaponCards.filter((function(t){return!0===t})).length;Object.keys(this.weaponCardEffect).forEach((function(a){e[a]+=t.weaponCardEffect[a]*c}))}return this.cards.forEach((function(a){var c=t.findCardByName(a);c&&Object.prototype.hasOwnProperty.call(c.effect,t.defaultStat[c.effectKey])&&Object.keys(c.effect[t.defaultStat[c.effectKey]]).forEach((function(a){e[a]+=c.effect[t.defaultStat[c.effectKey]][a]}))})),this.extraCards.forEach((function(a){var c=t.findExtraCardByName(a);c&&Object.prototype.hasOwnProperty.call(c.effect,t.defaultStat[c.effectKey])&&Object.keys(c.effect[t.defaultStat[c.effectKey]]).forEach((function(a){e[a]+=c.effect[t.defaultStat[c.effectKey]][a]}))})),e},finalData:function(){var t=this,e=Object.assign({},this.deepCopy(m),this.deepCopy(this.defaultStat));return e["finalCapa"]=e["capa"]+this.deltaData["capa"]-e["cost"]-this.deltaData["cost"],e["slot"]=e["slot"]-this.deltaData["slot"],this.basicStatKeys.forEach((function(a){e[a]=e[a]+t.deltaData[a]})),e},catOptions:function(){var t=this,e=[];return r.forEach((function(a){a.cat.forEach((function(a){var c=e.findIndex((function(t){return t.value===a}));-1===c&&e.push({text:t.cat[a],value:a})}))})),e},options:function(){var t={};return this.catOptions.forEach((function(e){t[e.value]=[]})),r.forEach((function(e){var a=["cost "+e.cost];Object.keys(e.effect).forEach((function(t){var c=e.effect[t]<0?e.effect[t]:"+"+e.effect[t];a.push(t+c)})),e.cat.forEach((function(c){t[c].push({text:e.name+" ("+a.join(" ,")+")",value:e.name})}))})),t},capaCardEffect:function(){var t=this,e=this.capaTypeOptions.findIndex((function(e){return e.value===t.defaultStat.capaType}));return-1!=e?this.capaTypeOptions[e].effect:{}},weaponCardEffect:function(){var t=this,e=this.weaponTypeOptions.findIndex((function(e){return e.value===t.defaultStat.weaponType}));return-1!=e?this.weaponTypeOptions[e].effect:{}}},methods:{initData:function(){if(window.localStorage){console.log("localStorage enabled."),this.storageUsed=!0;var t=window.localStorage.getItem("cb-build-tab-index");t?(this.tab=t,console.log("Tab index detected, changed to "+t)):(this.tab=null,console.log("Tab index not detected, changed to 0"));var e=Object.keys(window.localStorage).filter((function(t){return t.includes("cb-build")&&"cb-build-tab-index"!==t}));if(console.log("Found "+e.length+" set of build in localStorage"),e.length>0){this.tabs=e.map((function(t){var e=window.localStorage.getItem(t);if(e){var a=JSON.parse(e),c=a.name,s=t.replace("cb-build-","");return{id:s,name:c}}return null})),"undefined"===typeof this.tabs[this.findTabIndexById(this.tab)]&&(this.tab=this.tabs[0].id);var a=this.tabs[this.findTabIndexById(this.tab)].id,c=window.localStorage.getItem("cb-build-"+a);if(c){var s=JSON.parse(c);this.onLoadData(s),console.log("Loaded build "+this.tabs[this.findTabIndexById(this.tab)].name)}}else{var n=this.uuid();this.tabs=[{id:n,name:"New Build 1"}],this.tab=this.tabs[0].id}}else this.storageUsed=!1,this.onErrorStorage()},onLoadData:function(t){var e=t.stat,a=t.mod;this.defaultStat=Object.assign({},this.deepCopy(m),this.deepCopy(e)),this.mod=this.deepCopy(a),Object.prototype.hasOwnProperty.call(t,"weaponCards")&&Array.isArray(t.weaponCards)?this.weaponCards=this.deepCopy(t.weaponCards):this.weaponCards=[!1,!1],Object.prototype.hasOwnProperty.call(t,"capaCards")&&Array.isArray(t.capaCards)?this.capaCards=this.deepCopy(t.capaCards):this.capaCards=[!1,!1,!1,!1,!1,!1],Object.prototype.hasOwnProperty.call(t,"extraCards")&&Array.isArray(t.extraCards)?this.extraCards=this.deepCopy(t.extraCards):this.extraCards=[],Object.prototype.hasOwnProperty.call(t,"cards")&&Array.isArray(t.cards)?this.cards=this.deepCopy(t.cards):this.cards=[]},deepCopy:function(t){return JSON.parse(JSON.stringify(t))},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"==t?e:3&e|8;return a.toString(16)}))},findTabIndexById:function(t){var e=this.tabs.findIndex((function(e){return e.id===t}));return-1!=e?e:0},onAddMod:function(){this.mod.splice(this.mod.length,0,this.deepCopy(u))},onDeleteMod:function(t){this.mod.splice(t,1)},findOptionByName:function(t){var e=this.flattenedOptions.findIndex((function(e){return e.name===t}));return-1!==e?this.flattenedOptions[e]:null},findCardByType:function(t){var e=p.findIndex((function(e){return e.type===t}));return-1!==e?p[e]:null},findCardByName:function(t){var e=p.findIndex((function(e){return e.name===t&&"extra-move"!==e.type}));return-1!==e?p[e]:null},findExtraCardByName:function(t){var e=p.findIndex((function(e){return e.name===t&&"extra-move"===e.type}));return-1!==e?p[e]:null},onErrorStorage:function(){this.$bvToast.toast("你的瀏覽器不支持LocalStorage，無法儲存配置。",{variant:"danger",solid:!0})},onClickTab:function(t){this.tab=t},onAddTab:function(){var t=this.uuid(),e="New Build "+(this.tabs.length+1);this.tabs.splice(this.tabs.length,0,{name:e,id:t}),this.tab=t,this.onClearData()},onSave:function(){this.storageUsed?(window.localStorage.setItem("cb-build-"+this.tabs[this.findTabIndexById(this.tab)].id,JSON.stringify({stat:Object.assign({},this.deepCopy(m),this.deepCopy(this.defaultStat)),mod:this.mod,name:this.tabs[this.findTabIndexById(this.tab)].name,capaCards:this.capaCards,weaponCards:this.weaponCards,cards:this.cards,extraCards:this.extraCards})),this.$bvToast.toast("已儲存配置",{variant:"primary",solid:!0,"auto-hide-delay":1e3,toaster:"b-toaster-bottom-right"})):this.onErrorStorage()},onClearData:function(){this.defaultStat=this.deepCopy(m),this.mod=[],this.cards=[],this.capaCards=[!1,!1,!1,!1,!1,!1],this.weaponCards=[!1,!1],this.extraCards=[]},onDeleteTab:function(t){window.localStorage.removeItem("cb-build-"+this.tabs[t].id),this.tabs.splice(t,1),this.tab=this.tabs[0].id;var e=0,a=this.tabs[e].id,c=window.localStorage.getItem("cb-build-"+a);if(c){var s=JSON.parse(c);this.onLoadData(s),console.log("Loaded build "+this.tabs[0].name)}},onClickCapaCards:function(t){!0===this.capaCards[t]?this.capaCards.splice(t,1,!1):this.capaCards.splice(t,1,!0)},onClickWeaponCards:function(t){!0===this.weaponCards[t]?this.weaponCards.splice(t,1,!1):this.weaponCards.splice(t,1,!0)},onClickCards:function(t){var e=this.cards.findIndex((function(e){return e===t}));-1!=e?this.cards.splice(e,1):this.cards.splice(this.cards.length,0,t)},onClickExtraCards:function(t){var e=this.extraCards.findIndex((function(e){return e===t}));-1!=e?this.extraCards.splice(e,1):this.extraCards.splice(this.extraCards.length,0,t)},onExportAsTxt:function(){var t=this,e="機體名稱："+this.tabs[this.findTabIndexById(this.tab)].name+"\n";e+="=================================\n機體類別：";var a=this.typeOptions.findIndex((function(e){return e.value===t.defaultStat.type}));-1!=a&&(e+=this.typeOptions[a].text),e+="\n機體等級："+this.level+"/10\n",e+="\n戰力卡類別：",a=this.capaTypeOptions.findIndex((function(e){return e.value===t.defaultStat.capaType})),-1!=a&&(e+=this.capaTypeOptions[a].text),this.defaultStat.weaponUsed&&(e+="\n核心卡類別：",a=this.weaponTypeOptions.findIndex((function(e){return e.value===t.defaultStat.weaponType})),-1!=a&&(e+=this.weaponTypeOptions[a].text),e+="\n"),e+="\n\n";var c=this.capaCards.filter((function(t){return!0===t})).length,s=this.weaponCards.filter((function(t){return!0===t})).length;e+="機體強化卡片\n=================================\n",c>0&&(e+=this.findCardByType("capa").name+" × "+c+"\n"),this.defaultStat.weaponUsed&&s>0&&(e+=this.findCardByType("weapon").name+" × "+s+"\n"),this.cards.forEach((function(a){e+=t.findCardByName(a).name+"\n"})),this.extraCards.forEach((function(a){e+=t.findExtraCardByName(a).name+"（外置插卡）\n"})),e+="\n\n",e+="機體數值\n=================================\n",this.basicStatKeys.forEach((function(a){e+=t.cat[a]+"："+t.finalData[a]+"\n"})),e+="CAPA："+(this.defaultStat["cost"]+this.deltaData["cost"])+"/"+(this.defaultStat["capa"]+this.deltaData["capa"])+"\n",e+="\n\n",e+="機體強化項目\n=================================\n",this.mod.forEach((function(t){e+=t.key+" × "+t.num+"\n"}));var n=document.createElement("a"),o=new Blob([e],{type:"text/plain"}),i=window.URL.createObjectURL(o);n.href=i,n.download=this.tabs[this.findTabIndexById(this.tab)].name,n.click(),window.URL.revokeObjectURL(i)}},mounted:function(){var t=this;this.initData(),this.$nextTick((function(){t.ready=!0}))}},h=y,b=(a("b7a3"),a("2877")),v=Object(b["a"])(h,i,f,!1,null,"97e2c3ae",null),C=v.exports,x={name:"App",components:{Simulator:C},data:function(){return{modalShow:!1}},computed:{version:function(){return o},latestVersion:function(){return o[0].version}}},w=x,S=(a("b568"),Object(b["a"])(w,s,n,!1,null,"48d890a0",null)),g=S.exports,k=a("5f5b");a("f9e3"),a("2dd8"),a("15f5");c["default"].config.productionTip=!1,c["default"].use(k["a"]),new c["default"]({render:function(t){return t(g)}}).$mount("#app")},b568:function(t,e,a){"use strict";a("336a")},b7a3:function(t,e,a){"use strict";a("fb4c")},fb4c:function(t,e,a){}});
//# sourceMappingURL=main.ba1f62d9.js.map