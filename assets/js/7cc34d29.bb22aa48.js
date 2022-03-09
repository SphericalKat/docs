"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[43330],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99197:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={sidebar_position:3},s="Basic Usage",p={unversionedId:"usage",id:"version-0.13.x/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Include Dyte's React component in your app",source:"@site/react_versioned_docs/version-0.13.x/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/react/0.13.x/usage",editUrl:"https://github.com/dyte-in/docs/tree/main/react_versioned_docs/version-0.13.x/usage.mdx",tags:[],version:"0.13.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1646819569,formattedLastUpdatedAt:"3/9/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.13.1/mainSidebar",previous:{title:"Quickstart",permalink:"/react/0.13.x/quickstart"},next:{title:"Customize the meeting UI",permalink:"/react/0.13.x/customize-meeting-ui"}},u=[{value:"Include Dyte&#39;s React component in your app",id:"include-dytes-react-component-in-your-app",children:[{value:"Pass Client ID for verification",id:"pass-client-id-for-verification",children:[]},{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[]},{value:"Get meeting instance on successful creation",id:"get-meeting-instance-on-successful-creation",children:[]}]}],l={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("h2",{id:"include-dytes-react-component-in-your-app"},"Include Dyte's React component in your app"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./reference/dyte-meeting"},(0,i.kt)("inlineCode",{parentName:"a"},"DyteMeeting"))," is a React component that can be included in your React application to show the Dyte Meeting UI."),(0,i.kt)("p",null,"It has 3 mandatory and 2 optional properties. The mandatory ones are defined below along with their usage, and the optional ones can be found ",(0,i.kt)("a",{parentName:"p",href:"./advanced-usage#turn-on-the-setup--preview-screen"},"here in the advanced usage")," page."),(0,i.kt)("h3",{id:"pass-client-id-for-verification"},"Pass Client ID for verification"),(0,i.kt)("p",null,"You need to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to verify the participant's ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," against."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2}","{2}":!0},"<DyteMeeting\n    clientId=`yourClientID`\n    >\n")),(0,i.kt)("h3",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,i.kt)("p",null,"You need to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"meetingConfig")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to define which meeting should the client connect to and a couple of other setup parameters, out of which only ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"roomName")," are mandatory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3-6}","{3-6}":!0},"<DyteMeeting\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    >\n")),(0,i.kt)("h3",{id:"get-meeting-instance-on-successful-creation"},"Get meeting instance on successful creation"),(0,i.kt)("p",null,"You need to pass an ",(0,i.kt)("inlineCode",{parentName:"p"},"onInit")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to get reference to the meeting instance that is created. ",(0,i.kt)("inlineCode",{parentName:"p"},"onInit")," expects a function which has a single param of type ",(0,i.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,i.kt)("inlineCode",{parentName:"a"},"Meeting"))," and is not expected to return anything. This ",(0,i.kt)("inlineCode",{parentName:"p"},"Meeting")," reference can be used to take further actions and make customizations to the meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2}","{2}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    >\n")))}d.isMDXComponent=!0}}]);