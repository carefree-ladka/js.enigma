"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7603],{9267:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(4848),i=n(8453);const s={title:"In-Place Reversal of a Linked List"},a=void 0,o={id:"DSA/ReverseLinkedList",title:"In-Place Reversal of a Linked List",description:"In-Place Reversal of a Linked List",source:"@site/docs/DSA/ReverseLinkedList.mdx",sourceDirName:"DSA",slug:"/DSA/ReverseLinkedList",permalink:"/js.enigma/docs/DSA/ReverseLinkedList",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/ReverseLinkedList.mdx",tags:[],version:"current",frontMatter:{title:"In-Place Reversal of a Linked List"},sidebar:"tutorialSidebar",previous:{title:"Reservoir Sampling",permalink:"/js.enigma/docs/DSA/ReservoirSampling"},next:{title:"Segment Tree Tutorial",permalink:"/js.enigma/docs/DSA/SegmentTree"}},c={},l=[{value:"In-Place Reversal of a Linked List",id:"in-place-reversal-of-a-linked-list",level:2},{value:"Concept",id:"concept",level:3},{value:"Iterative Approach",id:"iterative-approach",level:3},{value:"Recursive Approach",id:"recursive-approach",level:3},{value:"Recursive Approach",id:"recursive-approach-1",level:3}];function d(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"in-place-reversal-of-a-linked-list",children:"In-Place Reversal of a Linked List"}),"\n",(0,t.jsx)(r.p,{children:"Reversing a linked list in-place involves reversing the direction of the pointers in the list without using additional data structures. This technique is useful for operations requiring efficient space usage and is commonly used in various linked list problems."}),"\n",(0,t.jsx)(r.h3,{id:"concept",children:"Concept"}),"\n",(0,t.jsxs)(r.p,{children:["In an in-place reversal, each node's ",(0,t.jsx)(r.code,{children:"next"})," pointer is updated to point to its previous node. This process is performed iteratively or recursively."]}),"\n",(0,t.jsx)(r.h3,{id:"iterative-approach",children:"Iterative Approach"}),"\n",(0,t.jsxs)(r.p,{children:["The iterative approach involves three pointers: ",(0,t.jsx)(r.code,{children:"prev"}),", ",(0,t.jsx)(r.code,{children:"current"}),", and ",(0,t.jsx)(r.code,{children:"next"}),". By iterating through the list and adjusting the pointers, the list can be reversed."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Code Example"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"class ListNode {\r\n  constructor(value = 0, next = null) {\r\n    this.value = value;\r\n    this.next = next;\r\n  }\r\n}\r\n\r\n/**\r\n * Reverse a linked list in-place iteratively.\r\n * @param {ListNode} head - The head of the linked list.\r\n * @return {ListNode} - The new head of the reversed linked list.\r\n */\r\nconst reverseListIterative = (head) => {\r\n  let prev = null;\r\n  let current = head;\r\n\r\n  while (current) {\r\n    const next = current.next; // Save next node\r\n    current.next = prev;       // Reverse the pointer\r\n    prev = current;            // Move prev to current node\r\n    current = next;            // Move to next node\r\n  }\r\n\r\n  return prev; // New head of the reversed list\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"recursive-approach",children:"Recursive Approach"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"/**\r\n * @param {ListNode} head\r\n * @return {ListNode}\r\n */\r\nconst reverseList = (head, prev = null) => {\r\n  if (!head) return prev\r\n  const next = head.next\r\n  head.next = prev\r\n  return reverseList(next, head)\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"recursive-approach-1",children:"Recursive Approach"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"/**\r\n * Reverse a linked list in-place recursively.\r\n * @param {ListNode} head - The head of the linked list.\r\n * @return {ListNode} - The new head of the reversed linked list.\r\n */\r\nconst reverseListRecursive = (head) => {\r\n  // Base case: empty list or single node\r\n  if (!head || !head.next) {\r\n    return head;\r\n  }\r\n\r\n  // Recursively reverse the rest of the list\r\n  const newHead = reverseListRecursive(head.next);\r\n\r\n  // Update pointers\r\n  head.next.next = head;\r\n  head.next = null;\r\n\r\n  return newHead;\r\n};\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(6540);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);