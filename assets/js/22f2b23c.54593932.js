"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[109],{4538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=r(4848),i=r(8453);const t={},l="Frontend System Design",o={id:"tutorial-extras/Core JavaScript/FrontendSystemDesign",title:"Frontend System Design",description:"1. Requirements Exploration",source:"@site/docs/tutorial-extras/Core JavaScript/FrontendSystemDesign.mdx",sourceDirName:"tutorial-extras/Core JavaScript",slug:"/tutorial-extras/Core JavaScript/FrontendSystemDesign",permalink:"/js.enigma/docs/tutorial-extras/Core JavaScript/FrontendSystemDesign",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-extras/Core JavaScript/FrontendSystemDesign.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS3 Interview Questions",permalink:"/js.enigma/docs/tutorial-extras/Core JavaScript/CSS"},next:{title:"HTML5 Interview Questions",permalink:"/js.enigma/docs/tutorial-extras/Core JavaScript/HTML"}},c={},d=[{value:"1. Requirements Exploration",id:"1-requirements-exploration",level:2},{value:"2. Architecture/High-Level Design",id:"2-architecturehigh-level-design",level:2},{value:"3. Data Model",id:"3-data-model",level:2},{value:"4. Interface Definition (API)",id:"4-interface-definition-api",level:2},{value:"5. Optimizations and Deep Dive",id:"5-optimizations-and-deep-dive",level:2},{value:"Resources to Watch More in Depth",id:"resources-to-watch-more-in-depth",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"frontend-system-design",children:"Frontend System Design"})}),"\n",(0,s.jsx)(n.h1,{id:"radio-pattern-autocomplete",children:"RADIO Pattern (Autocomplete)"}),"\n",(0,s.jsx)("img",{src:"https://storage.googleapis.com/gweb-uniblog-publish-prod/images/sf_autocomplete_search.width-1300.jpg",alt:"autocomplete",loading:"lazy"}),"\n",(0,s.jsx)(n.h2,{id:"1-requirements-exploration",children:"1. Requirements Exploration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Clarify the Problem Scope:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Primary Goal:"})," To provide real-time, relevant suggestions as the user types in the input field."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Source:"})," Will suggestions be sourced from a local database, external API, or both?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pagination Strategy:"})," Determine if results should be paginated or if infinite scrolling is required."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Display Requirements:"})," Define what should be shown in the suggestions (text, images, icons)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling:"})," How should errors be managed (e.g., API failures)?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance Needs:"})," Focus on optimizing the speed and efficiency of fetching suggestions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security:"})," Address any data privacy concerns related to the suggestions."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Functional Requirements:"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Real-Time Suggestions:"})," Provide suggestions in real-time as the user types."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Functionality:"})," Fetch and display suggestions based on user input."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pagination/Scrolling:"})," Support paginated results or infinite scrolling based on user interaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling:"})," Display appropriate error messages if the API request fails or returns no results."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Selection Handling:"})," Allow users to select a suggestion from the list and handle the selection event."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Non-Functional Requirements:"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance:"})," Ensure the autocomplete feature is responsive and does not degrade the performance of the application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scalability:"})," Design the system to handle a large number of suggestions and concurrent users efficiently."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usability:"})," Ensure the autocomplete component is user-friendly and provides a smooth experience."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accessibility:"})," Make sure the component is accessible to users with disabilities, including compatibility with screen readers and keyboard navigation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reliability:"})," Ensure the system handles errors gracefully and remains operational under varying conditions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security:"})," Protect user data and interactions, especially if dealing with sensitive or personal information."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-architecturehigh-level-design",children:"2. Architecture/High-Level Design"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Key Components and Their Relationships:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"UI Component (Autocomplete Box):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Contains the input field and suggestion list."}),"\n",(0,s.jsx)(n.li,{children:"Manages user interactions, including showing suggestions and handling errors."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Search Service:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Handles communication with the backend to fetch suggestions."}),"\n",(0,s.jsx)(n.li,{children:"Manages pagination and updates the suggestion list."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Cache:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stores results for previously fetched queries and offsets."}),"\n",(0,s.jsx)(n.li,{children:"Reduces redundant API calls and speeds up response times."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"State Management:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manages the state of user input, suggestions, errors, and loading indicators."}),"\n",(0,s.jsx)(n.li,{children:"Connects the UI with the data fetched from the backend."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"API Layer:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Defines how the frontend communicates with the backend."}),"\n",(0,s.jsx)(n.li,{children:"Handles API requests, including pagination, and manages error responses."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-data-model",children:"3. Data Model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"+-------------------+\r\n|    Query Object   |\r\n+-------------------+\r\n| - query: string   |\r\n| - offset: number  |\r\n| - limit: number   |\r\n+-------------------+\r\n| + SearchService   |\r\n| + APILayer        |\r\n+-------------------+\r\n\r\n       ^\r\n       |\r\n       |\r\n\r\n+-----------------------+\r\n|  Suggestion Object    |\r\n+-----------------------+\r\n| - id: string          |\r\n| - label: string       |\r\n| - description: string |\r\n| - icon: string        |\r\n+-----------------------+\r\n| + UIComponent         |\r\n| + Cache               |\r\n+-----------------------+\r\n\r\n       ^\r\n       |\r\n       |\r\n\r\n+------------------------+\r\n|   Error Object         |\r\n+------------------------+\r\n| - errorCode: string    |\r\n| - errorMessage: string |\r\n+------------------------+\r\n| + UIComponent          |\r\n| + APILayer             |\r\n+------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Data Entities and Their Components:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"// Query Object Interface\r\ninterface Query {\r\n  query: string;      // The search term entered by the user\r\n  offset: number;     // Pagination offset for fetching results\r\n  limit: number;      // Number of results to return per request\r\n}\r\n\r\n// Suggestion Object Interface\r\ninterface Suggestion {\r\n  id: string;         // Unique identifier for the suggestion\r\n  label: string;      // The main text of the suggestion\r\n  description?: string; // Optional additional information\r\n  icon?: string;      // Optional image or icon URL\r\n}\r\n\r\n// Error Object Interface\r\ninterface Error {\r\n  errorCode: string;  // Code representing the type of error\r\n  errorMessage: string; // Description of the error\r\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Query Object:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": The search term entered by the user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"offset"}),": Pagination offset for fetching results."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"limit"}),": Number of results to return per request."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Component:"})," Search Service, API Layer."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Suggestion Object:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),": Unique identifier for the suggestion."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"label"}),": The main text of the suggestion."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"}),": Optional additional information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"icon"}),": Optional image or icon URL."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Component:"})," UI Component, Cache."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Error Object:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"errorCode"}),": Code representing the type of error."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"errorMessage"}),": Description of the error."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Component:"})," UI Component, API Layer."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-interface-definition-api",children:"4. Interface Definition (API)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Define Component Interfaces:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fetch Suggestions API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Endpoint:"})," ",(0,s.jsx)(n.code,{children:"GET /api/suggestions"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Functionality:"})," Retrieves suggestions based on the search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": The search term."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"offset"}),": Pagination offset (to support infinite scrolling)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"limit"}),": Number of results to fetch."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example Request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"GET /api/suggestions?query=apple&offset=0&limit=10\n"})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:'{\r\n  "pagination": {\r\n    "size": 10,          // Number of results per page\r\n    "total": 50,         // Total number of results available\r\n    "count": 10,         // Number of results returned in this response\r\n    "per_page": 10,      // Number of results per page\r\n    "next_page_url": "/api/suggestions?query=apple&offset=10&limit=10",  // URL for the next page\r\n    "prev_page_url": null,  // URL for the previous page (null if on the first page)\r\n    "next_cursor": "next_cursor_value",  // Cursor for the next set of results\r\n    "prev_cursor": null  // Cursor for the previous set of results (null if on the first page)\r\n  },\r\n  "results": [\r\n    {\r\n      "id": "1",\r\n      "label": "Apple"\r\n    },\r\n    {\r\n      "id": "2",\r\n      "label": "Apple Pie"\r\n    }\r\n    // ... More results\r\n  ]\r\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Errors:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"404:"})," No suggestions found."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"500:"})," Internal server error."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Load More API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Endpoint:"})," ",(0,s.jsx)(n.code,{children:"GET /api/suggestions"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Functionality:"})," Fetches additional suggestions for the next page."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": The search term."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"offset"}),": Updated pagination offset."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"limit"}),": Number of results to fetch."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example Request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"GET /api/suggestions?query=apple&offset=10&limit=10\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Response:"})," Same format as Fetch Suggestions API."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-optimizations-and-deep-dive",children:"5. Optimizations and Deep Dive"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explore Optimization Opportunities:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Caching:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cache previous results to minimize redundant API requests and improve performance."}),"\n",(0,s.jsx)(n.li,{children:"Use an in-memory cache with query and offset as keys."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Debouncing:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement debouncing to reduce the number of API calls during user input."}),"\n",(0,s.jsx)(n.li,{children:"Example: Delay API requests by 300ms after the user stops typing."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pagination:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement pagination to fetch results in chunks rather than all at once."}),"\n",(0,s.jsx)(n.li,{children:"Example: Load 10 results at a time with a \u201cLoad More\u201d button."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Lazy Loading:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use lazy loading to display results only when needed (e.g., as the user scrolls down)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prefetching:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prefetch the next set of results when the user is close to reaching the end of the current list."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Error Handling:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement retry logic for failed requests and display user-friendly error messages."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Accessibility:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the autocomplete component is accessible to screen readers and other assistive technologies."}),"\n",(0,s.jsx)(n.li,{children:"Use ARIA roles and properties to enhance accessibility."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Performance:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Optimize rendering by updating only the parts of the UI that change."}),"\n",(0,s.jsx)(n.li,{children:"Consider using virtual scrolling for large datasets to enhance performance."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JavaScript",children:"+---------------------+\r\n|  UI Component       |\r\n|  (Autocomplete Box) |\r\n+----------+----------+\r\n           |\r\n           v\r\n+----------+----------+\r\n|  Search Service     |\r\n+----------+----------+\r\n           |\r\n           v\r\n+----------+----------+\r\n|  Cache              |\r\n+----------+----------+\r\n           |\r\n           v\r\n+----------+----------+\r\n|  API Layer          |\r\n+----------+----------+\r\n           |\r\n           v\r\n+----------+----------+\r\n|  State Management   |\r\n+----------+----------+\r\n           |\r\n           v\r\n+----------+----------+\r\n|  UI Component       |\r\n|  (Autocomplete Box) |\r\n+---------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"resources-to-watch-more-in-depth",children:"Resources to Watch More in Depth"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=sV_4pOGosnU&list=PL4CFloQ4GGWICE0Tz6iXKfN3XWkXRlboU",children:"Chirag's Playlist"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=5vyKhm2NTfw&list=PLI9W87-Dqn7j_x6QtR6sUjycJR7nQLBqT",children:"Frontend-Engineer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=NEzu4FD25KM&pp=ygUWZnJvbnRlbmQgc3lzdGVtIGRlaXNnbg%3D%3D",children:"Shivam Bhalla"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=XPNMiWyHBAU&ab_channel=Recro",children:"Recro (Ashmita)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(6540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);