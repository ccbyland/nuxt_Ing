const serverAddress = "http://localhost:3003";
export default {
  // loading: { color: "#000", height: '5px' }, //  页面进度条
  loading: "~/components/loading.vue",
  head: {
    title: "nuxt-demo",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1,  maximum-scale=1.0, user-scalable=0",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/css/normailze.css", "~/assets/css/animation.css"],

  /**
   * mode属性:
   * 不写mode属性, 表示前端客户端和前端服务端都生效
   * mode: 'client'   表示是仅在前端客户端生效
   * mode: 'server'   表示是仅在前端服务端生效
   */
  plugins: [
    { src: "~/plugins/axios.js"},// 前后端发起的请求都经过这里
    { src: "~/plugins/lazy-load.js", mode: "client" },
  ],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],

  axios: {
    proxy: true, //使用代理
    baseURL: serverAddress, // 请求url头 - 后端使用
  },

  proxy: {
    "/api": {
      target: serverAddress, // 接口代理地址
    },
  },

  build: {
    loader: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 1024 * 1024,
          name: "img/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  server: {
    port: 5000,
    host: "127.0.0.1",
  },
};
