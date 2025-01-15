"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9005],{6268:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(4848),t=i(8453);const s={title:"Sliding Window Technique"},a=void 0,o={id:"DSA/SlidingWindow",title:"Sliding Window Technique",description:"Sliding Window Technique",source:"@site/docs/DSA/SlidingWindow.mdx",sourceDirName:"DSA",slug:"/DSA/SlidingWindow",permalink:"/js.enigma/docs/DSA/SlidingWindow",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/SlidingWindow.mdx",tags:[],version:"current",frontMatter:{title:"Sliding Window Technique"},sidebar:"tutorialSidebar",previous:{title:"Sieve of Eratosthenes",permalink:"/js.enigma/docs/DSA/SieveOfEratosthenes"},next:{title:"Fast and Slow Pointers Technique",permalink:"/js.enigma/docs/DSA/SlowFastPointer"}},l={},d=[{value:"Sliding Window Technique",id:"sliding-window-technique",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Types of Sliding Window Techniques",id:"types-of-sliding-window-techniques",level:3},{value:"Algorithm Overview",id:"algorithm-overview",level:3},{value:"Fixed-Size Window Example",id:"fixed-size-window-example",level:3},{value:"Other Variations to Write Sliding Window",id:"other-variations-to-write-sliding-window",level:3},{value:"Variable-Size Window Example",id:"variable-size-window-example",level:3},{value:"Sliding Window Problems",id:"sliding-window-problems",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"sliding-window-technique",children:"Sliding Window Technique"}),"\n",(0,r.jsx)(n.p,{children:'The Sliding Window technique is a powerful approach used to solve problems involving sequences, substrings, or subarrays efficiently. It optimizes the process of examining or modifying contiguous segments of an array or string by maintaining a window of fixed or variable size that "slides" across the data.'}),"\n",(0,r.jsx)(n.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(n.p,{children:"The Sliding Window technique is commonly applied to problems where you need to find the maximum, minimum, or other aggregated value of a contiguous segment within an array or string, or where you need to identify specific patterns or conditions."}),"\n",(0,r.jsx)(n.h3,{id:"types-of-sliding-window-techniques",children:"Types of Sliding Window Techniques"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fixed-Size Window"}),": The window has a constant size and moves through the data. Useful for problems like finding the maximum sum of any subarray of size ",(0,r.jsx)(n.code,{children:"k"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Variable-Size Window"}),": The window size is adjusted dynamically based on certain conditions. Useful for problems like finding the smallest substring containing all characters of a given set."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"algorithm-overview",children:"Algorithm Overview"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Initialization"}),": Set up pointers or indices to represent the current window."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Expand Window"}),": Extend the window by moving the end pointer or index."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Contract Window"}),": Shrink the window by moving the start pointer or index when necessary."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Update Result"}),": Perform calculations or checks within the window to maintain or update the result."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"fixed-size-window-example",children:"Fixed-Size Window Example"}),"\n",(0,r.jsxs)(n.p,{children:["Find the maximum sum of any subarray of size ",(0,r.jsx)(n.code,{children:"k"})," in a given array:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\r\n * Find the maximum sum of any subarray of size k.\r\n * @param {number[]} arr - The input array.\r\n * @param {number} k - The size of the subarray.\r\n * @return {number} - The maximum sum of any subarray of size k.\r\n */\r\nconst maxSumSubarray = (arr, k) => {\r\n  let maxSum = 0;\r\n  let windowSum = 0;\r\n\r\n  // Compute the sum of the first window\r\n  for (let i = 0; i < k; i++) {\r\n    windowSum += arr[i];\r\n  }\r\n  maxSum = windowSum;\r\n\r\n  // Slide the window across the array\r\n  for (let i = k; i < arr.length; i++) {\r\n    windowSum += arr[i] - arr[i - k];\r\n    maxSum = Math.max(maxSum, windowSum);\r\n  }\r\n\r\n  return maxSum;\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"other-variations-to-write-sliding-window",children:"Other Variations to Write Sliding Window"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:"const maxSumSubarray = (nums = [], k) => {\r\n  let max = -Infinity\r\n  let sum = 0\r\n  let left = 0\r\n\r\n  for (let i = 0; i < nums.length; i++) {\r\n    sum += nums[i]\r\n\r\n    if (i + left - 1 === k) {\r\n      max = Math.max(max, sum)\r\n      sum -= nums[left++]\r\n    }\r\n  }\r\n\r\n  return max\r\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:"const maxSumSubarray = (arr, k) => {\r\n  let maxSum = 0;\r\n  let windowSum = 0;\r\n\r\n  // Slide the window from start to end\r\n  for (let i = 0; i < arr.length; i++) {\r\n    windowSum += arr[i]\r\n    if (i >= k - 1) {\r\n      maxSum = Math.max(maxSum, windowSum);\r\n      windowSum -= arr[i - k + 1]\r\n    }\r\n  }\r\n\r\n  return maxSum;\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"variable-size-window-example",children:"Variable-Size Window Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:"/**\r\n * Find the maximum sum of any subarray with length between minLen and maxLen.\r\n * @param {number[]} arr - The input array.\r\n * @param {number} minLen - Minimum length of the subarray.\r\n * @param {number} maxLen - Maximum length of the subarray.\r\n * @return {number} - The maximum sum of any valid subarray.\r\n */\r\nconst maxSumSubarrayVariableSize = (arr, minLen, maxLen) => {\r\n  let start = 0;\r\n  let end = 0;\r\n  let currentSum = 0;\r\n  let maxSum = -Infinity;\r\n\r\n  while (end < arr.length) {\r\n    // Expand the window by including arr[end]\r\n    currentSum += arr[end];\r\n\r\n    // Ensure the window size is within the specified range\r\n    if (end - start + 1 > maxLen) {\r\n      currentSum -= arr[start];\r\n      start++;\r\n    }\r\n\r\n    // Update maxSum if the current window size is within the range\r\n    if (end - start + 1 >= minLen) {\r\n      maxSum = Math.max(maxSum, currentSum);\r\n    }\r\n\r\n    // Move the end pointer to expand the window\r\n    end++;\r\n  }\r\n\r\n  return maxSum;\r\n}\r\n\r\n// Example usage:\r\nconst arr = [1, 2, 3, 4, 5, 6, 7];\r\nconst minLen = 2;\r\nconst maxLen = 4;\r\n\r\nconsole.log(maxSumSubarrayVariableSize(arr, minLen, maxLen)); // Output: 22\r\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sliding-window-problems",children:"Sliding Window Problems"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",children:"Longest Substring Without Repeating Characters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/",children:"Longest Substring with At Least K Repeating Characters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/description/",children:"Longest Substring with At Most K Distinct Characters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-repeating-character-replacement/description/",children:"Longest Repeating Character Replacement"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/max-consecutive-ones-iii/description/",children:"Max Consecutive Ones III"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/",children:"Maximum Sum of Distinct Subarrays with Length K"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/",children:"Longest Substring with At Most Two Distinct Characters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/sliding-window-maximum/description/",children:"Sliding Window Maximum"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/max-consecutive-ones-ii/description",children:"Max Consecutive Ones II"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-average-subarray-i",children:"Maximum Average Subarray I"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/fruit-into-baskets/description",children:"Fruit Into Baskets"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/longest-nice-subarray/description/",children:"Longest Nice Subarray"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);