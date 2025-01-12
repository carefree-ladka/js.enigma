"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5538],{8093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var i=n(4848),r=n(8453);const s={title:"Sieve of Eratosthenes"},o=void 0,a={id:"DSA/SieveOfEratosthenes",title:"Sieve of Eratosthenes",description:"The Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to a given limit. It works by iteratively marking the multiples of each prime number starting from 2.",source:"@site/docs/DSA/SieveOfEratosthenes.mdx",sourceDirName:"DSA",slug:"/DSA/SieveOfEratosthenes",permalink:"/js.enigma/docs/DSA/SieveOfEratosthenes",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/SieveOfEratosthenes.mdx",tags:[],version:"current",frontMatter:{title:"Sieve of Eratosthenes"},sidebar:"tutorialSidebar",previous:{title:"Segment Tree Tutorial",permalink:"/js.enigma/docs/DSA/SegmentTree"},next:{title:"Sliding Window Technique",permalink:"/js.enigma/docs/DSA/SlidingWindow"}},l={},m=[{value:"Algorithm Steps:",id:"algorithm-steps",level:2},{value:"JavaScript Implementation",id:"javascript-implementation",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to a given limit. It works by iteratively marking the multiples of each prime number starting from 2."}),"\n",(0,i.jsx)(t.h2,{id:"algorithm-steps",children:"Algorithm Steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a list of consecutive integers from 2 to ",(0,i.jsx)(t.code,{children:"n"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Start with the first number, mark it as prime, and then mark all of its multiples as composite (not prime)."}),"\n",(0,i.jsx)(t.li,{children:"Move to the next unmarked number and repeat the process."}),"\n",(0,i.jsx)(t.li,{children:"Continue until all multiples of primes have been marked."}),"\n"]}),"\n",(0,i.jsx)("img",{src:"https://mathbitsnotebook.org/JuniorMath/Factoring/sievepic.jpg",alt:"Sieve of Eratosthenes",loading:"lazy"}),"\n",(0,i.jsx)(t.h2,{id:"javascript-implementation",children:"JavaScript Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-JavaScript",children:"function sieveOfEratosthenes(n) {\r\n  const primes = new Array(n + 1).fill(true);\r\n  primes[0] = primes[1] = false;\r\n\r\n  for (let i = 2; i <= Math.sqrt(n); i++) {\r\n    if (primes[i]) {\r\n      for (let j = i * i; j <= n; j += i) {\r\n        primes[j] = false;\r\n      }\r\n    }\r\n  }\r\n\r\n  return primes.map((isPrime, index) => isPrime ? index : null).filter(Boolean);\r\n}\r\n\r\nconsole.log(sieveOfEratosthenes(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]\n"})}),"\n",(0,i.jsx)(t.p,{children:"This implementation has a time complexity of O(n log log n)."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);