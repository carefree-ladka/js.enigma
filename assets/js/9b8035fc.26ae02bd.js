"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7359],{6657:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var t=r(4848),s=r(8453);const a={},c="React Hooks Polyfills",o={id:"WebDev/React/HooksPolyfills",title:"React Hooks Polyfills",description:"useState",source:"@site/docs/WebDev/React/HooksPolyfills.mdx",sourceDirName:"WebDev/React",slug:"/WebDev/React/HooksPolyfills",permalink:"/js.enigma/docs/WebDev/React/HooksPolyfills",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/React/HooksPolyfills.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Functional Component Lifecycle",permalink:"/js.enigma/docs/WebDev/React/FunctionalComponentsLifeCycle"},next:{title:"React Lifecycle Methods",permalink:"/js.enigma/docs/WebDev/React/LifeCycleMethods"}},l={},i=[{value:"useState",id:"usestate",level:2},{value:"useEffect",id:"useeffect",level:2},{value:"useMemo",id:"usememo",level:2},{value:"useCallback",id:"usecallback",level:2},{value:"React.memo",id:"reactmemo",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"react-hooks-polyfills",children:"React Hooks Polyfills"})}),"\n",(0,t.jsx)(n.h2,{id:"usestate",children:"useState"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'  const useMyState = (initialValue) => {\r\n    const hookIdTrackerRef = React.useRef(0); // Component-specific tracker\r\n    const statesRef = React.useRef([]); // Component-specific state storage\r\n\r\n    const localHookId = hookIdTrackerRef.current++; // Assign unique ID for this hook\r\n\r\n    // Initialize state lazily\r\n    if (statesRef.current[localHookId] === undefined) {\r\n      statesRef.current[localHookId] =\r\n        typeof initialValue === "function" ? initialValue() : initialValue;\r\n    }\r\n\r\n    const currentState = statesRef.current[localHookId]; // Get the current state\r\n\r\n    const [, rerender] = useReducer(() => ({}), {}); // Trigger re-render\r\n\r\n    const setValue = (newValue) => {\r\n      // If newValue is a function, compute based on the current state\r\n      if (typeof newValue === "function") {\r\n        newValue = newValue(statesRef.current[localHookId]);\r\n      }\r\n\r\n      // Check for state change\r\n      const isValueChanged = !Object.is(newValue, statesRef.current[localHookId]);\r\n      if (isValueChanged) {\r\n        statesRef.current[localHookId] = newValue; // Update state\r\n        hookIdTrackerRef.current = 0;\r\n        rerender({}); // Trigger re-render\r\n      }\r\n    };\r\n\r\n    return [currentState, setValue];\r\n  };\n'})}),"\n",(0,t.jsx)(n.h2,{id:"useeffect",children:"useEffect"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'  const myEffect = (callback, depsArray) => {\r\n    const firstRenderRef = React.useRef(true); // Tracks if it\'s the first render\r\n    const prevDepsRef = React.useRef([]); // Stores the previous dependencies\r\n    const cleanupRef = React.useRef(null); // Stores the cleanup function\r\n\r\n    // Handle first render\r\n    if (firstRenderRef.current) {\r\n      firstRenderRef.current = false;\r\n      cleanupRef.current = callback(); // Call effect\r\n      prevDepsRef.current = depsArray ?? []; // Store dependencies\r\n      return;\r\n    }\r\n\r\n    // Check if dependencies have changed\r\n    const haveDepsChanged =\r\n      !depsArray ||\r\n      depsArray.some((dep, i) => !Object.is(dep, prevDepsRef.current[i]));\r\n\r\n    // Cleanup and invoke callback if dependencies changed\r\n    if (haveDepsChanged) {\r\n      if (typeof cleanupRef.current === "function") {\r\n        cleanupRef.current(); // Call cleanup\r\n      }\r\n      cleanupRef.current = callback(); // Call effect\r\n    }\r\n\r\n    prevDepsRef.current = depsArray || []; // Update dependencies\r\n  };\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usememo",children:"useMemo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"function useMemo(factory, deps) {\r\n  const ref = React.useRef({ deps: undefined, value: undefined })\r\n\r\n  function areEqual(oldDeps, newDeps) {\r\n    if (!oldDeps || oldDeps.length !== newDeps.length) return false\r\n    return oldDeps.every((dep, i) => Object.is(dep, newDeps[i]))\r\n  }\r\n\r\n  if (!areEqual(ref.current.deps, deps)) {\r\n    ref.current.value = factory()\r\n    ref.current.deps = deps\r\n  }\r\n\r\n  return ref.current.value\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usecallback",children:"useCallback"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"import * as React from 'react'\r\n\r\nfunction useCallback(callback, deps) {\r\n  const ref = React.useRef({ deps: undefined, memoizedCallback: null });\r\n\r\n  function areDepsEqual(oldDeps, newDeps) {\r\n    if (!oldDeps || oldDeps.length !== newDeps.length) return false;\r\n    return oldDeps.every((dep, i) => Object.is(dep, newDeps[i]));\r\n  }\r\n\r\n  if (!areDepsEqual(ref.current.deps, deps)) {\r\n    ref.current.memoizedCallback = callback;\r\n    ref.current.deps = deps;\r\n  }\r\n\r\n  return ref.current.memoizedCallback;\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reactmemo",children:"React.memo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'function memo(Component, areEqual) {\r\n  class MemoizedComponent extends React.Component {\r\n    static displayName = `Memo(${\r\n      Component.displayName || Component.name || "Component"\r\n    })`;\r\n\r\n    shouldComponentUpdate(nextProps) {\r\n      if (areEqual) {\r\n        return !areEqual(this.props, nextProps);\r\n      }\r\n\r\n      // When no areEqual is provided, do a shallow props comparison\r\n      const prevProps = this.props;\r\n      if (Object.keys(prevProps).length !== Object.keys(nextProps).length) {\r\n        return true;\r\n      }\r\n      for (const key in nextProps) {\r\n        if (prevProps[key] !== nextProps[key]) {\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    }\r\n\r\n    render() {\r\n      return React.createElement(Component, this.props);\r\n    }\r\n  }\r\n\r\n  return Object.assign(MemoizedComponent, Component);\r\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);