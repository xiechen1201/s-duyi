const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs/promises');

async function getState(filename) {
    try {
        return await fs.stat(filename);
    } catch (error) {
        return null;
    }
}

async function handler(req, res) {
    const info = await getFileInfo(req.url);
    if (info) {
        res.write(info);
        res.end();
    } else {
        res.statusCode = 404;
        res.write('<h1>Not Fount</h1>');
        res.end();
    }
}

// 获取要处理的文件信息
async function getFileInfo(url) {
    const urlObj = URL.parse(url);
    let filename;
    filename = path.resolve(__dirname, './static', urlObj.pathname.substring(1));
    let state = await getState(filename);

    // 文件不存在或者是一个目录
    if (!state) {
        // 文件不存在
        return null;
    } else if (state.isDirectory()) {
        // 文件是一个目录
        filename = path.resolve(
            __dirname,
            './static',
            urlObj.pathname.substring(1),
            'index.html'
        );
        state = getState(filename);

        if (!state) {
            // 目录下没有 index.html
            return null;
        } else {
            // 找到 index.html
            return await fs.readFile(filename);
        }
    } else {
        // 找到文件
        return await fs.readFile(filename);
    }
}

const server = http.createServer(handler);
server.listen(3000);
server.on('listening', () => {
    console.log('server is running at http://localhost:3000');
});
