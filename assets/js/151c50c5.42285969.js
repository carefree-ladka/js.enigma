"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8774],{8326:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(4848),s=n(8453);const i={},a="Jest & React Testing Library Cheatsheet",c={id:"WebDev/React/ReactJestRTL",title:"Jest & React Testing Library Cheatsheet",description:"Jest Core",source:"@site/docs/WebDev/React/ReactJestRTL.mdx",sourceDirName:"WebDev/React",slug:"/WebDev/React/ReactJestRTL",permalink:"/js.enigma/docs/WebDev/React/ReactJestRTL",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/React/ReactJestRTL.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Lifecycle Methods",permalink:"/js.enigma/docs/WebDev/React/LifeCycleMethods"},next:{title:"React TypeScript Cheatsheet",permalink:"/js.enigma/docs/WebDev/React/ReactTypeScript"}},o={},l=[{value:"Jest Core",id:"jest-core",level:2},{value:"Test Structure",id:"test-structure",level:3},{value:"Matchers",id:"matchers",level:3},{value:"Mocks",id:"mocks",level:3},{value:"React Testing Library",id:"react-testing-library",level:2},{value:"Rendering",id:"rendering",level:3},{value:"Queries",id:"queries",level:3},{value:"User Events",id:"user-events",level:3},{value:"Common Patterns",id:"common-patterns",level:3},{value:"Custom Hooks Testing",id:"custom-hooks-testing",level:3},{value:"Testing Best Practices",id:"testing-best-practices",level:3}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"jest--react-testing-library-cheatsheet",children:"Jest & React Testing Library Cheatsheet"})}),"\n",(0,t.jsx)(r.h2,{id:"jest-core",children:"Jest Core"}),"\n",(0,t.jsx)(r.h3,{id:"test-structure",children:"Test Structure"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"describe('Component/Unit', () => {\r\n  beforeAll(() => {})\r\n  beforeEach(() => {})\r\n  afterEach(() => {})\r\n  afterAll(() => {})\r\n\r\n  it('should do something', () => {})\r\n  test('does something', () => {})\r\n})\n"})}),"\n",(0,t.jsx)(r.h3,{id:"matchers",children:"Matchers"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// Common\r\nexpect(value).toBe(exact)\r\nexpect(value).toEqual(deepEqual)\r\nexpect(value).toBeTruthy()\r\nexpect(value).toBeFalsy()\r\nexpect(value).toBeNull()\r\nexpect(value).toBeUndefined()\r\nexpect(value).toBeDefined()\r\n\r\n// Numbers\r\nexpect(value).toBeGreaterThan(3)\r\nexpect(value).toBeLessThan(5)\r\nexpect(value).toBeCloseTo(0.3)\r\n\r\n// Strings\r\nexpect(str).toMatch(/regex/)\r\nexpect(str).toContain('substring')\r\nexpect(str).toHaveLength(6)\r\n\r\n// Arrays/Objects\r\nexpect(arr).toContain(item)\r\nexpect(obj).toHaveProperty('key')\r\nexpect(arr).toHaveLength(n)\r\n\r\n// Functions/Async\r\nexpect(fn).toThrow(error)\r\nexpect(promise).resolves.toBe(value)\r\nexpect(promise).rejects.toThrow(error)\n"})}),"\n",(0,t.jsx)(r.h3,{id:"mocks",children:"Mocks"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// Function Mocks\r\nconst mock = jest.fn()\r\nmock.mockReturnValue(value)\r\nmock.mockImplementation(() => value)\r\nmock.mockResolvedValue(value)\r\nmock.mockRejectedValue(error)\r\n\r\n// Verifying Calls\r\nexpect(mock).toHaveBeenCalled()\r\nexpect(mock).toHaveBeenCalledWith(arg1, arg2)\r\nexpect(mock).toHaveBeenCalledTimes(n)\r\n\r\n// Module Mocks\r\njest.mock('./module')\r\njest.spyOn(object, 'method')\n"})}),"\n",(0,t.jsx)(r.h2,{id:"react-testing-library",children:"React Testing Library"}),"\n",(0,t.jsx)(r.h3,{id:"rendering",children:"Rendering"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"import { render, screen } from '@testing-library/react'\r\n\r\n// Basic Render\r\nrender(<Component />)\r\n\r\n// With Providers\r\nrender(\r\n  <Provider>\r\n    <Component />\r\n  </Provider>\r\n)\r\n\r\n// With Router\r\nrender(\r\n  <MemoryRouter initialEntries={['/path']}>\r\n    <Component />\r\n  </MemoryRouter>\r\n)\n"})}),"\n",(0,t.jsx)(r.h3,{id:"queries",children:"Queries"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// Priority Order:\r\n// 1. getByRole\r\n// 2. getByLabelText\r\n// 3. getByPlaceholderText\r\n// 4. getByText\r\n// 5. getByDisplayValue\r\n// 6. getByAltText\r\n// 7. getByTitle\r\n// 8. getByTestId\r\n\r\n// Variants:\r\n// getBy: Expect element to be in DOM\r\n// queryBy: Element might not be in DOM\r\n// findBy: Async, element might appear in DOM\r\n\r\n// Multiple elements:\r\n// getAllBy, queryAllBy, findAllBy\r\n\r\n// Examples\r\nscreen.getByRole('button', { name: /submit/i })\r\nscreen.getByLabelText('Username')\r\nscreen.getByPlaceholderText('Enter value')\r\nscreen.getByText(/hello/i)\r\nscreen.getByTestId('custom-id')\n"})}),"\n",(0,t.jsx)(r.h3,{id:"user-events",children:"User Events"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"import userEvent from '@testing-library/user-event'\r\n\r\n// Setup\r\nconst user = userEvent.setup()\r\n\r\n// Events\r\nawait user.click(element)\r\nawait user.type(input, 'text')\r\nawait user.keyboard('{Enter}')\r\nawait user.selectOptions(select, ['option'])\r\nawait user.clear(input)\r\nawait user.tab()\n"})}),"\n",(0,t.jsx)(r.h3,{id:"common-patterns",children:"Common Patterns"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// Testing Form Submission\r\ntest('form submission', async () => {\r\n  const user = userEvent.setup()\r\n  const onSubmit = jest.fn()\r\n  \r\n  render(<Form onSubmit={onSubmit} />)\r\n  \r\n  await user.type(screen.getByLabelText('Email'), 'test@test.com')\r\n  await user.type(screen.getByLabelText('Password'), 'password')\r\n  await user.click(screen.getByRole('button', { name: /submit/i }))\r\n  \r\n  expect(onSubmit).toHaveBeenCalled()\r\n})\r\n\r\n// Testing Async Actions\r\ntest('async data fetching', async () => {\r\n  render(<UserList />)\r\n  \r\n  expect(screen.getByText('Loading...')).toBeInTheDocument()\r\n  \r\n  await screen.findByRole('list')\r\n  expect(screen.getAllByRole('listitem')).toHaveLength(3)\r\n})\r\n\r\n// Testing Error States\r\ntest('error handling', async () => {\r\n  server.use(\r\n    rest.get('/api/users', (req, res, ctx) => {\r\n      return res(ctx.status(500))\r\n    })\r\n  )\r\n  \r\n  render(<UserList />)\r\n  \r\n  await screen.findByText('Error loading users')\r\n})\n"})}),"\n",(0,t.jsx)(r.h3,{id:"custom-hooks-testing",children:"Custom Hooks Testing"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"import { renderHook, act } from '@testing-library/react'\r\n\r\ntest('custom hook', () => {\r\n  const { result } = renderHook(() => useCustomHook())\r\n  \r\n  act(() => {\r\n    result.current.update()\r\n  })\r\n  \r\n  expect(result.current.value).toBe('updated')\r\n})\n"})}),"\n",(0,t.jsx)(r.h3,{id:"testing-best-practices",children:"Testing Best Practices"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Test behavior, not implementation"}),"\n",(0,t.jsx)(r.li,{children:"Use accessible queries"}),"\n",(0,t.jsx)(r.li,{children:"Avoid implementation details"}),"\n",(0,t.jsx)(r.li,{children:"Test user interactions"}),"\n",(0,t.jsx)(r.li,{children:"Test error scenarios"}),"\n",(0,t.jsx)(r.li,{children:"Mock external dependencies"}),"\n",(0,t.jsx)(r.li,{children:"Keep tests focused and simple"}),"\n",(0,t.jsx)(r.li,{children:"Use meaningful test descriptions"}),"\n",(0,t.jsx)(r.li,{children:"Follow Arrange-Act-Assert pattern"}),"\n",(0,t.jsx)(r.li,{children:"Write maintainable tests"}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var t=n(6540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);