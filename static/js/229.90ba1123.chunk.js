(self.webpackChunkexplorer=self.webpackChunkexplorer||[]).push([[229],{1627:function(n,t,e){"use strict";e.d(t,{$d:function(){return g},DI:function(){return w},SC:function(){return k},U8:function(){return v},bi:function(){return P},hk:function(){return j},iA:function(){return b},pj:function(){return S},uU:function(){return Z},xJ:function(){return m},y6:function(){return y}});var i,o,r,a,s,c,d,u,l,f,p,h=e(168),x=e(6444),m=x.ZP.div(i||(i=(0,h.Z)(["\n  padding: 8px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n  border: solid 1px #808080;\n  border-radius: 8px;\n"]))),g=x.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: flex-end;\n  padding: 8px 16px 16px;\n\n  @media screen and (max-width: 768px) {\n    padding: 8px 12px 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),w=x.ZP.span(r||(r=(0,h.Z)(["\n  margin: 4px 0 0;\n  font-family: SFProText;\n  font-size: 13px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  color: #808080;\n  white-space: nowrap;\n"]))),Z=x.ZP.h3(a||(a=(0,h.Z)(["\n  margin: 0 32px 0 0;\n  font-family: SFProText;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 600;\n  color: #f8fefc;\n"]))),j=x.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 0;\n\n  @media screen and (max-width: 768px) {\n    align-self: stretch;\n  }\n\n  @media screen and (max-width: 560px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),y=x.ZP.div(c||(c=(0,h.Z)(["\n  width: 100%;\n  overflow-x: auto;\n"]))),b=x.ZP.table(d||(d=(0,h.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n"]))),v=x.ZP.tr(u||(u=(0,h.Z)([""]))),P=x.ZP.th(l||(l=(0,h.Z)(["\n  padding: 20px 12px;\n  background-color: #03261e;\n  font-family: SFProText;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 600;\n  text-align: left;\n  color: #f8fefc;\n"]))),k=x.ZP.tr(f||(f=(0,h.Z)(["\n  td {\n    border-bottom: 1px solid #21302d;\n  }\n\n  :last-of-type td {\n    border: none;\n  }\n"]))),S=x.ZP.td(p||(p=(0,h.Z)(["\n  vertical-align: top;\n  padding: 18px 12px;\n  font-family: SFProText;\n  font-size: 13px;\n  font-weight: ",";\n  line-height: 15px;\n  text-align: left;\n  white-space: nowrap;\n  color: #f8fefc;\n"])),(function(n){return n.bold?"600":"normal"}))},5436:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return $}});var i,o,r=e(2257),a=e(6871),s=e(7134),c=e(1627),d=e(1391),u=e(595),l=e(8658),f=e(1413),p=e(168),h=e(2306),x=e(3173),m={},g=(0,h.Ps)(i||(i=(0,p.Z)(["\n    fragment BlockTransactionFragment on Transaction {\n  id\n  inputContracts {\n    id\n  }\n  inputAssetIds\n  gasPrice\n  gasLimit\n  maturity\n  isScript\n  receiptsRoot\n  witnesses\n  outputs {\n    __typename\n    ... on CoinOutput {\n      to\n      amount\n      assetId\n    }\n    ... on ContractOutput {\n      inputIndex\n      balanceRoot\n      stateRoot\n    }\n    ... on ChangeOutput {\n      to\n      amount\n      assetId\n    }\n    ... on VariableOutput {\n      to\n      amount\n      assetId\n    }\n    ... on ContractCreated {\n      contract {\n        id\n      }\n    }\n  }\n  inputs {\n    __typename\n    ... on InputCoin {\n      owner\n    }\n    ... on InputContract {\n      contract {\n        id\n      }\n    }\n  }\n  status {\n    ... on SubmittedStatus {\n      time\n    }\n    ... on SuccessStatus {\n      time\n    }\n    ... on FailureStatus {\n      time\n    }\n  }\n}\n    "]))),w=(0,h.Ps)(o||(o=(0,p.Z)(["\n    query BlockTransactionsPageQuery($height: U64) {\n  block(height: $height) {\n    id\n    height\n    time\n    producer\n    transactions {\n      ...BlockTransactionFragment\n    }\n  }\n}\n    ",""])),g);var Z,j,y,b,v,P,k,S,T,C,F=e(6444),I=e(3504),M=(0,F.ZP)(I.rU)(Z||(Z=(0,p.Z)(["\n  font-family: SFProText;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  color: #58c09b;\n  transition: 0.2s ease-out;\n\n  :hover {\n    text-shadow: 0 0 6px #58c09b;\n  }\n\n  :active {\n    text-shadow: 0 0 6px #4fad83;\n    color: #4fad83;\n  }\n"]))),_=F.ZP.section(j||(j=(0,p.Z)([""]))),z=F.ZP.div(y||(y=(0,p.Z)(["\n  padding: 56px 32px;\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 425px) {\n    padding: 40px 24px;\n  }\n"]))),A=F.ZP.h2(b||(b=(0,p.Z)(["\n  margin: 0 0 8px;\n  font-family: SFProDisplay;\n  font-size: 25px;\n  font-weight: 600;\n  line-height: 30px;\n  color: #f8fefc;\n  white-space: break-spaces;\n"]))),B=F.ZP.span(v||(v=(0,p.Z)(["\n  margin: 0 0 32px;\n  display: block;\n  font-family: SFProText;\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #f8fefc;\n"]))),U=(0,F.ZP)(M)(P||(P=(0,p.Z)(["\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin: 0 0 12px;\n\n  :last-of-type {\n    margin: 0;\n  }\n\n  :hover {\n    text-shadow: 0 0 6px #58c09b;\n  }\n\n  :active {\n    text-shadow: 0 0 6px #4fad83;\n    color: #4fad83;\n  }\n\n  @media screen and (max-width: 425px) {\n    max-width: 124px;\n  }\n"]))),O=((0,F.ZP)(M)(k||(k=(0,p.Z)(["\n  display: block;\n  margin: 0 0 12px;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),F.ZP.span(S||(S=(0,p.Z)(["\n  display: block;\n  font-weight: 600;\n  margin: 0 0 12px;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),(0,F.ZP)(M)(T||(T=(0,p.Z)(["\n  display: block;\n  font-weight: 600;\n  margin: 0 0 12px;\n  max-width: 80px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),F.ZP.span(C||(C=(0,p.Z)(["\n  color: #f8fefc;\n"])))),D=e(184);function $(){var n=(0,a.UO)().block,t=function(n){var t=(0,f.Z)((0,f.Z)({},m),n);return x.a(w,t)}({variables:{height:r.O$.from(n).toString()}}).data,e=null===t||void 0===t?void 0:t.block;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s.h,{}),(0,D.jsx)(_,{children:(0,D.jsxs)(z,{children:[(0,D.jsx)(A,{children:"Transaction list"}),(0,D.jsx)(B,{children:"Block: #".concat(n)}),(0,D.jsx)(L,{transactions:(null===e||void 0===e?void 0:e.transactions)||[]})]})})]})}function L(n){var t=n.transactions;return(0,D.jsxs)(l.xJ,{children:[(0,D.jsxs)(c.$d,{children:[(0,D.jsx)(c.uU,{children:"Transactions"}),(0,D.jsx)(c.hk,{children:(0,D.jsxs)(c.DI,{children:["Showing ",(0,D.jsx)(O,{children:"1"})," out of ",(0,D.jsx)(O,{children:"1"})," transactions"]})})]}),(0,D.jsx)(c.y6,{children:(0,D.jsxs)(c.iA,{children:[(0,D.jsx)("thead",{children:(0,D.jsxs)(c.U8,{children:[(0,D.jsx)(c.bi,{children:"Tx Hash"}),(0,D.jsx)(c.bi,{children:"Type"}),(0,D.jsx)(c.bi,{children:"Age"}),(0,D.jsx)(c.bi,{children:"From"})]})}),(0,D.jsx)("tbody",{children:t.map((function(n){return(0,D.jsxs)(c.SC,{children:[(0,D.jsx)(c.pj,{children:(0,D.jsx)(U,{to:"/transaction/".concat(n.id),children:n.id})}),(0,D.jsx)(c.pj,{children:n.isScript?"Script":"Create"}),(0,D.jsx)(c.pj,{children:n.status?(0,D.jsx)(D.Fragment,{children:(0,u.vG)((0,u.rl)(new Date,new Date(n.status.time)))}):null}),(0,D.jsx)(c.pj,{children:n.inputs.map((function(n,t){return function(){switch(n.__typename){case"InputCoin":return(0,D.jsxs)(l.jn,{children:[(0,D.jsx)(l.Zb,{to:"/address/".concat(n.owner),children:(0,d.nQ)(n.owner)}),(0,D.jsxs)(l.JC,{onClick:function(){!function(n){navigator.clipboard.writeText(n)}(n.owner)},children:[(0,D.jsx)(l.oL,{}),(0,D.jsx)(l.u,{children:"Copy Address"})]})]},t);case"InputContract":return(0,D.jsx)(l.Aw,{to:"",children:(0,d.nQ)(n.contract.id)},t);default:return n.__typename}}()}))})]},n.id)}))})]})})]})}},1391:function(n,t,e){"use strict";e.d(t,{At:function(){return r},Ph:function(){return s},Xc:function(){return a},nQ:function(){return o}});var i=e(2533),o=function(n){return n?"".concat(n.slice(0,6),"...").concat(n.slice(-6,n.length-1)):""},r=function(n){try{return!!i.kL.fromString(n).toB256()}catch(t){return!1}},a=function(n){try{return i.kL.fromString(n).toB256()}catch(t){return n}},s=function(n){return n.startsWith("0x")?n:"0x"}},595:function(n,t,e){"use strict";e.d(t,{Bh:function(){return i},b0:function(){return a},rl:function(){return o},vG:function(){return r}});var i=function(n,t){var e=Math.floor(Math.abs(n.getTime()-t.getTime())/1e3),i=Math.floor(e/60),o=Math.floor(i/60);return{seconds:e,minutes:i,hours:o,days:Math.floor(o/24)}},o=function(n,t){var e=Math.floor(Math.abs(n.getTime()-t.getTime())/1e3),i=Math.floor(e/60),o=Math.floor(i/60),r=Math.floor(o/24);return{seconds:e=e-24*r*60*60-60*(o-=24*r)*60-60*(i=i-24*r*60-60*o),minutes:i,hours:o,days:r}},r=function(n){var t=[];return n.days>0&&t.push("".concat(n.days," days")),n.hours>0&&t.push("".concat(n.hours," hrs")),n.minutes>0&&t.push("".concat(n.minutes," min")),n.seconds>0&&t.push("".concat(n.seconds," sec")),"".concat(t.slice(0,2).join(" ")," ago")},a=function(n){return n.days>0||n.hours>0?"".concat(n.hours," hours ago"):n.minutes>0?"".concat(n.minutes," minutes ago"):n.seconds>0?"".concat(n.seconds," seconds ago"):""}},6601:function(){},9214:function(){},5568:function(){}}]);
//# sourceMappingURL=229.90ba1123.chunk.js.map