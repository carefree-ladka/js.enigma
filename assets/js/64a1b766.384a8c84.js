"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4330],{9945:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=s(4848),r=s(8453);const t={title:"React Bundle Optimization Guide",description:"Learn how to optimize your React bundle for better performance."},l="\ud83d\ude80 React Bundle Optimization Guide",d={id:"WebDev/Build/BundleOptimization",title:"React Bundle Optimization Guide",description:"Learn how to optimize your React bundle for better performance.",source:"@site/docs/WebDev/Build/BundleOptimization.mdx",sourceDirName:"WebDev/Build",slug:"/WebDev/Build/BundleOptimization",permalink:"/js.enigma/docs/WebDev/Build/BundleOptimization",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/Build/BundleOptimization.mdx",tags:[],version:"current",frontMatter:{title:"React Bundle Optimization Guide",description:"Learn how to optimize your React bundle for better performance."},sidebar:"tutorialSidebar",previous:{title:"React Asset Optimization Guide",permalink:"/js.enigma/docs/WebDev/Build/AssetOptimization"},next:{title:"CSS3 Animation Cheatsheet",permalink:"/js.enigma/docs/WebDev/CSS3/CSS3Animation"}},a={},o=[{value:"\ud83d\udd39 What is Bundle Optimization?",id:"-what-is-bundle-optimization",level:2},{value:"\ud83d\udd39 Step 1: Analyze Your Bundle",id:"-step-1-analyze-your-bundle",level:2},{value:"\ud83d\udccc Install Webpack Bundle Analyzer",id:"-install-webpack-bundle-analyzer",level:3},{value:"Update <code>package.json</code>",id:"update-packagejson",level:3},{value:"\ud83d\udd39 Step 2: Enable Code Splitting",id:"-step-2-enable-code-splitting",level:2},{value:"\u2705 Route-Based Code Splitting",id:"-route-based-code-splitting",level:3},{value:"\ud83d\udd39 Step 3: Optimize Third-Party Libraries",id:"-step-3-optimize-third-party-libraries",level:2},{value:"\u2705 Reduce Lodash Size",id:"-reduce-lodash-size",level:3},{value:"\u2705 Remove Unused Moment.js Locales",id:"-remove-unused-momentjs-locales",level:3},{value:"\ud83d\udd39 Step 4: Enable Tree Shaking",id:"-step-4-enable-tree-shaking",level:2},{value:"\u2705 Ensure <code>&quot;sideEffects&quot;: false</code> in <code>package.json</code>",id:"-ensure-sideeffects-false-in-packagejson",level:3},{value:"\ud83d\udd39 Step 5: Optimize Images &amp; Assets",id:"-step-5-optimize-images--assets",level:2},{value:"\u2705 Use WebP Instead of PNG/JPG",id:"-use-webp-instead-of-pngjpg",level:3},{value:"\u2705 Enable Image Lazy Loading",id:"-enable-image-lazy-loading",level:3},{value:"\u2705 Use Inline SVGs Instead of Icons",id:"-use-inline-svgs-instead-of-icons",level:3},{value:"\ud83d\udd39 Step 6: Minify CSS &amp; JS",id:"-step-6-minify-css--js",level:2},{value:"\ud83d\udd39 Step 7: Enable Gzip or Brotli Compression",id:"-step-7-enable-gzip-or-brotli-compression",level:2},{value:"\u2705 Enable Brotli in Vite",id:"-enable-brotli-in-vite",level:3},{value:"\u2705 <strong>Summary: Key Steps to Optimize Your Bundle</strong>",id:"-summary-key-steps-to-optimize-your-bundle",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-react-bundle-optimization-guide",children:"\ud83d\ude80 React Bundle Optimization Guide"})}),"\n",(0,i.jsxs)(n.p,{children:["Performance optimization in a React application is crucial for faster load times, better UX, and SEO. One of the key strategies for improving performance is ",(0,i.jsx)(n.strong,{children:"bundle optimization"}),", which involves reducing the size of JavaScript files downloaded by the browser."]}),"\n",(0,i.jsx)(n.h2,{id:"-what-is-bundle-optimization",children:"\ud83d\udd39 What is Bundle Optimization?"}),"\n",(0,i.jsxs)(n.p,{children:["When you build a React app, ",(0,i.jsx)(n.strong,{children:"Webpack"})," (or another bundler like ",(0,i.jsx)(n.strong,{children:"Vite, Rollup, Parcel"}),') generates a single JavaScript file (or a few files). This "bundle" contains all your React components, third-party libraries, and assets.']}),"\n",(0,i.jsxs)(n.p,{children:["However, if the bundle is too large, it slows down page loads. ",(0,i.jsx)(n.strong,{children:"Optimizing your bundle"})," ensures that users download only the necessary code at the right time."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-1-analyze-your-bundle",children:"\ud83d\udd39 Step 1: Analyze Your Bundle"}),"\n",(0,i.jsx)(n.p,{children:"Before optimizing, analyze your current bundle size."}),"\n",(0,i.jsx)(n.h3,{id:"-install-webpack-bundle-analyzer",children:"\ud83d\udccc Install Webpack Bundle Analyzer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev webpack-bundle-analyzer\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"update-packagejson",children:["Update ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"scripts": {\r\n  "analyze": "webpack --profile --json > stats.json && webpack-bundle-analyzer stats.json"\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run analyze\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This generates a ",(0,i.jsx)(n.strong,{children:"visual breakdown"})," of your bundle."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-2-enable-code-splitting",children:"\ud83d\udd39 Step 2: Enable Code Splitting"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Code splitting"})," creates smaller, lazy-loaded chunks, reducing initial load time."]}),"\n",(0,i.jsx)(n.h3,{id:"-route-based-code-splitting",children:"\u2705 Route-Based Code Splitting"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { BrowserRouter as Router, Routes, Route } from "react-router-dom";\r\nimport React, { Suspense, lazy } from "react";\r\n\r\nconst Home = lazy(() => import("./pages/Home"));\r\nconst About = lazy(() => import("./pages/About"));\r\n\r\nfunction App() {\r\n  return (\r\n    <Router>\r\n      <Suspense fallback={<div>Loading...</div>}>\r\n        <Routes>\r\n          <Route path="/" element={<Home />} />\r\n          <Route path="/about" element={<About />} />\r\n        </Routes>\r\n      </Suspense>\r\n    </Router>\r\n  );\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc49 This ensures ",(0,i.jsx)(n.code,{children:"Home.js"})," and ",(0,i.jsx)(n.code,{children:"About.js"})," load ",(0,i.jsx)(n.strong,{children:"only when their route is accessed"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-3-optimize-third-party-libraries",children:"\ud83d\udd39 Step 3: Optimize Third-Party Libraries"}),"\n",(0,i.jsxs)(n.p,{children:["Large libraries like ",(0,i.jsx)(n.strong,{children:"Lodash, Moment.js, and Axios"})," can bloat your bundle."]}),"\n",(0,i.jsx)(n.h3,{id:"-reduce-lodash-size",children:"\u2705 Reduce Lodash Size"}),"\n",(0,i.jsx)(n.p,{children:"Instead of:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import _ from "lodash";\n'})}),"\n",(0,i.jsx)(n.p,{children:"Use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import debounce from "lodash/debounce";\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc49 This imports ",(0,i.jsx)(n.strong,{children:"only the required function"}),", reducing the bundle size."]}),"\n",(0,i.jsx)(n.h3,{id:"-remove-unused-momentjs-locales",children:"\u2705 Remove Unused Moment.js Locales"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import moment from "moment";\r\nimport "moment/locale/en";\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Or use ",(0,i.jsx)(n.strong,{children:"Day.js"})," as a lightweight alternative:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import dayjs from "dayjs";\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-4-enable-tree-shaking",children:"\ud83d\udd39 Step 4: Enable Tree Shaking"}),"\n",(0,i.jsxs)(n.p,{children:["Tree shaking ",(0,i.jsx)(n.strong,{children:"removes unused code"})," in production builds."]}),"\n",(0,i.jsxs)(n.h3,{id:"-ensure-sideeffects-false-in-packagejson",children:["\u2705 Ensure ",(0,i.jsx)(n.code,{children:'"sideEffects": false'})," in ",(0,i.jsx)(n.code,{children:"package.json"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"sideEffects": false\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc49 This tells Webpack to ",(0,i.jsx)(n.strong,{children:"remove unused exports"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-5-optimize-images--assets",children:"\ud83d\udd39 Step 5: Optimize Images & Assets"}),"\n",(0,i.jsx)(n.p,{children:"Large images and fonts slow down apps."}),"\n",(0,i.jsx)(n.h3,{id:"-use-webp-instead-of-pngjpg",children:"\u2705 Use WebP Instead of PNG/JPG"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<img src="image.webp" alt="Optimized Image" />\n'})}),"\n",(0,i.jsx)(n.h3,{id:"-enable-image-lazy-loading",children:"\u2705 Enable Image Lazy Loading"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<img src="large-image.jpg" loading="lazy" alt="Lazy Loaded" />\n'})}),"\n",(0,i.jsx)(n.h3,{id:"-use-inline-svgs-instead-of-icons",children:"\u2705 Use Inline SVGs Instead of Icons"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<svg width="24" height="24">\r\n  <circle cx="12" cy="12" r="10" fill="blue" />\r\n</svg>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc49 ",(0,i.jsx)(n.strong,{children:"Reduces requests"})," and ",(0,i.jsx)(n.strong,{children:"speeds up rendering"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-6-minify-css--js",children:"\ud83d\udd39 Step 6: Minify CSS & JS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.strong,{children:"Tailwind CSS or Styled Components"})," instead of large UI libraries."]}),"\n",(0,i.jsxs)(n.li,{children:["Enable ",(0,i.jsx)(n.strong,{children:"CSS Purging"})," (removes unused styles). Example for Tailwind:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'module.exports = {\r\n  purge: ["./src/**/*.js", "./public/index.html"],\r\n};\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.strong,{children:"system fonts"})," to avoid large font downloads:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI";\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-step-7-enable-gzip-or-brotli-compression",children:"\ud83d\udd39 Step 7: Enable Gzip or Brotli Compression"}),"\n",(0,i.jsx)(n.p,{children:"This reduces the size of transferred files."}),"\n",(0,i.jsx)(n.h3,{id:"-enable-brotli-in-vite",children:"\u2705 Enable Brotli in Vite"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install vite-plugin-compression\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"vite.config.js"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import compression from "vite-plugin-compression";\r\n\r\nexport default {\r\n  plugins: [compression()],\r\n};\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"-summary-key-steps-to-optimize-your-bundle",children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Summary: Key Steps to Optimize Your Bundle"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Optimization"}),(0,i.jsx)(n.th,{children:"Method"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Analyze Bundle Size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"webpack-bundle-analyzer"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Lazy Load Components"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"React.lazy()"})," & ",(0,i.jsx)(n.code,{children:"Suspense"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Route-Based Code Splitting"})}),(0,i.jsxs)(n.td,{children:["Dynamic ",(0,i.jsx)(n.code,{children:"import()"})," with React Router"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Tree Shaking"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"sideEffects": false'})," in ",(0,i.jsx)(n.code,{children:"package.json"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Optimize Third-Party Libraries"})}),(0,i.jsxs)(n.td,{children:["Import only what's needed (",(0,i.jsx)(n.code,{children:"lodash/debounce"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Lazy Load Images & Fonts"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'<img loading="lazy" />'})," + WebP"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Minimize CSS & JS"})}),(0,i.jsx)(n.td,{children:"TailwindCSS, PurgeCSS, Styled Components"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Enable Compression"})}),(0,i.jsx)(n.td,{children:"Gzip/Brotli via Webpack or Vite"})]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);