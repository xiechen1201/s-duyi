const fs = require('fs');
const path = require('path');

class File {
    constructor(filename, name, ext, isFile, size, createTime, updateTime) {
        this.filename = filename;
        this.name = name;
        this.ext = ext;
        this.isFile = isFile;
        this.size = size;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    async getContent(isBuffer = false) {
        if (this.isFile) {
            if (isBuffer) {
                return await fs.promises.readFile(this.filename);
            } else {
                return await fs.promises.readFile(this.filename, 'utf-8');
            }
        } else {
            return null;
        }
    }

    async getChild() {
        if (this.isFile) {
            return [];
        } else {
            let children = await fs.promises.readdir(this.filename);
            children = children.map((name) =>
                File.getFile(path.resolve(this.filename, name))
            );
            return Promise.all(children);
        }
    }

    static async getFile(filename) {
        const stat = await fs.promises.stat(filename);
        const name = path.basename(filename);
        const ext = path.extname(filename);
        const isFile = stat.isFile();
        const size = stat.size;
        const createTime = new Date(stat.birthtime);
        const updateTime = new Date(stat.mtime);

        return new File(filename, name, ext, isFile, size, createTime, updateTime);
    }
}

async function test() {
    // const filename = path.resolve(__dirname, './index.js');
    const filename = path.resolve(__dirname, '../');
    const file = await File.getFile(filename);
    const content = await file.getContent();
    const children = await file.getChild();

    console.log(file);
    console.log(content);
    console.log(children);

    fs.writeFileSync(path.resolve(__dirname,'./result.txt'), JSON.stringify(children));
}
test();