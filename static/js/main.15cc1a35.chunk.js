(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{22:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var o=n(3),c=n(0),i=n.n(c),s=n(13),a=n.n(s),r=(n(22),n(5)),u=n(1),b=n(2),l=n(6),j=n(4);function O(){var t=Object(r.a)(["\n          background-color: green;\n          color: white;\n        "]);return O=function(){return t},t}function d(){var t=Object(r.a)(["\n  cursor: pointer;\n  border: 1px solid black;\n  display: flex;\n  align-items: center;\n  height: 166px;\n\n  ","\n\n  h2 {\n    text-align: center;\n    margin: 0 auto;\n    font-size: 70px;\n  }\n"]);return d=function(){return t},t}var f=function(t){var e=t.choosenCharacter,n=t.setChoosenCharacter,o=t.TicTacToeProps;""===e&&("X"===o.turn?(n("X"),o.setTurn("O")):(n("O"),o.setTurn("X")),function(t){t.setFirstRow&&t.firstRow&&t.setFirstRow([].concat(Object(j.a)(t.firstRow),[t.turn])),t.setSecondRow&&t.secondRow&&t.setSecondRow([].concat(Object(j.a)(t.secondRow),[t.turn])),t.setThirdRow&&t.thirdRow&&t.setThirdRow([].concat(Object(j.a)(t.thirdRow),[t.turn])),t.setFirstColumn&&t.firstColumn&&t.setFirstColumn([].concat(Object(j.a)(t.firstColumn),[t.turn])),t.setSecondColumn&&t.secondColumn&&t.setSecondColumn([].concat(Object(j.a)(t.secondColumn),[t.turn])),t.setThirdColumn&&t.thirdColumn&&t.setThirdColumn([].concat(Object(j.a)(t.thirdColumn),[t.turn])),t.setFirstDiagonal&&t.firstDiagonal&&t.setFirstDiagonal([].concat(Object(j.a)(t.firstDiagonal),[t.turn])),t.setSecondDiagonal&&t.secondDiagonal&&t.setSecondDiagonal([].concat(Object(j.a)(t.secondDiagonal),[t.turn]))}(o))},h=l.b.div(d(),(function(t){var e=t.allTheSame,n=t.possiblePositions;return e&&n.includes(e)?Object(l.a)(O()):""})),g=function(t){var e=Object.assign({},t),n=Object(c.useState)(""),i=Object(b.a)(n,2),s=i[0],a={choosenCharacter:s,setChoosenCharacter:i[1],TicTacToeProps:e};return Object(o.jsx)(h,{allTheSame:e.allTheSame,possiblePositions:e.possiblePositions,onClick:function(){return""===e.allTheSame&&f(a)},children:Object(o.jsx)("h2",{children:s})})};function m(){var t=Object(r.a)(["\n  max-width: 500px;\n  min-height: 500px;\n  width: 100%;\n  border: 1px solid black;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  box-sizing: border-box;\n"]);return m=function(){return t},t}function C(){var t=Object(r.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n"]);return C=function(){return t},t}var w=function(t){return t.every((function(e){return e===t[0]}))},p=l.b.div(C()),R=l.b.div(m()),S=function(){var t=Object(c.useState)("X"),e=Object(b.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)([]),a=Object(b.a)(s,2),r=a[0],l=a[1],j=Object(c.useState)([]),O=Object(b.a)(j,2),d=O[0],f=O[1],h=Object(c.useState)([]),m=Object(b.a)(h,2),C=m[0],S=m[1],T=Object(c.useState)([]),D=Object(b.a)(T,2),x=D[0],v=D[1],P=Object(c.useState)([]),F=Object(b.a)(P,2),E=F[0],k=F[1],y=Object(c.useState)([]),X=Object(b.a)(y,2),z=X[0],B=X[1],I=Object(c.useState)([]),J=Object(b.a)(I,2),L=J[0],M=J[1],q=Object(c.useState)([]),A=Object(b.a)(q,2),G=A[0],H=A[1],K=Object(c.useState)(""),N=Object(b.a)(K,2),Q=N[0],U=N[1];Object(c.useEffect)((function(){3===r.length&&w(r)&&U("firstRow")}),[r]),Object(c.useEffect)((function(){3===d.length&&w(d)&&U("secondRow")}),[d]),Object(c.useEffect)((function(){3===C.length&&w(C)&&U("thirdRow")}),[C]),Object(c.useEffect)((function(){3===x.length&&w(x)&&U("firstColumn")}),[x]),Object(c.useEffect)((function(){3===E.length&&w(E)&&U("secondColumn")}),[E]),Object(c.useEffect)((function(){3===z.length&&w(z)&&U("thirdColumn")}),[z]),Object(c.useEffect)((function(){3===L.length&&w(L)&&U("firstDiagonal")}),[L]),Object(c.useEffect)((function(){3===G.length&&w(G)&&U("secondDiagonal")}),[G]);var V={turn:n,setTurn:i,allTheSame:Q},W={firstRow:r,setFirstRow:l},Y={secondRow:d,setSecondRow:f},Z={thirdRow:C,setThirdRow:S},$={firstColumn:x,setFirstColumn:v},_={secondColumn:E,setSecondColumn:k},tt={thirdColumn:z,setThirdColumn:B},et={firstDiagonal:L,setFirstDiagonal:M},nt={secondDiagonal:G,setSecondDiagonal:H},ot=[Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["firstRow","firstColumn","firstDiagonal"]},V),W),$),et),Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["firstRow","secondColumn"]},V),W),_),Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["firstRow","thirdColumn","secondDiagonal"]},V),W),tt),nt),Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["secondRow","firstColumn"]},V),Y),$),Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["secondRow","secondColumn","firstDiagonal","secondDiagonal"]},V),Y),_),et),nt),Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["secondRow","thirdColumn"]},V),Y),tt),Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["thirdRow","firstColumn","secondDiagonal"]},V),Z),$),nt),Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["thirdRow","secondColumn"]},V),Z),_),Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({possiblePositions:["thirdRow","thirdColumn","firstDiagonal"]},V),Z),tt),et)];return Object(o.jsx)(p,{children:Object(o.jsx)(R,{children:ot.map((function(t,e){return Object(o.jsx)(g,Object(u.a)({},t),e)}))})})};var T=function(){return Object(o.jsx)(S,{})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),i(t),s(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),D()}},[[25,1,2]]]);
//# sourceMappingURL=main.15cc1a35.chunk.js.map