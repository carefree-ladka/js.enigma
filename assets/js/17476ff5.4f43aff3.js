"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5051],{9703:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=i(4848),s=i(8453);const r={title:"React Interview Questions"},a=void 0,l={id:"WebDev/Core JavaScript/React",title:"React Interview Questions",description:"1. What is React and how it is different from Angular and Vue?",source:"@site/docs/WebDev/Core JavaScript/React.mdx",sourceDirName:"WebDev/Core JavaScript",slug:"/WebDev/Core JavaScript/React",permalink:"/js.enigma/docs/WebDev/Core JavaScript/React",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/Core JavaScript/React.mdx",tags:[],version:"current",frontMatter:{title:"React Interview Questions"},sidebar:"tutorialSidebar",previous:{title:"JavaScript Interview Questions",permalink:"/js.enigma/docs/WebDev/Core JavaScript/JS"},next:{title:"React Asset Optimization Guide",permalink:"/js.enigma/docs/WebDev/Build/AssetOptimization"}},c={},o=[];function d(e){const n={a:"a",li:"li",ol:"ol",...(0,s.R)(),...e.components};return(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"What is React and how it is different from Angular and Vue?"}),"\n",(0,t.jsx)(n.li,{children:"What is virtual DOM and what how it differs from the real DOM ?"}),"\n",(0,t.jsx)(n.li,{children:"What is JSX? Does the browser understand it ? (Hint: The browser doesn\u2019t\r\nunderstand the JSX. The browser simply makes use of createElement method\r\nin React to convert the JSX into plain JavaScript object and that\u2019 how the JS\r\nEngine understands and compile it)"}),"\n",(0,t.jsxs)(n.li,{children:["Explain the react lifecycle ad its order (",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/react-",children:"https://reactjs.org/docs/react-"}),"\r\ncomponent.html#the-component-lifecycle)"]}),"\n",(0,t.jsx)(n.li,{children:"Re-rendering in React how we can stop it. Hint (learn React.PureComponent,\r\nShouldComponentUpdate method and React.memo)"}),"\n",(0,t.jsx)(n.li,{children:"Higher Order Components in React with example"}),"\n",(0,t.jsx)(n.li,{children:"Render props"}),"\n",(0,t.jsx)(n.li,{children:"State and props with example"}),"\n",(0,t.jsx)(n.li,{children:"Explain setState method in class components and how it updates the state?\r\n(Hint: setState takes a function which accepts the previousState and update\r\nthe current state)"}),"\n",(0,t.jsx)(n.li,{children:"Data binding in React"}),"\n",(0,t.jsx)(n.li,{children:"What is the use of keys in React?"}),"\n",(0,t.jsx)(n.li,{children:"Synthetic events"}),"\n",(0,t.jsx)(n.li,{children:"What are hooks in React?"}),"\n",(0,t.jsxs)(n.li,{children:["Fetch data from an API (",(0,t.jsx)(n.a,{href:"https://jsonplaceholder.typicode.com/",children:"https://jsonplaceholder.typicode.com/"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"React. Fragment and <> </> let you render multiple components/elements in\r\nReact"}),"\n",(0,t.jsx)(n.li,{children:"How can you pass data from child to parent component and vice versa?"}),"\n",(0,t.jsx)(n.li,{children:"useMemo vs useCallback with example"}),"\n",(0,t.jsx)(n.li,{children:"useState vs useReducer"}),"\n",(0,t.jsx)(n.li,{children:"Context API vs Redux. When to use either one"}),"\n",(0,t.jsx)(n.li,{children:"Controlled vs uncontrolled forms in React"}),"\n",(0,t.jsx)(n.li,{children:"Explain different types of hooks eg) useState, useEffect, useMemo,\r\nuseCallback, useReducer, useRef etc."}),"\n",(0,t.jsx)(n.li,{children:"What is useEffect and how it works?"}),"\n",(0,t.jsx)(n.li,{children:"Context API"}),"\n",(0,t.jsx)(n.li,{children:"What is Redux?"}),"\n",(0,t.jsx)(n.li,{children:"Explain the Redux flow"}),"\n",(0,t.jsx)(n.li,{children:"Explain the terms in Redux like action types, reducer, store and middlewares"}),"\n",(0,t.jsx)(n.li,{children:"What is Redux Thunk and what is its use?"}),"\n",(0,t.jsx)(n.li,{children:"Can we directly update the state in Redux? (Hint: we can\u2019 t, we always make\r\na copy of the state and update it)"}),"\n",(0,t.jsx)(n.li,{children:"useSelector and useDispatch (Redux hooks)"}),"\n",(0,t.jsx)(n.li,{children:"What is tree Shaking?"}),"\n",(0,t.jsx)(n.li,{children:"What is React.lazy and React.suspense?"}),"\n",(0,t.jsx)(n.li,{children:"What can we do to optimize a React application? (Hint: we can use\r\noptimization techniques such as React.PureComponents, useMemo,\r\nuseCallback, React.Memo, tree shaking, React.lazy and React.suspense)"}),"\n",(0,t.jsx)(n.li,{children:"Can we use setState inside of render() method? (Hint: we can\u2019t , it\u2019ll lead the\r\napplication to infinite loop)"}),"\n",(0,t.jsxs)(n.li,{children:["Accessibility in React (",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/accessibility.html#why-",children:"https://reactjs.org/docs/accessibility.html#why-"}),"\r\naccessibility)"]}),"\n",(0,t.jsxs)(n.li,{children:["Web performance in React (",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/optimizing-",children:"https://reactjs.org/docs/optimizing-"}),"\r\nperformance.html#gatsby-focus-wrapper)"]}),"\n",(0,t.jsx)(n.li,{children:"Optimization in React"}),"\n",(0,t.jsx)(n.li,{children:"setTimeout & setInterval working in useEffect"}),"\n",(0,t.jsx)(n.li,{children:"Redux vs Context"}),"\n",(0,t.jsx)(n.li,{children:"Redux Saga vs Redux Thunk"}),"\n",(0,t.jsx)(n.li,{children:"Custom Hook"}),"\n",(0,t.jsxs)(n.li,{children:["React Coding /Machine Round:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Todo List"}),"\n",(0,t.jsx)(n.li,{children:"Calendar"}),"\n",(0,t.jsx)(n.li,{children:"Accordion"}),"\n",(0,t.jsx)(n.li,{children:"Infinite Scrolling"}),"\n",(0,t.jsx)(n.li,{children:"Pagination"}),"\n",(0,t.jsx)(n.li,{children:"Tabs"}),"\n",(0,t.jsx)(n.li,{children:"Calendar"}),"\n",(0,t.jsx)(n.li,{children:"Star Rating"}),"\n",(0,t.jsx)(n.li,{children:"Tic Tac Toe"}),"\n",(0,t.jsx)(n.li,{children:"Progress Bar"}),"\n",(0,t.jsx)(n.li,{children:"Traffic Lights"}),"\n",(0,t.jsx)(n.li,{children:"Typeahead/autocomplete"}),"\n",(0,t.jsx)(n.li,{children:"Stopwatch"}),"\n",(0,t.jsx)(n.li,{children:"Countdown timer"}),"\n",(0,t.jsx)(n.li,{children:"Dynamic Form"}),"\n",(0,t.jsx)(n.li,{children:"Counter App"}),"\n",(0,t.jsx)(n.li,{children:"Transfer List"}),"\n",(0,t.jsx)(n.li,{children:"Menu Explorer (VSCode type) Nested structure"}),"\n",(0,t.jsx)(n.li,{children:"UseClickedOutSide custom hook"}),"\n",(0,t.jsx)(n.li,{children:"useFetchData custom hook"}),"\n",(0,t.jsx)(n.li,{children:"Image Carousal"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Rendering Patterns:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Client-side Rendering"}),"\n",(0,t.jsx)(n.li,{children:"Incremental Static Generation"}),"\n",(0,t.jsx)(n.li,{children:"Progressive Hydration"}),"\n",(0,t.jsx)(n.li,{children:"Selective Hydration"}),"\n",(0,t.jsx)(n.li,{children:"React Server Components"}),"\n",(0,t.jsx)(n.li,{children:"Server-side Rendering"}),"\n",(0,t.jsx)(n.li,{children:"Static Rendering"}),"\n",(0,t.jsx)(n.li,{children:"Streaming Server-Side Rendering"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Design Patterns","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Compound Pattern"}),"\n",(0,t.jsx)(n.li,{children:"Hooks Pattern"}),"\n",(0,t.jsx)(n.li,{children:"Container/Presentational"}),"\n",(0,t.jsx)(n.li,{children:"Render Props"}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);