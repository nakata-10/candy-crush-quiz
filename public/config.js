// config.js

// すべての設定を window.CONFIG オブジェクトにまとめる
window.CONFIG = {
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

  // --- クイズ問題リスト ---
  QUIZ_LIST: [
    { question: "クイズ1: 「ポイ活で〇〇を知ろう」この〇〇に入るのは？", answer: "大津" },
    { question: "クイズ2: 毎日抽選で何人に当たる？",       answer: "10"||"10人" },
    { question: "クイズ3: このキャラクターが頭の上にのせているのは何？",   answer: "葉っぱ"||"葉"||"はっぱ" },
    { question: "クイズ4: 「〇〇〇で大津を知ろう」この〇〇〇に入るのは？", answer: "ポイ活" }
  ]
};
