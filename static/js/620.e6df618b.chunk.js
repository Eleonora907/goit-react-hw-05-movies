"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[620],{9620:function(n,t,r){r.r(t);var e=r(9439),a=r(1302),c=(r(2791),r(7689)),i=r(8565),u=r(2579),o=r(6454),s=r(184);t.default=function(){var n=(0,c.UO)().movieId,t=(0,a.i)(i.xc,n),r=(0,e.Z)(t,1)[0];return 0===r.length?(0,s.jsx)("p",{children:"We don`t have any casts for this movie."}):(0,s.jsx)(o.yY,{children:(0,s.jsx)("ul",{children:r&&r.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"".concat(u),alt:n.name,width:"150"}),(0,s.jsx)("p",{children:n.name}),(0,s.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}},1302:function(n,t,r){r.d(t,{i:function(){return i}});var e=r(9439),a=r(2791),c=r(7596),i=function(n,t){var r=(0,a.useState)([]),i=(0,e.Z)(r,2),u=i[0],o=i[1];return(0,a.useEffect)((function(){n(t).then((function(n){return o(n)})).catch((function(){return c.Am.error("Something went wrong!")}))}),[n,t]),[u,o]}},6454:function(n,t,r){r.d(t,{OD:function(){return s},dM:function(){return p},fI:function(){return l},yY:function(){return f}});var e,a,c,i,u=r(168),o=r(5867),s=o.ZP.div(e||(e=(0,u.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),p=o.ZP.img(a||(a=(0,u.Z)(["\n  width: 500px;\n"]))),f=o.ZP.div(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  gap: 10px;\n  font-size: 1.5rem;\n"]))),l=o.ZP.ul(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  gap: 20px;\n  font-size: 1.2rem;\n"])))},8565:function(n,t,r){r.d(t,{Hx:function(){return f},Y5:function(){return s},bI:function(){return l},wr:function(){return o},xc:function(){return p}});var e=r(4165),a=r(5861),c=r(1243),i="fb2464989c4bf946a62db0b7867c9354",u="https://api.themoviedb.org/3",o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/trending/movie/day"),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t),{params:{api_key:i,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/search/movie"),{params:{api_key:i,query:t,include_adult:!1,page:1,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2579:function(n,t,r){n.exports=r.p+"static/media/no_image_available.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=620.e6df618b.chunk.js.map