(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"0bf1468f14a933f1ad60":function(e,t,o){"use strict";o.r(t);var n,r=o("8af190b70a6bc55c6f1b"),i=o("0d7f0986bcd2f33d8a2a"),a=o("1037a6e0d5914309f74c"),s=o.n(a),d=o("fd107da5869b7ae197ce"),c=o.n(d),u=o("4dd2a92e69dcbe1bab10"),p=o("188313d2a36e593a5011");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var s=new Array(a),d=0;d<a;d++)s[d]=arguments[d+3];t.children=s}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=f(p.j,{}),w=f(p.m,{}),g=f(c.a,{source:"\r\n | innerWidth  |xs | sm  | md  | lg  | xl  |\r\n |--------|-----|----|----|----|----|----|\r\n | width  |   xs   |   sm   |   md   |   lg   |   xl |\r\n | smUp   |   show | hide  |\r\n | mdDown |        |       |     hide | show |\r\n"}),S=f(p.b,{}),k=f(p.c,{}),j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,h(t).apply(this,arguments))}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(n=[{key:"render",value:function(){var e=s.a.name+" - Layout",t=s.a.desc,o="containers/Layouts/demos/";return f("div",{},void 0,f(i.Helmet,{},void 0,f("title",{},void 0,e),f("meta",{name:"description",content:t}),f("meta",{property:"og:title",content:e}),f("meta",{property:"og:description",content:t}),f("meta",{property:"twitter:title",content:e}),f("meta",{property:"twitter:description",content:t})),f(u.rb,{title:"Media Queries",icon:"ios-phone-portrait",desc:"CSS media queries is the idiomatic approach to make your UI responsive.. We provide some CSS-in-JS helpers to do so. In the following demo, we change the background color (red, blue & green) based on the screen width."},void 0,f("div",{},void 0,v,f(u.Wb,{componentName:o+"MediaQueries.js"}))),f(u.rb,{title:"With Width",icon:"ios-phone-landscape",desc:"Sometimes, using CSS isn't enough. You might want to change the React rendering tree based on the breakpoint value, in JavaScript. We provide a withWidth() higher-order component for this use case. In the following demo, we change the rendered DOM element (em, u, del & span) based on the screen width."},void 0,f("div",{},void 0,w,f(u.Wb,{componentName:o+"WIthWIdth.js"}))),f(u.rb,{overflowX:!0,title:"Hidden",icon:"ios-eye-outline",desc:"Hidden works with a range of breakpoints e.g. xsUp or mdDown, or one or more breakpoints e.g. only='sm' or only={['md', 'xl']}. Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints."},void 0,f("div",{},void 0,g,S,f(u.Wb,{componentName:o+"Breakpoint.js"}))),f(u.rb,{title:"Integration with Grid",icon:"ios-grid",desc:"It is quite common to alter Grid at different responsive breakpoints, and in many cases, you want to hide some of those elements."},void 0,f("div",{},void 0,k,f(u.Wb,{componentName:o+"BreakpointGrid.js"}))))}}])&&m(o.prototype,n),r&&m(o,r),t}(r.Component);t.default=j}}]);