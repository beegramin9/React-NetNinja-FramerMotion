(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{22:function(e,a,t){e.exports=t(33)},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(19),o=t.n(r),l=(t(27),t(21)),s=t(12),c=t(11),p=t(2),d=t(1),m={hidden:{rotate:-180},visible:{rotate:0,transition:{duration:1}}},h={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}}},u=function(){return i.a.createElement("header",null,i.a.createElement(d.b.div,{className:"logo",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:.7},i.a.createElement(d.b.svg,{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",variants:m,initial:"hidden",animate:"visible"},i.a.createElement(d.b.path,{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z",variants:h}),i.a.createElement(d.b.path,{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z",variants:h}))),i.a.createElement(d.b.div,{className:"title",initial:{y:-250},animate:{y:-10},transition:{delay:.2,type:"spring",stiffness:120}},i.a.createElement("h1",null,"Pizza Joint")))},x=t(7),b={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}},animationTwo:{y:[0,-40],x:0,transition:{y:{yoyo:1/0,duration:.25,ease:"easeOut"}}}},v={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:5}},tap:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:5}}},y=function(){var e=Object(d.c)("animationOne","animationTwo"),a=Object(c.a)(e,2),t=a[0],n=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.b.div,{className:"loader",variants:b,animate:t}),i.a.createElement(d.b.span,{className:"changeLoader",onClick:function(){return n()},variants:v,whileHover:"hover",whileTap:"tap"},"Change Loader"))},g={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:5}},tap:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:5}}},E={hidden:{opacity:0},visible:{opacity:1,transition:{delay:1.5,duration:1.5}},exit:{x:"-100vh",transition:{ease:"easeInOut"}}},f=function(){return i.a.createElement(d.b.div,{className:"home container",variants:E,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Welcome to Pizza Joint"),i.a.createElement(x.b,{to:"/base"},i.a.createElement(d.b.button,{variants:g,whileHover:"hover",whileTap:"tap"},"Create Your Pizza")),i.a.createElement(y,null))},w={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vh",transition:{ease:"easeInOut"}}},z={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},S={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}},tap:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}},O=function(e){var a=e.addBase,t=e.pizza;return i.a.createElement(d.b.div,{className:"base container",variants:w,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=t.base===e?"active":"";return i.a.createElement(d.b.li,{key:e,onClick:function(){return a(e)},whileHover:{scale:1.3,originX:0,color:"#f8e112"},whileTap:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),t.base&&i.a.createElement(d.b.div,{className:"next",variants:z},i.a.createElement(x.b,{to:"/toppings"},i.a.createElement(d.b.button,{variants:S,whileHover:"hover",whileTap:"tap"},"Next"))))},C={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vh",transition:{ease:"easeInOut"}}},j={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}},tap:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.3,yoyo:1/0}}},T=function(e){var a=e.addTopping,t=e.pizza;return i.a.createElement(d.b.div,{className:"toppings container",variants:C,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=t.toppings.includes(e)?"active":"";return i.a.createElement(d.b.li,{key:e,onClick:function(){return a(e)},whileHover:{scale:1.3,originX:0,color:"#f8e112"},whileTap:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(x.b,{to:"/order"},i.a.createElement(d.b.button,{variants:j,whileHover:"hover",whileTap:"tap"},"Order")))},N={hidden:{opacity:0,x:"100vw",transition:{staggerChildren:.5}},visible:{opacity:1,x:0,transition:{type:"spring",mass:.4,damping:8,staggerChildren:.4,when:"beforeChildren"}}},k={hidden:{opacity:0},visible:{opacity:1}},H=function(e){var a=e.pizza,t=e.setShowModal;return Object(n.useEffect)((function(){setTimeout((function(){return t(!0)}),3e3)}),[t]),i.a.createElement(d.b.div,{className:"container order",variants:N,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Thank you for your order :)"),i.a.createElement(d.b.p,{variants:k},"You ordered a ",a.base," pizza with:"),i.a.createElement(d.b.div,{variants:k},a.toppings.map((function(e){return i.a.createElement("div",{key:e},e)}))))},M={visible:{opacity:1},hidden:{opacity:0}},B={hidden:{y:"-100vh",opacity:0},visible:{y:"200px",opacity:1,transition:{delay:.5}}},L=function(e){var a=e.showModal;return i.a.createElement(d.a,null,a&&i.a.createElement(d.b.div,{className:"backdrop",variants:M,initial:"hidden",animate:"visible",exit:"hidden"},i.a.createElement(d.b.div,{className:"modal",variants:B},i.a.createElement("p",null,"Want to make another Pizza?"),i.a.createElement(x.b,{to:"/"},i.a.createElement(d.b.button,{whileHover:{scale:1.1,color:"#ff2994"},whileTap:{scale:1.1,color:"#ff2994"}},"Start Again")))))};var I=function(){var e=Object(p.f)(),a=Object(n.useState)({base:"",toppings:[]}),t=Object(c.a)(a,2),r=t[0],o=t[1],m=Object(n.useState)(!1),h=Object(c.a)(m,2),x=h[0],b=h[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null),i.a.createElement(L,{showModal:x}),i.a.createElement(d.a,{exitBeforeEnter:!0,onExitComplete:function(){return b(!1)}},i.a.createElement(p.c,{location:e,key:e.key},i.a.createElement(p.a,{path:"/base"},i.a.createElement(O,{addBase:function(e){o(Object(s.a)(Object(s.a)({},r),{},{base:e}))},pizza:r})),i.a.createElement(p.a,{path:"/toppings"},i.a.createElement(T,{addTopping:function(e){var a;a=r.toppings.includes(e)?r.toppings.filter((function(a){return a!==e})):[].concat(Object(l.a)(r.toppings),[e]),o(Object(s.a)(Object(s.a)({},r),{},{toppings:a}))},pizza:r})),i.a.createElement(p.a,{path:"/order"},i.a.createElement(H,{pizza:r,setShowModal:b})),i.a.createElement(p.a,{path:"/"},i.a.createElement(f,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x.a,null,i.a.createElement(I,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d0f576bc.chunk.js.map