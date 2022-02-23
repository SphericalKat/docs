"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[54092],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,f=m["".concat(p,".").concat(s)]||m[s]||c[s]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},p="Dyte Embed",d={unversionedId:"embed",id:"embed",isDocsHomePage:!1,title:"Dyte Embed",description:"You can easily integrate Dyte to your project without any SDK!",source:"@site/docs/guides/embed.mdx",sourceDirName:".",slug:"/embed",permalink:"/guides/embed",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Livestreaming any RTMP input using Dyte",permalink:"/guides/livestreaming-any-rtmp-streams"},next:{title:"Dyte Webinars (Beta)",permalink:"/guides/webinar"}},u=[{value:"Example",id:"example",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Events",id:"events",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dyte-embed"},"Dyte Embed"),(0,i.kt)("p",null,"You can easily integrate Dyte to your project without any SDK!"),(0,i.kt)("p",null,"Just use an iframe and pass your options and auth token in the URL query."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here's an example with all the available options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  src="https://app.dyte.in/meeting/stage/<roomName>?authToken=<authToken>&showSetupScreen=true&disableVideoBackground=true&orgId=<orgId>"\n  allow="camera;microphone;fullscreen;display-capture;picture-in-picture;clipboard-write;"\n/>\n')),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"authToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"authToken")," string you receive when you ",(0,i.kt)("a",{parentName:"td",href:"/api/#/operations/add_participant"},"Add a Participant")," to a meeting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"orgId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pass your organization if you want to use your custom presets.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"showSetupScreen")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to show the Setup Screen Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"disableVideoBackground")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to disable the video background changer button on the control bar. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"endRedirectURL")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The URL to redirect to on end of meeting")))),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('message', receiveMessage, false);\n\nfunction receiveMessage(evt)\n{\n  if (evt.origin === 'https://app.dyte.in')\n  {\n    const data = evt.data;\n    if (data.type === 'meetingEnded') {\n      const reason = data.kicked;\n      // take action on meeting end\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);