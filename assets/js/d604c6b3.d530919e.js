"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4899],{382:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(4848),i=n(8453);const o={},s="TreeSet",l={id:"DSA/TreeSet",title:"TreeSet",description:"A self-balancing binary search tree implementation that stores unique values in sorted order.",source:"@site/docs/DSA/TreeSet.mdx",sourceDirName:"DSA",slug:"/DSA/TreeSet",permalink:"/js.enigma/docs/DSA/TreeSet",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/TreeSet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TreeMap",permalink:"/js.enigma/docs/DSA/TreeMap"},next:{title:"Trie Data Structure",permalink:"/js.enigma/docs/DSA/Trie"}},a={},d=[{value:"Purpose",id:"purpose",level:3},{value:"Common Methods",id:"common-methods",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"When to Use Each",id:"when-to-use-each",level:3},{value:"Performance Comparison",id:"performance-comparison",level:3}];function h(e){const r={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"treeset",children:"TreeSet"})}),"\n",(0,t.jsx)(r.p,{children:"A self-balancing binary search tree implementation that stores unique values in sorted order."}),"\n",(0,t.jsx)(r.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Maintains unique elements in sorted order"}),"\n",(0,t.jsx)(r.li,{children:"Provides efficient operations for insertion, deletion, and lookup"}),"\n",(0,t.jsx)(r.li,{children:"Guarantees O(log n) time complexity for most operations"}),"\n",(0,t.jsx)(r.li,{children:"Automatically handles duplicates"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"common-methods",children:"Common Methods"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const set = new TreeSet();\r\n\r\n// Basic Operations\r\nset.add(value)           // Add value to set\r\nset.remove(value)        // Remove value from set\r\nset.has(value)          // Check if value exists\r\nset.clear()             // Remove all values\r\nset.getSize()           // Get set size\r\nset.isEmpty()           // Check if set is empty\r\n\r\n// Navigation\r\nset.first()             // Get minimum value\r\nset.last()              // Get maximum value\r\nset.ceiling(value)      // Get smallest value \u2265 given value\r\nset.floor(value)        // Get largest value \u2264 given value\r\n\r\n// Conversion\r\nset.toArray()           // Convert to sorted array\n"})}),"\n",(0,t.jsx)(r.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const set = new TreeSet();\r\nset.add(3);\r\nset.add(1);\r\nset.add(2);\r\n\r\nconsole.log(set.has(2));       // true\r\nconsole.log(set.ceiling(1.5)); // 2\r\nconsole.log(set.floor(2.5));   // 2\r\nconsole.log(set.toArray());    // [1, 2, 3]\n"})}),"\n",(0,t.jsx)(r.h1,{id:"treeset-implementation",children:"TreeSet Implementation"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class TreeNode {\r\n  constructor(value) {\r\n    this.value = value;\r\n    this.left = null;\r\n    this.right = null;\r\n    this.height = 1;\r\n  }\r\n}\r\n\r\nclass TreeSet {\r\n  constructor(comparator = (a, b) => a - b) {\r\n    this.root = null;\r\n    this.size = 0;\r\n    this.comparator = comparator;\r\n  }\r\n\r\n  #getHeight(node) {\r\n    return node ? node.height : 0;\r\n  }\r\n\r\n  #getBalance(node) {\r\n    return node ? this.#getHeight(node.left) - this.#getHeight(node.right) : 0;\r\n  }\r\n\r\n  #rightRotate(y) {\r\n    const x = y.left;\r\n    const T2 = x.right;\r\n\r\n    x.right = y;\r\n    y.left = T2;\r\n\r\n    y.height = Math.max(this.#getHeight(y.left), this.#getHeight(y.right)) + 1;\r\n    x.height = Math.max(this.#getHeight(x.left), this.#getHeight(x.right)) + 1;\r\n\r\n    return x;\r\n  }\r\n\r\n  #leftRotate(x) {\r\n    const y = x.right;\r\n    const T2 = y.left;\r\n\r\n    y.left = x;\r\n    x.right = T2;\r\n\r\n    x.height = Math.max(this.#getHeight(x.left), this.#getHeight(x.right)) + 1;\r\n    y.height = Math.max(this.#getHeight(y.left), this.#getHeight(y.right)) + 1;\r\n\r\n    return y;\r\n  }\r\n\r\n  // Add value to set\r\n  add(value) {\r\n    const result = !this.has(value);\r\n    if (result) {\r\n      this.root = this.#add(this.root, value);\r\n      this.size++;\r\n    }\r\n    return result;\r\n  }\r\n\r\n  #add(node, value) {\r\n    if (!node) return new TreeNode(value);\r\n\r\n    const cmp = this.comparator(value, node.value);\r\n    if (cmp < 0) {\r\n      node.left = this.#add(node.left, value);\r\n    } else if (cmp > 0) {\r\n      node.right = this.#add(node.right, value);\r\n    } else {\r\n      return node;\r\n    }\r\n\r\n    node.height = Math.max(this.#getHeight(node.left), this.#getHeight(node.right)) + 1;\r\n    const balance = this.#getBalance(node);\r\n\r\n    // Balance the tree\r\n    if (balance > 1 && this.comparator(value, node.left.value) < 0) {\r\n      return this.#rightRotate(node);\r\n    }\r\n    if (balance < -1 && this.comparator(value, node.right.value) > 0) {\r\n      return this.#leftRotate(node);\r\n    }\r\n    if (balance > 1 && this.comparator(value, node.left.value) > 0) {\r\n      node.left = this.#leftRotate(node.left);\r\n      return this.#rightRotate(node);\r\n    }\r\n    if (balance < -1 && this.comparator(value, node.right.value) < 0) {\r\n      node.right = this.#rightRotate(node.right);\r\n      return this.#leftRotate(node);\r\n    }\r\n\r\n    return node;\r\n  }\r\n\r\n  // Remove value from set\r\n  remove(value) {\r\n    const result = this.has(value);\r\n    if (result) {\r\n      this.root = this.#remove(this.root, value);\r\n      this.size--;\r\n    }\r\n    return result;\r\n  }\r\n\r\n  #remove(node, value) {\r\n    if (!node) return null;\r\n\r\n    const cmp = this.comparator(value, node.value);\r\n    if (cmp < 0) {\r\n      node.left = this.#remove(node.left, value);\r\n    } else if (cmp > 0) {\r\n      node.right = this.#remove(node.right, value);\r\n    } else {\r\n      if (!node.left || !node.right) {\r\n        return node.left || node.right;\r\n      }\r\n      const temp = this.#getMin(node.right);\r\n      node.value = temp.value;\r\n      node.right = this.#remove(node.right, temp.value);\r\n    }\r\n\r\n    node.height = Math.max(this.#getHeight(node.left), this.#getHeight(node.right)) + 1;\r\n    const balance = this.#getBalance(node);\r\n\r\n    if (balance > 1 && this.#getBalance(node.left) >= 0) {\r\n      return this.#rightRotate(node);\r\n    }\r\n    if (balance > 1 && this.#getBalance(node.left) < 0) {\r\n      node.left = this.#leftRotate(node.left);\r\n      return this.#rightRotate(node);\r\n    }\r\n    if (balance < -1 && this.#getBalance(node.right) <= 0) {\r\n      return this.#leftRotate(node);\r\n    }\r\n    if (balance < -1 && this.#getBalance(node.right) > 0) {\r\n      node.right = this.#rightRotate(node.right);\r\n      return this.#leftRotate(node);\r\n    }\r\n\r\n    return node;\r\n  }\r\n\r\n  // Check if value exists\r\n  has(value) {\r\n    return this.#find(this.root, value) !== null;\r\n  }\r\n\r\n  #find(node, value) {\r\n    if (!node) return null;\r\n    const cmp = this.comparator(value, node.value);\r\n    if (cmp === 0) return node;\r\n    return cmp < 0 ? this.#find(node.left, value) : this.#find(node.right, value);\r\n  }\r\n\r\n  #getMin(node) {\r\n    while (node.left) {\r\n      node = node.left;\r\n    }\r\n    return node;\r\n  }\r\n\r\n  #getMax(node) {\r\n    while (node.right) {\r\n      node = node.right;\r\n    }\r\n    return node;\r\n  }\r\n\r\n  // Get smallest value greater than or equal to given value\r\n  ceiling(value) {\r\n    let node = this.root;\r\n    let result = null;\r\n\r\n    while (node) {\r\n      const cmp = this.comparator(value, node.value);\r\n      if (cmp === 0) return node.value;\r\n      if (cmp < 0) {\r\n        result = node.value;\r\n        node = node.left;\r\n      } else {\r\n        node = node.right;\r\n      }\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  // Get largest value less than or equal to given value\r\n  floor(value) {\r\n    let node = this.root;\r\n    let result = null;\r\n\r\n    while (node) {\r\n      const cmp = this.comparator(value, node.value);\r\n      if (cmp === 0) return node.value;\r\n      if (cmp < 0) {\r\n        node = node.left;\r\n      } else {\r\n        result = node.value;\r\n        node = node.right;\r\n      }\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  // Get smallest value in set\r\n  first() {\r\n    return this.root ? this.#getMin(this.root).value : undefined;\r\n  }\r\n\r\n  // Get largest value in set\r\n  last() {\r\n    return this.root ? this.#getMax(this.root).value : undefined;\r\n  }\r\n\r\n  // Get set size\r\n  getSize() {\r\n    return this.size;\r\n  }\r\n\r\n  // Check if set is empty\r\n  isEmpty() {\r\n    return this.size === 0;\r\n  }\r\n\r\n  // Clear all values\r\n  clear() {\r\n    this.root = null;\r\n    this.size = 0;\r\n  }\r\n\r\n  // Convert to array (in-order traversal)\r\n  toArray() {\r\n    const result = [];\r\n    this.#inorderTraversal(this.root, value => result.push(value));\r\n    return result;\r\n  }\r\n\r\n  #inorderTraversal(node, callback) {\r\n    if (node) {\r\n      this.#inorderTraversal(node.left, callback);\r\n      callback(node.value);\r\n      this.#inorderTraversal(node.right, callback);\r\n    }\r\n  }\r\n\r\n  // Iterator\r\n  *[Symbol.iterator]() {\r\n    yield* this.#iterate(this.root);\r\n  }\r\n\r\n  *#iterate(node) {\r\n    if (node) {\r\n      yield* this.#iterate(node.left);\r\n      yield node.value;\r\n      yield* this.#iterate(node.right);\r\n    }\r\n  }\r\n}\r\n\r\n// TreeSet usage\r\nconst set = new TreeSet();\r\nset.add(5);\r\nset.add(3);\r\nset.add(7);\r\nconsole.log(set.toArray());   // [3, 5, 7]\r\nconsole.log(set.ceiling(4));  // 5\r\nconsole.log(set.floor(6));    // 5\r\nset.remove(5);\r\nconsole.log(set.toArray());   // [3, 7]\r\n\r\n// Custom comparator example\r\nconst strSet = new TreeSet((a, b) => a.localeCompare(b));\r\nstrSet.add("banana");\r\nstrSet.add("apple");\r\nstrSet.add("cherry");\r\nconsole.log(strSet.toArray()); // ["apple", "banana", "cherry"]\n'})}),"\n",(0,t.jsx)(r.h3,{id:"when-to-use-each",children:"When to Use Each"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"TreeSet"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Need unique values in sorted order"}),"\n",(0,t.jsx)(r.li,{children:"Large datasets with frequent modifications"}),"\n",(0,t.jsx)(r.li,{children:"Need automatic duplicate handling"}),"\n",(0,t.jsx)(r.li,{children:"Memory usage is not a primary concern"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"performance-comparison",children:"Performance Comparison"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Operation"}),(0,t.jsx)(r.th,{children:"TreeMap/Set"}),(0,t.jsx)(r.th,{children:"SortedList"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Insert"}),(0,t.jsx)(r.td,{children:"O(log n)"}),(0,t.jsx)(r.td,{children:"O(n)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Delete"}),(0,t.jsx)(r.td,{children:"O(log n)"}),(0,t.jsx)(r.td,{children:"O(n)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Search"}),(0,t.jsx)(r.td,{children:"O(log n)"}),(0,t.jsx)(r.td,{children:"O(log n)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Access"}),(0,t.jsx)(r.td,{children:"O(log n)"}),(0,t.jsx)(r.td,{children:"O(1)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Min/Max"}),(0,t.jsx)(r.td,{children:"O(log n)"}),(0,t.jsx)(r.td,{children:"O(1)"})]})]})]})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);