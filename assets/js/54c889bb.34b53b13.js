"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2944],{4095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>h,toc:()=>p});var t=r(4848),i=r(8453);const a={title:"Binary Heap"},s=void 0,h={id:"tutorial-basics/BinaryHeap",title:"Binary Heap",description:"A Binary Heap is a complete binary tree that satisfies the heap property. It is a data structure commonly used to implement priority queues. There are two main types of binary heaps: the min-heap and the max-heap.",source:"@site/docs/tutorial-basics/BinaryHeap.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/BinaryHeap",permalink:"/js.enigma/docs/tutorial-basics/BinaryHeap",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/BinaryHeap.mdx",tags:[],version:"current",frontMatter:{title:"Binary Heap"},sidebar:"tutorialSidebar",previous:{title:"Backtracking Algorithm",permalink:"/js.enigma/docs/tutorial-basics/Backtracking"},next:{title:"Binary Lifting",permalink:"/js.enigma/docs/tutorial-basics/BinaryLifting"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"Operations",id:"operations",level:2},{value:"Min-Heap Example",id:"min-heap-example",level:3},{value:"Max-Heap Example",id:"max-heap-example",level:3},{value:"Below class handles MinHeap, MaxHeap, MinHeapPriorityQueue and MaxHeapPriorityQueue",id:"below-class-handles-minheap-maxheap-minheappriorityqueue-and-maxheappriorityqueue",level:3},{value:"List to practice Heap",id:"list-to-practice-heap",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Binary Heap"})," is a complete binary tree that satisfies the heap property. It is a data structure commonly used to implement priority queues. There are two main types of binary heaps: the ",(0,t.jsx)(n.strong,{children:"min-heap"})," and the ",(0,t.jsx)(n.strong,{children:"max-heap"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Complete Binary Tree"}),": A binary heap is a complete binary tree, meaning all levels of the tree are fully filled except possibly for the last level, which is filled from left to right."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Heap Property"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Min-Heap"}),": In a min-heap, the value of each node is greater than or equal to the value of its parent. The minimum element is at the root."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Max-Heap"}),": In a max-heap, the value of each node is less than or equal to the value of its parent. The maximum element is at the root."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Insertion"}),": Add a new element to the heap while maintaining the heap property."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Extraction"}),": Remove the root element (minimum or maximum) and reorganize the heap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Heapify"}),": Maintain the heap property after an operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"min-heap-example",children:"Min-Heap Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"     1\r\n   /   \\\r\n  3     5\r\n / \\   / \\\r\n7   9 8  10\n"})}),"\n",(0,t.jsx)(n.h3,{id:"max-heap-example",children:"Max-Heap Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"     10\r\n   /    \\\r\n  9      8\r\n / \\    / \\\r\n7   6  5   4\n"})}),"\n",(0,t.jsx)(n.h3,{id:"below-class-handles-minheap-maxheap-minheappriorityqueue-and-maxheappriorityqueue",children:"Below class handles MinHeap, MaxHeap, MinHeapPriorityQueue and MaxHeapPriorityQueue"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"class MinMaxPriorityQueue {\r\n\r\n  #heap = []\r\n  #compare;\r\n\r\n  constructor(compare) {\r\n    this.#heap = [];\r\n    this.#compare = compare || ((a, b) => a - b) //By default, keep it MinHeap\r\n  }\r\n\r\n  // Add a new element to the priority queue\r\n  enqueue = (value) => {\r\n    this.#heap.push(value);\r\n    this.#heapifyUp(this.#heap.length - 1);\r\n  }\r\n\r\n  // Remove and return the element with the highest priority (smallest for min-heap, largest for max-heap)\r\n  dequeue = () => {\r\n    if (this.#heap.length === 0) return null;\r\n    const root = this.#heap[0];\r\n    const end = this.#heap.pop();\r\n    if (this.#heap.length > 0) {\r\n      this.#heap[0] = end;\r\n      this.#heapifyDown(0);\r\n    }\r\n    return root;\r\n  }\r\n\r\n  // Peek at the element with the highest priority without removing it\r\n  peek = () => {\r\n    return this.#heap.length > 0 ? this.#heap[0] : null;\r\n  }\r\n\r\n  // Check if the priority queue is empty\r\n  isEmpty = () => {\r\n    return this.#heap.length === 0;\r\n  }\r\n\r\n  // Get the size of the priority queue\r\n  size = () => {\r\n    return this.#heap.length;\r\n  }\r\n\r\n  // Maintain heap property by moving element up\r\n  #heapifyUp = (index) => {\r\n    let parent = Math.floor((index - 1) / 2);\r\n    while (index > 0 && this.#compare(this.#heap[index], this.#heap[parent]) < 0) {\r\n      this.#swap(index, parent)\r\n      index = parent;\r\n      parent = Math.floor((index - 1) / 2);\r\n    }\r\n  }\r\n\r\n  // Maintain heap property by moving element down\r\n  #heapifyDown = (index) => {\r\n    const length = this.#heap.length;\r\n    let left = 2 * index + 1;\r\n    let right = 2 * index + 2;\r\n    let extreme = index;\r\n\r\n    if (left < length && this.#compare(this.#heap[left], this.#heap[extreme]) < 0) {\r\n      extreme = left;\r\n    }\r\n\r\n    if (right < length && this.#compare(this.#heap[right], this.#heap[extreme]) < 0) {\r\n      extreme = right;\r\n    }\r\n\r\n    if (extreme !== index) {\r\n      this.#swap(index, extreme)\r\n      this.#heapifyDown(extreme);\r\n    }\r\n  }\r\n\r\n  #swap = (i, j) => {\r\n    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]]\r\n  }\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"list-to-practice-heap",children:"List to practice Heap"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problem-list/ah220lmv/",children:"https://leetcode.com/problem-list/ah220lmv/"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>h});var t=r(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);