import{_ as k,u as $,o as n,c as a,r as f,a as C,F as h,b as t,t as c,d as b,e as O,p as w,f as N,g as L,h as S,i as g,j as v}from"./index-709c2c8b.js";import"https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";import"https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";const D={class:"roomContainer"},j={class:"room"},E={class:"title"},x={class:"dispositivo"},I=["onClick"],R=["onClick"],V={key:0,class:"inline-flex"},W=["onClick"],q=["onClick"],B={key:1,class:"inline-flex"},A=["onClick"],F=["onClick"],P={__name:"RoomDashboard",props:{dispList:Array},setup(i){const d=$(),l=o=>{b("dispositivos",o,!1)},r=o=>{b("dispositivos",o,!0)},_=o=>{window.open(`https://quanillo.github.io/dispositivos/Sensor/${o}`,"_blank")},p=o=>{window.open(`https://quanillo.github.io/dispositivos/Ejecutor/${o}`,"_blank")};return(o,y)=>(n(!0),a(h,null,f(C(d).user.rooms.filter(e=>e!=="No room"),e=>(n(),a("div",D,[t("div",j,[t("div",E,[t("h1",null,c(e),1)]),(n(!0),a(h,null,f(i.dispList.filter(s=>s.room==e&&s.type=="sensor"),s=>(n(),a("div",x,[t("p",{class:"dispName",onClick:u=>_(s.id)},c(s.name),9,I),t("p",null,c(s.param),1),t("p",null,c(s.value),1)]))),256)),(n(!0),a(h,null,f(i.dispList.filter(s=>s.room==e&&s.type=="ejecutor"),(s,u)=>(n(),a("div",{class:"dispositivo",key:u},[t("p",{class:"dispName",onClick:m=>p(s.id)},c(s.name),9,R),t("p",null,c(s.state),1),s.state?(n(),a("div",V,[t("button",{onClick:m=>r(s.id),class:"buttonOnSelected"}," On ",8,W),t("button",{onClick:m=>l(s.id),class:"buttonOff"}," Off ",8,q)])):(n(),a("div",B,[t("button",{onClick:m=>r(s.id),class:"buttonOn"}," On ",8,A),t("button",{onClick:m=>l(s.id),class:"buttonOffSelected"}," Off ",8,F)]))]))),128))])]))),256))}},G=k(P,[["__scopeId","data-v-c42f3526"]]);const M=i=>(w("data-v-b25ef21a"),i=i(),N(),i),U={key:0,class:"roomContainer"},z=M(()=>t("div",{class:"title"},[t("h1",null,"No room")],-1)),H={class:"dispositivo"},J=["onClick"],K=["onClick"],Q={key:0,class:"buttons"},T=["onClick"],X=["onClick"],Y={key:1,class:"inline-flex"},Z=["onClick"],ee=["onClick"],te={__name:"NoRoomDashboard",props:{dispList:Array},setup(i){const d=i,l=o=>{b("dispositivos",o,!1)},r=o=>{b("dispositivos",o,!0)},_=o=>{window.open(`https://quanillo.github.io/dispositivos/Sensor/${o}`,"_blank")},p=o=>{window.open(`https://quanillo.github.io/dispositivos/Ejecutor/${o}`,"_blank")};return(o,y)=>d.dispList.filter(e=>e.room==="No room").length>0?(n(),a("div",U,[z,(n(!0),a(h,null,f(d.dispList.filter(e=>e.room=="No room"&&e.type=="sensor"),e=>(n(),a("div",H,[t("p",{class:"dispName",onClick:s=>_(e.id)},c(e.name),9,J),t("p",null,c(e.param),1),t("p",null,c(e.value),1)]))),256)),(n(!0),a(h,null,f(d.dispList.filter(e=>e.room=="No room"&&e.type=="ejecutor"),(e,s)=>(n(),a("div",{class:"dispositivo",key:s},[t("p",{class:"dispName",onClick:u=>p(e.id)},c(e.name),9,K),t("p",null,c(e.state),1),e.state?(n(),a("div",Q,[t("button",{onClick:u=>r(e.id),class:"buttonOnSelected"}," On ",8,T),t("button",{onClick:u=>l(e.id),class:"buttonOff"}," Off ",8,X)])):(n(),a("div",Y,[t("button",{onClick:u=>r(e.id),class:"buttonOn"}," On ",8,Z),t("button",{onClick:u=>l(e.id),class:"buttonOffSelected"}," Off ",8,ee)]))]))),128))])):O("",!0)}},se=k(te,[["__scopeId","data-v-b25ef21a"]]);const oe={class:"container"},ne={__name:"DashboardView",setup(i){const d=$(),l=L([]);return S(()=>{g(d.user.name,r=>{const _=[];r.forEach(p=>{const o=p.data();o.id=p.id,_.push(o)}),l.value=_})}),(r,_)=>(n(),a(h,null,[t("p",null,"Welcome "+c(C(d).user.name)+", this is your dashboard panel",1),t("div",oe,[v(G,{dispList:l.value},null,8,["dispList"]),v(se,{dispList:l.value},null,8,["dispList"])])],64))}},le=k(ne,[["__scopeId","data-v-b689d79d"]]);export{le as default};