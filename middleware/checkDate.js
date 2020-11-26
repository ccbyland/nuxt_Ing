import { sleep } from "../util";

/**
 * 日期校验
 * @param {*} param0 
 */
export default function({ route }) {

  console.info("【INFO】：checkDate 执行中...", route.path);
  return new Promise(async reslove => {
    await sleep(2000);
    reslove();
  });
}
