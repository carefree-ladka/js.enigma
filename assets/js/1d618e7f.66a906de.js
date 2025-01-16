"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8889],{9345:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var i=r(4848),s=r(8453);const d={},a="Tailwind CSS Cheatsheet",t={id:"WebDev/CSS3/TailwindCSS",title:"Tailwind CSS Cheatsheet",description:"Layout Fundamentals",source:"@site/docs/WebDev/CSS3/TailwindCSS.mdx",sourceDirName:"WebDev/CSS3",slug:"/WebDev/CSS3/TailwindCSS",permalink:"/js.enigma/docs/WebDev/CSS3/TailwindCSS",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/CSS3/TailwindCSS.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS DOM Selectors",permalink:"/js.enigma/docs/WebDev/CSS3/CSS3Selectors"},next:{title:"DFS & BFS on HTML",permalink:"/js.enigma/docs/WebDev/HTML5/BFSDFS"}},l={},o=[{value:"Layout Fundamentals",id:"layout-fundamentals",level:2},{value:"Container &amp; Display",id:"container--display",level:3},{value:"Flexbox",id:"flexbox",level:3},{value:"Grid",id:"grid",level:3},{value:"Spacing &amp; Sizing",id:"spacing--sizing",level:2},{value:"Margin",id:"margin",level:3},{value:"Padding",id:"padding",level:3},{value:"Width &amp; Height",id:"width--height",level:3},{value:"Typography",id:"typography",level:2},{value:"Font Family",id:"font-family",level:3},{value:"Font Size",id:"font-size",level:3},{value:"Font Weight",id:"font-weight",level:3},{value:"Text Alignment",id:"text-alignment",level:3},{value:"Colors &amp; Backgrounds",id:"colors--backgrounds",level:2},{value:"Text Colors",id:"text-colors",level:3},{value:"Background Colors",id:"background-colors",level:3},{value:"Border Colors",id:"border-colors",level:3},{value:"Borders &amp; Rounded Corners",id:"borders--rounded-corners",level:2},{value:"Border Width",id:"border-width",level:3},{value:"Border Radius",id:"border-radius",level:3},{value:"Effects &amp; Filters",id:"effects--filters",level:2},{value:"Box Shadow",id:"box-shadow",level:3},{value:"Opacity",id:"opacity",level:3},{value:"Responsive Design",id:"responsive-design",level:2},{value:"Breakpoints",id:"breakpoints",level:3},{value:"States &amp; Variants",id:"states--variants",level:2},{value:"Hover, Focus, &amp; Active States",id:"hover-focus--active-states",level:3},{value:"Dark Mode",id:"dark-mode",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"tailwind-css-cheatsheet",children:"Tailwind CSS Cheatsheet"})}),"\n",(0,i.jsx)(n.h2,{id:"layout-fundamentals",children:"Layout Fundamentals"}),"\n",(0,i.jsx)(n.h3,{id:"container--display",children:"Container & Display"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"container         // Wrapper with responsive max-width\r\nblock            // display: block\r\ninline-block     // display: inline-block\r\ninline          // display: inline\r\nflex            // display: flex\r\ngrid            // display: grid\r\nhidden          // display: none\n"})}),"\n",(0,i.jsx)(n.h3,{id:"flexbox",children:"Flexbox"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* Flex Direction */\r\nflex-row         // flex-direction: row\r\nflex-col         // flex-direction: column\r\nflex-wrap        // flex-wrap: wrap\r\n\r\n/* Justify Content (horizontal) */\r\njustify-start    // justify-content: flex-start\r\njustify-end      // justify-content: flex-end\r\njustify-center   // justify-content: center\r\njustify-between  // justify-content: space-between\r\njustify-around   // justify-content: space-around\r\n\r\n/* Align Items (vertical) */\r\nitems-start      // align-items: flex-start\r\nitems-end        // align-items: flex-end\r\nitems-center     // align-items: center\r\nitems-stretch    // align-items: stretch\r\n\r\n/* Individual Item Alignment */\r\nself-start       // align-self: flex-start\r\nself-end         // align-self: flex-end\r\nself-center      // align-self: center\n"})}),"\n",(0,i.jsx)(n.h3,{id:"grid",children:"Grid"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* Grid Template */\r\ngrid-cols-{n}    // grid-template-columns: repeat(n, minmax(0, 1fr))\r\ngrid-rows-{n}    // grid-template-rows: repeat(n, minmax(0, 1fr))\r\n\r\n/* Grid Column Span */\r\ncol-span-{n}     // grid-column: span n / span n\r\ncol-start-{n}    // grid-column-start: n\r\ncol-end-{n}      // grid-column-end: n\r\n\r\n/* Grid Gap */\r\ngap-{size}       // gap: size\r\ngap-x-{size}     // column-gap: size\r\ngap-y-{size}     // row-gap: size\n"})}),"\n",(0,i.jsx)(n.h2,{id:"spacing--sizing",children:"Spacing & Sizing"}),"\n",(0,i.jsx)(n.h3,{id:"margin",children:"Margin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"m-{size}         // margin: size\r\nmt-{size}        // margin-top: size\r\nmr-{size}        // margin-right: size\r\nmb-{size}        // margin-bottom: size\r\nml-{size}        // margin-left: size\r\nmx-{size}        // margin-left & margin-right\r\nmy-{size}        // margin-top & margin-bottom\n"})}),"\n",(0,i.jsx)(n.h3,{id:"padding",children:"Padding"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"p-{size}         // padding: size\r\npt-{size}        // padding-top: size\r\npr-{size}        // padding-right: size\r\npb-{size}        // padding-bottom: size\r\npl-{size}        // padding-left: size\r\npx-{size}        // padding-left & padding-right\r\npy-{size}        // padding-top & padding-bottom\n"})}),"\n",(0,i.jsx)(n.h3,{id:"width--height",children:"Width & Height"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"w-{size}         // width: size\r\nh-{size}         // height: size\r\nmin-w-{size}     // min-width: size\r\nmin-h-{size}     // min-height: size\r\nmax-w-{size}     // max-width: size\r\nmax-h-{size}     // max-height: size\r\n\r\n/* Percentage Width */\r\nw-1/2            // width: 50%\r\nw-1/3            // width: 33.333333%\r\nw-2/3            // width: 66.666667%\r\nw-full           // width: 100%\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typography",children:"Typography"}),"\n",(0,i.jsx)(n.h3,{id:"font-family",children:"Font Family"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"font-sans        // font-family: system-ui, sans-serif\r\nfont-serif       // font-family: serif\r\nfont-mono        // font-family: monospace\n"})}),"\n",(0,i.jsx)(n.h3,{id:"font-size",children:"Font Size"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"text-xs          // font-size: 0.75rem\r\ntext-sm          // font-size: 0.875rem\r\ntext-base        // font-size: 1rem\r\ntext-lg          // font-size: 1.125rem\r\ntext-xl          // font-size: 1.25rem\r\ntext-2xl         // font-size: 1.5rem\n"})}),"\n",(0,i.jsx)(n.h3,{id:"font-weight",children:"Font Weight"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"font-thin        // font-weight: 100\r\nfont-normal      // font-weight: 400\r\nfont-medium      // font-weight: 500\r\nfont-semibold    // font-weight: 600\r\nfont-bold        // font-weight: 700\n"})}),"\n",(0,i.jsx)(n.h3,{id:"text-alignment",children:"Text Alignment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"text-left        // text-align: left\r\ntext-center      // text-align: center\r\ntext-right       // text-align: right\r\ntext-justify     // text-align: justify\n"})}),"\n",(0,i.jsx)(n.h2,{id:"colors--backgrounds",children:"Colors & Backgrounds"}),"\n",(0,i.jsx)(n.h3,{id:"text-colors",children:"Text Colors"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"text-{color}-{shade}  // color: {color}\r\ntext-white            // color: white\r\ntext-black            // color: black\r\ntext-transparent      // color: transparent\n"})}),"\n",(0,i.jsx)(n.h3,{id:"background-colors",children:"Background Colors"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"bg-{color}-{shade}    // background-color: {color}\r\nbg-white             // background-color: white\r\nbg-black             // background-color: black\r\nbg-transparent       // background-color: transparent\n"})}),"\n",(0,i.jsx)(n.h3,{id:"border-colors",children:"Border Colors"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"border-{color}-{shade}  // border-color: {color}\r\nborder-white           // border-color: white\r\nborder-black           // border-color: black\r\nborder-transparent     // border-color: transparent\n"})}),"\n",(0,i.jsx)(n.h2,{id:"borders--rounded-corners",children:"Borders & Rounded Corners"}),"\n",(0,i.jsx)(n.h3,{id:"border-width",children:"Border Width"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"border          // border-width: 1px\r\nborder-0        // border-width: 0\r\nborder-2        // border-width: 2px\r\nborder-4        // border-width: 4px\r\nborder-8        // border-width: 8px\n"})}),"\n",(0,i.jsx)(n.h3,{id:"border-radius",children:"Border Radius"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"rounded-none    // border-radius: 0\r\nrounded-sm      // border-radius: 0.125rem\r\nrounded         // border-radius: 0.25rem\r\nrounded-md      // border-radius: 0.375rem\r\nrounded-lg      // border-radius: 0.5rem\r\nrounded-full    // border-radius: 9999px\n"})}),"\n",(0,i.jsx)(n.h2,{id:"effects--filters",children:"Effects & Filters"}),"\n",(0,i.jsx)(n.h3,{id:"box-shadow",children:"Box Shadow"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"shadow-sm       // box-shadow: small\r\nshadow          // box-shadow: medium\r\nshadow-md       // box-shadow: medium-large\r\nshadow-lg       // box-shadow: large\r\nshadow-xl       // box-shadow: extra-large\r\nshadow-none     // box-shadow: none\n"})}),"\n",(0,i.jsx)(n.h3,{id:"opacity",children:"Opacity"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"opacity-0       // opacity: 0\r\nopacity-25      // opacity: 0.25\r\nopacity-50      // opacity: 0.5\r\nopacity-75      // opacity: 0.75\r\nopacity-100     // opacity: 1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"responsive-design",children:"Responsive Design"}),"\n",(0,i.jsx)(n.h3,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"sm:             // @media (min-width: 640px)\r\nmd:             // @media (min-width: 768px)\r\nlg:             // @media (min-width: 1024px)\r\nxl:             // @media (min-width: 1280px)\r\n2xl:            // @media (min-width: 1536px)\r\n\r\n/* Example */\r\nsm:flex         // flex display on small screens and up\r\nmd:hidden       // hidden on medium screens and up\n"})}),"\n",(0,i.jsx)(n.h2,{id:"states--variants",children:"States & Variants"}),"\n",(0,i.jsx)(n.h3,{id:"hover-focus--active-states",children:"Hover, Focus, & Active States"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"hover:          // :hover\r\nfocus:          // :focus\r\nactive:         // :active\r\ndisabled:       // :disabled\r\n\r\n/* Example */\r\nhover:bg-blue-600    // background changes on hover\r\nfocus:outline-none   // removes outline on focus\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dark-mode",children:"Dark Mode"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"dark:           // @media (prefers-color-scheme: dark)\r\n\r\n/* Example */\r\ndark:bg-gray-800     // dark background in dark mode\r\ndark:text-white      // white text in dark mode\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>t});var i=r(6540);const s={},d=i.createContext(s);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);