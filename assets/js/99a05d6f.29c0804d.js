"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9501],{9194:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=e(4848),t=e(8453);const a={title:"Miscellaneous"},s=void 0,c={id:"WebDev/JavaScript/Misx",title:"Miscellaneous",description:"",source:"@site/docs/WebDev/JavaScript/Misx.mdx",sourceDirName:"WebDev/JavaScript",slug:"/WebDev/JavaScript/Misx",permalink:"/js.enigma/docs/WebDev/JavaScript/Misx",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/JavaScript/Misx.mdx",tags:[],version:"current",frontMatter:{title:"Miscellaneous"},sidebar:"tutorialSidebar",previous:{title:"Memoization",permalink:"/js.enigma/docs/WebDev/JavaScript/Memoization"},next:{title:"Mixins",permalink:"/js.enigma/docs/WebDev/JavaScript/Mixins"}},l={},i=[];function u(n){const r={code:"code",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JavaScript",children:'function test() {\r\n  var a = (b = 0);\r\n  a++;\r\n  return a;\r\n}\r\n\r\ntest();\r\n\r\nconsole.log(typeof a); //undefined\r\nconsole.log(typeof b); //number\r\n\r\n//---------------------------------------------\r\n\r\nfunction test1() {\r\n  setTimeout(() => console.log(x));\r\n  let x = 5;\r\n}\r\n\r\n// test1(); //5\r\n\r\n//----------------------------------------------\r\nconst arr = [1, 2, 3];\r\ndelete arr[0];\r\ndelete arr[1];\r\ndelete arr[2];\r\n\r\nconsole.log(arr); //[ <3 empty items> ]\r\nconsole.log(arr.length); //3\r\n\r\n//----------------------------------------------\r\n\r\nconst arr1 = [];\r\n\r\narr1.x = 10;\r\n\r\nconsole.log(arr1); //x: 10\r\nconsole.log(arr1[0]); //undefined\r\n\r\n//----------------------------------------------\r\n\r\nfunction test3() {\r\n  if (constructor) console.log("hello");\r\n  else console.log("Byee");\r\n}\r\n\r\ntest3(); //hello\r\n\r\n//--------------------------------------------\r\n\r\nconst fn = () => {\r\n  if (function test() {}) {\r\n    console.log("Okay?");\r\n    console.log(typeof test); //function\r\n  } else console.log("Not okay");\r\n};\r\n\r\nfn(); //Okay?\r\n\r\n//---------------------------------------------\r\n\r\nconst fn1 = () => {\r\n  const sentence = "This, India; Great";\r\n  return sentence.split(/[,;]/);\r\n};\r\n\r\nconsole.log(fn1()); //[ \'This\', \' India\', \' Great\' ]\r\n\r\n//--------------------------------------------\r\n\r\nvar x = 10;\r\nconst fn3 = () => {\r\n  x = 5;\r\n  console.log(x); //5\r\n};\r\n\r\nfn3();\r\nconsole.log(x); //5\r\n\n'})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JavaScript",children:"var a = 10;\r\nconsole.log(a); // 10\r\nfunction a() {\r\n  let a = 20;\r\n\r\n}\r\n\r\nconsole.log(a); // 10\r\nconsole.log(a()); // typeError: a is not a function\r\n\r\nconsole.log('A' + 1); // NaN\r\nconsole.log(NaN == NaN); // false\r\nconsole.log(NaN === NaN); // false\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JavaScript",children:'const obj = {\r\n  name: "JavaScript",\r\n  getName: function() {\r\n    return this.name;\r\n  },\r\n};\r\n\r\nconst getName = obj.getName;\r\nconsole.log(getName()); // Calling function outside object\r\nconsole.log(obj.getName()); // Calling function within object\r\n/* \r\nundefined\r\nJavaScript\r\n*/\n'})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JavaScript",children:"const obj = { a: 1 };\r\nconsole.log(obj.b ?? obj.a);\r\nconsole.log(obj.b || obj.a);\r\n/* \r\n1\r\n1\r\n*/\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JavaScript",children:"var a = 10;\r\n\r\nfunction test() {\r\n\r\n  if (1) {\r\n    a = 20;\r\n    function  a (){}\r\n    a=29\r\n  }\r\n}\r\n\r\ntest();\r\nconsole.log(a); //10\n"})})]})}function d(n={}){const{wrapper:r}={...(0,t.R)(),...n.components};return r?(0,o.jsx)(r,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>s,x:()=>c});var o=e(6540);const t={},a=o.createContext(t);function s(n){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function c(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(a.Provider,{value:r},n.children)}}}]);