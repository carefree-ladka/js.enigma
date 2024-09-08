"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2704],{1224:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=i(4848),r=i(8453);const l={title:"Dynamic Programming"},t=void 0,o={id:"tutorial-basics/DynamicProgramming",title:"Dynamic Programming",description:"Dynamic Programming (DP) is a technique used for solving complex problems by breaking them down into simpler overlapping subproblems. It involves storing the results of these subproblems to avoid redundant computations. There are two main approaches to implementing DP: Top-Down and Bottom-Up.",source:"@site/docs/tutorial-basics/DynamicProgramming.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/DynamicProgramming",permalink:"/js.enigma/docs/tutorial-basics/DynamicProgramming",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/DynamicProgramming.mdx",tags:[],version:"current",frontMatter:{title:"Dynamic Programming"},sidebar:"tutorialSidebar",previous:{title:"Dutch National Flag Algorithm",permalink:"/js.enigma/docs/tutorial-basics/DutchNationalFlag"},next:{title:"Euclid's Algorithm for Greatest Common Divisor (GCD)",permalink:"/js.enigma/docs/tutorial-basics/Euclid"}},c={},a=[{value:"Top-Down Approach (Memoization)",id:"top-down-approach-memoization",level:2},{value:"Steps",id:"steps",level:3},{value:"Example: Fibonacci Numbers",id:"example-fibonacci-numbers",level:3},{value:"Bottom-Up Approach (Tabulation)",id:"bottom-up-approach-tabulation",level:2},{value:"Steps",id:"steps-1",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Fibonacci Style",id:"fibonacci-style",level:2},{value:"Matrix",id:"matrix",level:2},{value:"On Strings",id:"on-strings",level:2},{value:"Longest Increasing Subsequence",id:"longest-increasing-subsequence",level:2},{value:"Longest Common Subsequence",id:"longest-common-subsequence",level:2},{value:"Best Time to Buy &amp; Sell Stock / State Machine",id:"best-time-to-buy--sell-stock--state-machine",level:2},{value:"On Trees",id:"on-trees",level:2},{value:"Knapsack",id:"knapsack",level:2},{value:"General 1D",id:"general-1d",level:2},{value:"2D Grid DP Problems",id:"2d-grid-dp-problems",level:2},{value:"3D Grid DP Problems",id:"3d-grid-dp-problems",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Dynamic Programming (DP) is a technique used for solving complex problems by breaking them down into simpler overlapping subproblems. It involves storing the results of these subproblems to avoid redundant computations. There are two main approaches to implementing DP: ",(0,s.jsx)(n.strong,{children:"Top-Down"})," and ",(0,s.jsx)(n.strong,{children:"Bottom-Up"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"top-down-approach-memoization",children:"Top-Down Approach (Memoization)"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Top-Down"})," approach, also known as ",(0,s.jsx)(n.strong,{children:"Memoization"}),", the problem is solved by recursively breaking it down into subproblems. Each subproblem's result is stored in a data structure (like an array or hash map) to avoid redundant calculations."]}),"\n",(0,s.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Recursive Definition"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Define the problem recursively in terms of smaller subproblems."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Memoization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use a data structure (memoization table) to store the results of subproblems."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Recursion"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Solve the problem by making recursive calls and using the memoized results."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-fibonacci-numbers",children:"Example: Fibonacci Numbers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function fibonacci(n, memo = {}) {\r\n  if (n in memo) return memo[n];\r\n  if (n <= 1) return n;\r\n  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);\r\n  return memo[n];\r\n}\r\n\r\n// Example usage\r\nconsole.log(fibonacci(10)); // Output: 55\n"})}),"\n",(0,s.jsx)(n.h2,{id:"bottom-up-approach-tabulation",children:"Bottom-Up Approach (Tabulation)"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Bottom-Up approach"}),", also known as Tabulation, the problem is solved by iteratively building up solutions to subproblems starting from the smallest subproblems. Results are stored in a table to build up the final solution."]}),"\n",(0,s.jsx)(n.h2,{id:"steps-1",children:"Steps"}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize a table to store solutions to subproblems.\r\nIteration:"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Solve smaller subproblems iteratively and store their results in the table.\r\nBuild Solution:"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the results of smaller subproblems to build up the solution to the larger problem.\r\nExample: Fibonacci Numbers"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"function fibonacci(n) {\r\n  if (n <= 1) return n;\r\n  const dp = new Array(n + 1);\r\n  dp[0] = 0;\r\n  dp[1] = 1;\r\n\r\n  for (let i = 2; i <= n; i++) {\r\n    dp[i] = dp[i - 1] + dp[i - 2];\r\n  }\r\n\r\n  return dp[n];\r\n}\r\n\r\n// Example usage\r\nconsole.log(fibonacci(10)); // Output: 55\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"dynamic-programming-problems",children:"Dynamic Programming Problems"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"fibonacci-style",children:"Fibonacci Style"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/climbing-stairs/",children:"Climbing Stairs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/fibonacci-number/",children:"Fibonacci Number"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/n-th-tribonacci-number/",children:"Nth Tribonacci Number"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/min-cost-climbing-stairs/",children:"Min Cost Climbing Stairs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/house-robber/",children:"House Robber"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/delete-and-earn/",children:"Delete and Earn"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.geeksforgeeks.org/problems/geek-jump/0",children:"Geek Jump (GeeksforGeeks)"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"matrix",children:"Matrix"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/unique-paths/",children:"Unique Paths"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-path-sum/",children:"Minimum Path Sum"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/unique-paths-ii/",children:"Unique Paths II"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/triangle/",children:"Triangle"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-falling-path-sum/",children:"Minimum Falling Path Sum"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/maximal-square/",children:"Maximal Square"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"on-strings",children:"On Strings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-palindromic-substring/",children:"Longest Palindromic Substring"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/word-break/description",children:"Word Break"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-palindromic-subsequence/",children:"Longest Palindromic Subsequence"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/edit-distance/description",children:"Edit Distance"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",children:"Minimum ASCII Delete Sum for Two Strings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/distinct-subsequences/",children:"Distinct Subsequences"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"longest-increasing-subsequence",children:"Longest Increasing Subsequence"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-increasing-subsequence/",children:"Longest Increasing Subsequence"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence/",children:"Number of Longest Increasing Subsequence"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-length-of-pair-chain/",children:"Maximum Length of Pair Chain"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",children:"Longest Arithmetic Subsequence of Given Difference"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-arithmetic-subsequence/",children:"Longest Arithmetic Subsequence"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/russian-doll-envelopes/",children:"Russian Doll Envelopes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/",children:"Find the Longest Valid Obstacle Course at Each Position"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"longest-common-subsequence",children:"Longest Common Subsequence"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-common-subsequence/",children:"Longest Common Subsequence"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/uncrossed-lines/",children:"Uncrossed Lines"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",children:"Minimum Insertion Steps to Make a String Palindrome"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-time-to-buy--sell-stock--state-machine",children:"Best Time to Buy & Sell Stock / State Machine"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description",children:"Best Time to Buy and Sell Stock with Cooldown"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",children:"Best Time to Buy and Sell Stock"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-subarray/",children:"Maximum Subarray"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",children:"Best Time to Buy and Sell Stock with Transaction Fee"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",children:"Best Time to Buy and Sell Stock III"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",children:"Best Time to Buy and Sell Stock IV"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"on-trees",children:"On Trees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/unique-binary-search-trees/description",children:"Unique Binary Search Trees"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/unique-binary-search-trees-ii/",children:"Unique Binary Search Trees II"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/house-robber-iii/",children:"House Robber III"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",children:"Binary Tree Maximum Path Sum"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"knapsack",children:"Knapsack"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/perfect-squares/",children:"Perfect Squares"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/coin-change-ii/",children:"Coin Change II"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/combination-sum-iv/",children:"Combination Sum IV"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/ones-and-zeroes/",children:"Ones and Zeroes"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"general-1d",children:"General 1D"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/solving-questions-with-brainpower/",children:"Solving Questions With Brainpower"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/coin-change/description",children:"Coin Change"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/count-ways-to-build-good-strings/",children:"Count Ways to Build Good Strings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-cost-for-tickets/description",children:"Minimum Cost For Tickets"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/domino-and-tromino-tiling/",children:"Domino and Tromino Tiling"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/decode-ways/description",children:"Decode Ways"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2d-grid-dp-problems",children:"2D Grid DP Problems"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/unique-paths/",children:"Unique Paths"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-path-sum/",children:"Minimum Path Sum"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/unique-paths-ii/",children:"Unique Paths II"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/triangle/",children:"Triangle"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-falling-path-sum/",children:"Minimum Falling Path Sum"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/maximal-square/",children:"Maximal Square"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3d-grid-dp-problems",children:"3D Grid DP Problems"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/out-of-boundary-paths/",children:"Out of Boundary Paths"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",children:"Shortest Path in a Grid with Obstacles Elimination"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid/",children:"Minimum Path Cost in a Grid"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/cherry-pickup-ii/",children:"Cherry Pickup II"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/remove-boxes/",children:"Remove Boxes"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);