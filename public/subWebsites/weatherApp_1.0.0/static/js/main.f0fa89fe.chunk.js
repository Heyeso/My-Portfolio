(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(8),i=n.n(r),o=(n(14),n(3)),d=n(4),h=n(6),l=n(5),u=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).textHandler=function(e){a.setState({text:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&a.props.btn(a.state.text)},a.state={text:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"searchLoc",children:Object(a.jsxs)("div",{className:"search-box",children:[Object(a.jsx)("input",{onKeyPress:this.handleKeyPress,value:this.state.text,onChange:this.textHandler,placeholder:"Current Location",type:"text"}),Object(a.jsx)("button",{onClick:function(){return e.props.btn(e.state.text)},children:Object(a.jsx)("i",{className:"fas fa-search"})})]})})}}]),n}(s.Component),j=n(2),b=n.n(j),p=function(e){var t=parseFloat(e.data.main.temp-273.15).toFixed(2);t>25?b()(".contain").css({"background-color":"rgb(255, 94, 0)"}):t>15?b()(".contain").css({"background-color":"rgb(201, 201, 0)"}):t>5?b()(".contain").css({"background-color":"rgb(0, 128, 49)"}):b()(".contain").css({"background-color":"rgb(0, 132, 255)"});var n=e.data.weather[0].main,s="";return s="Rain"===n?"images/weatherConditions/rain.png":"Clear"===n?"images/weatherConditions/clear.png":"Drizzle"===n?"images/weatherConditions/drizzle.png":"Snow"===n?"images/weatherConditions/snow.png":"Thunderstorm"===n?"images/weatherConditions/thunderstorm.png":"Clouds"===n?"images/weatherConditions/clouds.png":"images/weatherConditions/atmosphere.png",Object(a.jsxs)("div",{className:"result",children:[Object(a.jsx)("h1",{className:"location",children:e.data.name+", "+e.data.sys.country}),Object(a.jsxs)("div",{className:"weather",children:[Object(a.jsx)("div",{className:"desc",children:n}),Object(a.jsx)("img",{src:s,alt:"Weather description"}),Object(a.jsxs)("div",{className:"degree",children:[t,Object(a.jsx)("span",{children:"\xb0"}),"C"]})]})]})},g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).searchBtn=function(e){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e.toLowerCase(),"&APPID=18afdaa88da7616c414c4fe1c66cb408")).then((function(e){return e.json()})).then((function(t){a.setState({cData:t,text:e,first:!1}),console.log(t)})).catch((function(e){a.setState({error:e.message})})),b()(".result").fadeOut(0)},a.state={text:"",cData:{}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.searchBtn("Baltimore")}},{key:"componentDidUpdate",value:function(){b()(".result").fadeIn(300)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"inner",children:[Object(a.jsx)(u,{btn:this.searchBtn}),200===this.state.cData.cod?Object(a.jsx)(p,{data:this.state.cData}):Object(a.jsx)("div",{className:"error",children:this.state.cData.message})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.f0fa89fe.chunk.js.map