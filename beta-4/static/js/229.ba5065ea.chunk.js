(self.webpackChunkexplorer=self.webpackChunkexplorer||[]).push([[229],{1627:function(n,t,e){"use strict";e.d(t,{$d:function(){return v},DI:function(){return y},SC:function(){return N},U8:function(){return S},bi:function(){return j},hk:function(){return b},iA:function(){return Z},pj:function(){return P},uU:function(){return w},xJ:function(){return m},y6:function(){return k}});var r,i,o,s,u,a,c,l,f,d,h,p=e(168),x=e(6444),g=e(8453),m=(0,x.ZP)(g.w)(r||(r=(0,p.Z)(["\n  padding: 8px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n  border: solid 1px #808080;\n  border-radius: 8px;\n"]))),v=x.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: flex-end;\n  padding: 8px 16px 16px;\n\n  @media screen and (max-width: 768px) {\n    padding: 8px 12px 16px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),y=x.ZP.span(o||(o=(0,p.Z)(["\n  margin: 4px 0 0;\n  font-family: SFProText;\n  font-size: 13px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  color: #808080;\n  white-space: nowrap;\n"]))),w=x.ZP.h3(s||(s=(0,p.Z)(["\n  margin: 0 32px 0 0;\n  font-family: SFProText;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 600;\n  color: #f8fefc;\n"]))),b=x.ZP.div(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 0;\n\n  @media screen and (max-width: 768px) {\n    align-self: stretch;\n  }\n\n  @media screen and (max-width: 560px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),k=x.ZP.div(a||(a=(0,p.Z)(["\n  width: 100%;\n  overflow-x: auto;\n"]))),Z=x.ZP.table(c||(c=(0,p.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n"]))),S=x.ZP.tr(l||(l=(0,p.Z)([""]))),j=x.ZP.th(f||(f=(0,p.Z)(["\n  padding: 20px 12px;\n  background-color: #03261e;\n  font-family: SFProText;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 600;\n  text-align: left;\n  color: #f8fefc;\n"]))),N=x.ZP.tr(d||(d=(0,p.Z)(["\n  td {\n    border-bottom: 1px solid #21302d;\n  }\n\n  :last-of-type td {\n    border: none;\n  }\n"]))),P=x.ZP.td(h||(h=(0,p.Z)(["\n  vertical-align: top;\n  padding: 18px 12px;\n  font-family: SFProText;\n  font-size: 13px;\n  font-weight: ",";\n  line-height: 15px;\n  text-align: left;\n  white-space: nowrap;\n  color: #f8fefc;\n"])),(function(n){return n.bold?"600":"normal"}))},5436:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return D}});var r,i,o=e(9462),s=e(7689),u=e(7134),a=e(1627),c=e(1391),l=e(7033),f=e(8658),d=e(1413),h=e(168),p=e(1989),x=e(9226),g={},m=(0,p.Ps)(r||(r=(0,h.Z)(["\n    fragment BlockTransactionFragment on Transaction {\n  id\n  inputContracts {\n    id\n  }\n  inputAssetIds\n  gasPrice\n  gasLimit\n  maturity\n  isScript\n  isCreate\n  isMint\n  receiptsRoot\n  witnesses\n  outputs {\n    __typename\n    ... on CoinOutput {\n      to\n      amount\n      assetId\n    }\n    ... on ContractOutput {\n      inputIndex\n      balanceRoot\n      stateRoot\n    }\n    ... on ChangeOutput {\n      to\n      amount\n      assetId\n    }\n    ... on VariableOutput {\n      to\n      amount\n      assetId\n    }\n    ... on ContractCreated {\n      contract {\n        id\n      }\n    }\n  }\n  inputs {\n    __typename\n    ... on InputCoin {\n      owner\n    }\n    ... on InputContract {\n      contract {\n        id\n      }\n    }\n  }\n  status {\n    ... on SubmittedStatus {\n      time\n    }\n    ... on SuccessStatus {\n      time\n    }\n    ... on FailureStatus {\n      time\n    }\n  }\n}\n    "]))),v=(0,p.Ps)(i||(i=(0,h.Z)(["\n    query BlockTransactionsPageQuery($height: U64) {\n  block(height: $height) {\n    id\n    header {\n      height\n      time\n    }\n    transactions {\n      ...BlockTransactionFragment\n    }\n  }\n}\n    ",""])),m);var y,w,b,k,Z,S,j,N,P,T,B=e(6444),_=e(1087),C=(0,B.ZP)(_.rU)(y||(y=(0,h.Z)(["\n  font-family: SFProText;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  color: #58c09b;\n  transition: 0.2s ease-out;\n\n  :hover {\n    text-shadow: 0 0 6px #58c09b;\n  }\n\n  :active {\n    text-shadow: 0 0 6px #4fad83;\n    color: #4fad83;\n  }\n"]))),E=B.ZP.section(w||(w=(0,h.Z)([""]))),M=B.ZP.div(b||(b=(0,h.Z)(["\n  padding: 56px 32px;\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 425px) {\n    padding: 40px 24px;\n  }\n"]))),U=B.ZP.h2(k||(k=(0,h.Z)(["\n  margin: 0 0 8px;\n  font-family: SFProDisplay;\n  font-size: 25px;\n  font-weight: 600;\n  line-height: 30px;\n  color: #f8fefc;\n  white-space: break-spaces;\n"]))),A=B.ZP.span(Z||(Z=(0,h.Z)(["\n  margin: 0 0 32px;\n  display: block;\n  font-family: SFProText;\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #f8fefc;\n"]))),I=(0,B.ZP)(C)(S||(S=(0,h.Z)(["\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin: 0 0 12px;\n\n  :last-of-type {\n    margin: 0;\n  }\n\n  :hover {\n    text-shadow: 0 0 6px #58c09b;\n  }\n\n  :active {\n    text-shadow: 0 0 6px #4fad83;\n    color: #4fad83;\n  }\n\n  @media screen and (max-width: 425px) {\n    max-width: 124px;\n  }\n"]))),O=((0,B.ZP)(C)(j||(j=(0,h.Z)(["\n  display: block;\n  margin: 0 0 12px;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),B.ZP.span(N||(N=(0,h.Z)(["\n  display: block;\n  font-weight: 600;\n  margin: 0 0 12px;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),(0,B.ZP)(C)(P||(P=(0,h.Z)(["\n  display: block;\n  font-weight: 600;\n  margin: 0 0 12px;\n  max-width: 80px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),B.ZP.span(T||(T=(0,h.Z)(["\n  color: #f8fefc;\n"])))),F=e(184);function D(){var n=(0,s.UO)().block,t=function(n){var t=(0,d.Z)((0,d.Z)({},g),n);return x.a(v,t)}({variables:{height:o.O$.from(n).toString()}}).data,e=null===t||void 0===t?void 0:t.block;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u.h,{}),(0,F.jsx)(E,{children:(0,F.jsxs)(M,{children:[(0,F.jsx)(U,{children:"Transaction list"}),(0,F.jsx)(A,{children:"Block: #".concat(n)}),(0,F.jsx)(z,{transactions:(null===e||void 0===e?void 0:e.transactions)||[]})]})})]})}function z(n){var t=n.transactions;return(0,F.jsxs)(f.xJ,{children:[(0,F.jsxs)(a.$d,{children:[(0,F.jsx)(a.uU,{children:"Transactions"}),(0,F.jsx)(a.hk,{children:(0,F.jsxs)(a.DI,{children:["Showing ",(0,F.jsx)(O,{children:"1"})," out of ",(0,F.jsx)(O,{children:"1"})," transactions"]})})]}),(0,F.jsx)(a.y6,{children:(0,F.jsxs)(a.iA,{children:[(0,F.jsx)("thead",{children:(0,F.jsxs)(a.U8,{children:[(0,F.jsx)(a.bi,{children:"Tx Hash"}),(0,F.jsx)(a.bi,{children:"Type"}),(0,F.jsx)(a.bi,{children:"Age"}),(0,F.jsx)(a.bi,{children:"From"})]})}),(0,F.jsx)("tbody",{children:t.map((function(n){var t;return(0,F.jsxs)(a.SC,{children:[(0,F.jsx)(a.pj,{children:(0,F.jsx)(I,{to:"/transaction/".concat(n.id),children:n.id})}),(0,F.jsxs)(a.pj,{children:[n.isScript&&"Script",n.isCreate&&"Create",n.isMint&&"Mint"]}),(0,F.jsx)(a.pj,{children:(0,l.Mp)(n)}),(0,F.jsx)(a.pj,{children:null===(t=n.inputs)||void 0===t?void 0:t.map((function(n,t){return function(){switch(n.__typename){case"InputCoin":return(0,F.jsxs)(f.jn,{children:[(0,F.jsx)(f.Zb,{to:"/address/".concat(n.owner),children:(0,c.nQ)(n.owner)}),(0,F.jsxs)(f.JC,{onClick:function(){!function(n){navigator.clipboard.writeText(n)}(n.owner)},children:[(0,F.jsx)(f.oL,{}),(0,F.jsx)(f.u,{children:"Copy Address"})]})]},t);case"InputContract":return(0,F.jsx)(f.Aw,{to:"",children:(0,c.nQ)(n.contract.id)},t);default:return n.__typename}}()}))})]},n.id)}))})]})})]})}},1391:function(n,t,e){"use strict";e.d(t,{At:function(){return o},Ph:function(){return u},Xc:function(){return s},nQ:function(){return i}});var r=e(5729),i=function(n){return n?"".concat(n.slice(0,6),"...").concat(n.slice(-6,n.length-1)):""},o=function(n){try{return!!r.kLt.fromString(n).toB256()}catch(t){return!1}},s=function(n){try{return r.kLt.fromString(n).toB256()}catch(t){return n}},u=function(n){return n.startsWith("0x")?n:"0x"}},595:function(n,t,e){"use strict";e.d(t,{Bh:function(){return a},b0:function(){return f},g0:function(){return d},rl:function(){return c},uO:function(){return h},vG:function(){return l}});var r=e(7892),i=e.n(r),o=e(130),s=e.n(o),u=e(8643);i().extend(s());var a=function(n,t){var e=Math.floor(Math.abs(n.getTime()-t.getTime())/1e3),r=Math.floor(e/60),i=Math.floor(r/60);return{seconds:e,minutes:r,hours:i,days:Math.floor(i/24)}},c=function(n,t){var e=Math.floor(Math.abs(n.getTime()-t.getTime())/1e3),r=Math.floor(e/60),i=Math.floor(r/60),o=Math.floor(i/24);return{seconds:e=e-24*o*60*60-60*(i-=24*o)*60-60*(r=r-24*o*60-60*i),minutes:r,hours:i,days:o}},l=function(n){var t=[];return n.days>0&&t.push("".concat(n.days," days")),n.hours>0&&t.push("".concat(n.hours," hrs")),n.minutes>0&&t.push("".concat(n.minutes," min")),n.seconds>0&&t.push("".concat(n.seconds," sec")),"".concat(t.slice(0,2).join(" ")," ago")},f=function(n){return n.days>0?"".concat(n.days," days ago"):n.hours>0?"".concat(n.hours," hours ago"):n.minutes>0?"".concat(n.minutes," minutes ago"):n.seconds>0?"".concat(n.seconds," seconds ago"):""},d=function(n){var t=u.y.fromString(n,10).toUnix();return i()(1e3*t)},h=function(n){return d(n).toDate()}},7033:function(n,t,e){"use strict";e.d(t,{$V:function(){return i},GV:function(){return o},Mp:function(){return s}});var r=e(595);function i(n){var t,e;switch(null===(t=n.status)||void 0===t?void 0:t.__typename){case"SubmittedStatus":case"SuccessStatus":case"FailureStatus":return(0,r.uO)(null===(e=n.status)||void 0===e?void 0:e.time);default:return}}function o(n){var t=i(n);return t?(0,r.Bh)(new Date,t):void 0}function s(n){var t=i(n);return t?(0,r.vG)((0,r.rl)(new Date,t)):void 0}},9462:function(n,t,e){"use strict";e.d(t,{O$:function(){return p}});var r=e(5671),i=e(3144),o=e(518),s=e.n(o),u=e(9716),a=e(9502),c=s().BN,l=new a.Yd("bignumber/5.7.0"),f={},d=9007199254740991;var h=!1,p=function(){function n(t,e){(0,r.Z)(this,n),t!==f&&l.throwError("cannot call constructor directly; use BigNumber.from",a.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=e,this._isBigNumber=!0,Object.freeze(this)}return(0,i.Z)(n,[{key:"fromTwos",value:function(n){return g(m(this).fromTwos(n))}},{key:"toTwos",value:function(n){return g(m(this).toTwos(n))}},{key:"abs",value:function(){return"-"===this._hex[0]?n.from(this._hex.substring(1)):this}},{key:"add",value:function(n){return g(m(this).add(m(n)))}},{key:"sub",value:function(n){return g(m(this).sub(m(n)))}},{key:"div",value:function(t){return n.from(t).isZero()&&v("division-by-zero","div"),g(m(this).div(m(t)))}},{key:"mul",value:function(n){return g(m(this).mul(m(n)))}},{key:"mod",value:function(n){var t=m(n);return t.isNeg()&&v("division-by-zero","mod"),g(m(this).umod(t))}},{key:"pow",value:function(n){var t=m(n);return t.isNeg()&&v("negative-power","pow"),g(m(this).pow(t))}},{key:"and",value:function(n){var t=m(n);return(this.isNegative()||t.isNeg())&&v("unbound-bitwise-result","and"),g(m(this).and(t))}},{key:"or",value:function(n){var t=m(n);return(this.isNegative()||t.isNeg())&&v("unbound-bitwise-result","or"),g(m(this).or(t))}},{key:"xor",value:function(n){var t=m(n);return(this.isNegative()||t.isNeg())&&v("unbound-bitwise-result","xor"),g(m(this).xor(t))}},{key:"mask",value:function(n){return(this.isNegative()||n<0)&&v("negative-width","mask"),g(m(this).maskn(n))}},{key:"shl",value:function(n){return(this.isNegative()||n<0)&&v("negative-width","shl"),g(m(this).shln(n))}},{key:"shr",value:function(n){return(this.isNegative()||n<0)&&v("negative-width","shr"),g(m(this).shrn(n))}},{key:"eq",value:function(n){return m(this).eq(m(n))}},{key:"lt",value:function(n){return m(this).lt(m(n))}},{key:"lte",value:function(n){return m(this).lte(m(n))}},{key:"gt",value:function(n){return m(this).gt(m(n))}},{key:"gte",value:function(n){return m(this).gte(m(n))}},{key:"isNegative",value:function(){return"-"===this._hex[0]}},{key:"isZero",value:function(){return m(this).isZero()}},{key:"toNumber",value:function(){try{return m(this).toNumber()}catch(n){v("overflow","toNumber",this.toString())}return null}},{key:"toBigInt",value:function(){try{return BigInt(this.toString())}catch(n){}return l.throwError("this platform does not support BigInt",a.Yd.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}},{key:"toString",value:function(){return arguments.length>0&&(10===arguments[0]?h||(h=!0,l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):16===arguments[0]?l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",a.Yd.errors.UNEXPECTED_ARGUMENT,{}):l.throwError("BigNumber.toString does not accept parameters",a.Yd.errors.UNEXPECTED_ARGUMENT,{})),m(this).toString(10)}},{key:"toHexString",value:function(){return this._hex}},{key:"toJSON",value:function(n){return{type:"BigNumber",hex:this.toHexString()}}}],[{key:"from",value:function(t){if(t instanceof n)return t;if("string"===typeof t)return t.match(/^-?0x[0-9a-f]+$/i)?new n(f,x(t)):t.match(/^-?[0-9]+$/)?new n(f,x(new c(t))):l.throwArgumentError("invalid BigNumber string","value",t);if("number"===typeof t)return t%1&&v("underflow","BigNumber.from",t),(t>=d||t<=-d)&&v("overflow","BigNumber.from",t),n.from(String(t));var e=t;if("bigint"===typeof e)return n.from(e.toString());if((0,u._t)(e))return n.from((0,u.Dv)(e));if(e)if(e.toHexString){var r=e.toHexString();if("string"===typeof r)return n.from(r)}else{var i=e._hex;if(null==i&&"BigNumber"===e.type&&(i=e.hex),"string"===typeof i&&((0,u.A7)(i)||"-"===i[0]&&(0,u.A7)(i.substring(1))))return n.from(i)}return l.throwArgumentError("invalid BigNumber value","value",t)}},{key:"isBigNumber",value:function(n){return!(!n||!n._isBigNumber)}}]),n}();function x(n){if("string"!==typeof n)return x(n.toString(16));if("-"===n[0])return"-"===(n=n.substring(1))[0]&&l.throwArgumentError("invalid hex","value",n),"0x00"===(n=x(n))?n:"-"+n;if("0x"!==n.substring(0,2)&&(n="0x"+n),"0x"===n)return"0x00";for(n.length%2&&(n="0x0"+n.substring(2));n.length>4&&"0x00"===n.substring(0,4);)n="0x"+n.substring(4);return n}function g(n){return p.from(x(n))}function m(n){var t=p.from(n).toHexString();return"-"===t[0]?new c("-"+t.substring(3),16):new c(t.substring(2),16)}function v(n,t,e){var r={fault:n,operation:t};return null!=e&&(r.value=e),l.throwError(n,a.Yd.errors.NUMERIC_FAULT,r)}},6601:function(){},9214:function(){},5568:function(){}}]);
//# sourceMappingURL=229.ba5065ea.chunk.js.map