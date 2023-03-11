"use strict";(self.webpackChunkexplorer=self.webpackChunkexplorer||[]).push([[694],{9280:function(n,e,t){t.d(e,{h:function(){return r}});var i,o=t(168),r=t(6444).ZP.button(i||(i=(0,o.Z)(["\n  padding: 0;\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0);\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n"])))},7134:function(n,e,t){t.d(e,{h:function(){return sn}});var i,o,r,l,c,s,d,a,h,x,f,p=t(9439),u=t(2791),v=t(4089),g=t(5478),w=t(8813),Z=t(3422),m=t(1031),y=t(168),j=t(6444),b=t(9280),z=j.ZP.div(i||(i=(0,y.Z)(["\n  width: 100%;\n  max-width: 348px;\n  border-radius: 6px;\n  box-shadow: 0 0 25px 0 #58c09b;\n  border: solid 1px #58c09c;\n  background-color: #021d17;\n"]))),C=j.ZP.h2(o||(o=(0,y.Z)(["\n  margin: 20px 0;\n  font-family: SFProDisplay;\n  font-size: 17px;\n  font-weight: 500;\n  text-align: center;\n  color: #f8fefc;\n"]))),P=j.ZP.h3(r||(r=(0,y.Z)(["\n  margin: 20px 0;\n  font-family: SFProDisplay;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  color: #f8fefc;\n  cursor: pointer;\n"]))),M=j.ZP.form(l||(l=(0,y.Z)(["\n  margin: 22px 40px 22px 32px;\n  display: ",";\n  align-items: center;\n  justify-content: space-between;\n"])),(function(n){return n.show?"flex":"none"})),k=j.ZP.input(c||(c=(0,y.Z)(["\n  flex-grow: 1;\n  margin-right: 8px;\n"]))),R=(0,j.ZP)(b.h)(s||(s=(0,y.Z)(["\n  font-family: SFProDisplay;\n  width: calc(100%);\n  justify-content: center;\n  padding: 2px 4px;\n  font-weight: 500;\n  font-size: 14px;\n  margin-bottom: 24px;\n  color: #ffffff9b;\n"]))),V=j.ZP.div(d||(d=(0,y.Z)(["\n  width: 24px;\n  height: 24px;\n\n  :hover {\n    border: solid 1px #f9fefc !important;\n  }\n"]))),H=(0,j.ZP)(b.h)(a||(a=(0,y.Z)(["\n  width: 100%;\n  padding: 22px 40px 22px 32px;\n  justify-content: space-between;\n  border-bottom: solid 1px #1c2e2a;\n  font-family: SFProText;\n  font-size: 15px;\n  font-weight: 500;\n  color: #f8fefc;\n\n  :first-of-type {\n    border-top: solid 1px #1c2e2a;\n  }\n\n  :hover "," {\n    border: ",";\n  }\n\n  "," {\n    background-color: ",";\n    box-shadow: ",";\n    border: ",";\n  }\n"])),V,(function(n){n.isSelected;return"solid 1px #f9fefc"}),V,(function(n){return n.isSelected?"#58c09b":"none"}),(function(n){var e=n.isHighlighted,t=n.isSelected;return e&&t?"0 0 3px 0 #58c09b":"none"}),(function(n){return n.isSelected?"none":"solid 1px #808080"})),S=j.ZP.div(h||(h=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n"]))),L=j.ZP.span(x||(x=(0,y.Z)(["\n  margin: 0 0 0 8px;\n  display: block;\n  width: 6px;\n  height: 6px;\n  box-shadow: 0 0 6px 0 #58c09b;\n  background-color: #58c09b;\n  border-radius: 3px;\n"]))),F=(0,j.ZP)(b.h)(f||(f=(0,y.Z)(["\n  width: calc(100% - 48px);\n  margin: 12px 24px;\n  padding: 8px 8px;\n  justify-content: center;\n  background-color: #58c09b;\n  font-family: SFProDisplay;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: 500;\n  color: #fff;\n\n  :hover,\n  :active {\n    box-shadow: 0 0 6px 0 #58c09b;\n  }\n"]))),B=t(184),D="https://node-beta-2.fuel.network/graphql",E=D;function q(n){var e=(0,u.useState)(!1),t=(0,p.Z)(e,2),i=t[0],o=t[1],r=(0,u.useState)((0,g.Qi)()||w.k.options.uri),l=(0,p.Z)(r,2),c=l[0],s=l[1],d=(0,u.useState)(),a=(0,p.Z)(d,2),h=a[0],x=a[1],f=(0,u.useRef)(null),y=u.useContext(v.p).chains,j=(0,u.useState)(null===y||void 0===y?void 0:y[0]),b=(0,p.Z)(j,2),D=b[0],q=b[1],K=(0,u.useMemo)((function(){return h||D}),[D,h]);(0,Z.t)(f,(function(){n.onClose()}));return(0,B.jsx)(m.u,{children:(0,B.jsxs)(z,{ref:f,children:[(0,B.jsx)(C,{children:"Change Network"}),y.map((function(n,e){return(0,B.jsxs)(H,{onClick:function(){!function(n){x(n)}(n)},isSelected:n===K,isHighlighted:n===D,children:[(0,B.jsxs)(S,{children:[n.name,D===n&&(0,B.jsx)(L,{})]}),(0,B.jsx)(V,{})]},e)})),(0,B.jsx)(P,{onClick:function(){return o(!i)},children:"Add Custom Network"}),(0,B.jsx)(M,{onSubmit:function(){c===E?(0,g.fM)():(0,g.wR)(c),window.location.reload()},show:i,children:(0,B.jsx)(k,{type:"text",placeholder:"Custom Network",required:!0,value:c,onChange:function(n){s(encodeURI(n.target.value))}})}),i&&(0,B.jsx)(F,{onClick:function(){i?(c===E?(0,g.fM)():(0,g.wR)(c),window.location.reload()):(h&&(q(h),n.onClose()),x(void 0))},children:"Switch"}),(0,B.jsx)(R,{type:"button",onClick:function(){(0,g.fM)(),window.location.reload()},children:"Reset network"})]})})}var K,N,T,O,W,A,I,Q,U,X,G,J=t(1087),Y=t(1910),$=j.ZP.header(K||(K=(0,y.Z)([""]))),_=j.ZP.div(N||(N=(0,y.Z)(["\n  padding: 56px 32px 0;\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 425px) {\n    padding: 32px 24px 0;\n  }\n"]))),nn=j.ZP.div(T||(T=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n"]))),en=j.ZP.div(O||(O=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    align-items: flex-end;\n    flex-direction: column-reverse;\n  }\n"]))),tn=(0,j.ZP)(Y.K7)(W||(W=(0,y.Z)(["\n  flex: 0 0 48px;\n  margin: 0 8px 0 0;\n  width: 48px !important;\n  height: 48px !important;\n\n  @media screen and (max-width: 768px) {\n    flex: 0 0 40px;\n    width: 40px !important;\n    height: 40px !important;\n  }\n"]))),on=(0,j.ZP)(J.rU)(A||(A=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  font-family: Cyberspace-Raceway-Front;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: normal;\n  color: #eefef8;\n\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    max-width: 160px;\n  }\n"]))),rn=(j.ZP.div(I||(I=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 1000px) {\n    display: none;\n  }\n"]))),j.ZP.a(Q||(Q=(0,y.Z)(["\n  padding: 4px 10px;\n  font-family: SFProText;\n  font-size: 16px;\n  font-weight: 500;\n  color: #808080;\n  transition: 0.2s ease-out;\n\n  :hover {\n    text-shadow: 0 0 6px #f9fefc;\n    color: #f8fefc;\n  }\n\n  :active {\n    text-shadow: 0 0 6px #e9fff8;\n    color: #eafff8;\n  }\n"]))),(0,j.ZP)(b.h)(U||(U=(0,y.Z)(["\n  padding: 8px 12px 8px 16px;\n  font-family: SFProDisplay;\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 500;\n  color: #081c17;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  background-color: #58c09b;\n  transition: 0.2s ease-out;\n\n  :hover,\n  :active {\n    box-shadow: 0 0 6px 0 #58c09b;\n  }\n"])))),ln=j.ZP.div(X||(X=(0,y.Z)(["\n  padding: 8px 12px 8px 16px;\n  font-family: SFProDisplay;\n  font-size: 10px;\n  line-height: 14px;\n  font-weight: 500;\n  color: #081c17;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  background-color: #808080;\n  transition: 0.2s ease-out;\n  margin-right: 8px;\n\n  @media screen and (max-width: 768px) {\n    margin-right: 0px;\n    margin-top: 8px;\n  }\n"]))),cn=(0,j.ZP)(Y.e0)(G||(G=(0,y.Z)(["\n  margin: 0 0 0 8px;\n  width: 8px !important;\n  height: 8px !important;\n  transform: rotate(90deg);\n"])));function sn(){var n,e=(0,u.useState)(!1),t=(0,p.Z)(e,2),i=t[0],o=t[1],r=(0,u.useContext)(v.p).chains;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)($,{children:(0,B.jsxs)(_,{children:[(0,B.jsx)(nn,{children:(0,B.jsxs)(on,{to:"/",children:[(0,B.jsx)(tn,{}),"NETWORK EXPLORER"]})}),(0,B.jsxs)(en,{children:[(0,B.jsx)(ln,{children:(0,g.gR)()}),(0,B.jsxs)(rn,{onClick:function(){o(!0)},children:[null===r||void 0===r||null===(n=r[0])||void 0===n?void 0:n.name,(0,B.jsx)(cn,{})]})]})]})}),i&&(0,B.jsx)(q,{onClose:function(){o(!1)}})]})}},1910:function(n,e,t){t.d(e,{CC:function(){return j},K7:function(){return u},Qq:function(){return y},TI:function(){return w},W1:function(){return v},aA:function(){return b},e0:function(){return g},jK:function(){return Z},pO:function(){return m}});var i=t(1413),o=t(4925),r=t(184),l=["style"],c=["style","isDisabled"],s=["style"],d=["style"],a=["style"],h=["style"],x=["style"],f=["style"],p=["style"];function u(n){var e=n.style,t=void 0===e?{}:e,c=(0,o.Z)(n,l);return(0,r.jsxs)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 852 852",style:(0,i.Z)({width:80,height:80},t)},c),{},{children:[(0,r.jsx)("defs",{}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"a",children:(0,r.jsx)("path",{d:"M0 0h852v852H0z"})})}),(0,r.jsx)("g",{"data-name":"Fuel logo",children:(0,r.jsxs)("g",{clipPath:"url(#a)","data-name":"logo",children:[(0,r.jsx)("path",{fill:"#58c09b",d:"M638.737 321.745a16.735 16.735 0 0115.33 9.607 17.281 17.281 0 01-1.737 18.127L360.261 715.008a19.368 19.368 0 01-6.229 4.684 16.628 16.628 0 01-15.113-.151 17.057 17.057 0 01-9.192-19.623l52.567-201.191-216.294.664a16.735 16.735 0 01-15.33-9.607c-2.758-5.887-2.056-13.38 1.737-18.127L444.708 106.62a16.178 16.178 0 0120.618-4.793c7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"}),(0,r.jsx)("path",{fill:"none",stroke:"#58c09b",strokeWidth:"9",d:"M639.536 328.815c6.585-.071 58.279 27.655 61.04 33.541a17.291 17.291 0 01-1.741 18.129L406.767 746.012a19.366 19.366 0 01-6.23 4.684 16.628 16.628 0 01-15.113-.151c-6.976-3.332-50.131-38.57-47.946-46.751l94.077-152.613H226.679c-6.585.071-71.974-62.843-68.181-67.59q205.349-262.69 293.209-372.414c9.573-11.955 52.922 17.831 60.122 21.654 7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"})]})})]}))}function v(n){var e=n.style,t=void 0===e?{}:e,l=(n.isDisabled,(0,o.Z)(n,c));return(0,r.jsxs)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19.979 19.979",style:(0,i.Z)({width:20,height:20},t),color:"gray"},l),{},{children:[(0,r.jsx)("defs",{}),(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.032 12.458l5.948 5.948-1.574 1.574-5.948-5.948a7.79 7.79 0 111.574-1.574zm-6.24.9a5.565 5.565 0 10-5.565-5.565 5.565 5.565 0 005.565 5.564z"})]}))}function g(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,s);return(0,r.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 492.004 492.004",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"})}))}function w(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,d);return(0,r.jsxs)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488.3 488.3",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:[(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M314.25 85.4h-227c-21.3 0-38.6 17.3-38.6 38.6v325.7c0 21.3 17.3 38.6 38.6 38.6h227c21.3 0 38.6-17.3 38.6-38.6V124c-.1-21.3-17.4-38.6-38.6-38.6zm11.5 364.2c0 6.4-5.2 11.6-11.6 11.6h-227c-6.4 0-11.6-5.2-11.6-11.6V124c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.6z"}),(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M401.05 0h-227c-21.3 0-38.6 17.3-38.6 38.6 0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.7c0 6.4-5.2 11.6-11.6 11.6-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5c21.3 0 38.6-17.3 38.6-38.6V38.6c0-21.3-17.3-38.6-38.6-38.6z"})]}))}function Z(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,a);return(0,r.jsxs)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 401.994 401.994",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:[(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 401.991h182.724V219.265H0v182.726zm36.542-146.178h109.636v109.352H36.542V255.813z"}),(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M73.089 292.355h36.544v36.549H73.089zM292.352 365.449h36.553v36.545h-36.553zM365.442 365.449h36.552v36.545h-36.552z"}),(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M365.446 255.813h-36.542v-36.548H219.265v182.726h36.548V292.355h36.539v36.549h109.639V219.265h-36.545zM0 182.728h182.724V0H0v182.728zM36.542 36.542h109.636v109.636H36.542V36.542z"}),(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M73.089 73.089h36.544v36.547H73.089zM219.265 0v182.728h182.729V0H219.265zm146.181 146.178H255.813V36.542h109.633v109.636z"}),(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M292.352 73.089h36.553v36.547h-36.553z"})]}))}function m(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,h);return(0,r.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426.66667 426.66667",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M405.332031 192H234.667969V21.332031C234.667969 9.558594 225.109375 0 213.332031 0 201.558594 0 192 9.558594 192 21.332031V192H21.332031C9.558594 192 0 201.558594 0 213.332031c0 11.777344 9.558594 21.335938 21.332031 21.335938H192v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938V234.667969h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"})}))}function y(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,x);return(0,r.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M26.586 34.586L12 49.172V44c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828-.78-.781-2.048-.781-2.828 0zM54 8H44c-1.104 0-2 .896-2 2s.896 2 2 2h5.172L34.586 26.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586L52 14.828V20c0 1.104.896 2 2 2s2-.896 2-2V10c0-1.104-.896-2-2-2z"})}))}function j(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,f);return(0,r.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M52.586 8.586L38 23.172V18c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828s-2.047-.781-2.828 0zM10 56c.512 0 1.023-.195 1.414-.586L26 40.828V46c0 1.104.896 2 2 2s2-.896 2-2V36c0-1.104-.896-2-2-2H18c-1.104 0-2 .896-2 2s.896 2 2 2h5.172L8.586 52.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586z"})}))}function b(n){var e=n.style,t=void 0===e?{}:e,l=(0,o.Z)(n,p);return(0,r.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:(0,i.Z)({width:20,height:20},t)},l),{},{children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M459.36 100.64l-96-96C360.341 1.645 356.253-.024 352 0H96C69.49 0 48 21.49 48 48v416c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48V112c.025-4.253-1.645-8.34-4.64-11.36zM432 464c0 8.837-7.163 16-16 16H96c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h240v64c0 17.673 14.327 32 32 32h64v336z"})}))}},1031:function(n,e,t){t.d(e,{u:function(){return a}});var i,o,r=t(168),l=t(6444),c=l.ZP.section(i||(i=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(9, 28, 23, 0.8);\n  z-index: 50;\n"]))),s=l.ZP.div(o||(o=(0,r.Z)(["\n  width: 100%;\n  padding: 32px;\n  display: flex;\n  justify-content: center;\n"]))),d=t(184);function a(n){return(0,d.jsx)(c,{children:(0,d.jsx)(s,{children:n.children})})}},8453:function(n,e,t){t.d(e,{w:function(){return r}});var i,o=t(168),r=t(6444).ZP.div(i||(i=(0,o.Z)(["\n  background-color: #081c17;\n"])))},3422:function(n,e,t){t.d(e,{t:function(){return o}});var i=t(2791);function o(n,e){(0,i.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[n,e])}}}]);
//# sourceMappingURL=694.00dc2275.chunk.js.map