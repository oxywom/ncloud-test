_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"//HL":function(t,e){t.exports="/_next/static/images/\uad11\uace03-3d7b2ec3ef3390d9c25148e25eb2c6df.jpg"},DxX1:function(t,e){t.exports="/_next/static/images/\uad11\uace05-20ce9ad4bb4242eb5d48abce96417c7d.jpg"},FLst:function(t,e,o){"use strict";o.r(e),o.d(e,"__N_SSP",(function(){return Y}));var i=o("q1tI"),a=o.n(i),n=o("/MKj"),l=o("nOHt"),s=(o("uUeM"),o("5Yp1")),c=o("p+NB"),r=o("2/Rp"),p=o("AKfN"),d=o("zykw"),u=o("vOnD"),g=o("KQm4"),h=o("mr32"),f=a.a.createElement;var m=function(t){var e=t.tagsData,o=t.boardNum,l=t.select,s=t.search,r=h.a.CheckableTag,p=Object(n.b)(),d=Object(n.c)((function(t){return t.user})).location,u=Object(i.useState)([]),m=u[0],x=u[1],b=Object(i.useCallback)((function(t,e){var i=e?[t]:m.filter((function(e){return e!==t}));x(Object(g.a)(i)),p({type:c.hb,data:i[0],boardNum:o}),p({type:c.ib,data:i[0]}),console.log(s),p({type:c.C,location:d,select:l,searchword:s,boardNum:o,tag:i[0]}),console.log("You are interested in: ",i),console.log("You are interested in: ",i[0])}),[m]);return Object(i.useEffect)((function(){x(["\uc804\uccb4"])}),[]),f(a.a.Fragment,null,e.map((function(t){return f(r,{key:t,checked:m.indexOf(t)>-1,onChange:function(e){return b(t,e)}},t)})))},x=o("mBmF"),b=o.n(x),y=o("kx+Q"),w=o.n(y),v=o("//HL"),k=o.n(v),_=o("djgb"),C=o.n(_),N=o("DxX1"),I=o.n(N),P=o("5bA4"),D=o("UESt"),j=a.a.createElement,O=u.b.div.withConfig({displayName:"searchInput__PostCarDiv2",componentId:"sc-180im9u-0"})(["width:100%;display:flex;flex-wrap:wrap;justify-content:center;"]),S=u.b.div.withConfig({displayName:"searchInput__AdvertisementDiv",componentId:"sc-180im9u-1"})(["width:100%;height:297px;position:relative;"]);var Y=!0;e.default=function(){var t=Object(n.b)(),e=Object(l.useRouter)().query.searchInput,o=Object(n.c)((function(t){return t.post})),u=o.mainPosts,g=(o.hasMorePost,o.loadPostLoading,o.boardNum),h=o.object_TagsData,f=o.talent_TagsData,x=o.cooperate_tagsData,y=(o.play_tagsData,Object(n.c)((function(t){return t.user}))),v=(y.userInfo,y.me,y.location),_=[{src:b.a},{src:w.a},{src:k.a},{src:C.a},{src:I.a}],N=Object(i.useState)(0),Y=N[0],z=N[1],M=Object(i.useState)(b.a),A=M[0],E=M[1],F=function(){Y<5?(z(Y+1),E(_[Y].src)):5===Y&&z(0)},q=function(){Y>0&&(z(Y-1),E(_[Y-1].src),console.log(A))},T=e.split("*"),R=T[0],L=T[1],H=Object(i.useState)([]),K=(H[0],H[1]),X=Object(i.useState)(!0),B=X[0],U=X[1],Q=Object(i.useCallback)((function(){U(!B)}),[B]),J=Object(i.useState)(u),V=J[0],G=J[1];return Object(i.useEffect)((function(){"\uc804\uccb4"!==V[0]&&K(u.filter((function(t){return t.category===V})))}),[V]),Object(i.useEffect)((function(){G(["\uc804\uccb4"])}),[]),Object(i.useEffect)((function(){t({type:c.F,location:v,select:R,searchword:L,boardNum:g})}),[v,R,L,g]),j("div",null,1===g&&j(s.a,null,B?j(a.a.Fragment,null,j(S,null,j("img",{src:A,width:"100%",height:"100%"}),j("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:q},j(P.a,{style:{fontSize:"25px",color:"gray"}})),j("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:F},j(D.a,{style:{fontSize:"25px",color:"gray"}}))),j("div",{style:{textAlign:"center"}},j(m,{boardNum:1,tagsData:h,select:R,search:L}),j(r.a,{onClick:Q},"\uc804\ud658\uc2a4\uc704\uce58")),u.map((function(t){return j(p.a,{key:t.id,post:t})}))):j(a.a.Fragment,null,j(S,null,j("img",{src:A,width:"100%",height:"100%"}),j("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:q},j(P.a,{style:{fontSize:"25px",color:"gray"}})),j("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:F},j(D.a,{style:{fontSize:"25px",color:"gray"}}))),j("div",{style:{textAlign:"center"}},j(m,{boardNum:1,tagsData:h}),j(r.a,{onClick:Q},"\uc804\ud658\uc2a4\uc704\uce58")),j(O,null,u.map((function(t){return j(d.a,{key:t.id,post:t})}))))),2===g&&j(s.a,null,j(a.a.Fragment,null,j(S,null,j("img",{src:A,width:"100%",height:"100%"}),j("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:q},j(P.a,{style:{fontSize:"25px",color:"gray"}})),j("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:F},j(D.a,{style:{fontSize:"25px",color:"gray"}}))),j("div",{style:{textAlign:"center"}},j(m,{boardNum:2,tagsData:h}),j(r.a,{onClick:Q},"\uc804\ud658\uc2a4\uc704\uce58")),B?u.map((function(t){return j(p.a,{key:t.id,post:t})})):j(O,null,u.map((function(t){return j(d.a,{key:t.id,post:t})}))))),3===g&&j(s.a,null,j(a.a.Fragment,null,j(S,null,j("img",{src:A,width:"100%",height:"100%"}),j("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:q},j(P.a,{style:{fontSize:"25px",color:"gray"}})),j("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:F},j(D.a,{style:{fontSize:"25px",color:"gray"}}))),j("div",{style:{textAlign:"center",paddingRight:"80px"}},j(m,{boardNum:3,tagsData:f}),j(r.a,{onClick:Q},"\uc804\ud658\uc2a4\uc704\uce58")),B?u.map((function(t){return j(p.a,{key:t.id,post:t})})):j(O,null,u.map((function(t){return j(d.a,{key:t.id,post:t})}))))),4===g&&j(s.a,null,j(a.a.Fragment,null,j(S,null,j("img",{src:A,width:"100%",height:"100%"}),j("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:q},j(P.a,{style:{fontSize:"25px",color:"gray"}})),j("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:F},j(D.a,{style:{fontSize:"25px",color:"gray"}}))),j("div",{style:{textAlign:"center",paddingRight:"80px"}},j(m,{boardNum:4,tagsData:f}),j(r.a,{onClick:Q},"\uc804\ud658\uc2a4\uc704\uce58")),B?u.map((function(t){return j(p.a,{key:t.id,post:t})})):j(O,null,u.map((function(t){return j(d.a,{key:t.id,post:t})}))))),5===g&&j(s.a,null,j(a.a.Fragment,null,j(S,null,j("img",{src:A,width:"100%",height:"100%"}),j("div",{style:{position:"absolute",top:"130px",width:"50px"},onClick:q},j(P.a,{style:{fontSize:"25px",color:"gray"}})),j("div",{style:{position:"absolute",top:"130px",left:"900px",width:"50px"},onClick:F},j(D.a,{style:{fontSize:"25px",color:"gray"}}))),j("div",{style:{textAlign:"center",paddingRight:"80px"}},j(m,{boardNum:5,tagsData:x}),j(r.a,{onClick:Q},"\uc804\ud658\uc2a4\uc704\uce58")),B?u.map((function(t){return j(p.a,{key:t.id,post:t})})):j(O,null,u.map((function(t){return j(d.a,{key:t.id,post:t})}))))))}},djgb:function(t,e){t.exports="/_next/static/images/\uad11\uace04-7e09c39d73eca93c5350f18e9937b2a1.jpeg"},i3Ix:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[searchInput]",function(){return o("FLst")}])},"kx+Q":function(t,e){t.exports="/_next/static/images/\uad11\uace02-e0a9c449fc5b3633d5131af325943d97.jpg"},mBmF:function(t,e){t.exports="/_next/static/images/\uad11\uace01-62f333df728ce9e7f0548b0f4ba54eb1.jpeg"},uUeM:function(t,e,o){"use strict";o("ODXe"),o("YFqc"),o("BvKs"),o("2/Rp"),o("BMrR"),o("kPKH"),o("TpwP"),o("/MKj"),o("3zrx");var i=o("q1tI"),a=o.n(i),n=(o("nOHt"),o("vOnD")),l=o("5rEg");n.b.img.withConfig({displayName:"styles__SidebarImg",componentId:"sc-g48kqf-0"})(["width:40px;role:presantation;"]),n.b.ul.withConfig({displayName:"styles__SidebarUl",componentId:"sc-g48kqf-1"})(["list-style-type:none;line-height:1;color:black;"]),n.b.li.withConfig({displayName:"styles__SidebarLi",componentId:"sc-g48kqf-2"})(["cursor:pointer;transition:all 0.25s ease;line-height:70px;:hover{transform:scale(1.3,1.3);}color:black;"]),n.b.div.withConfig({displayName:"styles__SidebarDiv",componentId:"sc-g48kqf-3"})(["left:0px;border-radius:2rem;color:black;width:300px;height:1500px;font-weight:bold;line-height:250%;background:skyblue !important;"]),n.b.div.withConfig({displayName:"styles__LeftSidebar",componentId:"sc-g48kqf-4"})(["position:fixed;float:left;top:0px;left:9%;width:220px;height:1000px;background:skyblue !important;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]),n.b.div.withConfig({displayName:"styles__Navbar",componentId:"sc-g48kqf-5"})(["position:fixed;float:left;top:0px;left:29%;width:1800px;background:skyblue !important;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]),n.b.div.withConfig({displayName:"styles__RightSidebar",componentId:"sc-g48kqf-6"})(["position:fixed;top:1%;left:40%;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]),Object(n.b)(l.a.Search).withConfig({displayName:"styles__SearchInput",componentId:"sc-g48kqf-7"})(["vertical-align:middle;"]),o("LAVF"),a.a.createElement},zykw:function(t,e,o){"use strict";var i=o("q1tI"),a=o.n(i),n=o("bx4M"),l=o("vOnD"),s=o("X7II"),c=o.n(s),r=o("nOHt"),p=o.n(r),d=o("wd/R"),u=o.n(d),g=a.a.createElement,h=l.b.div.withConfig({displayName:"PostCard2__PoastDiv",componentId:"sc-1m8gw32-0"})(["width:200px;display:flex;flex-wrap:wrap;"]),f=l.b.div.withConfig({displayName:"PostCard2__TextDiv",componentId:"sc-1m8gw32-1"})(["width:100%;height:25px;text-align:start;font-size:1rem;"]),m=l.b.div.withConfig({displayName:"PostCard2__PriceDiv",componentId:"sc-1m8gw32-2"})(["height:4px;width:50%;flex-wrap:wrap;padding-top:40px;color:#a7a7a7;font-weight:600;"]),x=Object(l.b)(m).withConfig({displayName:"PostCard2__TimeDiv",componentId:"sc-1m8gw32-3"})(["text-align:end;font-weight:400;"]),b=l.b.div.withConfig({displayName:"PostCard2__PostCardDiv2",componentId:"sc-1m8gw32-4"})([".ant-card-body{height:120px;}"]);e.a=function(t){var e=t.post,o=Object(i.useCallback)((function(){p.a.push("/post/".concat(e.id,"*").concat(e.boardNum),void 0,{shallow:!0})}),[e.id]);return g(a.a.Fragment,null,g(b,null,g("div",{style:{padding:"30px"},onClick:o},1===e.boardNum&&g(n.a,{hoverable:!0,style:{width:"244px"},cover:g("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.ProdPostImages[0]?"http://localhost:3065/".concat(e.ProdPostImages[0].src):c.a})},g(h,null,g(f,null,e.title),g(m,null,e.price,"\uc6d0"),g(x,null,u()(e.createdAt).format("YYYY.MM.DD")))),2===e.boardNum&&g(n.a,{hoverable:!0,style:{width:"244px"},cover:g("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.ProdPostImages[0]?"http://localhost:3065/".concat(e.ProdPostImages[0].src):c.a})},g(h,null,g(f,null,e.title),g(m,null,e.price,"\uc6d0"),g(x,null,u()(e.createdAt).format("YYYY.MM.DD")))),3===e.boardNum&&g(n.a,{hoverable:!0,style:{width:"244px"},cover:g("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.PowerPostImages[0]?"http://localhost:3065/".concat(e.PowerPostImages[0].src):c.a})},g(h,null,g(f,null,e.title),g(m,null,e.price,"\uc6d0"),g(x,null,u()(e.createdAt).format("YYYY.MM.DD")))),4===e.boardNum&&g(n.a,{hoverable:!0,style:{width:"244px"},cover:g("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.PowerPostImages[0]?"http://localhost:3065/".concat(e.PowerPostImages[0].src):c.a})},g(h,null,g(f,null,e.title),g(m,null,e.price,"\uc6d0"),g(x,null,u()(e.createdAt).format("YYYY.MM.DD")))),5===e.boardNum&&g(n.a,{hoverable:!0,style:{width:"244px"},cover:g("img",{alt:"example",style:{width:"100%",height:"198px"},src:e.TogetherPostImages[0]?"http://localhost:3065/".concat(e.TogetherPostImages[0].src):c.a})},g(h,null,g(f,null,e.title),g(m,null,e.originalPrice,"\uc6d0"),g(x,null,u()(e.createdAt).format("YYYY.MM.DD")))))))}}},[["i3Ix",0,2,5,8,1,3,4,6,7,9,10]]]);