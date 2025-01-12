"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4918],{7099:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(4848),t=r(8453);const a={title:"Object-Oriented Programming (OOP)"},o=void 0,i={id:"College Revision/OOPS",title:"Object-Oriented Programming (OOP)",description:"The four pillars of OOP are fundamental concepts, and here's a recap of each:",source:"@site/docs/College Revision/OOPS.mdx",sourceDirName:"College Revision",slug:"/College Revision/OOPS",permalink:"/js.enigma/docs/College Revision/OOPS",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/College Revision/OOPS.mdx",tags:[],version:"current",frontMatter:{title:"Object-Oriented Programming (OOP)"},sidebar:"tutorialSidebar",previous:{title:"College Revision",permalink:"/js.enigma/docs/category/college-revision"},next:{title:"Operating Systems",permalink:"/js.enigma/docs/College Revision/OperatingSystems"}},l={},c=[{value:"Encapsulation:",id:"encapsulation",level:2},{value:"Abstraction:",id:"abstraction",level:2},{value:"Inheritance:",id:"inheritance",level:2},{value:"Polymorphism:",id:"polymorphism",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The four pillars of OOP are fundamental concepts, and here's a recap of each:"}),"\n",(0,s.jsx)(n.h2,{id:"encapsulation",children:"Encapsulation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wrapping data and methods into a single unit called a class.\r\nIt restricts direct access to some of an object's components and can prevent accidental interference.\r\nFor example, using getter and setter methods to control access to the internal state."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Benefits:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Data Hiding: Restrict access to internal object states."}),"\n",(0,s.jsx)(n.li,{children:"Control: Allows controlled access through getter and setter methods."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"class Person {\r\n\r\n  #name\r\n  #age\r\n\r\n  constructor(name, age) {\r\n    this.#name = name;\r\n    this.#age = age;\r\n  }\r\n\r\n  // Getter method\r\n  get name() {\r\n    return this.#name;\r\n  }\r\n\r\n  // Setter method\r\n  set name(newName) {\r\n    this.#name = newName;\r\n  }\r\n}\r\n\r\nconst p = new Person('John', 30);\r\nconsole.log(p.name);  // John\r\np.name = 'Mike';      // Changing name via setter\r\nconsole.log(p.name);  // Mike\n"})}),"\n",(0,s.jsx)(n.h2,{id:"abstraction",children:"Abstraction:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Abstraction is the concept of hiding the complex implementation details and exposing only the essential features.\r\nIt allows for simplifying complex systems by modeling classes based on the essential properties an object should have.\r\nYou might have been asked how to implement abstract classes or interfaces to hide unnecessary implementation details."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Benefits:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Hides complexity."}),"\n",(0,s.jsx)(n.li,{children:"Reduces programming errors by exposing only what is necessary."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"// Abstract class\r\nclass Animal {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  // Abstract method (without implementation)\r\n  makeSound() {\r\n    throw \"This method must be implemented by subclass\";\r\n  }\r\n}\r\n\r\nclass Dog extends Animal {\r\n  makeSound() {\r\n    console.log('Woof!');\r\n  }\r\n}\r\n\r\nconst dog = new Dog('Buddy');\r\ndog.makeSound();  // Woof!\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inheritance",children:"Inheritance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Inheritance allows a class to inherit properties and methods from another class, promoting code reuse.\r\nYou could have been asked about the difference between single inheritance and multiple inheritance, and how method overriding works in OOP."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"class Animal {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  speak() {\r\n    console.log(`${this.name} makes a sound.`);\r\n  }\r\n}\r\n\r\nclass Dog extends Animal {\r\n  speak() {\r\n    console.log(`${this.name} barks.`);\r\n  }\r\n}\r\n\r\nconst dog = new Dog('Buddy');\r\ndog.speak();  // Buddy barks.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"polymorphism",children:"Polymorphism:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Polymorphism allows objects to be treated as instances of their parent class. It also allows methods to have the same name but behave differently depending on the object calling them.\r\nYou might have been asked to explain method overloading (same method name, different parameters) and method overriding (redefining a method in a subclass)."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:'class Animal {\r\n  speak() {\r\n    console.log("Animal speaks");\r\n  }\r\n}\r\n\r\nclass Dog extends Animal {\r\n  speak() {\r\n    console.log("Dog barks");\r\n  }\r\n}\r\n\r\nconst dog = new Dog();\r\ndog.speak();  // Dog barks\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example of Method Overloading (JavaScript doesn\u2019t support it directly):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"class Calculator {\r\n  add(a, b) {\r\n    if (arguments.length === 1) {\r\n      return a + a;\r\n    }\r\n    return a + b;\r\n  }\r\n}\r\n\r\nconst calc = new Calculator();\r\nconsole.log(calc.add(5));  // 10 (overloaded behavior)\r\nconsole.log(calc.add(5, 3));  // 8\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);