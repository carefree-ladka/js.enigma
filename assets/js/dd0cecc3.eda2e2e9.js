"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5754],{8237:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>i});var o=r(4848),a=r(8453);const c={title:"Canceling an API Call"},l=void 0,t={id:"WebDev/JavaScript/HowToCancelAPICalls",title:"Canceling an API Call",description:"In JavaScript, you can cancel API calls made with `fetch and axios using AbortController for fetch and CancelToken (or AbortController in modern versions) for axios`.",source:"@site/docs/WebDev/JavaScript/HowToCancelAPICalls.mdx",sourceDirName:"WebDev/JavaScript",slug:"/WebDev/JavaScript/HowToCancelAPICalls",permalink:"/js.enigma/docs/WebDev/JavaScript/HowToCancelAPICalls",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/JavaScript/HowToCancelAPICalls.mdx",tags:[],version:"current",frontMatter:{title:"Canceling an API Call"},sidebar:"tutorialSidebar",previous:{title:"Understanding JavaScript Hoisting",permalink:"/js.enigma/docs/WebDev/JavaScript/Hoisting"},next:{title:"JavaScript Execution in Browser",permalink:"/js.enigma/docs/WebDev/JavaScript/JSExecution"}},s={},i=[{value:"Canceling an API call using fetch and AbortController",id:"canceling-an-api-call-using-fetch-and-abortcontroller",level:3},{value:"Canceling an API call using axios and CancelToken",id:"canceling-an-api-call-using-axios-and-canceltoken",level:3},{value:"Canceling an API call using axios and AbortController",id:"canceling-an-api-call-using-axios-and-abortcontroller",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In JavaScript, you can cancel API calls made with ",(0,o.jsx)(n.code,{children:"fetch"})," and ",(0,o.jsx)(n.code,{children:"axios"})," using ",(0,o.jsx)(n.code,{children:"AbortController"})," for fetch and ",(0,o.jsx)(n.code,{children:"CancelToken"})," (or ",(0,o.jsx)(n.code,{children:"AbortController"})," in modern versions) for ",(0,o.jsx)(n.code,{children:"axios"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"canceling-an-api-call-using-fetch-and-abortcontroller",children:"Canceling an API call using fetch and AbortController"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"AbortController"})," allows you to cancel one or more ",(0,o.jsx)(n.code,{children:"fetch"})," requests. Here's how you can implement it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"const controller = new AbortController();\r\nconst signal = controller.signal;\r\n\r\nfetch('https://api.example.com/data', { signal })\r\n  .then(response => response.json())\r\n  .then(data => console.log(data))\r\n  .catch(err => {\r\n    if (err.name === 'AbortError') {\r\n      console.log('Fetch aborted');\r\n    } else {\r\n      console.error('Fetch error:', err);\r\n    }\r\n  });\r\n\r\n// Cancel the fetch request\r\ncontroller.abort();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"canceling-an-api-call-using-axios-and-canceltoken",children:"Canceling an API call using axios and CancelToken"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"const CancelToken = axios.CancelToken;\r\nconst source = CancelToken.source();\r\n\r\naxios.get('https://api.example.com/data', {\r\n  cancelToken: source.token\r\n})\r\n  .then(response => console.log(response.data))\r\n  .catch(err => {\r\n    if (axios.isCancel(err)) {\r\n      console.log('Request canceled', err.message);\r\n    } else {\r\n      console.error('Axios error:', err);\r\n    }\r\n  });\r\n\r\n// Cancel the request\r\nsource.cancel('Operation canceled by the user.');\n"})}),"\n",(0,o.jsx)(n.h3,{id:"canceling-an-api-call-using-axios-and-abortcontroller",children:"Canceling an API call using axios and AbortController"}),"\n",(0,o.jsxs)(n.p,{children:["In modern Axios versions, you can use ",(0,o.jsx)(n.code,{children:"AbortController"})," just like with ",(0,o.jsx)(n.code,{children:"fetch"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"const controller = new AbortController();\r\n\r\naxios.get('https://api.example.com/data', { signal: controller.signal })\r\n  .then(response => console.log(response.data))\r\n  .catch(err => {\r\n    if (err.name === 'AbortError') {\r\n      console.log('Axios request aborted');\r\n    } else {\r\n      console.error('Axios error:', err);\r\n    }\r\n  });\r\n\r\n// Cancel the request\r\ncontroller.abort();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var o=r(6540);const a={},c=o.createContext(a);function l(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);