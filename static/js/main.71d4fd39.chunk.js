(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},233:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(20),r=a.n(o),s=(a(91),a(15)),c=a(16),l=a(18),u=a(17),m=a(19),p=a(237),d=a(236),b=a(238),h=(a(93),a(83)),g=a(75),f=a.n(g),j=a(77),E=a.n(j),O=a(51),v=a.n(O),y=a(78),k=a.n(y),w=a(79),C=a.n(w),I=a(80),N=a.n(I),S=a(81),x=a.n(S),B=a(38),T=a.n(B),D=a(39),A=a.n(D),G=(a(95),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={open:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title=this.props.title}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f.a,{className:"appBar",position:"static",style:{backgroundColor:"#333"}},i.a.createElement(E.a,null,i.a.createElement(k.a,{className:"".concat(this.props.classes.menuButton," appBar-menu"),color:"inherit","aria-label":"Menu",onClick:function(){return e.setState({open:!0})}},i.a.createElement(C.a,null)),i.a.createElement(v.a,{variant:"h6",color:"inherit",className:this.props.classes.grow},this.props.title))),i.a.createElement(N.a,{docked:!1,width:250,open:this.state.open,onClose:function(){return e.setState({open:!1})},className:"AppBarAndMenu-drawer"},i.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){return e.setState({open:!1})},onKeyDown:function(){return e.setState({open:!1})}},i.a.createElement("div",{className:this.props.classes.fullList},i.a.createElement(x.a,null,i.a.createElement(T.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/")})}},i.a.createElement(A.a,{primary:"Head First Kotlin"})),i.a.createElement(T.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/tableOfContents")})}},i.a.createElement(A.a,{primary:"Table of contents"})),i.a.createElement(T.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/sourceCode")})}},i.a.createElement(A.a,{primary:"Source code"})))))))}}]),t}(n.Component)),K=Object(b.a)(Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(G)),R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K,{title:"Head First Kotlin"}),i.a.createElement("section",{className:"welcome"},"Welcome"))}}]),t}(n.Component),H=Object(b.a)(R),M=(a(227),a(229),a(231),a(85)),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",Object.assign({style:Object(M.a)({width:this.props.width,height:this.props.height,position:"relative"},this.props.style)},this.props),i.a.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,backgroundImage:"url(".concat(this.props.src,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundClip:"border-box",borderRadius:this.props.style&&this.props.style.borderRadius}}))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.name;return i.a.createElement("li",{className:"ImageItem-container"},i.a.createElement("div",{className:"ImageItem-photo ".concat(this.props.disabled&&"ImageItem-photo-disabled"),onClick:function(){return e.props.onClick(e.props.id)}},i.a.createElement(F,{alt:t,src:this.props.src,className:"cover-image"})),i.a.createElement("div",{className:"ImageItem-details"},i.a.createElement("div",{className:"ImageItem-info",onClick:function(){return e.props.onClick(e.props.id)}},i.a.createElement("div",{className:"ImageItem-name"},t),this.props.description&&i.a.createElement("div",{className:"ImageItem-description"},this.props.description),null==this.props.description||i.a.createElement("div",{className:"ImageItem-description"},"\xa0"))))}}]),t}(n.Component),P=[{title:"getting started",subtitle:"A Quick Dip",image:"images/11254.jpg"},{title:"basic types and variables",subtitle:"Being a Variable",image:"images/11120.jpg"},{title:"functions",subtitle:"Getting Out of Main",image:"images/11114.jpg"},{title:"classes and objects",subtitle:"A Bit of Class",image:"images/11240.jpg"},{title:"superclasses and subclasses",subtitle:"Using your Inheritance",image:"images/11165.jpg"},{title:"abstract classes and interfaces",subtitle:"Serious Polymorphism",image:"images/11131.jpg"},{title:"data classes",subtitle:"Dealing with Data",image:"images/53212.jpg"},{title:"nulls and exceptions",subtitle:"Safe and Sound",image:"images/11077.jpg"},{title:"collections",subtitle:"Get Organized",image:"images/11004.jpg"},{title:"generics",subtitle:"Know your Ins from your Outs",image:"images/11148.jpg"},{title:"lambdas and higher-order functions",subtitle:"Treating Code like Data",image:"images/11333.jpg"},{title:"built-in higher-order functions",subtitle:"Power Up your Code",image:"images/11142.jpg"},{title:"testing",subtitle:"Hold your Code to Account",image:"images/11199.jpg"},{title:"leftovers",subtitle:"The Top Ten Things we didn't cover",image:"images/11287.jpg"}],W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K,{title:"Table of contents"}),i.a.createElement("section",{className:"tableOfContents"},P.map(function(e,t){return i.a.createElement(L,{src:e.image,name:i.a.createElement("div",null,i.a.createElement("div",{className:"chapter-number",style:{float:"left",marginRight:"1ex"}},t+1," "),i.a.createElement("div",{className:"chapter-title"},e.title)),description:e.subtitle})})))}}]),t}(n.Component),z=(a(233),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K,{title:"Source code"}),"You can download the ",i.a.createElement("a",{className:"repoLink",href:"https://github.com/dogriffiths/HFKotlin",target:"_blank",rel:"noopener noreferrer"},"source code on Github"))}}]),t}(n.Component)),J=Object(b.a)(z),U=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(d.a,{exact:!0,path:"/",component:H}),i.a.createElement(d.a,{exact:!0,path:"/tableOfContents",component:W}),i.a.createElement(d.a,{exact:!0,path:"/sourceCode",component:J}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a(235)},91:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){}},[[86,2,1]]]);
//# sourceMappingURL=main.71d4fd39.chunk.js.map