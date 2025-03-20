// 引入 Express 模块
const express = require('express');
const app = express();
const port = 3000;

// 设置静态文件夹用于存放 HTML 和其他静态文件
app.use(express.static('public'));

// 设置根路由，返回一个简单的 HTML 页面
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
