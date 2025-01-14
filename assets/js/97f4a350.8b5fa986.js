"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[694],{7316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var r=n(4848),o=n(8453);const c={title:"React TypeScript Context"},a=void 0,p={id:"WebDev/React/ReactTypeScriptContext",title:"React TypeScript Context",description:"",source:"@site/docs/WebDev/React/ReactTypeScriptContext.mdx",sourceDirName:"WebDev/React",slug:"/WebDev/React/ReactTypeScriptContext",permalink:"/js.enigma/docs/WebDev/React/ReactTypeScriptContext",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/React/ReactTypeScriptContext.mdx",tags:[],version:"current",frontMatter:{title:"React TypeScript Context"},sidebar:"tutorialSidebar",previous:{title:"React TypeScript Cheatsheet",permalink:"/js.enigma/docs/WebDev/React/ReactTypeScript"},next:{title:"Redux Toolkit Complete Cheatsheet",permalink:"/js.enigma/docs/WebDev/React/ReduxToolkit"}},i={},s=[];function d(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JavaScript",children:'import * as React from "react";\r\n\r\ninterface Todo {\r\n  id: number;\r\n  text: string;\r\n}\r\n\r\ninterface AppState {\r\n  todos: Todo[];\r\n}\r\n\r\ntype SetAppState = React.Dispatch<React.SetStateAction<AppState>>;\r\n\r\nconst AppContext = React.createContext<\r\n  | {\r\n      appState: AppState;\r\n      setAppState: SetAppState;\r\n    }\r\n  | undefined\r\n>(undefined);\r\n\r\ninterface AppProviderProps {\r\n  children: React.ReactNode;\r\n}\r\n\r\nexport default function AppProvider({ children }: AppProviderProps) {\r\n  const [appState, setAppState] = React.useState<AppState>({\r\n    todos: [{ id: 1, text: "Walk the dog" }],\r\n  });\r\n\r\n  const value = React.useMemo(() => ({ appState, setAppState }), [appState]);\r\n\r\n  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;\r\n}\r\n\r\nexport function useAppContext() {\r\n  const context = React.useContext(AppContext);\r\n  if (context === undefined) {\r\n    throw new Error("useAppContext must be used within an AppProvider");\r\n  }\r\n  return context;\r\n}\n'})})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>p});var r=n(6540);const o={},c=r.createContext(o);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);