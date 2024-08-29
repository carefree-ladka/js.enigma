"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3240],{3861:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=i(4848),t=i(8453);i(2364);const s={title:"Prefix Sum",description:"A comprehensive guide to understanding and implementing Prefix Sum."},o="Prefix Sum",l={id:"tutorial-basics/PrefixSum",title:"Prefix Sum",description:"A comprehensive guide to understanding and implementing Prefix Sum.",source:"@site/docs/tutorial-basics/PrefixSum.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/PrefixSum",permalink:"/js.enigma/docs/tutorial-basics/PrefixSum",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/PrefixSum.mdx",tags:[],version:"current",frontMatter:{title:"Prefix Sum",description:"A comprehensive guide to understanding and implementing Prefix Sum."},sidebar:"tutorialSidebar",previous:{title:"Path Sum (Binary Tree)",permalink:"/js.enigma/docs/tutorial-basics/PathSumBinaryTree"},next:{title:"Queue",permalink:"/js.enigma/docs/tutorial-basics/Queue"}},u={},a=[{value:"How Prefix Sum Works",id:"how-prefix-sum-works",level:2},{value:"Pseudocode",id:"pseudocode",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Prefix Sum Array",id:"prefix-sum-array",level:2},{value:"Prefix Sum Formula",id:"prefix-sum-formula",level:3},{value:"Implementation",id:"implementation",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"prefix-sum",children:"Prefix Sum"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"Prefix Sum"})," is a technique used to simplify the computation of the sum of elements in a subarray. It is particularly useful in problems involving multiple queries about subarray sums, where recalculating the sum from scratch each time would be inefficient."]}),"\n",(0,n.jsx)(r.h2,{id:"how-prefix-sum-works",children:"How Prefix Sum Works"}),"\n",(0,n.jsxs)(r.p,{children:["The idea behind the prefix sum is to preprocess an array so that each element at index ",(0,n.jsx)(r.code,{children:"i"})," in a new array represents the sum of elements from the start of the array up to index ",(0,n.jsx)(r.code,{children:"i"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"pseudocode",children:"Pseudocode"}),"\n",(0,n.jsx)(r.p,{children:"Here\u2019s the pseudocode to compute the prefix sum array:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Javascript",children:'// Function to compute the prefix sum array\r\nfunction computePrefixSum(arr) {\r\n    const prefixSum = new Array(arr.length).fill(0);\r\n    prefixSum[0] = arr[0];\r\n    \r\n    for (let i = 1; i < arr.length; i++) {\r\n        prefixSum[i] = prefixSum[i - 1] + arr[i];\r\n    }\r\n    \r\n    return prefixSum;\r\n}\r\n\r\n// Function to calculate the sum of elements between indices l and r\r\nfunction subarraySum(prefixSum, l, r) {\r\n    if (l === 0) return prefixSum[r];\r\n    return prefixSum[r] - prefixSum[l - 1];\r\n}\r\n\r\n// Example usage:\r\nconst arr = [1, 2, 3, 4, 5];\r\nconst prefixSum = computePrefixSum(arr);\r\n\r\nconsole.log("Prefix Sum Array:", prefixSum); // Output: [1, 3, 6, 10, 15]\r\n\r\nconst sum = subarraySum(prefixSum, 1, 3);\r\nconsole.log("Sum of subarray arr[1..3]:", sum); // Output: 9\n'})}),"\n",(0,n.jsx)(r.h1,{id:"prefix-sum-on-2d-grid",children:"Prefix Sum on 2D Grid"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Prefix Sum"})," is a simple yet powerful technique to calculate the sum of elements in a submatrix of a 2D grid efficiently. By precomputing the sums of all submatrices that start at the top-left corner and extend to any other cell, we can quickly answer range sum queries."]}),"\n",(0,n.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(r.p,{children:"Given a 2D matrix, we want to perform two types of operations efficiently:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Precompute"}),": Precompute the sum of elements for all submatrices."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Range Query"}),": Find the sum of elements in a submatrix defined by its top-left and bottom-right corners."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"prefix-sum-array",children:"Prefix Sum Array"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"Prefix Sum Array"})," for a 2D grid is constructed by summing all the elements from the top-left corner (0, 0) to any cell (i, j). The value at any cell ",(0,n.jsx)(r.code,{children:"(i, j)"})," in the prefix sum array represents the sum of all elements from ",(0,n.jsx)(r.code,{children:"(0, 0)"})," to ",(0,n.jsx)(r.code,{children:"(i, j)"})," in the original matrix."]}),"\n",(0,n.jsx)(r.h3,{id:"prefix-sum-formula",children:"Prefix Sum Formula"}),"\n",(0,n.jsxs)(r.p,{children:["To calculate the sum of elements in any submatrix defined by ",(0,n.jsx)(r.code,{children:"(row1, col1)"})," to ",(0,n.jsx)(r.code,{children:"(row2, col2)"}),", we use the following formula:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Prefix[row2][col2]"})}),": Sum of elements from ",(0,n.jsx)(r.code,{children:"(0, 0)"})," to ",(0,n.jsx)(r.code,{children:"(row2, col2)"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"- Prefix[row1-1][col2]"})}),": Subtract the sum above ",(0,n.jsx)(r.code,{children:"row1"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"- Prefix[row2][col1-1]"})}),": Subtract the sum left of ",(0,n.jsx)(r.code,{children:"col1"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"+ Prefix[row1-1][col1-1]"})}),": Add back the overlapping top-left region."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(r.p,{children:"Let's see how to implement a 2D prefix sum in JavaScript."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Javascript",children:"class NumMatrix {\r\n    constructor(matrix) {\r\n        const rows = matrix.length;\r\n        const cols = matrix[0].length;\r\n        this.prefixSum = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));\r\n\r\n        // Compute the prefix sum matrix\r\n        for (let i = 1; i <= rows; i++) {\r\n            for (let j = 1; j <= cols; j++) {\r\n                this.prefixSum[i][j] = matrix[i - 1][j - 1] \r\n                                       + this.prefixSum[i - 1][j]\r\n                                       + this.prefixSum[i][j - 1]\r\n                                       - this.prefixSum[i - 1][j - 1];\r\n            }\r\n        }\r\n    }\r\n\r\n    sumRegion(row1, col1, row2, col2) {\r\n        return this.prefixSum[row2 + 1][col2 + 1]\r\n             - this.prefixSum[row1][col2 + 1]\r\n             - this.prefixSum[row2 + 1][col1]\r\n             + this.prefixSum[row1][col1];\r\n    }\r\n}\r\n\r\n// Example usage:\r\nconst matrix = [\r\n    [3, 0, 1, 4, 2],\r\n    [5, 6, 3, 2, 1],\r\n    [1, 2, 0, 1, 5],\r\n    [4, 1, 0, 1, 7],\r\n    [1, 0, 3, 0, 5]\r\n];\r\n\r\nconst numMatrix = new NumMatrix(matrix);\r\nconsole.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8\r\nconsole.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11\r\nconsole.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12\n"})})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);