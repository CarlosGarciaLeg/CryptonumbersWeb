(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2d3b":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-row",{staticClass:" justify-center text-center  pa-0 ma-0 ",staticStyle:{width:"100%",background:"#1b1d22"}},[e("v-col",{staticClass:"pa-2 mt-0  ma-2 ",class:{"mt-0":t.$vuetify.breakpoint.xsOnly},attrs:{cols:"12",md:"12"}},[e("v-row",{staticClass:"pa-0 ma-0 mt-15 justify-center align-center "},[e("v-col",{staticClass:"ma-2 ",attrs:{cols:"12",md:"7",lg:"7"}},[e("v-row",[e("v-col",{class:{"text-right":t.$vuetify.breakpoint.smAndUp,"text-center":t.$vuetify.breakpoint.sxOnly},attrs:{cols:"12",sm:"6",lg:"6"}},[e("v-btn",{staticStyle:{"font-family":"Ubuntu",color:"white","font-size":"15px","text-transform":"unset !important"},style:t.showNumNFT?"border:1px solid white;":"",attrs:{elevation:"4",width:"216px","active-class":"btn--text ",color:t.showNumNFT?"#1b1d22":"#243ffa"},on:{click:function(s){return t.obtenerNumNFT()}}},[t._v(" Obtener Número NFT ")])],1),e("v-col",{staticClass:" pa-0 ma-0   ",class:{"text-left justify-start align-center d-flex":t.$vuetify.breakpoint.smAndUp,"text-center justify-center":t.$vuetify.breakpoint.sxOnly},attrs:{cols:"12",lg:"6",sm:"6"}},[e("v-btn",{staticStyle:{"font-family":"Roboto",color:"white","font-weight":"500","font-size":"14px","text-transform":"unset !important"},style:t.showNumNFT?"":"border:1px solid white;",attrs:{elevation:"4",width:"216px","active-class":"mr-10 btn_premiun",color:t.showNumNFT?"#243ffa":"#1b1d22"},on:{click:function(s){return t.obtenerNumPremium()}}},[t._v(" Premium ")])],1)],1)],1)],1),e("v-row",{staticClass:" justify-center pa-0 ma-0 ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:" ",attrs:{cols:"12",md:"6",lg:"6"}},[e("search-bar")],1)],1),e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:" text-left ",attrs:{cols:"12",md:"6",lg:"6"}},[e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:" text-left pa-0  ",attrs:{cols:"12",md:"11",lg:"11"}},[e("span",{staticClass:"white--text"},[t._v("Resultados:")]),e("v-divider",{staticClass:"mt-2",attrs:{color:"#818181"}})],1)],1)],1)],1),e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:" text-left ",attrs:{cols:"12",md:"6",lg:"6"}},[e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"11"}},[e("v-card",{staticClass:"El-nmero-que-busca pa-5 rounded",staticStyle:{border:"1px solid #ffa04d",color:"#1b1d22"},attrs:{elevation:"1",shaped:"",tile:"",dark:"",rounded:"",color:"#fff0e3"}},[e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:"pa-0 ma-0 justify-center d-flex text-center align-center",attrs:{cols:"2"}},[e("v-img",{attrs:{contain:"",width:"30",height:"30",src:a("a86b"),alt:"logo-blanco"}})],1),e("v-col",{staticClass:"pa-0  ma-0",attrs:{cols:"10"}},[t._v(" El número que busca ya ha sido registrado por otro usuario, realice otra búsqueda con un número diferente ")])],1)],1)],1)],1),t.showNumNFT?t._e():e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},t._l(t.tarjeta,(function(s,a){return e("v-col",{key:a,staticClass:" text-left pa-0 mt-5 ",attrs:{cols:"12",md:"11",lg:"11"}},[e("v-card",{staticClass:"elevation-5",staticStyle:{"border-radius":"2px"},attrs:{color:"#2d2d2d",dark:""}},[e("v-card-text",{staticClass:"card__modal--subHeader "},[e("v-row",{staticClass:"pa-0 ma-0 ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:"justify-center text-center ",staticStyle:{position:"relative"},attrs:{cols:"5",md:"5"}},[e("v-img",{staticClass:"mr-0 elevation-4 ",attrs:{src:s.src,alt:"logo-blanco"}})],1),e("v-col",{staticClass:" pa-0 ma-0",attrs:{cols:"7",md:"7"}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[s.status?t._e():e("span",{staticClass:"status--card__disponible Disponible"},[t._v("Disponible")]),s.status?e("span",{staticClass:"status--card__premiun Premiun"},[t._v("Premium")]):t._e(),e("v-list-item",{staticClass:"ma-0 pa-0  ",staticStyle:{width:"100%","text-align":"left"},attrs:{"three-line":""}},[e("v-list-item-content",{staticClass:"pa-2 ma-1 "},[e("v-list-item-title",{staticClass:"text--card__search"},[t._v(" Numero ")]),e("v-list-item-subtitle",{staticClass:"text--card__search white--text"},[t._v(" "+t._s(s.numero)+" ")]),e("div",{staticStyle:{"margin-top":"10px"}},[e("v-list-item-title",{staticClass:"text--card__search"},[t._v(" Estado ")]),e("v-list-item-subtitle",{staticClass:"text--card__search  white--text"},[t._v(" Este número está disponible ")])],1)],1)],1)],1),e("v-col",{attrs:{cols:"12"}},[e("v-list-item",{staticClass:"ma-0 pa-0  ",staticStyle:{width:"100%","text-align":"left"},attrs:{"three-line":""}},[e("v-list-item-content",{staticClass:"pa-2 ma-1 "},[e("div",{staticStyle:{"margin-top":"5px"}},[e("v-list-item-title",{staticClass:"text--card__search"},[t._v(" Preció: ")]),e("v-list-item-subtitle",{staticClass:"Precio--card__search  ",staticStyle:{color:"#00bd32"}},[t._v(" "+t._s(s.precio)+" ")]),e("v-btn",{staticClass:"rounded-5 mt-1  pa-0 ma-0 btn--search white--text ",staticStyle:{"font-family":"Roboto",color:"white","font-weight":"500","font-size":"14px","text-transform":"unset !important"},attrs:{color:"#0e41ff",width:"180"},on:{click:function(s){return t.activarModal()}}},[t._v(" Obtener ")])],1)])],1)],1)],1)],1)],1)],1)],1)],1)})),1),t.showNumNFT?e("v-row",{staticClass:" justify-center pa-0 ma-0  ",staticStyle:{width:"100%"}},[e("v-col",{staticClass:" text-left pa-0 mt-5 ",attrs:{cols:"12",md:"12",lg:"12"}},[e("v-card",{staticClass:"elevation-0",staticStyle:{"border-radius":"2px"},attrs:{color:"transparent",dark:""}},[e("v-card-text",{staticClass:"card__modal--subHeader "},[e("v-row",{staticClass:"pa-0 ma-0 ",staticStyle:{width:"100%"}},t._l(t.Cardpremiun,(function(s,a){return e("v-col",{key:a,staticClass:"justify-center text-center ",staticStyle:{position:"relative"},attrs:{cols:"6",md:"6"}},[e("v-card",{staticClass:"elevation-0 pa-4",staticStyle:{"border-radius":"2px"},attrs:{color:"#2b2b2b",dark:""}},[e("v-img",{staticClass:"mr-0 elevation-4 ",attrs:{src:s.src,alt:"logo-blanco"}}),e("v-list-item",{staticClass:"ma-0 pa-0  ",staticStyle:{width:"100%","text-align":"left"},attrs:{"three-line":""}},[e("v-list-item-content",{staticClass:"pa-2 ma-1 "},[e("div",{staticStyle:{"margin-top":"5px"}},[e("v-list-item-title",{staticClass:"text--card__search"},[t._v(" Preció: ")]),e("v-list-item-subtitle",{staticClass:"Precio--card__search  ",staticStyle:{color:"#00bd32"}},[t._v(" "+t._s(s.precio)+" ")])],1)])],1)],1),e("v-btn",{staticClass:"rounded-5 mt-10  pa-0 ma-0 btn--search white--text ",staticStyle:{"font-family":"Roboto",color:"white","font-weight":"500","font-size":"14px","text-transform":"unset !important"},attrs:{color:"#0e41ff",width:"180"},on:{click:function(s){return t.activarModal()}}},[t._v(" Obtener ")])],1)})),1)],1)],1)],1)],1):t._e()],1)],1)],1)],1),e("modal-app",{model:{value:t.modalOn,callback:function(s){t.modalOn=s},expression:"modalOn"}})],1)},i=[],r={data:function(){return{modalOn:!1,showNumNFT:!1,tarjeta:[{status:!1,numero:"115",precio:"0,0000015 NMBC",src:a("7bb8")},{status:!0,numero:"115",precio:"2000,00 NMBC",src:a("976b")}],Cardpremiun:[{status:!1,numero:"115",precio:"0,0000015 NMBC",src:a("7bb8")},{status:!0,numero:"115",precio:"2000,00 NMBC",src:a("976b")},{status:!1,numero:"115",precio:"0,0000015 NMBC",src:a("7bb8")},{status:!0,numero:"115",precio:"2000,00 NMBC",src:a("976b")}]}},methods:{obtenerNumNFT:function(){return this.showNumNFT?this.showNumNFT=!1:this.showNumNFT=!0},obtenerNumPremium:function(){return this.showNumNFT?this.showNumNFT=!1:this.showNumNFT=!0},activarModal:function(){return this.modalOn?this.modalOn=!1:this.modalOn=!0}}},c=r,l=(a("46cb"),a("2877")),o=a("6544"),n=a.n(o),m=a("8336"),d=a("b0af"),u=a("99d9"),v=a("62ad"),p=a("ce7e"),f=a("adda"),b=a("da13"),h=a("5d23"),C=a("0fd9"),w=Object(l["a"])(c,e,i,!1,null,"f626dbc0",null);s["default"]=w.exports;n()(w,{VBtn:m["a"],VCard:d["a"],VCardText:u["b"],VCol:v["a"],VDivider:p["a"],VImg:f["a"],VListItem:b["a"],VListItemContent:h["a"],VListItemSubtitle:h["b"],VListItemTitle:h["c"],VRow:C["a"]})},"30c5":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("v-row",{staticClass:" justify-center text-center  pa-0 ma-0 ",staticStyle:{width:"100%",height:"620px"}},[a("v-col",{staticClass:"pa-2 mt-0  ma-2 ",class:{"mt-0":t.$vuetify.breakpoint.xsOnly},attrs:{cols:"12",md:"12"}},[a("span",{staticClass:"tituloPortada"},[t._v("Whiterpapper")])])],1)],1)},i=[],r={},c=r,l=a("2877"),o=a("6544"),n=a.n(o),m=a("62ad"),d=a("0fd9"),u=Object(l["a"])(c,e,i,!1,null,"9002a976",null);s["default"]=u.exports;n()(u,{VCol:m["a"],VRow:d["a"]})},"3b01":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("v-row",{staticClass:" justify-center text-center  pa-0 ma-0 ",staticStyle:{width:"100%",height:"620px"}},[a("v-col",{staticClass:"pa-2 mt-0  ma-2 ",class:{"mt-0":t.$vuetify.breakpoint.xsOnly},attrs:{cols:"12",md:"12"}},[a("span",{staticClass:"tituloPortada"},[t._v("Roadmap")])])],1)],1)},i=[],r={},c=r,l=a("2877"),o=a("6544"),n=a.n(o),m=a("62ad"),d=a("0fd9"),u=Object(l["a"])(c,e,i,!1,null,"f7992eb2",null);s["default"]=u.exports;n()(u,{VCol:m["a"],VRow:d["a"]})},"46cb":function(t,s,a){"use strict";a("7186")},7186:function(t,s,a){},"7bb8":function(t,s,a){t.exports=a.p+"img/img-nft-basic.70784df3.png"},"976b":function(t,s,a){t.exports=a.p+"img/group-8.cd151c31.png"}}]);
//# sourceMappingURL=about.52642374.js.map