const loaderUtils = require("loader-utils");

// 图片转换为 base64
function getBase64(buffer) {
    return "data:image/jpeg;base64," + buffer.toString("base64");
}

// 获取图片路径
function getFilepath(buffer, name) {
    let filename = loaderUtils.interpolateName(this, name, { content: buffer });
    this.emitFile(filename, buffer);
    return filename;
}

function loader(source) {
    let { limit = 1000, filename = "[contenthash:5]" } =
        loaderUtils.getOptions(this);
    let content;

    if (source.bytenLength >= limit) {
        content = getFilepath.call(this, source, name);
    } else {
        content = getBase64(source);
    }

    return `module.exports=\`${content}\``;
}

// 加上 rrawow 的时候，webpack 会把原始的资源传递过来
// source 就是一个 Buffer
loader.raw = true;

module.exports = loader;
