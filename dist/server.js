!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("koa-views")},function(e,t){e.exports=require("koa-static")},function(e,t){e.exports=require("koa-mount")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),i=n.n(u),a=n(2),s=n.n(a),c=n(3),f=n.n(c),l=n(4),d=n.n(l);const p=new o.a,b=new i.a;b.get("/",async e=>{e.status=200,await e.render("index")}),p.use(d()("/",f()(`${__dirname}/`))),p.use(s()(__dirname,{extension:"ejs"})),p.use(b.routes()),p.listen(3e3,"0.0.0.0")}]);