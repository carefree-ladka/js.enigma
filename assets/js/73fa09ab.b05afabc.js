"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6810],{1915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(4848),i=t(8453);const s={},l="SortedList",o={id:"DSA/SortedList",title:"SortedList",description:"An array-based implementation that maintains elements in sorted order.",source:"@site/docs/DSA/SortedList.mdx",sourceDirName:"DSA",slug:"/DSA/SortedList",permalink:"/js.enigma/docs/DSA/SortedList",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/SortedList.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fast and Slow Pointers Technique",permalink:"/js.enigma/docs/DSA/SlowFastPointer"},next:{title:"Stack",permalink:"/js.enigma/docs/DSA/Stack"}},d={},a=[{value:"Purpose",id:"purpose",level:3},{value:"Common Methods",id:"common-methods",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"When to Use Each",id:"when-to-use-each",level:3},{value:"Performance Comparison",id:"performance-comparison",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sortedlist",children:"SortedList"})}),"\n",(0,r.jsx)(n.p,{children:"An array-based implementation that maintains elements in sorted order."}),"\n",(0,r.jsx)(n.h3,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Maintains elements in sorted order using an array"}),"\n",(0,r.jsx)(n.li,{children:"Provides fast index-based access"}),"\n",(0,r.jsx)(n.li,{children:"Allows duplicates"}),"\n",(0,r.jsx)(n.li,{children:"Better for smaller collections with frequent access by index"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"common-methods",children:"Common Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const list = new SortedList();\r\n\r\n// Basic Operations\r\nlist.add(item)           // Add item while maintaining sort order\r\nlist.remove(item)        // Remove first occurrence of item\r\nlist.get(index)         // Get item at index\r\nlist.indexOf(item)      // Find index of item\r\nlist.clear()            // Remove all items\r\nlist.size()             // Get number of items\r\nlist.isEmpty()          // Check if list is empty\r\n\r\n// Navigation\r\nlist.first()            // Get first item\r\nlist.last()             // Get last item\r\nlist.ceiling(item)      // Get smallest item \u2265 given item\r\nlist.floor(item)        // Get largest item \u2264 given item\r\n\r\n// Conversion\r\nlist.toArray()          // Convert to array\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const list = new SortedList();\r\nlist.add(3);\r\nlist.add(1);\r\nlist.add(2);\r\n\r\nconsole.log(list.get(1));        // 2\r\nconsole.log(list.ceiling(1.5));  // 2\r\nconsole.log(list.floor(2.5));    // 2\r\nconsole.log(list.toArray());     // [1, 2, 3]\n"})}),"\n",(0,r.jsx)(n.h1,{id:"sortedlist-implementation",children:"SortedList Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:"class SortedList {\r\n  constructor(comparator = (a, b) => a - b) {\r\n    this.items = [];\r\n    this.comparator = comparator;\r\n  }\r\n\r\n  // Add item while maintaining sort order - O(n)\r\n  add(item) {\r\n    const index = this.#findInsertionPoint(item);\r\n    this.items.splice(index, 0, item);\r\n    return this;\r\n  }\r\n\r\n  // Binary search to find insertion point - O(log n)\r\n  #findInsertionPoint(item) {\r\n    let left = 0;\r\n    let right = this.items.length;\r\n\r\n    while (left < right) {\r\n      const mid = (left + right) >> 1;\r\n      if (this.comparator(this.items[mid], item) <= 0) {\r\n        left = mid + 1;\r\n      } else {\r\n        right = mid;\r\n      }\r\n    }\r\n    return left;\r\n  }\r\n\r\n  // Remove first occurrence of item - O(n)\r\n  remove(item) {\r\n    const index = this.indexOf(item);\r\n    if (index !== -1) {\r\n      this.items.splice(index, 1);\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  // Binary search to find item - O(log n)\r\n  indexOf(item) {\r\n    let left = 0;\r\n    let right = this.items.length - 1;\r\n\r\n    while (left <= right) {\r\n      const mid = (left + right) >> 1;\r\n      const cmp = this.comparator(this.items[mid], item);\r\n\r\n      if (cmp === 0) return mid;\r\n      if (cmp < 0) left = mid + 1;\r\n      else right = mid - 1;\r\n    }\r\n    return -1;\r\n  }\r\n\r\n  // Get item at index - O(1)\r\n  get(index) {\r\n    if (index < 0 || index >= this.items.length) return undefined;\r\n    return this.items[index];\r\n  }\r\n\r\n  // Get first item greater than or equal to given item\r\n  ceiling(item) {\r\n    const index = this.#findInsertionPoint(item);\r\n    return index < this.items.length ? this.items[index] : undefined;\r\n  }\r\n\r\n  // Get last item less than or equal to given item\r\n  floor(item) {\r\n    const index = this.#findInsertionPoint(item);\r\n    return index > 0 ? this.items[index - 1] : undefined;\r\n  }\r\n\r\n  // Get first item\r\n  first() {\r\n    return this.items[0];\r\n  }\r\n\r\n  // Get last item\r\n  last() {\r\n    return this.items[this.items.length - 1];\r\n  }\r\n\r\n  // Get size\r\n  size() {\r\n    return this.items.length;\r\n  }\r\n\r\n  // Check if empty\r\n  isEmpty() {\r\n    return this.items.length === 0;\r\n  }\r\n\r\n  // Clear all items\r\n  clear() {\r\n    this.items = [];\r\n  }\r\n\r\n  // Convert to array\r\n  toArray() {\r\n    return [...this.items];\r\n  }\r\n\r\n  // Iterator\r\n  *[Symbol.iterator]() {\r\n    yield* this.items;\r\n  }\r\n}\r\n\r\nconst list = new SortedList();\r\nlist.add(5);\r\nlist.add(3);\r\nlist.add(7);\r\nconsole.log(list.toArray());  // [3, 5, 7]\r\nconsole.log(list.ceiling(4)); // 5\r\nconsole.log(list.floor(6));   // 5\r\nlist.remove(5);\r\nconsole.log(list.toArray());  // [3, 7]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"when-to-use-each",children:"When to Use Each"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SortedList"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Need index-based access"}),"\n",(0,r.jsx)(n.li,{children:"Working with smaller datasets"}),"\n",(0,r.jsx)(n.li,{children:"Memory efficiency is important"}),"\n",(0,r.jsx)(n.li,{children:"Allow duplicates"}),"\n",(0,r.jsx)(n.li,{children:"Frequent iterations over the entire collection"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"performance-comparison",children:"Performance Comparison"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operation"}),(0,r.jsx)(n.th,{children:"TreeMap/Set"}),(0,r.jsx)(n.th,{children:"SortedList"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Insert"}),(0,r.jsx)(n.td,{children:"O(log n)"}),(0,r.jsx)(n.td,{children:"O(n)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Delete"}),(0,r.jsx)(n.td,{children:"O(log n)"}),(0,r.jsx)(n.td,{children:"O(n)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Search"}),(0,r.jsx)(n.td,{children:"O(log n)"}),(0,r.jsx)(n.td,{children:"O(log n)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Access"}),(0,r.jsx)(n.td,{children:"O(log n)"}),(0,r.jsx)(n.td,{children:"O(1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Min/Max"}),(0,r.jsx)(n.td,{children:"O(log n)"}),(0,r.jsx)(n.td,{children:"O(1)"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);