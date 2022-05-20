import clipboardy from 'clipboardy'
import sendkeysJS from 'sendkeys-js'

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
  },
  // @マウスとキーボード操作
  'キー送信': { // @Sのキーを送信 // @きーそうしん
    type: 'func',
    josi: [['を', 'の']],
    pure: true,
    fn: function (s) {
      sendkeysJS.sendKeys(s)
    },
    return_none: true
  },
  '窓アクティブ': { // @Sの窓をアクティブにする // @まどあくてぃぶ
    type: 'func',
    josi: [['を', 'の']],
    pure: true,
    fn: function (s) {
      sendkeysJS.activate(s)
    },
    return_none: true
  }
}
