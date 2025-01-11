"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{1786:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=r(4848),i=r(8453);const o={},s="TreeMap",a={id:"tutorial-basics/TreeMap",title:"TreeMap",description:"A self-balancing binary search tree implementation that stores key-value pairs in sorted order by keys.",source:"@site/docs/tutorial-basics/TreeMap.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/TreeMap",permalink:"/js.enigma/docs/tutorial-basics/TreeMap",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/TreeMap.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Topological Sort Tutorial",permalink:"/js.enigma/docs/tutorial-basics/TopologicalSort"},next:{title:"TreeSet",permalink:"/js.enigma/docs/tutorial-basics/TreeSet"}},l={},h=[{value:"Purpose",id:"purpose",level:3},{value:"Common Methods",id:"common-methods",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"When to Use Each",id:"when-to-use-each",level:3},{value:"Performance Comparison",id:"performance-comparison",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"treemap",children:"TreeMap"})}),"\n",(0,t.jsx)(n.p,{children:"A self-balancing binary search tree implementation that stores key-value pairs in sorted order by keys."}),"\n",(0,t.jsx)(n.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maintains key-value pairs in sorted order"}),"\n",(0,t.jsx)(n.li,{children:"Provides efficient operations for insertion, deletion, and lookup"}),"\n",(0,t.jsx)(n.li,{children:"Guarantees O(log n) time complexity for most operations"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"common-methods",children:"Common Methods"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const map = new TreeMap();\r\n\r\n// Basic Operations\r\nmap.put(key, value)      // Add or update key-value pair\r\nmap.get(key)             // Get value by key\r\nmap.remove(key)          // Remove key-value pair\r\nmap.has(key)             // Check if key exists\r\nmap.clear()              // Remove all entries\r\nmap.getSize()            // Get number of entries\r\nmap.isEmpty()            // Check if map is empty\r\n\r\n// Navigation\r\nmap.firstKey()           // Get minimum key\r\nmap.lastKey()            // Get maximum key\r\nmap.ceilingKey(key)      // Get smallest key \u2265 given key\r\nmap.floorKey(key)        // Get largest key \u2264 given key\r\n\r\n// Collection Views\r\nmap.keys()               // Get all keys in sorted order\r\nmap.values()             // Get all values in key order\r\nmap.entries()            // Get all key-value pairs in key order\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const map = new TreeMap();\r\nmap.put("A", 1);\r\nmap.put("C", 3);\r\nmap.put("B", 2);\r\n\r\nconsole.log(map.get("B"));         // 2\r\nconsole.log(map.ceilingKey("B"));  // "B"\r\nconsole.log(map.floorKey("B"));    // "B"\r\nconsole.log(map.keys());           // ["A", "B", "C"]\n'})}),"\n",(0,t.jsx)(n.h1,{id:"treemap-implementation",children:"TreeMap implementation"}),"\n",(0,t.jsx)(n.p,{children:"The TreeMap implementation provides a wide range of functionalities for storing and navigating key-value pairs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'class TreeNode {\r\n  constructor(key, value) {\r\n    this.key = key;\r\n    this.value = value;\r\n    this.left = null;\r\n    this.right = null;\r\n    this.height = 1;\r\n  }\r\n}\r\n\r\n\r\nclass TreeMap {\r\n  constructor() {\r\n    this.root = null;\r\n    this.size = 0;\r\n  }\r\n\r\n  // Get height of node\r\n  #getHeight(node) {\r\n    return node ? node.height : 0;\r\n  }\r\n\r\n  // Get balance factor\r\n  #getBalance(node) {\r\n    return node ? this.#getHeight(node.left) - this.#getHeight(node.right) : 0;\r\n  }\r\n\r\n  // Right rotation\r\n  #rightRotate(y) {\r\n    const x = y.left;\r\n    const T2 = x.right;\r\n\r\n    x.right = y;\r\n    y.left = T2;\r\n\r\n    y.height = Math.max(this.#getHeight(y.left), this.#getHeight(y.right)) + 1;\r\n    x.height = Math.max(this.#getHeight(x.left), this.#getHeight(x.right)) + 1;\r\n\r\n    return x;\r\n  }\r\n\r\n  // Left rotation\r\n  #leftRotate(x) {\r\n    const y = x.right;\r\n    const T2 = y.left;\r\n\r\n    y.left = x;\r\n    x.right = T2;\r\n\r\n    x.height = Math.max(this.#getHeight(x.left), this.#getHeight(x.right)) + 1;\r\n    y.height = Math.max(this.#getHeight(y.left), this.#getHeight(y.right)) + 1;\r\n\r\n    return y;\r\n  }\r\n\r\n  // Insert a key-value pair\r\n  put(key, value) {\r\n    this.root = this.#put(this.root, key, value);\r\n    return this;\r\n  }\r\n\r\n  #put(node, key, value) {\r\n    if (!node) {\r\n      this.size++;\r\n      return new TreeNode(key, value);\r\n    }\r\n\r\n    if (key < node.key) {\r\n      node.left = this.#put(node.left, key, value);\r\n    } else if (key > node.key) {\r\n      node.right = this.#put(node.right, key, value);\r\n    } else {\r\n      node.value = value; // Update value if key exists\r\n      return node;\r\n    }\r\n\r\n    node.height = Math.max(this.#getHeight(node.left), this.#getHeight(node.right)) + 1;\r\n\r\n    const balance = this.#getBalance(node);\r\n\r\n    // Left Left Case\r\n    if (balance > 1 && key < node.left.key) {\r\n      return this.#rightRotate(node);\r\n    }\r\n\r\n    // Right Right Case\r\n    if (balance < -1 && key > node.right.key) {\r\n      return this.#leftRotate(node);\r\n    }\r\n\r\n    // Left Right Case\r\n    if (balance > 1 && key > node.left.key) {\r\n      node.left = this.#leftRotate(node.left);\r\n      return this.#rightRotate(node);\r\n    }\r\n\r\n    // Right Left Case\r\n    if (balance < -1 && key < node.right.key) {\r\n      node.right = this.#rightRotate(node.right);\r\n      return this.#leftRotate(node);\r\n    }\r\n\r\n    return node;\r\n  }\r\n\r\n  // Get value by key\r\n  get(key) {\r\n    const node = this.#get(this.root, key);\r\n    return node ? node.value : undefined;\r\n  }\r\n\r\n  #get(node, key) {\r\n    if (!node) return null;\r\n    if (key === node.key) return node;\r\n    return key < node.key ? this.#get(node.left, key) : this.#get(node.right, key);\r\n  }\r\n\r\n  // Remove key-value pair\r\n  remove(key) {\r\n    const hasKey = this.has(key);\r\n    if (hasKey) {\r\n      this.root = this.#remove(this.root, key);\r\n      this.size--;\r\n    }\r\n    return hasKey;\r\n  }\r\n\r\n  #remove(node, key) {\r\n    if (!node) return null;\r\n\r\n    if (key < node.key) {\r\n      node.left = this.#remove(node.left, key);\r\n    } else if (key > node.key) {\r\n      node.right = this.#remove(node.right, key);\r\n    } else {\r\n      if (!node.left || !node.right) {\r\n        return node.left || node.right;\r\n      }\r\n\r\n      const successor = this.#getMin(node.right);\r\n      node.key = successor.key;\r\n      node.value = successor.value;\r\n      node.right = this.#remove(node.right, successor.key);\r\n    }\r\n\r\n    node.height = Math.max(this.#getHeight(node.left), this.#getHeight(node.right)) + 1;\r\n\r\n    const balance = this.#getBalance(node);\r\n\r\n    // Rebalance after removal\r\n    if (balance > 1 && this.#getBalance(node.left) >= 0) {\r\n      return this.#rightRotate(node);\r\n    }\r\n    if (balance > 1 && this.#getBalance(node.left) < 0) {\r\n      node.left = this.#leftRotate(node.left);\r\n      return this.#rightRotate(node);\r\n    }\r\n    if (balance < -1 && this.#getBalance(node.right) <= 0) {\r\n      return this.#leftRotate(node);\r\n    }\r\n    if (balance < -1 && this.#getBalance(node.right) > 0) {\r\n      node.right = this.#rightRotate(node.right);\r\n      return this.#leftRotate(node);\r\n    }\r\n\r\n    return node;\r\n  }\r\n\r\n  // Check if key exists\r\n  has(key) {\r\n    return this.#get(this.root, key) !== null;\r\n  }\r\n\r\n  // Get minimum key\r\n  firstKey() {\r\n    if (!this.root) return undefined;\r\n    return this.#getMin(this.root).key;\r\n  }\r\n\r\n  // Get maximum key\r\n  lastKey() {\r\n    if (!this.root) return undefined;\r\n    return this.#getMax(this.root).key;\r\n  }\r\n\r\n  #getMin(node) {\r\n    while (node.left) {\r\n      node = node.left;\r\n    }\r\n    return node;\r\n  }\r\n\r\n  #getMax(node) {\r\n    while (node.right) {\r\n      node = node.right;\r\n    }\r\n    return node;\r\n  }\r\n\r\n  // Get first key greater than or equal to given key\r\n  ceilingKey(key) {\r\n    let node = this.root;\r\n    let ceiling = null;\r\n\r\n    while (node) {\r\n      if (key === node.key) {\r\n        return key;\r\n      }\r\n      if (key < node.key) {\r\n        ceiling = node.key;\r\n        node = node.left;\r\n      } else {\r\n        node = node.right;\r\n      }\r\n    }\r\n\r\n    return ceiling;\r\n  }\r\n\r\n  // Get last key less than or equal to given key\r\n  floorKey(key) {\r\n    let node = this.root;\r\n    let floor = null;\r\n\r\n    while (node) {\r\n      if (key === node.key) {\r\n        return key;\r\n      }\r\n      if (key < node.key) {\r\n        node = node.left;\r\n      } else {\r\n        floor = node.key;\r\n        node = node.right;\r\n      }\r\n    }\r\n\r\n    return floor;\r\n  }\r\n\r\n  // Clear all entries\r\n  clear() {\r\n    this.root = null;\r\n    this.size = 0;\r\n  }\r\n\r\n  // Get size of tree\r\n  getSize() {\r\n    return this.size;\r\n  }\r\n\r\n  // Check if tree is empty\r\n  isEmpty() {\r\n    return this.size === 0;\r\n  }\r\n\r\n  // Get all keys in order\r\n  keys() {\r\n    const result = [];\r\n    this.#inorderTraversal(this.root, node => result.push(node.key));\r\n    return result;\r\n  }\r\n\r\n  // Get all values in order of keys\r\n  values() {\r\n    const result = [];\r\n    this.#inorderTraversal(this.root, node => result.push(node.value));\r\n    return result;\r\n  }\r\n\r\n  // Get all entries in order\r\n  entries() {\r\n    const result = [];\r\n    this.#inorderTraversal(this.root, node => result.push([node.key, node.value]));\r\n    return result;\r\n  }\r\n\r\n  #inorderTraversal(node, callback) {\r\n    if (node) {\r\n      this.#inorderTraversal(node.left, callback);\r\n      callback(node);\r\n      this.#inorderTraversal(node.right, callback);\r\n    }\r\n  }\r\n}\r\n\r\nconst map = new TreeMap();\r\n\r\n// Insert key-value pairs\r\nmap.put(5, "five");\r\nmap.put(3, "three");\r\nmap.put(7, "seven");\r\n\r\nconsole.log(map.get(3));  // "three"\r\nconsole.log(map.has(7));  // true\r\nconsole.log(map.firstKey());  // 3\r\nconsole.log(map.lastKey());   // 7\r\nconsole.log(map.ceilingKey(4));  // 5\r\nconsole.log(map.floorKey(6));    // 5\r\nconsole.log(map.keys());     // [3, 5, 7]\r\nconsole.log(map.getSize());  // 3\r\n\r\nmap.remove(5);\r\nconsole.log(map.has(5));  // false\n'})}),"\n",(0,t.jsx)(n.h3,{id:"when-to-use-each",children:"When to Use Each"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TreeMap"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Need key-value associations in sorted order"}),"\n",(0,t.jsx)(n.li,{children:"Large datasets with frequent modifications"}),"\n",(0,t.jsx)(n.li,{children:"Need efficient range queries"}),"\n",(0,t.jsx)(n.li,{children:"Memory usage is not a primary concern"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"performance-comparison",children:"Performance Comparison"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"TreeMap/Set"}),(0,t.jsx)(n.th,{children:"SortedList"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Insert"}),(0,t.jsx)(n.td,{children:"O(log n)"}),(0,t.jsx)(n.td,{children:"O(n)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Delete"}),(0,t.jsx)(n.td,{children:"O(log n)"}),(0,t.jsx)(n.td,{children:"O(n)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Search"}),(0,t.jsx)(n.td,{children:"O(log n)"}),(0,t.jsx)(n.td,{children:"O(log n)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Access"}),(0,t.jsx)(n.td,{children:"O(log n)"}),(0,t.jsx)(n.td,{children:"O(1)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Min/Max"}),(0,t.jsx)(n.td,{children:"O(log n)"}),(0,t.jsx)(n.td,{children:"O(1)"})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);