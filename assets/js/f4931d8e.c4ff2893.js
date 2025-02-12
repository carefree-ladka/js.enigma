"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6575],{7261:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=r(4848),s=r(8453);const t={},o="Optimized Webpack Config for Performance",l={id:"WebDev/Build/Webpack",title:"Optimized Webpack Config for Performance",description:"Key Optimizations Explained",source:"@site/docs/WebDev/Build/Webpack.mdx",sourceDirName:"WebDev/Build",slug:"/WebDev/Build/Webpack",permalink:"/js.enigma/docs/WebDev/Build/Webpack",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/WebDev/Build/Webpack.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Bundle Optimization Guide",permalink:"/js.enigma/docs/WebDev/Build/BundleOptimization"},next:{title:"CSS3 Animation Cheatsheet",permalink:"/js.enigma/docs/WebDev/CSS3/CSS3Animation"}},c={},a=[{value:"Key Optimizations Explained",id:"key-optimizations-explained",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"optimized-webpack-config-for-performance",children:"Optimized Webpack Config for Performance"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-JavaScript",children:'const path = require("path");\r\nconst TerserPlugin = require("terser-webpack-plugin");\r\nconst CssMinimizerPlugin = require("css-minimizer-webpack-plugin");\r\nconst MiniCssExtractPlugin = require("mini-css-extract-plugin");\r\nconst CompressionPlugin = require("compression-webpack-plugin");\r\nconst { CleanWebpackPlugin } = require("clean-webpack-plugin");\r\nconst { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");\r\n\r\nmodule.exports = {\r\n  mode: "production", // Ensures Webpack runs in optimized mode\r\n\r\n  entry: "./src/index.js",\r\n\r\n  output: {\r\n    path: path.resolve(__dirname, "dist"),\r\n    filename: "js/[name].[contenthash].js", // Cache-busting\r\n    chunkFilename: "js/[name].[contenthash].chunk.js", // Cache-busting for chunks\r\n    publicPath: "/", // Set according to deployment needs\r\n  },\r\n\r\n  module: {\r\n    rules: [\r\n      // JavaScript / JSX\r\n      {\r\n        test: /\\.js$/,\r\n        exclude: /node_modules/,\r\n        use: {\r\n          loader: "babel-loader",\r\n        },\r\n      },\r\n      // CSS / SCSS\r\n      {\r\n        test: /\\.css$/,\r\n        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],\r\n      },\r\n      {\r\n        test: /\\.scss$/,\r\n        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],\r\n      },\r\n      // Image Optimization\r\n      {\r\n        test: /\\.(png|jpg|jpeg|gif|svg)$/,\r\n        type: "asset",\r\n        parser: {\r\n          dataUrlCondition: {\r\n            maxSize: 8 * 1024, // Inline images below 8KB\r\n          },\r\n        },\r\n      },\r\n    ],\r\n  },\r\n\r\n  optimization: {\r\n    minimize: true,\r\n    minimizer: [\r\n      new TerserPlugin({\r\n        parallel: true, // Use multi-threading\r\n        extractComments: false, // Remove comments\r\n        terserOptions: {\r\n          compress: {\r\n            drop_console: true, // Remove console.logs\r\n          },\r\n        },\r\n      }),\r\n      new CssMinimizerPlugin(), // Minify CSS\r\n    ],\r\n\r\n    // \ud83d\ude80 **Code Splitting for Better Performance**\r\n    splitChunks: {\r\n      chunks: "all",\r\n      cacheGroups: {\r\n        vendors: {\r\n          test: /[\\\\/]node_modules[\\\\/]/,\r\n          name: "vendors",\r\n          chunks: "all",\r\n        },\r\n      },\r\n    },\r\n\r\n    // \u2705 Persistent caching for faster rebuilds\r\n    runtimeChunk: "single",\r\n  },\r\n\r\n  plugins: [\r\n    new CleanWebpackPlugin(), // Cleans old builds\r\n    new MiniCssExtractPlugin({\r\n      filename: "css/[name].[contenthash].css",\r\n    }),\r\n    new CompressionPlugin({\r\n      algorithm: "gzip", // Compress assets with Gzip\r\n      test: /\\.(js|css|html|svg)$/,\r\n      threshold: 10240, // Only compress assets > 10KB\r\n      minRatio: 0.8,\r\n    }),\r\n    new BundleAnalyzerPlugin({\r\n      analyzerMode: "static",\r\n      openAnalyzer: false,\r\n    }),\r\n  ],\r\n\r\n  performance: {\r\n    hints: "warning",\r\n    maxEntrypointSize: 400000, // Warn if entry file exceeds 400KB\r\n    maxAssetSize: 250000, // Warn if asset exceeds 250KB\r\n  },\r\n\r\n  devtool: "source-map", // Helps in debugging, remove for production\r\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"key-optimizations-explained",children:"Key Optimizations Explained"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"1. Minification & Tree Shaking"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"TerserPlugin"}),": Removes unused JS, minifies code."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"CssMinimizerPlugin"}),": Minifies CSS."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"2. Compression"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"CompressionPlugin"}),": Gzip compression for smaller bundle sizes."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"3. Code Splitting & Lazy Loading"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"splitChunks"}),": Moves common dependencies to a separate file (vendors.js)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"runtimeChunk"}),': "single": Improves caching.']}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"4. Caching & Cache Busting"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"[contenthash]"})," in filenames ensures browsers fetch the latest assets."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"5. Performance Hints"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Warns if bundles exceed optimal sizes."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"6. Persistent Caching"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Webpack caches modules efficiently, reducing build times."}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>l});var i=r(6540);const s={},t=i.createContext(s);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);