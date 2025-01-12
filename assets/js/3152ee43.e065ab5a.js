"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8663],{7760:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const s={title:"Dequeue"},l=void 0,o={id:"DSA/Dequeue",title:"Dequeue",description:"A Deque (Double-Ended Queue) is a data structure that allows insertion and deletion of elements from both ends.",source:"@site/docs/DSA/Dequeue.mdx",sourceDirName:"DSA",slug:"/DSA/Dequeue",permalink:"/js.enigma/docs/DSA/Dequeue",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/Dequeue.mdx",tags:[],version:"current",frontMatter:{title:"Dequeue"},sidebar:"tutorialSidebar",previous:{title:"Depth-First Search (DFS) for Trees",permalink:"/js.enigma/docs/DSA/DFSTree"},next:{title:"Difference Array Technique",permalink:"/js.enigma/docs/DSA/DifferenceArray"}},a={},d=[{value:"Dequeue using Array (Not Efficient)",id:"dequeue-using-array-not-efficient",level:3},{value:"Dequeue using DoublyLinkedList",id:"dequeue-using-doublylinkedlist",level:3},{value:"Frequently Asked LeetCode Problems Using Deque",id:"frequently-asked-leetcode-problems-using-deque",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Deque"})," (Double-Ended Queue) is a data structure that allows insertion and deletion of elements from both ends.\r\nThis implementation provides efficient O(1) operations for all the basic deque operations, leveraging the advantages of a doubly linked list"]}),"\n",(0,t.jsx)(n.h3,{id:"dequeue-using-array-not-efficient",children:"Dequeue using Array (Not Efficient)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"class Deque {\r\n    constructor() {\r\n        this.items = []; // Underlying array to store deque elements\r\n    }\r\n\r\n    // Add an item at the front\r\n    addFront(value) {\r\n        this.items.unshift(value); // Use unshift to add at the front\r\n    }\r\n\r\n    // Add an item at the rear\r\n    addRear(value) {\r\n        this.items.push(value); // Use push to add at the rear\r\n    }\r\n\r\n    // Remove an item from the front\r\n    removeFront() {\r\n        if (this.isEmpty()) {\r\n            return null; // Deque is empty\r\n        }\r\n        return this.items.shift(); // Use shift to remove from the front\r\n    }\r\n\r\n    // Remove an item from the rear\r\n    removeRear() {\r\n        if (this.isEmpty()) {\r\n            return null; // Deque is empty\r\n        }\r\n        return this.items.pop(); // Use pop to remove from the rear\r\n    }\r\n\r\n    // Get the size of the deque\r\n    getSize() {\r\n        return this.items.length; // Return the length of the array\r\n    }\r\n\r\n    // Check if the deque is empty\r\n    isEmpty() {\r\n        return this.items.length === 0; // Check if the array is empty\r\n    }\r\n\r\n    // Peek at the front item\r\n    peekFront() {\r\n        return this.isEmpty() ? null : this.items[0]; // Return the front item\r\n    }\r\n\r\n    // Peek at the rear item\r\n    peekRear() {\r\n        return this.isEmpty() ? null : this.items[this.items.length - 1]; // Return the rear item\r\n    }\r\n}\r\n\r\n// Example usage\r\nconst deque = new Deque();\r\ndeque.addFront(10);\r\ndeque.addRear(20);\r\nconsole.log(deque.peekFront()); // 10\r\nconsole.log(deque.peekRear());  // 20\r\nconsole.log(deque.removeFront()); // 10\r\nconsole.log(deque.removeRear());  // 20\r\nconsole.log(deque.isEmpty()); // true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dequeue-using-doublylinkedlist",children:"Dequeue using DoublyLinkedList"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"class Node {\r\n  constructor(value) {\r\n    this.value = value;\r\n    this.prev = null; // Pointer to the previous node\r\n    this.next = null; // Pointer to the next node\r\n  }\r\n}\r\n\r\nclass Deque {\r\n  constructor() {\r\n    this.front = null; // Pointer to the front node\r\n    this.rear = null;  // Pointer to the rear node\r\n    this.size = 0;     // Size of the deque\r\n  }\r\n\r\n  // Add an item at the front\r\n  addFront(value) {\r\n    const newNode = new Node(value);\r\n    if (this.isEmpty()) {\r\n      this.front = this.rear = newNode;\r\n    } else {\r\n      newNode.next = this.front;\r\n      this.front.prev = newNode;\r\n      this.front = newNode;\r\n    }\r\n    this.size++;\r\n  }\r\n\r\n  // Add an item at the rear\r\n  addRear(value) {\r\n    const newNode = new Node(value);\r\n    if (this.isEmpty()) {\r\n      this.front = this.rear = newNode;\r\n    } else {\r\n      newNode.prev = this.rear;\r\n      this.rear.next = newNode;\r\n      this.rear = newNode;\r\n    }\r\n    this.size++;\r\n  }\r\n\r\n  // Remove an item from the front\r\n  removeFront() {\r\n    if (this.isEmpty()) return null;  \r\n    const removedValue = this.front.value;\r\n    this.front = this.front.next;\r\n    if (this.front) {\r\n      this.front.prev = null;\r\n    } else {\r\n      this.rear = null; // Deque is now empty\r\n    }\r\n    this.size--;\r\n    return removedValue;\r\n  }\r\n\r\n  // Remove an item from the rear\r\n  removeRear() {\r\n    if (this.size === 0) {\r\n      return null; // Deque is empty\r\n    }\r\n    const removedValue = this.rear.value;\r\n    this.rear = this.rear.prev;\r\n    if (this.rear) {\r\n      this.rear.next = null;\r\n    } else {\r\n      this.front = null; // Deque is now empty\r\n    }\r\n    this.size--;\r\n    return removedValue;\r\n  }\r\n\r\n  // Get the size of the deque\r\n  getSize = () => this.size;\r\n\r\n  // Check if the deque is empty\r\n  isEmpty = () => this.size === 0;\r\n\r\n  // Peek at the front item\r\n  peekFront = () => this.front ? this.front.value : null;\r\n\r\n  // Peek at the rear item\r\n  peekRear = () => this.rear ? this.rear.value : null;\r\n}\r\n\r\n// Example usage\r\nconst deque = new Deque();\r\ndeque.addFront(10);\r\ndeque.addRear(20);\r\nconsole.log(deque.peekFront()); // 10\r\nconsole.log(deque.peekRear());  // 20\r\nconsole.log(deque.removeFront()); // 10\r\nconsole.log(deque.removeRear());  // 20\r\nconsole.log(deque.isEmpty()); // true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"frequently-asked-leetcode-problems-using-deque",children:"Frequently Asked LeetCode Problems Using Deque"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/sliding-window-maximum/",children:"Sliding Window Maximum"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Problem: Given an array ",(0,t.jsx)(n.code,{children:"nums"})," and an integer ",(0,t.jsx)(n.code,{children:"k"}),", return the maximum values of each sliding window of size ",(0,t.jsx)(n.code,{children:"k"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-sliding-window/",children:"Maximum Sliding Window"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Problem: Similar to the previous one but requires you to return the maximum sliding window at each step."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/design-circular-deque/",children:"Design Circular Deque"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Problem: Implement a circular deque with operations like ",(0,t.jsx)(n.code,{children:"insertFront"}),", ",(0,t.jsx)(n.code,{children:"insertRear"}),", ",(0,t.jsx)(n.code,{children:"deleteFront"}),", and ",(0,t.jsx)(n.code,{children:"deleteRear"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/first-unique-character-in-a-string/",children:"First Unique Character in a String"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Problem: Given a string, find the first non-repeating character in it. If it doesn't exist, return a space."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",children:"Binary Tree Zigzag Level Order Traversal"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Problem: Given a binary tree, return its zigzag level order traversal."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/sliding-window-median/",children:"Sliding Window Median"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Problem: Given an array of integers, find the median of all sliding windows of size ",(0,t.jsx)(n.code,{children:"k"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",children:"Longest Substring with At Most K Distinct Characters"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Problem: Given a string, find the length of the longest substring that contains at most ",(0,t.jsx)(n.code,{children:"k"})," distinct characters."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/kth-largest-element-in-a-stream/",children:"Kth Largest Element in a Stream"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Problem: Design a class that adds integers from a stream and finds the kth largest element in constant time."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/task-scheduler/",children:"Task Scheduler"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Problem: Given a list of tasks and an integer ",(0,t.jsx)(n.code,{children:"n"}),", find the least number of intervals needed to finish all tasks given that you need to wait ",(0,t.jsx)(n.code,{children:"n"})," intervals between the same tasks."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/max-points-on-a-line/",children:"Max Points on a Line"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Problem: Given an array of points, find the maximum number of points that lie on the same straight line."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);