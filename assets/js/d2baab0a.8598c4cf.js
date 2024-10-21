"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4302],{8799:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=n(4848),i=n(8453);const t={title:"Web Performance"},o="Web Performance",c={id:"tutorial-extras/WebBits/WebPerformance",title:"Web Performance",description:"Web performance refers to how quickly and efficiently a web page or application loads and operates. Good web performance is crucial for providing a positive user experience, improving SEO rankings, and reducing bounce rates. This guide covers key concepts, metrics, and best practices for optimizing web performance.",source:"@site/docs/tutorial-extras/WebBits/WebPerformance.mdx",sourceDirName:"tutorial-extras/WebBits",slug:"/tutorial-extras/WebBits/WebPerformance",permalink:"/js.enigma/docs/tutorial-extras/WebBits/WebPerformance",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/WebBits/WebPerformance.mdx",tags:[],version:"current",frontMatter:{title:"Web Performance"},sidebar:"tutorialSidebar",previous:{title:"Web Accessibility",permalink:"/js.enigma/docs/tutorial-extras/WebBits/WebAccessibility"},next:{title:"Web Security",permalink:"/js.enigma/docs/tutorial-extras/WebBits/WebSecurity"}},l={},a=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"1. <strong>Performance Metrics</strong>",id:"1-performance-metrics",level:3},{value:"2. <strong>Critical Rendering Path</strong>",id:"2-critical-rendering-path",level:3},{value:"3. <strong>Resource Loading</strong>",id:"3-resource-loading",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. <strong>Tree Shaking</strong>",id:"1-tree-shaking",level:3},{value:"2. <strong>Content Delivery Network (CDN)</strong>",id:"2-content-delivery-network-cdn",level:3},{value:"3. <strong>Caching</strong>",id:"3-caching",level:3},{value:"4. <strong>Optimize Images</strong>",id:"4-optimize-images",level:3},{value:"5. <strong>Minify and Compress Resources</strong>",id:"5-minify-and-compress-resources",level:3},{value:"6. <strong>Implement Lazy Loading</strong>",id:"6-implement-lazy-loading",level:3},{value:"7. <strong>Reduce HTTP Requests</strong>",id:"7-reduce-http-requests",level:3},{value:"8. <strong>Optimize JavaScript</strong>",id:"8-optimize-javascript",level:3},{value:"9. <strong>Improve Server Response Times</strong>",id:"9-improve-server-response-times",level:3},{value:"10. <strong>Measure and Monitor Performance</strong>",id:"10-measure-and-monitor-performance",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"web-performance",children:"Web Performance"})}),"\n",(0,r.jsx)(s.p,{children:"Web performance refers to how quickly and efficiently a web page or application loads and operates. Good web performance is crucial for providing a positive user experience, improving SEO rankings, and reducing bounce rates. This guide covers key concepts, metrics, and best practices for optimizing web performance."}),"\n",(0,r.jsx)(s.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,r.jsxs)(s.h3,{id:"1-performance-metrics",children:["1. ",(0,r.jsx)(s.strong,{children:"Performance Metrics"})]}),"\n",(0,r.jsx)(s.p,{children:"Understanding and measuring web performance involves several key metrics:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"First Contentful Paint (FCP)"}),": Measures when the first piece of content is rendered on the screen."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Largest Contentful Paint (LCP)"}),": Measures when the largest piece of content is rendered."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Time to Interactive (TTI)"}),": Measures when the page becomes fully interactive."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Total Blocking Time (TBT)"}),": Measures the total time during which the page is blocked from user interaction."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Cumulative Layout Shift (CLS)"}),": Measures visual stability and how much the layout shifts during loading."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"2-critical-rendering-path",children:["2. ",(0,r.jsx)(s.strong,{children:"Critical Rendering Path"})]}),"\n",(0,r.jsx)(s.p,{children:"The critical rendering path is the sequence of steps the browser takes to render the page:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Parse HTML"}),": The browser parses the HTML to construct the Document Object Model (DOM)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Parse CSS"}),": The browser parses CSS to construct the CSS Object Model (CSSOM)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Render Tree Construction"}),": The browser combines the DOM and CSSOM to create the render tree."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Layout"}),": The browser calculates the layout and position of each element."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Painting"}),": The browser paints the content to the screen."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"3-resource-loading",children:["3. ",(0,r.jsx)(s.strong,{children:"Resource Loading"})]}),"\n",(0,r.jsx)(s.p,{children:"Efficient resource loading is key to performance:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Critical Resources"}),": Resources necessary for initial rendering, such as CSS and JavaScript."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Non-Critical Resources"}),": Resources that can be loaded after the initial render, such as images and additional scripts."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(s.h3,{id:"1-tree-shaking",children:["1. ",(0,r.jsx)(s.strong,{children:"Tree Shaking"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Description"}),": Tree shaking is a technique used to eliminate unused code from JavaScript bundles, reducing the size of the files that need to be loaded and parsed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"How It Works"}),": Modern build tools like Webpack analyze the dependency graph and remove code that is not referenced in the application."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Benefits"}),": Reduces JavaScript bundle size, improves load times, and decreases parsing time."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"2-content-delivery-network-cdn",children:["2. ",(0,r.jsx)(s.strong,{children:"Content Delivery Network (CDN)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Description"}),": A CDN is a network of geographically distributed servers that deliver content to users based on their location."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Benefits"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Reduced Latency"}),": Serves content from a server closer to the user, reducing load times."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Load Balancing"}),": Distributes traffic across multiple servers to handle high traffic loads."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Improved Availability"}),": Provides redundancy and fault tolerance by replicating content across multiple servers."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"3-caching",children:["3. ",(0,r.jsx)(s.strong,{children:"Caching"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Description"}),": Caching stores copies of resources to reduce load times and server requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Types of Caching"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Browser Caching"}),": Stores resources locally in the user's browser, reducing the need to fetch them from the server on subsequent visits."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Server-Side Caching"}),": Stores generated pages or database query results on the server to reduce processing time for repeated requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Proxy Caching"}),": Caches resources at intermediate points between the user and the server (e.g., CDNs)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Best Practices"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Set Cache Headers"}),": Use HTTP headers like ",(0,r.jsx)(s.code,{children:"Cache-Control"})," and ",(0,r.jsx)(s.code,{children:"Expires"})," to control caching behavior."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Versioning"}),": Implement versioning for static assets to ensure users receive the latest versions without cache conflicts."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"4-optimize-images",children:["4. ",(0,r.jsx)(s.strong,{children:"Optimize Images"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Format"}),": Use modern formats like WebP for better compression."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Compression"}),": Compress images to reduce file size without sacrificing quality."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Responsive Images"}),": Use responsive images with the ",(0,r.jsx)(s.code,{children:"srcset"})," attribute for different screen sizes."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"5-minify-and-compress-resources",children:["5. ",(0,r.jsx)(s.strong,{children:"Minify and Compress Resources"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Minification"}),": Remove unnecessary characters from CSS, JavaScript, and HTML files."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Compression"}),": Use Gzip or Brotli to compress text-based resources."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"6-implement-lazy-loading",children:["6. ",(0,r.jsx)(s.strong,{children:"Implement Lazy Loading"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Images and Videos"}),": Load images and videos only when they are in the viewport."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"JavaScript"}),": Use dynamic imports to load JavaScript modules only when needed."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"7-reduce-http-requests",children:["7. ",(0,r.jsx)(s.strong,{children:"Reduce HTTP Requests"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Combine Files"}),": Combine multiple CSS and JavaScript files into one to reduce the number of HTTP requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Use Sprites"}),": Combine multiple images into a single image sprite."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"8-optimize-javascript",children:["8. ",(0,r.jsx)(s.strong,{children:"Optimize JavaScript"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Defer Loading"}),": Use the ",(0,r.jsx)(s.code,{children:"defer"})," or ",(0,r.jsx)(s.code,{children:"async"})," attribute for non-critical JavaScript to avoid blocking the rendering."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Tree Shaking"}),": Remove unused code from JavaScript bundles."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"9-improve-server-response-times",children:["9. ",(0,r.jsx)(s.strong,{children:"Improve Server Response Times"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Caching"}),": Implement caching strategies to reduce server load and improve response times."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Database Optimization"}),": Optimize database queries and indexing to speed up server responses."]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"10-measure-and-monitor-performance",children:["10. ",(0,r.jsx)(s.strong,{children:"Measure and Monitor Performance"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Tools"}),": Use tools like Google Lighthouse, WebPageTest, and Chrome DevTools to measure and monitor performance."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Regular Audits"}),": Perform regular performance audits to identify and address issues."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(s.p,{children:"Optimizing web performance involves understanding key metrics, efficient resource loading, and applying best practices like tree shaking, using CDNs, and implementing caching. By focusing on these areas, you can enhance user experience, improve SEO, and create faster, more efficient web applications."}),"\n",(0,r.jsxs)(s.p,{children:["For more detailed information, visit the ",(0,r.jsx)(s.a,{href:"https://developers.google.com/web/fundamentals/performance",children:"Google Web Fundamentals"})," page."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(6540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);