(this["webpackJsonpuniswap-dashboard"]=this["webpackJsonpuniswap-dashboard"]||[]).push([[2],{551:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(655),l=t(1),o=t.n(l),i=t(875),r=t(621).default,c=function(e){var n=e.address,t=Object(a.a)(e,["address"]),i=Object(l.useMemo)((function(){return parseInt((n||"").replace("0x","").slice(0,8),16)}),[n]);return o.a.createElement(r,Object.assign({seed:i},t))},u=function(e){var n=e.address;return n?o.a.createElement(i.a,{style:{height:24,width:24},src:"".concat("/uniswap-dashboard","/assets/tokens/").concat(n.toLowerCase(),".png")},o.a.createElement(c,{diameter:17,address:n})):null}},577:function(e,n,t){"use strict";t.d(n,"a",(function(){return te}));var a=t(96),l=t(1),o=t.n(l),i=t(546),r=t(875),c=t(837),u=t(863),d=t(846),s=t(842),m=t(839),v=t(844),p=t(843),b=t(835),f=t(806),E=t(847),h=t(872),y=t(830),g=t(873),k=t(39),S=t(862),O=t(831),j=t(871),P=t(836),w=t(832),C=t(628),D=t.n(C),A=t(630),U=t.n(A),x=t(626),B=t.n(x),N=t(865),R=function(e){return o.a.createElement("img",Object.assign({alt:"Logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXdJREFUeNrslkFLhEAUxx1nHK20LZeWkbY6tB661a1PEPRR+wSdOxV0KAqCPUSwdFjIFmzDUne0J7NrEsiWjpfwMchTmf/v/cc3gwifnylNhqo0HC1gOWD76haHUXMAfKBb9vCJGzTYshsB9PddEkabjyN286ByDpiUYMmA+WJxbj2Pe3dDuZhvQBHjXN/rb+9Rx4zXViQD8lh9mYAbWDqwEq6blQ2VAkRowQcwhCGElE+7IxlQNATNBo1gTHwSRb/3hI5PTqt5h0aY9tl0h0ECPPmAYnA920YwxH6a6TR/ReT0YhhB78H4j4cdaU760KADjUgDDChhGLuUQAK6bNHE5K8qppqtqomQm+VoQDWGVVayJ9KuT4QXcX+kayKBCfkcKAeEfs40g9QKIEmcV7jOxBMzyHVTGs8dXOz2lpRN46TrZ0KQ2D7o5kJVP/JCMWFesZa6XZQ4XrI3BlFQl9mm3B1luo5Xs9LSs8i/3Gj/i1pAvfgSYAB8LJbdpery0gAAAABJRU5ErkJggg=="},e))},L=t(223),T=t(551),q=Object(y.a)((function(e){return Object(g.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(i.a)({marginTop:4},e.breakpoints.up("sm"),{display:"block"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(i.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(i.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function I(e){e.onClick;var n=q();return o.a.createElement(O.a,null,o.a.createElement(R,{style:{height:24,width:24,marginRight:8,borderRadius:4}}),o.a.createElement(w.a,{className:n.title,variant:"h6",noWrap:!0},"Uniswap Dashboard"),o.a.createElement("div",{className:n.grow}),o.a.createElement("div",{className:n.sectionDesktop},o.a.createElement("div",null,o.a.createElement(j.a,{title:o.a.createElement(w.a,null,"View Source Code")},o.a.createElement(b.a,{color:"inherit",component:P.a,href:"https://github.com/rphansen91/uniswap-dashboard",target:"_blank",rel:"noreferrer noopener"},o.a.createElement(B.a,null))),o.a.createElement(W,null))),o.a.createElement("div",{className:n.sectionMobile},o.a.createElement(W,null)))}var F=Object(y.a)((function(e){return Object(g.a)({badge:{backgroundColor:function(e){var n=e.chain;return Object(L.b)(n)},borderRadius:8,height:16,width:16,border:"2px solid #757575"}})})),W=function(){var e=Object(L.g)(),n=Object(L.h)(),t=Object(L.f)(),i=Object(a.a)(t,1)[0],u=F({chain:e}),d=Object(L.j)(),s=Object(L.i)(),m=Object(l.useRef)(""),v=Object(l.useState)(!1),p=Object(a.a)(v,2),f=p[0],E=p[1],y=Object(l.useState)(!1),g=Object(a.a)(y,2),k=g[0],S=g[1],O=Object(l.useState)(null),P=Object(a.a)(O,2),C=P[0],A=P[1],U=i?o.a.createElement(j.a,{title:o.a.createElement(w.a,null,"Connected to ".concat(n))},o.a.createElement(c.a,{overlap:"circle",invisible:!n,classes:{badge:u.badge},anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},o.a.createElement(r.a,null,o.a.createElement(T.a,{diameter:34,address:i})))):o.a.createElement(j.a,{title:"Connect to Web3"},o.a.createElement(r.a,null,o.a.createElement(D.a,null)));return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){i?A(e.currentTarget):E(!0)},color:"inherit"},U),o.a.createElement(H,{anchorEl:C,onClose:function(){A(null)},onChange:function(){return E(!0)}}),o.a.createElement(M,{open:f,onClose:function(){E(!1)},onConnect:function(){Object(L.a)().then((function(){return L.k.eth.getAccounts()})).then((function(e){var n=Object(a.a)(e,1)[0];return s(n)})).catch((function(e){m.current=e.message,S(!0)}))},onSubmit:function(e){d(e)}}),o.a.createElement(h.a,{open:k,onClose:function(){return S(!1)},autoHideDuration:6e3},o.a.createElement(N.a,{severity:"error"},m.current)))},M=function(e){var n=e.open,t=e.onClose,i=e.onConnect,r=e.onSubmit,c=Object(l.useState)(""),f=Object(a.a)(c,2),E=f[0],h=f[1];return o.a.createElement(m.a,{open:n,onClose:t,maxWidth:"sm",fullWidth:!0},o.a.createElement(s.a,{title:"Add Address or Connect Metamask",action:o.a.createElement(b.a,{onClick:t},o.a.createElement(U.a,null))}),o.a.createElement(p.a,null),o.a.createElement(v.a,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E&&r(E)}},o.a.createElement(u.a,{mb:2},o.a.createElement(S.a,{label:"Enter ETH Address",value:E,onChange:function(e){return h(e.target.value)},fullWidth:!0,margin:"normal"})),o.a.createElement(u.a,{mb:2},o.a.createElement(d.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary"},"Submit"))),i?o.a.createElement(u.a,{mb:2},o.a.createElement(d.a,{fullWidth:!0,onClick:i,variant:"contained",color:"secondary"},"Connect With Metamask")):null))},H=function(e){var n=e.anchorEl,t=e.onClose,a=e.onChange;return o.a.createElement(f.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:t},o.a.createElement(E.a,{onClick:t},o.a.createElement(Q,null)),o.a.createElement(E.a,{onClick:function(e){a(e),t(e)}},"Change Account"))},Q=function(){var e=Object(L.f)(),n=Object(a.a)(e,1)[0];return n?o.a.createElement(o.a.Fragment,null,n):null},J=t(54),K=t(870),X=t(845),V=t(848),Y=t(849),z=t(850),G=t(632),Z=t.n(G),_=t(633),$=t.n(_),ee=Object(y.a)({list:{width:250},fullList:{width:"auto"}});function ne(e){var n,t=e.open,a=e.setOpen,l=ee(),r=function(e){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&a(e)}};return o.a.createElement(K.a,{anchor:"left",open:t,onClose:r(!1),onOpen:r(!0)},(n="left",o.a.createElement("div",{className:Object(J.a)(l.list,Object(i.a)({},l.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:r(!1),onKeyDown:r(!1)},o.a.createElement(X.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,n){return o.a.createElement(V.a,{button:!0,key:e},o.a.createElement(Y.a,null,n%2===0?o.a.createElement(Z.a,null):o.a.createElement($.a,null)),o.a.createElement(z.a,{primary:e}))}))),o.a.createElement(p.a,null),o.a.createElement(X.a,null,["All mail","Trash","Spam"].map((function(e,n){return o.a.createElement(V.a,{button:!0,key:e},o.a.createElement(Y.a,null,n%2===0?o.a.createElement(Z.a,null):o.a.createElement($.a,null)),o.a.createElement(z.a,{primary:e}))}))))))}var te=function(e){var n=e.children,t=Object(l.useState)(!1),i=Object(a.a)(t,2),r=i[0],c=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{onClick:function(){return c(!0)}}),o.a.createElement(ne,{open:r,setOpen:c}),n,o.a.createElement(u.a,null))}},606:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(1),l=t.n(a),o=t(563),i=t(691),r=new o.ApolloClient({uri:"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",cache:new o.InMemoryCache}),c=function(e){var n=e.client,t=void 0===n?r:n,a=e.children;return l.a.createElement(i.ApolloProvider,{client:t},a)}},805:function(e,n,t){"use strict";t.r(n),t.d(n,"Uniswap",(function(){return T})),t.d(n,"UniswapLiquidityProviderHistory",(function(){return F}));var a=t(708),l=t(96),o=t(1),i=t.n(o),r=t(709),c=t(577),u=t(863),d=t(858),s=t(857),m=t(606),v=t(563),p=t(651),b=t(566),f=t.n(b);function E(){var e=Object(p.a)(["\nquery liquidityPositionHistory($address: String) {\n  user(id: $address) {\n    id\n    liquidityPositions {\n      pair {\n        id\n        token0 {\n          id\n          name\n          symbol\n        }\n        token1 {\n          id\n          name\n          symbol\n        }\n        reserve0\n        reserve1\n        totalSupply\n      }\n      poolOwnership\n      historicalSnapshots {\n        liquidityTokenTotalSupply\n        liquidityTokenBalance\n        reserve0\n        reserve1\n        token0PriceUSD\n        token1PriceUSD\n        liquidityPosition {\n          poolOwnership\n        }\n        block\n        timestamp\n      }\n    }\n  }\n}"]);return E=function(){return e},e}var h=f()(E());function y(){var e=Object(p.a)(["\n\tquery liquidityPositionSnapshots ($pair: String!) {\n    liquidityPositionSnapshots(\n    where: {\n\t\t\tpair: $pair\n    }\n  ) {\n    reserve0\n    reserve1\n    token0PriceUSD\n    token1PriceUSD\n    timestamp\n    user {\n      id\n    }\n    liquidityTokenTotalSupply\n    liquidityTokenBalance\n  }\n}\n"]);return y=function(){return e},e}var g=f()(y()),k=t(223),S=t(859),O=t(843),j=t(131),P=t(39),w=t(842),C=t(551),D=t(832),A=t(519),U=t(874),x=(t(635),t(846)),B=t(830),N=t(873),R=Object(B.a)((function(e){return Object(N.a)({root:{backgroundColor:e.palette.background.default}})})),L=function(e){var n=e.children,t=R();return i.a.createElement(s.a,{classes:{root:t.root}},n)},T=function(){return i.a.createElement(c.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{px:3,pb:5},i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(F,null))))))};function q(e){var n,t,a,l,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o?"".concat(null===e||void 0===e||null===(n=e.token1)||void 0===n?void 0:n.symbol,"-").concat(null===e||void 0===e||null===(t=e.token0)||void 0===t?void 0:t.symbol):"".concat(null===e||void 0===e||null===(a=e.token0)||void 0===a?void 0:a.symbol,"-").concat(null===e||void 0===e||null===(l=e.token1)||void 0===l?void 0:l.symbol)}function I(e){return e instanceof Date?e:"number"===typeof e?new Date(1e3*e):"number"===typeof e.timestamp?new Date(1e3*e.timestamp):new Date}var F=function(){var e,n,t=Object(k.f)(),a=Object(l.a)(t,1)[0],r=Object(o.useMemo)((function(){return a?{address:a.toLowerCase()}:{}}),[a]),c=Object(v.useQuery)(h,{variables:r,skip:!a}),d=c.data,s=c.loading;c.error;return i.a.createElement(i.a.Fragment,null,s?i.a.createElement(A.a,null):null,i.a.createElement(u.a,{pt:4},null===d||void 0===d||null===(e=d.user)||void 0===e||null===(n=e.liquidityPositions)||void 0===n?void 0:n.map((function(e){var n,t,a,l,o,r,c,u,s,m=null!==(n=null===M||void 0===M||null===(t=M[null!==(a=null===d||void 0===d||null===(l=d.user)||void 0===l?void 0:l.id)&&void 0!==a?a:""])||void 0===t?void 0:t[null!==(o=null===e||void 0===e||null===(r=e.pair)||void 0===r?void 0:r.id)&&void 0!==o?o:""])&&void 0!==n?n:[],v=[].concat(null!==(c=null===e||void 0===e?void 0:e.historicalSnapshots)&&void 0!==c?c:[]).concat(m).sort(K("timestamp",-1));return i.a.createElement(W,{userId:null===d||void 0===d||null===(u=d.user)||void 0===u?void 0:u.id,pair:null===e||void 0===e?void 0:e.pair,key:null===e||void 0===e||null===(s=e.pair)||void 0===s?void 0:s.id,positions:v})}))))},W=function(e){e.userId;var n,t,l,c,m,p,b,f,E,h,y,k,A,B,N,R,T,F,W,M,H=e.pair,Q=e.positions,te=Object(j.a)(),ae=ne(),le=Object(v.useQuery)(g,{variables:{pair:null===H||void 0===H?void 0:H.id},skip:!(null===H||void 0===H?void 0:H.id)}),oe=Object(o.useMemo)((function(){var e,n,t,l,o,i,r=te.palette.primary.main,c=Object(P.e)(te.palette.primary.main,.2),u=te.palette.secondary.main,d=Object(P.e)(te.palette.secondary.main,.2),s=null===(e=le.data)||void 0===e||null===(n=e.liquidityPositionSnapshots)||void 0===n?void 0:n.slice(0).sort(K("timestamp")),m=null===s||void 0===s?void 0:s.map((function(e){return e.timestamp})),v=null===m||void 0===m?void 0:m.map((function(e){var n=Q.find((function(n){return n.timestamp<=e}));return Object(a.a)({},n,{timestamp:e})})),p=X(v,"timestamp"),b=null===s||void 0===s?void 0:s[(null===s||void 0===s?void 0:s.length)-1],f=null===s||void 0===s?void 0:s[(null===s||void 0===s?void 0:s.length)-2],E=null===p||void 0===p?void 0:p[null===b||void 0===b?void 0:b.timestamp],h=null===p||void 0===p?void 0:p[null===f||void 0===f?void 0:f.timestamp],y=ee(b,E),g=ee(f,h),k=Number(null===b||void 0===b?void 0:b.reserve0)*y,S=Number(null===b||void 0===b?void 0:b.reserve1)*y,O=Number(null===f||void 0===f?void 0:f.reserve0)*g,j=Number(null===f||void 0===f?void 0:f.reserve1)*g;return{data:(null!==s&&void 0!==s?s:[]).reduce((function(e,n){var t=$(n),a=ee(n,null===p||void 0===p?void 0:p[n.timestamp]),l=t.reserve0*t.token0PriceUSD,o=t.reserve1*t.token1PriceUSD,i=l*a,r=o*a;return e.labels.push(I(n).toDateString()),e.datasets[0].data.push(l-i),e.datasets[1].data.push(o-r),e.datasets[2].data.push(i),e.datasets[3].data.push(r),e}),{labels:[],datasets:[{label:"".concat(null===H||void 0===H||null===(t=H.token0)||void 0===t?void 0:t.symbol," Total Usd"),data:[],backgroundColor:r,hidden:Boolean(null===Q||void 0===Q?void 0:Q.length),pointRadius:5},{label:"".concat(null===H||void 0===H||null===(l=H.token1)||void 0===l?void 0:l.symbol," Total Usd"),data:[],backgroundColor:u,hidden:Boolean(null===Q||void 0===Q?void 0:Q.length),pointRadius:5},{label:"LP ".concat(null===H||void 0===H||null===(o=H.token0)||void 0===o?void 0:o.symbol," Usd"),data:[],backgroundColor:c,pointRadius:5},{label:"LP ".concat(null===H||void 0===H||null===(i=H.token1)||void 0===i?void 0:i.symbol," Usd"),data:[],backgroundColor:d,pointRadius:5}]}),options:Object(a.a)({},J,{tooltips:{enabled:!1,mode:"index",custom:function(e){var n,t,a,l,o,i,r,c,u,d,m=_(),v=m.querySelector("table");if(0!==e.opacity){if(v){var b=(null!==(n=null===(t=e.dataPoints)||void 0===t?void 0:t[0])&&void 0!==n?n:{}).index,f=s[b],E=s[b-1];if(f){var h=$(f),y=ee(f,null===p||void 0===p?void 0:p[f.timestamp]),g=h.reserve0*h.token0PriceUSD*y,k=h.reserve1*h.token1PriceUSD*y,S=$(E),O=ee(E,null===p||void 0===p?void 0:p[null===E||void 0===E?void 0:E.timestamp]),j=S.reserve0*S.token0PriceUSD*O,P=S.reserve1*S.token1PriceUSD*O;v.innerHTML=[Y(z(I(f).toDateString())),Y("Price ".concat(null===H||void 0===H||null===(a=H.token0)||void 0===a?void 0:a.symbol,": ").concat(V(h.token0PriceUSD,6)," ").concat(G(h.token0PriceUSD,S.token0PriceUSD))),Y("Price ".concat(null===H||void 0===H||null===(l=H.token1)||void 0===l?void 0:l.symbol,": ").concat(V(h.token1PriceUSD,6)," ").concat(G(h.token1PriceUSD,S.token1PriceUSD))),Y("Reserve ".concat(null===H||void 0===H||null===(o=H.token0)||void 0===o?void 0:o.symbol,": ").concat(V(h.reserve0)," ").concat(G(h.reserve0,S.reserve0))),Y("Reserve ".concat(null===H||void 0===H||null===(i=H.token1)||void 0===i?void 0:i.symbol,": ").concat(V(h.reserve1)," ").concat(G(h.reserve1,S.reserve1))),Y("LP ".concat(null===H||void 0===H||null===(r=H.token0)||void 0===r?void 0:r.symbol,": ").concat(V(h.reserve0*y)," ").concat(G(h.reserve0*y,S.reserve0*O))),Y("LP ".concat(null===H||void 0===H||null===(c=H.token1)||void 0===c?void 0:c.symbol,": ").concat(V(h.reserve1*y)," ").concat(G(h.reserve1*y,S.reserve1*O))),Y("LP ".concat(null===H||void 0===H||null===(u=H.token0)||void 0===u?void 0:u.symbol," USD: ").concat(V(g)," ").concat(G(g,j))),Y("LP ".concat(null===H||void 0===H||null===(d=H.token1)||void 0===d?void 0:d.symbol," USD: ").concat(V(k)," ").concat(G(k,P)))].join("\n");var w=this._chart.canvas.getBoundingClientRect(),C=v.getBoundingClientRect();m.classList.add(e.yAlign),m.style.position="absolute",m.style.opacity="1",m.style.backgroundColor=e.backgroundColor,m.style.left=Math.min(w.left+window.pageXOffset+e.caretX-C.width/2,window.innerWidth-C.width)+"px",m.style.top=w.top+window.pageYOffset+e.caretY+"px",m.style.fontFamily=e._bodyFontFamily,m.style.fontSize=e.bodyFontSize+"px",m.style.fontStyle=e._bodyFontStyle,m.style.padding=e.yPadding+"px "+e.xPadding+"px",m.style.pointerEvents="none"}}}else m.style.opacity="0"}}}),token0Balance:k,token1Balance:S,token0BalancePrev:O,token1BalancePrev:j}}),[te,Q,le.data]),ie=oe.data,re=oe.options,ce=oe.token0Balance,ue=oe.token1Balance,de=oe.token0BalancePrev,se=oe.token1BalancePrev;return i.a.createElement(u.a,{mb:4},i.a.createElement(s.a,null,i.a.createElement(w.a,{title:q(H),classes:{action:ae.alignSelfCenter},action:i.a.createElement(u.a,{display:"flex",flexDirection:"row",alignItems:"flex-end",alignSelf:"center"},i.a.createElement(u.a,{mr:1},i.a.createElement(x.a,{component:"a",href:"https://app.uniswap.org/#/swap?inputCurrency=".concat(null===H||void 0===H||null===(n=H.token0)||void 0===n?void 0:n.id,"&outputCurrency=").concat(null===H||void 0===H||null===(t=H.token1)||void 0===t?void 0:t.id),rel:"noopener",target:"_blank",variant:"contained",color:"secondary"},"Trade")),i.a.createElement(x.a,{component:"a",href:"https://uniswap.info/pair/".concat(null===H||void 0===H?void 0:H.id),rel:"noopener",target:"_blank",variant:"contained",color:"primary"},"Info"))}),i.a.createElement(O.a,null),i.a.createElement(S.a,null,i.a.createElement(d.a,{container:!0,spacing:2},i.a.createElement(d.a,{xs:12,md:4,lg:3,item:!0},i.a.createElement(u.a,{mb:2},i.a.createElement(L,null,i.a.createElement(w.a,{classes:{action:ae.alignSelfCenter},title:i.a.createElement(u.a,{display:"flex",alignItems:"center"},i.a.createElement(C.b,{address:null===H||void 0===H||null===(l=H.token0)||void 0===l?void 0:l.id}),i.a.createElement(D.a,{style:{marginLeft:4}},null===H||void 0===H||null===(c=H.token0)||void 0===c?void 0:c.symbol)),action:i.a.createElement(U.a,{label:"1 ".concat(null===H||void 0===H||null===(m=H.token0)||void 0===m?void 0:m.symbol," = ").concat(V(Number(null!==(p=null===H||void 0===H?void 0:H.reserve1)&&void 0!==p?p:0)/Number(null!==(b=null===H||void 0===H?void 0:H.reserve0)&&void 0!==b?b:1),6)," ").concat(null===H||void 0===H||null===(f=H.token1)||void 0===f?void 0:f.symbol)})}),i.a.createElement(O.a,null),i.a.createElement(S.a,null,i.a.createElement(u.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},i.a.createElement(D.a,{variant:"h4"},ce?V(ce):i.a.createElement(i.a.Fragment,null,"\xa0")),i.a.createElement(D.a,{variant:"h6"},i.a.createElement(Z,{curr:ce,prev:de})))))),i.a.createElement(u.a,{mb:2},i.a.createElement(L,null,i.a.createElement(w.a,{classes:{action:ae.alignSelfCenter},title:i.a.createElement(u.a,{display:"flex",alignItems:"center"},i.a.createElement(C.b,{address:null===H||void 0===H||null===(E=H.token1)||void 0===E?void 0:E.id}),i.a.createElement(D.a,{style:{marginLeft:4}},null===H||void 0===H||null===(h=H.token1)||void 0===h?void 0:h.symbol)),action:i.a.createElement(U.a,{label:"1 ".concat(null===H||void 0===H||null===(y=H.token1)||void 0===y?void 0:y.symbol," = ").concat(V(Number(null!==(k=null===H||void 0===H?void 0:H.reserve0)&&void 0!==k?k:0)/Number(null!==(A=null===H||void 0===H?void 0:H.reserve1)&&void 0!==A?A:1),6)," ").concat(null===H||void 0===H||null===(B=H.token0)||void 0===B?void 0:B.symbol)})}),i.a.createElement(O.a,null),i.a.createElement(S.a,null,i.a.createElement(u.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},i.a.createElement(D.a,{variant:"h4"},ue?V(ue):i.a.createElement(i.a.Fragment,null,"\xa0")),i.a.createElement(D.a,{variant:"h6"},i.a.createElement(Z,{curr:ue,prev:se})))))),i.a.createElement(L,null,i.a.createElement(w.a,{title:i.a.createElement(D.a,null,"Pooled Tokens")}),i.a.createElement(O.a,null),i.a.createElement(S.a,null,i.a.createElement(u.a,{display:"flex",alignItems:"center",mb:1},i.a.createElement(C.b,{address:null===H||void 0===H||null===(N=H.token0)||void 0===N?void 0:N.id}),i.a.createElement(D.a,{style:{marginLeft:4}},V(Number(null!==(R=null===H||void 0===H?void 0:H.reserve0)&&void 0!==R?R:0))),i.a.createElement(D.a,{style:{marginLeft:4}},null===H||void 0===H||null===(T=H.token0)||void 0===T?void 0:T.symbol)),i.a.createElement(u.a,{display:"flex",alignItems:"center"},i.a.createElement(C.b,{address:null===H||void 0===H||null===(F=H.token1)||void 0===F?void 0:F.id}),i.a.createElement(D.a,{style:{marginLeft:4}},V(Number(null!==(W=null===H||void 0===H?void 0:H.reserve1)&&void 0!==W?W:0))),i.a.createElement(D.a,{style:{marginLeft:4}},null===H||void 0===H||null===(M=H.token1)||void 0===M?void 0:M.symbol))))),i.a.createElement(d.a,{xs:12,md:8,lg:9,item:!0},i.a.createElement(L,null,i.a.createElement(S.a,null,i.a.createElement(u.a,{height:418,position:"relative"},i.a.createElement(r.Line,{data:ie,options:re})))))))))},M={};try{var H=localStorage.getItem("storedLiquidityPositions")||"{}",Q=JSON.parse(H);Object.keys(Q).forEach((function(e){M[e]=Q[e]}))}catch(te){console.log(te)}var J={height:400,maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,ticks:{display:!1}}],xAxes:[{ticks:{display:!1}}]},onResize:function(e,n){e.options={scales:{yAxes:[{stacked:!0,ticks:{display:!1}}],xAxes:[{ticks:{display:!1}}]}}}},K=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(t,a){return(t[e]-a[e])*n}},X=function(e,n){return e&&e.reduce?e.reduce((function(e,t){return e[t[n]]=t,e}),{}):{}},V=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return(null!==e&&void 0!==e?e:0).toLocaleString(void 0,{maximumFractionDigits:n,minimumFractionDigits:n})},Y=function(e){return"<p>".concat(e,"</p>")},z=function(e){return"<b>".concat(e,"</b>")};function G(e,n){if("number"!==typeof e)return"";if("number"!==typeof n)return"";if(!n)return"";var t=(e-n)/n*100;return'<span style="color: '.concat(t>=0?"green":"red",'"><b>').concat(V(t,2),"%</b></span>")}function Z(e){var n=e.curr,t=e.prev;if("number"!==typeof n)return null;if("number"!==typeof t)return null;if(!t)return null;var a=(n-t)/t*100;return i.a.createElement("span",{style:{color:a>=0?"green":"red"}},i.a.createElement("b",null,V(a,2),"%"))}var _=function(){var e=document.getElementById("chartjs-tooltip");return e||((e=document.createElement("div")).id="chartjs-tooltip",e.innerHTML="<table></table>",document.body.appendChild(e)),e};function $(e){var n={reserve0:Number(null===e||void 0===e?void 0:e.reserve0),reserve1:Number(null===e||void 0===e?void 0:e.reserve1),token0PriceUSD:Number(null===e||void 0===e?void 0:e.token0PriceUSD),token1PriceUSD:Number(null===e||void 0===e?void 0:e.token1PriceUSD)};return!n.token0PriceUSD&&n.token1PriceUSD&&(n.token0PriceUSD=n.reserve1/n.reserve0*n.token1PriceUSD),!n.token1PriceUSD&&n.token0PriceUSD&&(n.token0PriceUSD=n.reserve0/n.reserve1*n.token0PriceUSD),n}function ee(e,n){var t,a,l,o,i,r,c=null!==(t=Number(null===e||void 0===e?void 0:e.liquidityTokenTotalSupply))&&void 0!==t?t:0,u=null!==(a=Number(null===n||void 0===n?void 0:n.liquidityTokenBalance))&&void 0!==a?a:0,d=c&&u&&null!==(l=Number(u/c))&&void 0!==l?l:0,s=null!==(o=Number(null!==(i=null===n||void 0===n||null===(r=n.liquidityPosition)||void 0===r?void 0:r.poolOwnership)&&void 0!==i?i:0))&&void 0!==o?o:0;return Math.max(s,d)}var ne=Object(B.a)((function(e){return Object(N.a)({alignSelfCenter:{alignSelf:"center"},alignCenter:{display:"flex",alignItems:"center"}})}));n.default=T}}]);
//# sourceMappingURL=2.747dcfcc.chunk.js.map