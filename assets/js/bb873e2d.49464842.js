"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7750],{7009:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(4848),i=t(8453);const n={title:"Topological Sort Tutorial",description:"A comprehensive guide to Topological Sort with code examples in JavaScript."},s="Topological Sort Tutorial",l={id:"tutorial-basics/TopologicalSort",title:"Topological Sort Tutorial",description:"A comprehensive guide to Topological Sort with code examples in JavaScript.",source:"@site/docs/tutorial-basics/TopologicalSort.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/TopologicalSort",permalink:"/js.enigma/docs/tutorial-basics/TopologicalSort",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/TopologicalSort.mdx",tags:[],version:"current",frontMatter:{title:"Topological Sort Tutorial",description:"A comprehensive guide to Topological Sort with code examples in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"String Matching",permalink:"/js.enigma/docs/tutorial-basics/StringMatching"},next:{title:"Trie Data Structure",permalink:"/js.enigma/docs/tutorial-basics/Trie"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Algorithms for Topological Sort",id:"algorithms-for-topological-sort",level:2},{value:"1. Kahn&#39;s Algorithm",id:"1-kahns-algorithm",level:3},{value:"2. Depth-First Search (DFS) Based Algorithm",id:"2-depth-first-search-dfs-based-algorithm",level:3},{value:"Kahn&#39;s Algorithm Implementation",id:"kahns-algorithm-implementation",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"topological-sort-tutorial",children:"Topological Sort Tutorial"})}),"\n",(0,o.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(r.p,{children:"Topological Sort is an algorithm used to order the vertices of a Directed Acyclic Graph (DAG) in a linear sequence. In this sequence, for every directed edge ( uv ) from vertex ( u ) to vertex ( v ), ( u ) comes before ( v ). This sorting is useful in scenarios where you need to schedule tasks or resolve dependencies."}),"\n",(0,o.jsx)(r.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Directed Acyclic Graph (DAG)"}),": A graph with directed edges and no cycles."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Topological Order"}),": A linear ordering of vertices such that for every directed edge ( uv ), vertex ( u ) comes before vertex ( v )."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"algorithms-for-topological-sort",children:"Algorithms for Topological Sort"}),"\n",(0,o.jsx)(r.h3,{id:"1-kahns-algorithm",children:"1. Kahn's Algorithm"}),"\n",(0,o.jsx)(r.p,{children:"Kahn's Algorithm uses the concept of in-degrees (number of incoming edges) to determine the order of vertices. It is suitable for finding a topological sort using Breadth-First Search (BFS)."}),"\n",(0,o.jsx)(r.h3,{id:"2-depth-first-search-dfs-based-algorithm",children:"2. Depth-First Search (DFS) Based Algorithm"}),"\n",(0,o.jsx)(r.p,{children:"The DFS-based algorithm uses a stack to store the vertices in the topological order. It is suitable for finding a topological sort using Depth-First Search (DFS)."}),"\n",(0,o.jsx)(r.h2,{id:"kahns-algorithm-implementation",children:"Kahn's Algorithm Implementation"}),"\n",(0,o.jsx)(r.p,{children:"Here\u2019s a JavaScript implementation of Kahn\u2019s Algorithm for Topological Sort:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"function topologicalSortKahn(graph) {\r\n  const inDegree = new Array(graph.length).fill(0);\r\n  const queue = [];\r\n  const result = [];\r\n\r\n  // Compute the in-degrees of all vertices\r\n  for (let u = 0; u < graph.length; u++) {\r\n    for (const v of graph[u]) {\r\n      inDegree[v]++;\r\n    }\r\n  }\r\n\r\n  // Add vertices with in-degree 0 to the queue\r\n  for (let i = 0; i < inDegree.length; i++) {\r\n    if (inDegree[i] === 0) {\r\n      queue.push(i);\r\n    }\r\n  }\r\n\r\n  // Process the vertices in the queue\r\n  while (queue.length > 0) {\r\n    const u = queue.shift();\r\n    result.push(u);\r\n\r\n    for (const v of graph[u]) {\r\n      inDegree[v]--;\r\n      if (inDegree[v] === 0) {\r\n        queue.push(v);\r\n      }\r\n    }\r\n  }\r\n\r\n  // Check for cycles (if result length != graph length)\r\n  if (result.length !== graph.length) {\r\n    throw new Error('The graph contains a cycle');\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\n// Example Usage\r\nconst graph = [\r\n  [1, 2], // 0 -> 1, 0 -> 2\r\n  [2],    // 1 -> 2\r\n  []      // 2\r\n];\r\n\r\nconsole.log(topologicalSortKahn(graph)); // Output: [0, 1, 2] or [0, 2, 1]\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var o=t(6540);const i={},n=o.createContext(i);function s(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);