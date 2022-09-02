"use strict";(self.webpackChunkgyublog=self.webpackChunkgyublog||[]).push([[6029],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,k=d["".concat(i,".").concat(f)]||d[f]||c[f]||l;return t?r.createElement(k,p(p({ref:n},m),{},{components:t})):r.createElement(k,p({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={title:"Golang Pointer",slug:"Pointer",tags:["goland","pointer"]},p=void 0,o={permalink:"/blog/blog/Pointer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/pointer.md",source:"@site/blog/pointer.md",title:"Golang Pointer",description:"\u5728\u64cd\u4f5c\u7cfb\u7edf\u91cc\uff0c\u4e00\u4e2a\u5185\u5b58\u5730\u5740\u7528\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u539f\u751f\u5b57\uff08native word\uff09\u5b58\u50a8\uff0c\u4e00\u4e2a\u539f\u751f\u5b57\u572832\u4f4d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u53604\u4e2a\u5b57\u8282\uff0c\u572864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u53608\u4e2a\u5b57\u8282\u3002",date:"2022-09-01T17:09:23.000Z",formattedDate:"September 1, 2022",tags:[{label:"goland",permalink:"/blog/blog/tags/goland"},{label:"pointer",permalink:"/blog/blog/tags/pointer"}],readingTime:5.795,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Golang Pointer",slug:"Pointer",tags:["goland","pointer"]},prevItem:{title:"Golang introduction",permalink:"/blog/blog/goland"},nextItem:{title:"Welcome",permalink:"/blog/blog/welcome"}},i={authorsImageUrls:[]},u=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"\u5173\u4e8e\u5f15\u7528 reference",id:"\u5173\u4e8e\u5f15\u7528-reference",level:3},{value:"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u6307\u9488\u503c",id:"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u6307\u9488\u503c",level:3},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6307\u9488",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6307\u9488",level:3}],m={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u64cd\u4f5c\u7cfb\u7edf\u91cc\uff0c\u4e00\u4e2a\u5185\u5b58\u5730\u5740\u7528\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u539f\u751f\u5b57\uff08native word\uff09\u5b58\u50a8\uff0c\u4e00\u4e2a\u539f\u751f\u5b57\u572832\u4f4d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u53604\u4e2a\u5b57\u8282\uff0c\u572864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u53608\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c32\u4f4d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\u7406\u8bba\u6700\u5927\u652f\u6301\u5185\u5b58\u5bb9\u91cf\u4e3a4GB\uff081GB == 230\u5b57\u8282\uff09\uff0c64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\u7406\u8bba\u6700\u5927\u652f\u6301\u5185\u5b58\u5bb9\u91cf\u4e3a264Byte\uff0c\u537316EB\uff08EB\uff1a\u827e\u5b57\u8282\uff0c1EB == 1024PB, 1PB == 1024TB, 1TB == 1024GB\uff09\u3002"),(0,a.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("p",null,"\u6307\u9488\u662fGo\u4e2d\u7684\u4e00\u79cd\u7c7b\u578b\u5206\u7c7b\uff08kind\uff09\u3002 \u4e00\u4e2a\u6307\u9488\u53ef\u4ee5\u5b58\u50a8\u4e00\u4e2a\u5185\u5b58\u5730\u5740\uff1b"),(0,a.kt)("p",null,"\u5728Go\u4e2d\uff0c\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u540d\u6307\u9488\u7c7b\u578b"),"\u7684\u5b57\u9762\u5f62\u5f0f\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"*T"),"\uff0c\u5176\u4e2dT\u4e3a\u4e00\u4e2a\u4efb\u610f\u7c7b\u578b\u3002\u7c7b\u578bT\u79f0\u4e3a\u6307\u9488\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\u7684\u57fa\u7c7b\u578b\uff08base type\uff09\u3002 \u5982\u679c\u4e00\u4e2a\u6307\u9488\u7c7b\u578b\u7684\u57fa\u7c7b\u578b\u4e3aT\uff0c\u5219\u6211\u4eec\u53ef\u4ee5\u79f0\u6b64\u6307\u9488\u7c7b\u578b\u4e3a\u4e00\u4e2aT\u6307\u9488\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e24\u4e2a\u65e0\u540d\u6307\u9488\u7c7b\u578b\u7684\u57fa\u7c7b\u578b\u4e3a\u540c\u4e00\u7c7b\u578b\uff0c\u5219\u8fd9\u4e24\u4e2a\u65e0\u540d\u6307\u9488\u7c7b\u578b\u4ea6\u4e3a\u540c\u4e00\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"\u5173\u4e8e\u5f15\u7528-reference"},"\u5173\u4e8e\u5f15\u7528 reference"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u6307\u9488\u4e2d\u5b58\u50a8\u7740\u53e6\u5916\u4e00\u4e2a\u503c\u7684\u5730\u5740\uff0c\u5219\u6211\u4eec\u53ef\u4ee5\u8bf4\u6b64\u6307\u9488\u503c\u5f15\u7528\u7740\u53e6\u5916\u4e00\u4e2a\u503c\uff1b\u540c\u65f6\u53e6\u5916\u4e00\u4e2a\u503c\u5f53\u524d\u81f3\u5c11\u6709\u4e00\u4e2a\u5f15\u7528\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5f53\u4e00\u4e2a\u6307\u9488\u5f15\u7528\u7740\u53e6\u5916\u4e00\u4e2a\u503c\uff0c\u6211\u4eec\u4e5f\u5e38\u8bf4\u6b64\u6307\u9488\u6307\u5411\u53e6\u5916\u4e00\u4e2a\u503c"),(0,a.kt)("h3",{id:"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u6307\u9488\u503c"},"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u6307\u9488\u503c"),(0,a.kt)("p",null,"\u6709\u4e24\u4e2a\u529e\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528 new \u6765\u4e3a\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u5f00\u8f9f\u4e00\u5757\u5185\u5b58\u5e76\u5c06\u6b64\u5185\u5b58\u5757\u7684\u5730\u5740\u4f5c\u4e3a\u6b64\u503c\u7684\u5730\u5740\u8fd4\u56de\u3002\u5047\u8bbe T \u662f\u4efb\u4e00\u7c7b\u578b\uff0c\u5219\u51fd\u6570\u8c03\u7528 new(T) \u8fd4\u56de\u4e00\u4e2a\n\u7c7b\u578b\u4e3a *T \u7684\u6307\u9488\u503c\u3002\u5b58\u50a8\u5728\u8fd4\u56de\u6307\u9488\u503c\u6240\u8868\u793a\u7684\u5730\u5740\u5904\u7684\u503c\uff08\u533f\u540d\u53d8\u91cf\uff09\u4e3a T \u7684\u96f6\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u524d\u7f6e\u53bb\u5730\u5740\u64cd\u4f5c\u7b26 & \u6765\u83b7\u53d6\u4e00\u4e2a\u53ef\u5bfb\u5740\u7684\u503c\u7684\u5730\u5740\u3002\u5bf9\u4e8e\u4e00\u4e2a\u7c7b\u578b\u4e3a T \u7684\u53ef\u5bfb\u5740\u7684\u53d8\u91cf t\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 &t \u6765\u53d6\u5f97\u4ed6\u7684\u5730\u5740\uff0c&t \u7684\u7c7b\u578b\u4e3a *T")),(0,a.kt)("p",null,"talk is cheap\uff0cshow you the code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    p0 := new(int)   // p0\u6307\u5411\u4e00\u4e2aint\u7c7b\u578b\u7684\u96f6\u503c\n    fmt.Println(p0)  // \uff08\u6253\u5370\u51fa\u4e00\u4e2a\u5341\u516d\u8fdb\u5236\u5f62\u5f0f\u7684\u5730\u5740\uff09\n    fmt.Println(*p0) // 0\n\n    x := *p0              // x\u662fp0\u6240\u5f15\u7528\u7684\u503c\u7684\u4e00\u4e2a\u590d\u5236\u3002\n    p1, p2 := &x, &x      // p1\u548cp2\u4e2d\u90fd\u5b58\u50a8\u7740x\u7684\u5730\u5740\u3002\n                          // x\u3001*p1\u548c*p2\u8868\u793a\u7740\u540c\u4e00\u4e2aint\u503c\u3002\n    fmt.Println(p1 == p2) // true\n    fmt.Println(p0 == p1) // false\n    p3 := &*p0            // <=> p3 := &(*p0)\n                          // <=> p3 := p0\n                          // p3\u548cp0\u4e2d\u5b58\u50a8\u7684\u5730\u5740\u662f\u4e00\u6837\u7684\u3002\n    fmt.Println(p0 == p3) // true\n    *p0, *p1 = 123, 789\n    fmt.Println(*p2, x, *p3) // 789 789 123\n\n    fmt.Printf("%T, %T \\n", *p0, x) // int, int\n    fmt.Printf("%T, %T \\n", p0, p1) // *int, *int\n}\n')),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6307\u9488"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u6307\u9488"),(0,a.kt)("p",null,"\u6bd4\u5982\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc double(x int) {\n    x += x\n}\n\nfunc main() {\n    var a = 3\n    double(a)\n    fmt.Println(a) // 3\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u672c\u671f\u671b\u4e0a\u4f8b\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u51fd\u6570\u5c06\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u503c\u653e\u5927\u4e3a\u539f\u6765\u7684\u4e24\u500d\uff0c\u4f46\u662f\u4e8b\u5b9e\u8bc1\u660e\u6211\u4eec\u7684\u671f\u671b\u6ca1\u6709\u5f97\u5230\u5b9e\u73b0\u3002 \u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u5728Go\u4e2d\uff0c\u6240\u6709\u7684\u8d4b\u503c\uff08\u5305\u62ec\u51fd\u6570\u8c03\u7528\u4f20\u53c2\uff09\u8fc7\u7a0b\u90fd\u662f\u4e00\u4e2a\u503c\u590d\u5236\u8fc7\u7a0b\u3002 \u6240\u4ee5\u5728\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u51fd\u6570\u4f53\u5185\u4fee\u6539\u7684\u662f\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u4e00\u4e2a\u526f\u672c\uff0c\u800c\u6ca1\u6709\u4fee\u6539\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u672c\u8eab\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u51fd\u6570\u8fd4\u56de\u8f93\u5165\u53c2\u6570\u7684\u4e24\u500d\u6570\uff0c\u4f46\u662f\u6b64\u65b9\u6cd5\u5e76\u975e\u9002\u7528\u4e8e\u6240\u6709\u573a\u5408\u3002 \u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u901a\u8fc7\u5c06\u8f93\u5165\u53c2\u6570\u7684\u7c7b\u578b\u6539\u4e3a\u4e00\u4e2a\u6307\u9488\u7c7b\u578b\u6765\u8fbe\u5230\u540c\u6837\u7684\u76ee\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc double(x *int) {\n    *x += *x\n    x = nil // \u6b64\u884c\u4ec5\u4e3a\u8bb2\u89e3\u76ee\u7684\n}\n\nfunc main() {\n    var a = 3\n    double(&a)\n    fmt.Println(a) // 6\n    p := &a\n    double(p)\n    fmt.Println(a, p == nil) // 12 false\n}\n')),(0,a.kt)("p",null,"\u4ece\u4e0a\u4f8b\u53ef\u4ee5\u770b\u51fa\uff0c\u901a\u8fc7\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u51fd\u6570\u7684\u8f93\u5165\u53c2\u6570\u7684\u7c7b\u578b\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"*int"),"\uff0c\u4f20\u5165\u7684\u5b9e\u53c2",(0,a.kt)("inlineCode",{parentName:"p"},"&a"),"\u548c\u5b83\u5728\u6b64\u51fd\u6570\u4f53\u5185\u7684\u4e00\u4e2a\u526f\u672c",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u90fd\u5f15\u7528\u7740\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u3002 \u6240\u4ee5\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"*x"),"\u7684\u4fee\u6539\u7b49\u4ef7\u4e8e\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"*p"),"\uff08\u4e5f\u5c31\u662f\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\uff09\u7684\u4fee\u6539\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u65b0\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u51fd\u6570\u5185\u7684\u64cd\u4f5c\u53ef\u4ee5\u53cd\u6620\u5230\u6b64\u51fd\u6570\u5916\u4e86\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u5728\u6b64\u51fd\u6570\u4f53\u5185\u5bf9\u4f20\u5165\u7684\u6307\u9488\u5b9e\u53c2\u7684\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"x = nil"),"\u4f9d\u65e7\u4e0d\u80fd\u53cd\u6620\u5230\u51fd\u6570\u5916\uff0c\u56e0\u4e3a\u6b64\u4fee\u6539\u53d1\u751f\u5728\u6b64",(0,a.kt)("strong",{parentName:"p"},"\u6307\u9488\u7684\u4e00\u4e2a\u526f\u672c"),"\u4e0a\u3002 \u6240\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u51fd\u6570\u8c03\u7528\u4e4b\u540e\uff0c\u5c40\u90e8\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"p"),"\u7684\u503c\u5e76\u6ca1\u6709\u88ab\u4fee\u6539\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002"),(0,a.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u6307\u9488\u63d0\u4f9b\u4e86\u4e00\u79cd\u95f4\u63a5\u7684\u9014\u5f84\u6765\u8bbf\u95ee\u548c\u4fee\u6539\u4e00\u4e9b\u503c\u3002 \u867d\u7136\u5f88\u591a\u8bed\u8a00\u4e2d\u6ca1\u6709\u6307\u9488\u8fd9\u4e2a\u6982\u5ff5\uff0c\u4f46\u662f\u6307\u9488\u88ab\u9690\u85cf\u5176\u5b83\u6982\u5ff5\u4e4b\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gfw.go101.org/article/pointer.html"},"\u5b66\u4e60\u94fe\u63a5")))}c.isMDXComponent=!0}}]);