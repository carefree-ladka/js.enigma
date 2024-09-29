"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9193],{8224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const i={title:"Stack"},a="Stack Pattern",o={id:"tutorial-basics/Stack",title:"Stack",description:"Introduction",source:"@site/docs/tutorial-basics/Stack.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Stack",permalink:"/js.enigma/docs/tutorial-basics/Stack",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/Stack.mdx",tags:[],version:"current",frontMatter:{title:"Stack"},sidebar:"tutorialSidebar",previous:{title:"Fast and Slow Pointers Technique",permalink:"/js.enigma/docs/tutorial-basics/SlowFastPointer"},next:{title:"Topological Sort Tutorial",permalink:"/js.enigma/docs/tutorial-basics/TopologicalSort"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Key Operations",id:"key-operations",level:2},{value:"Stack Implementation Using a LinkedList",id:"stack-implementation-using-a-linkedlist",level:3},{value:"Common Patterns",id:"common-patterns",level:2},{value:"1. Balanced Parentheses",id:"1-balanced-parentheses",level:3},{value:"Introduction",id:"introduction-1",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Table of Variations",id:"table-of-variations",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Applications",id:"applications",level:2},{value:"1. Next Greater Element",id:"1-next-greater-element",level:3},{value:"Monotonic Stack Pattern Template",id:"monotonic-stack-pattern-template",level:3},{value:"Stack Problems",id:"stack-problems",level:2},{value:"Monotonic Stack Problems",id:"monotonic-stack-problems",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"stack-pattern",children:"Stack Pattern"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Stacks are a fundamental data structure that follows the Last In, First Out (LIFO) principle. This means that the most recently added element is the first one to be removed. Stacks are used in various algorithms and problems, such as parsing expressions, managing function calls, and backtracking."}),"\n",(0,r.jsx)(n.h2,{id:"key-operations",children:"Key Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Push"}),": Add an element to the top of the stack."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pop"}),": Remove the element from the top of the stack."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Peek"}),": View the top element of the stack without removing it."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"isEmpty"}),": Check if the stack is empty."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"stack-implementation-using-a-linkedlist",children:"Stack Implementation Using a LinkedList"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:"// Node class represents each element in the stack\r\nclass Node {\r\n  constructor(value, next = null) {\r\n    this.value = value; // The value stored in the node\r\n    this.next = next;   // Reference to the next node in the stack\r\n  }\r\n}\r\n\r\n// Stack class manages the stack operations using a linked list\r\nclass Stack {\r\n  constructor() {\r\n    this.top = null; // Points to the top node in the stack\r\n    this.size = 0;   // Tracks the number of elements in the stack\r\n  }\r\n\r\n  // Adds a new value to the top of the stack\r\n  push(value) {\r\n    this.top = new Node(value, this.top); // Create a new node pointing to the current top\r\n    this.size++; // Increment the size of the stack\r\n  }\r\n\r\n  // Removes and returns the value from the top of the stack\r\n  pop() {\r\n    if (!this.top) return null; // If the stack is empty, return null\r\n    const value = this.top.value; // Get the value of the top node\r\n    this.top = this.top.next; // Move the top pointer to the next node\r\n    this.size--; // Decrement the size of the stack\r\n    return value; // Return the value of the popped node\r\n  }\r\n\r\n  // Returns the value at the top of the stack without removing it\r\n  peek() {\r\n    return this.top ? this.top.value : null; // Return top value or null if stack is empty\r\n  }\r\n\r\n  // Checks if the stack is empty\r\n  isEmpty() {\r\n    return !this.top; // Returns true if top is null\r\n  }\r\n\r\n  // Returns the current size of the stack\r\n  getSize() {\r\n    return this.size; // Return the number of elements in the stack\r\n  }\r\n}\r\n\r\n// Example usage:\r\nconst stack = new Stack();\r\nstack.push(10); // Add 10 to the stack\r\nstack.push(20); // Add 20 to the stack\r\nstack.push(30); // Add 30 to the stack\r\n\r\nconsole.log(stack.peek()); // 30 (top value)\r\nconsole.log(stack.pop());  // 30 (removes and returns the top value)\r\nconsole.log(stack.getSize()); // 2 (size of the stack after pop)\r\nconsole.log(stack.isEmpty()); // false (stack is not empty)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"common-patterns",children:"Common Patterns"}),"\n",(0,r.jsx)(n.h3,{id:"1-balanced-parentheses",children:"1. Balanced Parentheses"}),"\n",(0,r.jsx)(n.p,{children:"Stacks are often used to validate balanced parentheses in expressions. The basic idea is to push each opening parenthesis onto the stack and pop from the stack when a closing parenthesis is encountered. If the stack is empty at the end, the parentheses are balanced."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Example Problem: ",(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/valid-parentheses/",children:"Valid Parentheses"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function isValid(s) {\r\n    const stack = [];\r\n    const map = { ')': '(', '}': '{', ']': '[' };\r\n\r\n    for (let char of s) {\r\n        if (map[char]) {\r\n            if (stack.pop() !== map[char]) return false;\r\n        } else {\r\n            stack.push(char);\r\n        }\r\n    }\r\n    return stack.length === 0;\r\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"monotonic-stack",children:"Monotonic Stack"}),"\n",(0,r.jsx)("img",{src:"https://assets.leetcode.com/users/images/3b666e9c-4200-4245-bce8-7d7e81649f8f_1659039679.8631365.png",alt:"monotonic stack",loading:"lazy"}),"\n",(0,r.jsxs)(n.p,{children:["Image Source By: (",(0,r.jsx)(n.a,{href:"https://leetcode.com/u/darkalarm/",children:"https://leetcode.com/u/darkalarm/"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"introduction-1",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"A monotonic stack is a stack that maintains a specific order of its elements. It can be either monotonic increasing or monotonic decreasing, depending on the problem requirements. This type of stack is useful for solving problems involving ordered data efficiently."}),"\n",(0,r.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Monotonic Increasing Stack"}),": Maintains elements in increasing order from top to bottom. Useful for finding the next smaller element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Monotonic Decreasing Stack"}),": Maintains elements in decreasing order from top to bottom. Useful for finding the next greater element."]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"monotonic-stack-variations",children:"Monotonic Stack Variations"}),"\n",(0,r.jsx)(n.p,{children:"Monotonic stacks are used to solve problems involving ordered data by maintaining a specific order of elements. The table below summarizes various monotonic stack types and their typical use cases."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-variations",children:"Table of Variations"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Stack Type"}),(0,r.jsx)(n.th,{children:"Order Maintained"}),(0,r.jsx)(n.th,{children:"Use Case"}),(0,r.jsx)(n.th,{children:"Example Problem"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Increasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in increasing order"}),(0,r.jsx)(n.td,{children:"Finding the next smaller element"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-smaller-element-i/",children:"Next Smaller Element I"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Decreasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in decreasing order"}),(0,r.jsx)(n.td,{children:"Finding the next greater element"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-i/",children:"Next Greater Element I"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Increasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in increasing order"}),(0,r.jsx)(n.td,{children:"Finding the maximum rectangle in histogram"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/largest-rectangle-in-histogram/",children:"Largest Rectangle in Histogram"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Decreasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in decreasing order"}),(0,r.jsx)(n.td,{children:"Finding the next greater element in a circular array"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-ii/",children:"Next Greater Element II"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Decreasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in decreasing order"}),(0,r.jsx)(n.td,{children:"Finding the minimum number of operations needed to reduce to zero"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/trapping-rain-water/",children:"Trapping Rain Water"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Increasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in increasing order"}),(0,r.jsx)(n.td,{children:"Checking for valid parentheses or balanced expressions"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/valid-parentheses/",children:"Valid Parentheses"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Monotonic Decreasing Stack"})}),(0,r.jsx)(n.td,{children:"Elements in decreasing order"}),(0,r.jsx)(n.td,{children:"Finding the next smaller element in a circular array"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-smaller-element-ii/",children:"Next Smaller Element II"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Monotonic Increasing Stack"}),": This stack maintains elements in increasing order from top to bottom. It's useful for problems where you need to find the next smaller element or the maximum rectangle in a histogram."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Monotonic Decreasing Stack"}),": This stack maintains elements in decreasing order from top to bottom. It's helpful for problems where you need to find the next greater element or solve problems related to trapped water."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,r.jsx)(n.h3,{id:"1-next-greater-element",children:"1. Next Greater Element"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Problem"}),": Given an array of integers, find the next greater element for each element. If no such element exists, output -1."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Solution"}),": Use a monotonic decreasing stack to track elements in decreasing order. Iterate through the array from left to right. For each element, pop from the stack until the top of the stack is greater than the current element. The top of the stack is the next greater element for the current element."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example Problem"}),": ",(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-i/",children:"Next Greater Element I"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function nextGreaterElements(nums) {\r\n    const stack = [];\r\n    const result = Array(nums.length).fill(-1);\r\n\r\n    for (let i = 0; i < nums.length * 2; i++) {\r\n        const num = nums[i % nums.length];\r\n        while (stack.length && nums[stack[stack.length - 1]] < num) {\r\n            result[stack.pop()] = num;\r\n        }\r\n        if (i < nums.length) stack.push(i);\r\n    }\r\n\r\n    return result;\r\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"monotonic-stack-pattern-template",children:"Monotonic Stack Pattern Template"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:"const CASES = Object.freeze({\r\n  'NEXT_GREATER': 'NEXT_GREATER',\r\n  'PREV_GREATER': 'PREV_GREATER',\r\n  'NEXT_SMALLER': 'NEXT_SMALLER',\r\n  'PREV_SMALLER': 'PREV_SMALLER'\r\n})\r\n\r\n\r\nfunction monotonicStackTemplate(arr, type) {\r\n  let result = new Array(arr.length).fill(-1);\r\n  let stack = [];\r\n\r\n  for (let i = 0; i < arr.length; i++) {\r\n    let condition;\r\n    let assignmentPos;\r\n\r\n    switch (type) {\r\n      case CASES.NEXT_GREATER:\r\n        condition = () => stack.length && arr[stack[stack.length - 1]] < arr[i];\r\n        assignmentPos = 'inside';\r\n        break;\r\n      case CASES.PREV_GREATER:\r\n        condition = () => stack.length && arr[stack[stack.length - 1]] <= arr[i];\r\n        assignmentPos = 'outside';\r\n        break;\r\n      case CASES.NEXT_SMALLER:\r\n        condition = () => stack.length && arr[stack[stack.length - 1]] > arr[i];\r\n        assignmentPos = 'inside';\r\n        break;\r\n      case CASES.PREV_SMALLER:\r\n        condition = () => stack.length && arr[stack[stack.length - 1]] >= arr[i];\r\n        assignmentPos = 'outside';\r\n        break;\r\n      default:\r\n        throw new Error('Invalid type');\r\n    }\r\n\r\n    while (condition()) {\r\n      let index = stack.pop();\r\n      if (assignmentPos === 'inside') {\r\n        result[index] = arr[i];\r\n      }\r\n    }\r\n\r\n    if (assignmentPos === 'outside' && stack.length) {\r\n      result[i] = arr[stack.at(-1)];\r\n    }\r\n\r\n    stack.push(i);\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\n// Example usage:\r\nconst arr = [4, 5, 2, 10, 8];\r\n\r\nconsole.log(monotonicStackTemplate(arr, CASES.NEXT_GREATER)); // Output: [5, 10, 10, -1, -1]\r\nconsole.log(monotonicStackTemplate(arr, CASES.PREV_GREATER)); // Output: [-1, -1, 5, -1, 10]\r\nconsole.log(monotonicStackTemplate(arr, CASES.NEXT_SMALLER)); // Output: [2, 2, -1, 8, -1]\r\nconsole.log(monotonicStackTemplate(arr, CASES.PREV_SMALLER)); // Output: [-1, 4, -1, 2, 2]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"stack-problems",children:"Stack Problems"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/valid-parentheses/",children:"Valid Parentheses"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/min-stack/",children:"Min Stack"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/generate-parentheses/",children:"Generate Parentheses"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"monotonic-stack-problems",children:"Monotonic Stack Problems"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/daily-temperatures/",children:"Daily Temperatures"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-i/",children:"Next Greater Element I"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-ii/",children:"Next Greater Element II"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/next-greater-element-iii/",children:"Next Greater Element III"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/sum-of-subarray-ranges/",children:"Sum of Subarray Ranges"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/remove-nodes-from-linked-list/",children:"Remove Nodes From Linked List"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/trapping-rain-water/",children:"Trapping Rain Water"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/largest-rectangle-in-histogram/",children:"Largest Rectangle in Histogram"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);