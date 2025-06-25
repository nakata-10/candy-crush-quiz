// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// public フォルダを静的ホスティング
app.use(express.static(path.join(__dirname, 'public')));

// ルートアクセスで index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// その他のルートはすべて static 配下を参照させるので、特にハンドラ不要

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
