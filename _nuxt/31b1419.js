(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{332:function(t,e,n){"use strict";var o=n(2),c=n(333);o({target:"String",proto:!0,forced:n(334)("link")},{link:function(t){return c(this,"a","href",t)}})},333:function(t,e,n){var o=n(4),c=n(26),r=n(15),l=/"/g,v=o("".replace);t.exports=function(t,e,n,o){var h=r(c(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+v(r(o),l,"&quot;")+'"'),d+">"+h+"</"+e+">"}},334:function(t,e,n){var o=n(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},335:function(t,e,n){"use strict";var o={components:{QuoteForm:n(141).a},props:{heading:{type:String,default:""}}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"c-top-section green-mask"},[e("h1",[t._v(t._s(t.heading))]),e("quote-form")],1)}),[],!1,null,null,null);e.a=component.exports},337:function(t,e,n){"use strict";n.r(e);n(332);var o=n(140),c=n(139),r={components:{Socials:o.a,Contacts:c.a},data:function(){return{links:[{text:"Home",link:""},{text:"services",link:"#services"},{text:"about",link:"#about"},{text:"Contacts",link:"#contacts"}]}},methods:{show:function(){this.$modal.show("hello-world")}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"c-app-header"},[e("div",{staticClass:"c-app-header__top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"contacts-row"},[e("div",{staticClass:"contacts-row__contacts"},[e("contacts",{staticClass:"c-contacts--row"})],1),e("div",{staticClass:"contacts-row__socials"},[e("socials")],1)]),e("div",{staticClass:"logo-row"},[e("nuxt-link",{staticClass:"logo",attrs:{to:"/"}}),e("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.show.apply(null,arguments)}}},[t._v("Get a quote now")])],1)])]),e("div",{staticClass:"c-app-header__bottom"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"menu"},t._l(t.links,(function(link){return e("li",[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:link.link,duration:600},expression:"{ el: link.link, duration: 600 }"}],attrs:{href:"/".concat(link.link)}},[t._v(t._s(link.text))])])})),0)])])])}),[],!1,null,null,null),v=component.exports,h=n(335),d={},m=Object(l.a)(d,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"c-about-section green-mask",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h2",[t._v("About Company")]),e("p",[e("b",[t._v("Best Us Moving Inc")]),t._v(" was founded in 2019.")]),e("p",[t._v("One of the main company's goals is to show our customers a positive attitude, professional packing services, advanced ways of handling and arranging of boxes and furniture and to give a better moving experience overall.")]),e("p",[t._v("Physically the company is located in New Jersey but our trucks cruise all over the continental United States.")]),e("p",[t._v("We opened in 2019 but all of our employees have at least 5 years of moving experience which is easy to see during any pick up or delivery. Company's management is constantly cooperates with the other moving companies all over the United States which allows us to always improve our approach to jobs handling.")]),e("p",[t._v("We might be not the oldest company out there but definitely we are a great choice when it comes to relocation.")])])])}],!1,null,null,null).exports,f={},_=Object(l.a)(f,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"c-contacts-section",attrs:{id:"contacts"}},[e("div",{staticClass:"container"},[e("h2",[t._v("contact "),e("span",[t._v("US")])]),e("ul",[e("li",[e("span",{staticClass:"ico ico--clock"}),e("div",{staticClass:"text"},[e("h6",[t._v("Working Hours")]),e("p",[t._v("MON - SAT: "),e("b",[t._v("9AM - 8PM")])]),e("p",[t._v("SUN: CLOSED")])])]),e("li",[e("span",{staticClass:"ico ico--phone"}),e("div",{staticClass:"text"},[e("h6",[t._v("Call Us")]),e("p",[e("a",{attrs:{href:"tel:8352053025"}},[t._v("835 205 3025")])])])]),e("li",[e("span",{staticClass:"ico ico--pin"}),e("div",{staticClass:"text"},[e("h6",[t._v("Main Office")]),e("p",[e("b",[t._v("1076 B Park RD, Brandon PA 19510")])])])])])])])}],!1,null,null,null).exports,w={data:function(){return{services:[{title:"Interstate moves",text:"Best US moving INC is an interstate moving company and long distance moves are its primary occupation. That's why all of our crews are specially trained to handle, wrap and transfer your belongings without any issues...",link:"interstate-moves"},{title:"Commercial moves",text:"Commercial  relocations take special place in the activity of our company as they require highly professional workers, proper equipment and a lot of communication between a customer and a sales representative to ensure our client's stress-free move and maintain all of the office equipment and furniture in the original condition...",link:"commercial-moves"},{title:"Warehousing",text:"Best US moving Inc offers first month free storage option in case if a customer needs more time to find a new home or just going for a vacation. In case if a shipment needs to be stored for more than one month a charge per month is usually based on the volume of a shipment...",link:"warehousing"}]}}},C=Object(l.a)(w,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"c-services-section"},[e("div",{staticClass:"container"},[t._m(0),e("ul",{staticClass:"services-list"},t._l(t.services,(function(n){return e("li",[e("div",{staticClass:"services-list__item",class:n.link},[e("h5",[t._v(t._s(n.title))]),e("p",[t._v(t._s(n.text))]),e("div",{staticClass:"link"},[e("nuxt-link",{attrs:{to:"/".concat(n.link)}},[t._v("Read More"),e("svg",{attrs:{width:"24",height:"9",viewBox:"0 0 24 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24 4.5L18.9474 0V3.375H0V5.625H18.9474V9L24 4.5Z",fill:"white"}})])])],1)])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("h2",[e("span",[t._v("SHIPPING")]),t._v(" TO & FROM "),e("span",[t._v("ANYWHERE")])])}],!1,null,null,null).exports,y={transition:"intro",components:{MainHeader:v,TopSection:h.a,AboutSection:m,ContactsSection:_,ServicesSection:C},head:function(){return{bodyAttrs:{class:"main-page"}}}},k=Object(l.a)(y,(function(){var t=this._self._c;return t("div",{staticClass:"wrap"},[t("main-header"),t("main",{staticClass:"main",attrs:{id:"top"}},[t("top-section",{attrs:{heading:"We know the best ways to move you",subheading:"Let us move you to your new beginning"}}),t("div",{attrs:{id:"services"}},[t("services-section")],1),t("about-section"),t("contacts-section")],1)],1)}),[],!1,null,null,null);e.default=k.exports}}]);