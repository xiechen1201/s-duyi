const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(res.header())
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('服务器启动成功');
});