(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(45)},30:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,n){},33:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),l=(n(30),n(31),n(32),n(10)),s=n(11),i=n(13),u=n(12),m=n(14),h=n(6),d=(n(33),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Container"},o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("div",{className:"left-side"},o.a.createElement("div",{className:"nav-link-wrapper"},o.a.createElement(h.b,{className:"",to:"#"}," ","Home")),o.a.createElement("div",{className:"nav-link-wrapper"},o.a.createElement(h.b,{className:"",to:"#"}," ","Moment"))),o.a.createElement("div",{className:"right-side"}),o.a.createElement("div",{className:"nav-link-wrapper"},o.a.createElement(h.b,{className:"",to:"#"}," ","Login"))))}}]),t}(a.Component)),g=(n(5),n(9)),f=n(24),v=function(e){return o.a.createElement("div",{className:"tweet-body"},e.children)},w=function(e){return o.a.createElement("div",{className:"handle"},e.handle)},p=function(e){return o.a.createElement("div",{className:"name"},e.name)},E=function(e){return o.a.createElement("div",{className:"tweet"},e.tweet)},b=function(e){return o.a.createElement(v,null,o.a.createElement("div",{className:"inner-body"},o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"inner-body"},o.a.createElement(p,{name:e.name}),o.a.createElement(w,{handle:e.handle})),o.a.createElement(E,{tweet:e.tweet}))))},O=(n(38),n(44),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=e.target.value;console.log(t),n.setState(Object(f.a)({},e.target.name,t),function(){n.search(t)})},n.state={tweets:[],pagenumber:1,search:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTweets(this.state.pagenumber)}},{key:"search",value:function(e){var t=this;console.log(e),fetch("http://13.232.242.50:33138/tweets?text_like="+e).then(function(e){return e.json()}).then(function(e){console.log("getting tweets here "),console.log(e),t.setState({tweets:Object(g.a)(e)})}).catch(function(e){console.log("OOPS! got an error"),console.log(e)})}},{key:"search",value:function(e){var t=this;console.log(e),fetch("http://13.232.242.50:33138/tweets?text_like="+e).then(function(e){return e.json()}).then(function(e){console.log("getting tweets here "),console.log(e),t.setState({tweets:Object(g.a)(e)})}).catch(function(e){console.log("OOPS! got an error"),console.log(e)})}},{key:"getTweets",value:function(e){var t=this;fetch("http://13.232.242.50:33138/tweets?_page="+e+"&limit=10").then(function(e){return e.json()}).then(function(e){console.log("getting tweets here "),console.log(e),t.setState({tweets:[].concat(Object(g.a)(t.state.tweets),Object(g.a)(e))})}).catch(function(e){console.log("OOPS! got an error"),console.log(e)})}},{key:"loasdMore",value:function(e){var t=this,n=e+1;this.setState({pagenumber:n},function(){t.getTweets(n)})}},{key:"render",value:function(){var e=this;return 0===this.state.tweets.length?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("center",null,o.a.createElement("input",{className:"search-input",type:"text",placeholder:"search",value:this.state.search,onChange:function(t){return e.onChange(t)},name:"search"}),o.a.createElement("div",{style:{width:"100%",marginTop:"20px",backgroundColor:"#e6ecf0"}},this.state.tweets.map(function(e,t){return o.a.createElement(b,{key:[t],name:e.name,handle:e.id,tweet:e.text})})),o.a.createElement("h2",null,o.a.createElement("button",{onClick:function(){e.loasdMore(e.state.pagenumber)}},"Load More"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h.a,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.9e705d39.chunk.js.map