"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3880],{6756:(r,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var e=n(4848),i=n(8453);const s={title:"String Matching"},o=void 0,a={id:"tutorial-basics/StringMatching",title:"String Matching",description:"Brute-Force String Matching",source:"@site/docs/tutorial-basics/StringMatching.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/StringMatching",permalink:"/js.enigma/docs/tutorial-basics/StringMatching",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/StringMatching.mdx",tags:[],version:"current",frontMatter:{title:"String Matching"},sidebar:"tutorialSidebar",previous:{title:"Stack",permalink:"/js.enigma/docs/tutorial-basics/Stack"},next:{title:"Topological Sort Tutorial",permalink:"/js.enigma/docs/tutorial-basics/TopologicalSort"}},h={},c=[{value:"Brute-Force String Matching",id:"brute-force-string-matching",level:3},{value:"Algorithm Steps",id:"algorithm-steps",level:4},{value:"Robin Karp",id:"robin-karp",level:2},{value:"Knuth-Morris-Pratt (KMP) Algorithm",id:"knuth-morris-pratt-kmp-algorithm",level:2},{value:"Overview",id:"overview",level:3},{value:"Algorithm Steps",id:"algorithm-steps-1",level:3},{value:"Preprocessing the Pattern",id:"preprocessing-the-pattern",level:3},{value:"Using Trie",id:"using-trie",level:2},{value:"Aho-Corasick Algorithm",id:"aho-corasick-algorithm",level:2}];function l(r){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...r.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h3,{id:"brute-force-string-matching",children:"Brute-Force String Matching"}),"\n",(0,e.jsx)(t.p,{children:"The brute-force string matching algorithm is the simplest approach to solving the problem. It checks for the presence of the pattern at every possible position in the text."}),"\n",(0,e.jsx)(t.h4,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,e.jsxs)(t.ol,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Iterate through the Text"}),": For each position in the text, check if the pattern matches starting from that position."]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Check for Match"}),": Compare the characters of the pattern with the corresponding characters in the text."]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Record Matches"}),": If a match is found, record the starting index of the match."]}),"\n"]}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Code Example"}),":"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-javascript",children:"/**\r\n * Perform brute-force string matching to find the pattern in the text.\r\n * @param {string} text - The text string.\r\n * @param {string} pattern - The pattern string.\r\n * @return {number[]} - The starting indices of occurrences of the pattern.\r\n */\r\nconst bruteForceSearch = (text, pattern) => {\r\n  const result = [];\r\n  const m = pattern.length;\r\n  const n = text.length;\r\n\r\n  for (let i = 0; i <= n - m; i++) {\r\n    let j;\r\n    for (j = 0; j < m; j++) {\r\n      if (text[i + j] !== pattern[j]) break;\r\n    }\r\n    if (j === m) {\r\n      result.push(i);\r\n    }\r\n  }\r\n  \r\n  return result;\r\n};\n"})}),"\n",(0,e.jsx)(t.h2,{id:"robin-karp",children:"Robin Karp"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-JavaScript",children:"function search(text, pattern) {\r\n  const D = 256; // ASCII length\r\n  const MOD = 1e9 + 7; // Prime modulus\r\n\r\n  const N = text.length;\r\n  const M = pattern.length;\r\n\r\n  if (M === 0) return 0; // Edge case: empty pattern\r\n\r\n  let p = 0; // Hash value for the pattern\r\n  let t = 0; // Hash value for the text window\r\n  const PREV = Math.pow(D, M - 1) % MOD; // Highest power of D (to remove the first character)\r\n\r\n  // Calculate hash value for the pattern and the first window of text\r\n  for (let i = 0; i < M; i++) {\r\n    p = (D * p + pattern.charCodeAt(i)) % MOD;\r\n    t = (D * t + text.charCodeAt(i)) % MOD;\r\n  }\r\n\r\n  // Slide the window over the text\r\n  for (let i = 0; i <= N - M; i++) {\r\n    // If the hash values match, check the characters one by one\r\n    if (p === t) {\r\n      let j = 0;\r\n      while (j < M && pattern[j] === text[i + j]) j++; // Character comparison\r\n\r\n      // If the full pattern matches, return the index\r\n      if (j === M) {\r\n        return i;\r\n      }\r\n    }\r\n\r\n    // Update the hash for the next window\r\n    if (i < N - M) {\r\n      t = (D * (t - text.charCodeAt(i) * PREV) + text.charCodeAt(i + M)) % MOD;\r\n      if (t < 0) t += MOD; // Handle negative values\r\n    }\r\n  }\r\n\r\n  return -1; // Return -1 if the pattern is not found\r\n}\n"})}),"\n",(0,e.jsx)(t.h2,{id:"knuth-morris-pratt-kmp-algorithm",children:"Knuth-Morris-Pratt (KMP) Algorithm"}),"\n",(0,e.jsx)(t.p,{children:'The Knuth-Morris-Pratt (KMP) algorithm is an efficient string searching algorithm that finds occurrences of a "pattern" string within a "text" string. It improves upon the naive string matching algorithm by avoiding redundant comparisons.'}),"\n",(0,e.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,e.jsx)(t.p,{children:'The KMP algorithm uses information gained from previous comparisons to avoid redundant checking. It preprocesses the pattern to create a partial match table (also known as the "longest prefix suffix" or LPS array), which helps in skipping unnecessary comparisons when a mismatch occurs.'}),"\n",(0,e.jsx)(t.h3,{id:"algorithm-steps-1",children:"Algorithm Steps"}),"\n",(0,e.jsxs)(t.ol,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Preprocess the Pattern"}),": Construct the LPS array for the pattern."]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Search for the Pattern"}),": Use the LPS array to efficiently search for the pattern in the text."]}),"\n"]}),"\n",(0,e.jsx)(t.h3,{id:"preprocessing-the-pattern",children:"Preprocessing the Pattern"}),"\n",(0,e.jsx)(t.p,{children:"The LPS array (Longest Prefix Suffix) stores the length of the longest proper prefix of the pattern which is also a suffix. This allows the algorithm to skip unnecessary comparisons in the search phase."}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"Code Example"}),":"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-JavaScript",children:'/**\r\n * Build the LPS (Longest Prefix Suffix) array for the pattern.\r\n * @param {string} pattern - The pattern string.\r\n * @return {number[]} - The LPS array.\r\n */\r\nconst buildLPSArray = (pattern) => {\r\n  const lps = Array(pattern.length).fill(0);\r\n  let length = 0;\r\n  let i = 1;\r\n\r\n  while (i < pattern.length) {\r\n    if (pattern[i] === pattern[length]) {\r\n      length++;\r\n      lps[i] = length;\r\n      i++;\r\n    } else {\r\n      if (length > 0) {\r\n        length = lps[length - 1];\r\n      } else {\r\n        lps[i] = 0;\r\n        i++;\r\n      }\r\n    }\r\n  }\r\n  \r\n  return lps;\r\n};\r\n\r\n/**\r\n * Perform KMP search to find the pattern in the text.\r\n * @param {string} text - The text string.\r\n * @param {string} pattern - The pattern string.\r\n * @return {number[]} - The starting indices of occurrences of the pattern.\r\n */\r\nconst kmpSearch = (text, pattern) => {\r\n  const lps = buildLPSArray(pattern);\r\n  const result = [];\r\n  let i = 0; // Index for text\r\n  let j = 0; // Index for pattern\r\n\r\n  while (i < text.length) {\r\n    if (pattern[j] === text[i]) {\r\n      i++;\r\n      j++;\r\n    }\r\n    \r\n    if (j === pattern.length) {\r\n      result.push(i - j);\r\n      j = lps[j - 1];\r\n    } else if (i < text.length && pattern[j] !== text[i]) {\r\n      if (j > 0) {\r\n        j = lps[j - 1];\r\n      } else {\r\n        i++;\r\n      }\r\n    }\r\n  }\r\n  \r\n  return result;\r\n};\r\n\r\nconst text = "ababcababcabc";\r\nconst pattern = "abc";\r\n\r\nconsole.log(kmpSearch(text, pattern)); // Output: [2, 7, 10]\n'})}),"\n",(0,e.jsx)(t.h2,{id:"using-trie",children:"Using Trie"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-JavaScript",children:"class TrieNode {\r\n  constructor() {\r\n    this.children = {};\r\n    this.isEndOfWord = false; // Marks the end of a pattern\r\n  }\r\n}\r\n\r\nclass Trie {\r\n  constructor() {\r\n    this.root = new TrieNode();\r\n  }\r\n\r\n  insert(word) {\r\n    let currentNode = this.root;\r\n\r\n    for (const char of word) {\r\n      if (!currentNode.children[char]) {\r\n        currentNode.children[char] = new TrieNode();\r\n      }\r\n      currentNode = currentNode.children[char];\r\n    }\r\n    currentNode.isEndOfWord = true; // Mark the end of the pattern\r\n  }\r\n\r\n  search(text) {\r\n    const results = [];\r\n    const n = text.length;\r\n\r\n    for (let i = 0; i < n; i++) {\r\n      let currentNode = this.root;\r\n\r\n      for (let j = i; j < n && currentNode.children[text[j]]; j++) {\r\n        currentNode = currentNode.children[text[j]];\r\n        if (currentNode.isEndOfWord) {\r\n          results.push({ pattern: text.substring(i, j + 1), index: i });\r\n        }\r\n      }\r\n    }\r\n\r\n    return results;\r\n  }\r\n}\r\n\r\n// Example Usage\r\nconst trie = new Trie();\r\ntrie.insert('he');\r\ntrie.insert('she');\r\ntrie.insert('his');\r\ntrie.insert('hers');\r\n\r\nconst text = 'ushers';\r\nconst results = trie.search(text);\r\nconsole.log(results); // Output: [{ pattern: 'she', index: 1 }, { pattern: 'hers', index: 3 }]\r\n/* \r\nTC : O(N*K)\r\nK is the maximum length of any pattern that has been inserted into the Trie.\r\nwhere N is the length of the text.\r\n\r\nSC : O(M+R)\r\nM is the number of characters in all patterns in the Trie.\r\nR is the number of matched patterns (or substrings) found during the search.\r\n*/\n"})}),"\n",(0,e.jsx)(t.h2,{id:"aho-corasick-algorithm",children:"Aho-Corasick Algorithm"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"Use Aho-Corasick when you need to search for multiple patterns in a single text, especially when those patterns can share common prefixes"}),"\n",(0,e.jsx)(t.li,{children:"Use KMP for single pattern searches where space efficiency is a concern or when the patterns are relatively small and do not need to be checked against a larger set"}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-JavaScript",children:'class Node {\r\n\r\n  constructor() {\r\n    this.outputs = new Set();\r\n    this.children = new Map();\r\n    this.failureLink = null;\r\n  }\r\n\r\n  hasChild(key) {\r\n    return this.children.has(key);\r\n  }\r\n\r\n  getChild(key) {\r\n    return this.children.get(key);\r\n  }\r\n\r\n  setChild(key, node) {\r\n    this.children.set(key, node);\r\n  }\r\n\r\n  addOutput(output) {\r\n    this.outputs.add(output);\r\n  }\r\n\r\n  copyOutputs(node) {\r\n    for (const o of node.outputs) {\r\n      this.outputs.add(o);\r\n    }\r\n  }\r\n\r\n}\r\n\r\nclass AhoCorasick {\r\n\r\n  constructor(patterns) {\r\n\r\n    // construct the trie\r\n    this.root = new Node();\r\n\r\n    let currNode = this.root;\r\n    for (const pattern of patterns) {\r\n      for (let i = 0; i < pattern.length; i++) {\r\n        const key = pattern[i];\r\n        if (!currNode.hasChild(key)) {\r\n          currNode.setChild(key, new Node());\r\n        }\r\n        currNode = currNode.getChild(key);\r\n      }\r\n      currNode.addOutput(pattern);\r\n      currNode = this.root;\r\n    }\r\n\r\n    // failure link\r\n    this.root.failureLink = this.root;\r\n    const queue = [];\r\n    for (const [_, child] of this.root.children) {\r\n      child.failureLink = this.root;\r\n      queue.push(child);\r\n    }\r\n\r\n    while (queue.length !== 0) {\r\n      currNode = queue.shift();\r\n      for (const [key, child] of currNode.children) {\r\n        queue.push(child);\r\n\r\n        let n = currNode.failureLink;\r\n        while (!n.hasChild(key) && n != this.root) {\r\n          n = n.failureLink;\r\n        }\r\n        child.failureLink = n.getChild(key) ?? this.root;\r\n        child.copyOutputs(child.failureLink);\r\n\r\n      }\r\n    }\r\n  }\r\n\r\n  search(text) {\r\n    const found = [];\r\n    let state = this.root;\r\n    let i = 0;\r\n    while (i < text.length) {\r\n      const c = text[i];\r\n      if (state.hasChild(c)) {\r\n        state = state.getChild(c);\r\n        i++;\r\n        if (state.outputs.size > 0) {\r\n          state.outputs.forEach(val => {\r\n            found.push({ "pos": i - val.length, "val": val });\r\n          });\r\n        }\r\n      } else if (state === this.root) {\r\n        i++;\r\n      } else {\r\n        state = state.failureLink;\r\n      }\r\n    }\r\n    return found;\r\n  }\r\n}\r\n\r\n// Test the Aho-Corasick implementation\r\nfunction testAhoCorasick() {\r\n  const patterns = [\'he\', \'she\', \'his\', \'hers\'];\r\n  const text = \'ushers\';\r\n  const ac = new AhoCorasick(patterns);\r\n  const results = ac.search(text);\r\n\r\n  results.forEach(result => {\r\n    console.log(`Pattern: "${result.val}" found at position: ${result.pos}`);\r\n  });\r\n}\r\n\r\n// Run the test\r\ntestAhoCorasick();\r\n\r\n/* \r\nPattern: "she" found at position: 1\r\nPattern: "he" found at position: 2\r\nPattern: "hers" found at position: 2\r\n*/\r\n\r\n/* \r\nTC : O(P+N+T)\r\nP is the total length of all patterns\r\nN is the number of nodes in the trie (which can be up to P).\r\nT is the length of the text.\r\n\r\nSC : O(N+M)\r\nN is the number of nodes in the trie\r\nM is the number of matches found in the text (this could be up to T, but usually M\u2264T)\r\n*/\n'})})]})}function u(r={}){const{wrapper:t}={...(0,i.R)(),...r.components};return t?(0,e.jsx)(t,{...r,children:(0,e.jsx)(l,{...r})}):l(r)}},8453:(r,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var e=n(6540);const i={},s=e.createContext(i);function o(r){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof r?r(t):{...t,...r}}),[t,r])}function a(r){let t;return t=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:o(r.components),e.createElement(s.Provider,{value:t},r.children)}}}]);