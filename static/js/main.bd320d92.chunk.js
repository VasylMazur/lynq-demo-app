(this["webpackJsonplynq-demo"]=this["webpackJsonplynq-demo"]||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),i=(a(29),a(8)),o=a(22),m=a(7),s=a(9),u=a(5),d=(a(30),a(31),a(23)),p=a(11),E=a.n(p),f=(a(34),function(e){var t=e.beer,a=e.onItemClick,l=Object(n.useState)(!1),r=Object(m.a)(l,2),i=r[0],o=r[1],s=function(e){!e.target.closest(".modal")&&i&&o(!1)};return Object(n.useEffect)((function(){return document.addEventListener("click",s),function(){document.removeEventListener("click",s)}})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{key:E()(),className:"card",onClick:function(){return o(!0)}},c.a.createElement("img",{src:t.photoUrl,alt:"beerimg",className:"beerimg"}),c.a.createElement("p",{className:"beer__name"}," ",t.name," ")),i&&c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,t.name),c.a.createElement("p",null,t.description),c.a.createElement("p",null,t.price)),c.a.createElement("div",{className:"rightside"},c.a.createElement("img",{className:"desc-img",src:t.photoUrl,alt:""}))),c.a.createElement("button",{onClick:function(){a(),o(!1)},className:"addtocart"},"add to cart")))}),v=(a(35),function(e){var t=e.beers,a=e.onItemClick;Object(d.a)(e,["beers","onItemClick"]);return c.a.createElement("section",{className:"beerlist"},t.map((function(e){return c.a.createElement(f,{beer:e,onItemClick:a(e)})})))}),b={type:"pizza",price:12,name:"cutom beer",description:"custom description",photoUrl:"https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},h=Array(100).fill(Object(i.a)({},b)).map((function(e){return Object(i.a)({},e,{id:E()()})})),k=function(e){var t=e.item,a=void 0===t?{}:t,n=e.removeItem,l=e.changePrice;return console.log(a.price),c.a.createElement("div",{className:"cart__item"},c.a.createElement("span",null,a.name),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){a.count>1&&l(-a.price,a.id,!1)},className:"decrement"},"-"),c.a.createElement("span",null,a.count),c.a.createElement("button",{onClick:function(){l(a.price,a.id,!0)},className:"increment"},"+")),c.a.createElement("button",{onClick:function(){return n(a.id,a.count*a.price)},className:"remove"},"remove"))};var N=function(){var e=Object(n.useState)("all"),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),d=Object(m.a)(r,2),p=d[0],E=d[1],f=Object(n.useState)(0),b=Object(m.a)(f,2),N=b[0],g=b[1],C=Object(n.useState)("closed"),O=Object(m.a)(C,2),j=O[0],y=O[1],_=function(e,t){var a=p.filter((function(t){return t.id!==e}));E(a),g(N-t),"half-opened"===j&&y("closed")},w=function(e,t,a){g(N+e),E(p.map((function(e){return e.id===t?Object(i.a)({},e,{count:a?e.count+1:e.count-1}):e})))};return c.a.createElement(s.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"DEMO APP"),c.a.createElement("nav",{className:"main-menu"},c.a.createElement(s.b,{className:"navlink",activeClassName:"navlink--active",to:"/drinks"},c.a.createElement("h2",null,"Drinks")),c.a.createElement(s.b,{className:"navlink",activeClassName:"navlink--active",to:"/food"},c.a.createElement("h2",null,"food")),c.a.createElement(s.b,{className:"navlink",activeClassName:"navlink--active",to:"/all"},c.a.createElement("h2",null,"all")),c.a.createElement(s.b,{className:"navlink",activeClassName:"navlink--active",to:"/search"},c.a.createElement("h2",null,"search"))),c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"food"},c.a.createElement("span",null,"food")),c.a.createElement(u.b,{path:"/drinks"},c.a.createElement("nav",{className:"submenu"},c.a.createElement("span",{className:"submenu__item",onClick:function(){return l("all")}},"All"),c.a.createElement("span",{className:"submenu__item",onClick:function(){return l("pizza")}},"Pizza"),c.a.createElement("span",{className:"submenu__item",onClick:function(){return l("steak")}},"Steak")),c.a.createElement(v,{beers:h.filter((function(e){return e.type===a||"all"===a})),onItemClick:function(e){return function(){y("half-opened"),E([].concat(Object(o.a)(p),[Object(i.a)({},e,{count:1})])),g(N+e.price)}}})),c.a.createElement(u.b,{exact:!0,path:"/"},c.a.createElement(u.a,{to:"drinks"})))),"opened"===j&&c.a.createElement("div",{className:"cart"},c.a.createElement("h3",{onClick:function(){return y("closed")}},"Shopping cart"),p.map((function(e,t){return c.a.createElement(k,{item:e,removeItem:_,changePrice:w})})),c.a.createElement("p",null,"Total price: ",N)),"half-opened"===j&&c.a.createElement("div",{className:"cart"},c.a.createElement("h3",{onClick:function(){return y("opened")}},"Shopping cart"),c.a.createElement(k,{item:p[p.length-1],removeItem:_,changePrice:w}),c.a.createElement("p",null,"Total price: ",N)),"closed"===j&&c.a.createElement("div",{className:"cart"},c.a.createElement("h3",{onClick:function(){return y("opened")}},"Shopping cart")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.bd320d92.chunk.js.map