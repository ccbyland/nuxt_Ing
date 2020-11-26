在SPA之前的时代，我们传统的Web架构大都是SSR，如：Wordpress（PHP）、JSP技术、JavaWeb等这些程序都是传统典型的SSR架构，即：服务端取出数据和模板组合生成 html输出给前端，前端发生请求时，重新向服务端请求html资源。

#### 1：介绍
- Nuxt.js 是一个基于 Vue.js 的通用应用框架。
-  通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。
- 我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。
- Nuxt.js 预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置。

#### 2：Nuxt.js解决什么问题
- 首屏加速
    > 对比vue和nuxt访问页面返回的dom结构图
- SEO
    > meta

#### 2：优缺点
#### 3：实战
#### 4：核心实现

#### 5：思考
- asyncData
    > a. 该生命周期只限于页面组件调用
    > b. 只有访问首页时才在服务端被执行，非首页在客户端的 created 或 mounted 中执行。
- fetch
    > a. 与 asyncData 同样，它在组件初始化前调用，用于填充 Vuex 状态树
    > b. 不同的是它不会设置组件的数据
- validate
    > a. 验证路由参数合法性，如果校验失败，则自动跳转到错误页面，校验成功才进入路由


- head
    > a.  更新应用的 头部标签(Head) 和 html 属性。
- plugins

#### ====
1：生命周期 - 与vue对比
2：路由  - 无配置路由
    底层使用 history.replaceState API进行无刷新式的跳转

3：中间件 - 登陆验证
4：组件 - 自定义loading
5：css预处理器
6：assets（资源目录）和static（静态文件）
    一个带版本号，一个不带
    static回映射到/下
7：head
    动态meta，设置title，keyword，link，script
====
token的设置与存储
一个应用必不可少的功能就是 token 验证，通常我们在登录后把返回的验证信息存储起来，之后请求带上 token 供后端验证状态。在前后端分离的项目中，一般都会存放到本地存储中。但 Nuxt.js 不同，由于服务端渲染的特点，部分请求在服务端发起，我们无法获取 localStorage 或 sessionStorage。

===
同构渲染
1：beforeCreated和created生命周期其实是同时在服务端和浏览器端执行的，“同构”渲染的来源之一。
===
一次请求过程中nuxt的生命周期顺序
服务端
1.首先执行插件(所有在nuxt.config.js中写入的可以在服务端运行插件，不管是否在当前页面)
2.执行nuxtServerInit
3.执行middleware：
a. middleware会先后执行nuxt.config.js中配置的middleware；
b. layouts中配置的middleware；
c. pages中的middleware。
4.执行validate方法，校验页面参数是否正确
5.执行页面中的asyncData以及fetch方法
6.真正进入vue的生命周期中，按先后顺序,beforecreated,created
浏览器端
7.执行插件(所有在nuxt.config.js中写入可以在浏览器端执行的插件)
8.进入vue的生命周期中，再在浏览器端运行beforecreated和created一遍。

1.plugin和nuxtServerInit仅在首次刷新页面时会执行，后续点击页面内跳转不会再执行plugin和nuxtServerInit中的方法。如果打开新页面会再次触发plugin和nuxtServerInit方法。




1：介绍SSR到CSR再到SSR
2：SSR与SSR的不同
3：Nuxtjs介绍
    生命周期
    。。。
4：Nuxt核心实现
    路由
5：Nuxt实践
6：



===

代理和request