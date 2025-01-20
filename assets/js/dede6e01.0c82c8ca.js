"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5733],{5466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(4848),o=t(8453);const s={},c="React Compound Components",l={id:"WebDev/React/CompoundComponents",title:"React Compound Components",description:"Basic Structure",source:"@site/docs/WebDev/React/CompoundComponents.mdx",sourceDirName:"WebDev/React",slug:"/WebDev/React/CompoundComponents",permalink:"/js.enigma/docs/WebDev/React/CompoundComponents",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/React/CompoundComponents.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Atomic Design in React",permalink:"/js.enigma/docs/WebDev/React/ATOMICDesign"},next:{title:"Custom Events",permalink:"/js.enigma/docs/WebDev/React/CustomEvents"}},i={},a=[{value:"Basic Structure",id:"basic-structure",level:2},{value:"Complete Example: Custom Select Component",id:"complete-example-custom-select-component",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"1. Context Setup",id:"1-context-setup",level:3},{value:"2. Sub-components",id:"2-sub-components",level:3},{value:"3. State Management Patterns",id:"3-state-management-patterns",level:3},{value:"4. Advanced Patterns",id:"4-advanced-patterns",level:3},{value:"Controlled vs Uncontrolled",id:"controlled-vs-uncontrolled",level:4},{value:"Render Props with Compound Components",id:"render-props-with-compound-components",level:4},{value:"5. TypeScript Support",id:"5-typescript-support",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Common Pitfalls to Avoid",id:"common-pitfalls-to-avoid",level:2},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Testing",id:"testing",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"react-compound-components",children:"React Compound Components"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-structure",children:"Basic Structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Basic compound component pattern\r\nconst Menu = ({ children }) => {\r\n  const [activeIndex, setActiveIndex] = useState(null);\r\n  \r\n  return (\r\n    <MenuContext.Provider value={{ activeIndex, setActiveIndex }}>\r\n      <div className=\"menu\">{children}</div>\r\n    </MenuContext.Provider>\r\n  );\r\n};\r\n\r\nMenu.Item = ({ children, index }) => {\r\n  const { activeIndex, setActiveIndex } = useContext(MenuContext);\r\n  \r\n  return (\r\n    <div \r\n      className={`menu-item ${activeIndex === index ? 'active' : ''}`}\r\n      onClick={() => setActiveIndex(index)}\r\n    >\r\n      {children}\r\n    </div>\r\n  );\r\n};\r\n\r\n// Usage\r\n<Menu>\r\n  <Menu.Item index={0}>Home</Menu.Item>\r\n  <Menu.Item index={1}>About</Menu.Item>\r\n  <Menu.Item index={2}>Contact</Menu.Item>\r\n</Menu>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"complete-example-custom-select-component",children:"Complete Example: Custom Select Component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { createContext, useContext, useState } from \'react\';\r\n\r\n// Create context\r\nconst SelectContext = createContext();\r\n\r\n// Main component\r\nconst Select = ({ children, onValueChange }) => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n  const [selectedValue, setSelectedValue] = useState(null);\r\n\r\n  const handleSelect = (value) => {\r\n    setSelectedValue(value);\r\n    setIsOpen(false);\r\n    onValueChange?.(value);\r\n  };\r\n\r\n  return (\r\n    <SelectContext.Provider \r\n      value={{ \r\n        isOpen, \r\n        setIsOpen, \r\n        selectedValue, \r\n        handleSelect \r\n      }}\r\n    >\r\n      <div className="select-container">\r\n        {children}\r\n      </div>\r\n    </SelectContext.Provider>\r\n  );\r\n};\r\n\r\n// Trigger component\r\nSelect.Trigger = ({ placeholder = \'Select...\' }) => {\r\n  const { isOpen, setIsOpen, selectedValue } = useContext(SelectContext);\r\n\r\n  return (\r\n    <button \r\n      className="select-trigger"\r\n      onClick={() => setIsOpen(!isOpen)}\r\n    >\r\n      {selectedValue ?? placeholder}\r\n    </button>\r\n  );\r\n};\r\n\r\n// Options container\r\nSelect.Options = ({ children }) => {\r\n  const { isOpen } = useContext(SelectContext);\r\n\r\n  if (!isOpen) return null;\r\n\r\n  return (\r\n    <div className="select-options">\r\n      {children}\r\n    </div>\r\n  );\r\n};\r\n\r\n// Option item\r\nSelect.Option = ({ children, value }) => {\r\n  const { selectedValue, handleSelect } = useContext(SelectContext);\r\n\r\n  return (\r\n    <div \r\n      className={`select-option ${selectedValue === value ? \'selected\' : \'\'}`}\r\n      onClick={() => handleSelect(value)}\r\n    >\r\n      {children}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport { Select };\r\n\r\n// Usage\r\nconst MySelect = () => (\r\n  <Select onValueChange={(value) => console.log(value)}>\r\n    <Select.Trigger placeholder="Choose a color" />\r\n    <Select.Options>\r\n      <Select.Option value="red">Red</Select.Option>\r\n      <Select.Option value="blue">Blue</Select.Option>\r\n      <Select.Option value="green">Green</Select.Option>\r\n    </Select.Options>\r\n  </Select>\r\n);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,r.jsx)(n.h3,{id:"1-context-setup",children:"1. Context Setup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Create context\r\nconst ComponentContext = createContext();\r\n\r\n// Provider wrapper\r\nconst MainComponent = ({ children }) => {\r\n  const [state, setState] = useState(initialState);\r\n  \r\n  return (\r\n    <ComponentContext.Provider value={{ state, setState }}>\r\n      {children}\r\n    </ComponentContext.Provider>\r\n  );\r\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-sub-components",children:"2. Sub-components"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Static properties approach\r\nMainComponent.SubComponent = ({ children }) => {\r\n  const context = useContext(ComponentContext);\r\n  return <div>{children}</div>;\r\n};\r\n\r\n// Namespace approach\r\nconst Namespace = {\r\n  Main: MainComponent,\r\n  Sub: SubComponent\r\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-state-management-patterns",children:"3. State Management Patterns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Centralized state\r\nconst TabGroup = ({ children }) => {\r\n  const [activeTab, setActiveTab] = useState(0);\r\n  \r\n  return (\r\n    <TabContext.Provider value={{ activeTab, setActiveTab }}>\r\n      {children}\r\n    </TabContext.Provider>\r\n  );\r\n};\r\n\r\n// Distributed state\r\nconst Accordion = ({ children }) => {\r\n  return <div className=\"accordion\">{children}</div>;\r\n};\r\n\r\nAccordion.Item = ({ children }) => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n  return (\r\n    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>\r\n      {children(isOpen, setIsOpen)}\r\n    </div>\r\n  );\r\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-advanced-patterns",children:"4. Advanced Patterns"}),"\n",(0,r.jsx)(n.h4,{id:"controlled-vs-uncontrolled",children:"Controlled vs Uncontrolled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Controlled component\r\nconst ControlledSelect = ({ value, onChange, children }) => (\r\n  <Select \r\n    value={value}\r\n    onChange={onChange}\r\n  >\r\n    {children}\r\n  </Select>\r\n);\r\n\r\n// Uncontrolled component\r\nconst UncontrolledSelect = ({ defaultValue, children }) => (\r\n  <Select defaultValue={defaultValue}>\r\n    {children}\r\n  </Select>\r\n);\n"})}),"\n",(0,r.jsx)(n.h4,{id:"render-props-with-compound-components",children:"Render Props with Compound Components"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const Dropdown = ({ children }) => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n  \r\n  return (\r\n    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>\r\n      {typeof children === 'function' \r\n        ? children({ isOpen, setIsOpen }) \r\n        : children}\r\n    </DropdownContext.Provider>\r\n  );\r\n};\r\n\r\n// Usage\r\n<Dropdown>\r\n  {({ isOpen }) => (\r\n    <>\r\n      <Dropdown.Toggle />\r\n      {isOpen && <Dropdown.Menu />}\r\n    </>\r\n  )}\r\n</Dropdown>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"5-typescript-support",children:"5. TypeScript Support"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Context type\r\ninterface ComponentContext {\r\n  state: State;\r\n  setState: (state: State) => void;\r\n}\r\n\r\n// Component types\r\ninterface MainComponentProps {\r\n  children: React.ReactNode;\r\n  defaultValue?: string;\r\n}\r\n\r\ninterface SubComponentProps {\r\n  value: string;\r\n  onChange?: (value: string) => void;\r\n}\r\n\r\n// Type declarations\r\ndeclare namespace Component {\r\n  export const Main: React.FC<MainComponentProps>;\r\n  export const Sub: React.FC<SubComponentProps>;\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"API Design"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keep the main component focused on state management"}),"\n",(0,r.jsx)(n.li,{children:"Make sub-components handle specific rendering logic"}),"\n",(0,r.jsx)(n.li,{children:"Use consistent naming conventions for sub-components"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"State Management"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Centralize shared state in the parent component"}),"\n",(0,r.jsx)(n.li,{children:"Use context to avoid prop drilling"}),"\n",(0,r.jsx)(n.li,{children:"Consider performance implications of context updates"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flexibility"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allow for both controlled and uncontrolled usage"}),"\n",(0,r.jsx)(n.li,{children:"Support customization through props"}),"\n",(0,r.jsx)(n.li,{children:"Enable composition with other components"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validate component hierarchy"}),"\n",(0,r.jsx)(n.li,{children:"Provide helpful error messages"}),"\n",(0,r.jsx)(n.li,{children:"Handle edge cases gracefully"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-pitfalls-to-avoid",children:"Common Pitfalls to Avoid"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Over-complicating the API"}),"\n",(0,r.jsx)(n.li,{children:"Unnecessary state sharing"}),"\n",(0,r.jsx)(n.li,{children:"Tight coupling between components"}),"\n",(0,r.jsx)(n.li,{children:"Poor TypeScript support"}),"\n",(0,r.jsx)(n.li,{children:"Missing accessibility features"}),"\n",(0,r.jsx)(n.li,{children:"Incomplete documentation"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Context Splitting"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Split context by concern\r\nconst UIContext = createContext();\r\nconst DataContext = createContext();\r\n\r\nconst Component = ({ children }) => (\r\n  <UIContext.Provider value={uiState}>\r\n    <DataContext.Provider value={dataState}>\r\n      {children}\r\n    </DataContext.Provider>\r\n  </UIContext.Provider>\r\n);\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Memoization"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Memoize expensive computations\r\nconst MemoizedSubComponent = React.memo(({ data }) => (\r\n  <div>{/* render logic */}</div>\r\n));\r\n\r\n// Memoize context value\r\nconst value = useMemo(() => ({\r\n  state,\r\n  actions\r\n}), [state]);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"// Component testing\r\ndescribe('CompoundComponent', () => {\r\n  it('renders correctly', () => {\r\n    render(\r\n      <CompoundComponent>\r\n        <CompoundComponent.Sub />\r\n      </CompoundComponent>\r\n    );\r\n    \r\n    expect(screen.getByRole('button')).toBeInTheDocument();\r\n  });\r\n  \r\n  it('handles state changes', () => {\r\n    const { container } = render(\r\n      <CompoundComponent>\r\n        <CompoundComponent.Sub />\r\n      </CompoundComponent>\r\n    );\r\n    \r\n    fireEvent.click(screen.getByRole('button'));\r\n    expect(container).toMatchSnapshot();\r\n  });\r\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(6540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);