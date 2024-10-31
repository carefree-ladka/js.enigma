"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9687],{7078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(4848),s=n(8453);const o={title:"Task Queue"},a=void 0,u={id:"tutorial-extras/JSInterviewQuestions/TaskQueue",title:"Task Queue",description:"Design an API that processes objects sequentially (where each object must wait for the previous one to finish before executing), we can create a task queue. This queue will hold objects (representing tasks) and execute each one only after the previous task has completed.",source:"@site/docs/tutorial-extras/JSInterviewQuestions/TaskQueue.mdx",sourceDirName:"tutorial-extras/JSInterviewQuestions",slug:"/tutorial-extras/JSInterviewQuestions/TaskQueue",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/TaskQueue",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/JSInterviewQuestions/TaskQueue.mdx",tags:[],version:"current",frontMatter:{title:"Task Queue"},sidebar:"tutorialSidebar",previous:{title:"Prototypal Inheritance",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/PrototypalInheritance"},next:{title:"Error Boundary",permalink:"/js.enigma/docs/tutorial-extras/ReactQuestions/ErrorBoundary"}},i={},c=[{value:"API Design",id:"api-design",level:3}];function l(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Design an API that processes objects sequentially (where each object must wait for the previous one to finish before executing), we can create a task queue. This queue will hold objects (representing tasks) and execute each one only after the previous task has completed."}),"\n",(0,r.jsx)(t.h3,{id:"api-design",children:"API Design"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JavaScript",children:'class TaskQueue {\r\n\r\n  queue = Promise.resolve()\r\n\r\n  enqueue = (task) => {\r\n    this.queue = this.queue.then(() => {\r\n      console.log(\'Executing task...\');\r\n      return task()\r\n    }).catch(e => {\r\n      console.log(e.message);\r\n    })\r\n    return queue\r\n  }\r\n}\r\n\r\n\r\n// Example tasks\r\nfunction task1() {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      console.log("Task 1 completed");\r\n      resolve();\r\n    }, 1000);\r\n  });\r\n}\r\n\r\nfunction task2() {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      console.log("Task 2 completed");\r\n      resolve();\r\n    }, 500);\r\n  });\r\n}\r\n\r\nfunction task3() {\r\n  return new Promise(resolve => {\r\n    setTimeout(() => {\r\n      console.log("Task 3 completed");\r\n      resolve();\r\n    }, 2000);\r\n  });\r\n}\r\n\r\n// Create a task queue\r\nconst queue = new TaskQueue();\r\n\r\n// Enqueue tasks\r\nqueue.enqueue(task1);\r\nqueue.enqueue(task2);\r\nqueue.enqueue(task3);\r\n\r\n/* \r\nExecuting task...\r\nTask 1 completed\r\nExecuting task...\r\nTask 2 completed\r\nExecuting task...\r\nTask 3 completed\r\n*/\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>u});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);