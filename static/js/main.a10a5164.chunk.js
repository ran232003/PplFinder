(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{110:function(e,n,t){"use strict";t.r(n);var i,a,c,r,o,l,s,u,d,j,b,x,v,O,f=t(0),p=t.n(f),h=t(26),m=t.n(h),g=t(19),y=t(72),z=t(8),C=t(112),k=t(11),w=t(12),S=w.a.div(i||(i=Object(k.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),F=t(2),N=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,a=e.bold;return Object(F.jsx)(C.a,{children:Object(F.jsx)(S,{size:t,bold:a,children:i})})},L=t(41),M=t(45),E=t(139),P=function(e){var n=e.size,t=e.color,i=e.thickness,a=e.variant;return Object(F.jsx)(E.a,{size:n,color:t,thickness:i,variant:a})},A=t(146),T=t(140),B=w.a.div(a||(a=Object(k.a)([""]))),I=function(e){var n=e.isChecked,t=e.onChange,i=e.label,a=e.value,c=e.updateFilter;return Object(F.jsx)(B,{children:Object(F.jsx)(T.a,{control:Object(F.jsx)(A.a,{checked:n,onChange:function(){t&&t(a),c(a,i)},color:"primary"}),label:i})})},V=t(141),G=t(46),J=t.n(G),R=w.a.div(c||(c=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),U=w.a.div(r||(r=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),q=w.a.div(o||(o=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),D=w.a.div(l||(l=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),H=w.a.img(s||(s=Object(k.a)(["\n  border-radius: 45%;\n"]))),K=w.a.div(u||(u=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Q=w.a.div(d||(d=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),W=w.a.div(j||(j=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),X=Object(f.createContext)({pageNum:0,handleChangePage:function(){}}),Y=function(e){var n=e.users,t=e.isLoading,i=Object(f.useContext)(X),a=Object(f.useState)(),c=Object(g.a)(a,2),r=c[0],o=c[1],l=Object(f.useState)(!0),s=Object(g.a)(l,2),u=s[0],d=s[1],j=Object(f.useState)(i.pageNum),b=Object(g.a)(j,2),x=(b[0],b[1],Object(f.useState)({Brazil:!1,Australia:!1,Canada:!1,Germany:!1,Turkey:!1})),v=Object(g.a)(x,2),O=v[0],p=v[1],h=function(e){e.favorite?(e.favorite=!e.favorite,localStorage.removeItem(e.email)):(e.favorite=!0,localStorage.setItem(e.email,"true"))},m=function(e,n){p((function(){return Object(M.a)(Object(M.a)({},O),{},Object(L.a)({},n,!O[n]))}))},y=function(e){o(e)};Object(f.useEffect)((function(){var e=function(){for(var e in O)if(!1!==O[e])return!1;return!0}();d(e)}),[O,i.pageNum]);var z=function(e){e.favorite||o()};return Object(F.jsxs)(R,{children:[Object(F.jsxs)(W,{children:[Object(F.jsx)(I,{value:"BR",updateFilter:m,label:"Brazil"}),Object(F.jsx)(I,{value:"AU",updateFilter:m,label:"Australia"}),Object(F.jsx)(I,{value:"CA",updateFilter:m,label:"Canada"}),Object(F.jsx)(I,{value:"DE",updateFilter:m,label:"Germany"}),Object(F.jsx)(I,{value:"TR",updateFilter:m,label:"Turkey"})]}),Object(F.jsxs)(U,{children:[n.map((function(e,n){return!0!==u&&!0!==O[null===e||void 0===e?void 0:e.location.country]||0!==i.pageNum?!0!==u&&!0!==O[null===e||void 0===e?void 0:e.location.country]||1!==i.pageNum||!0!==e.favorite?void 0:Object(F.jsxs)(q,{onMouseEnter:function(){return y(n)},onMouseLeave:function(){return z(e)},children:[Object(F.jsx)(H,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(F.jsxs)(D,{children:[Object(F.jsxs)(N,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(F.jsx)(N,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(F.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(F.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(F.jsx)(Q,{onClick:function(){h(e)},isVisible:n===r||!0===e.favorite,children:Object(F.jsx)(V.a,{children:Object(F.jsx)(J.a,{color:"error"})})})]},n):(console.log(i.pageNum),Object(F.jsxs)(q,{onMouseEnter:function(){return y(n)},onMouseLeave:function(){return z(e)},children:[Object(F.jsx)(H,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(F.jsxs)(D,{children:[Object(F.jsxs)(N,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(F.jsx)(N,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(F.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(F.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(F.jsx)(Q,{onClick:function(){h(e)},isVisible:n===r||!0===e.favorite,children:Object(F.jsx)(V.a,{children:Object(F.jsx)(J.a,{color:"error"})})})]},n))})),t&&Object(F.jsx)(K,{children:Object(F.jsx)(P,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},Z=t(47),$=t.n(Z),_=t(70),ee=t(71),ne=t.n(ee),te=w.a.div(b||(b=Object(k.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ie=w.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),ae=w.a.div(v||(v=Object(k.a)(["\n  display: flex;\n"]))),ce=(w.a.div(O||(O=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(f.useState)([]),n=Object(g.a)(e,2),t=n[0],i=n[1],a=Object(f.useState)(!1),c=Object(g.a)(a,2),r=c[0],o=c[1];function l(){return s.apply(this,arguments)}function s(){return(s=Object(_.a)($.a.mark((function e(){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,ne.a.get("https://randomuser.me/api/?results=25&page=1");case 3:(n=e.sent).data.results.map((function(e){var n=localStorage.getItem(e.email);e.favorite=!!n})),o(!1),i(n.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.useEffect)((function(){l()}),[]),{users:t,isLoading:r,fetchUsers:l}}(),n=e.users,t=e.isLoading;return Object(F.jsx)(te,{children:Object(F.jsxs)(ie,{children:[Object(F.jsx)(ae,{children:Object(F.jsx)(N,{size:"64px",bold:!0,children:"PplFinder"})}),Object(F.jsx)(Y,{users:n,isLoading:t})]})})}),re=t(73),oe=t(142),le=t(143),se=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=p.a.useMemo((function(){return Object(re.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(F.jsxs)(oe.a,{theme:i,children:[Object(F.jsx)(le.a,{}),n]})},ue=t(147),de=t(145),je=t(144),be=function(){var e=Object(f.useState)(0),n=Object(g.a)(e,2),t=n[0],i=n[1],a=Object(f.useContext)(X);return Object(F.jsx)(ue.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(F.jsxs)(de.a,{value:t,onChange:function(e,n){i(n),a.handleChangePage(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(F.jsx)(je.a,{label:"Home",index:0}),Object(F.jsx)(je.a,{label:"Favorites",index:1})]})})},xe=function(){var e=Object(f.useState)(0),n=Object(g.a)(e,2),t=n[0],i=n[1];return Object(F.jsx)(se,{children:Object(F.jsx)(X.Provider,{value:{pageNum:t,handleChangePage:function(e){i(e)}},children:Object(F.jsxs)(y.a,{children:[Object(F.jsx)(be,{}),Object(F.jsx)(z.c,{children:Object(F.jsx)(z.a,{exact:!0,path:"/",component:ce})})]})})})};m.a.render(Object(F.jsx)(xe,{}),document.querySelector("#root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.a10a5164.chunk.js.map