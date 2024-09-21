"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6583],{9127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(4848),i=t(8453);const s={title:"Segment Tree Tutorial",description:"A comprehensive guide to Segment Trees with code examples in JavaScript."},o="Segment Tree Tutorial",l={id:"tutorial-basics/SegmentTree",title:"Segment Tree Tutorial",description:"A comprehensive guide to Segment Trees with code examples in JavaScript.",source:"@site/docs/tutorial-basics/SegmentTree.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/SegmentTree",permalink:"/js.enigma/docs/tutorial-basics/SegmentTree",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/SegmentTree.mdx",tags:[],version:"current",frontMatter:{title:"Segment Tree Tutorial",description:"A comprehensive guide to Segment Trees with code examples in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"In-Place Reversal of a Linked List",permalink:"/js.enigma/docs/tutorial-basics/ReverseLinkedList"},next:{title:"Sieve of Eratosthenes",permalink:"/js.enigma/docs/tutorial-basics/SieveOfEratosthenes"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Key Operations",id:"key-operations",level:2},{value:"Segment Tree Structure",id:"segment-tree-structure",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Segment Tree on 2D Matrix",id:"segment-tree-on-2d-matrix",level:2},{value:"Segment Tree Structure",id:"segment-tree-structure-1",level:2},{value:"Implementation",id:"implementation-1",level:2},{value:"1D Range Queries",id:"1d-range-queries",level:3},{value:"2D Range Queries",id:"2d-range-queries",level:3},{value:"Range Module",id:"range-module",level:3},{value:"Counting Problems",id:"counting-problems",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"segment-tree-tutorial",children:"Segment Tree Tutorial"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["A Segment Tree is a data structure used to efficiently perform range queries and updates on an array. It is particularly useful when you need to query the sum, minimum, maximum, or any associative operation over a range of elements in an array, and it supports these operations in ",(0,r.jsx)(n.code,{children:"O(log n)"})," time."]}),"\n",(0,r.jsx)(n.h2,{id:"key-operations",children:"Key Operations"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Build"}),": Construct the Segment Tree from an array."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Update"}),": Update a specific element in the array and reflect this change in the Segment Tree."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Query"}),": Query a specific range of the array for a sum, minimum, maximum, or any other associative function."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"segment-tree-structure",children:"Segment Tree Structure"}),"\n",(0,r.jsx)(n.p,{children:"A Segment Tree is typically represented as a binary tree, where each node represents a segment (or range) of the array. The leaf nodes represent individual elements, and the internal nodes represent the result of the function (like sum, min, max) applied to the segment."}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s a basic implementation of a Segment Tree in JavaScript for range sum queries:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class SegmentTree {\n  constructor(arr) {\n    this.n = arr.length;\n    this.tree = new Array(2 * this.n);\n    this.build(arr);\n  }\n\n  // Build the Segment Tree\n  build(arr) {\n    // Insert leaf nodes in the tree\n    for (let i = 0; i < this.n; i++) {\n      this.tree[this.n + i] = arr[i];\n    }\n\n    // Build the tree by calculating parents\n    for (let i = this.n - 1; i > 0; i--) {\n      this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];\n    }\n  }\n\n  // Update the value at index i to newValue\n  update(index, newValue) {\n    index += this.n;\n    this.tree[index] = newValue;\n\n    // Recalculate the values in the tree\n    while (index > 1) {\n      index = Math.floor(index / 2);\n      this.tree[index] = this.tree[2 * index] + this.tree[2 * index + 1];\n    }\n  }\n\n  // Query the sum of values in range [left, right)\n  query(left, right) {\n    left += this.n; // add +1 to make the left query exclusive\n    right += this.n; // add +1 to make the query right inclusive\n    let sum = 0;\n\n    while (left < right) {\n      if (left % 2 === 1) {\n        sum += this.tree[left];\n        left++;\n      }\n      if (right % 2 === 1) {\n        right--;\n        sum += this.tree[right];\n      }\n      left = Math.floor(left / 2);\n      right = Math.floor(right / 2);\n    }\n\n    return sum;\n  }\n}\n\n// Example Usage\nconst arr = [1, 3, 5, 7, 9, 11];\nconst segTree = new SegmentTree(arr);\n\n// Querying the sum from index 1 to 4 (3 + 5 + 7)\nconsole.log(segTree.query(1, 4)); // Output: 15\n\n// Updating the value at index 2 to 6\nsegTree.update(2, 6);\n\n// Querying the sum from index 1 to 4 again (3 + 6 + 7)\nconsole.log(segTree.query(1, 4)); // Output: 16\n"})}),"\n",(0,r.jsx)(n.h2,{id:"segment-tree-on-2d-matrix",children:"Segment Tree on 2D Matrix"}),"\n",(0,r.jsx)(n.p,{children:"Given a 2D matrix, we want to perform two types of operations efficiently:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Update"}),": Change the value of a specific element in the matrix."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Range Query"}),": Find the sum of elements in a submatrix defined by its top-left and bottom-right corners."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"segment-tree-structure-1",children:"Segment Tree Structure"}),"\n",(0,r.jsx)(n.p,{children:"The 2D Segment Tree is a grid of Segment Trees, where each row has its own 1D Segment Tree to handle column operations. The main tree structure handles row operations."}),"\n",(0,r.jsx)(n.h2,{id:"implementation-1",children:"Implementation"}),"\n",(0,r.jsx)(n.p,{children:"Let's see how to implement a Segment Tree for a 2D grid in JavaScript."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Javascript",children:"class SegmentTree2D {\n  constructor(matrix) {\n    this.rows = matrix.length;\n    this.cols = matrix[0].length;\n    this.tree = Array.from({ length: 2 * this.rows }, () => Array(2 * this.cols).fill(0));\n    this.build(matrix);\n  }\n\n  build = (matrix) => {\n    // Initialize leaves with the matrix elements\n    for (let i = 0; i < this.rows; i++) {\n      for (let j = 0; j < this.cols; j++) {\n        this.tree[this.rows + i][this.cols + j] = matrix[i][j];\n      }\n    }\n\n    // Build tree for each row\n    for (let i = 0; i < this.rows; i++) {\n      for (let j = this.cols - 1; j > 0; j--) {\n        this.tree[this.rows + i][j] = this.tree[this.rows + i][2 * j] + this.tree[this.rows + i][2 * j + 1];\n      }\n    }\n\n    // Build tree for the columns\n    for (let i = this.rows - 1; i > 0; i--) {\n      for (let j = 0; j < 2 * this.cols; j++) {\n        this.tree[i][j] = this.tree[2 * i][j] + this.tree[2 * i + 1][j];\n      }\n    }\n  }\n\n  update = (row, col, value) => {\n    let r = row + this.rows;\n    let c = col + this.cols;\n    this.tree[r][c] = value;\n\n    // Update the row segment tree\n    while (c > 1) {\n      c = Math.floor(c / 2);\n      this.tree[r][c] = this.tree[r][2 * c] + this.tree[r][2 * c + 1];\n    }\n\n    // Update the column segment tree\n    while (r > 1) {\n      r = Math.floor(r / 2);\n      c = col + this.cols;\n      while (c > 0) {\n        this.tree[r][c] = this.tree[2 * r][c] + this.tree[2 * r + 1][c];\n        c = Math.floor(c / 2);\n      }\n    }\n  }\n\n  query(row1, col1, row2, col2) {\n    let sum = 0;\n\n    // Adjust row range to include all leaves\n    row1 += this.rows;\n    row2 += this.rows + 1;\n\n    while (row1 < row2) {\n      if (row1 % 2 === 1) {\n        sum += this.#queryRow(row1++, col1, col2);\n      }\n      if (row2 % 2 === 1) {\n        sum += this.#queryRow(--row2, col1, col2);\n      }\n      row1 = Math.floor(row1 / 2);\n      row2 = Math.floor(row2 / 2);\n    }\n\n    return sum;\n  }\n\n  #queryRow = (row, col1, col2) => {\n    let sum = 0;\n    col1 += this.cols;\n    col2 += this.cols + 1;\n\n    while (col1 < col2) {\n      if (col1 % 2 === 1) {\n        sum += this.tree[row][col1++];\n      }\n      if (col2 % 2 === 1) {\n        sum += this.tree[row][--col2];\n      }\n      col1 = Math.floor(col1 / 2);\n      col2 = Math.floor(col2 / 2);\n    }\n\n    return sum;\n  }\n}\n\n// Example usage:\nconst matrix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\n\nconst segTree2D = new SegmentTree2D(matrix);\nconsole.log(segTree2D.query(1, 1, 2, 2)); // Output: 28 (sum of submatrix [[5, 6], [8, 9]])\nsegTree2D.update(2, 2, 10);\nconsole.log(segTree2D.query(1, 1, 2, 2)); // Output: 29 (sum of submatrix [[5, 6], [8, 10]])\n"})}),"\n",(0,r.jsx)(n.h1,{id:"range-queries-problems",children:"Range Queries Problems"}),"\n",(0,r.jsx)(n.h3,{id:"1d-range-queries",children:"1D Range Queries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/range-sum-query-mutable/description/",children:"Range Sum Query - Mutable"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/range-sum-query-immutable/description/",children:"Range Sum Query - Immutable"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2d-range-queries",children:"2D Range Queries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/range-sum-query-2d-mutable/description/",children:"Range Sum Query 2D - Mutable"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"range-module",children:"Range Module"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/range-module/description/",children:"Range Module"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"counting-problems",children:"Counting Problems"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/count-of-smaller-numbers-after-self/",children:"Count of Smaller Numbers After Self"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);