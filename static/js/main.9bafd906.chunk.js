(this["webpackJsonppraveenorugantitech-link-shortner"]=this["webpackJsonppraveenorugantitech-link-shortner"]||[]).push([[0],{69:function(t,n,e){},70:function(t,n,e){},94:function(t,n,e){"use strict";e.r(n);var r=e(8),c=e(0),a=e.n(c),i=e(10),o=e.n(i),u=(e(69),e(70),e(28)),s=e(29);function l(){var t=Object(u.a)(["\n  display: flex;\n  height: 100vh;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return l=function(){return t},t}var h=s.a.div(l()),j=function(t){var n=t.children;return Object(r.jsxs)(h,{children:[Object(r.jsx)("h1",{children:"Link Shortner"}),n]})},f=e(37),b=e.n(f),d=e(53),x=e(34),O=e(127),p=e(128),v=e(126),g=e(54),m=e.n(g).a.create({baseURL:"https://api.shrtco.de/v2/"}),k=e(129),S=function(t){var n=t.shortend;return Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{rel:"noopener",target:"_blank",href:"https://".concat(n),children:n})})};function w(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]);return w=function(){return t},t}var y=s.a.form(w()),C=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,F=function(){var t=Object(c.useState)(""),n=Object(x.a)(t,2),e=n[0],a=n[1],i=Object(c.useState)(""),o=Object(x.a)(i,2),u=o[0],s=o[1],l=Object(c.useState)(!1),h=Object(x.a)(l,2),j=h[0],f=h[1],g=function(t){t.preventDefault(),k(e)&&(w(e),a(""),f(!j))},k=function(t){return t.match(C)},w=function(){var t=Object(d.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("shorten?url=".concat(e)).then((function(t){s(t.data.result.short_link),f(!1)})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(y,{onSubmit:function(t){return g(t)},autoComplete:"off",children:[Object(r.jsx)(O.a,{style:{marginBottom:"20px"},label:"Link",variant:"outlined",value:e,onChange:function(t){return a(t.target.value)}}),!j&&Object(r.jsx)(p.a,{onClick:function(t){return g(t)},variant:"contained",color:"primary",children:"Submit"}),j&&Object(r.jsx)(v.a,{})]}),u&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Short Link: "}),Object(r.jsx)(S,{shortend:u})]})]})};var L=function(){return Object(r.jsx)(j,{children:Object(r.jsx)(F,{})})},_=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,130)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),_()}},[[94,1,2]]]);