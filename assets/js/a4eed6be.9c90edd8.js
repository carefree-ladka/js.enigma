"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[939],{5618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(4848),i=r(8453);const a={title:"Dutch National Flag Algorithm"},o=void 0,s={id:"tutorial-basics/DutchNationalFlag",title:"Dutch National Flag Algorithm",description:"Dutch National Flag Algorithm",source:"@site/docs/tutorial-basics/DutchNationalFlag.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/DutchNationalFlag",permalink:"/js.enigma/docs/tutorial-basics/DutchNationalFlag",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/DutchNationalFlag.mdx",tags:[],version:"current",frontMatter:{title:"Dutch National Flag Algorithm"},sidebar:"tutorialSidebar",previous:{title:"Euclidean and Manhattan Distance",permalink:"/js.enigma/docs/tutorial-basics/DistancesFormula"},next:{title:"Dynamic Programming",permalink:"/js.enigma/docs/tutorial-basics/DynamicProgramming"}},l={},c=[{value:"Dutch National Flag Algorithm",id:"dutch-national-flag-algorithm",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Algorithm Overview",id:"algorithm-overview",level:3},{value:"Steps",id:"steps",level:3},{value:"Code Implementation",id:"code-implementation",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"dutch-national-flag-algorithm",children:"Dutch National Flag Algorithm"}),"\n",(0,n.jsx)(t.p,{children:"The Dutch National Flag Algorithm is a classic algorithm designed by Edsger W. Dijkstra. It is used to sort an array of elements into three distinct categories. This algorithm is particularly useful in problems involving three different groups of items, such as sorting colors or categorizing elements."}),"\n",(0,n.jsx)(t.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(t.p,{children:["Given an array containing three different values, the task is to sort the array such that all occurrences of the first value come before the occurrences of the second value, which in turn come before the occurrences of the third value. This can be visualized as sorting an array of ",(0,n.jsx)(t.code,{children:"0"}),"s, ",(0,n.jsx)(t.code,{children:"1"}),"s, and ",(0,n.jsx)(t.code,{children:"2"}),"s."]}),"\n",(0,n.jsx)(t.h3,{id:"algorithm-overview",children:"Algorithm Overview"}),"\n",(0,n.jsx)(t.p,{children:"The Dutch National Flag Algorithm operates in linear time, O(n), and uses constant space, O(1). It works by maintaining three pointers to partition the array into three segments:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Low"}),": The boundary for the first segment (values equal to the first value)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mid"}),": The current element being considered."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"High"}),": The boundary for the third segment (values equal to the third value)."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Initialize Pointers"}),": Set ",(0,n.jsx)(t.code,{children:"low"})," to the start of the array, ",(0,n.jsx)(t.code,{children:"mid"})," to the start, and ",(0,n.jsx)(t.code,{children:"high"})," to the end of the array."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Process Elements"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.code,{children:"arr[mid]"})," is equal to the first value, swap ",(0,n.jsx)(t.code,{children:"arr[low]"})," and ",(0,n.jsx)(t.code,{children:"arr[mid]"}),", and increment both ",(0,n.jsx)(t.code,{children:"low"})," and ",(0,n.jsx)(t.code,{children:"mid"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.code,{children:"arr[mid]"})," is equal to the third value, swap ",(0,n.jsx)(t.code,{children:"arr[mid]"})," and ",(0,n.jsx)(t.code,{children:"arr[high]"}),", and decrement ",(0,n.jsx)(t.code,{children:"high"}),". Do not increment ",(0,n.jsx)(t.code,{children:"mid"})," in this case as the swapped value needs to be processed."]}),"\n",(0,n.jsxs)(t.li,{children:["If ",(0,n.jsx)(t.code,{children:"arr[mid]"})," is equal to the second value, simply move ",(0,n.jsx)(t.code,{children:"mid"})," forward."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,n.jsx)(t.p,{children:"Here is a JavaScript implementation of the Dutch National Flag Algorithm:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"/**\r\n * Dutch National Flag Algorithm to sort an array containing 0s, 1s, and 2s.\r\n * @param {number[]} arr - The array to be sorted.\r\n */\r\nconst dutchNationalFlag = (arr) => {\r\n  let low = 0;    // Pointer for the first segment\r\n  let mid = 0;    // Pointer for the current element\r\n  let high = arr.length - 1; // Pointer for the third segment\r\n\r\n  while (mid <= high) {\r\n    if (arr[mid] === 0) {\r\n      // Swap with low and increment both low and mid\r\n      [arr[low], arr[mid]] = [arr[mid], arr[low]];\r\n      low++;\r\n      mid++;\r\n    } else if (arr[mid] === 2) {\r\n      // Swap with high and decrement high\r\n      [arr[mid], arr[high]] = [arr[high], arr[mid]];\r\n      high--;\r\n    } else {\r\n      // If it's 1, just move mid forward\r\n      mid++;\r\n    }\r\n  }\r\n}\r\n\r\nconst arr = [2, 0, 1, 2, 1, 0, 0, 1, 2];\r\ndutchNationalFlag(arr);\r\nconsole.log(arr); // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]\r\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);