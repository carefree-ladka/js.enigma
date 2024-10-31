"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7504],{1795:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=n(4848),o=n(8453);const a={title:"Error Boundary"},s=void 0,i={id:"tutorial-extras/ReactQuestions/ErrorBoundary",title:"Error Boundary",description:"In React, an ErrorBoundary is a component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire app. Error boundaries are typically used to handle errors that occur during rendering, in lifecycle methods, or in constructors of the whole component tree.",source:"@site/docs/tutorial-extras/ReactQuestions/ErrorBoundary.mdx",sourceDirName:"tutorial-extras/ReactQuestions",slug:"/tutorial-extras/ReactQuestions/ErrorBoundary",permalink:"/js.enigma/docs/tutorial-extras/ReactQuestions/ErrorBoundary",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/ReactQuestions/ErrorBoundary.mdx",tags:[],version:"current",frontMatter:{title:"Error Boundary"},sidebar:"tutorialSidebar",previous:{title:"Task Queue",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/TaskQueue"},next:{title:"React Lifecycle Methods",permalink:"/js.enigma/docs/tutorial-extras/ReactQuestions/LifeCycleMethods"}},c={},d=[{value:"Creating an Error Boundary",id:"creating-an-error-boundary",level:3},{value:"Using the Error Boundary",id:"using-the-error-boundary",level:3}];function u(r){const e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"In React, an ErrorBoundary is a component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire app. Error boundaries are typically used to handle errors that occur during rendering, in lifecycle methods, or in constructors of the whole component tree."}),"\n",(0,t.jsx)(e.h3,{id:"creating-an-error-boundary",children:"Creating an Error Boundary"}),"\n",(0,t.jsxs)(e.p,{children:["To create an error boundary, you need to create a class component that implements the ",(0,t.jsx)(e.code,{children:"componentDidCatch"})," lifecycle method and optionally a static ",(0,t.jsx)(e.code,{children:"getDerivedStateFromError"})," method."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JavaScript",children:"import React, { Component } from 'react';\r\n\r\nclass ErrorBoundary extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = { hasError: false };\r\n  }\r\n\r\n  static getDerivedStateFromError() {\r\n    return { hasError: true };\r\n  }\r\n\r\n  componentDidCatch(error, errorInfo) {\r\n    console.error('Error caught by Error Boundary:', error);\r\n    console.error('Error info:', errorInfo);\r\n  }\r\n\r\n  render() {\r\n    if (this.state.hasError) {\r\n      return <h1>Something went wrong.</h1>;\r\n    }\r\n\r\n    return this.props.children;\r\n  }\r\n}\r\n\r\nexport default ErrorBoundary;\n"})}),"\n",(0,t.jsx)(e.h3,{id:"using-the-error-boundary",children:"Using the Error Boundary"}),"\n",(0,t.jsx)(e.p,{children:"Wrap the ErrorBoundary component around other components where you want to catch errors:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JavaScript",children:"import React from 'react';\r\nimport ErrorBoundary from './ErrorBoundary'; // Assuming ErrorBoundary is in the same directory\r\n\r\nconst ProblematicComponent = () => {\r\n  throw new Error('Oops! Something went wrong.');\r\n  return <div>Will not render</div>;\r\n};\r\n\r\nconst App = () => (\r\n  <ErrorBoundary>\r\n    <ProblematicComponent />\r\n  </ErrorBoundary>\r\n);\r\n\r\nexport default App;\n"})})]})}function l(r={}){const{wrapper:e}={...(0,o.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(u,{...r})}):u(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var t=n(6540);const o={},a=t.createContext(o);function s(r){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:s(r.components),t.createElement(a.Provider,{value:e},r.children)}}}]);