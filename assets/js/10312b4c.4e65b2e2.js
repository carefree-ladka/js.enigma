"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2431],{6588:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var e=s(4848),r=s(8453);const t={title:"Bit Manipulation Basics"},l=void 0,c={id:"DSA/BitManipulation",title:"Bit Manipulation Basics",description:"Bit Manipulation Basics",source:"@site/docs/DSA/BitManipulation.mdx",sourceDirName:"DSA",slug:"/DSA/BitManipulation",permalink:"/js.enigma/docs/DSA/BitManipulation",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/DSA/BitManipulation.mdx",tags:[],version:"current",frontMatter:{title:"Bit Manipulation Basics"},sidebar:"tutorialSidebar",previous:{title:"Binary Search Tree",permalink:"/js.enigma/docs/DSA/BinarySearchTree"},next:{title:"Boyer\u2013Moore Majority Vote Algorithm",permalink:"/js.enigma/docs/DSA/BoyerMoore"}},o={},a=[{value:"Bit Manipulation Basics",id:"bit-manipulation-basics",level:2},{value:"Basic Bitwise Operators",id:"basic-bitwise-operators",level:3},{value:"Common Bit Manipulation Techniques",id:"common-bit-manipulation-techniques",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"bit-manipulation-basics",children:"Bit Manipulation Basics"}),"\n",(0,e.jsx)(i.p,{children:"Bit manipulation involves using bitwise operators to perform operations on binary representations of numbers. This technique is useful in various programming scenarios, including optimization, cryptography, and low-level data processing."}),"\n","\n",(0,e.jsx)(i.h3,{id:"basic-bitwise-operators",children:"Basic Bitwise Operators"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["AND (",(0,e.jsx)(i.code,{children:"&"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Performs a bitwise AND operation."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = 5;  // 0101 in binary\r\nconst b = 3;  // 0011 in binary\r\nconst result = a & b;  // 0001 in binary (1 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["OR (",(0,e.jsx)(i.code,{children:"|"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Performs a bitwise OR operation."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = 5;  // 0101 in binary\r\nconst b = 3;  // 0011 in binary\r\nconst result = a | b;  // 0111 in binary (7 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["XOR (",(0,e.jsx)(i.code,{children:"^"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Performs a bitwise XOR operation."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = 5;  // 0101 in binary\r\nconst b = 3;  // 0011 in binary\r\nconst result = a ^ b;  // 0110 in binary (6 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["NOT (",(0,e.jsx)(i.code,{children:"~"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Performs a bitwise NOT operation (inverts all bits)."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = 5;  // 0101 in binary\r\nconst result = ~a;  // 1010 in binary (in 32-bit system: -6 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["Left Shift (",(0,e.jsx)(i.code,{children:"<<"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Shifts bits to the left, filling with zeros."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = 5;  // 0101 in binary\r\nconst result = a << 1;  // 1010 in binary (10 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["Right Shift (",(0,e.jsx)(i.code,{children:">>"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Shifts bits to the right, preserving the sign bit."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = 5;  // 0101 in binary\r\nconst result = a >> 1;  // 0010 in binary (2 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsxs)(i.strong,{children:["Unsigned Right Shift (",(0,e.jsx)(i.code,{children:">>>"}),")"]}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Shifts bits to the right, filling with zeros (ignores the sign bit)."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const a = -5; // 1111111111111111111111111111011 in binary (32-bit)\r\nconst result = a >>> 1; // 0111111111111111111111111111101 in binary (2147483645 in decimal)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"common-bit-manipulation-techniques",children:"Common Bit Manipulation Techniques"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Check if a Number is Even or Odd"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use bitwise AND with ",(0,e.jsx)(i.code,{children:"1"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const isOdd = (num) => (num & 1) === 1;\r\nconst isEven = (num) => (num & 1) === 0;\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Toggle a Bit"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use XOR with ",(0,e.jsx)(i.code,{children:"1"})," to flip the bit."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const toggleBit = (num, bitPosition) => num ^ (1 << bitPosition);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Set a Bit"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use OR with ",(0,e.jsx)(i.code,{children:"1"})," shifted to the bit position."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const setBit = (num, bitPosition) => num | (1 << bitPosition);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Clear a Bit"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use AND with the negation of ",(0,e.jsx)(i.code,{children:"1"})," shifted to the bit position."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const clearBit = (num, bitPosition) => num & ~(1 << bitPosition);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Count Number of Set Bits (Hamming Weight)"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Count the number of ",(0,e.jsx)(i.code,{children:"1"}),"s in the binary representation."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const countSetBits = (num) => {\r\n  let count = 0;\r\n  while (num > 0) {\r\n    count += num & 1;\r\n    num >>= 1;\r\n  }\r\n  return count;\r\n};\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Brian Kernighan\u2019s Algorithm"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Efficiently counts the number of set bits in an integer. It repeatedly clears the least significant set bit and counts the number of operations."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const countSetBits = (num) => {\r\n  let count = 0;\r\n  while (num) {\r\n    num &= (num - 1);  // Clear the least significant bit set\r\n    count++;\r\n  }\r\n  return count;\r\n};\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Find the Rightmost Set Bit"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use ",(0,e.jsx)(i.code,{children:"num & -num"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const rightmostSetBit = (num) => num & -num;\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Find the Position of the Rightmost Set Bit"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use ",(0,e.jsx)(i.code,{children:"Math.log2(num & -num)"}),"."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const rightmostSetBitPosition = (num) => Math.log2(num & -num);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Swap Two Numbers Without a Temporary Variable"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Use XOR to swap values."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-javascript",children:"const swap = (a, b) => {\r\n  a ^= b;\r\n  b ^= a;\r\n  a ^= b;\r\n};\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Clear All Bits from MSB to a Specific Bit"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Clear all bits from the most significant bit (MSB) to a specific position."})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-JavaScript",children:"let number = 13; // Binary: 1101\r\nlet position = 2;\r\n\r\nlet newNumber = number & ((1 << position) - 1);  //Formula\r\nconsole.log(newNumber); // Output: 1 (Binary: 0001)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Clear All Bits from a Specific Bit to LSB"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Clear all bits from a specific position to the least significant bit (LSB)."})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-JavaScript",children:"let number = 13; // Binary: 1101\r\nlet position = 1;\r\n\r\nlet newNumber = number & ~((1 << (position + 1)) - 1);\r\nconsole.log(newNumber); // Output: 8 (Binary: 1000)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Extract a Range of Bits"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Extract a specific range of bits (e.g., from start to end)."})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-JavaScript",children:"let number = 29; // Binary: 11101\r\nlet start = 1;\r\nlet end = 3;\r\n\r\nlet extracted = (number >> start) & ((1 << (end - start + 1)) - 1);\r\nconsole.log(extracted); // Output: 6 (Binary: 110)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Set a Range of Bits"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"Set a range of bits to 1."})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-JavaScript",children:"let number = 8; // Binary: 1000\r\nlet start = 1;\r\nlet end = 3;\r\n\r\nlet newNumber = number | (((1 << (end - start + 1)) - 1) << start);\r\nconsole.log(newNumber); // Output: 14 (Binary: 1110)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Data Compression"}),": Efficiently store and manipulate data using bitwise operations."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Cryptography"}),": Implement cryptographic algorithms and protocols."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Network Protocols"}),": Handle and process network data at the bit level."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"Performance Optimization"}),": Use bit manipulation for performance-critical code."]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,e.jsx)(i.p,{children:"Bit manipulation is a powerful tool in programming that allows for efficient data processing and optimization. Understanding these basic bitwise operations and techniques can help you solve various problems more effectively."})]})}function h(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},8453:(n,i,s)=>{s.d(i,{R:()=>l,x:()=>c});var e=s(6540);const r={},t=e.createContext(r);function l(n){const i=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),e.createElement(t.Provider,{value:i},n.children)}}}]);