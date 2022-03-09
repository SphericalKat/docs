"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[57263],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={sidebar_position:3},p="Basic Usage",l={unversionedId:"usage",id:"version-0.15.x/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Include Dyte Meeting in your app",source:"@site/javascript_versioned_docs/version-0.15.x/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/javascript/0.15.x/usage",editUrl:"https://github.com/dyte-in/docs/tree/main/javascript_versioned_docs/version-0.15.x/usage.mdx",tags:[],version:"0.15.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1646819569,formattedLastUpdatedAt:"3/9/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.15.x/mainSidebar",previous:{title:"Quickstart",permalink:"/javascript/0.15.x/quickstart"},next:{title:"Customize the meeting UI",permalink:"/javascript/0.15.x/customize-meeting-ui"}},s=[{value:"Include Dyte Meeting in your app",id:"include-dyte-meeting-in-your-app",children:[{value:"Pass Client ID for verification",id:"pass-client-id-for-verification",children:[]},{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[]},{value:"Initialize the meeting in its parent container",id:"initialize-the-meeting-in-its-parent-container",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h2",{id:"include-dyte-meeting-in-your-app"},"Include Dyte Meeting in your app"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DyteClient")," is a JavaScript library that can be included in your JavaScript application to show the Dyte Meeting UI."),(0,a.kt)("p",null,"It has a ",(0,a.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,a.kt)("inlineCode",{parentName:"a"},"Meeting"))," component which can be initialized using 2 mandatory and 2 optional properties. The mandatory ones are defined below along with their usage, and the optional ones can be found ",(0,a.kt)("a",{parentName:"p",href:"./advanced-usage#turn-on-the-setup--preview-screen"},"here in the advanced usage")," page."),(0,a.kt)("h3",{id:"pass-client-id-for-verification"},"Pass Client ID for verification"),(0,a.kt)("p",null,"You need to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteClient")," to verify the participant's ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," against."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{2}","{2}":!0},'<script>\n  const client = new DyteClient({ clientId: "orgId|clientId" });\n<\/script>\n')),(0,a.kt)("h3",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,a.kt)("p",null,"You need to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"meetingConfig")," object to initialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting"),", to define which meeting should the client connect to and a couple of other setup parameters, out of which only ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"roomName")," are mandatory. This ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting")," reference can be used to take further actions and make customizations to the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{4-7}","{4-7}":!0},'<script>\n  const client = new DyteClient({ clientId: "orgId|clientId" });\n\n  const meeting = client.Meeting({\n    roomName: "<roomName>",\n    authToken: "<authToken>",\n  });\n<\/script>\n')),(0,a.kt)("h3",{id:"initialize-the-meeting-in-its-parent-container"},"Initialize the meeting in its parent container"),(0,a.kt)("p",null,"You need to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," method on ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting")," and pass it the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the parent container in which you want the meeting to get initialized."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9}","{9}":!0},'<script>\n  const client = new DyteClient({ clientId: "orgId|clientId" });\n\n  const meeting = client.Meeting({\n    roomName: "<roomName>",\n    authToken: "<authToken>",\n  });\n\n  meeting.init("root");\n<\/script>\n')))}d.isMDXComponent=!0}}]);