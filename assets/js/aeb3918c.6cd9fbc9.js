"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[321],{5116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=n(4848),s=n(8453);const l={title:"Floyd's Cycle Detection Algorithm"},r=void 0,o={id:"tutorial-basics/FlyodsCycleDetection",title:"Floyd's Cycle Detection Algorithm",description:"Floyd's Cycle Detection Algorithm",source:"@site/docs/tutorial-basics/FlyodsCycleDetection.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/FlyodsCycleDetection",permalink:"/js.enigma/docs/tutorial-basics/FlyodsCycleDetection",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/FlyodsCycleDetection.mdx",tags:[],version:"current",frontMatter:{title:"Floyd's Cycle Detection Algorithm"},sidebar:"tutorialSidebar",previous:{title:"Flood Fill Algorithm",permalink:"/js.enigma/docs/tutorial-basics/FloodFill"},next:{title:"Frequency Counter Technique",permalink:"/js.enigma/docs/tutorial-basics/FrequencyCounter"}},c={},a=[{value:"Floyd&#39;s Cycle Detection Algorithm",id:"floyds-cycle-detection-algorithm",level:2},{value:"Overview",id:"overview",level:3},{value:"Algorithm Steps",id:"algorithm-steps",level:3},{value:"Example: Detecting a Cycle in a Linked List",id:"example-detecting-a-cycle-in-a-linked-list",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"floyds-cycle-detection-algorithm",children:"Floyd's Cycle Detection Algorithm"}),"\n",(0,i.jsx)(t.p,{children:"Floyd's Cycle Detection Algorithm, also known as the Tortoise and Hare algorithm, is a classic technique used to detect cycles in a sequence or linked list. It is an efficient algorithm with a time complexity of O(n) and space complexity of O(1), making it suitable for detecting cycles in data structures where additional space is limited."}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The algorithm uses two pointers (often called the tortoise and the hare) that traverse the sequence at different speeds:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Tortoise"}),": Moves one step at a time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Hare"}),": Moves two steps at a time."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If there is a cycle in the sequence, the hare and the tortoise will eventually meet at some point within the cycle. If there is no cycle, the hare will reach the end of the sequence (e.g., ",(0,i.jsx)(t.code,{children:"null"})," in a linked list)."]}),"\n",(0,i.jsx)(t.h3,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Initialization"}),": Start both pointers at the beginning of the sequence."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Traversal"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Move the tortoise by one step."}),"\n",(0,i.jsx)(t.li,{children:"Move the hare by two steps."}),"\n",(0,i.jsx)(t.li,{children:"Continue until the hare either meets the tortoise (cycle detected) or reaches the end (no cycle)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Detection"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If the hare and tortoise meet, a cycle exists."}),"\n",(0,i.jsx)(t.li,{children:"If the hare reaches the end, there is no cycle."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example-detecting-a-cycle-in-a-linked-list",children:"Example: Detecting a Cycle in a Linked List"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Implementation"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"class ListNode {\r\n  constructor(value = 0, next = null) {\r\n    this.value = value;\r\n    this.next = next;\r\n  }\r\n}\r\n\r\n/**\r\n * Detect if a cycle exists in a linked list using Floyd's Cycle Detection Algorithm.\r\n * @param {ListNode} head - The head of the linked list.\r\n * @return {boolean} - True if a cycle is detected, false otherwise.\r\n */\r\nconst hasCycle = (head) => {\r\n  if (!head || !head.next) return false;\r\n\r\n  let tortoise = head;\r\n  let hare = head;\r\n\r\n  while (hare && hare.next) {\r\n    tortoise = tortoise.next;        // Move tortoise one step\r\n    hare = hare.next.next;           // Move hare two steps\r\n\r\n    if (tortoise === hare) return true; // Cycle detected\r\n  }\r\n\r\n  return false; // No cycle\r\n}\r\n\r\n// Example usage:\r\nconst node3 = new ListNode(3);\r\nconst node2 = new ListNode(2, node3);\r\nconst node1 = new ListNode(1, node2);\r\nnode3.next = node1; // Creates a cycle: 1 -> 2 -> 3 -> 1\r\n\r\nconsole.log(hasCycle(node1)); // Output: true\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);