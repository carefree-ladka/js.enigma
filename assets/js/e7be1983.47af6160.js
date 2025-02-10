"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6681],{4884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(4848),s=t(8453);const r={title:"Shadow DOM"},a=void 0,i={id:"WebDev/HTML5/ShadowDOM",title:"Shadow DOM",description:"Understanding Shadow DOM",source:"@site/docs/WebDev/HTML5/ShadowDOM.mdx",sourceDirName:"WebDev/HTML5",slug:"/WebDev/HTML5/ShadowDOM",permalink:"/js.enigma/docs/WebDev/HTML5/ShadowDOM",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/HTML5/ShadowDOM.mdx",tags:[],version:"current",frontMatter:{title:"Shadow DOM"},sidebar:"tutorialSidebar",previous:{title:"Semantic HTML",permalink:"/js.enigma/docs/WebDev/HTML5/SemnticElements"},next:{title:"What Happens When You Type a URL in the Browser?",permalink:"/js.enigma/docs/WebDev/HTML5/WhatHappens"}},d={},c=[{value:"Understanding Shadow DOM",id:"understanding-shadow-dom",level:2},{value:"Key Concepts",id:"key-concepts",level:3},{value:"Basic Usage Example",id:"basic-usage-example",level:3},{value:"Use the Web Component in a React Application",id:"use-the-web-component-in-a-react-application",level:3},{value:"Using Shadow DOM Directly in React Components",id:"using-shadow-dom-directly-in-react-components",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"understanding-shadow-dom",children:"Understanding Shadow DOM"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Shadow DOM"})," is a part of the ",(0,o.jsx)(n.strong,{children:"Web Components"})," standard in web development, allowing for ",(0,o.jsx)(n.strong,{children:"encapsulation"})," of the internal structure of an element. It enables developers to create isolated DOM trees with scoped styles and behavior, meaning the styles and scripts inside the shadow DOM don\u2019t affect the outside DOM, and vice versa."]}),"\n",(0,o.jsx)(n.h3,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Encapsulation"}),":\r\nThe Shadow DOM ensures that the internal structure (HTML, CSS, and JavaScript) of a component doesn't interfere with the rest of the document. This is important for preventing style clashes and ensuring consistent behavior across different environments."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Shadow Root"}),":\r\nThe shadow DOM starts with a shadow root, which is the root node of the isolated DOM tree. A shadow root can be attached to an element using JavaScript."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Open vs Closed Shadow DOM"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Open Shadow DOM"}),": Allows access to the shadow DOM through JavaScript by using ",(0,o.jsx)(n.code,{children:"element.shadowRoot"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Closed Shadow DOM"}),": Does not allow access to the shadow DOM from outside scripts. You cannot access it through ",(0,o.jsx)(n.code,{children:"element.shadowRoot"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Light DOM vs Shadow DOM"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Light DOM"})," refers to the regular DOM of the document."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Shadow DOM"})," is the encapsulated DOM attached to an element, hidden from the light DOM."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Style Isolation"}),":\r\nStyles defined within the shadow DOM are scoped only to elements inside the shadow tree. They won\u2019t bleed into the light DOM, and external styles won\u2019t affect the shadow DOM elements unless explicitly defined."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"basic-usage-example",children:"Basic Usage Example"}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s how to use the shadow DOM in React:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Javascript",children:"// src/MyComponent.js\r\n\r\nclass MyComponent extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    \r\n    // Attach a shadow root to this element\r\n    const shadow = this.attachShadow({ mode: 'open' });\r\n\r\n    // Add some content and style to the shadow DOM\r\n    shadow.innerHTML = `\r\n      <style>\r\n        p {\r\n          color: blue;\r\n        }\r\n      </style>\r\n      <p>Hello from the shadow DOM!</p>\r\n    `;\r\n  }\r\n}\r\n\r\n// Define the custom element\r\ncustomElements.define('my-component', MyComponent);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"use-the-web-component-in-a-react-application",children:"Use the Web Component in a React Application"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"// src/App.js\r\nimport React, { useEffect } from 'react';\r\nimport './MyComponent'; // Import the Web Component\r\n\r\nfunction App() {\r\n  useEffect(() => {\r\n    // Ensure the Web Component is defined before using it\r\n    if (!customElements.get('my-component')) {\r\n      import('./MyComponent');\r\n    }\r\n  }, []);\r\n\r\n  return (\r\n    <div className=\"App\">\r\n      <h1>Hello React</h1>\r\n      {/* Use the custom element */}\r\n      <my-component></my-component>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-shadow-dom-directly-in-react-components",children:"Using Shadow DOM Directly in React Components"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:'import * as React from "react";\r\n\r\nfunction ShadowDOMComponent() {\r\n  const containerRef = React.useRef(null);\r\n\r\n  React.useEffect(() => {\r\n    const shadowElement = containerRef.current;\r\n\r\n    if (!shadowElement.shadowRoot) {\r\n      // Attach a shadow root\r\n      const shadowRoot = shadowElement.attachShadow({ mode: "open" });\r\n\r\n      // Add content and style to the shadow root\r\n      shadowRoot.innerHTML = `\r\n        <style>\r\n          p {\r\n            color: green;\r\n          }\r\n        </style>\r\n        <p>Hello from the shadow DOM inside React!!</p>\r\n      `;\r\n    }\r\n  }, []);\r\n\r\n  return (\r\n    <>\r\n      <div ref={containerRef}></div>\r\n      <p>Hello</p>\r\n    </>\r\n  );\r\n}\r\n\r\nexport default ShadowDOMComponent;\r\n\r\n/* \r\nHello from the shadow DOM inside React!!\r\n\r\nHello\r\n*/\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);