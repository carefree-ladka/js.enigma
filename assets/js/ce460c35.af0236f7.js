"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5598],{4656:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=e(4848),s=e(8453);const t={title:"2D Matrix Graph Algorithms",description:"A comprehensive guide to 2D DFS, 2D BFS, and 2D Dijkstra algorithms with code examples in JavaScript."},o="2D Graph Algorithms Tutorial",l={id:"tutorial-basics/2DGraphAlgorithms",title:"2D Matrix Graph Algorithms",description:"A comprehensive guide to 2D DFS, 2D BFS, and 2D Dijkstra algorithms with code examples in JavaScript.",source:"@site/docs/tutorial-basics/2DGraphAlgorithms.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/2DGraphAlgorithms",permalink:"/js.enigma/docs/tutorial-basics/2DGraphAlgorithms",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/2DGraphAlgorithms.mdx",tags:[],version:"current",frontMatter:{title:"2D Matrix Graph Algorithms",description:"A comprehensive guide to 2D DFS, 2D BFS, and 2D Dijkstra algorithms with code examples in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"0-1 BFS Algorithm",permalink:"/js.enigma/docs/tutorial-basics/01BFS"},next:{title:"Breadth-First Search (BFS) for Trees",permalink:"/js.enigma/docs/tutorial-basics/BFSTree"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"2D Depth-First Search (DFS)",id:"2d-depth-first-search-dfs",level:2},{value:"Overview",id:"overview",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Problem Statement",id:"problem-statement",level:2},{value:"3D Grid Representation",id:"3d-grid-representation",level:2},{value:"Depth-First Search (DFS) Algorithm",id:"depth-first-search-dfs-algorithm",level:2},{value:"JavaScript Implementation",id:"javascript-implementation",level:3},{value:"DFS on Boundary Conditions",id:"dfs-on-boundary-conditions",level:2},{value:"2D Breadth-First Search (BFS)",id:"2d-breadth-first-search-bfs",level:2},{value:"Problem Statement",id:"problem-statement-1",level:2},{value:"3D Grid Representation",id:"3d-grid-representation-1",level:2},{value:"Breadth-First Search (BFS) Algorithm",id:"breadth-first-search-bfs-algorithm",level:2},{value:"JavaScript Implementation",id:"javascript-implementation-1",level:3},{value:"Shortest Path using BFS on 2D Grid",id:"shortest-path-using-bfs-on-2d-grid",level:2},{value:"Shortest Path using Dijkstra on 2D Grid",id:"shortest-path-using-dijkstra-on-2d-grid",level:2}];function a(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2d-graph-algorithms-tutorial",children:"2D Graph Algorithms Tutorial"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In many problems involving grids or 2D matrices, algorithms designed for 2D graphs become crucial. These algorithms help in navigating and solving various tasks in grid-based problems. This tutorial covers three key algorithms used in 2D grids:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"2D Depth-First Search (DFS)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"2D Breadth-First Search (BFS)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"2D Dijkstra's Algorithm"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2d-depth-first-search-dfs",children:"2D Depth-First Search (DFS)"}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"DFS explores as far as possible along each branch before backtracking. In a 2D grid, DFS can be used to traverse and solve problems like connected components or island counting."}),"\n",(0,i.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s a JavaScript implementation of 2D DFS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function dfs(grid, row, col, visited) {\r\n  // Check boundaries and if the cell is already visited\r\n  if (\r\n    row < 0 || row >= grid.length ||\r\n    col < 0 || col >= grid[0].length ||\r\n    visited[row][col]\r\n  ) {\r\n    return;\r\n  }\r\n\r\n  // Mark the cell as visited\r\n  visited[row][col] = true;\r\n\r\n  // Print the current cell's value\r\n  console.log(grid[row][col]);\r\n\r\n  // Define the directions for traversal: right, down, left, up\r\n  const directions = [\r\n    [0, 1],    // right\r\n    [1, 0],    // down\r\n    [0, -1],   // left\r\n    [-1, 0],   // up\r\n    [1, 1],    // down-right (diagonal)\r\n    [1, -1],   // down-left (diagonal)\r\n    [-1, 1],   // up-right (diagonal)\r\n    [-1, -1]   // up-left (diagonal)\r\n  ];\r\n\r\n  // Explore all neighbors\r\n  for (let [dr, dc] of directions) {\r\n    dfs(grid, row + dr, col + dc, visited);\r\n  }\r\n}\r\n\r\n// Example usage:\r\nconst grid = [\r\n  [1, 2, 3],\r\n  [4, 5, 6],\r\n  [7, 8, 9]\r\n];\r\n\r\n// Create a visited matrix initialized to false\r\nconst visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));\r\n\r\n// Start DFS from cell (0, 0)\r\ndfs(grid, 0, 0, visited);\r\n\n"})}),"\n",(0,i.jsx)(n.h1,{id:"depth-first-search-dfs-on-a-3d-grid",children:"Depth-First Search (DFS) on a 3D Grid"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Depth-First Search (DFS)"})," is a fundamental algorithm used to explore nodes and edges of a graph or grid. It can be extended to 3D grids to explore nodes in three dimensions. In a 3D grid, each cell can be thought of as a node, and there are six possible directions to move to adjacent nodes."]}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsx)(n.p,{children:"Given a 3D grid, where each cell represents a node, perform a Depth-First Search to explore all reachable nodes starting from a given source cell. The grid allows movement in six possible directions: left, right, up, down, forward, and backward."}),"\n",(0,i.jsx)(n.h2,{id:"3d-grid-representation",children:"3D Grid Representation"}),"\n",(0,i.jsxs)(n.p,{children:["A 3D grid can be represented as a 3D array ",(0,i.jsx)(n.code,{children:"grid[x][y][z]"}),", where:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," represents the row index,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," represents the column index,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"z"})," represents the depth index."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The six possible moves from a cell ",(0,i.jsx)(n.code,{children:"(x, y, z)"})," are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Left"}),": ",(0,i.jsx)(n.code,{children:"(x - 1, y, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Right"}),": ",(0,i.jsx)(n.code,{children:"(x + 1, y, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Up"}),": ",(0,i.jsx)(n.code,{children:"(x, y - 1, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Down"}),": ",(0,i.jsx)(n.code,{children:"(x, y + 1, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Forward"}),": ",(0,i.jsx)(n.code,{children:"(x, y, z + 1)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backward"}),": ",(0,i.jsx)(n.code,{children:"(x, y, z - 1)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"depth-first-search-dfs-algorithm",children:"Depth-First Search (DFS) Algorithm"}),"\n",(0,i.jsx)(n.p,{children:"DFS explores as far as possible along a branch before backtracking. For a 3D grid, it involves:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialization"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a stack to keep track of cells to visit."}),"\n",(0,i.jsx)(n.li,{children:"Maintain a set or array to mark visited cells to avoid reprocessing."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Processing"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Push the starting cell onto the stack."}),"\n",(0,i.jsx)(n.li,{children:"While the stack is not empty, pop the top cell and process it."}),"\n",(0,i.jsx)(n.li,{children:"Push all valid and unvisited neighboring cells onto the stack."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Termination"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Continue until the stack is empty or a specific condition is met."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"javascript-implementation",children:"JavaScript Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function isValid(x, y, z, grid) {\r\n    return (\r\n        x >= 0 && x < grid.length &&\r\n        y >= 0 && y < grid[0].length &&\r\n        z >= 0 && z < grid[0][0].length\r\n    );\r\n}\r\n\r\nfunction dfs3D(grid, start) {\r\n    const directions = [\r\n        [-1, 0, 0], [1, 0, 0], // left, right\r\n        [0, -1, 0], [0, 1, 0], // up, down\r\n        [0, 0, -1], [0, 0, 1]  // backward, forward\r\n    ];\r\n\r\n    const [startX, startY, startZ] = start;\r\n    const stack = [[startX, startY, startZ]];\r\n    const visited = new Set();\r\n    visited.add(`${startX},${startY},${startZ}`);\r\n\r\n    while (stack.length > 0) {\r\n        const [x, y, z] = stack.pop();\r\n        console.log(`Visited cell: (${x}, ${y}, ${z})`); // Process the cell\r\n\r\n        for (const [dx, dy, dz] of directions) {\r\n            const nx = x + dx;\r\n            const ny = y + dy;\r\n            const nz = z + dz;\r\n\r\n            if (isValid(nx, ny, nz, grid) && !visited.has(`${nx},${ny},${nz}`)) {\r\n                visited.add(`${nx},${ny},${nz}`);\r\n                stack.push([nx, ny, nz]);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Example usage:\r\nconst grid = [\r\n    [\r\n        [[1, 2], [3, 4]],\r\n        [[5, 6], [7, 8]]\r\n    ],\r\n    [\r\n        [[9, 10], [11, 12]],\r\n        [[13, 14], [15, 16]]\r\n    ]\r\n];\r\n\r\nconst start = [0, 0, 0];\r\ndfs3D(grid, start);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dfs-on-boundary-conditions",children:"DFS on Boundary Conditions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-enclaves",children:"1020. Number of Enclaves"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function numEnclaves(grid) {\r\n  const rows = grid.length, cols = grid[0].length;\r\n  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // down, up, right, left\r\n\r\n  // DFS function to mark connected land cells as visited\r\n  function dfs(r, c) {\r\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) return;\r\n    grid[r][c] = 0; // Mark the cell as visited\r\n    for (const [dr, dc] of directions) {\r\n      dfs(r + dr, c + dc);\r\n    }\r\n  }\r\n\r\n  // Run DFS on all boundary cells that contain land\r\n  for (let r = 0; r < rows; r++) {\r\n    if (grid[r][0] === 1) dfs(r, 0);\r\n    if (grid[r][cols - 1] === 1) dfs(r, cols - 1);\r\n  }\r\n  for (let c = 0; c < cols; c++) {\r\n    if (grid[0][c] === 1) dfs(0, c);\r\n    if (grid[rows - 1][c] === 1) dfs(rows - 1, c);\r\n  }\r\n\r\n  // Count the remaining land cells (enclaves)\r\n  let enclaveCount = 0;\r\n  for (let r = 0; r < rows; r++) {\r\n    for (let c = 0; c < cols; c++) {\r\n      if (grid[r][c] === 1) enclaveCount++;\r\n    }\r\n  }\r\n\r\n  return enclaveCount;\r\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/surrounded-regions/",children:"130. Surrounded Regions"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"/**\r\n * @param {character[][]} board\r\n * @return {void} Do not return anything, modify board in-place instead.\r\n */\r\nvar solve = function (board) {\r\n  if (board.length === 0 || board[0].length === 0) return;\r\n  const rows = board.length;\r\n  const cols = board[0].length;\r\n\r\n  // Directions array to move: up, down, left, right\r\n  const directions = [\r\n    [-1, 0], // Move up\r\n    [1, 0],  // Move down\r\n    [0, -1], // Move left\r\n    [0, 1]   // Move right\r\n  ];\r\n\r\n  // Function to perform DFS and mark 'O's connected to borders\r\n  const dfs = (r, c) => {\r\n    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') return;\r\n    board[r][c] = 'E'; // Mark as escaped\r\n    // Explore all 4 directions\r\n    for (const [dr, dc] of directions) {\r\n      dfs(r + dr, c + dc);\r\n    }\r\n  };\r\n\r\n  // Start DFS from the border cells\r\n  for (let r = 0; r < rows; r++) {\r\n    dfs(r, 0); // Left border\r\n    dfs(r, cols - 1); // Right border\r\n  }\r\n  for (let c = 0; c < cols; c++) {\r\n    dfs(0, c); // Top border\r\n    dfs(rows - 1, c); // Bottom border\r\n  }\r\n\r\n  // Flip all 'O's to 'X's and all 'E's back to 'O's\r\n  for (let r = 0; r < rows; r++) {\r\n    for (let c = 0; c < cols; c++) {\r\n      if (board[r][c] === 'O') {\r\n        board[r][c] = 'X'; // Flip surrounded 'O' to 'X'\r\n      } else if (board[r][c] === 'E') {\r\n        board[r][c] = 'O'; // Restore escaped 'O' to 'O'\r\n      }\r\n    }\r\n  }\r\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2d-breadth-first-search-bfs",children:"2D Breadth-First Search (BFS)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function bfs(grid, startRow, startCol) {\r\n  const rows = grid.length;\r\n  const cols = grid[0].length;\r\n\r\n  // Direction vectors for moving right, down, left, and up\r\n  const directions = [\r\n    [0, 1],   // right\r\n    [1, 0],   // down\r\n    [0, -1],  // left\r\n    [-1, 0]   // up\r\n  ];\r\n\r\n  // Create a visited matrix initialized to false\r\n  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));\r\n\r\n  // Initialize the queue with the starting cell\r\n  const queue = [[startRow, startCol]];\r\n  visited[startRow][startCol] = true;\r\n\r\n  while (queue.length > 0) {\r\n    // Dequeue the front cell\r\n    const [row, col] = queue.shift();\r\n\r\n    // Print the current cell's value\r\n    console.log(grid[row][col]);\r\n\r\n    // Explore all neighbors\r\n    for (let [dr, dc] of directions) {\r\n      const newRow = row + dr;\r\n      const newCol = col + dc;\r\n\r\n      // Check if the new position is within bounds and not visited\r\n      if (\r\n        newRow >= 0 && newRow < rows &&\r\n        newCol >= 0 && newCol < cols &&\r\n        !visited[newRow][newCol]\r\n      ) {\r\n        // Mark the new cell as visited and enqueue it\r\n        visited[newRow][newCol] = true;\r\n        queue.push([newRow, newCol]);\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,i.jsx)(n.h1,{id:"breadth-first-search-bfs-on-a-3d-grid",children:"Breadth-First Search (BFS) on a 3D Grid"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Breadth-First Search (BFS)"})," is an algorithm used to explore nodes in a graph or grid level by level. It is particularly useful for finding the shortest path in unweighted graphs or grids. For a 3D grid, BFS can explore nodes in three dimensions, considering all six possible directions."]}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement-1",children:"Problem Statement"}),"\n",(0,i.jsx)(n.p,{children:"Given a 3D grid, where each cell represents a node, perform a Breadth-First Search to explore all reachable nodes starting from a given source cell. The grid allows movement in six possible directions: left, right, up, down, forward, and backward."}),"\n",(0,i.jsx)(n.h2,{id:"3d-grid-representation-1",children:"3D Grid Representation"}),"\n",(0,i.jsxs)(n.p,{children:["A 3D grid is represented as a 3D array ",(0,i.jsx)(n.code,{children:"grid[x][y][z]"}),", where:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"})," is the row index,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," is the column index,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"z"})," is the depth index."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The six possible moves from a cell ",(0,i.jsx)(n.code,{children:"(x, y, z)"})," are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Left"}),": ",(0,i.jsx)(n.code,{children:"(x - 1, y, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Right"}),": ",(0,i.jsx)(n.code,{children:"(x + 1, y, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Up"}),": ",(0,i.jsx)(n.code,{children:"(x, y - 1, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Down"}),": ",(0,i.jsx)(n.code,{children:"(x, y + 1, z)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Forward"}),": ",(0,i.jsx)(n.code,{children:"(x, y, z + 1)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backward"}),": ",(0,i.jsx)(n.code,{children:"(x, y, z - 1)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"breadth-first-search-bfs-algorithm",children:"Breadth-First Search (BFS) Algorithm"}),"\n",(0,i.jsx)(n.p,{children:"BFS explores nodes level by level, starting from the source node. For a 3D grid:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialization"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use a queue to keep track of cells to visit."}),"\n",(0,i.jsx)(n.li,{children:"Maintain a set or array to mark visited cells to avoid reprocessing."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Processing"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dequeue the front cell and process it."}),"\n",(0,i.jsx)(n.li,{children:"Enqueue all valid and unvisited neighboring cells."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Termination"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Continue until the queue is empty or a specific condition is met."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"javascript-implementation-1",children:"JavaScript Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function isValid(x, y, z, grid) {\r\n    return (\r\n        x >= 0 && x < grid.length &&\r\n        y >= 0 && y < grid[0].length &&\r\n        z >= 0 && z < grid[0][0].length\r\n    );\r\n}\r\n\r\nfunction bfs3D(grid, start) {\r\n    const directions = [\r\n        [-1, 0, 0], [1, 0, 0], // left, right\r\n        [0, -1, 0], [0, 1, 0], // up, down\r\n        [0, 0, -1], [0, 0, 1]  // backward, forward\r\n    ];\r\n\r\n    const [startX, startY, startZ] = start;\r\n    const queue = [[startX, startY, startZ]];\r\n    const visited = new Set();\r\n    visited.add(`${startX},${startY},${startZ}`);\r\n\r\n    while (queue.length > 0) {\r\n        const [x, y, z] = queue.shift(); // Dequeue the front cell\r\n        console.log(`Visited cell: (${x}, ${y}, ${z})`); // Process the cell\r\n\r\n        for (const [dx, dy, dz] of directions) {\r\n            const nx = x + dx;\r\n            const ny = y + dy;\r\n            const nz = z + dz;\r\n\r\n            if (isValid(nx, ny, nz, grid) && !visited.has(`${nx},${ny},${nz}`)) {\r\n                visited.add(`${nx},${ny},${nz}`);\r\n                queue.push([nx, ny, nz]); // Enqueue the neighboring cell\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Example usage:\r\nconst grid = [\r\n    [\r\n        [[1, 2], [3, 4]],\r\n        [[5, 6], [7, 8]]\r\n    ],\r\n    [\r\n        [[9, 10], [11, 12]],\r\n        [[13, 14], [15, 16]]\r\n    ]\r\n];\r\n\r\nconst start = [0, 0, 0];\r\nbfs3D(grid, start);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"shortest-path-using-bfs-on-2d-grid",children:"Shortest Path using BFS on 2D Grid"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function shortestPathInGrid(grid, startX, startY, endX, endY) {\r\n    const rows = grid.length;\r\n    const cols = grid[0].length;\r\n    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up\r\n\r\n    let queue = [[startX, startY, 0]]; // [row, col, distance]\r\n    let visited = new Set([`${startX},${startY}`]);\r\n\r\n    while (queue.length > 0) {\r\n        const [x, y, dist] = queue.shift();\r\n\r\n        if (x === endX && y === endY) return dist; // Reached the target\r\n\r\n        for (const [dx, dy] of directions) {\r\n            const newX = x + dx;\r\n            const newY = y + dy;\r\n\r\n            if (newX >= 0 && newY >= 0 && newX < rows && newY < cols &&\r\n                grid[newX][newY] === 1 && !visited.has(`${newX},${newY}`)) {\r\n                visited.add(`${newX},${newY}`);\r\n                queue.push([newX, newY, dist + 1]);\r\n            }\r\n        }\r\n    }\r\n\r\n    return -1; // No path found\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"shortest-path-using-dijkstra-on-2d-grid",children:"Shortest Path using Dijkstra on 2D Grid"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"function dijkstra(grid, start, end) {\r\n  const rows = grid.length;\r\n  const cols = grid[0].length;\r\n  const distances = Array.from({ length: rows }, () => Array(cols).fill(Infinity));\r\n  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up\r\n  const heap = new MinHeap();\r\n  const [startRow, startCol] = start;\r\n  const [endRow, endCol] = end;\r\n\r\n  distances[startRow][startCol] = 0;\r\n  heap.push([0, startRow, startCol]); //startDistance, row, col\r\n\r\n  while (heap.heap.length > 0) {\r\n    const [currentDist, row, col] = heap.pop();\r\n\r\n    if (row === endRow && col === endCol) {\r\n      return currentDist;\r\n    }\r\n\r\n    for (const [dr, dc] of directions) {\r\n      const newRow = row + dr;\r\n      const newCol = col + dc;\r\n\r\n      if (\r\n        newRow >= 0 &&\r\n        newRow < rows &&\r\n        newCol >= 0 &&\r\n        newCol < cols\r\n      ) {\r\n        const newDist = currentDist + grid[newRow][newCol];\r\n        if (newDist < distances[newRow][newCol]) {\r\n          distances[newRow][newCol] = newDist;\r\n          heap.push([newDist, newRow, newCol]);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return -1; // If no path is found\r\n}\n"})})]})}function h(r={}){const{wrapper:n}={...(0,s.R)(),...r.components};return n?(0,i.jsx)(n,{...r,children:(0,i.jsx)(a,{...r})}):a(r)}},8453:(r,n,e)=>{e.d(n,{R:()=>o,x:()=>l});var i=e(6540);const s={},t=i.createContext(s);function o(r){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function l(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:o(r.components),i.createElement(t.Provider,{value:n},r.children)}}}]);