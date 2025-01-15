"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4581],{2915:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var i=r(4848),t=r(8453);const s={title:"Queue"},o="Queue and Monotonic Queue",u={id:"DSA/Queue",title:"Queue",description:"A queue is a data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front. Queues are commonly used in scenarios where processing order needs to be maintained.",source:"@site/docs/DSA/Queue.mdx",sourceDirName:"DSA",slug:"/DSA/Queue",permalink:"/js.enigma/docs/DSA/Queue",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/Queue.mdx",tags:[],version:"current",frontMatter:{title:"Queue"},sidebar:"tutorialSidebar",previous:{title:"Prim's Algorithm",permalink:"/js.enigma/docs/DSA/Prim'sAlgorithm"},next:{title:"Quick Select Algorithm",permalink:"/js.enigma/docs/DSA/QuickSelect"}},l={},a=[{value:"Applications",id:"applications",level:3},{value:"Implementation Using a LinkedList",id:"implementation-using-a-linkedlist",level:3},{value:"Queue Implementation",id:"queue-implementation",level:2},{value:"Example Problems",id:"example-problems",level:3},{value:"Monotonic Queue",id:"monotonic-queue",level:2},{value:"Types",id:"types",level:3},{value:"Example Problems",id:"example-problems-1",level:3},{value:"Monotonic Queue Guide",id:"monotonic-queue-guide",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"queue-and-monotonic-queue",children:"Queue and Monotonic Queue"})}),"\n",(0,i.jsx)(n.p,{children:"A queue is a data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front. Queues are commonly used in scenarios where processing order needs to be maintained."}),"\n",(0,i.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Breadth-First Search (BFS)"}),": Queues are used to explore nodes level by level in graph traversal algorithms."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Task Scheduling"}),": Queues manage tasks in operating systems and job scheduling systems."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Order Processing"}),": Queues handle order processing in systems where tasks are processed in the order they arrive."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"implementation-using-a-linkedlist",children:"Implementation Using a LinkedList"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"class Node {\r\n  constructor(value) {\r\n    this.value = value;\r\n    this.next = null;\r\n  }\r\n}\r\n\r\nclass Queue {\r\n  constructor() {\r\n    this.front = null;\r\n    this.rear = null;\r\n    this.size = 0;\r\n  }\r\n\r\n  enqueue(value) {\r\n    const newNode = new Node(value);\r\n    if (!this.rear) {\r\n      this.front = this.rear = newNode; // Queue is empty\r\n    } else {\r\n      this.rear.next = newNode; // Link new node at the end\r\n      this.rear = newNode; // Update rear\r\n    }\r\n    this.size++;\r\n  }\r\n\r\n  dequeue() {\r\n    if (!this.front) return null; // Queue is empty\r\n    const value = this.front.value;\r\n    this.front = this.front.next; // Move front pointer to the next node\r\n    if (!this.front) this.rear = null; // Reset rear if the queue is now empty\r\n    this.size--;\r\n    return value;\r\n  }\r\n\r\n  peek() {\r\n    return this.front?.value || null; // Return front value or null if empty\r\n  }\r\n\r\n  isEmpty() {\r\n    return this.size === 0; // Check if the queue is empty\r\n  }\r\n\r\n  getSize() {\r\n    return this.size; // Return current size of the queue\r\n  }\r\n}\r\n\r\n// Example usage:\r\nconst queue = new Queue();\r\nqueue.enqueue(10);\r\nqueue.enqueue(20);\r\nqueue.enqueue(30);\r\n\r\nconsole.log(queue.peek()); // 10\r\nconsole.log(queue.dequeue()); // 10\r\nconsole.log(queue.getSize()); // 2\r\nconsole.log(queue.isEmpty()); // false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"queue-implementation",children:"Queue Implementation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Circular Array:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uses a circular array to avoid shifting elements"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Dynamic Resizing:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doubles capacity when full"}),"\n",(0,i.jsx)(n.li,{children:"Shrinks when size < 25% of capacity"}),"\n",(0,i.jsx)(n.li,{children:"Minimum capacity of 10 to avoid excessive resizing"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Memory Management:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Efficiently reuses array space"}),"\n",(0,i.jsx)(n.li,{children:"Prevents memory leaks by clearing references"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. Operations:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"enqueue: O(1) amortized"}),"\n",(0,i.jsx)(n.li,{children:"dequeue: O(1) amortized"}),"\n",(0,i.jsx)(n.li,{children:"peek: O(1)"}),"\n",(0,i.jsx)(n.li,{children:"isEmpty/isFull: O(1)"}),"\n",(0,i.jsx)(n.li,{children:"getSize: O(1)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'class Queue {\r\n  constructor(capacity = 10) {\r\n    this.capacity = capacity;\r\n    this.items = new Array(capacity);\r\n    this.front = 0;\r\n    this.rear = 0;\r\n    this.size = 0;\r\n  }\r\n\r\n  // Add element to queue\r\n  enqueue(element) {\r\n    if (this.isFull()) {\r\n      this.resize();\r\n    }\r\n    this.items[this.rear] = element;\r\n    this.rear = (this.rear + 1) % this.capacity;\r\n    this.size++;\r\n    return this.size;\r\n  }\r\n\r\n  // Remove and return front element\r\n  dequeue() {\r\n    if (this.isEmpty()) {\r\n      throw new Error("Queue Underflow");\r\n    }\r\n    const item = this.items[this.front];\r\n    this.items[this.front] = undefined;\r\n    this.front = (this.front + 1) % this.capacity;\r\n    this.size--;\r\n\r\n    // Shrink array if it\'s too sparse\r\n    if (this.size < this.capacity / 4 && this.capacity > 10) {\r\n      this.shrink();\r\n    }\r\n    return item;\r\n  }\r\n\r\n  // Return front element without removing\r\n  peek() {\r\n    if (this.isEmpty()) {\r\n      throw new Error("Queue is empty");\r\n    }\r\n    return this.items[this.front];\r\n  }\r\n\r\n  // Check if queue is empty\r\n  isEmpty() {\r\n    return this.size === 0;\r\n  }\r\n\r\n  // Check if queue is full\r\n  isFull() {\r\n    return this.size === this.capacity;\r\n  }\r\n\r\n  // Get current size\r\n  getSize() {\r\n    return this.size;\r\n  }\r\n\r\n  // Double the capacity when full\r\n  resize() {\r\n    const newCapacity = this.capacity * 2;\r\n    const newItems = new Array(newCapacity);\r\n\r\n    // Copy elements to new array\r\n    for (let i = 0; i < this.size; i++) {\r\n      newItems[i] = this.items[(this.front + i) % this.capacity];\r\n    }\r\n\r\n    this.items = newItems;\r\n    this.capacity = newCapacity;\r\n    this.front = 0;\r\n    this.rear = this.size;\r\n  }\r\n\r\n  // Halve the capacity when sparse\r\n  shrink() {\r\n    const newCapacity = Math.max(10, Math.floor(this.capacity / 2));\r\n    const newItems = new Array(newCapacity);\r\n\r\n    // Copy elements to new array\r\n    for (let i = 0; i < this.size; i++) {\r\n      newItems[i] = this.items[(this.front + i) % this.capacity];\r\n    }\r\n\r\n    this.items = newItems;\r\n    this.capacity = newCapacity;\r\n    this.front = 0;\r\n    this.rear = this.size;\r\n  }\r\n\r\n  // Clear queue\r\n  clear() {\r\n    this.items = new Array(this.capacity);\r\n    this.front = 0;\r\n    this.rear = 0;\r\n    this.size = 0;\r\n  }\r\n\r\n  // Convert queue to array\r\n  toArray() {\r\n    const result = new Array(this.size);\r\n    for (let i = 0; i < this.size; i++) {\r\n      result[i] = this.items[(this.front + i) % this.capacity];\r\n    }\r\n    return result;\r\n  }\r\n}\r\n\r\nconst queue = new Queue();\r\nqueue.enqueue(1);\r\nqueue.enqueue(2);\r\nconsole.log(queue.dequeue()); // 1\r\nconsole.log(queue.peek());    // 2\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-problems",children:"Example Problems"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/implement-queue-using-stacks/",children:"Implement Queue using Stacks"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/design-circular-queue/",children:"Design Circular Queue"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-islands/",children:"Number of Islands"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/moving-average-from-data-stream/",children:"Moving Average from Data Stream"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/perfect-squares/",children:"Perfect Squares"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"monotonic-queue",children:"Monotonic Queue"}),"\n",(0,i.jsx)(n.p,{children:"A monotonic queue maintains its elements in a specific order, either increasing or decreasing. It is useful for problems where you need to efficiently manage a sliding window or find the maximum or minimum value in a subarray."}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monotonic Increasing Queue"}),": Maintains elements in increasing order from front to rear. Useful for problems like finding the minimum value in a sliding window."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monotonic Decreasing Queue"}),": Maintains elements in decreasing order from front to rear. Useful for problems like finding the maximum value in a sliding window."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"class MonotonicQueue {\r\n  constructor(isIncreasing = true) {\r\n    this.queue = [];\r\n    this.isIncreasing = isIncreasing;\r\n  }\r\n\r\n  // Add element to the queue\r\n  push(num) {\r\n    while (\r\n      this.queue.length > 0 &&\r\n      ((this.isIncreasing && this.queue[this.queue.length - 1] > num) ||\r\n        (!this.isIncreasing && this.queue[this.queue.length - 1] < num))\r\n    ) {\r\n      this.queue.pop();\r\n    }\r\n    this.queue.push(num);\r\n  }\r\n\r\n  // Remove element from front of queue\r\n  pop(num) {\r\n    if (this.queue.length > 0 && this.queue[0] === num) {\r\n      this.queue.shift();\r\n    }\r\n  }\r\n\r\n  // Get maximum/minimum element\r\n  peek() {\r\n    return this.queue[0];\r\n  }\r\n\r\n  size() {\r\n    return this.queue.length;\r\n  }\r\n}\r\n\r\nfunction maxSlidingWindow(nums, k) {\r\n  const mq = new MonotonicQueue(false); // Decreasing for maximum\r\n  const result = [];\r\n\r\n  for (let i = 0; i < nums.length; i++) {\r\n    // Add new element\r\n    mq.push(nums[i]);\r\n\r\n    // Remove element outside window\r\n    if (i >= k) {\r\n      mq.pop(nums[i - k]);\r\n    }\r\n\r\n    // Store result after first window\r\n    if (i >= k - 1) {\r\n      result.push(mq.peek());\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-problems-1",children:"Example Problems"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/sliding-window-maximum/",children:"Sliding Window Maximum"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/sliding-window-minimum/",children:"Sliding Window Minimum"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-of-minimum-value-in-a-sliding-window/",children:"Maximum of Minimum Value in a Sliding Window"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/longest-subarray-with-sum-at-most-k/",children:"Longest Subarray with Sum at Most K"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"monotonic-queue-guide",children:"Monotonic Queue Guide"}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive guide on monotonic queues, including templates and explanations, refer to the ",(0,i.jsx)(n.a,{href:"https://medium.com/algorithms-and-leetcode/monotonic-queue-explained-with-leetcode-problems-7db7c530c1d6",children:"Monotonic Queue Guide"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Queues and monotonic queues are essential data structures for managing ordered data and solving problems related to sliding windows and range queries. Understanding how to use these queues effectively can greatly enhance your problem-solving skills in competitive programming and real-world applications."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>u});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);