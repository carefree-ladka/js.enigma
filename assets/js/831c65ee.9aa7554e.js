"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7889],{450:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var n=l(4848),c=l(8453);const t={},r="CSS DOM Selectors",i={id:"WebDev/CSS3/CSS3Selectors",title:"CSS DOM Selectors",description:"Basic Selectors",source:"@site/docs/WebDev/CSS3/CSS3Selectors.mdx",sourceDirName:"WebDev/CSS3",slug:"/WebDev/CSS3/CSS3Selectors",permalink:"/js.enigma/docs/WebDev/CSS3/CSS3Selectors",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/CSS3/CSS3Selectors.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance & BEM Convention",permalink:"/js.enigma/docs/WebDev/CSS3/CSS3Performance"},next:{title:"CSS Box-Sizing",permalink:"/js.enigma/docs/WebDev/CSS3/CSSBox-Sizing"}},a={},d=[{value:"Basic Selectors",id:"basic-selectors",level:2},{value:"Element Selector",id:"element-selector",level:3},{value:"Class Selector",id:"class-selector",level:3},{value:"ID Selector",id:"id-selector",level:3},{value:"Combination Selectors",id:"combination-selectors",level:2},{value:"Descendant Selector",id:"descendant-selector",level:3},{value:"Child Selector",id:"child-selector",level:3},{value:"Adjacent Sibling",id:"adjacent-sibling",level:3},{value:"General Sibling",id:"general-sibling",level:3},{value:"Attribute Selectors",id:"attribute-selectors",level:2},{value:"Has Attribute",id:"has-attribute",level:3},{value:"Exact Attribute Value",id:"exact-attribute-value",level:3},{value:"Contains Word",id:"contains-word",level:3},{value:"Starts With",id:"starts-with",level:3},{value:"Ends With",id:"ends-with",level:3},{value:"Contains Substring",id:"contains-substring",level:3},{value:"Pseudo-classes",id:"pseudo-classes",level:2},{value:"State Pseudo-classes",id:"state-pseudo-classes",level:3},{value:"Position Pseudo-classes",id:"position-pseudo-classes",level:3},{value:"Pattern Pseudo-classes",id:"pattern-pseudo-classes",level:3},{value:"Multiple Selectors",id:"multiple-selectors",level:2},{value:"Best Practices",id:"best-practices",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"css-dom-selectors",children:"CSS DOM Selectors"})}),"\n",(0,n.jsx)(s.h2,{id:"basic-selectors",children:"Basic Selectors"}),"\n",(0,n.jsx)(s.h3,{id:"element-selector",children:"Element Selector"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select all <p> elements\r\ndocument.getElementsByTagName('p');\r\ndocument.querySelectorAll('p');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"p { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"class-selector",children:"Class Selector"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select elements with class=\"highlight\"\r\ndocument.getElementsByClassName('highlight');\r\ndocument.querySelectorAll('.highlight');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:".highlight { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"id-selector",children:"ID Selector"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select element with id=\"header\"\r\ndocument.getElementById('header');\r\ndocument.querySelector('#header');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"#header { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"combination-selectors",children:"Combination Selectors"}),"\n",(0,n.jsx)(s.h3,{id:"descendant-selector",children:"Descendant Selector"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select all <p> elements inside <div>\r\ndocument.querySelectorAll('div p');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"div p { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"child-selector",children:"Child Selector"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select all direct <p> children of <div>\r\ndocument.querySelectorAll('div > p');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"div > p { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"adjacent-sibling",children:"Adjacent Sibling"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select <p> immediately after <h2>\r\ndocument.querySelectorAll('h2 + p');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"h2 + p { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"general-sibling",children:"General Sibling"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select all <p> elements that follow <h2>\r\ndocument.querySelectorAll('h2 ~ p');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"h2 ~ p { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"attribute-selectors",children:"Attribute Selectors"}),"\n",(0,n.jsx)(s.h3,{id:"has-attribute",children:"Has Attribute"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select elements with 'data-type' attribute\r\ndocument.querySelectorAll('[data-type]');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"[data-type] { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"exact-attribute-value",children:"Exact Attribute Value"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// Select elements with type="text"\r\ndocument.querySelectorAll(\'[type="text"]\');\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'[type="text"] { /* styles */ }\n'})}),"\n",(0,n.jsx)(s.h3,{id:"contains-word",children:"Contains Word"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// Select elements with class containing "btn"\r\ndocument.querySelectorAll(\'[class~="btn"]\');\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'[class~="btn"] { /* styles */ }\n'})}),"\n",(0,n.jsx)(s.h3,{id:"starts-with",children:"Starts With"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// Select elements with href starting with "https"\r\ndocument.querySelectorAll(\'[href^="https"]\');\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'[href^="https"] { /* styles */ }\n'})}),"\n",(0,n.jsx)(s.h3,{id:"ends-with",children:"Ends With"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// Select elements with src ending in ".pdf"\r\ndocument.querySelectorAll(\'[src$=".pdf"]\');\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'[src$=".pdf"] { /* styles */ }\n'})}),"\n",(0,n.jsx)(s.h3,{id:"contains-substring",children:"Contains Substring"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'// Select elements with href containing "example"\r\ndocument.querySelectorAll(\'[href*="example"]\');\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'[href*="example"] { /* styles */ }\n'})}),"\n",(0,n.jsx)(s.h2,{id:"pseudo-classes",children:"Pseudo-classes"}),"\n",(0,n.jsx)(s.h3,{id:"state-pseudo-classes",children:"State Pseudo-classes"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select all checked inputs\r\ndocument.querySelectorAll('input:checked');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"input:checked { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"position-pseudo-classes",children:"Position Pseudo-classes"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select first paragraph\r\ndocument.querySelector('p:first-child');\r\n// Select last paragraph\r\ndocument.querySelector('p:last-child');\r\n// Select specific numbered element\r\ndocument.querySelector('p:nth-child(2)');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"p:first-child { /* styles */ }\r\np:last-child { /* styles */ }\r\np:nth-child(2) { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h3,{id:"pattern-pseudo-classes",children:"Pattern Pseudo-classes"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select even paragraphs\r\ndocument.querySelectorAll('p:nth-child(even)');\r\n// Select odd paragraphs\r\ndocument.querySelectorAll('p:nth-child(odd)');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"p:nth-child(even) { /* styles */ }\r\np:nth-child(odd) { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"multiple-selectors",children:"Multiple Selectors"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"// Select multiple elements\r\ndocument.querySelectorAll('h1, .highlight, #header');\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"h1, .highlight, #header { /* styles */ }\n"})}),"\n",(0,n.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"querySelector"}),"/",(0,n.jsx)(s.code,{children:"querySelectorAll"})," for modern applications"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"More flexible and powerful than older methods"}),"\n",(0,n.jsx)(s.li,{children:"Supports all CSS selector syntax"}),"\n",(0,n.jsx)(s.li,{children:"Returns static NodeList (won't auto-update)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Performance Considerations"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"ID selectors are fastest (#id)"}),"\n",(0,n.jsx)(s.li,{children:"Class selectors are next fastest (.class)"}),"\n",(0,n.jsxs)(s.li,{children:["Complex selectors are slowest (div > p",":nth-child","(2))"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Specificity Order (most to least specific)"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"ID selectors (#id)"}),"\n",(0,n.jsx)(s.li,{children:"Class selectors (.class)"}),"\n",(0,n.jsx)(s.li,{children:"Element selectors (p)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Modern Usage Tips"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Prefer ",(0,n.jsx)(s.code,{children:"querySelector"})," over ",(0,n.jsx)(s.code,{children:"getElementById"})," for consistency"]}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"closest()"})," for finding parent elements"]}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"matches()"})," to test if element matches selector"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"element.closest('.container');\r\nelement.matches('.active');\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,s,l)=>{l.d(s,{R:()=>r,x:()=>i});var n=l(6540);const c={},t=n.createContext(c);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);