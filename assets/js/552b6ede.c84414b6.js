"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6855],{1607:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(4848),s=n(8453);const a={title:"Design Patterns"},i=void 0,o={id:"tutorial-extras/JSInterviewQuestions/DesignPatterns",title:"Design Patterns",description:"Singleton Pattern",source:"@site/docs/tutorial-extras/JSInterviewQuestions/DesignPatterns.mdx",sourceDirName:"tutorial-extras/JSInterviewQuestions",slug:"/tutorial-extras/JSInterviewQuestions/DesignPatterns",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/DesignPatterns",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/JSInterviewQuestions/DesignPatterns.mdx",tags:[],version:"current",frontMatter:{title:"Design Patterns"},sidebar:"tutorialSidebar",previous:{title:"Currying Variations",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/Currying"},next:{title:"Function Methods Polyfill",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/FunctionsPolyfill"}},c={},l=[{value:"Singleton Pattern",id:"singleton-pattern",level:3},{value:"Factory Pattern",id:"factory-pattern",level:3},{value:"Module Pattern",id:"module-pattern",level:3},{value:"Proxy Pattern",id:"proxy-pattern",level:3},{value:"Builder Pattern",id:"builder-pattern",level:3},{value:"CircuitBreaker Pattern",id:"circuitbreaker-pattern",level:3},{value:"EvenStreamer Pattern",id:"evenstreamer-pattern",level:3},{value:"Iterator Pattern",id:"iterator-pattern",level:3},{value:"Observer Pattern",id:"observer-pattern",level:3},{value:"PubSub Pattern",id:"pubsub-pattern",level:3}];function u(e){const r={code:"code",h3:"h3",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"singleton-pattern",children:"Singleton Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"class Singleton {\r\n  constructor() {\r\n    if (Singleton.instance) return Singleton.instance;\r\n    this.data = {\r\n      name: \"Pawan\",\r\n      age: 25,\r\n    };\r\n    Singleton.instance = this;\r\n  }\r\n\r\n  getData = () => this.data;\r\n}\r\n\r\nconst instance1 = new Singleton();\r\nconst instance2 = new Singleton();\r\n\r\nconsole.log(instance1 === instance2); //true\r\nconsole.log(instance1.getData()); //{ name: 'Pawan', age: 25 }\r\nconsole.log(instance1.getData()); //{ name: 'Pawan', age: 25 }\n"})}),"\n",(0,t.jsx)(r.h3,{id:"factory-pattern",children:"Factory Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class Person {\r\n  constructor(name, age) {\r\n    this.name = name;\r\n    this.age = age;\r\n  }\r\n  sayGreeting = () => {\r\n    console.log(`Hello , this is ${this.name} and I am ${this.age} years old`);\r\n  };\r\n}\r\n\r\nclass PersonFactory {\r\n  static createPerson(name, age) {\r\n    return new Person(name, age);\r\n  }\r\n}\r\n\r\nconst p1 = PersonFactory.createPerson("Pawan", 25);\r\nconst p2 = PersonFactory.createPerson("Ayush", 26);\r\n\r\np1.sayGreeting(); //Hello , this is Pawan and I am 25 years old\r\np2.sayGreeting(); //Hello , this is Ayush and I am 26 years old\n'})}),"\n",(0,t.jsx)(r.h3,{id:"module-pattern",children:"Module Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"class MyModule {\r\n  #privateChar = \"I'm private\";\r\n\r\n  #getPrivateChar = () => {\r\n    console.log(\"I'm private method\");\r\n  };\r\n\r\n  publicMethod = () => {\r\n    console.log(\"I'm public method\");\r\n  };\r\n}\r\n\r\nconst mm = new MyModule();\r\n\r\nmm.publicMethod(); //I'm public method\r\n// mm.#getPrivateChar(); //Property '#getPrivateChar' is not accessible outside class 'MyModule' because it has a private identifier.\r\n// mm.#privateChar; //Property '#privateChar' is not accessible outside class 'MyModule' because it has a private identifier.\n"})}),"\n",(0,t.jsx)(r.h3,{id:"proxy-pattern",children:"Proxy Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'const person = {\r\n  name: "pawan",\r\n  age: 25,\r\n};\r\n\r\nconst handler = {\r\n  get: (target, key) => {\r\n    if (key === "name") return target[key].toUpperCase();\r\n  },\r\n  set: (target, key, value) => {\r\n    if (key === "address") {\r\n      key = key + "01";\r\n    }\r\n    target[key] = value;\r\n  },\r\n};\r\n\r\nconst proxy = new Proxy(person, handler);\r\n\r\nproxy["address"] = "Lucknow";\r\nconsole.log(proxy); //{ name: \'pawan\', age: 25, address01: \'Lucknow\' }\n'})}),"\n",(0,t.jsx)(r.h3,{id:"builder-pattern",children:"Builder Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class Product {\r\n  constructor(name, price, category) {\r\n    this.name = name;\r\n    this.price = price;\r\n    this.category = category;\r\n  }\r\n}\r\n\r\nclass ProductBuilder {\r\n  constructor(name) {\r\n    this.product = new Product();\r\n    this.product.name = name;\r\n  }\r\n\r\n  withPrice = (price) => {\r\n    this.product.price = price;\r\n    return this;\r\n  };\r\n\r\n  isCategory = (category) => {\r\n    this.product.category = category;\r\n    return this;\r\n  };\r\n\r\n  build = () => {\r\n    return this;\r\n  };\r\n}\r\n\r\nconst product = new ProductBuilder("Widget")\r\n  .withPrice(19.99)\r\n  .isCategory("Gadgets")\r\n  .build();\r\n\r\nconsole.log(product.product);\n'})}),"\n",(0,t.jsx)(r.h3,{id:"circuitbreaker-pattern",children:"CircuitBreaker Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class CircuitBreaker {\r\n  constructor(threshold, timeout) {\r\n    this.threshold = threshold; // number of failures before tripping the circuit\r\n    this.timeout = timeout; // time to wait before attempting to call the service again\r\n    this.failureCount = 0; // number of consecutive failures\r\n    this.lastFailureTime = null; // time of the last failure\r\n    this.isCircuitOpen = false; // whether the circuit is currently open\r\n  }\r\n\r\n  async callService() {\r\n    if (this.isCircuitOpen) {\r\n      const now = Date.now();\r\n      if (now - this.lastFailureTime > this.timeout) {\r\n        this.isCircuitOpen = false;\r\n        this.failureCount = 0;\r\n      } else {\r\n        throw new Error("Circuit is open");\r\n      }\r\n    }\r\n\r\n    try {\r\n      // Call the service here\r\n      const result = await someServiceCall();\r\n      this.failureCount = 0;\r\n      return result;\r\n    } catch (error) {\r\n      this.failureCount++;\r\n      this.lastFailureTime = Date.now();\r\n      if (this.failureCount >= this.threshold) {\r\n        this.isCircuitOpen = true;\r\n      }\r\n      throw error;\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"evenstreamer-pattern",children:"EvenStreamer Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class EventSteamer {\r\n  constructor() {\r\n    this.listeners = {};\r\n  }\r\n\r\n  on = (event, listener) => {\r\n    if (!this.listeners[event]) {\r\n      this.listeners[event] = [];\r\n    }\r\n    this.listeners[event].push(listener);\r\n  };\r\n\r\n  off = (event, listener) => {\r\n    if (this.listeners[event]) {\r\n      this.listeners[event] = this.listeners[event].filter(\r\n        (fn) => fn !== listener\r\n      );\r\n    }\r\n  };\r\n\r\n  emit = (event, data) => {\r\n    if (this.listeners[event]) {\r\n      this.listeners[event].forEach((listener) => listener(data));\r\n    }\r\n  };\r\n}\r\n\r\nconst es = new EventSteamer();\r\n\r\nfunction handleData(data) {\r\n  console.log("Receiver data", data);\r\n}\r\n\r\nes.on("data", handleData);\r\nes.emit("data", "Sample Data"); //Receiver data Sample Data\r\nes.off("data", handleData);\r\nes.emit("data", "Another Data"); //No data as the handler has been removed\n'})}),"\n",(0,t.jsx)(r.h3,{id:"iterator-pattern",children:"Iterator Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const iterator = (collection) => {\r\n  let idx = 0;\r\n  return {\r\n    next: () =>\r\n      idx < collection.length\r\n        ? { value: collection[idx++], done: false }\r\n        : { done: true },\r\n  };\r\n};\r\n\r\nconst arr = [1, 2, 3, 4];\r\nconst iter = iterator(arr);\r\nconsole.log(iter.next()); //{ value: 1, done: false }\r\nconsole.log(iter.next()); //{ value: 2, done: false }\r\nconsole.log(iter.next()); //{ value: 3, done: false }\r\nconsole.log(iter.next()); //{ value: 4, done: false }\r\nconsole.log(iter.next()); //{ done: true }\n"})}),"\n",(0,t.jsx)(r.h3,{id:"observer-pattern",children:"Observer Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class Observer {\r\n  update = (message) => {\r\n    console.log("Received Message", message);\r\n  };\r\n}\r\n\r\nclass Subject {\r\n  constructor() {\r\n    this.observers = [];\r\n  }\r\n\r\n  addObserver = (observer) => {\r\n    this.observers.push(observer);\r\n  };\r\n\r\n  removerObserver = (observer) => {\r\n    this.observers = this.observers.filter((obs) => obs !== observer);\r\n  };\r\n\r\n  notifyObservers = (message) => {\r\n    this.observers.forEach((obs) => obs.update(message));\r\n  };\r\n}\r\n\r\nconst subject = new Subject();\r\n\r\nconst ob1 = new Observer();\r\nconst ob2 = new Observer();\r\nsubject.addObserver(ob1);\r\nsubject.addObserver(ob2);\r\n\r\nsubject.notifyObservers("Hello Observers");\r\nsubject.removerObserver(ob1);\r\nsubject.notifyObservers("Observers, are you still there?");\n'})}),"\n",(0,t.jsx)(r.h3,{id:"pubsub-pattern",children:"PubSub Pattern"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:'class PubSub {\r\n  constructor() {\r\n    this.subscribers = {};\r\n  }\r\n\r\n  subscribe = (event, cb) => {\r\n    if (!this.subscribers[event]) {\r\n      this.subscribers[event] = [];\r\n    }\r\n    this.subscribers[event].push(cb);\r\n  };\r\n\r\n  publish = (event, data) => {\r\n    if (this.subscribers[event]) {\r\n      this.subscribers[event].forEach((cb) => cb(data));\r\n    }\r\n  };\r\n\r\n  unSubscribe = (event, callback) => {\r\n    if (this.subscribers[event]) {\r\n      this.subscribers[event] = this.subscribers[event].filter(\r\n        (cb) => cb !== callback\r\n      );\r\n    }\r\n  };\r\n}\r\n\r\nconst ps = new PubSub();\r\n\r\nfunction subscriber1(data) {\r\n  console.log("Subscriber1 recieved data", data);\r\n}\r\n\r\nfunction subscriber2(data) {\r\n  console.log("Subscriber2 recieved data", data);\r\n}\r\n\r\nps.subscribe("myEvent", subscriber1); //Subscriber1 recieved data Hello Love...\r\nps.subscribe("myEvent", subscriber2); //Subscriber2 recieved data Hello Love...\r\nps.publish("myEvent", "Hello Love...");\r\n\r\nps.unSubscribe("myEvent", subscriber1);\r\n\r\nps.publish("myEvent", "unsubscribed from s1"); //Subscriber2 recieved data unsubscribed from s1\n'})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(6540);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);