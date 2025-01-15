"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7045],{6011:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(4848),s=r(8453);const o={title:"Multi-source BFS Algorithm"},i=void 0,c={id:"DSA/MultiSourceBFS",title:"Multi-source BFS Algorithm",description:"Multi-source BFS Algorithm",source:"@site/docs/DSA/MultiSourceBFS.mdx",sourceDirName:"DSA",slug:"/DSA/MultiSourceBFS",permalink:"/js.enigma/docs/DSA/MultiSourceBFS",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/MultiSourceBFS.mdx",tags:[],version:"current",frontMatter:{title:"Multi-source BFS Algorithm"},sidebar:"tutorialSidebar",previous:{title:"Multiset in JavaScript",permalink:"/js.enigma/docs/DSA/MultiSet"},next:{title:"N-ary Tree",permalink:"/js.enigma/docs/DSA/NryTree"}},l={},a=[{value:"Multi-source BFS Algorithm",id:"multi-source-bfs-algorithm",level:2},{value:"Concept",id:"concept",level:3},{value:"Algorithm Steps",id:"algorithm-steps",level:3},{value:"Code Example",id:"code-example",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"multi-source-bfs-algorithm",children:"Multi-source BFS Algorithm"}),"\n",(0,t.jsx)(n.p,{children:"Multi-source BFS is an extension of the Breadth-First Search (BFS) algorithm that starts the search from multiple source nodes simultaneously. It is particularly useful in scenarios where multiple starting points need to be considered, such as finding the shortest path from multiple sources or solving problems related to spreading processes."}),"\n",(0,t.jsx)(n.h3,{id:"concept",children:"Concept"}),"\n",(0,t.jsx)(n.p,{children:"In Multi-source BFS:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sources"}),": The algorithm begins with multiple source nodes, all of which are initially added to the queue."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Propagation"}),": The BFS process propagates outwards from all sources in parallel, updating the shortest path distances for each node."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Objective"}),": To compute the shortest path distances from any of the source nodes to all other nodes in the graph."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Initialize"}),": Start by initializing the distance for each node as infinity. Set the distance for each source node to 0. Use a queue to manage the nodes to be processed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Process Nodes"}),": Dequeue nodes and update their neighbors.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For each neighbor, if the calculated distance is shorter than the current known distance, update it and enqueue the neighbor."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Continue"}),": Repeat the process until all nodes are processed."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"code-example",children:"Code Example"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JavaScript Implementation"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { Queue } = require('collections/queue');\r\n\r\n/**\r\n * Compute the shortest path distances from multiple source nodes using Multi-source BFS.\r\n * @param {number[][]} graph - Adjacency list representation of the graph.\r\n * @param {number[]} sources - Array of source nodes.\r\n * @return {number[]} - Array of shortest path distances from any of the sources.\r\n */\r\nconst multiSourceBFS = (graph, sources) => {\r\n  const n = graph.length;\r\n  const distances = Array(n).fill(Infinity);\r\n  const queue = new Queue();\r\n\r\n  // Initialize distances for source nodes\r\n  sources.forEach(source => {\r\n    distances[source] = 0;\r\n    queue.enqueue(source);\r\n  });\r\n\r\n  while (queue.length > 0) {\r\n    const node = queue.dequeue();\r\n    \r\n    for (const neighbor of graph[node]) {\r\n      if (distances[node] + 1 < distances[neighbor]) {\r\n        distances[neighbor] = distances[node] + 1;\r\n        queue.enqueue(neighbor);\r\n      }\r\n    }\r\n  }\r\n\r\n  return distances;\r\n};\r\n\r\nconst graph = [\r\n  [1, 2],     // Node 0 connects to Node 1 and Node 2\r\n  [0, 2, 3],  // Node 1 connects to Node 0, Node 2, and Node 3\r\n  [0, 1, 3],  // Node 2 connects to Node 0, Node 1, and Node 3\r\n  [1, 2]      // Node 3 connects to Node 1 and Node 2\r\n];\r\nconst sources = [0, 3];\r\n\r\nconsole.log(multiSourceBFS(graph, sources)); // Output: [0, 1, 1, 1]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);