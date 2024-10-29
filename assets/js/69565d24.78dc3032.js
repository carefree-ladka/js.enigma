"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1372],{7931:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=e(4848),i=e(8453);const a={title:"Tips & Tricks"},l=void 0,c={id:"Tips & Tricks/TipsAndTricks",title:"Tips & Tricks",description:"Swap Function",source:"@site/docs/Tips & Tricks/TipsAndTricks.mdx",sourceDirName:"Tips & Tricks",slug:"/Tips & Tricks/TipsAndTricks",permalink:"/js.enigma/docs/Tips & Tricks/TipsAndTricks",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/Tips & Tricks/TipsAndTricks.mdx",tags:[],version:"current",frontMatter:{title:"Tips & Tricks"},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/js.enigma/docs/category/tips--tricks"}},t={},o=[{value:"Swap Function",id:"swap-function",level:3},{value:"Reverse Array",id:"reverse-array",level:3},{value:"Check for Duplicates",id:"check-for-duplicates",level:3},{value:"Find Maximum/Minimum",id:"find-maximumminimum",level:3},{value:"Sum of Elements",id:"sum-of-elements",level:3},{value:"Generate Range",id:"generate-range",level:3},{value:"Creating Visited Array for 2D Matrix Graph Problems on LC",id:"creating-visited-array-for-2d-matrix-graph-problems-on-lc",level:3},{value:"Traversing 2D Matrix",id:"traversing-2d-matrix",level:3},{value:"Creating DP Dynamic Array",id:"creating-dp-dynamic-array",level:3},{value:"Using Multi-Dimensional DP Arrays",id:"using-multi-dimensional-dp-arrays",level:3},{value:"DFS/BFS Queue for Matrix",id:"dfsbfs-queue-for-matrix",level:3},{value:"Boundary Check for Matrix Traversals",id:"boundary-check-for-matrix-traversals",level:3},{value:"Alphanumeric Check for Strings",id:"alphanumeric-check-for-strings",level:3}];function d(r){const n={code:"code",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"swap-function",children:"Swap Function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function swap(arr, i, j) {\r\n    [arr[i], arr[j]] = [arr[j], arr[i]];\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"reverse-array",children:"Reverse Array"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function reverseArray(arr) {\r\n    return arr.reverse();\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"check-for-duplicates",children:"Check for Duplicates"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function hasDuplicates(arr) {\r\n    return new Set(arr).size !== arr.length;\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"find-maximumminimum",children:"Find Maximum/Minimum"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function findMax(arr) {\r\n    return Math.max(...arr);\r\n}\r\n\r\nfunction findMin(arr) {\r\n    return Math.min(...arr);\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sum-of-elements",children:"Sum of Elements"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function sumArray(arr) {\r\n    return arr.reduce((sum, num) => sum + num, 0);\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generate-range",children:"Generate Range"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function range(start, end) {\r\n    return Array.from({ length: end - start + 1 }, (_, i) => start + i);\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-visited-array-for-2d-matrix-graph-problems-on-lc",children:"Creating Visited Array for 2D Matrix Graph Problems on LC"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const rows = 3\r\nconst cols = 3\r\nconst visited = Array.from({ length: rows }, () => Array(cols).fill(false));\r\n\r\n/* \r\n[\r\n  [ false, false, false ],\r\n  [ false, false, false ],\r\n  [ false, false, false ]\r\n]\r\n*/\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Case:"})," Keep track of visited nodes when traversing or searching through 2D grids."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Common Problem:"})," BFS, DFS in grid-based questions."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"traversing-2d-matrix",children:"Traversing 2D Matrix"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const directions = [\r\n  [0, 1],    // right\r\n  [1, 0],    // down\r\n  [0, -1],   // left\r\n  [-1, 0],   // up\r\n  [1, 1],    // down-right (diagonal)\r\n  [1, -1],   // down-left (diagonal)\r\n  [-1, 1],   // up-right (diagonal)\r\n  [-1, -1]   // up-left (diagonal)\r\n];\r\n\r\nfor (let [dr, dc] of directions) {\r\n  const newRow = row + dr;\r\n  const newCol = col + dc;\r\n  //do something\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Case:"})," Move in all possible directions in a matrix, especially for flood-fill, path-finding, or connected components problems."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"creating-dp-dynamic-array",children:"Creating DP Dynamic Array"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const n=4\r\nconst dp = Array(n).fill(1)\r\n//[1,1,1,1]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Case:"})," Useful for dynamic programming problems where you need to store solutions to subproblems, e.g., dp[i] could represent the solution for the first i elements."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"using-multi-dimensional-dp-arrays",children:"Using Multi-Dimensional DP Arrays"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const rows = 3;\r\nconst cols = 3;\r\nconst dp = Array.from({ length: rows }, () => Array(cols).fill(0));\r\n\r\n/* \r\n[\r\n  [ 0, 0, 0 ],\r\n  [ 0, 0, 0 ],\r\n  [ 0, 0, 0 ]\r\n]\r\n*/\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Case:"})," Useful in problems like finding paths in a grid, calculating the maximum/minimum path sums, or handling subproblems that depend on two indices."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dfsbfs-queue-for-matrix",children:"DFS/BFS Queue for Matrix"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const queue = [[startRow, startCol]];\r\nconst directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 4-directional movement\r\n\r\nwhile (queue.length) {\r\n  const [row, col] = queue.shift();\r\n  \r\n  for (let [dr, dc] of directions) {\r\n    const newRow = row + dr;\r\n    const newCol = col + dc;\r\n    // Add boundary check here and then enqueue\r\n    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {\r\n      queue.push([newRow, newCol]);\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Case:"})," For BFS (level-order) or DFS (depth-first) traversals on a 2D grid."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"boundary-check-for-matrix-traversals",children:"Boundary Check for Matrix Traversals"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const isValid = (row, col, rows, cols) => {\r\n  return row >= 0 && row < rows && col >= 0 && col < cols;\r\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Case:"})," Avoid index out-of-bound errors when traversing a matrix."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"alphanumeric-check-for-strings",children:"Alphanumeric Check for Strings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function isAlphanumeric(str) {\r\n    return /^[a-zA-Z0-9]+$/.test(str);\r\n}\r\n\r\n//OR\r\n\r\nfunction isAlphanumeric(char) {\r\n    return (('A' <= char && char <= 'Z') || \r\n            ('a' <= char && char <= 'z') || \r\n            ('0' <= char && char <= '9'));\r\n}\r\n\r\n// Test cases\r\nconsole.log(isAlphanumeric(\"abc123\")); // true\r\nconsole.log(isAlphanumeric(\"abc\"));    // true\r\nconsole.log(isAlphanumeric(\"123\"));    // true\r\nconsole.log(isAlphanumeric(\"abc 123\")); // false (contains space)\r\nconsole.log(isAlphanumeric(\"abc!123\")); // false (contains special character)\r\nconsole.log(isAlphanumeric(\"\"));        // false (empty string)\n"})})]})}function u(r={}){const{wrapper:n}={...(0,i.R)(),...r.components};return n?(0,s.jsx)(n,{...r,children:(0,s.jsx)(d,{...r})}):d(r)}},8453:(r,n,e)=>{e.d(n,{R:()=>l,x:()=>c});var s=e(6540);const i={},a=s.createContext(i);function l(r){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function c(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:l(r.components),s.createElement(a.Provider,{value:n},r.children)}}}]);