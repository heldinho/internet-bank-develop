(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"448cb98957d449764ce0":function(t,e,o){"use strict";o.r(e);var n,r=o("8af190b70a6bc55c6f1b"),c=o.n(r),a=(o("8a2d1b95e05b6a321e74"),o("6938d226fd372a75cbf9")),i=o("ab4cb61bcb2dc161defb"),f=o("d7dd51e1bf6bfc2c9c3d"),l=o("0d7f0986bcd2f33d8a2a"),d=o("1037a6e0d5914309f74c"),s=o.n(d),u=o("40d978c4bb449333872a"),b=o("4dd2a92e69dcbe1bab10"),p=o("eebbc9f977e6e78f5b57"),y=o("68e566edc4c7d6d20638"),m=o("69cc412ededd061f5e6e");function h(t,e,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=r;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];e.children=i}if(e&&c)for(var l in c)void 0===e[l]&&(e[l]=c[l]);else e||(e=c||{});return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function v(t){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function e(){var t,o,n,r,c,a,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];return n=this,r=(t=g(e)).call.apply(t,[this].concat(l)),o=!r||"object"!==v(r)&&"function"!==typeof r?O(n):r,c=O(o),i=function(t,e){var n=o.props.submit,r="object"===v(e)?URL.createObjectURL(e):e;n(t,null!==e?r:u.a.user.avatar)},(a="submitContact")in c?Object.defineProperty(c,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[a]=i,o}var o,n,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,t),o=e,(n=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(m.a)}},{key:"render",value:function(){var t=s.a.name+" - Contact",e=s.a.desc,o=this.props,n=o.classes,r=o.dataContact,c=o.itemSelected,a=o.showDetail,i=o.hideDetail,f=o.avatarInit,d=o.open,u=o.showMobileDetail,p=o.add,y=o.edit,m=o.close,v=o.remove,w=o.favorite,g=o.keyword,O=o.search,j=o.closeNotif,C=o.messageNotif;return h("div",{},void 0,h(l.Helmet,{},void 0,h("title",{},void 0,t),h("meta",{name:"description",content:e}),h("meta",{property:"og:title",content:t}),h("meta",{property:"og:description",content:e}),h("meta",{property:"twitter:title",content:t}),h("meta",{property:"twitter:description",content:e})),h(b.pb,{close:function(){return j()},message:C}),h("div",{className:n.root},void 0,h(b.s,{addFn:!0,total:r.size,addContact:p,clippedRight:!0,itemSelected:c,dataContact:r,showDetail:a,search:O,keyword:g}),h(b.r,{showMobileDetail:u,hideDetail:i,dataContact:r,itemSelected:c,edit:y,remove:v,favorite:w})),h(b.c,{addContact:p,openForm:d,closeForm:m,submit:this.submitContact,avatarInit:f}))}}])&&w(o.prototype,n),r&&w(o,r),e}(c.a.Component),S=Object(f.connect)((function(t){return{force:t,avatarInit:t.getIn(["contact","avatarInit"]),dataContact:t.getIn(["contact","contactList"]),itemSelected:t.getIn(["contact","selectedIndex"]),keyword:t.getIn(["contact","keywordValue"]),open:t.getIn(["contact","openFrm"]),showMobileDetail:t.getIn(["contact","showMobileDetail"]),messageNotif:t.getIn(["contact","notifMsg"])}}),(function(t){return{fetchData:Object(i.bindActionCreators)(y.f,t),showDetail:Object(i.bindActionCreators)(y.j,t),hideDetail:function(){return t(y.g)},submit:Object(i.bindActionCreators)(y.k,t),edit:Object(i.bindActionCreators)(y.e,t),add:function(){return t(y.a)},close:function(){return t(y.c)},remove:Object(i.bindActionCreators)(y.h,t),favorite:Object(i.bindActionCreators)(y.b,t),search:Object(i.bindActionCreators)(y.i,t),closeNotif:function(){return t(y.d)}}}))(C);e.default=Object(a.withStyles)(p.a)(S)}}]);