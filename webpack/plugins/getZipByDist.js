const path = require("path");
const jszip = require("jszip");
const fs = require("fs");
const zip = new jszip();

/**
 * afterPlugins	启动一次新的编译	compiler	同步
 * compile	创建compilation对象之前	compilationParams	同步
 * compilation	compilation对象创建完成	compilation	同步
 * emit	资源生成完成，输出之前	compilation	异步
 * afterEmit	资源输出到目录完成	compilation	异步
 * done	完成编译	stats	同步
 */
class getZipByDist {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap("getZipByDist", () => {
      readDir(zip, path.resolve(__dirname, "../../.nuxt"));
      zip
        .generateAsync({
          type: "nodebuffer", //nodejs用
          compression: "DEFLATE", //压缩算法
          compressionOptions: {
            //压缩级别
            level: 9
          }
        })
        .then(function(content) {
          fs.writeFileSync("./nuxt.zip", content, "utf-8");
        });
    });
  }
}

function readDir(obj, nowPath) {
  let files = fs.readdirSync(nowPath);
  files.forEach(function(fileName) {
    let fillPath = nowPath + "/" + fileName;
    let file = fs.statSync(fillPath);
    if (file.isDirectory()) {
      let dirlist = zip.folder(fileName);
      readDir(dirlist, fillPath);
    } else {
      obj.file(fileName, fs.readFileSync(fillPath));
    }
  });
}

module.exports = getZipByDist;
