/**
 * afterPlugins	启动一次新的编译	compiler	同步
 * compile	创建compilation对象之前	compilationParams	同步
 * compilation	compilation对象创建完成	compilation	同步
 * emit	资源生成完成，输出之前	compilation	异步
 * afterEmit	资源输出到目录完成	compilation	异步
 * done	完成编译	stats	同步
 */
class uploadDist {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("uploadDist", () => {
      console.error('uploadDist done...');
    });
  }
}

module.exports = uploadDist;
