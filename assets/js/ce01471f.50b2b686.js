"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5492],{3774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(4848),l=t(8453);const s={title:"DOM Methods & Selectors Cheatsheet"},i=void 0,o={id:"tutorial-extras/HTMLDOM/DOMCheatSheet",title:"DOM Methods & Selectors Cheatsheet",description:"Element Selectors",source:"@site/docs/tutorial-extras/HTMLDOM/DOMCheatSheet.mdx",sourceDirName:"tutorial-extras/HTMLDOM",slug:"/tutorial-extras/HTMLDOM/DOMCheatSheet",permalink:"/js.enigma/docs/tutorial-extras/HTMLDOM/DOMCheatSheet",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/HTMLDOM/DOMCheatSheet.mdx",tags:[],version:"current",frontMatter:{title:"DOM Methods & Selectors Cheatsheet"},sidebar:"tutorialSidebar",previous:{title:"Shadow DOM",permalink:"/js.enigma/docs/tutorial-extras/HTML5/ShadowDOM"},next:{title:"Closures",permalink:"/js.enigma/docs/tutorial-extras/JSInterviewQuestions/Closure"}},a={},c=[{value:"Element Selectors",id:"element-selectors",level:2},{value:"Common Element Properties",id:"common-element-properties",level:2},{value:"Element Creation &amp; Modification",id:"element-creation--modification",level:2},{value:"ClassList Methods",id:"classlist-methods",level:2},{value:"Element Traversal",id:"element-traversal",level:2},{value:"Event Handling",id:"event-handling",level:2},{value:"Measuring Elements &amp; Position",id:"measuring-elements--position",level:2},{value:"Form Element Properties &amp; Methods",id:"form-element-properties--methods",level:2},{value:"Converting Collections to Arrays",id:"converting-collections-to-arrays",level:2},{value:"Common NodeList vs HTMLCollection Differences",id:"common-nodelist-vs-htmlcollection-differences",level:2}];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"element-selectors",children:"Element Selectors"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Single Element Selectors (returns single element)\r\ndocument.getElementById('myId')                 // No array conversion needed\r\ndocument.querySelector('.myClass')              // No array conversion needed\r\ndocument.querySelector('#myId')                 // No array conversion needed\r\ndocument.querySelector('[data-test]')           // No array conversion needed\r\n\r\n// Multiple Element Selectors (returns NodeList or HTMLCollection)\r\ndocument.getElementsByClassName('myClass')      // Returns HTMLCollection - needs Array.from()\r\ndocument.getElementsByTagName('div')           // Returns HTMLCollection - needs Array.from()\r\ndocument.getElementsByName('firstName')        // Returns NodeList - has forEach, needs Array.from() for map/filter\r\ndocument.querySelectorAll('.myClass')         // Returns NodeList - has forEach, needs Array.from() for map/filter\n"})}),"\n",(0,r.jsx)(n.h2,{id:"common-element-properties",children:"Common Element Properties"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"element.id                    // Get/set ID\r\nelement.className            // Get/set class as string\r\nelement.classList            // List of classes with methods\r\nelement.tagName             // Get tag name (uppercase)\r\nelement.innerHTML           // Get/set HTML content\r\nelement.textContent         // Get/set text content (no HTML)\r\nelement.innerText           // Get/set rendered text content\r\nelement.value              // Get/set form input value\r\nelement.style              // Access CSS properties\r\nelement.dataset            // Access data-* attributes\r\nelement.attributes         // Get all attributes\r\nelement.getAttribute('src') // Get specific attribute\r\nelement.setAttribute('src', 'value') // Set specific attribute\n"})}),"\n",(0,r.jsx)(n.h2,{id:"element-creation--modification",children:"Element Creation & Modification"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Creating Elements\r\nconst div = document.createElement('div')\r\nconst text = document.createTextNode('Hello')\r\nconst fragment = document.createDocumentFragment()\r\n\r\n// Adding Elements\r\nparentElement.appendChild(childElement)\r\nparentElement.append(element1, element2, 'text')  // Multiple nodes & text\r\nparentElement.prepend(element)                    // Add as first child\r\nparentElement.insertBefore(newNode, referenceNode)\r\nelement.insertAdjacentHTML('beforeend', htmlString)\r\nelement.insertAdjacentElement('afterend', element)\r\n\r\n// Removing Elements\r\nelement.remove()                                  // Remove self\r\nparentElement.removeChild(childElement)           // Remove child\r\nelement.replaceWith(newElement)                  // Replace self\r\nparentElement.replaceChild(newChild, oldChild)    // Replace child\r\n\r\n// Cloning Elements\r\nelement.cloneNode(true)  // Deep clone with children\r\nelement.cloneNode(false) // Shallow clone without children\n"})}),"\n",(0,r.jsx)(n.h2,{id:"classlist-methods",children:"ClassList Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"element.classList.add('class1', 'class2')\r\nelement.classList.remove('class1', 'class2')\r\nelement.classList.toggle('class')\r\nelement.classList.contains('class')\r\nelement.classList.replace('old', 'new')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"element-traversal",children:"Element Traversal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Parents & Children\r\nelement.parentElement              // Immediate parent\r\nelement.parentNode                // Immediate parent node\r\nelement.children                  // HTMLCollection of children - needs Array.from()\r\nelement.childNodes               // NodeList of child nodes - needs Array.from() for map/filter\r\nelement.firstElementChild        // First child element\r\nelement.lastElementChild         // Last child element\r\nelement.firstChild              // First child node\r\nelement.lastChild               // Last child node\r\n\r\n// Siblings\r\nelement.previousElementSibling   // Previous sibling element\r\nelement.nextElementSibling      // Next sibling element\r\nelement.previousSibling         // Previous sibling node\r\nelement.nextSibling            // Next sibling node\n"})}),"\n",(0,r.jsx)(n.h2,{id:"event-handling",children:"Event Handling"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Adding Events\r\nelement.addEventListener('click', callback)\r\nelement.addEventListener('click', callback, { once: true })\r\nelement.addEventListener('click', callback, { capture: true })\r\nelement.onclick = callback\r\n\r\n// Removing Events\r\nelement.removeEventListener('click', callback)\r\nelement.onclick = null\r\n\r\n// Event Object Properties\r\nevent.target                // Element that triggered event\r\nevent.currentTarget        // Element event listener is attached to\r\nevent.preventDefault()     // Prevent default behavior\r\nevent.stopPropagation()   // Stop event bubbling\r\nevent.stopImmediatePropagation() // Stop other listeners\n"})}),"\n",(0,r.jsx)(n.h2,{id:"measuring-elements--position",children:"Measuring Elements & Position"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Element Size & Position\r\nelement.getBoundingClientRect()  // Size and position relative to viewport\r\nelement.offsetWidth             // Width including padding and border\r\nelement.offsetHeight            // Height including padding and border\r\nelement.clientWidth            // Width including padding\r\nelement.clientHeight           // Height including padding\r\nelement.scrollWidth            // Total scrollable width\r\nelement.scrollHeight           // Total scrollable height\r\nelement.offsetLeft             // Distance from left of positioned parent\r\nelement.offsetTop              // Distance from top of positioned parent\n"})}),"\n",(0,r.jsx)(n.h2,{id:"form-element-properties--methods",children:"Form Element Properties & Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"form.elements                   // Access form controls - HTMLFormControlsCollection\r\nform.submit()                  // Submit form programmatically\r\nform.reset()                   // Reset form to initial state\r\ninput.focus()                  // Focus input\r\ninput.blur()                   // Remove focus\r\ninput.select()                 // Select input content\r\ninput.checkValidity()          // Check HTML5 validation\n"})}),"\n",(0,r.jsx)(n.h2,{id:"converting-collections-to-arrays",children:"Converting Collections to Arrays"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// HTMLCollection (from getElementsByClassName, getElementsByTagName, children)\r\nArray.from(collection)\r\n[...collection]\r\n\r\n// NodeList (from querySelectorAll, childNodes)\r\nArray.from(nodeList)\r\n[...nodeList]\r\n\r\n// Example usage with array methods\r\nArray.from(document.querySelectorAll('.item')).map(el => el.textContent)\r\n[...document.getElementsByClassName('item')].filter(el => el.classList.contains('active'))\n"})}),"\n",(0,r.jsx)(n.h2,{id:"common-nodelist-vs-htmlcollection-differences",children:"Common NodeList vs HTMLCollection Differences"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// NodeList:\r\n- Returned by querySelectorAll(), childNodes\r\n- Static (doesn't update when DOM changes)\r\n- Has forEach method built in\r\n- Needs Array.from() for map, filter, reduce\r\n- Can contain text nodes and comment nodes\r\n\r\n// HTMLCollection:\r\n- Returned by getElementsByClassName(), getElementsByTagName(), children\r\n- Live (updates when DOM changes)\r\n- No forEach method built in\r\n- Needs Array.from() for all array methods\r\n- Only contains element nodes\n"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);