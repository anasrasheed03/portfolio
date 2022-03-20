(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,7,8],{143:function(e,t,a){"use strict";var c=a(10),r=a(2),n=a(3),s=a(4),o=a.n(s),i=a(0),l=a(7),b=a(1),d=["as","bsPrefix","className"],j=["className"];var f=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,d);a=Object(l.b)(a,"col");var i=Object(l.a)(),b=[],j=[];return i.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var o="xs"!==e?"-".concat(e):"";t&&b.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&j.push("order".concat(o,"-").concat(r)),null!=c&&j.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(b,j))}),{as:t,bsPrefix:a,spans:b}]}(e),s=Object(c.a)(a,2),i=s[0],f=i.className,u=Object(n.a)(i,j),O=s[1],x=O.as,m=void 0===x?"div":x,v=O.bsPrefix,p=O.spans;return Object(b.jsx)(m,Object(r.a)(Object(r.a)({},u),{},{ref:t,className:o()(f,!p.length&&v)}))}));f.displayName="Col",t.a=f},149:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(4),s=a.n(n),o=a(0),i=a(7),l=a(1),b=["bsPrefix","className","as"],d=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,j=Object(r.a)(e,b),f=Object(i.b)(a,"row"),u=Object(i.a)(),O="".concat(f,"-cols"),x=[];return u.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&x.push("".concat(O).concat(c,"-").concat(t))})),Object(l.jsx)(d,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[n,f].concat(x))}))}));d.displayName="Row",t.a=d},87:function(e,t,a){"use strict";a.r(t);a(0),a(89);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},90:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(143),s=a(3),o=a(4),i=a.n(o),l=a(7),b=a(25),d=a(64),j=a(1),f=["bsPrefix","className","variant","as"],u=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,b=void 0===o?"img":o,d=Object(s.a)(e,f),u=Object(l.b)(a,"card-img");return Object(j.jsx)(b,Object(c.a)({ref:t,className:i()(n?"".concat(u,"-").concat(n):u,r)},d))}));u.displayName="CardImg";var O=u,x=a(65),m=["bsPrefix","className","as"],v=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,b=void 0===o?"div":o,d=Object(s.a)(e,m),f=Object(l.b)(a,"card-header"),u=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(x.a.Provider,{value:u,children:Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:t},d),{},{className:i()(n,f)}))})}));v.displayName="CardHeader";var p=v,h=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(d.a)("h5"),g=Object(d.a)("h6"),N=Object(b.a)("card-body"),P=Object(b.a)("card-title",{Component:y}),S=Object(b.a)("card-subtitle",{Component:g}),C=Object(b.a)("card-link",{Component:"a"}),w=Object(b.a)("card-text",{Component:"p"}),k=Object(b.a)("card-footer"),B=Object(b.a)("card-img-overlay"),T=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,b=e.border,d=e.body,f=e.children,u=e.as,O=void 0===u?"div":u,x=Object(s.a)(e,h),m=Object(l.b)(a,"card");return Object(j.jsx)(O,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),b&&"border-".concat(b)),children:d?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:O,Title:P,Subtitle:S,Body:N,Link:C,Text:w,Header:p,Footer:k,ImgOverlay:B}),E=a(10),F=a(38),I=["as","bsPrefix","variant","size","active","className"],V=r.forwardRef((function(e,t){var a=e.as,r=e.bsPrefix,n=e.variant,o=e.size,b=e.active,d=e.className,f=Object(s.a)(e,I),u=Object(l.b)(r,"btn"),O=Object(F.b)(Object(c.a)({tagName:a},f)),x=Object(E.a)(O,2),m=x[0],v=x[1].tagName;return Object(j.jsx)(v,Object(c.a)(Object(c.a)(Object(c.a)({},m),f),{},{ref:t,className:i()(d,u,b&&"active",n&&"".concat(u,"-").concat(n),o&&"".concat(u,"-").concat(o),f.href&&f.disabled&&"disabled")}))}));V.displayName="Button",V.defaultProps={variant:"primary",active:!1,disabled:!1};var z=V,H=["bsPrefix","bg","pill","text","className","as"],J=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,b=e.className,d=e.as,f=void 0===d?"span":d,u=Object(s.a)(e,H),O=Object(l.b)(a,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:t},u),{},{className:i()(b,O,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));J.displayName="Badge",J.defaultProps={bg:"primary",pill:!1};var L=J,M=a(19),A=a(163),D={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,s=Object(r.useContext)(M.a),o=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},D.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:D.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:D.cardTextStyle,children:(a=o.bodyText,Object(j.jsx)(A.a,{children:a}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(t=o.links)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(z,{style:D.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(j.jsx)(L,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:D.badgeStyle,children:e},e)}))})]})})}},94:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(0),n=a(138),s=a(149),o=a(19),i=a(66),l=a.n(i),b=a(87),d=a(24),j=a(90),f=a(29),u=a(1),O={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){Object(r.useContext)(o.a);var t,a=e.header,i=Object(r.useState)(null),x=Object(c.a)(i,2),m=x[0],v=x[1],p=Object(r.useState)(!1),h=Object(c.a)(p,2),y=h[0];h[1];Object(r.useEffect)((function(){fetch(d.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return e}))}),[]);var g=y&&m?m.length:6;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.default,{title:a}),m?Object(u.jsx)("div",{className:"section-content-container",children:Object(u.jsx)(n.a,{style:O.containerStyle,children:Object(u.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=m.projects)||void 0===t?void 0:t.slice(0,g).map((function(e){return Object(u.jsx)(l.a,{children:Object(u.jsx)(j.default,{project:e})},e.title)}))})})}):Object(u.jsx)(f.default,{})]})}}}]);
//# sourceMappingURL=2.ca817720.chunk.js.map