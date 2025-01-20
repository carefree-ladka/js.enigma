"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2021],{5913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=t(4848),s=t(8453);const a={title:"Task Queue"},o=void 0,u={id:"WebDev/JavaScript/TaskQueue",title:"Task Queue",description:"Design an API that processes objects sequentially (where each object must wait for the previous one to finish before executing), we can create a task queue. This queue will hold objects (representing tasks) and execute each one only after the previous task has completed.",source:"@site/docs/WebDev/JavaScript/TaskQueue.mdx",sourceDirName:"WebDev/JavaScript",slug:"/WebDev/JavaScript/TaskQueue",permalink:"/js.enigma/docs/WebDev/JavaScript/TaskQueue",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/JavaScript/TaskQueue.mdx",tags:[],version:"current",frontMatter:{title:"Task Queue"},sidebar:"tutorialSidebar",previous:{title:"SOLID Principles in JavaScript and React",permalink:"/js.enigma/docs/WebDev/JavaScript/SOLIDPrinciples"},next:{title:"Webpack 5",permalink:"/js.enigma/docs/WebDev/JavaScript/Webpack"}},c={},i=[{value:"API Design",id:"api-design",level:3}];function l(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Design an API that processes objects sequentially (where each object must wait for the previous one to finish before executing), we can create a task queue. This queue will hold objects (representing tasks) and execute each one only after the previous task has completed."}),"\n",(0,r.jsx)(n.h3,{id:"api-design",children:"API Design"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JavaScript",children:'class TaskQueue {\r\n\r\n  queue = Promise.resolve()\r\n\r\n  enqueue = (task) => {\r\n    this.queue = this.queue.then(() => {\r\n      console.log(\'Executing task...\');\r\n      return task()\r\n    }).catch(e => {\r\n      console.log(e.message);\r\n    })\r\n    return queue\r\n  }\r\n}\r\n\r\n\r\n// Example tasks\r\nfunction task1() {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      console.log("Task 1 completed");\r\n      resolve();\r\n    }, 1000);\r\n  });\r\n}\r\n\r\nfunction task2() {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      console.log("Task 2 completed");\r\n      resolve();\r\n    }, 500);\r\n  });\r\n}\r\n\r\nfunction task3() {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      console.log("Task 3 completed");\r\n      resolve();\r\n    }, 2000);\r\n  });\r\n}\r\n\r\n// Create a task queue\r\nconst queue = new TaskQueue();\r\n\r\n// Enqueue tasks\r\nqueue.enqueue(task1);\r\nqueue.enqueue(task2);\r\nqueue.enqueue(task3);\r\n\r\n/* \r\nExecuting task...\r\nTask 1 completed\r\nExecuting task...\r\nTask 2 completed\r\nExecuting task...\r\nTask 3 completed\r\n*/\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);