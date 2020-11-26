/**
 * token校验
 *
 * 强登陆页面未登录自动跳登陆
 * 当前已登录，访问登录页面自动跳首页
 */
export default function({ app, redirect, route }) {
  console.info("【INFO】：checkLogin 执行中...", route.path);
  /**
   * 获取当前用户token
   */
  const token = app.$cookies.get("__token__");
  if (token) {
    const result = checkToken(token);
    // token无效
    if (result.code) {
      redirectLogin(route, redirect, result);
      app.$cookies.remove("__token__");
    } else {
      redirectIndex(route, redirect);
    }
  } else {
    redirectLogin(route, redirect, { code: 100, msg: "token为空" });
  }
}

/**
 * token校验
 * @param {*} token
 */
function checkToken(token) {
  const _arr = token.split("_");
  if (_arr.length == 4 && _arr[1].length == 6 && !isNaN(_arr[1])) {
    let _nowtime = _arr[2];
    if (Date.now() - _nowtime > 1000 * 60 * 60) {
      return { code: 200, msg: "token超时" };
    } else {
      return { code: 0, msg: "token正确" };
    }
  } else {
    return { code: 300, msg: "token格式错误" };
  }
}

/**
 * 重定向到登陆
 * @param {*} redirect
 * @param {*} result
 */
function redirectLogin(route, redirect, result) {
  if (route.path != "/login") {
    redirect("/login");
    console.error(`【ERROR】：${result.msg}`);
  }
}

/**
 * 重定向到首页
 * @param {*} redirect
 */
function redirectIndex(route, redirect) {
  if (route.path == "/login") {
    redirect("/");
  }
}
