(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{299:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1sxFB",dialogsItems:"Dialogs_dialogsItems__97oGQ",active:"Dialogs_active__WqI2v",dialog:"Dialogs_dialog__3KztR",messages:"Dialogs_messages__3_VnK",message:"Dialogs_message__1pjJp"}},307:function(e,s,a){"use strict";a.r(s);a(0);var i=a(97),n=a(1),t=a(299),c=a.n(t),o=a(19),d=function(e){return Object(n.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(n.jsx)(o.b,{to:"/dialogs/"+e.id,children:e.name})})},l=function(e){return Object(n.jsx)("div",{className:c.a.message,children:e.message})},g=a(11),j=a(90),r=a(128),m=a(37),b=a(87),u=Object(b.a)(50),O=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{component:m.b,validate:[b.b,u],name:"newMessageBody",placeholder:"Enter your message"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Send"})})]})})),_=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(n.jsx)(d,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(n.jsx)(l,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?Object(n.jsxs)("div",{className:c.a.dialogs,children:[Object(n.jsx)("div",{className:c.a.dialogsItems,children:a}),Object(n.jsxs)("div",{className:c.a.messages,children:[Object(n.jsxs)("div",{children:[" ",i]}),Object(n.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(n.jsx)(g.a,{to:"/login"})},x=a(14),h=a(107),p=a(9);s.default=Object(p.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),h.a)(_)}}]);
//# sourceMappingURL=4.334ce0da.chunk.js.map