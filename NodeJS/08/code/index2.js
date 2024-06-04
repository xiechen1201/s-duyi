/**
 * @description 案例对比
 */

const fs = require('fs');
const path = require('path');

// method1()
async function method1() {
    const form = path.resolve(__dirname, './03.txt');
    const to = path.resolve(__dirname, './04.txt');

    console.time("方式一")

    const conent = await fs.promises.readFile(form, 'utf-8');
    await fs.promises.writeFile(to, conent, 'utf-8');

    console.log('copy success');
    console.timeEnd("方式一")
}

// method2()
async function method2() {
    const form = path.resolve(__dirname, './03.txt');
    const to = path.resolve(__dirname, './04.txt');

    console.time("方式二")

    const rs = fs.createReadStream(form);
    const ws = fs.createWriteStream(to);

    // 读取数据
    rs.on('data', chunk=>{
        const flag = ws.write(chunk);
        // 如果写入速度跟不上，会产生背压
        if( !flag ){
            // 暂停读取
            rs.pause();
        }
    })

    // 排空
    ws.on('drain', ()=>{
        rs.resume();
    })

    rs.on('close', ()=>{
        ws.end();
        console.log('copy success');
        console.timeEnd("方式二")
    })
}

// 更加简单的方式
method3()
async function method3() {
    const form = path.resolve(__dirname, './03.txt');
    const to = path.resolve(__dirname, './04.txt');

    console.time("方式三")

    const rs = fs.createReadStream(form);
    const ws = fs.createWriteStream(to);

    // 使用管道的方式进行连接
    rs.pipe(ws);

    rs.on('close', ()=>{
        ws.end();
        console.log('copy success');
        console.timeEnd("方式三")
    })
}