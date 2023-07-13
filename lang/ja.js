(function () {
    var messages = {
        "message.accessibility.blankLine": "空白行",
        "message.accessibility.deselected": "選択解除されました",
        "message.accessibility.object": "オブジェクト",
        "message.accessibility.selected": "選択された",
        "message.accessibility.selectedAll": "全部選択された",
        "message.accessibility.selectedAreaDeleted": "選択範囲が削除されました",
        "message.accessibility.space": "スペース",
        "message.alert.alreadyRegisteredName": "すでに登録された名前です。",
        "message.alert.beforeExpiredLicense": "SynapEditorライセンスは ${} 日後に期限切れになります。 新しいライセンスキーを取得してください。",
        "message.alert.cannotInsertFileInTheArea": "エリアにファイルを挿入できません。",
        "message.alert.cannotUseImport": "インポート機能を使用することができません。",
        "message.alert.duplicatedId": "重複したID。",
        "message.alert.enterUrl": "URLを入力してください。",
        "message.alert.failedAutoSave": "自動保存に失敗しました。",
        "message.alert.failedEditorInitialize": "editorIdに対応するエレメントが見つかりません。",
        "message.alert.failedOpenDocument": "ドキュメントを開くことに失敗しました。",
        "message.alert.failedOpenLayout": "レイアウトを開くことに失敗しました。",
        "message.alert.failedOpenTemplate": "テンプレートを開くことに失敗しました。",
        "message.alert.failedUploadPartial": "サポートされていない形式のファイルや容量を超過したファイルは、挿入されません。",
        "message.alert.fileSizeExceeded": "ファイルサイズが大きすぎます。",
        "message.alert.hasHiddenCells": "選択した領域に非表示のセルがあります。",
        "message.alert.incorrectUsage": "誤った使用法。",
        "message.alert.insertFile": "FILEを挿入してください。",
        "message.alert.invalidLicense": "無効なライセンスです。",
        "message.alert.invalidSourceCode": "無効なソースコードです。",
        "message.alert.nestedForm": "Form をネストすることはできません。",
        "message.alert.noContents": "選択範囲内の文書の内容が欠落しています",
        "message.alert.notFoundConfig": "config情報が見つかりませんでした。",
        "message.alert.notFoundLicense": "license情報が見つかりませんでした。",
        "message.alert.notSelectedImportArea": "エリアが選択されていません。",
        "message.alert.notSupportedFile": "サポートされていないファイルです。",
        "message.alert.nothingToDelete": "削除する内容がありません。",
        "message.alert.nothingToRecover": "復旧する内容がありません。",
        "message.alert.pasting": "貼り付け...",
        "message.alert.rendering": "Rendering...",
        "message.alert.replaceAll": "合計#{totals}件修正されました。",
        "message.alert.testLicense": "これはテストライセンスです。",
        "message.alert.unableUploadFile": "ファイルをアップロードすることができません。",
        "message.alert.uploadingDocument": "ドキュメントのアップロード...",
        "message.alert.uploadingFile": "ファイルをアップロードしています...",
        "message.alert.xfdCol": "文書の行または列が最大値（1048576, XFD）まで拡張されています。 <br> シームレスな編集のために領域の終わりを＃{endCell}で指定します。 <br> 必要に応じて領域をリセットしてください。",
        "message.confirm.append": "追加",
        "message.confirm.chooseImportMethod": "インポート方法を選択してください。",
        "message.confirm.delete": "削除しますか？",
        "message.confirm.notifyCellCountLimit1": "セルが多すぎるため、編集がスムーズにならない場合があります。 文書を開きますか？",
        "message.confirm.notifyCellCountLimit2": "セルが多すぎるため、ブラウザが停止することがあります。 文書を開きますか？",
        "message.confirm.openDocument": "文書を開きますか？",
        "message.confirm.overwrite": "上書き",
        "message.error.cellEndValueError": "開始値は終了値より大きくすることはできません。",
        "message.error.cellValueError": "型が無効です。",
        "message.error.editInException": "エラーが発生しました。",
        "message.label.DivProperties": "レイヤープロパティ",
        "message.label.ImageProperties": "画像プロパティ",
        "message.label.VideoProperties": "動画プロパティ",
        "message.label.about": "シナプエディタについて",
        "message.label.absolutePositionDiv": "レイヤーで描く",
        "message.label.align": "整列",
        "message.label.alt": "代替テキスト",
        "message.label.auto": "Auto",
        "message.label.autoSelect": "自動選択",
        "message.label.availableFileFormats": "使用可能なフォーマット",
        "message.label.background": "背景",
        "message.label.backgroundColor": "背景色",
        "message.label.blackCircle": "黒丸",
        "message.label.blackDiamond": "黒菱形",
        "message.label.blackSquare": "黒四角",
        "message.label.block": "ブロック",
        "message.label.blockDiv": "レイヤー",
        "message.label.bold": "太字",
        "message.label.bookmark": "しおり",
        "message.label.borderColor": "罫線の色",
        "message.label.borderStyle": "罫線の種類",
        "message.label.borderWidth": "罫線の幅",
        "message.label.bottom": "下",
        "message.label.bottomAlign": "下寄せ",
        "message.label.bringForward": "前面へ移動",
        "message.label.bringToFront": "最前面へ移動",
        "message.label.bulletedList": "箇条書き",
        "message.label.caption": "キャプション",
        "message.label.cellProperties": "セルのプロパティ",
        "message.label.cellSize": "セルのサイズ",
        "message.label.cellSizeEqual": "セルのサイズを揃える",
        "message.label.centerAlign": "中央寄せ",
        "message.label.clearArea": "エリアをクリア",
        "message.label.clearAreaAll": "全領域をクリア",
        "message.label.columnWidthEqual": "列の幅を揃える",
        "message.label.contain": "Contain",
        "message.label.containAndCover": "Contain、Cover",
        "message.label.contentsProperties": "コンテンツ領域のプロパティ",
        "message.label.conversion": "変換",
        "message.label.copy": "コピーする",
        "message.label.copyRunStyle": "書式コピー",
        "message.label.cover": "Cover",
        "message.label.coverAndContain": "Cover、Contain",
        "message.label.custom": "カスタム",
        "message.label.customParagraphStyle": "ユーザー定義の段落書式",
        "message.label.customRunStyle": "ユーザ定義のフォント書式",
        "message.label.cut": "切り取り",
        "message.label.dashedBorder": "破線",
        "message.label.decreaseIndent": "インデントを減らす",
        "message.label.defaultKey": "デフォルトキー",
        "message.label.deleteCol": "列削除",
        "message.label.deleteDiv": "レイヤー削除",
        "message.label.deleteImage": "画像削除",
        "message.label.deleteRow": "行削除",
        "message.label.deleteShape": "Delete Shape",
        "message.label.deleteTable": "表削除",
        "message.label.deleteVideo": "動画削除",
        "message.label.desktop": "デスクトップ",
        "message.label.dottedBorder": "点線",
        "message.label.doubleBorder": "二重実線",
        "message.label.file": "ファイル",
        "message.label.findReplace": "検索と置換",
        "message.label.fitWidth": "幅揃え",
        "message.label.fixed": "固定",
        "message.label.fontBackgroundColor": "文字の背景色",
        "message.label.fontColor": "文字の色",
        "message.label.fontFamily": "フォント",
        "message.label.fontSize": "サイズ",
        "message.label.fullScreen": "フルスクリーン",
        "message.label.growFont": "サイズの拡大",
        "message.label.guide": "編集ガイドの表示/非表示",
        "message.label.heading": "見出し",
        "message.label.heading1": "見出し1",
        "message.label.heading2": "見出し2",
        "message.label.heading3": "見出し3",
        "message.label.heading4": "見出し4",
        "message.label.heading5": "見出し5",
        "message.label.heading6": "見出し6",
        "message.label.help": "ヘルプ",
        "message.label.hide": "隠す",
        "message.label.horizontalLine": "水平線",
        "message.label.image": "画像",
        "message.label.inTableCell": "セル内に入れる",
        "message.label.increaseIndent": "インデントを増やす",
        "message.label.increaseQuote": "サイズ",
        "message.label.inlineBlock": "インラインブロック",
        "message.label.inlineTable": "インラインテーブル",
        "message.label.insertCol": "列の追加",
        "message.label.insertFormula": "数式を挿入",
        "message.label.insertRow": "行の追加",
        "message.label.italic": "斜体",
        "message.label.justifyAlign": "両端揃え",
        "message.label.layout": "レイアウト",
        "message.label.left": "左",
        "message.label.leftAlign": "左揃え",
        "message.label.lineSpacing": "行間隔",
        "message.label.link": "リンク",
        "message.label.loadAutoSaveDoc": "自動保存文書のロード",
        "message.label.lockRatio": "比率を保持",
        "message.label.lowerCase": "小文字に変換",
        "message.label.maximumFileSize": "最大サイズ",
        "message.label.mergeCell": "セル結合",
        "message.label.middle": "中間",
        "message.label.middleAlign": "中央寄せ",
        "message.label.mobile": "モバイル",
        "message.label.more": "もっと見る",
        "message.label.multilevelList": "マルチレベルリスト",
        "message.label.new": "新しいドキュメント",
        "message.label.noBorder": "線なし",
        "message.label.noRepeat": "繰り返しなし",
        "message.label.none": "なし",
        "message.label.normal": "デフォルト",
        "message.label.numberFormat": "数値フォーマット",
        "message.label.numberFormatAccounting": "¥(1,234.12) (経理)",
        "message.label.numberFormatCurrency": "¥1,234.12 (通貨)",
        "message.label.numberFormatDate": "2019-04-22 (日付)",
        "message.label.numberFormatNumber1": "1,234 (数)",
        "message.label.numberFormatNumber2": "1,234.12 (数)",
        "message.label.numberFormatPercent1": "12% (パーセント)",
        "message.label.numberFormatPercent2": "12.34% (パーセント)",
        "message.label.numberFormatScientific": "123E+03 (科学的な)",
        "message.label.numberFormatText": "1234 (テキストで表示)",
        "message.label.numberFormatTime": "11:10:10 PM (時間)",
        "message.label.numberedList": "段落番号",
        "message.label.objAlign": "配置",
        "message.label.objAlignBottom": "下寄せ",
        "message.label.objAlignCenter": "中寄せ",
        "message.label.objAlignLeft": "左寄せ",
        "message.label.objAlignMiddle": "中央寄せ",
        "message.label.objAlignNone": "なし",
        "message.label.objAlignRight": "右寄せ",
        "message.label.objAlignTop": "上寄せ",
        "message.label.objFloatLeft": "左フロート",
        "message.label.objFloatRight": "右フロート",
        "message.label.open": "開く",
        "message.label.openLink": "リンクを開く",
        "message.label.originSize": "元のサイズ",
        "message.label.overwrite": "上書き",
        "message.label.overwriteContents": "内容のみ上書き",
        "message.label.pageBreak": "改ページ",
        "message.label.paragraph": "段落",
        "message.label.paragraphProperties": "段落のプロパティ",
        "message.label.paste": "貼り付け",
        "message.label.pasteAsHtml": "HTMLとして貼り付ける",
        "message.label.pasteAsImage": "画像として貼り付ける",
        "message.label.pasteRunStyle": "書式貼り付け",
        "message.label.preview": "プレビュー",
        "message.label.print": "印刷",
        "message.label.quickInsert": "クイックインサート",
        "message.label.quote": "引用",
        "message.label.redo": "再実行",
        "message.label.removeRunStyle": "書式クリア",
        "message.label.removeStyle": "完全書式を消去",
        "message.label.removeStyleBackgroundColor": "全体の背景色を消去",
        "message.label.removeStyleColor": "フルレタリングクリア",
        "message.label.removeStyleMargin": "フルマージンをクリア",
        "message.label.repeat": "繰り返し",
        "message.label.repeatX": "横繰り返し",
        "message.label.repeatY": "縦繰り返し",
        "message.label.responsive": "反応型",
        "message.label.right": "右",
        "message.label.rightAlign": "右寄せ",
        "message.label.rotateLeft": "左回転",
        "message.label.rotateRight": "右回転",
        "message.label.round": "繰り返し-増やす",
        "message.label.rowHeightEqual": "行の高さを揃える",
        "message.label.ruler": "ルーラー",
        "message.label.scroll": "スクロール",
        "message.label.selectAll": "Select All",
        "message.label.selectAllBorder": "すべての罫線",
        "message.label.selectBorder": "罫線",
        "message.label.selectBottomBorder": "下罫線",
        "message.label.selectInnerBorder": "内罫線",
        "message.label.selectInnerHorizontalBorder": "内側横罫線",
        "message.label.selectInnerVerticalBorder": "内側縦罫線",
        "message.label.selectLeftBorder": "左罫線",
        "message.label.selectNone": "選択なし",
        "message.label.selectOuterBorder": "外罫線",
        "message.label.selectRightBorder": "右罫線",
        "message.label.selectTopBorder": "上罫線",
        "message.label.selectionMode": "選択モード",
        "message.label.sendBackward": "背面へ移動",
        "message.label.sendToBack": "最背面へ移動",
        "message.label.set": "設定",
        "message.label.setHorizontal": "横設定",
        "message.label.setStartNumber": "開始番号指定",
        "message.label.setVertical": "縦設定",
        "message.label.shortcut": "ショートカット",
        "message.label.shrinkFont": "サイズの縮小",
        "message.label.solidBorder": "実線",
        "message.label.sourceCode": "ソース表示",
        "message.label.space": "繰り返し-スペース",
        "message.label.splitCell": "セル分割",
        "message.label.strike": "取り消し線",
        "message.label.subscript": "下付き",
        "message.label.superscript": "上付き",
        "message.label.table": "表",
        "message.label.tableProperties": "表のプロパティ",
        "message.label.tablet": "タブレット",
        "message.label.targetBlank": "新しいウィンドウ (_blank)",
        "message.label.targetParent": "親ウィンドウ (_parent)",
        "message.label.targetSelf": "同じウィンドウ (_self)",
        "message.label.targetTop": "最上位ウィンドウ (_top)",
        "message.label.template": "テンプレート",
        "message.label.titleCase": "各単語の最初の文字を大文字に変換",
        "message.label.toggleCase": "大文字と小文字の切り替え",
        "message.label.top": "上",
        "message.label.topAlign": "上寄せ",
        "message.label.underline": "下線",
        "message.label.undo": "元に戻す",
        "message.label.unlink": "リンク解除",
        "message.label.unset": "解除",
        "message.label.upperCase": "大文字に変換",
        "message.label.verticalAlign": "縦並び",
        "message.label.video": "動画",
        "message.label.whiteCircle": "白丸",
        "message.menu.align": "整列",
        "message.menu.cell": "セル",
        "message.menu.column": "列",
        "message.menu.conversion": "変換",
        "message.menu.edit": "編集",
        "message.menu.file": "ファイル",
        "message.menu.format": "書式",
        "message.menu.help": "ヘルプ",
        "message.menu.insert": "挿入",
        "message.menu.list": "文頭",
        "message.menu.numberFormat": "数値フォーマット",
        "message.menu.paragraph": "段落",
        "message.menu.row": "行",
        "message.menu.table": "表",
        "message.menu.tools": "ツール",
        "message.menu.view": "表示",
        "message.placeholder.formula": "ex) SUM(A1:B2) + C3",
        "message.shortcut.copy": "コピー",
        "message.shortcut.cut": "切り取り",
        "message.shortcut.deleteLeft": "削除 (左)",
        "message.shortcut.deleteLeftLine": "ライン削除",
        "message.shortcut.deleteLeftWord": "単語削除 (左)",
        "message.shortcut.deleteRight": "削除 (右)",
        "message.shortcut.deleteRightWord": "単語削除 (右)",
        "message.shortcut.findAndReplace": "検索と置換",
        "message.shortcut.link": "リンク挿入 (修正)",
        "message.shortcut.open": "開く",
        "message.shortcut.openLink": "リンクを開く",
        "message.shortcut.pageBreak": "改ページ",
        "message.shortcut.paste": "貼り付け",
        "message.shortcut.print": "印刷",
        "message.shortcut.redo": "再実行",
        "message.shortcut.undo": "元に戻す",
        "message.template.Hyperlink": "ハイパーリンク",
        "message.template.about": "情報",
        "message.template.alert": "通知",
        "message.template.align": "整列",
        "message.template.allTemplate": "すべてのテンプレート",
        "message.template.alt": "代替テキスト",
        "message.template.arrangement": "配置",
        "message.template.autoSaveDocument": "自動保存文書",
        "message.template.background": "背景",
        "message.template.backgroundColor": "背景色",
        "message.template.bookmark": "しおり",
        "message.template.borderAndBackground": "罫線と背景",
        "message.template.borderColor": "境界線の色",
        "message.template.borderStyle": "罫線の種類",
        "message.template.borderWidth": "罫線の幅",
        "message.template.bottom": "下",
        "message.template.bottomMargin": "下マージン",
        "message.template.cancel": "キャンセル",
        "message.template.caption": "キャプション",
        "message.template.caseSensitivity": "大文字小文字の区別",
        "message.template.category": "カテゴリー",
        "message.template.cellProperties": "セルのプロパティ",
        "message.template.characterSpacing": "文字間隔",
        "message.template.class": "Class",
        "message.template.close": "閉じる",
        "message.template.colorPicker": "カラーピッカー",
        "message.template.company": "会社名",
        "message.template.confirm": "確認",
        "message.template.contentsProperties": "コンテンツ領域のプロパティ",
        "message.template.copyright": "Copyright ⓒ Synapsoft Corp. All rights reserved.",
        "message.template.delete": "削除",
        "message.template.description": "説明",
        "message.template.display": "Display",
        "message.template.divMinHeight": "コンテンツの高さ適用",
        "message.template.divProperties": "レイヤープロパティ",
        "message.template.element": "要素",
        "message.template.endCell": "最後のセル",
        "message.template.etc": "その他",
        "message.template.fileUpload": "ファイルのアップロード",
        "message.template.find": "検索",
        "message.template.findAndReplace": "検索と置換",
        "message.template.findContent": "検索内容",
        "message.template.findOption": "検索オプション",
        "message.template.height": "高さ",
        "message.template.hexColor": "HEX Color",
        "message.template.horizontalAlign": "横並び",
        "message.template.horizontalPosition": "水平位置",
        "message.template.id": "ID",
        "message.template.ignore": "無視",
        "message.template.imageProperties": "画像プロパティ",
        "message.template.imageUpload": "画像アップロード",
        "message.template.indentation": "インデント",
        "message.template.insert": "挿入",
        "message.template.insertAll": "すべて挿入",
        "message.template.insertionMethod": "挿入方式",
        "message.template.layout": "レイアウト",
        "message.template.left": "左",
        "message.template.leftMargin": "左マージン",
        "message.template.license": "ライセンス",
        "message.template.likeLetter": "Like Letter",
        "message.template.linkDescription": "リンク説明",
        "message.template.margin": "マージン",
        "message.template.maxHeight": "最大高さ",
        "message.template.maxWidth": "最大幅",
        "message.template.middle": "中間",
        "message.template.minHeight": "最小高さ",
        "message.template.minWidth": "最小幅",
        "message.template.modify": "修正",
        "message.template.more": "もっと見る",
        "message.template.next": "次",
        "message.template.noLineBreak": "改行禁止",
        "message.template.none": "なし",
        "message.template.notSupportedObject": "サポートしていないオブジェクトです。",
        "message.template.numberOfColumns": "列の数",
        "message.template.numberOfRows": "行の数",
        "message.template.ok": "確認",
        "message.template.open": "開く",
        "message.template.otherColor": "他の色",
        "message.template.overflow": "Overflow",
        "message.template.padding": "パディング",
        "message.template.paragraphProperties": "段落プロパティ",
        "message.template.paste": "貼り付け",
        "message.template.pasteMessage": "ブラウザのセキュリティ設定により、クリップボードのデータに直接アクセスすることができません。このウィンドウで再度貼り付けてください。",
        "message.template.prev": "前",
        "message.template.preview": "プレビュー",
        "message.template.recentColor": "最近使用した色",
        "message.template.reference": "参考",
        "message.template.releaseDate": "更新日",
        "message.template.removeBackground": "背景削除",
        "message.template.repeat": "繰り返し",
        "message.template.replace": "置換",
        "message.template.replaceAll": "すべて置換",
        "message.template.replaceContent": "置換後",
        "message.template.responsiveView": "反応型表示",
        "message.template.restore": "復元",
        "message.template.right": "右",
        "message.template.rightMargin": "右マージン",
        "message.template.select": "選択する",
        "message.template.selectImportArea": "インポートエリアを選択",
        "message.template.setScope": "Scope設定",
        "message.template.setStartNumber": "開始番号指定",
        "message.template.sheetName": "シート名",
        "message.template.shortcut": "ショートカット",
        "message.template.size": "サイズ",
        "message.template.sourceCode": "ソースコード",
        "message.template.splitCell": "セル分割",
        "message.template.startCell": "開始セル",
        "message.template.startNumber": "開始番号",
        "message.template.style": "スタイル",
        "message.template.table": "表",
        "message.template.tableLayout": "表のレイアウト",
        "message.template.tableProperties": "表のプロパティ",
        "message.template.tableTitle": "表のタイトル",
        "message.template.targetFrame": "ターゲットフレーム",
        "message.template.template": "テンプレート",
        "message.template.text": "テキスト",
        "message.template.title": "タイトル",
        "message.template.titleCell": "タイトルセル",
        "message.template.titleExpose": "タイトル表示",
        "message.template.top": "上",
        "message.template.topMargin": "上マージン",
        "message.template.transparency": "透明性",
        "message.template.unit": "単位",
        "message.template.url": "URL",
        "message.template.version": "バージョン",
        "message.template.verticalAlign": "縦並び",
        "message.template.verticalPosition": "垂直位置",
        "message.template.videoProperties": "動画プロパティ",
        "message.template.videoUpload": "動画アップロード",
        "message.template.width": "幅",
        "message.template.word": "ここをクリックするか、ファイルをドラッグ＆ドロップしてください。",
        "message.template.wordSpacing": "単語間隔"
    };

    (window.SE_LOCALE_MESSAGES = window.SE_LOCALE_MESSAGES || {})['ja'] = messages;
})();