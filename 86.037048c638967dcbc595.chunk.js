(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{e97ceb55144631a6680c:function(e,t,n){"use strict";n.r(t);var i,r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),c=n("1037a6e0d5914309f74c"),u=n.n(c),s=n("ab4cb61bcb2dc161defb"),d=n("d7dd51e1bf6bfc2c9c3d"),l=n("4dd2a92e69dcbe1bab10"),m=n("64d60600a7b0e7b54c28"),p=n("1a7e0d6f465027ada1e2"),f=function(e){return{type:p.d,items:e}},b=function(e){return{type:p.e,keyword:e}},y=function(e){return{type:p.a,item:e}},g=function(e){return{type:p.c,item:e}},h={type:p.b},v=function(e){return{type:p.f,item:e}},w={type:m.a},P=n("b701c9c5068c915d4789"),C=[{id:"1",name:"Cras convallis lacus orc",thumbnail:P.a[21],desc:"Curabitur egestas consequat lorem, vel fermentum augue porta id.",ratting:4,price:30,prevPrice:0,discount:"",soldout:!1},{id:"2",name:"Vivamus sit amet interdum elit",thumbnail:P.a[22],desc:"Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.",ratting:0,price:15,prevPrice:150,discount:"90%",soldout:!1},{id:"3",name:"Fusce placerat enim et odio molestie sagittis",thumbnail:P.a[23],desc:"Duis tristique metus magna, lobortis aliquam risus euismod sit amet",ratting:5,price:30,prevPrice:0,discount:"",soldout:!0},{id:"4",name:"Pellentesque ac bibendum tortor",thumbnail:P.a[24],desc:"Nam posuere accumsan porta",ratting:2,price:80,prevPrice:100,discount:"20%",soldout:!1},{id:"5",name:"Curabitur egestas consequat lorem",thumbnail:P.a[25],desc:"Aenean sit amet magna vel magna fringilla fermentum",ratting:5,price:50,prevPrice:0,discount:"",soldout:!1},{id:"6",name:"Aenean facilisis vitae purus facilisis semper",thumbnail:P.a[26],desc:"Vestibulum bibendum nisi eget magna malesuada",ratting:4,price:75,prevPrice:100,discount:"25%",soldout:!1},{id:"7",name:"Aenean sit amet magna vel magna fringilla fermentum",thumbnail:P.a[27],desc:"Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.",ratting:5,price:20,prevPrice:16,discount:"20%",soldout:!1},{id:"8",name:"Ut sed eros finibus",thumbnail:P.a[28],desc:"Curabitur egestas consequat lorem, vel fermentum augue porta id.",ratting:1,price:30,prevPrice:0,discount:"",soldout:!1},{id:"9",name:"Nulla lobortis nunc vitae nisi",thumbnail:P.a[29],desc:"Sed mi neque, convallis at ipsum at, blandit pretium enim",ratting:4,price:50,prevPrice:100,discount:"50%",soldout:!1},{id:"10",name:"Nam posuere accumsan",thumbnail:P.a[30],desc:"Integer id orci sed ante tincidunt tincidunt sit amet sed libero.",ratting:5,price:30,prevPrice:0,discount:"",soldout:!0},{id:"11",name:"Cras convallis lacus orc",thumbnail:P.a[37],desc:"Curabitur egestas consequat lorem, vel fermentum augue porta id.",ratting:4,price:66,prevPrice:200,discount:"67%",soldout:!1}];function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:i,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){function t(){var e,n,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return i=this,r=(e=j(t)).call.apply(e,[this].concat(a)),n=!r||"object"!==I(r)&&"function"!==typeof r?S(i):r,V(S(n),"state",{listView:"grid"}),V(S(n),"handleSwitchView",(function(e,t){n.setState({listView:t})})),n}var n,i,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(C)}},{key:"render",value:function(){var e=u.a.name+" - Ecommerce",t=u.a.desc,n=this.state.listView,i=this.props,r=i.dataProduct,o=i.handleAddToCart,c=i.dataCart,s=i.removeItem,d=i.checkout,m=i.showDetail,p=i.productIndex,f=i.totalItems,b=i.totalPrice,y=i.search,g=i.keyword,h=i.closeNotif,v=i.messageNotif;return O("div",{},void 0,O(a.Helmet,{},void 0,O("title",{},void 0,e),O("meta",{name:"description",content:t}),O("meta",{property:"og:title",content:e}),O("meta",{property:"og:description",content:t}),O("meta",{property:"twitter:title",content:e}),O("meta",{property:"twitter:description",content:t})),O(l.pb,{close:function(){return h()},message:v}),O(l.Nb,{dataCart:c,dataProduct:r,removeItem:s,checkout:d,totalItems:f,totalPrice:b,search:y,keyword:g,listView:n,handleSwitchView:this.handleSwitchView}),O(l.Cb,{listView:n,dataProduct:r,showDetail:m,handleAddToCart:o,productIndex:p,keyword:g}))}}])&&k(n.prototype,i),r&&k(n,r),t}(o.a.Component),N="ecommerce",_=Object(d.connect)((function(e){return{force:e,keyword:e.getIn([N,"keywordValue"]),dataProduct:e.getIn([N,"productList"]),dataCart:e.getIn([N,"cart"]),productIndex:e.getIn([N,"productIndex"]),totalItems:e.getIn([N,"totalItems"]),totalPrice:e.getIn([N,"totalPrice"]),messageNotif:e.getIn([N,"notifMsg"])}}),(function(e){return{fetchData:Object(s.bindActionCreators)(f,e),search:Object(s.bindActionCreators)(b,e),handleAddToCart:Object(s.bindActionCreators)(y,e),removeItem:Object(s.bindActionCreators)(g,e),showDetail:Object(s.bindActionCreators)(v,e),checkout:function(){return e(h)},closeNotif:function(){return e(w)}}}))(q);t.default=_}}]);