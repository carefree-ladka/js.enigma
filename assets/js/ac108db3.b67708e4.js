"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5301],{6145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(4848),l=i(8453);const r={title:"Minimum Enclosing Circle - Welzl's Algorithm",description:"Learn how to find the smallest enclosing circle for a set of points using Welzl\u2019s Algorithm.",categories:["Algorithms","Computational Geometry"],tags:["Geometry","Convex Hull","Welzl's Algorithm"]},t="Minimum Enclosing Circle using Welzl\u2019s Algorithm",o={id:"DSA/Welzl\u2019sAlgorithm",title:"Minimum Enclosing Circle - Welzl's Algorithm",description:"Learn how to find the smallest enclosing circle for a set of points using Welzl\u2019s Algorithm.",source:"@site/docs/DSA/Welzl\u2019sAlgorithm.mdx",sourceDirName:"DSA",slug:"/DSA/Welzl\u2019sAlgorithm",permalink:"/js.enigma/docs/DSA/Welzl\u2019sAlgorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/Welzl\u2019sAlgorithm.mdx",tags:[{inline:!0,label:"Geometry",permalink:"/js.enigma/docs/tags/geometry"},{inline:!0,label:"Convex Hull",permalink:"/js.enigma/docs/tags/convex-hull"},{inline:!0,label:"Welzl's Algorithm",permalink:"/js.enigma/docs/tags/welzls-algorithm"}],version:"current",frontMatter:{title:"Minimum Enclosing Circle - Welzl's Algorithm",description:"Learn how to find the smallest enclosing circle for a set of points using Welzl\u2019s Algorithm.",categories:["Algorithms","Computational Geometry"],tags:["Geometry","Convex Hull","Welzl's Algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Unix File System",permalink:"/js.enigma/docs/DSA/UnixFileSystem"},next:{title:"Frontend System Design",permalink:"/js.enigma/docs/category/frontend-system-design"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"<strong>Example</strong>",id:"example",level:3},{value:"<strong>Approach - Welzl\u2019s Algorithm</strong>",id:"approach---welzls-algorithm",level:2},{value:"<strong>Implementation in JavaScript</strong>",id:"implementation-in-javascript",level:2},{value:"Problems",id:"problems",level:2},{value:"<strong>Complexity Analysis</strong>",id:"complexity-analysis",level:2},{value:"<strong>Why This Works?</strong>",id:"why-this-works",level:2},{value:"<strong>Use Cases</strong>",id:"use-cases",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"minimum-enclosing-circle-using-welzls-algorithm",children:"Minimum Enclosing Circle using Welzl\u2019s Algorithm"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Minimum Enclosing Circle (MEC)"})," problem requires finding the smallest possible circle that encloses a set of given points in a 2D plane. This is widely used in ",(0,s.jsx)(n.strong,{children:"robotics, computer vision, clustering, and collision detection"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given ",(0,s.jsx)(n.code,{children:"n"})," points in a 2D plane, find the smallest circle ",(0,s.jsx)(n.code,{children:"(x, y, r)"})," such that all points lie inside or on the boundary of the circle. The goal is to minimize ",(0,s.jsx)(n.code,{children:"r"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Input: trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]\r\nOutput: [2.00000, 2.00000, 2.00000]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"approach---welzls-algorithm",children:(0,s.jsx)(n.strong,{children:"Approach - Welzl\u2019s Algorithm"})}),"\n",(0,s.jsxs)(n.p,{children:["Welzl\u2019s Algorithm is a ",(0,s.jsx)(n.strong,{children:"recursive, randomized algorithm"})," that finds the ",(0,s.jsx)(n.strong,{children:"minimum enclosing circle in O(n) expected time"}),". It follows:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Base Case:"})," If there are no points left or we have 3 boundary points, return the circle through those points."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Recursion:"})," Pick a random point ",(0,s.jsx)(n.code,{children:"p"}),", compute the MEC without ",(0,s.jsx)(n.code,{children:"p"}),", and check if ",(0,s.jsx)(n.code,{children:"p"})," is inside. If not, ",(0,s.jsx)(n.code,{children:"p"})," must be on the boundary."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bounding Case:"})," If ",(0,s.jsx)(n.code,{children:"p"})," is outside, solve recursively with ",(0,s.jsx)(n.code,{children:"p"})," added to the boundary."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"implementation-in-javascript",children:(0,s.jsx)(n.strong,{children:"Implementation in JavaScript"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"const minEnclosingCircle = (trees) => {\r\n    const dist = (p1, p2) => Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);\r\n\r\n    const circleFromTwo = ([x1, y1], [x2, y2]) => {\r\n        let cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;\r\n        return [cx, cy, dist([cx, cy], [x1, y1])];\r\n    };\r\n\r\n    const circleFromThree = ([x1, y1], [x2, y2], [x3, y3]) => {\r\n        let d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));\r\n        if (d === 0) return null;\r\n        let cx = ((x1 ** 2 + y1 ** 2) * (y2 - y3) + (x2 ** 2 + y2 ** 2) * (y3 - y1) + (x3 ** 2 + y3 ** 2) * (y1 - y2)) / d;\r\n        let cy = ((x1 ** 2 + y1 ** 2) * (x3 - x2) + (x2 ** 2 + y2 ** 2) * (x1 - x3) + (x3 ** 2 + y3 ** 2) * (x2 - x1)) / d;\r\n        return [cx, cy, dist([cx, cy], [x1, y1])];\r\n    };\r\n\r\n    const isInside = (c, p) => dist([c[0], c[1]], p) <= c[2] + 1e-7;\r\n\r\n    const welzl = (points, R = []) => {\r\n        if (!points.length || R.length === 3) \r\n            return R.length === 0 ? [0, 0, 0] :\r\n                   R.length === 1 ? [...R[0], 0] :\r\n                   R.length === 2 ? circleFromTwo(R[0], R[1]) :\r\n                   circleFromThree(R[0], R[1], R[2]);\r\n\r\n        let p = points.pop(), c = welzl([...points], R);\r\n        return isInside(c, p) ? c : welzl([...points], [...R, p]);\r\n    };\r\n\r\n    return welzl(trees.sort(() => Math.random() - 0.5)).map(v => +v.toFixed(5));\r\n};\r\n\r\n// Example Usage\r\nconsole.log(minEnclosingCircle([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]])); // [2.00000, 2.00000, 2.00000]\r\nconsole.log(minEnclosingCircle([[1,2],[2,2],[4,2]])); // [2.50000, 2.00000, 1.50000]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"problems",children:"Problems"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/erect-the-fence-ii/description/",children:"https://leetcode.com/problems/erect-the-fence-ii/description/"})}),"\n",(0,s.jsx)(n.li,{children:"Smallest Circle Covering Points (Variation of [1924])"}),"\n",(0,s.jsx)(n.li,{children:"Geometric Range Queries / Bounding Circle in K-D Trees"}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{start:"1232",children:["\n",(0,s.jsx)(n.li,{children:"Check If It Is a Straight Line"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"complexity-analysis",children:(0,s.jsx)(n.strong,{children:"Complexity Analysis"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Expected Time Complexity:"})," O(n)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Worst-Case Complexity:"})," O(n\xb2) (rare, occurs when recursion goes deep)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Space Complexity:"})," O(n) (due to recursion stack)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"why-this-works",children:(0,s.jsx)(n.strong,{children:"Why This Works?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Uses ",(0,s.jsx)(n.strong,{children:"randomization"})," to reduce recursive depth."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"smallest enclosing circle property"})," ensures that the boundary points are minimal."]}),"\n",(0,s.jsxs)(n.li,{children:["Handles ",(0,s.jsx)(n.strong,{children:"degenerate cases"})," like collinear points gracefully."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-cases",children:(0,s.jsx)(n.strong,{children:"Use Cases"})}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Collision detection in games\r\n\u2705 Bounding circle for point clusters\r\n\u2705 Efficient space partitioning in 2D geometry"}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:(0,s.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,s.jsxs)(n.p,{children:["Welzl\u2019s Algorithm provides an ",(0,s.jsx)(n.strong,{children:"efficient O(n) expected time"})," approach to finding the ",(0,s.jsx)(n.strong,{children:"smallest enclosing circle"}),". It is widely used in computational geometry problems and real-world applications."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.geeksforgeeks.org/minimum-enclosing-circle-using-welzls-algorithm/",children:"https://www.geeksforgeeks.org/minimum-enclosing-circle-using-welzls-algorithm/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Smallest-circle_problem",children:"https://en.wikipedia.org/wiki/Smallest-circle_problem"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(6540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);