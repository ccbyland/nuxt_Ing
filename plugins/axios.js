export default function({ $axios, redirect }) {
  // 基本配置
  $axios.defaults.timeout = 100000;
  $axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  // 请求回调
  $axios.onRequest(config => {});

  // 返回回调
  $axios.onResponse(res => {
    if (res && res.status == 200) {
      return res.data;
    }
    redirect("/error");
  });

  // 错误回调
  $axios.onError(e => {
    const response = e.response || {};
  });
}
