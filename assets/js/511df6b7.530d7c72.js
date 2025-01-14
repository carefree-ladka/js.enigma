"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[367],{7735:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(4848),s=r(8453);const i={},o="Web Vitals & React Performance Debugging Guide",a={id:"WebDev/Web Parts/WebVitals",title:"Web Vitals & React Performance Debugging Guide",description:"Core Web Vitals Overview",source:"@site/docs/WebDev/Web Parts/WebVitals.mdx",sourceDirName:"WebDev/Web Parts",slug:"/WebDev/Web Parts/WebVitals",permalink:"/js.enigma/docs/WebDev/Web Parts/WebVitals",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/Web Parts/WebVitals.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web Security",permalink:"/js.enigma/docs/WebDev/Web Parts/WebSecurity"},next:{title:"Data Structures & Algorithms Patterns",permalink:"/js.enigma/docs/category/data-structures--algorithms-patterns"}},l={},c=[{value:"Core Web Vitals Overview",id:"core-web-vitals-overview",level:2},{value:"Largest Contentful Paint (LCP)",id:"largest-contentful-paint-lcp",level:3},{value:"First Input Delay (FID)",id:"first-input-delay-fid",level:3},{value:"Cumulative Layout Shift (CLS)",id:"cumulative-layout-shift-cls",level:3},{value:"React Performance Debugging Tools",id:"react-performance-debugging-tools",level:2},{value:"React Developer Tools",id:"react-developer-tools",level:3},{value:"Custom Performance Hooks",id:"custom-performance-hooks",level:3},{value:"Web Vitals in Next.js",id:"web-vitals-in-nextjs",level:3},{value:"Common Performance Issues &amp; Solutions",id:"common-performance-issues--solutions",level:2},{value:"Image Optimization",id:"image-optimization",level:3},{value:"Code Splitting",id:"code-splitting",level:3},{value:"Performance Monitoring",id:"performance-monitoring",level:3},{value:"Debug Checklist",id:"debug-checklist",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"web-vitals--react-performance-debugging-guide",children:"Web Vitals & React Performance Debugging Guide"})}),"\n",(0,t.jsx)(n.h2,{id:"core-web-vitals-overview",children:"Core Web Vitals Overview"}),"\n",(0,t.jsx)(n.h3,{id:"largest-contentful-paint-lcp",children:"Largest Contentful Paint (LCP)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"What"}),": Measures loading performance - time until largest content element is visible"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Target"}),": Under 2.5s"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Debugging"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { getLCP } from 'web-vitals';\r\n\r\ngetLCP(console.log); // Basic logging\r\ngetLCP((metric) => {\r\n  // Send to analytics\r\n  analytics.send({\r\n    name: 'LCP',\r\n    value: metric.value,\r\n    id: metric.id,\r\n    element: metric.element // The actual LCP element\r\n  });\r\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"first-input-delay-fid",children:"First Input Delay (FID)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"What"}),": Measures interactivity - time from user's first interaction to browser's response"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Target"}),": Under 100ms"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Debugging"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { getFID } from 'web-vitals';\r\n\r\ngetFID((metric) => {\r\n  console.log({\r\n    name: 'FID',\r\n    value: metric.value,\r\n    eventTarget: metric.eventTarget, // Element that was interacted with\r\n    eventType: metric.eventType // Type of interaction\r\n  });\r\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cumulative-layout-shift-cls",children:"Cumulative Layout Shift (CLS)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"What"}),": Measures visual stability - unexpected layout shifts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Target"}),": Under 0.1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Debugging"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { getCLS } from 'web-vitals';\r\n\r\ngetCLS((metric) => {\r\n  console.table(metric.entries.map(entry => ({\r\n    startTime: entry.startTime,\r\n    value: entry.value,\r\n    hadRecentInput: entry.hadRecentInput,\r\n    elements: entry.sources.map(source => source.node)\r\n  })));\r\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"react-performance-debugging-tools",children:"React Performance Debugging Tools"}),"\n",(0,t.jsx)(n.h3,{id:"react-developer-tools",children:"React Developer Tools"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Enable React Developer Tools in development\r\nif (process.env.NODE_ENV === 'development') {\r\n  const whyDidYouRender = require('@welldone-software/why-did-you-render');\r\n  whyDidYouRender(React, {\r\n    trackAllPureComponents: true,\r\n  });\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"custom-performance-hooks",children:"Custom Performance Hooks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { useEffect, useRef } from 'react';\r\n\r\nfunction useComponentTimer(componentName) {\r\n  const startTime = useRef();\r\n\r\n  useEffect(() => {\r\n    startTime.current = performance.now();\r\n    \r\n    return () => {\r\n      const duration = performance.now() - startTime.current;\r\n      console.log(`${componentName} mounted for ${duration}ms`);\r\n    };\r\n  }, [componentName]);\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"web-vitals-in-nextjs",children:"Web Vitals in Next.js"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// pages/_app.js\r\nimport { useEffect } from 'react';\r\nimport * as webVitals from 'web-vitals';\r\n\r\nfunction MyApp({ Component, pageProps }) {\r\n  useEffect(() => {\r\n    webVitals.getCLS(console.log);\r\n    webVitals.getFID(console.log);\r\n    webVitals.getLCP(console.log);\r\n    webVitals.getFCP(console.log);\r\n    webVitals.getTTFB(console.log);\r\n  }, []);\r\n\r\n  return <Component {...pageProps} />;\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"common-performance-issues--solutions",children:"Common Performance Issues & Solutions"}),"\n",(0,t.jsx)(n.h3,{id:"image-optimization",children:"Image Optimization"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Next.js Image component with optimization\r\nimport Image from \'next/image\';\r\n\r\nfunction OptimizedImage() {\r\n  return (\r\n    <Image\r\n      src="/large-image.jpg"\r\n      width={800}\r\n      height={600}\r\n      placeholder="blur"\r\n      blurDataURL="data:image/jpeg;base64,..."\r\n      priority={true} // For LCP images\r\n    />\r\n  );\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"code-splitting",children:"Code Splitting"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Using React.lazy for component-level code splitting\r\nconst HeavyComponent = React.lazy(() => import('./HeavyComponent'));\r\n\r\nfunction App() {\r\n  return (\r\n    <Suspense fallback={<Loading />}>\r\n      <HeavyComponent />\r\n    </Suspense>\r\n  );\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"performance-monitoring",children:"Performance Monitoring"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Using Performance Observer API\r\nconst performanceObserver = new PerformanceObserver((list) => {\r\n  list.getEntries().forEach((entry) => {\r\n    if (entry.entryType === 'largest-contentful-paint') {\r\n      console.log('LCP:', entry.startTime);\r\n      console.log('Element:', entry.element);\r\n    }\r\n  });\r\n});\r\n\r\nperformanceObserver.observe({ entryTypes: ['largest-contentful-paint'] });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"debug-checklist",children:"Debug Checklist"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install Chrome DevTools extensions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"React Developer Tools"}),"\n",(0,t.jsx)(n.li,{children:"Performance insights"}),"\n",(0,t.jsx)(n.li,{children:"Lighthouse"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable Performance Tracing:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Add to your app's entry point\r\nif (process.env.NODE_ENV !== 'production') {\r\n  const { enableReactTracking } = require('@performance/react-tracker');\r\n  enableReactTracking({\r\n    logToConsole: true,\r\n    logToNetwork: true\r\n  });\r\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Monitor Layout Shifts:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let cumulativeScore = 0;\r\n\r\nnew PerformanceObserver((entryList) => {\r\n  for (const entry of entryList.getEntries()) {\r\n    if (!entry.hadRecentInput) {\r\n      cumulativeScore += entry.value;\r\n      console.log('Layout shift:', {\r\n        value: entry.value,\r\n        cumulative: cumulativeScore,\r\n        elements: entry.sources.map(source => source.node)\r\n      });\r\n    }\r\n  }\r\n}).observe({ entryTypes: ['layout-shift'] });\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Implement Error Boundaries:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class PerformanceErrorBoundary extends React.Component {\r\n  componentDidCatch(error, errorInfo) {\r\n    console.error('Performance issue detected:', error);\r\n    console.log('Component stack:', errorInfo.componentStack);\r\n    \r\n    // Log to your analytics service\r\n    logError({\r\n      type: 'PERFORMANCE',\r\n      error,\r\n      componentStack: errorInfo.componentStack\r\n    });\r\n  }\r\n\r\n  render() {\r\n    return this.props.children;\r\n  }\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);