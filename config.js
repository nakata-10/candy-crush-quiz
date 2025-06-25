// config.js

// すべての設定を window.APP_CONFIG にまとめる
window.APP_CONFIG = {
  // --- LIFF 設定 ---
  LIFF_ID: "2007532568-7jXAGZYO",
  LIFF_URL: "https://liff.line.me/2007532568-7jXAGZYO",

  // --- ゲーム盤面サイズ ---
  ROWS: 8,
  COLS: 8,
  TILE_SIZE: 80,

  // --- キャンディ種類数 & 移動回数制限 ---
  CANDY_TYPES: 5,
  MAX_MOVES: 20,

  // --- フォールバック用カラー ---
  CANDY_COLORS: {
    0: 'red',
    1: 'green',
    2: 'blue',
    3: 'yellow',
    4: 'magenta'
  },

  // --- アセット配置パス ---
  ASSETS_PATH: 'assets',

  // --- Azure Function（ポイント付与）URL ---
  AZURE_FUNCTION_URL: "https://line-func-app.azurewebsites.net/awardPoints",

  // --- クイズ問題リスト ---
  QUIZ_LIST: [
    { question: "クイズ1: この問題の答えは？", answer: "ans" },
    { question: "クイズ2: 次の答えは？",       answer: "ans" },
    { question: "クイズ3: 正しい答えは何？",   answer: "ans" },
    { question: "クイズ4: 答えは何でしょう？", answer: "ans" }
  ]
};
