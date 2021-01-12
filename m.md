#### 1: SSR、SPA、CSR对比
SSR 传统服务器端渲染
服务端取出数据和模板组合生成html输出给前端，前端发生请求时，重新向服务端请求html资源。
    PHP、JSP、JavaWeb => 高耦合

CSR 客户端渲染
渲染过程全部交给浏览器进行处理，服务器不参与任何渲染。页面初始加载的HTML文档中无内容，需要下载执行JS文件，由浏览器动态生成页面，并通过JS进行页面交互事件与状态管理。
    sea.js、require.js

SPA 单页应用（属于客户端渲染）
动态重写当前的页面来与用户交互，不需要重新加载整个页面。做到了前后端分离，后端只负责处理数据提供接口，页面逻辑和页面渲染都交给了前端。
    Vue，React，Angular => 首屏加载慢，不利于SEO

Nuxt.js
不完全相同于服务端渲染，因为它仅只作用于首页，且前后端分离
不完全相同于客户端渲染，因为它有路由的概念，跳转页面无刷新
不完全相同于单页应用，因为它的html包含完整节点信息

#### 2：Nuxt介绍
Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于Vue.js 开发SSR应用的一站式解决方案
通过对客户端/服务端基础架构的抽象组织，主要关注UI层渲染。
Nuxt.js
Vue + Vuex + Vue-router + Vue-ssr
Webpack + Babel

1：生命周期 - 与vue对比
    钩子函数
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
    只有在页面组件中（路由级别组件）可以使用 asyncData 方法
    asyncData 是在组件实例化之前被调用的，所以无法访问 this
    通过 retrun 向组件中添加数据
    ===
    fetch 在所有 vue 组件中都可以使用
    fetch 是在组件实例化之后被调用的，可以访问到 this
    可以非常简单的直接修改本地数据
6.真正进入vue的生命周期中，按先后顺序,beforecreated,created
浏览器端
7.执行插件(所有在nuxt.config.js中写入可以在浏览器端执行的插件)
8.进入vue的生命周期中，再在浏览器端运行beforecreated和created一遍。

1.plugin和nuxtServerInit仅在首次刷新页面时会执行，后续点击页面内跳转不会再执行plugin和nuxtServerInit中的方法。如果打开新页面会再次触发plugin和nuxtServerInit方法。

2：路由  - 无配置路由
    底层使用 history.replaceState API进行无刷新式的跳转
3：中间件 - 登陆，权限验证
4：扩展webpack配置

#### 3：Nuxt实战
    1：首页服务端渲染
        节点齐全、跳转页面客户端渲染、刷新可变为服务端渲染
    2：路由演示 = 跳转无刷新
        路由跳转无刷新、自定义组件在路由钩子函数中的应用
    3：页面与布局的关系
        自动添加头尾文件
    4：url参数校验
        错误自动跳转异常页
#### 5：思考

====

===
同构渲染
1：beforeCreated和created生命周期其实是同时在服务端和浏览器端执行的，“同构”渲染的来源之一。




================

服务端渲染  vue-server-renderer
路由无刷新  history replaceState 降级url hash
中间件     基于路由的钩子函数
