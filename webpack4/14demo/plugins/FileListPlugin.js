module.exports = class FileListPlugin {

    constructor(filename = 'filelist.txt'){
        this.filename = filename
    }

    apply(compuler) {
        compuler.hooks.emit.tap("FileListPlugin", (compilation) => {
            // console.log(compilation.assets)
            /* 
                返回以下内容：
                main.js: {
                    content: function(){return}
                    size: function(){return}
                }
            */

            // 尝试新增
            /* compilation.assets["123.text"] = {
                source() {
                    return "123";
                },
                size() {
                    return 3;
                }
            };
            console.log(compilation.assets); */

            // 案例
            var fileList = [];

            for (const key in compilation.assets) {
                var content = `【${key}】
              大小：${compilation.assets[key].size() / 1000}KB`;

                fileList.push(content);
            }

            var str = fileList.join("\n");
            compilation.assets[this.filename] = {
                source() {
                    return str;
                },
                size() {
                    return str.length;
                }
            };
        });
    }
};
