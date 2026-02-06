const express = require('express');
const app = express();
const users = []; // 简单内存数组保存注册用户（PoC 用）

app.use(express.json());
app.use(express.static('../frontend'));

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.json({ message: "请输入用户名与密码" });

  users.push({ username, password });
  res.json({ message: "注册成功！" });
});

app.listen(3000, () => console.log("Server running on port 3000"));