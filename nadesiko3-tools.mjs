import clipboardy from 'clipboardy'

export default {
  // @クリップボード操作
  'クリップボード取得': { // @クリップボードを取得する // @くりっぷぼーどしゅとく
    type: 'func',
    josi: [],
    pure: true,
    fn: function () {
      return clipboardy.readSync()
    },
    return_none: false
  },
  'クリップボード設定': { // @クリップボードを取得する // @くりっぷぼーどしゅとく
    type: 'func',
    josi: [['を', 'の']],
    pure: true,
    fn: function (v) {
      clipboardy.writeSync(v)
    },
    return_none: true
  }
}
