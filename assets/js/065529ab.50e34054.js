"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6541],{3762:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),i=r(8453);const s={title:"Binary Lifting"},o=void 0,a={id:"DSA/BinaryLifting",title:"Binary Lifting",description:'Binary lifting (also known as binary jumping or jump pointers) is an advanced algorithmic technique primarily used to solve problems involving tree traversal and finding ancestors in a tree data structure. It\'s particularly efficient for queries like "find the kth ancestor of a node" or "find the lowest common ancestor (LCA) of two nodes.',source:"@site/docs/DSA/BinaryLifting.mdx",sourceDirName:"DSA",slug:"/DSA/BinaryLifting",permalink:"/js.enigma/docs/DSA/BinaryLifting",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/BinaryLifting.mdx",tags:[],version:"current",frontMatter:{title:"Binary Lifting"},sidebar:"tutorialSidebar",previous:{title:"Binary Heap",permalink:"/js.enigma/docs/DSA/BinaryHeap"},next:{title:"Binary Search and Its Variants",permalink:"/js.enigma/docs/DSA/BinarySearch"}},l={},c=[{value:"Core Concept",id:"core-concept",level:2},{value:"Understanding the Basics",id:"understanding-the-basics",level:2},{value:"Time and Space Complexity",id:"time-and-space-complexity",level:2}];function h(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:'Binary lifting (also known as binary jumping or jump pointers) is an advanced algorithmic technique primarily used to solve problems involving tree traversal and finding ancestors in a tree data structure. It\'s particularly efficient for queries like "find the kth ancestor of a node" or "find the lowest common ancestor (LCA) of two nodes.'}),"\n",(0,t.jsx)(e.h2,{id:"core-concept",children:"Core Concept"}),"\n",(0,t.jsx)(e.p,{children:"The main idea behind binary lifting is to precompute and store ancestor information for each node in powers of 2. Instead of moving up the tree one step at a time, we can make jumps of size 2^i, allowing us to reach any ancestor in O(log n) time."}),"\n",(0,t.jsx)(e.h2,{id:"understanding-the-basics",children:"Understanding the Basics"}),"\n",(0,t.jsx)(e.p,{children:"Let's break down how binary lifting works:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"For each node, we store its 2^i-th ancestor for i = 0, 1, 2, ... until we reach the root."}),"\n",(0,t.jsx)(e.li,{children:"To find the kth ancestor, we use the binary representation of k."}),"\n",(0,t.jsx)(e.li,{children:"We jump using the precomputed ancestors based on the set bits in k."}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JavaScript",children:"class BinaryLifting {\r\n  constructor(n, edges, root = 0) {\r\n    this.n = n;  // number of nodes\r\n    this.maxLog = Math.floor(Math.log2(n));  // maximum power of 2 needed\r\n    this.up = Array.from({ length: n }, () => Array(this.maxLog).fill(-1));  // dp table\r\n    this.depth = Array(n).fill(0);  // depth of each node\r\n\r\n    // Build adjacency list\r\n    this.adj = Array.from({ length: n }, () => []);\r\n    for (let [u, v] of edges) {\r\n      this.adj[u].push(v);\r\n      this.adj[v].push(u);\r\n    }\r\n\r\n    // Initialize with DFS\r\n    this.#dfs(root, -1);\r\n\r\n    // Build the binary lifting table\r\n    this.#buildTable();\r\n  }\r\n\r\n  #dfs(v, parent) {\r\n    // Initialize immediate ancestors and depths\r\n    this.up[v][0] = parent;\r\n    for (let child of this.adj[v]) {\r\n      if (child !== parent) {\r\n        this.depth[child] = this.depth[v] + 1;\r\n        this.#dfs(child, v);\r\n      }\r\n    }\r\n  }\r\n\r\n  #buildTable() {\r\n    // Build the binary lifting table\r\n    for (let j = 1; j < this.maxLog; j++) {\r\n      for (let v = 0; v < this.n; v++) {\r\n        if (this.up[v][j - 1] !== -1) {\r\n          this.up[v][j] = this.up[this.up[v][j - 1]][j - 1];\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  getKthAncestor(node, k) {\r\n    // Find the kth ancestor of a given node\r\n    if (k > this.depth[node]) return -1;\r\n\r\n    // Process each bit of k\r\n    for (let j = 0; j < this.maxLog; j++) {\r\n      if (k & (1 << j)) {\r\n        node = this.up[node][j];\r\n        if (node === -1) break;\r\n      }\r\n    }\r\n    return node;\r\n  }\r\n\r\n  getLCA(u, v) {\r\n    // Find the Lowest Common Ancestor of nodes u and v\r\n    if (this.depth[u] < this.depth[v]) {\r\n      [u, v] = [v, u];\r\n    }\r\n\r\n    // Make u and v same depth\r\n    let diff = this.depth[u] - this.depth[v];\r\n\r\n    // Lift u to same depth as v\r\n    for (let j = 0; j < this.maxLog; j++) {\r\n      if (diff & (1 << j)) {\r\n        u = this.up[u][j];\r\n      }\r\n    }\r\n\r\n    if (u === v) return u;\r\n\r\n    // Lift both nodes until just before their LCA\r\n    for (let j = this.maxLog - 1; j >= 0; j--) {\r\n      if (this.up[u][j] !== this.up[v][j]) {\r\n        u = this.up[u][j];\r\n        v = this.up[v][j];\r\n      }\r\n    }\r\n\r\n    return this.up[u][0];\r\n  }\r\n}\r\n\r\n// Create a tree\r\n//       0\r\n//      / \\\r\n//     1   2\r\n//    / \\   \\\r\n//   3   4   5\r\nconst edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]];\r\nconst n = 6;\r\n\r\n// Initialize binary lifting\r\nconst bl = new BinaryLifting(n, edges);\r\n\r\n// Find ancestors\r\nconsole.log(bl.getKthAncestor(4, 1));  // Output: 1 (parent of 4)\r\nconsole.log(bl.getKthAncestor(4, 2));  // Output: 0 (grandparent of 4)\r\nconsole.log(bl.getKthAncestor(5, 1));  // Output: 2 (parent of 5)\r\n\r\n// Find LCA\r\nconsole.log(bl.getLCA(3, 4));  // Output: 1 (LCA of 3 and 4)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"time-and-space-complexity",children:"Time and Space Complexity"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Preprocessing:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Time: O(N log N) for building the table"}),"\n",(0,t.jsx)(e.li,{children:"Space: O(N log N) for storing ancestors"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Queries:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Time: O(log N) per query"}),"\n",(0,t.jsx)(e.li,{children:"Space: O(1) per query"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Reference : ",(0,t.jsx)(e.a,{href:"https://cp-algorithms.com/graph/lca_binary_lifting.html",children:"https://cp-algorithms.com/graph/lca_binary_lifting.html"})]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"K-th Ancestor of a Tree Node"}),"\n",(0,t.jsx)(e.li,{children:"Lowest Common Ancestor of a Binary Tree"}),"\n",(0,t.jsx)(e.li,{children:"Distance Between Two Nodes in a Tree"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.codechef.com/problems/LGSEG",children:"https://www.codechef.com/problems/LGSEG"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/optimal-connectivity-c6ae79ca/",children:"https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/optimal-connectivity-c6ae79ca/"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);