(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{380:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o="https://cp.emenu.com.my/"},580:function(t,e,r){var content=r(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("f4e9259a",content,!0,{sourceMap:!1})},684:function(t,e,r){"use strict";r(580)},685:function(t,e,r){var o=r(9)(!1);o.push([t.i,'.product-add-to-cart{box-shadow:0 2px 28px 0 rgb(0 0 0/12%)!important;background:#fff!important}.vnis__button{-webkit-appearance:none;transition:background .5s ease;border:0;color:#000!important;cursor:pointer;float:left;font-size:20px;margin:0;width:30px!important;height:30px!important;background:transparent!important}.vnis__input{height:30px!important;width:calc(100% - 60px)!important}.product-topping-list .product-topping-list-tag{font-size:.8rem!important}.product-topping-list .product-topping-list-title{font-size:1.3rem!important}.required-list{background:#4caf50!important;color:#fff!important}.product-topping-list .product-topping-list-tag{background-color:rgb(178 189 255);color:#fff}.product-topping-list .product-topping-list-indication{font-size:.9rem!important}.stock_available{font-size:12px!important;color:#757575;font-weight:400;align-self:center}.close{position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:.6}.close:hover{opacity:1}.close:after,.close:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#fff}.close:before{transform:rotate(45deg)}.close:after{transform:rotate(-45deg)}.strikethrough-diagonal{position:relative;color:rgba(85,85,85,.6);font-weight:300;font-size:16px}.strikethrough-diagonal:before{position:absolute;content:"";left:0;top:45%;right:0;border-top:1px solid;border-color:inherit;transform:skewY(-10deg)}',""]),t.exports=o},721:function(t,e,r){"use strict";r.r(e);var o=r(22),n=(r(78),r(232),r(13),r(39),r(42),r(28),r(60),r(29),r(12),r(53),r(235),r(41),r(92),r(40),r(59),r(380)),c=(r(88),r(418)),d=r.n(c),l=r(155),_={transition:"slide",components:{NumberInputSpinner:d.a,rad:l.default},data:function(){return{domain:n.a,remark:"",donemount:!1,number_refresh:!0,selected_image:"",selected_image_index:0,add_to_card_qty:1,refresh:0,unsavedChanges:!0,dialog_image_slider:!1,selected_slider:0}},asyncData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,c,d,l,_,h,v,m,f,y,x,k,C;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.params,n=t.$axios,(c=new URLSearchParams).append("url","".concat(o.merchant)),c.append("product_id","".concat(o.pid)),c.append("get_product","get_product"),r.next=7,n.$post("product/index.php",c);case 7:if(d=r.sent,console.log(d),"1"===d.status){r.next=12;break}return window.location.href="https://emenu.com.my/"+"".concat(o.merchant)+(e.$route.query.ref?"?ref="+e.$route.query.ref:""),r.abrupt("return");case 12:return(l=new URLSearchParams).append("url","".concat(o.merchant)),l.append("read","date"),r.next=17,n.$post("form/index.php",l);case 17:if((_=r.sent).form_function[0].color?(h=JSON.parse(_.form_function[0].color),v=h.primary_color,m=h.second_color):(v="#000000",m="#666f7b"),"1"!=d.status){r.next=30;break}if(f=[],""!==d.read[0].variation&&(f=JSON.parse(d.read[0].variation)),y=[],""!==d.read[0].image_gallery&&(y=JSON.parse(d.read[0].image_gallery)),x=[],k=d.read[0].price,""!==d.read[0].variant&&"1"==d.read[0].type){for(x=JSON.parse(d.read[0].variant),k=x[0].price,C=0;C<x.length;C++)Object.assign(x[C],{selected:!1});x[0].selected=!0}return r.abrupt("return",{merchant_url:"".concat(o.merchant),merchant_id:_.form_function[0].merchant_id,theme_color:_.form_function[0].form_color,default_language:_.form_function[0].default_language,product_id:d.read[0].product_id,product_name:d.read[0].name,product_image:d.read[0].image,product_image_gallery:y,product_description:d.read[0].description.replace(/\n/g,"<br/>"),product_price:k,product_category_id:d.read[0].category_id,original_price:d.read[0].original_price,product_item_code:d.read[0].item_code,product_variation:f,product_type:d.read[0].type,product_variant:x,stock:d.read[0].stock,p_color:v,s_color:m,add_to_cart_loading:!1,selected_variant_id:""});case 30:window.location.href="https://emenu.com.my/"+"".concat(o.merchant)+(e.$route.query.ref?"?ref="+e.$route.query.ref:"");case 31:case"end":return r.stop()}}),r)})))()},head:function(){return{title:this.product_name}},computed:{slider_array:function(){var t=[],e={image:this.product_image};t.push(e);for(var i=0;i<this.product_image_gallery.length;i++)t.push({image:this.product_image_gallery[i].image});return t},language:function(){return this.$store.state.locale},product_stock:function(){if("0"==this.product_type){if(""==this.stock)return 9999;var t=this.$store.getters.product_used_stock(this.product_id,this.product_type,this.selected_variant_id);return parseFloat((parseFloat(this.stock)-parseFloat(t)).toFixed(0))}for(var i=0;i<this.product_variant.length;i++)if(this.product_variant[i].id==this.selected_variant_id){if(""==this.product_variant[i].stock)return 9999;t=this.$store.getters.product_used_stock(this.product_id,this.product_type,this.selected_variant_id);return parseFloat((parseFloat(this.product_variant[i].stock)-parseFloat(t)).toFixed(0))}return 0},p_dark:function(){return this.text_color_auto(this.p_color)},s_dark:function(){return this.text_color_auto(this.s_color)},selected_product_variant:function(){if("0"==this.product_type)return[];for(var i=0;i<this.product_variant.length;i++)this.product_variant[i].id==this.selected_variant_id?this.product_variant[i].selected=!0:this.product_variant[i].selected=!1;return this.product_variant}},watch:{product_stock:function(t){var e=this;console.log(t),t<this.add_to_card_qty&&(this.number_refresh=!1,this.$nextTick((function(){e.number_refresh=!0,e.add_to_card_qty=t})))},language:function(){this.$i18n.locale=this.language},selected_variant_id:function(t){for(var i=0;i<this.product_variant.length;i++)t==this.product_variant[i].id&&(this.product_price=this.product_variant[i].price)}},created:function(){this.$store.dispatch("fetchCart",this.merchant_url),this.$store.dispatch("fetchlocale",this.default_language)},mounted:function(){this.donemount=!0,this.history_length=window.history.length,window.scroll(0,0)},methods:{add_on_change:function(t,e){1==this.product_variation[t].variation[e].quantity?this.product_variation[t].variation[e].quantity=0:this.product_variation[t].variation[e].quantity=1,console.log(JSON.stringify(this.product_variation))},radio_onchage:function(){},add_to_cart:function(){if(!(this.add_to_card_qty<1)){var t=this.product_price;this.add_to_cart_loading=!0;var e=this.$store.state.cart;console.log(JSON.stringify(e));for(var i=0;i<e.length;i++)if(e[i].product_id==this.product_id&&e[i].product_name==this.product_name&&e[i].product_price==t&&e[i].remark==this.remark&&JSON.stringify(e[i].product_variation)==JSON.stringify(this.product_variation)&&JSON.stringify(e[i].variant)==JSON.stringify(this.selected_product_variant))return console.log("update"),console.log(i),this.$store.commit("updateCart",{index:i,quantity:this.add_to_card_qty}),this.$router.push("/"+this.merchant_url+(this.$route.query.ref?"?ref="+this.$route.query.ref:"")),this.add_to_cart_loading=!1,this.add_to_card_qty=0,void(this.remark="");var r={product_id:this.product_id,item_code:this.product_item_code,product_name:this.product_name,product_price:t,product_variation:this.product_variation,type:this.product_type,variant:this.selected_product_variant,remark:this.remark,quantity:this.add_to_card_qty,stock:this.stock};this.$store.commit("pushCart",r),this.$router.push("/"+this.merchant_url+(this.$route.query.ref?"?ref="+this.$route.query.ref:"")),this.add_to_card_qty=1,this.remark=""}},shop_button:function(){this.$router.push("/"+this.merchant_url+(this.$route.query.ref?"?ref="+this.$route.query.ref:""))},text_color_auto:function(t){return"#"===t.slice(0,1)&&(t=t.slice(1)),3===t.length&&(t=t.split("").map((function(t){return t+t})).join("")),!((299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>=128)},vibrate:function(){window.navigator.vibrate&&window.navigator.vibrate(25)}}},h=(r(684),r(14)),v=r(48),m=r.n(v),f=r(561),y=r(389),x=r(725),k=r(728),C=r(708),w=r(729),$=r(717),S=r(718),z=r(588),O=r(348),N=r(715),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.donemount?r("div",{staticClass:"v-main__wrap"},[r("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),t._v(" "),r("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}}),t._v(" "),r("meta",{attrs:{name:"theme-color",content:t.theme_color}}),t._v(" "),r("div",{staticClass:"container fill-height container--fluid"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",xl:"6",lg:"6",md:"8"}},[r("div",{staticClass:"w-full"},[r("div",{staticClass:"d-flex py-3"},[r("div"),t._v(" "),r("v-spacer"),t._v(" "),r("NuxtLink",{attrs:{to:"/"+t.$route.params.merchant+(t.$route.query.ref?"?ref="+t.$route.query.ref:"")}},[r("v-btn",{staticStyle:{"font-size":"14px"},attrs:{color:t.s_color,dark:t.s_dark},on:{click:function(e){return t.vibrate()}}},[t._v("\n\n           "+t._s(t.$t("return-main-shop"))+"\n          ")])],1)],1),t._v(" "),r("div",{staticClass:"pa-3 v-card v-card--flat v-sheet theme--light"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-12"},[r("v-card",[r("div",{staticClass:"d-flex"},[t.product_image_gallery.length>0?r("div",{staticClass:"mr-2 ml-2"},[r("div",{staticClass:"v-card v-card--link v-sheet theme--light mt-2",on:{click:function(e){t.selected_image=t.product_image,t.selected_image_index=0}}},[r("div",{staticClass:"v-image v-responsive rounded  mb-2 theme--light",staticStyle:{height:"80px",width:"80px"}},[r("div",{staticClass:"v-responsive__sizer",staticStyle:{"padding-bottom":"100%"}}),t._v(" "),r("div",{staticClass:"v-image__image v-image__image--cover",style:{"background-image":"url("+t.domain+"/product/image.php?m="+t.merchant_id+"&type=product&im="+t.product_image+")","background-position":"center center;"}}),t._v(" "),r("div",{staticClass:"v-responsive__content",staticStyle:{width:"1000px"}})])]),t._v(" "),t._l(t.product_image_gallery,(function(e,o){return[r("div",{key:o,staticClass:"v-card v-card--link v-sheet theme--light",on:{click:function(r){t.selected_image=e.image,t.selected_image_index=o+1}}},[r("div",{staticClass:"v-image v-responsive rounded mb-2 theme--light",staticStyle:{height:"80px",width:"80px"}},[r("div",{staticClass:"v-responsive__sizer",staticStyle:{"padding-bottom":"100%"}}),t._v(" "),r("div",{staticClass:"v-image__image v-image__image--cover",style:{"background-image":"url("+t.domain+"/product/image.php?m="+t.merchant_id+"&type=product&im="+e.image+")","background-position":"center center;"}}),t._v(" "),r("div",{staticClass:"v-responsive__content",staticStyle:{width:"1000px"}})])])]}))],2):t._e(),t._v(" "),r("div",{staticClass:"d-flex align-center flex-grow-1 justify-center",on:{click:function(e){t.selected_slider=t.selected_image_index,t.dialog_image_slider=!0}}},[r("img",{staticClass:"rounded ma-1",staticStyle:{"max-width":"100%","max-height":"460px"},attrs:{src:t.selected_image?t.domain+"/product/image.php?m="+t.merchant_id+"&type=product&im="+t.selected_image:t.domain+"/product/image.php?m="+t.merchant_id+"&type=product&im="+t.product_image}})])])])],1),t._v(" "),r("div",{staticClass:"col-md-6 col-12"},[r("div",{staticClass:"d-flex"}),t._v(" "),r("div",{staticClass:"font-weight-bold text-h5",staticStyle:{"font-size":"24px!important","line-height":"32px"}},[t._v("\n                "+t._s(t.product_name)+"\n              ")]),t._v(" "),r("hr",{staticClass:"my-2 v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}}),t._v(" "),r("div",{staticClass:"d-flex align-center text-h6",staticStyle:{"font-size":"19px!important","line-height":"32px"}},[r("div",[t._v(" "+t._s(t.$t("product-price"))+":")]),t._v(" "),r("span",{staticClass:"text-decoration-line-through mx-1 font-weight-regular"}),t._v(" "),""!==t.original_price?r("span",{staticClass:"strikethrough-diagonal"},[t._v("RM"+t._s(parseFloat(t.original_price).toFixed(2))+" ")]):t._e(),t._v(" "),r("span",[t._v("RM"+t._s(t.product_price))])]),t._v(" "),r("hr",{staticClass:"my-2 v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}}),t._v(" "),r("div",{staticClass:"font-weight-bold mb-1"},[t._v(t._s(t.$t("about-item")))]),t._v(" "),r("div",{staticClass:"mt-3 text-body-1",staticStyle:{"font-size":"16px!important","line-height":"32px"},domProps:{innerHTML:t._s(t.product_description)}})])]),t._v(" "),r("hr",{staticClass:"my-3 v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}}),t._v(" "),t.product_variant.length>0?r("div",{staticClass:"col-md-12 col-12"},[r("div",{staticClass:"pa-2 v-card v-sheet v-sheet--outlined theme--light"},[r("div",{staticClass:"d-flex flex-column"},[r("div",{staticClass:"text-body-1 font-weight-bold mt-2",staticStyle:{"font-size":"16px!important"}},[t._v(t._s(t.$t("product-variant")))]),t._v(" "),r("div",{staticClass:"product-variations"},[r("div",[r("div",{staticClass:"product-topping-list js-variation-selector"},[r("v-radio-group",{staticClass:"ml-4 mr-4",attrs:{mandatory:""},model:{value:t.selected_variant_id,callback:function(e){t.selected_variant_id=e},expression:"selected_variant_id"}},t._l(t.product_variant,(function(e){return r("v-radio",{key:e.id,staticClass:"mb-4",attrs:{value:e.id,disabled:""!==e.stock&&e.stock<1||"1"==e.status},scopedSlots:t._u([{key:"label",fn:function(){return[r("v-row",{staticClass:"ml-4 mr-4"},[r("span",{staticClass:"radio-text",staticStyle:{"font-size":"13px !important","font-weight":"500"}},[r("b",[t._v(t._s(e.name))]),r("b",{staticStyle:{color:"#ff8585"}},[t._v(t._s(""!==e.stock&&e.stock<1||"1"==e.status?" -Out of stock":""))])]),r("v-spacer"),t._v(" "),r("span",{staticClass:"radio-text",staticStyle:{"font-size":"13px !important","font-weight":"500"}},[r("b",[t._v("RM"+t._s(parseFloat(e.price).toFixed(2)))])])],1)]},proxy:!0}],null,!0)})})),1)],1)])])])])]):t._e(),t._v(" "),t.product_variation.length>0?r("div",{staticClass:"col-md-12 col-12"},[r("div",{staticClass:"pa-2 v-card v-sheet v-sheet--outlined theme--light"},[r("div",{staticClass:"d-flex flex-column"},[r("div",{staticClass:"text-body-1 font-weight-bold",staticStyle:{"font-size":"14px!important"}},[t._v(t._s(t.$t("product-option")))]),t._v(" "),r("div",{staticClass:"product-variations"},[r("div",[r("div",{staticClass:"product-topping-list js-variation-selector"},[t._l(t.product_variation,(function(e,o){return[r("div",{key:o},[r("h3",{staticClass:"product-topping-list-title"},[r("span",{staticClass:"product-topping-list-title-text",staticStyle:{"font-size":"16px!important"}},[t._v(t._s(e.group_name))]),t._v(" "),1==e.option?r("span",{staticClass:"product-topping-list-tag required-list"},[t._v("\n                              "+t._s(t.$t("product-option-required"))+"\n                            ")]):t._e(),t._v(" "),0==e.option?r("span",{staticClass:"product-topping-list-tag"},[t._v("\n                              "+t._s(t.$t("product-option-optional"))+"\n                            ")]):t._e()]),t._v(" "),1==e.type?r("p",{staticClass:"product-topping-list-indication"},[t._v("\n                            "+t._s(t.$t("product-option-select-one"))+"\n                          ")]):t._e(),t._v(" "),0==e.type?r("p",{staticClass:"product-topping-list-indication"},[t._v("\n                          "+t._s(t.$t("product-option-select-multiple"))+"\n                            "+t._s(e.variation.length)+"\n                            "+t._s(t.$t("product-option-select-multiple-quantifier"))+"\n                          ")]):t._e(),t._v(" "),r("v-row",{staticStyle:{margin:"-18px !important"},attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("rad",{attrs:{array:e.variation,multiple:0==e.type,optional:0==e.option}})],1)],1)],1)]}))],2)])])])])]):t._e(),t._v(" "),r("div",[r("div",{staticClass:"text-h6",staticStyle:{"font-size":"20px!important","line-height":"32px"}},[t._