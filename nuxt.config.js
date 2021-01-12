import getZipByDist from './webpack/plugins/getZipByDist';
import uploadDist from './webpack/plugins/uploadDist';


const serverAddress = "http://localhost:3003";
export default {
  /**
   * 全局head配置
   */
  head: {
    title: "电商购物平台",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1,  maximum-scale=1.0, user-scalable=0"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /**
   * 全局CSS
   */
  css: ["~/assets/css/normailze.css", "~/assets/css/animation.css"],
  /**
   * 进度条配置
   * { color: "#000", height: '5px' }, 简单线条
   * "~/components/loading.vue", 使用组件
   */
  loading: "~/components/loading.vue",
  /**
   * mode属性:
   * 不写mode属性, 表示前端客户端和前端服务端都生效
   * mode: 'client'   表示是仅在前端客户端生效
   * mode: 'server'   表示是仅在前端服务端生效
   */
  plugins: [
    { src: "~/plugins/axios.js" }, // 前后端发起的请求都经过这里
    { src: "~/plugins/vue-lazyload.js", mode: "client" },
    { src: "~/plugins/vue-directive.js" }
  ],

  components: true,

  buildModules: [],
  router: {
    base: "/m/", // 根路由配置
    extendRoutes(routes, resolve) {
      //自定义路由配置
      routes.push({
        path: "/index",
        component: resolve(__dirname, "pages/index.vue")
      });
    }
  },
  modules: ["@nuxtjs/toast", "@nuxtjs/axios", "cookie-universal-nuxt"],

  toast: {
    position: "top-center",
    duration: 1500
  },
  axios: {
    proxy: true, //使用代理
    baseURL: serverAddress // 请求url头 - 后端使用
  },
  proxy: {
    "/api": {
      target: serverAddress // 接口代理地址
    }
  },

  build: {
    loader: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 1,
          name: "img/[name].[hash].[ext]"
        }
      }
    ],
    plugins: [
      // 静态资源打包成zip
      new getZipByDist(),
      // 上传到静态服务器
      new uploadDist(),
    ]
  },
  server: {
    port: 5002,
    host: "127.0.0.1"
  }
};
