(function(t){function n(n){for(var r,s,o=n[0],c=n[1],u=n[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);a&&a(n);while(f.length)f.shift()();return l.push.apply(l,u||[]),e()}function e(){for(var t,n=0;n<l.length;n++){for(var e=l[n],r=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(r=!1)}r&&(l.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},l=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var a=c;l.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("div",[t._v("第"+t._s(t.n)+"回合")]),e("div",{staticClass:"chess"},[e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(0,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(1,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(2,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(3,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(4,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(5,n)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(6,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(7,n)}}}),e("Cell",{attrs:{n:t.n},on:{click:function(n){return t.greet(8,n)}}})],1)]),e("div",[t._v("结果："+t._s(null===t.res?"胜负未分":"胜利者为"+t.res))])])])},l=[],s=(e("d81d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cell",on:{click:t.changeCell}},[e("div",[t._v(t._s(t.text))])])}),o=[],c={data:function(){return{text:""}},props:["n"],methods:{changeCell:function(){""===this.text&&(this.text=this.n%2===0?"x":"o",this.$emit("click",this.text))}}},u=c,a=(e("e3d1"),e("2877")),p=Object(a["a"])(u,s,o,!1,null,null,null),f=p.exports,h={name:"App",components:{Cell:f},data:function(){return{n:0,res:null,map:[[null,null,null],[null,null,null],[null,null,null]]}},methods:{greet:function(t,n){this.n++,this.map[Math.floor(t/3)][t%3]=n,this.tell()},tell:function(){for(var t=0;t<3;t++)null!==this.map[t][0]&&this.map[t][0]===this.map[t][1]&&this.map[t][1]===this.map[t][2]&&(this.res=this.map[t][0]);for(var n=0;n<3;n++)null!==this.map[0][n]&&this.map[0][n]===this.map[1][n]&&this.map[1][n]===this.map[2][n]&&(this.res=this.map[0][n]);null!==this.map[0][0]&&this.map[0][0]===this.map[1][1]&&this.map[1][1]===this.map[2][2]&&(this.res=this.map[0][0]),null!==this.map[0][2]&&this.map[0][2]===this.map[1][1]&&this.map[1][1]===this.map[2][0]&&(this.res=this.map[0][2])},clean:function(){this.n=""}}},d=h,m=(e("034f"),Object(a["a"])(d,i,l,!1,null,null,null)),v=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,n,e){},cdd4:function(t,n,e){},e3d1:function(t,n,e){"use strict";e("cdd4")}});
//# sourceMappingURL=app.98b625e5.js.map