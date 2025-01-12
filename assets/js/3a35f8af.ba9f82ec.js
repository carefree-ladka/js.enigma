"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9332],{692:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=i(4848),r=i(8453);const l={title:"RADIO Framework Cheatsheet"},t=void 0,d={id:"Frontend System Design/RADIO",title:"RADIO Framework Cheatsheet",description:"Overview",source:"@site/docs/Frontend System Design/RADIO.mdx",sourceDirName:"Frontend System Design",slug:"/Frontend System Design/RADIO",permalink:"/js.enigma/docs/Frontend System Design/RADIO",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/Frontend System Design/RADIO.mdx",tags:[],version:"current",frontMatter:{title:"RADIO Framework Cheatsheet"},sidebar:"tutorialSidebar",previous:{title:"Functional and Non-Functional Areas",permalink:"/js.enigma/docs/Frontend System Design/GenericRequirements"},next:{title:"Company Specific",permalink:"/js.enigma/docs/category/company-specific"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"R - Requirements Exploration (15%)",id:"r---requirements-exploration-15",level:2},{value:"Key Questions to Ask",id:"key-questions-to-ask",level:3},{value:"Device Support Matrix",id:"device-support-matrix",level:3},{value:"A - Architecture Design (20%)",id:"a---architecture-design-20",level:2},{value:"Key Components to Consider",id:"key-components-to-consider",level:3},{value:"Rendering Strategies",id:"rendering-strategies",level:3},{value:"Theming Architecture",id:"theming-architecture",level:3},{value:"Design Principles",id:"design-principles",level:3},{value:"D - Data Model Definition (10%)",id:"d---data-model-definition-10",level:2},{value:"Data Types",id:"data-types",level:3},{value:"Data Model Template",id:"data-model-template",level:3},{value:"I - Interface Definition (15%)",id:"i---interface-definition-15",level:2},{value:"Server-Client APIs",id:"server-client-apis",level:3},{value:"Client-Client APIs",id:"client-client-apis",level:3},{value:"Responsive Component Props",id:"responsive-component-props",level:3},{value:"O - Optimizations &amp; Deep Dive (40%)",id:"o---optimizations--deep-dive-40",level:2},{value:"Key Areas",id:"key-areas",level:3},{value:"Rendering Optimization Techniques",id:"rendering-optimization-techniques",level:3},{value:"Deep Dive Strategy",id:"deep-dive-strategy",level:3},{value:"Interview Tips",id:"interview-tips",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"RADIO is a structured approach to frontend system design interviews:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"R"}),"equirements exploration (15% of time)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"A"}),"rchitecture design (20% of time)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"D"}),"ata model definition (10% of time)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"I"}),"nterface specification (15% of time)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"O"}),"ptimizations and deep dive (40% of time)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"r---requirements-exploration-15",children:"R - Requirements Exploration (15%)"}),"\n",(0,s.jsx)(n.h3,{id:"key-questions-to-ask",children:"Key Questions to Ask"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Core Use Cases"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Which specific features should we focus on?"}),"\n",(0,s.jsx)(n.li,{children:"What are the primary user flows?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Requirements Classification"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Functional requirements (must-haves)"}),"\n",(0,s.jsx)(n.li,{children:"Non-functional requirements (nice-to-haves)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Technical Constraints"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Supported devices/platforms"}),"\n",(0,s.jsx)(n.li,{children:"Offline support needs"}),"\n",(0,s.jsx)(n.li,{children:"Performance requirements"}),"\n",(0,s.jsx)(n.li,{children:"Target users"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Design & Styling Requirements"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Theme support (light/dark mode)"}),"\n",(0,s.jsx)(n.li,{children:"Brand guidelines"}),"\n",(0,s.jsx)(n.li,{children:"Design system requirements"}),"\n",(0,s.jsx)(n.li,{children:"Responsive design needs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"device-support-matrix",children:"Device Support Matrix"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Breakpoints to Consider:\r\n- Mobile: < 768px\r\n- Tablet: 768px - 1024px\r\n- Desktop: > 1024px\r\n- Large Desktop: > 1440px\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.strong,{children:"Pro Tip"}),": Write down agreed requirements for reference throughout the interview"]}),"\n",(0,s.jsx)(n.h2,{id:"a---architecture-design-20",children:"A - Architecture Design (20%)"}),"\n",(0,s.jsx)(n.h3,{id:"key-components-to-consider",children:"Key Components to Consider"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server"})," (treat as black box)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"View"})," (user interface)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Controller"})," (user interaction handling)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model/Client Store"})," (data management)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rendering-strategies",children:"Rendering Strategies"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Client-Side Rendering (CSR)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Full JavaScript bundle"}),"\n",(0,s.jsx)(n.li,{children:"Good for dynamic content"}),"\n",(0,s.jsx)(n.li,{children:"SEO challenges"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Server-Side Rendering (SSR)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Better initial load"}),"\n",(0,s.jsx)(n.li,{children:"Good for SEO"}),"\n",(0,s.jsx)(n.li,{children:"Higher server load"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Static Site Generation (SSG)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Best performance"}),"\n",(0,s.jsx)(n.li,{children:"Limited dynamic content"}),"\n",(0,s.jsx)(n.li,{children:"Good for content-heavy sites"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Incremental Static Regeneration (ISR)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Hybrid approach"}),"\n",(0,s.jsx)(n.li,{children:"Balance of dynamic and static"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"theming-architecture",children:"Theming Architecture"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Theme Implementation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CSS Variables"}),"\n",(0,s.jsx)(n.li,{children:"Styled-components"}),"\n",(0,s.jsx)(n.li,{children:"CSS-in-JS"}),"\n",(0,s.jsx)(n.li,{children:"CSS Modules"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Theme Structure"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Colors"}),"\n",(0,s.jsx)(n.li,{children:"Typography"}),"\n",(0,s.jsx)(n.li,{children:"Spacing"}),"\n",(0,s.jsx)(n.li,{children:"Breakpoints"}),"\n",(0,s.jsx)(n.li,{children:"Component-specific themes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"design-principles",children:"Design Principles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Separation of concerns"}),"\n",(0,s.jsx)(n.li,{children:"Component modularity"}),"\n",(0,s.jsx)(n.li,{children:"Computation placement (client vs server)"}),"\n",(0,s.jsx)(n.li,{children:"Responsive design patterns"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.strong,{children:"Pro Tip"}),": Draw diagrams using tools like diagrams.net or Excalidraw"]}),"\n",(0,s.jsx)(n.h2,{id:"d---data-model-definition-10",children:"D - Data Model Definition (10%)"}),"\n",(0,s.jsx)(n.h3,{id:"data-types",children:"Data Types"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Server-originated Data"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Database-sourced"}),"\n",(0,s.jsx)(n.li,{children:"Shared across users/devices"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Client-only Data"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Persisted state (form inputs)"}),"\n",(0,s.jsx)(n.li,{children:"Ephemeral state (UI state)"}),"\n",(0,s.jsx)(n.li,{children:"Theme preferences"}),"\n",(0,s.jsx)(n.li,{children:"Device/viewport information"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"data-model-template",children:"Data Model Template"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Entity:\r\n- Fields\r\n- Data source\r\n- Owner component\r\n- Relationships\r\n- Responsive variations\n"})}),"\n",(0,s.jsx)(n.h2,{id:"i---interface-definition-15",children:"I - Interface Definition (15%)"}),"\n",(0,s.jsx)(n.h3,{id:"server-client-apis",children:"Server-Client APIs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HTTP method"}),"\n",(0,s.jsx)(n.li,{children:"Endpoint path"}),"\n",(0,s.jsx)(n.li,{children:"Parameters"}),"\n",(0,s.jsx)(n.li,{children:"Response format"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"client-client-apis",children:"Client-Client APIs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function signatures"}),"\n",(0,s.jsx)(n.li,{children:"Event listeners"}),"\n",(0,s.jsx)(n.li,{children:"Props (for components)"}),"\n",(0,s.jsx)(n.li,{children:"Return values"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"responsive-component-props",children:"Responsive Component Props"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-TypeScript",children:"interface ResponsiveProps {\r\n  mobile?: React.ReactNode;\r\n  tablet?: React.ReactNode;\r\n  desktop?: React.ReactNode;\r\n  breakpoints?: {\r\n    mobile: number;\r\n    tablet: number;\r\n    desktop: number;\r\n  };\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"o---optimizations--deep-dive-40",children:"O - Optimizations & Deep Dive (40%)"}),"\n",(0,s.jsx)(n.h3,{id:"key-areas",children:"Key Areas"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Performance"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Loading optimization"}),"\n",(0,s.jsx)(n.li,{children:"Rendering optimization"}),"\n",(0,s.jsx)(n.li,{children:"Caching strategies"}),"\n",(0,s.jsx)(n.li,{children:"Code splitting strategies"}),"\n",(0,s.jsx)(n.li,{children:"Asset optimization"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Responsive Design Optimizations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Responsive images"}),"\n",(0,s.jsx)(n.li,{children:"Container queries"}),"\n",(0,s.jsx)(n.li,{children:"CSS optimization"}),"\n",(0,s.jsx)(n.li,{children:"Mobile-first approach"}),"\n",(0,s.jsx)(n.li,{children:"Touch interactions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Theme Implementation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Runtime theme switching"}),"\n",(0,s.jsx)(n.li,{children:"Prefers-color-scheme"}),"\n",(0,s.jsx)(n.li,{children:"CSS Variables vs CSS-in-JS"}),"\n",(0,s.jsx)(n.li,{children:"Performance considerations"}),"\n",(0,s.jsx)(n.li,{children:"Storage strategy"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"User Experience"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Error handling"}),"\n",(0,s.jsx)(n.li,{children:"Loading states"}),"\n",(0,s.jsx)(n.li,{children:"Animations/transitions"}),"\n",(0,s.jsx)(n.li,{children:"Responsive behaviors"}),"\n",(0,s.jsx)(n.li,{children:"Touch gestures"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Technical Considerations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Network handling"}),"\n",(0,s.jsx)(n.li,{children:"Accessibility (a11y)"}),"\n",(0,s.jsx)(n.li,{children:"Internationalization (i18n)"}),"\n",(0,s.jsx)(n.li,{children:"Security"}),"\n",(0,s.jsx)(n.li,{children:"Multi-device support"}),"\n",(0,s.jsx)(n.li,{children:"Progressive enhancement"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rendering-optimization-techniques",children:"Rendering Optimization Techniques"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Component Level"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Lazy loading"}),"\n",(0,s.jsx)(n.li,{children:"Virtualization"}),"\n",(0,s.jsx)(n.li,{children:"Memoization"}),"\n",(0,s.jsx)(n.li,{children:"Code splitting"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Style Level"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Critical CSS"}),"\n",(0,s.jsx)(n.li,{children:"Atomic CSS"}),"\n",(0,s.jsx)(n.li,{children:"CSS containment"}),"\n",(0,s.jsx)(n.li,{children:"Container queries"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Asset Level"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Image optimization"}),"\n",(0,s.jsx)(n.li,{children:"Font loading"}),"\n",(0,s.jsx)(n.li,{children:"Icon systems"}),"\n",(0,s.jsx)(n.li,{children:"Responsive images"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"deep-dive-strategy",children:"Deep Dive Strategy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Focus on product-critical areas"}),"\n",(0,s.jsx)(n.li,{children:"Highlight your technical strengths"}),"\n",(0,s.jsx)(n.li,{children:"Address unique challenges"}),"\n",(0,s.jsx)(n.li,{children:"Consider device-specific optimizations"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"interview-tips",children:"Interview Tips"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Stay organized and structured"}),"\n",(0,s.jsx)(n.li,{children:"Manage time according to RADIO percentages"}),"\n",(0,s.jsx)(n.li,{children:"Draw clear diagrams"}),"\n",(0,s.jsx)(n.li,{children:"Write down requirements"}),"\n",(0,s.jsx)(n.li,{children:"Focus on frontend aspects"}),"\n",(0,s.jsx)(n.li,{children:"Be ready to adapt based on interviewer feedback"}),"\n",(0,s.jsx)(n.li,{children:"Consider responsive design from the start"}),"\n",(0,s.jsx)(n.li,{children:"Address theme implementation early"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Remember: This framework is flexible - adapt it based on the specific question and interviewer's interests."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);