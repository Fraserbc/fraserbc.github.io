(this["webpackJsonpfraserbc.github.io"]=this["webpackJsonpfraserbc.github.io"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var i=n(6),c=n.n(i),r=n(10),o=n.n(r),s=(n(18),n(0)),a=n(3),d=n(7),l=n(1),u=n(2),h=(n(19),n(11)),j=n.n(h),b=n(13),f=n(12),p=n.n(f),O=n(4),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).vantaRef=c.a.createRef(),t.webglHWMode=p.a.supported({failIfMajorPerformanceCaveat:!0}),t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.webglHWMode&&(this.vantaEffect=j()({el:this.vantaRef.current,THREE:b,mouseControls:!1,touchControls:!1,gyroControls:!1}))}},{key:"componentWillUnmount",value:function(){this.webglHWMode&&this.vantaEffect&&this.vantaEffect.destroy()}},{key:"render",value:function(){if(this.webglHWMode)return Object(O.jsx)("div",{id:"waves-el",ref:this.vantaRef})}}]),n}(c.a.Component),g=(n(31),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"popup-container ".concat(this.props.showing?"popup-shown":"popup-hidden"),children:Object(O.jsx)("p",{children:this.props.content})})}}]),n}(c.a.Component)),x=g,m=n.p+"static/media/logo.73a599bd.png",k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={showing:!1},t.discordClick=t.discordClick.bind(Object(d.a)(t)),t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.title="Fraser Price"}},{key:"discordClick",value:function(){var t=this;navigator.clipboard.writeText("frsr#5381"),this.setState({showing:!0}),setTimeout((function(){t.setState({showing:!1})}),250)}},{key:"render",value:function(){return Object(O.jsxs)("div",{id:"App",children:[Object(O.jsx)(v,{id:"waves-el"}),Object(O.jsx)(x,{content:"Copied to clipboard!",showing:this.state.showing}),Object(O.jsxs)("div",{id:"info-container",children:[Object(O.jsx)("img",{src:m,id:"picture"}),Object(O.jsx)("h1",{children:"Fraser Price"}),Object(O.jsx)("div",{id:"links",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/fraserbc",target:"_blank",children:"Github"})}),Object(O.jsx)("li",{children:"\xb7"}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",onClick:this.discordClick,children:"Discord"})})]})})]})]})}}]),n}(c.a.Component);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c6386414.chunk.js.map