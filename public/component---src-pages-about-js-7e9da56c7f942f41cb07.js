(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(146),i=n(157);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the About page"),r.a.createElement("p",null,"Welcome to About page"),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},145:function(e,t,n){"use strict";var a=n(34);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(149)),o=a(n(150)),i=a(n(7)),u=a(n(49)),l=a(n(50)),c=a(n(4)),s=a(n(0)),d=n(13),p=n(146);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return s.default.createElement(d.Link,(0,o.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:m})),!0}},h))},t}(s.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(145),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(147),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Victor Mira"}}}}},149:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},150:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},151:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(51),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,n){"use strict";n(153)("link",function(e){return function(t){return e(this,"a","href",t)}})},153:function(e,t,n){var a=n(6),r=n(17),o=n(26),i=/"/g,u=function(e,t,n,a){var r=String(o(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},154:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},155:function(e,t,n){},157:function(e,t,n){"use strict";var a=n(148),r=n(0),o=n.n(r),i=n(4),u=n.n(i),l=n(146),c=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("span",{className:"logo"},"VM"),o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header-wrap"},o.a.createElement("nav",{className:"main-nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{className:"about",to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(l.Link,{className:"projects",to:"/projects"},"Projects")),o.a.createElement("li",null,o.a.createElement(l.Link,{className:"blog",to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(l.Link,{className:"contact",to:"/contact"},"Contact"))))))))},s=(n(152),n(154),n(48),[{name:"Twitter",link:"https://twitter.com/vmmira"},{name:"Github",link:"https://github.com/VictorMira"},{name:"Youtube",link:"https://www.youtube.com/channel/UCQIYy8c8zZMxOlNPJ-VUhpA"}]),d=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("h3",null,"Where to find me"),o.a.createElement("ul",{className:"social"},s.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:e.name.toLowerCase(),href:e.link},e.name))})))},p=(n(155),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),o.a.createElement(d,null))},data:a})});p.propTypes={children:u.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-about-js-7e9da56c7f942f41cb07.js.map