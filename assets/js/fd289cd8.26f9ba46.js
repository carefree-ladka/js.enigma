"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3555],{1172:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=l(4848),t=l(8453);const r={title:"DOM API"},c=void 0,i={id:"tutorial-extras/HTMLDOM/DOMSelectors",title:"DOM API",description:"1. Tag Name Selector:",source:"@site/docs/tutorial-extras/HTMLDOM/DOMSelectors.mdx",sourceDirName:"tutorial-extras/HTMLDOM",slug:"/tutorial-extras/HTMLDOM/DOMSelectors",permalink:"/js.enigma/docs/tutorial-extras/HTMLDOM/DOMSelectors",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/HTMLDOM/DOMSelectors.mdx",tags:[],version:"current",frontMatter:{title:"DOM API"},sidebar:"tutorialSidebar",previous:{title:"DOM Methods",permalink:"/js.enigma/docs/tutorial-extras/HTMLDOM/DOMManipulation"},next:{title:"Closures",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/Closure"}},o={},d=[];function a(e){const n={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tag Name Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Selects elements by their tag name (e.g., "div", "p", "h1")'}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.getElementsByTagName('div')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ID Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects an element with a specific ID"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.getElementById('my-element')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Class Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects elements with a specific class name"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.getElementsByClassName('my-class')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Universal Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects all elements on the page"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.querySelectorAll('*')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Descendant Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects elements that are descendants of a specified parent element"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.querySelectorAll('div p')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Child Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects elements that are direct children of a specified parent element"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.querySelectorAll('ul > li')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Adjacent Sibling Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects elements that are adjacent siblings of a specified element"}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"document.querySelectorAll('h1 + p')"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attribute Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects elements based on their attribute values"}),"\n",(0,s.jsxs)(n.li,{children:["Examples:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"document.querySelectorAll('a[href]')"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"document.querySelectorAll('input[type=\"text\"]')"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Pseudo-class Selector"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Selects elements based on their state or position"}),"\n",(0,s.jsxs)(n.li,{children:["Examples:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"document.querySelectorAll('a:hover')"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"document.querySelectorAll('li:nth-child(even)')"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These selectors can be combined and nested to create more complex selection patterns. The ",(0,s.jsx)(n.code,{children:"querySelector()"})," and ",(0,s.jsx)(n.code,{children:"querySelectorAll()"})," methods are the most flexible and powerful ways to select DOM elements."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The different DOM selectors return various data types, and in some cases, you may need to convert the result to an array for easier manipulation. Here's a breakdown:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"document.getElementsByTagName()"}),", ",(0,s.jsx)(n.code,{children:"document.getElementsByClassName()"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns an HTMLCollection, which is a live, dynamic collection of elements."}),"\n",(0,s.jsxs)(n.li,{children:["To convert to an array, you can use ",(0,s.jsx)(n.code,{children:"Array.from()"})," or the spread operator:\r\n",(0,s.jsx)(n.code,{children:"const myElements = Array.from(document.getElementsByTagName('div'))"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"document.getElementById()"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a single Element object, not a collection."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"document.querySelectorAll()"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a NodeList, which is a static, non-live collection of nodes."}),"\n",(0,s.jsxs)(n.li,{children:["NodeLists can be converted to an array using ",(0,s.jsx)(n.code,{children:"Array.from()"})," or the spread operator: ",(0,s.jsx)(n.code,{children:"const myElements = [...document.querySelectorAll('div')]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"document.querySelector()"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Returns a single Element object, not a collection."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The key differences are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HTMLCollections are live, meaning they update automatically when the DOM changes. NodeLists are static."}),"\n",(0,s.jsx)(n.li,{children:"HTMLCollections cannot be directly converted to an array, but NodeLists can."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Typically, you'll want to convert the result to an array if you need to perform array methods like ",(0,s.jsx)(n.code,{children:"map()"}),", ",(0,s.jsx)(n.code,{children:"filter()"}),", or ",(0,s.jsx)(n.code,{children:"forEach()"})," on the elements. This is especially important when working with HTMLCollections, as they can change unexpectedly during iteration."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>i});var s=l(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);