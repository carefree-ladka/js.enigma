"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2153],{4597:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(4848),i=r(8453);const s={title:"Cycle Detection in Graphs"},o=void 0,c={id:"tutorial-basics/CycleDetectionGraph",title:"Cycle Detection in Graphs",description:"Cycle detection is an essential aspect of graph theory, used to identify whether a graph contains cycles. This document outlines methods for detecting cycles in both directed and undirected graphs.",source:"@site/docs/tutorial-basics/CycleDetectionGraph.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/CycleDetectionGraph",permalink:"/js.enigma/docs/tutorial-basics/CycleDetectionGraph",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/CycleDetectionGraph.mdx",tags:[],version:"current",frontMatter:{title:"Cycle Detection in Graphs"},sidebar:"tutorialSidebar",previous:{title:"Counting Sort",permalink:"/js.enigma/docs/tutorial-basics/CountingSort"},next:{title:"DFS & BFS on Graphs",permalink:"/js.enigma/docs/tutorial-basics/DFSBFSGraph"}},l={},d=[{value:"Cycle Detection in Directed Graphs",id:"cycle-detection-in-directed-graphs",level:3},{value:"Steps of Kahn&#39;s Algorithm",id:"steps-of-kahns-algorithm",level:2},{value:"Cycle Detection in Directed Graphs",id:"cycle-detection-in-directed-graphs-1",level:3},{value:"Union-Find (Disjoint Set) for Cycle Detection in Undirected Graphs",id:"union-find-disjoint-set-for-cycle-detection-in-undirected-graphs",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Cycle detection is an essential aspect of graph theory, used to identify whether a graph contains cycles. This document outlines methods for detecting cycles in both directed and undirected graphs."}),"\n",(0,t.jsx)(n.h3,{id:"cycle-detection-in-directed-graphs",children:"Cycle Detection in Directed Graphs"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"DFS"}),"\n",(0,t.jsx)(n.li,{children:"BFS"}),"\n",(0,t.jsx)(n.li,{children:"Kahn's Algorithm (Topological Sorting)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Kahn's Algorithm is a method used to detect cycles in directed graphs by attempting to find a topological ordering. If a topological order exists, the graph is acyclic; otherwise, it contains at least one cycle."}),"\n",(0,t.jsx)(n.h2,{id:"steps-of-kahns-algorithm",children:"Steps of Kahn's Algorithm"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compute In-Degree"}),": Calculate the in-degree (the number of incoming edges) for each vertex in the graph."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Initialize the Queue"}),": Enqueue all vertices with an in-degree of 0 (vertices with no incoming edges)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Process the Queue"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dequeue a vertex and increment a counter for visited nodes."}),"\n",(0,t.jsx)(n.li,{children:"For each neighboring vertex, decrease its in-degree. If a neighbor\u2019s in-degree becomes 0, enqueue it."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cycle Check"}),": After processing, if the count of visited nodes is not equal to the total number of vertices, a cycle exists."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'function kahnCycleDetection(graph) {\r\n    // Step 1: Compute in-degrees of all vertices\r\n    const inDegree = new Array(graph.length).fill(0);\r\n    \r\n    for (let u = 0; u < graph.length; u++) {\r\n        for (const v of graph[u]) {\r\n            inDegree[v]++;\r\n        }\r\n    }\r\n\r\n    // Step 2: Initialize the queue with all vertices having in-degree 0\r\n    const queue = [];\r\n    for (let i = 0; i < inDegree.length; i++) {\r\n        if (inDegree[i] === 0) {\r\n            queue.push(i);\r\n        }\r\n    }\r\n\r\n    // Step 3: Count of visited nodes\r\n    let visitedCount = 0;\r\n\r\n    // Step 4: Process the queue\r\n    while (queue.length > 0) {\r\n        // Dequeue a vertex\r\n        const current = queue.shift();\r\n        visitedCount++; // Increment count of visited nodes\r\n\r\n        // Step 5: Decrease the in-degree of neighboring nodes\r\n        for (const neighbor of graph[current]) {\r\n            inDegree[neighbor]--;\r\n            // If in-degree becomes 0, add it to the queue\r\n            if (inDegree[neighbor] === 0) {\r\n                queue.push(neighbor);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Step 6: If the visited count is not equal to the number of nodes, a cycle exists\r\n    return visitedCount !== graph.length; // Returns true if a cycle is detected\r\n}\r\n\r\n// Example usage:\r\nconst directedGraph = [\r\n    [1],    // 0 -> 1\r\n    [2],    // 1 -> 2\r\n    [0],    // 2 -> 0 (cycle)\r\n    []\r\n];\r\n\r\nconsole.log("Cycle Detected:", kahnCycleDetection(directedGraph));\n'})}),"\n",(0,t.jsx)(n.p,{children:"Kahn's Algorithm is an efficient method for detecting cycles in directed graphs, with a time complexity of O(V+E), where V is the number of vertices and E is the number of edges."}),"\n",(0,t.jsx)(n.h3,{id:"cycle-detection-in-directed-graphs-1",children:"Cycle Detection in Directed Graphs"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"DFS"}),"\n",(0,t.jsx)(n.li,{children:"BFS"}),"\n",(0,t.jsx)(n.li,{children:"Union Find (Disjoint Set)"}),"\n",(0,t.jsx)(n.li,{children:"Graph coloring"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"union-find-disjoint-set-for-cycle-detection-in-undirected-graphs",children:"Union-Find (Disjoint Set) for Cycle Detection in Undirected Graphs"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Initialize"}),": Create a Union-Find structure to keep track of the components."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Process Edges"}),": For each edge in the graph:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Find"})," operation to check if the two vertices of the edge belong to the same set."]}),"\n",(0,t.jsx)(n.li,{children:"If they do, a cycle exists."}),"\n",(0,t.jsxs)(n.li,{children:["If they don\u2019t, use the ",(0,t.jsx)(n.strong,{children:"Union"})," operation to merge their sets."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Conclusion"}),": If no cycles are detected during the process, the graph is acyclic."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'class UnionFind {\r\n    constructor(size) {\r\n        this.parent = Array.from({ length: size }, (_, i) => i);\r\n        this.rank = Array(size).fill(1);\r\n    }\r\n\r\n    find(node) {\r\n        if (this.parent[node] !== node) {\r\n            // Path compression\r\n            this.parent[node] = this.find(this.parent[node]);\r\n        }\r\n        return this.parent[node];\r\n    }\r\n\r\n    union(node1, node2) {\r\n        const root1 = this.find(node1);\r\n        const root2 = this.find(node2);\r\n\r\n        if (root1 === root2) {\r\n            return false; // A cycle is detected\r\n        }\r\n\r\n        // Union by rank\r\n        if (this.rank[root1] > this.rank[root2]) {\r\n            this.parent[root2] = root1;\r\n        } else if (this.rank[root1] < this.rank[root2]) {\r\n            this.parent[root1] = root2;\r\n        } else {\r\n            this.parent[root2] = root1;\r\n            this.rank[root1]++;\r\n        }\r\n        return true; // No cycle detected\r\n    }\r\n}\r\n\r\nfunction hasCycle(graph) {\r\n    const uf = new UnionFind(graph.length);\r\n\r\n    for (const [u, v] of graph) {\r\n        if (!uf.union(u, v)) {\r\n            return true; // Cycle detected\r\n        }\r\n    }\r\n\r\n    return false; // No cycle detected\r\n}\r\n\r\n// Example usage:\r\nconst undirectedGraph = [\r\n    [0, 1],\r\n    [1, 2],\r\n    [2, 0], // This edge creates a cycle\r\n    [1, 3]\r\n];\r\n\r\nconsole.log("Cycle Detected:", hasCycle(undirectedGraph));\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Time Complexity:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Find : O(\u03b1(n))"}),"\n",(0,t.jsx)(n.li,{children:"Union: O(\u03b1(n))O(\u03b1(n))"}),"\n",(0,t.jsxs)(n.li,{children:["Total for m operations",":O","(m\u22c5\u03b1(n))"]}),"\n",(0,t.jsx)(n.li,{children:"Here, \u03b1(n) is the inverse Ackermann function, which grows very slowly. For all practical purposes, it can be considered constant, making the Find operation nearly O(1)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Space Complexity"})," : O(n)"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);