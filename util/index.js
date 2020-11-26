/**
 * 延迟执行
 * @param time
 */
exports.sleep = function(time) {
  return new Promise(resolve => setTimeout(resolve, time));
};
