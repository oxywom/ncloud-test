_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"//HL":function(t,e){t.exports="/_next/static/images/\uad11\uace03-3d7b2ec3ef3390d9c25148e25eb2c6df.jpg"},DxX1:function(t,e){t.exports="/_next/static/images/\uad11\uace05-20ce9ad4bb4242eb5d48abce96417c7d.jpg"},OoXJ:function(t,e,a){"use strict";var n=a("KQm4"),o=a("q1tI"),i=a.n(o),c=a("mr32"),l=a("/MKj"),r=a("p+NB"),s=i.a.createElement;e.a=function(t){var e=t.tagsData,a=t.boardNum,d=c.a.CheckableTag,u=Object(l.c)((function(t){return t.user})).location,p=Object(l.b)(),m=Object(o.useState)([]),f=m[0],g=m[1],h=Object(o.useCallback)((function(t,e){var o=e?[t]:f.filter((function(e){return e!==t}));g(Object(n.a)(o)),p({type:r.k,data:o[0],boardNum:a,location:u}),p({type:r.ib,data:o[0]}),console.log("You are interested in: ",o),console.log("You are interested in: ",o[0])}),[u]);return Object(o.useEffect)((function(){g(["\uc804\uccb4"])}),[]),s(i.a.Fragment,null,e.map((function(t){return s(d,{key:t,checked:f.indexOf(t)>-1,onChange:function(e){return h(t,e)}},t)})))}},RNiq:function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSP",(function(){return C}));var n=a("q1tI"),o=a.n(n),i=a("/MKj"),c=a("2/Rp"),l=a("5bA4"),r=a("UESt"),s=a("//HL"),d=a.n(s),u=a("mBmF"),p=a.n(u),m=a("kx+Q"),f=a.n(m),g=a("djgb"),h=a.n(g),b=a("DxX1"),w=a.n(b),x=a("LAVF"),v=a("p+NB"),y=a("OoXJ"),_=a("AKfN"),P=a("5Yp1"),j=a("zykw"),N=a("vOnD"),D=o.a.createElement,O=N.b.div.withConfig({displayName:"pages__PostCarDiv2",componentId:"sc-1rmy6t3-0"})(["width:100%;display:flex;flex-wrap:wrap;justify-content:center;"]),Y=N.b.div.withConfig({displayName:"pages__AdvertisementDiv",componentId:"sc-1rmy6t3-1"})(["width:950px;height:297px;position:relative;min-width:950px;"]);var C=!0;e.default=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.user})),a=e.me,o=e.location,s=Object(i.c)((function(t){return t.post})),u=s.mainPosts,m=s.hasMorePost,g=s.loadPostLoading,b=(s.reTweetError,s.id,s.object_TagsData),N=s.selectedTag,C=Object(n.useState)(!0),I=C[0],k=C[1],E=Object(n.useCallback)((function(){k(!I)}),[I]),M=[{src:p.a},{src:f.a},{src:d.a},{src:h.a},{src:w.a}],A=Object(n.useState)(0),T=A[0],S=A[1],X=Object(n.useState)(p.a),L=X[0],R=X[1],q=function(){T<5?(S(T+1),R(M[T].src)):5===T&&S(0)},z=function(){T>0&&(S(T-1),R(M[T-1].src),console.log(L))};return Object(n.useEffect)((function(){t({type:x.f})}),[]),Object(n.useEffect)((function(){a&&(t({type:v.ib,data:"\uc804\uccb4"}),t({type:v.t,data:"\uc804\uccb4",boardNum:1,location:o}))}),[]),Object(n.useEffect)((function(){var e=function(){if(window.pageYOffset+document.documentElement.clientHeight>document.documentElement.scrollHeight-100&&m&&!g){var e,a=null===(e=u[u.length-1])||void 0===e?void 0:e.id;t({type:v.t,data:N,boardNum:1,lastId:a,location:o})}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[m,g]),D("div",null,D(P.a,null,D(Y,null,D("img",{src:L,width:"100%",height:"100%"}),D("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:z},D(l.a,{style:{fontSize:"25px",color:"gray"}})),D("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:q},D(r.a,{style:{fontSize:"25px",color:"gray"}}))),D("div",{style:{textAlign:"center"}},D(y.a,{tagsData:b,boardNum:1}),D(c.a,{onClick:E},"\uc804\ud658\uc2a4\uc704\uce58")),I?u.map((function(t){return D(_.a,{key:t.id,post:t})})):D(O,null,u.map((function(t){return D(j.a,{key:t.id,post:t})})))))}},djgb:function(t,e){t.exports="/_next/static/images/\uad11\uace04-7e09c39d73eca93c5350f18e9937b2a1.jpeg"},"kx+Q":function(t,e){t.exports="/_next/static/images/\uad11\uace02-e0a9c449fc5b3633d5131af325943d97.jpg"},mBmF:function(t,e){t.exports="/_next/static/images/\uad11\uace01-62f333df728ce9e7f0548b0f4ba54eb1.jpeg"},vlRD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},zykw:function(t,e,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("bx4M"),c=a("vOnD"),l=a("X7II"),r=a.n(l),s=a("nOHt"),d=a.n(s),u=a("wd/R"),p=a.n(u),m=o.a.createElement,f=c.b.div.withConfig({displayName:"PostCard2__PoastDiv",componentId:"sc-1m8gw32-0"})(["width:200px;display:flex;flex-wrap:wrap;"]),g=c.b.div.withConfig({displayName:"PostCard2__TextDiv",componentId:"sc-1m8gw32-1"})(["width:100%;height:25px;text-align:start;font-size:1rem;"]),h=c.b.div.withConfig({displayName:"PostCard2__PriceDiv",componentId:"sc-1m8gw32-2"})(["height:4px;width:50%;flex-wrap:wrap;padding-top:40px;color:#a7a7a7;font-weight:600;"]),b=Object(c.b)(h).withConfig({displayName:"PostCard2__TimeDiv",componentId:"sc-1m8gw32-3"})(["text-align:end;font-weight:400;"]),w=c.b.div.withConfig({displayName:"PostCard2__PostCardDiv2",componentId:"sc-1m8gw32-4"})([".ant-card-body{height:120px;}"]);e.a=function(t){var e=t.post,a=Object(n.useCallback)((function(){d.a.push("/post/".concat(e.id,"*").concat(e.boardNum),void 0,{shallow:!0})}),[e.id]);return m(o.a.Fragment,null,m(w,null,m("div",{style:{padding:"30px"},onClick:a},1===e.boardNum&&m(i.a,{hoverable:!0,style:{width:"244px"},cover:m("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.ProdPostImages[0]?"http://localhost:3065/".concat(e.ProdPostImages[0].src):r.a})},m(f,null,m(g,null,e.title),m(h,null,e.price,"\uc6d0"),m(b,null,p()(e.createdAt).format("YYYY.MM.DD")))),2===e.boardNum&&m(i.a,{hoverable:!0,style:{width:"244px"},cover:m("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.ProdPostImages[0]?"http://localhost:3065/".concat(e.ProdPostImages[0].src):r.a})},m(f,null,m(g,null,e.title),m(h,null,e.price,"\uc6d0"),m(b,null,p()(e.createdAt).format("YYYY.MM.DD")))),3===e.boardNum&&m(i.a,{hoverable:!0,style:{width:"244px"},cover:m("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.PowerPostImages[0]?"http://localhost:3065/".concat(e.PowerPostImages[0].src):r.a})},m(f,null,m(g,null,e.title),m(h,null,e.price,"\uc6d0"),m(b,null,p()(e.createdAt).format("YYYY.MM.DD")))),4===e.boardNum&&m(i.a,{hoverable:!0,style:{width:"244px"},cover:m("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.PowerPostImages[0]?"http://localhost:3065/".concat(e.PowerPostImages[0].src):r.a})},m(f,null,m(g,null,e.title),m(h,null,e.price,"\uc6d0"),m(b,null,p()(e.createdAt).format("YYYY.MM.DD")))),5===e.boardNum&&m(i.a,{hoverable:!0,style:{width:"244px"},cover:m("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.TogetherPostImages[0]?"http://localhost:3065/".concat(e.TogetherPostImages[0].src):r.a})},m(f,null,m(g,null,e.title),m(h,null,e.originalPrice,"\uc6d0"),m(b,null,p()(e.createdAt).format("YYYY.MM.DD")))))))}}},[["vlRD",0,2,5,8,1,3,4,6,7,10]]]);