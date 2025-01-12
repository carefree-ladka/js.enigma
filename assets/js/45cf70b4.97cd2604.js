"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9610],{6084:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=n(4848),i=n(8453);const o={title:"Bipartite Graphs"},s="Checking Bipartite Property of a Graph",a={id:"DSA/GraphBipartile",title:"Bipartite Graphs",description:"A bipartite graph is a graph where the vertices can be divided into two sets such that no two vertices in the same set are adjacent.",source:"@site/docs/DSA/GraphBipartile.mdx",sourceDirName:"DSA",slug:"/DSA/GraphBipartile",permalink:"/js.enigma/docs/DSA/GraphBipartile",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/GraphBipartile.mdx",tags:[],version:"current",frontMatter:{title:"Bipartite Graphs"},sidebar:"tutorialSidebar",previous:{title:"Frequency Counter Technique",permalink:"/js.enigma/docs/DSA/FrequencyCounter"},next:{title:"Heap\u2019s Algorithm",permalink:"/js.enigma/docs/DSA/HeapAlgorithm"}},c={},h=[{value:"Steps to Check if a Graph is Bipartite",id:"steps-to-check-if-a-graph-is-bipartite",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"checking-bipartite-property-of-a-graph",children:"Checking Bipartite Property of a Graph"})}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.strong,{children:"bipartite graph"})," is a graph where the vertices can be divided into two sets such that no two vertices in the same set are adjacent."]}),"\n",(0,t.jsx)(r.h2,{id:"steps-to-check-if-a-graph-is-bipartite",children:"Steps to Check if a Graph is Bipartite"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Define the Problem:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"A graph G = (V, E) is bipartite if the nodes V can be split into two groups where every edge (u, v) in E connects nodes in different groups."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Choose a Method:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The problem can be solved using BFS or DFS by attempting to color the graph with two colors."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Algorithm Outline:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Start at any unvisited node and assign it one of the two colors (e.g., 0 or 1)."}),"\n",(0,t.jsx)(r.li,{children:"Traverse all its neighbors and assign them the opposite color."}),"\n",(0,t.jsxs)(r.li,{children:["If a neighbor is found with the same color as the current node, the graph is ",(0,t.jsx)(r.strong,{children:"not bipartite"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Below is an implementation using ",(0,t.jsx)(r.strong,{children:"Breadth-First Search (BFS)"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"function isBipartite(graph) {\r\n    const color = new Array(graph.length).fill(-1); // Initialize colors as uncolored (-1)\r\n    \r\n    for (let i = 0; i < graph.length; i++) {\r\n        if (color[i] === -1) {\r\n            if (!bfsCheck(graph, i, color)) {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nfunction bfsCheck(graph, start, color) {\r\n    const queue = [start];\r\n    color[start] = 0; // Assign the first color\r\n    \r\n    while (queue.length) {\r\n        const node = queue.shift();\r\n        for (const neighbor of graph[node]) {\r\n            if (color[neighbor] === -1) {\r\n                color[neighbor] = 1 - color[node]; // Assign opposite color\r\n                queue.push(neighbor);\r\n            } else if (color[neighbor] === color[node]) {\r\n                return false; // Found a conflict\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n// Example Usage\r\nconst graph = [\r\n    [1, 3],    // Node 0 is connected to 1 and 3\r\n    [0, 2],    // Node 1 is connected to 0 and 2\r\n    [1, 3],    // Node 2 is connected to 1 and 3\r\n    [0, 2]     // Node 3 is connected to 0 and 2\r\n];\r\n\r\nconsole.log(isBipartite(graph)); // Output: true\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(6540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);