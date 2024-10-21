"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9331],{6989:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453);const s={title:"Critical Rendering Path"},l=void 0,c={id:"tutorial-extras/HTML5/CriticalRenderingPath",title:"Critical Rendering Path",description:"The Critical Rendering Path (CRP) is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. It represents the flow of the rendering process and impacts how quickly content is displayed to the user. Optimizing the CRP is key to improving website performance and reducing the time it takes to render the first visible part of the page.",source:"@site/docs/tutorial-extras/HTML5/CriticalRenderingPath.mdx",sourceDirName:"tutorial-extras/HTML5",slug:"/tutorial-extras/HTML5/CriticalRenderingPath",permalink:"/js.enigma/docs/tutorial-extras/HTML5/CriticalRenderingPath",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/HTML5/CriticalRenderingPath.mdx",tags:[],version:"current",frontMatter:{title:"Critical Rendering Path"},sidebar:"tutorialSidebar",previous:{title:"React Interview Questions",permalink:"/js.enigma/docs/tutorial-extras/Core JavaScript/React"},next:{title:"Rendering / Render Tree",permalink:"/js.enigma/docs/tutorial-extras/HTML5/RenderingTree"}},o={},a=[{value:"Stages of the Critical Rendering Path:",id:"stages-of-the-critical-rendering-path",level:2},{value:"Key Elements Affecting the Critical Rendering Path:",id:"key-elements-affecting-the-critical-rendering-path",level:2},{value:"Optimizing the Critical Rendering Path:",id:"optimizing-the-critical-rendering-path",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Critical Rendering Path (CRP)"})," is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. It represents the flow of the rendering process and impacts how quickly content is displayed to the user. Optimizing the CRP is key to improving website performance and reducing the time it takes to render the first visible part of the page."]}),"\n",(0,t.jsx)(n.h2,{id:"stages-of-the-critical-rendering-path",children:"Stages of the Critical Rendering Path:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Document Object Model (DOM) Construction:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The browser starts by parsing the HTML document and converting it into the ",(0,t.jsx)(n.strong,{children:"DOM"})," (Document Object Model). This represents the structure of the webpage as a tree of nodes, each corresponding to a part of the HTML."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CSS Object Model (CSSOM) Construction:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The browser then parses all the CSS stylesheets to build the ",(0,t.jsx)(n.strong,{children:"CSSOM"})," (CSS Object Model), which contains information about how each DOM node should be styled."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Render Tree Construction:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Once both the DOM and CSSOM are created, the browser combines them to build the ",(0,t.jsx)(n.strong,{children:"Render Tree"}),". This tree contains only the visible elements (excluding nodes with ",(0,t.jsx)(n.code,{children:"display: none"})," or invisible elements)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Layout (Reflow):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After the render tree is constructed, the browser calculates the ",(0,t.jsx)(n.strong,{children:"layout"})," of each visible element. This process involves determining the size and position of each element on the screen."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Painting:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Finally, the browser paints the pixels to the screen. This is the step where the visual content is drawn, with colors, borders, text, images, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"key-elements-affecting-the-critical-rendering-path",children:"Key Elements Affecting the Critical Rendering Path:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"HTML Parsing:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Parsing HTML begins immediately once the browser starts downloading the HTML document. However, if the parser encounters a ",(0,t.jsx)(n.code,{children:"<script>"})," tag (unless it's marked ",(0,t.jsx)(n.code,{children:"async"})," or ",(0,t.jsx)(n.code,{children:"defer"}),"), parsing will be paused until the script is downloaded and executed. This can delay DOM construction."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CSS Parsing:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CSS is a ",(0,t.jsx)(n.strong,{children:"render-blocking resource"}),", meaning the browser will not render any content until all the CSS files are downloaded and parsed. If there are large or multiple CSS files, it can delay the rendering process."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"JavaScript Execution:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a JavaScript file is loaded synchronously, it can block both the HTML parsing and CSS parsing, since scripts might modify the DOM or CSSOM. This introduces delays, which is why it's a best practice to load scripts asynchronously or defer their execution when possible."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"optimizing-the-critical-rendering-path",children:"Optimizing the Critical Rendering Path:"}),"\n",(0,t.jsx)(n.p,{children:"Improving page load performance requires optimizing the CRP to minimize the time it takes to render the page. Here are key strategies for optimization:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Minimize Render-Blocking Resources:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Load CSS and JavaScript asynchronously to avoid blocking the rendering of the page. Use the ",(0,t.jsx)(n.code,{children:"async"})," or ",(0,t.jsx)(n.code,{children:"defer"})," attributes for scripts:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="script.js" async><\/script>\r\n<script src="script.js" defer><\/script>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Inline Critical CSS:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For above-the-fold content (the part of the webpage visible on the screen without scrolling), inline the critical CSS in the HTML to speed up rendering."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Lazy Load Non-Critical Resources:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Defer the loading of images and scripts that are not essential to the initial render. Use techniques like lazy loading for images or background scripts."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optimize CSS and JavaScript Delivery:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Minify CSS and JavaScript files to reduce their size."}),"\n",(0,t.jsx)(n.li,{children:"Use Content Delivery Networks (CDNs) to serve resources from a server closest to the user."}),"\n",(0,t.jsx)(n.li,{children:"Split large CSS/JavaScript files into smaller, more manageable chunks and load them as needed."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Reduce the Number of Critical Resources:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fewer CSS files, scripts, and images reduce the number of resources that block rendering. Prioritize the loading of critical resources to shorten the critical rendering path."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);