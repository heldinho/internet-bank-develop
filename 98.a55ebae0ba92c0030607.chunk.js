(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"911d8c0f1f8f653f1805":function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("435859b6b76fb67a754a")),a=n.n(c),f=n("0d7f0986bcd2f33d8a2a"),u=n("57ffd1ecfa030d8529e7"),b=n.n(u),s=n("ab4cb61bcb2dc161defb"),d=n("d7dd51e1bf6bfc2c9c3d"),l=n("4dd2a92e69dcbe1bab10"),m=n("48843b0f5e2ffb968b58"),p=n("5c80717ff75b7003b798");function y(t){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=r;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];e.children=a}if(e&&i)for(var u in i)void 0===e[u]&&(e[u]=i[u]);else e||(e=i||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=v(a.a,{item:!0,md:4,xs:12},void 0,v(l.Sb,{})),C=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,g(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(m.a)}},{key:"render",value:function(){var t=b.a[b.a.whitelabel].name+" - Social Media",e=b.a[b.a.whitelabel].desc,n=this.props,o=n.dataProps,r=n.submitPost,i=n.submitLike,c=n.submitComment,u=n.fetchComment,s=n.commentIndex,d=n.closeNotif,m=n.messageNotif;return v("div",{},void 0,v(f.Helmet,{},void 0,v("title",{},void 0,t),v("meta",{name:"description",content:e}),v("meta",{property:"og:title",content:t}),v("meta",{property:"og:description",content:e}),v("meta",{property:"twitter:title",content:t}),v("meta",{property:"twitter:description",content:e})),v(l.qb,{close:function(){return d()},message:m}),v(a.a,{container:!0,alignItems:"flex-start",justify:"flex-start",direction:"row",spacing:3},void 0,v(a.a,{item:!0,md:8,xs:12},void 0,v("div",{},void 0,v(l.jc,{submitPost:r}),v(l.cc,{dataTimeline:o,onlike:i,submitComment:c,fetchComment:u,commentIndex:s}))),j))}}])&&h(n.prototype,o),r&&h(n,r),e}(i.a.Component),P=Object(d.connect)((function(t){return{force:t,dataProps:t.getIn(["socmed","dataTimeline"]),commentIndex:t.getIn(["socmed","commentIndex"]),messageNotif:t.getIn(["socmed","notifMsg"])}}),(function(t){return{fetchData:Object(s.bindActionCreators)(p.b,t),submitPost:Object(s.bindActionCreators)(p.d,t),submitComment:Object(s.bindActionCreators)(p.e,t),submitLike:Object(s.bindActionCreators)(p.f,t),fetchComment:Object(s.bindActionCreators)(p.c,t),closeNotif:function(){return t(p.a)}}}))(C);e.default=P}}]);