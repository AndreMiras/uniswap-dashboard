(this["webpackJsonpuniswap-margin-ui"]=this["webpackJsonpuniswap-margin-ui"]||[]).push([[7],{551:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u}));var n=a(655),r=a(1),c=a.n(r),l=a(875),o=a(621).default,i=function(e){var t=e.address,a=Object(n.a)(e,["address"]),l=Object(r.useMemo)((function(){return parseInt((t||"").replace("0x","").slice(0,8),16)}),[t]);return c.a.createElement(o,Object.assign({seed:l},a))},u=function(e){var t=e.address;return t?c.a.createElement(l.a,{style:{height:24,width:24},src:"".concat("/uniswap-dashboard","/assets/tokens/").concat(t.toLowerCase(),".png")},c.a.createElement(i,{diameter:17,address:t})):null}},577:function(e,t,a){"use strict";a.d(t,"a",(function(){return ae}));var n=a(96),r=a(1),c=a.n(r),l=a(546),o=a(875),i=a(837),u=a(863),s=a(846),m=a(842),d=a(839),b=a(844),p=a(843),h=a(835),E=a(806),f=a(847),g=a(872),j=a(830),O=a(873),A=a(39),v=a(862),C=a(831),k=a(871),w=a(836),y=a(832),R=a(628),S=a.n(R),B=a(630),D=a.n(B),W=a(626),x=a.n(W),T=a(865),N=function(e){return c.a.createElement("img",Object.assign({alt:"Logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXdJREFUeNrslkFLhEAUxx1nHK20LZeWkbY6tB661a1PEPRR+wSdOxV0KAqCPUSwdFjIFmzDUne0J7NrEsiWjpfwMchTmf/v/cc3gwifnylNhqo0HC1gOWD76haHUXMAfKBb9vCJGzTYshsB9PddEkabjyN286ByDpiUYMmA+WJxbj2Pe3dDuZhvQBHjXN/rb+9Rx4zXViQD8lh9mYAbWDqwEq6blQ2VAkRowQcwhCGElE+7IxlQNATNBo1gTHwSRb/3hI5PTqt5h0aY9tl0h0ECPPmAYnA920YwxH6a6TR/ReT0YhhB78H4j4cdaU760KADjUgDDChhGLuUQAK6bNHE5K8qppqtqomQm+VoQDWGVVayJ9KuT4QXcX+kayKBCfkcKAeEfs40g9QKIEmcV7jOxBMzyHVTGs8dXOz2lpRN46TrZ0KQ2D7o5kJVP/JCMWFesZa6XZQ4XrI3BlFQl9mm3B1luo5Xs9LSs8i/3Gj/i1pAvfgSYAB8LJbdpery0gAAAABJRU5ErkJggg=="},e))},J=a(223),Q=a(551),K=Object(j.a)((function(e){return Object(O.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({marginTop:4},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(A.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function U(e){e.onClick;var t=K();return c.a.createElement(C.a,null,c.a.createElement(N,{style:{height:24,width:24,marginRight:8,borderRadius:4}}),c.a.createElement(y.a,{className:t.title,variant:"h6",noWrap:!0},"Uniswap Dashboard"),c.a.createElement("div",{className:t.grow}),c.a.createElement("div",{className:t.sectionDesktop},c.a.createElement("div",null,c.a.createElement(k.a,{title:c.a.createElement(y.a,null,"View Source Code")},c.a.createElement(h.a,{color:"inherit",component:w.a,href:"https://github.com/rphansen91/uniswap-dashboard",target:"_blank",rel:"noreferrer noopener"},c.a.createElement(x.a,null))),c.a.createElement(H,null))),c.a.createElement("div",{className:t.sectionMobile},c.a.createElement(H,null)))}var F=Object(j.a)((function(e){return Object(O.a)({badge:{backgroundColor:function(e){var t=e.chain;return Object(J.b)(t)},borderRadius:8,height:16,width:16,border:"2px solid #757575"}})})),H=function(){var e=Object(J.g)(),t=Object(J.h)(),a=Object(J.f)(),l=Object(n.a)(a,1)[0],u=F({chain:e}),s=Object(J.j)(),m=Object(J.i)(),d=Object(r.useRef)(""),b=Object(r.useState)(!1),p=Object(n.a)(b,2),E=p[0],f=p[1],j=Object(r.useState)(!1),O=Object(n.a)(j,2),A=O[0],v=O[1],C=Object(r.useState)(null),w=Object(n.a)(C,2),R=w[0],B=w[1],D=l?c.a.createElement(k.a,{title:c.a.createElement(y.a,null,"Connected to ".concat(t))},c.a.createElement(i.a,{overlap:"circle",invisible:!t,classes:{badge:u.badge},anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},c.a.createElement(o.a,null,c.a.createElement(Q.a,{diameter:34,address:l})))):c.a.createElement(k.a,{title:"Connect to Web3"},c.a.createElement(o.a,null,c.a.createElement(S.a,null)));return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){l?B(e.currentTarget):f(!0)},color:"inherit"},D),c.a.createElement(V,{anchorEl:R,onClose:function(){B(null)},onChange:function(){return f(!0)}}),c.a.createElement(L,{open:E,onClose:function(){f(!1)},onConnect:function(){Object(J.a)().then((function(){return J.k.eth.getAccounts()})).then((function(e){var t=Object(n.a)(e,1)[0];return m(t)})).catch((function(e){d.current=e.message,v(!0)}))},onSubmit:function(e){s(e)}}),c.a.createElement(g.a,{open:A,onClose:function(){return v(!1)},autoHideDuration:6e3},c.a.createElement(T.a,{severity:"error"},d.current)))},L=function(e){var t=e.open,a=e.onClose,l=e.onConnect,o=e.onSubmit,i=Object(r.useState)(""),E=Object(n.a)(i,2),f=E[0],g=E[1];return c.a.createElement(d.a,{open:t,onClose:a,maxWidth:"sm",fullWidth:!0},c.a.createElement(m.a,{title:"Add Address or Connect Metamask",action:c.a.createElement(h.a,{onClick:a},c.a.createElement(D.a,null))}),c.a.createElement(p.a,null),c.a.createElement(b.a,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f&&o(f)}},c.a.createElement(u.a,{mb:2},c.a.createElement(v.a,{label:"Enter ETH Address",value:f,onChange:function(e){return g(e.target.value)},fullWidth:!0,margin:"normal"})),c.a.createElement(u.a,{mb:2},c.a.createElement(s.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary"},"Submit"))),l?c.a.createElement(u.a,{mb:2},c.a.createElement(s.a,{fullWidth:!0,onClick:l,variant:"contained",color:"secondary"},"Connect With Metamask")):null))},V=function(e){var t=e.anchorEl,a=e.onClose,n=e.onChange;return c.a.createElement(E.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:a},c.a.createElement(f.a,{onClick:a},c.a.createElement(G,null)),c.a.createElement(f.a,{onClick:function(e){n(e),a(e)}},"Change Account"))},G=function(){var e=Object(J.f)(),t=Object(n.a)(e,1)[0];return t?c.a.createElement(c.a.Fragment,null,t):null},I=a(54),M=a(870),X=a(845),P=a(848),Y=a(849),Z=a(850),q=a(632),z=a.n(q),_=a(633),$=a.n(_),ee=Object(j.a)({list:{width:250},fullList:{width:"auto"}});function te(e){var t,a=e.open,n=e.setOpen,r=ee(),o=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&n(e)}};return c.a.createElement(M.a,{anchor:"left",open:a,onClose:o(!1),onOpen:o(!0)},(t="left",c.a.createElement("div",{className:Object(I.a)(r.list,Object(l.a)({},r.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:o(!1),onKeyDown:o(!1)},c.a.createElement(X.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,t){return c.a.createElement(P.a,{button:!0,key:e},c.a.createElement(Y.a,null,t%2===0?c.a.createElement(z.a,null):c.a.createElement($.a,null)),c.a.createElement(Z.a,{primary:e}))}))),c.a.createElement(p.a,null),c.a.createElement(X.a,null,["All mail","Trash","Spam"].map((function(e,t){return c.a.createElement(P.a,{button:!0,key:e},c.a.createElement(Y.a,null,t%2===0?c.a.createElement(z.a,null):c.a.createElement($.a,null)),c.a.createElement(Z.a,{primary:e}))}))))))}var ae=function(e){var t=e.children,a=Object(r.useState)(!1),l=Object(n.a)(a,2),o=l[0],i=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{onClick:function(){return i(!0)}}),c.a.createElement(te,{open:o,setOpen:i}),t,c.a.createElement(u.a,null))}},861:function(e,t,a){"use strict";a.r(t),a.d(t,"About",(function(){return l}));var n=a(1),r=a.n(n),c=a(577),l=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,"About"))};t.default=l}}]);
//# sourceMappingURL=7.b3dc332a.chunk.js.map