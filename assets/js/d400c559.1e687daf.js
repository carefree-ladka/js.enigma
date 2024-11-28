"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5081],{223:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var o=e(4848),i=e(8453);const l={title:"Flood Fill Algorithm"},t=void 0,s={id:"tutorial-basics/FloodFill",title:"Flood Fill Algorithm",description:"Flood Fill Algorithm",source:"@site/docs/tutorial-basics/FloodFill.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/FloodFill",permalink:"/js.enigma/docs/tutorial-basics/FloodFill",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/FloodFill.mdx",tags:[],version:"current",frontMatter:{title:"Flood Fill Algorithm"},sidebar:"tutorialSidebar",previous:{title:"Fisher-Yates Shuffle Algorithm",permalink:"/js.enigma/docs/tutorial-basics/FisherYates"},next:{title:"Floyd-Warshall Algorithm",permalink:"/js.enigma/docs/tutorial-basics/Floyd-Warshall"}},d={},a=[{value:"Flood Fill Algorithm",id:"flood-fill-algorithm",level:2},{value:"Overview",id:"overview",level:3},{value:"Algorithm Steps",id:"algorithm-steps",level:3},{value:"Example Implementation",id:"example-implementation",level:3},{value:"Using Depth-First Search (DFS)",id:"using-depth-first-search-dfs",level:4},{value:"Using BFS",id:"using-bfs",level:3}];function c(r){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"flood-fill-algorithm",children:"Flood Fill Algorithm"}),"\n",(0,o.jsx)(n.p,{children:"The Flood Fill Algorithm is used to determine the area connected to a given node in a multi-dimensional array or grid. It is commonly used in computer graphics for tasks such as filling bounded areas with a color, and in image processing to identify regions within an image. The algorithm can be implemented using either Depth-First Search (DFS) or Breadth-First Search (BFS)."}),"\n",(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Flood Fill"})," works by starting from a given pixel or node and spreading out to adjacent nodes with the same value until the boundary or a different value is encountered."]}),"\n",(0,o.jsx)(n.h3,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Initialization"}),": Start with the initial pixel or node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Traversal"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"DFS"}),": Use a stack to explore all connected pixels or nodes."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"BFS"}),": Use a queue to explore all connected pixels or nodes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Update"}),": Change the value of the pixel or node being processed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Continue"}),": Process all connected pixels or nodes until the boundary is reached."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-implementation",children:"Example Implementation"}),"\n",(0,o.jsx)(n.h4,{id:"using-depth-first-search-dfs",children:"Using Depth-First Search (DFS)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Code Example"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"/**\r\n * Perform a flood fill operation using Depth-First Search (DFS).\r\n * @param {number[][]} grid - The 2D grid representing the image.\r\n * @param {number} sr - The starting row index.\r\n * @param {number} sc - The starting column index.\r\n * @param {number} newColor - The new color to fill.\r\n * @return {number[][]} - The updated grid after flood fill.\r\n */\r\nconst floodFillDFS = (grid, sr, sc, newColor) => {\r\n  const oldColor = grid[sr][sc];\r\n  if (oldColor === newColor) return grid;\r\n\r\n  const dfs = (r, c) => {\r\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== oldColor) {\r\n      return;\r\n    }\r\n    grid[r][c] = newColor;\r\n    dfs(r + 1, c);\r\n    dfs(r - 1, c);\r\n    dfs(r, c + 1);\r\n    dfs(r, c - 1);\r\n  };\r\n\r\n  dfs(sr, sc);\r\n  return grid;\r\n};\r\n\r\n// Example usage:\r\nconst image = [\r\n  [1, 1, 1],\r\n  [1, 1, 0],\r\n  [1, 0, 1]\r\n];\r\nconst sr = 1;\r\nconst sc = 1;\r\nconst newColor = 2;\r\n\r\nconsole.log(floodFillDFS(image, sr, sc, newColor));\r\n// Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-bfs",children:"Using BFS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JavaScript",children:"/**\r\n * Perform a flood fill operation using Breadth-First Search (BFS).\r\n * @param {number[][]} grid - The 2D grid representing the image.\r\n * @param {number} sr - The starting row index.\r\n * @param {number} sc - The starting column index.\r\n * @param {number} newColor - The new color to fill.\r\n * @return {number[][]} - The updated grid after flood fill.\r\n */\r\nconst floodFillBFS = (grid, sr, sc, newColor) => {\r\n  const oldColor = grid[sr][sc];\r\n  if (oldColor === newColor) return grid;\r\n\r\n  const queue = [[sr, sc]];\r\n  grid[sr][sc] = newColor;\r\n\r\n  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];\r\n\r\n  while (queue.length > 0) {\r\n    const [r, c] = queue.shift();\r\n\r\n    for (const [dr, dc] of directions) {\r\n      const nr = r + dr;\r\n      const nc = c + dc;\r\n\r\n      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === oldColor) {\r\n        grid[nr][nc] = newColor;\r\n        queue.push([nr, nc]);\r\n      }\r\n    }\r\n  }\r\n\r\n  return grid;\r\n};\r\n\r\n// Example usage:\r\nconst image = [\r\n  [1, 1, 1],\r\n  [1, 1, 0],\r\n  [1, 0, 1]\r\n];\r\nconst sr = 1;\r\nconst sc = 1;\r\nconst newColor = 2;\r\n\r\nconsole.log(floodFillBFS(image, sr, sc, newColor));\r\n// Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]\r\n\n"})})]})}function h(r={}){const{wrapper:n}={...(0,i.R)(),...r.components};return n?(0,o.jsx)(n,{...r,children:(0,o.jsx)(c,{...r})}):c(r)}},8453:(r,n,e)=>{e.d(n,{R:()=>t,x:()=>s});var o=e(6540);const i={},l=o.createContext(i);function t(r){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function s(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:t(r.components),o.createElement(l.Provider,{value:n},r.children)}}}]);