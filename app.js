const days = [
  {
    key: "0813",
    date: "8/13",
    weekday: "四",
    title: "抵達岡山",
    theme: "抵達、飯店、永旺採買",
    pass: "未啟用",
    passCovered: false,
    summary: "15:05 抵達岡山機場，搭機場巴士到岡山站西口。入住後逛永旺夢樂城、吃明神丸，再到 Yours 補齊旅行用品。",
    schedule: [
      ["11:30-15:05", "飛往岡山桃太郎機場"],
      ["15:05", "抵達岡山桃太郎機場"],
      ["15:55 / 16:55", "岡山機場巴士：現場購票 ¥1,000，車程約 30 分", { mode: "機場巴士", from: "岡山桃太郎機場", to: "岡山站西口", note: "抵達大廳依現場班次搭乘" }],
      ["16:25 / 17:25", "入住岡山站前大和 Roynet 飯店", { mode: "步行", from: "岡山站西口", to: "ダイワロイネットホテル岡山駅前", note: "先放行李再出門", travelMode: "walking" }],
      ["17:30", "岡山站觀光案內所：看紀念章；東口交通案內所可買市電一日券"],
      ["18:00-20:40", "永旺夢樂城岡山：逛街、明神丸晚餐（22:00 打烊／21:00 最後點餐）、AEON 超市採買", { mode: "步行", from: "ダイワロイネットホテル岡山駅前", to: "イオンモール岡山", note: "專門店多為 21:00 打烊", travelMode: "walking" }],
      ["20:45", "Yours 超市補買水、早餐與電解質飲料"]
    ],
    route: [
      "永旺 1F：無印良品、AEON 超市（超市約 22:00）",
      "永旺 2F：GAP、H&M、中川政七商店",
      "永旺 3F：3COINS+plus、ABC-MART、三麗鷗、Village Vanguard、Disney、niko and ...、WEGO、Thank You Mart",
      "永旺 4F：大創、Hands、蠟筆小新專賣店、UQ"
    ],
    meals: ["Myojinmaru 明神丸（晚餐 17:00-22:00／L.O. 21:00）", "Yours 超市", "AEON 超市"],
    backup: [
      "高島屋百貨",
      "400°C PIZZA（偏貴）",
      "蟹道樂 岡山店",
      "Sun Station Terrace 北館：JUMP SHOP",
      "Sun Station Terrace 南館：松本清、Can Do、伴手禮",
      "岡山一番街：眼鏡、服飾與小羊周邊"
    ]
  },
  {
    key: "0814",
    date: "8/14",
    weekday: "五",
    title: "宮島",
    theme: "大鳥居、纜車、牡蠣",
    pass: "Pass Day 1",
    passCovered: true,
    summary: "11:00 前抵達宮島看滿潮，下午 16:48 左右看退潮。大鳥居、纜車、表參道、牡蠣與宮島限定扭蛋都是今天重點。",
    schedule: [
      ["07:30", "山陽新幹線前往廣島，建議事先劃位", { mode: "JR 新幹線", from: "岡山駅", to: "広島駅", note: "周遊券涵蓋" }],
      ["08:20", "轉 JR 山陽本線前往宮島口", { mode: "JR 在來線", from: "広島駅", to: "宮島口駅", note: "周遊券涵蓋" }],
      ["09:30", "搭 JR 西日本宮島渡輪；紅色機台另繳訪問稅 ¥100", { mode: "JR 渡輪", from: "宮島口フェリー乗り場", to: "宮島桟橋", note: "船資由周遊券涵蓋；每人訪問稅 ¥100" }],
      ["10:00-11:20", "嚴島神社與大鳥居：10:30 滿潮，神社門票 ¥300"],
      ["11:30-12:50", "牡蠣或星鰻飯午餐"],
      ["13:00", "前往紅葉谷公園；入口附近可搭免費接駁車", { mode: "步行＋接駁", from: "厳島神社", to: "宮島ロープウエー紅葉谷駅", note: "接駁約 20 分一班，或步行約 10 分", travelMode: "walking" }],
      ["13:30-15:30", "宮島纜車往返獅子岩，成人來回 ¥2,000"],
      ["15:40-17:10", "表參道商店街：牡蠣、紅葉饅頭、咖啡、扭蛋；16:48 低潮"],
      ["17:20", "宮島回宮島口", { mode: "JR 渡輪", from: "宮島桟橋", to: "宮島口フェリー乗り場", note: "周遊券涵蓋" }],
      ["18:00", "宮島口經廣島返回岡山", { mode: "JR＋新幹線", from: "宮島口駅", to: "岡山駅", note: "廣島站轉山陽新幹線" }]
    ],
    route: ["岡山", "廣島", "宮島口", "JR 宮島渡輪", "宮島"],
    meals: ["牡蠣屋（10:00-18:00，季節可能調整）", "Mikotoya みこと屋（星鰻飯，需訂位）", "御食事処 岩むら（牡蠣定食）", "紅葉堂", "伊都岐咖啡（9:00-19:00／L.O. 18:45）"],
    backup: ["豊國神社（千疊閣）與五重塔", "太熱或停駛就取消纜車，改表參道與咖啡", "風雨時與 8/18 廣島市區互換"]
  },
  {
    key: "0815",
    date: "8/15",
    weekday: "六",
    title: "姬路 + 吉備津",
    theme: "姬路城、吉備津神社、吉備津彥神社",
    pass: "Pass Day 2",
    passCovered: true,
    summary: "上午走御幸通與本町商店街前往姬路城，午後回岡山轉桃太郎線，依序參拜吉備津神社與吉備津彥神社。",
    schedule: [
      ["08:00", "山陽新幹線前往姬路", { mode: "JR 新幹線", from: "岡山駅", to: "姫路駅", note: "周遊券涵蓋" }],
      ["08:40-09:15", "從姬路站經御幸通、本町商店街走到姬路城", { mode: "步行", from: "姫路駅", to: "姫路城", note: "一路走商店街", travelMode: "walking" }],
      ["09:15-11:45", "姬路城：成人 ¥2,500；姬路城＋好古園套票 ¥2,600"],
      ["11:45-12:45", "姬路站或商店街午餐"],
      ["13:00", "山陽新幹線返回岡山", { mode: "JR 新幹線", from: "姫路駅", to: "岡山駅", note: "周遊券涵蓋" }],
      ["14:10", "岡山站 10 號月台搭桃太郎線到吉備津站", { mode: "JR 桃太郎線", from: "岡山駅", to: "吉備津駅", note: "10 號月台；周遊券涵蓋" }],
      ["14:35-15:50", "吉備津站出站往左，步行前往吉備津神社"],
      ["16:00", "吉備津站前往備前一宮站", { mode: "JR 桃太郎線", from: "吉備津駅", to: "備前一宮駅", note: "周遊券涵蓋" }],
      ["16:15-17:15", "步行約 10 分鐘到吉備津彥神社", { mode: "步行", from: "備前一宮駅", to: "吉備津彦神社", note: "單程約 10 分鐘", travelMode: "walking" }],
      ["17:30", "備前一宮站返回岡山", { mode: "JR 桃太郎線", from: "備前一宮駅", to: "岡山駅", note: "周遊券涵蓋" }]
    ],
    route: ["岡山", "姬路", "姬路城", "岡山", "吉備津", "備前一宮"],
    meals: ["姬路站午餐", "岡山站晚餐", "便利商店補水"],
    backup: ["高溫或太累時姬路城優先", "吉備津兩社可移到 8/17 或取消", "想逛好古園就買 ¥2,600 套票"]
  },
  {
    key: "0816",
    date: "8/16",
    weekday: "日",
    title: "倉敷",
    theme: "美觀地區、阿智神社、Outlet",
    pass: "Pass Day 3",
    passCovered: true,
    summary: "倉敷站南口走美觀地區與阿智神社，午後回北口 Ario 吃東西，再到 Outlet。Outlet 並非每家店都能退稅。",
    schedule: [
      ["09:00", "岡山站 1、2 號月台搭山陽本線／伯備線到倉敷", { mode: "JR 在來線", from: "岡山駅", to: "倉敷駅", note: "周遊券涵蓋；到站走左側南口" }],
      ["09:30-10:00", "南口經惠比壽商店街前往阿智神社", { mode: "步行", from: "倉敷駅南口", to: "阿智神社", note: "注意蚊蟲與階梯", travelMode: "walking" }],
      ["10:00-12:30", "阿智神社、倉敷美觀地區、紙膠帶店與白壁街道"],
      ["12:30-13:40", "午餐：有鄰庵生蛋拌飯配鯛魚，或岡山希少和牛店（通常 17:00 打烊）"],
      ["13:40-15:20", "倉敷長春藤廣場與特色 Lawson；大原美術館可選配"],
      ["15:20", "回倉敷站，穿越到右側北口", { mode: "步行", from: "倉敷美観地区", to: "アリオ倉敷", note: "先到 Ario 用餐或休息", travelMode: "walking" }],
      ["16:00-18:20", "三井 Outlet：先到案內所拿外國旅客優惠券，再逛 Loft"],
      ["18:30-19:30", "晚餐：回転寿司すし丸 アリオ倉敷店（22:00 打烊／21:30 最後點餐）"],
      ["19:40", "倉敷站返回岡山", { mode: "JR 在來線", from: "倉敷駅", to: "岡山駅", note: "山陽本線；周遊券涵蓋" }]
    ],
    route: ["倉敷站左側南口：老街與美觀地區", "倉敷站右側北口：Ario、Outlet", "Outlet 餐廳少，先在對面 Ario 吃", "外國旅客出示護照，先問案內所優惠券；各店退稅規則不同"],
    meals: ["有鄰庵（通常 11:00-17:00；生蛋拌飯配鯛魚）", "有鄰庵 岡山希少和牛店（11:00-17:00）", "炸肉球小吃", "晚餐：回転寿司すし丸 アリオ倉敷店（11:00-22:00／L.O. 21:30）"],
    backup: ["倉敷本町通商店街、林源十郎商店、平翠軒", "大原美術館（成人 ¥2,000）", "是否購買美觀地區漫步優惠券，到現場再決定", "太熱就縮短阿智神社"]
  },
  {
    key: "0817",
    date: "8/17",
    weekday: "一",
    title: "岡山市區",
    theme: "岡山城、後樂園、表町",
    pass: "Pass Day 4",
    passCovered: true,
    summary: "市電只搭岡山站前到城下、縣廳通到岡山站前兩趟，單程 ¥160、合計 ¥320。搭配岡山城＋後樂園共通券 ¥800 時，一日券 ¥400 反而每人多 ¥80，因此不用特別購買。市電不在 JR Pass 範圍。",
    schedule: [
      ["08:45", "岡山站前搭東山線到城下站（¥160）", { mode: "岡山市電", from: "岡山駅前", to: "城下（岡山）", note: "東山線；IC 或現金，JR Pass 不涵蓋" }],
      ["09:00-10:20", "岡山城天守"],
      ["10:20-11:40", "岡山後樂園；岡山城＋後樂園共通券 ¥800"],
      ["11:40-12:20", "岡山後樂園步行到岡山神社：找蕾絲編織岡山城御守", { mode: "步行", from: "岡山後楽園", to: "岡山神社 岡山県岡山市北区石関町2-33", note: "現址在石關町，不在岡山城內", travelMode: "walking" }],
      ["12:30-13:40", "午餐：司味野村豬排定食或 Uoya Taisho 魚や大将"],
      ["13:50-16:40", "表町商店街、天滿屋、岡山木村屋、無印良品"],
      ["17:00", "縣廳通站返回岡山站前（¥160）", { mode: "岡山市電", from: "県庁通り（岡山）", to: "岡山駅前", note: "東山線；IC 或現金，JR Pass 不涵蓋" }],
      ["晚上", "預約壽喜燒晚餐"]
    ],
    route: ["岡山站前 → 城下：岡電東山線 ¥160", "岡山城 → 後樂園 → 岡山神社：步行", "岡山神社 → 表町商店街：步行", "縣廳通 → 岡山站前：岡電東山線 ¥160"],
    meals: ["Uoya Taisho 魚や大将", "司味野村豬排定食", "壽喜燒（需預約）"],
    backup: ["柳川站：麺酒一照庵 岡山本店", "下雨就縮短後樂園，改岡山城、表町與天滿屋", "訂不到壽喜燒就回岡山站或永旺"]
  },
  {
    key: "0818",
    date: "8/18",
    weekday: "二",
    title: "廣島",
    theme: "廣島城、和平紀念公園、本通",
    pass: "Pass Day 5",
    passCovered: true,
    summary: "先到廣島站吃 Shake Shack，再從新白島走廣島城、護國神社、原爆圓頂屋與和平紀念公園，最後逛紙屋町、本通並吃廣島燒。",
    schedule: [
      ["08:30", "山陽新幹線前往廣島", { mode: "JR 新幹線", from: "岡山駅", to: "広島駅", note: "周遊券最後一天；建議事先劃位" }],
      ["09:15-10:00", "minamoa 廣島 Shake Shack（10:00 開門／21:00 最後點餐）"],
      ["10:10", "廣島站搭普通電車到新白島", { mode: "JR 在來線", from: "広島駅", to: "新白島駅", note: "周遊券涵蓋" }],
      ["10:25-12:00", "廣島城外觀、二之丸復原建築與廣島護國神社"],
      ["12:00-12:30", "步行前往原爆圓頂屋", { mode: "步行", from: "広島城", to: "原爆ドーム", note: "沿途注意防曬補水", travelMode: "walking" }],
      ["12:30-15:10", "原爆圓頂屋、和平紀念公園、和平紀念資料館 ¥200"],
      ["15:20-17:20", "紙屋町百貨與本通商店街"],
      ["17:30-19:00", "廣島燒晚餐：廣島燒村或長田屋；廣島燒村準備現金"],
      ["19:00", "搭廣電路面電車返回廣島站", { mode: "廣電市電", from: "八丁堀（広島）", to: "広島駅", note: "另付；依晚餐位置調整上車站" }],
      ["20:00", "山陽新幹線返回岡山", { mode: "JR 新幹線", from: "広島駅", to: "岡山駅", note: "周遊券涵蓋" }]
    ],
    route: ["廣島站 → 新白島：JR 普通電車", "新白島 → 廣島城 → 原爆圓頂屋：步行", "本通／八丁堀 → 廣島站：廣電路面電車"],
    meals: ["SHAKE SHACK minamoa 廣島店（10:00-21:00 L.O.）", "牡蠣屋", "廣島燒村（整棟，準備現金）", "長田屋（廣島燒）"],
    backup: ["廣島城天守已於 2026/3/22 永久閉館，不需購買 ¥370 門票", "下雨就資料館、本通與廣島站", "資料館排隊太長可先走公園或調整入館時間"]
  },
  {
    key: "0819",
    date: "8/19",
    weekday: "三",
    title: "離境",
    theme: "退房、岡山站、機場",
    pass: "已結束",
    passCovered: false,
    summary: "不再跑遠。上午岡山站附近補買，12:55 左右搭巴士到岡山機場，保留國際線時間。",
    schedule: [
      ["09:00-10:30", "早餐、最後採買、退房"],
      ["10:30-12:00", "岡山站周邊輕鬆逛"],
      ["12:20", "到岡山站西口 21 號巴士站"],
      ["12:55", "搭岡山機場巴士，自費 ¥1,000", { mode: "機場巴士", from: "岡山駅西口 21番のりば", to: "岡山桃太郎空港", note: "車程約 30 分" }],
      ["13:25", "抵達岡山機場"],
      ["15:55", "起飛"]
    ],
    route: ["飯店", "岡山站西口", "岡山機場"],
    meals: ["岡山站早餐", "機場或站內輕食"],
    backup: ["想更保守就提前一班巴士", "上午只留岡山站周邊", "行李前一晚整理好"]
  }
];

const dayMapQueries = {
  "0813": [
    ["岡山桃太郎機場", "岡山桃太郎空港"],
    ["飯店", "ダイワロイネットホテル岡山駅前"],
    ["永旺夢樂城", "イオンモール岡山"],
    ["Yours 超市", "ユアーズ さんすて岡山店"],
    ["明神丸", "明神丸 イオンモール岡山店", false],
    ["岡山高島屋", "岡山高島屋", false],
    ["400°C PIZZA", "400°C PIZZA 岡山", false],
    ["蟹道樂", "かに道楽 岡山店", false],
    ["岡山一番街", "岡山一番街", false]
  ],
  "0814": [
    ["岡山站", "岡山駅"],
    ["廣島站", "広島駅"],
    ["宮島口站", "宮島口駅"],
    ["嚴島神社 / 大鳥居", "厳島神社 大鳥居"],
    ["宮島纜車", "宮島ロープウエー紅葉谷駅"],
    ["表參道商店街", "宮島 表参道商店街"],
    ["牡蠣屋", "牡蠣屋 宮島", false],
    ["Mikotoya", "みこと屋 宮島", false],
    ["岩村", "御食事処 岩むら 宮島", false],
    ["紅葉堂", "紅葉堂 本店 宮島", false],
    ["伊都岐咖啡", "伊都岐珈琲 宮島", false],
    ["千疊閣", "豊国神社 千畳閣 宮島", false]
  ],
  "0815": [
    ["岡山站", "岡山駅"],
    ["姬路站", "姫路駅"],
    ["姬路城", "姫路城"],
    ["吉備津神社", "吉備津神社"],
    ["吉備津彥神社", "吉備津彦神社"],
    ["好古園", "好古園 姫路", false]
  ],
  "0816": [
    ["倉敷站", "倉敷駅"],
    ["阿智神社", "阿智神社 倉敷"],
    ["倉敷美觀地區", "倉敷美観地区"],
    ["長春藤廣場", "倉敷アイビースクエア"],
    ["Ario 倉敷", "アリオ倉敷"],
    ["倉敷 Outlet", "三井アウトレットパーク 倉敷"],
    ["有鄰庵", "有鄰庵 倉敷", false],
    ["すし丸 Ario 倉敷店", "回転寿司すし丸 アリオ倉敷店", false],
    ["大原美術館", "大原美術館", false],
    ["林源十郎商店", "林源十郎商店", false],
    ["平翠軒", "平翠軒 倉敷", false]
  ],
  "0817": [
    ["飯店", "ダイワロイネットホテル岡山駅前"],
    ["岡山城", "岡山城"],
    ["岡山後樂園", "岡山後楽園"],
    ["表町商店街", "岡山 表町商店街"],
    ["岡山神社", "岡山神社 岡山県岡山市北区石関町2-33"],
    ["天滿屋", "天満屋 岡山本店", false],
    ["司味野村", "味司野村 岡山", false],
    ["魚や大将", "魚や大将 岡山", false],
    ["一照庵", "麺酒一照庵 岡山本店", false]
  ],
  "0818": [
    ["廣島站", "広島駅"],
    ["新白島站", "新白島駅"],
    ["廣島城", "広島城"],
    ["廣島護國神社", "広島護国神社"],
    ["原爆圓頂館", "原爆ドーム"],
    ["和平紀念公園", "広島平和記念公園"],
    ["和平紀念資料館", "広島平和記念資料館"],
    ["本通商店街", "広島 本通商店街"],
    ["廣島站", "広島駅"],
    ["Shake Shack", "SHAKE SHACK minamoa広島店", false],
    ["廣島燒村", "お好み村 広島", false],
    ["長田屋", "長田屋 広島", false],
    ["牡蠣屋", "牡蠣屋 広島", false]
  ],
  "0819": [
    ["飯店", "ダイワロイネットホテル岡山駅前"],
    ["岡山站西口巴士站", "岡山駅西口 21番 のりば 岡山空港"],
    ["岡山桃太郎機場", "岡山桃太郎空港"]
  ]
};

const budgetItems = [
  ["8/13", "岡山機場巴士", "機場 -> 岡山站西口", "另付", "1000", "約 30 分"],
  ["8/14", "JR-WEST pass", "5 天票券", "購買", "17000", "8/14-8/18 使用"],
  ["8/14", "岡山 -> 廣島 -> 宮島口", "新幹線/JR", "Pass 覆蓋", "0", "建議劃位"],
  ["8/14", "JR 宮島渡輪", "宮島口 -> 宮島", "Pass 覆蓋", "0", "訪問稅另付"],
  ["8/14", "宮島訪問稅", "渡輪入島", "另付", "100", "每人"],
  ["8/14", "嚴島神社", "神社昇殿", "另付", "300", "成人"],
  ["8/14", "宮島纜車", "紅葉谷 - 獅子岩來回", "另付", "2000", "成人來回"],
  ["8/15", "岡山 -> 姬路", "新幹線來回", "Pass 覆蓋", "0", "建議劃位"],
  ["8/15", "姬路城", "門票", "另付", "2500", "好古園套票約 2600"],
  ["8/15", "桃太郎線", "岡山 -> 吉備津一帶", "Pass 覆蓋", "0", "熱時可搭短程計程車"],
  ["8/16", "岡山 -> 倉敷", "JR 來回", "Pass 覆蓋", "0", "山陽本線"],
  ["8/16", "大原美術館", "選配門票", "另付", "2000", "雨天/高溫備案"],
  ["8/17", "岡山市電往返", "岡山站前 -> 城下／縣廳通 -> 岡山站前", "另付", "320", "單程 ¥160；搭配共通券時一日券不划算"],
  ["8/17", "後樂園 + 岡山城", "共通券", "另付", "800", "成人"],
  ["8/18", "岡山 -> 廣島", "新幹線來回", "Pass 覆蓋", "0", "Pass 最後一天"],
  ["8/18", "廣島市內交通", "廣電市電", "另付", "240-500", "依搭乘次數"],
  ["8/18", "和平紀念資料館", "成人門票", "另付", "200", "可先查看預約與排隊"],
  ["8/18", "廣島城天守", "2026/3/22 起永久閉館", "外觀", "-", "外觀、二之丸可參觀"],
  ["8/19", "岡山機場巴士", "岡山站西口 -> 機場", "另付", "1000", "建議 12:55"]
];

const bundledShoppingItems = [
  ["bundled-forest-family", "森林探險家族", "./assets/shopping/forest-family.jpg"],
  ["bundled-shopping-001", "3coins 小熊防蚊", "./assets/shopping/shopping-001.webp"],
  ["bundled-shopping-002", "3coins 聲波防蚊", "./assets/shopping/shopping-002.webp"],
  ["bundled-shopping-003", "7-11軟糖-酸_", "./assets/shopping/shopping-003.webp"],
  ["bundled-shopping-004", "三麗鷗盲盒", "./assets/shopping/shopping-004.webp"],
  ["bundled-shopping-005", "三麗鷗盲盒(1)", "./assets/shopping/shopping-005.webp"],
  ["bundled-shopping-006", "三麗鷗盲盒(2)", "./assets/shopping/shopping-006.webp"],
  ["bundled-shopping-007", "日本蒜片", "./assets/shopping/shopping-007.webp"],
  ["bundled-shopping-008", "卡套_", "./assets/shopping/shopping-008.webp"],
  ["bundled-shopping-009", "可看隱眼", "./assets/shopping/shopping-009.webp"],
  ["bundled-shopping-010", "白元衣物除皺噴霧", "./assets/shopping/shopping-010.webp"],
  ["bundled-shopping-011", "扭蛋_(1)", "./assets/shopping/shopping-011.webp"],
  ["bundled-shopping-012", "扭蛋", "./assets/shopping/shopping-012.webp"],
  ["bundled-shopping-013", "保養胃藥 _3", "./assets/shopping/shopping-013.webp"],
  ["bundled-shopping-014", "胃藥_1", "./assets/shopping/shopping-014.webp"],
  ["bundled-shopping-015", "胃藥36_1", "./assets/shopping/shopping-015.webp"],
  ["bundled-shopping-016", "疲勞眼藥水", "./assets/shopping/shopping-016.webp"],
  ["bundled-shopping-017", "傑利鼠扭蛋_", "./assets/shopping/shopping-017.webp"],
  ["bundled-shopping-018", "森林-Buy_", "./assets/shopping/shopping-018.webp"],
  ["bundled-shopping-019", "森林-Buy1", "./assets/shopping/shopping-019.webp"],
  ["bundled-shopping-020", "森林-Buy2", "./assets/shopping/shopping-020.webp"],
  ["bundled-shopping-021", "森林-Buy3", "./assets/shopping/shopping-021.webp"],
  ["bundled-shopping-022", "森林-Buy4", "./assets/shopping/shopping-022.webp"],
  ["bundled-shopping-023", "森林單人偶篇", "./assets/shopping/shopping-023.webp"],
  ["bundled-shopping-024", "無印吸水棒", "./assets/shopping/shopping-024.webp"],
  ["bundled-shopping-025", "無印棉被_", "./assets/shopping/shopping-025.webp"],
  ["bundled-shopping-026", "無印襪子", "./assets/shopping/shopping-026.webp"],
  ["bundled-shopping-027", "感冒藥", "./assets/shopping/shopping-027.webp"],
  ["bundled-shopping-028", "蜜桃洗屁股肥皂", "./assets/shopping/shopping-028.webp"],
  ["bundled-shopping-029", "磨砂膏", "./assets/shopping/shopping-029.webp"],
  ["bundled-shopping-030", "離子夾_", "./assets/shopping/shopping-030.webp"],
  ["bundled-shopping-031", "離子夾_(1)", "./assets/shopping/shopping-031.webp"],
  ["bundled-shopping-032", "離子夾", "./assets/shopping/shopping-032.webp"],
  ["bundled-shopping-033", "GU 衣服 日本官網貨號：359646_", "./assets/shopping/shopping-033.webp"],
  ["bundled-shopping-034", "GU透膚連帽拉鍊外套(359519)", "./assets/shopping/shopping-034.webp"],
  ["bundled-shopping-035", "Melano CC", "./assets/shopping/shopping-035.webp"],
  ["bundled-shopping-036", "NB包包", "./assets/shopping/shopping-036.webp"],
  ["bundled-shopping-037", "tutuanna可愛袖套", "./assets/shopping/shopping-037.webp"],
  ["bundled-shopping-038", "UQ 衣服", "./assets/shopping/shopping-038.webp"]
].map(([id, name, image]) => ({ id, name, image }));

const STORAGE_KEYS = {
  itinerary: "okayamaItineraryV3",
  checklist: "okayamaChecklist",
  shopping: "okayamaShoppingListV1",
  shoppingSeed: "okayamaShoppingSeedV3",
  shoppingSyncMigration: "okayamaShoppingSyncMigrationV2",
  ledgerSyncMigration: "okayamaLedgerSyncMigrationV1",
  contentSyncMigration: "okayamaContentSyncMigrationV1",
  itinerarySyncDirty: "okayamaItinerarySyncDirtyV1",
  memoSyncDirty: "okayamaMemoSyncDirtyV1",
  memo: "okayamaTripMemo",
  expenses: "okayamaExpensesV1",
  weather: "okayamaWeatherCacheV1",
  exchangeRate: "okayamaExchangeRateV1",
  publicFund: "okayamaPublicFundV1"
};

const TRIP_YEAR = 2026;
const EXCHANGE_RATE_API = "https://api.frankfurter.dev/v2/rate/JPY/TWD";
const EXCHANGE_RATE_MAX_AGE = 24 * 60 * 60 * 1000;
const expenseCategories = ["交通", "門票", "餐飲", "購物", "住宿", "其他"];
const expenseMembers = ["XUN", "UT"];
const publicExpenseAccount = "公帳";
const expensePayers = [...expenseMembers, publicExpenseAccount];
const splitOptions = [
  ["split", "要分帳"],
  ["personal", "不分帳"]
];
const allExpenseDays = "全部日期";
const allExpenseCategories = "全部分類";
const allExpensePayers = "全部付款人";

const weatherLocations = {
  "0813": { name: "岡山", latitude: 34.6618, longitude: 133.935 },
  "0814": { name: "宮島", latitude: 34.2953, longitude: 132.3199 },
  "0815": { name: "姬路", latitude: 34.8394, longitude: 134.6939 },
  "0816": { name: "倉敷", latitude: 34.585, longitude: 133.7719 },
  "0817": { name: "岡山", latitude: 34.6618, longitude: 133.935 },
  "0818": { name: "廣島", latitude: 34.3853, longitude: 132.4553 },
  "0819": { name: "岡山機場", latitude: 34.7569, longitude: 133.8553 }
};

const itineraryTicketMeta = {
  "0813": { headline: "今天抵達岡山", from: "岡山機場", fromEn: "OKAYAMA AIRPORT", to: "岡山", toEn: "OKAYAMA" },
  "0814": { headline: "今天去宮島", from: "岡山", fromEn: "OKAYAMA", to: "宮島", toEn: "MIYAJIMA" },
  "0815": { headline: "今天去姬路與吉備津", from: "岡山", fromEn: "OKAYAMA", to: "姬路", toEn: "HIMEJI" },
  "0816": { headline: "今天去倉敷", from: "岡山", fromEn: "OKAYAMA", to: "倉敷", toEn: "KURASHIKI" },
  "0817": { headline: "今天遊岡山市區", from: "岡山站", fromEn: "OKAYAMA", to: "岡山城", toEn: "OKAYAMA CASTLE" },
  "0818": { headline: "今天去廣島", from: "岡山", fromEn: "OKAYAMA", to: "廣島", toEn: "HIROSHIMA" },
  "0819": { headline: "今天從岡山回家", from: "岡山", fromEn: "OKAYAMA", to: "岡山機場", toEn: "OKAYAMA AIRPORT" }
};

const weatherCodeLabels = {
  0: "晴朗",
  1: "大致晴朗",
  2: "局部多雲",
  3: "陰天",
  45: "有霧",
  48: "霧凇",
  51: "毛毛雨",
  53: "毛毛雨",
  55: "毛毛雨",
  61: "小雨",
  63: "雨",
  65: "大雨",
  80: "陣雨",
  81: "陣雨",
  82: "強陣雨",
  95: "雷雨",
  96: "雷雨",
  99: "雷雨"
};

const defaultDays = clone(days);
let tripDays = loadTripDays();
let exchangeRateSettings = loadExchangeRateSettings();
let exchangeRateRequestStatus = "idle";

const state = {
  activeDay: getInitialActiveDayKey(),
  activeTab: "itinerary",
  editMode: false,
  expandedShoppingImages: new Set(),
  shoppingSync: {
    available: false,
    connected: false,
    identity: "",
    pending: 0,
    pendingScopes: {
      shopping: 0,
      expenses: 0,
      publicFund: 0,
      itinerary: 0,
      memo: 0
    },
    unsubscribe: null,
    expenseUnsubscribe: null,
    publicFundUnsubscribe: null,
    itineraryUnsubscribe: null,
    memoUnsubscribe: null,
    authUnsubscribe: null,
    services: null,
    users: null,
    itemsRef: null,
    expensesRef: null,
    publicFundRef: null,
    itineraryRef: null,
    memoRef: null,
    itineraryWriteTimers: new Map(),
    memoWriteTimer: null,
    deferredItineraryPayloads: new Map(),
    deferredMemoText: null
  }
};

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function migrateStoredTripDays(saved) {
  const migrated = clone(saved);
  const findDay = (key) => migrated.find((day) => day.key === key);
  const replaceMeal = (day, oldText, newText) => {
    const index = day?.meals?.indexOf(oldText) ?? -1;
    if (index >= 0) day.meals[index] = newText;
  };
  const findScheduleIndex = (day, time, text) =>
    day?.schedule?.findIndex((item) => item[0] === time && item[1] === text) ?? -1;
  const replaceSchedule = (day, time, text, replacement) => {
    const index = findScheduleIndex(day, time, text);
    if (index >= 0) day.schedule[index] = replacement;
  };

  const day13 = findDay("0813");
  replaceSchedule(
    day13,
    "18:00-20:40",
    "永旺夢樂城岡山：逛街、明神丸晚餐、AEON 超市採買",
    ["18:00-20:40", "永旺夢樂城岡山：逛街、明神丸晚餐（22:00 打烊／21:00 最後點餐）、AEON 超市採買", { mode: "步行", from: "ダイワロイネットホテル岡山駅前", to: "イオンモール岡山", note: "專門店多為 21:00 打烊", travelMode: "walking" }]
  );
  replaceMeal(day13, "Myojinmaru 明神丸", "Myojinmaru 明神丸（晚餐 17:00-22:00／L.O. 21:00）");

  const day14 = findDay("0814");
  replaceMeal(day14, "牡蠣屋", "牡蠣屋（10:00-18:00，季節可能調整）");
  replaceMeal(day14, "伊都岐咖啡", "伊都岐咖啡（9:00-19:00／L.O. 18:45）");

  let day16 = findDay("0816");
  const legacyDay16Schedule = [
    ["09:00", "岡山搭 JR 山陽本線到倉敷，pass 覆蓋"],
    ["09:45-10:30", "阿智神社，先處理爬坡段"],
    ["10:30-12:30", "倉敷美觀地區、白壁街道、運河、雜貨店"],
    ["12:30-13:30", "午餐：岩むら或美觀地區附近和食"],
    ["13:30-15:30", "大原美術館或咖啡休息"],
    ["15:30-17:30", "回倉敷站，北口 Mitsui Outlet Park 倉敷"],
    ["17:30-19:00", "倉敷晚餐或回岡山站吃"]
  ];
  if (JSON.stringify(day16?.schedule) === JSON.stringify(legacyDay16Schedule)) {
    Object.assign(day16, clone(days.find((day) => day.key === "0816")));
  }
  replaceSchedule(
    day16,
    "12:30-13:40",
    "午餐：有鄰庵生蛋拌飯配鯛魚，或岡山希少和牛店",
    ["12:30-13:40", "午餐：有鄰庵生蛋拌飯配鯛魚，或岡山希少和牛店（通常 17:00 打烊）"]
  );
  replaceSchedule(
    day16,
    "18:30-19:30",
    "晚餐：回転寿司すし丸 アリオ倉敷店",
    ["18:30-19:30", "晚餐：回転寿司すし丸 アリオ倉敷店（22:00 打烊／21:30 最後點餐）"]
  );
  replaceMeal(day16, "有鄰庵（生蛋拌飯配鯛魚）", "有鄰庵（通常 11:00-17:00；生蛋拌飯配鯛魚）");
  replaceMeal(day16, "有鄰庵 岡山希少和牛店", "有鄰庵 岡山希少和牛店（11:00-17:00）");
  replaceMeal(day16, "晚餐：回転寿司すし丸 アリオ倉敷店", "晚餐：回転寿司すし丸 アリオ倉敷店（11:00-22:00／L.O. 21:30）");

  let day17 = findDay("0817");
  const legacyDay17Schedule = [
    ["08:00", "飯店出門，市電/巴士到後樂園或城下"],
    ["08:30-10:00", "岡山後樂園，先走庭園和岡山城借景"],
    ["10:00-11:30", "岡山城天守"],
    ["11:30-12:30", "城下或後樂園周邊午餐/茶屋"],
    ["12:30-14:30", "表町商店街、天滿屋、咖啡休息"],
    ["14:30-16:00", "回飯店午休或補岡山站紀念章"],
    ["晚上", "壽喜燒晚餐，需事前預約"]
  ];
  if (JSON.stringify(day17?.schedule) === JSON.stringify(legacyDay17Schedule)) {
    Object.assign(day17, clone(days.find((day) => day.key === "0817")));
  }
  if (day17?.summary === "使用岡山市電一日券走城下、岡山城、後樂園與表町商店街，晚餐預約壽喜燒。市電與巴士不在 JR Pass 範圍。") {
    day17.summary = days.find((day) => day.key === "0817").summary;
  }
  const passPurchaseIndex = findScheduleIndex(day17, "08:30", "購買岡山市電一日券 ¥400");
  if (passPurchaseIndex >= 0) day17.schedule.splice(passPurchaseIndex, 1);
  replaceSchedule(
    day17,
    "08:45",
    "岡山站前搭東山線到城下站",
    ["08:45", "岡山站前搭東山線到城下站（¥160）", { mode: "岡山市電", from: "岡山駅前", to: "城下（岡山）", note: "東山線；IC 或現金，JR Pass 不涵蓋" }]
  );
  replaceSchedule(
    day17,
    "10:20-12:00",
    "岡山後樂園；岡山城＋後樂園共通券 ¥800",
    ["10:20-11:40", "岡山後樂園；岡山城＋後樂園共通券 ¥800"]
  );
  replaceSchedule(
    day17,
    "12:10-13:20",
    "午餐：司味野村豬排定食或 Uoya Taisho 魚や大将",
    ["12:30-13:40", "午餐：司味野村豬排定食或 Uoya Taisho 魚や大将"]
  );
  replaceSchedule(
    day17,
    "13:30-16:30",
    "表町商店街、天滿屋、岡山木村屋、無印良品",
    ["13:50-16:40", "表町商店街、天滿屋、岡山木村屋、無印良品"]
  );
  replaceSchedule(
    day17,
    "17:20",
    "城下站返回岡山站前",
    ["17:00", "縣廳通站返回岡山站前（¥160）", { mode: "岡山市電", from: "県庁通り（岡山）", to: "岡山駅前", note: "東山線；IC 或現金，JR Pass 不涵蓋" }]
  );
  const oldShrineIndex = findScheduleIndex(day17, "16:30-17:10", "岡山神社：找蕾絲編織岡山城御守");
  if (oldShrineIndex >= 0) {
    day17.schedule.splice(oldShrineIndex, 1);
    const gardenIndex = findScheduleIndex(day17, "10:20-11:40", "岡山後樂園；岡山城＋後樂園共通券 ¥800");
    day17.schedule.splice(gardenIndex + 1, 0, ["11:40-12:20", "岡山後樂園步行到岡山神社：找蕾絲編織岡山城御守", { mode: "步行", from: "岡山後楽園", to: "岡山神社 岡山県岡山市北区石関町2-33", note: "現址在石關町，不在岡山城內", travelMode: "walking" }]);
  }
  if (JSON.stringify(day17?.route) === JSON.stringify(["岡山站前 → 城下：岡電東山線", "城下站步行到岡山城、後樂園與表町"])) {
    day17.route = clone(days.find((day) => day.key === "0817").route);
  }

  const day18 = findDay("0818");
  replaceSchedule(
    day18,
    "09:15-10:00",
    "minamoa 廣島 Shake Shack（10:00 開門）",
    ["09:15-10:00", "minamoa 廣島 Shake Shack（10:00 開門／21:00 最後點餐）"]
  );
  replaceMeal(day18, "SHAKE SHACK minamoa 廣島店", "SHAKE SHACK minamoa 廣島店（10:00-21:00 L.O.）");

  return migrated;
}

function loadTripDays() {
  const saved = readJson(STORAGE_KEYS.itinerary, null);
  if (!Array.isArray(saved) || saved.length !== days.length) return clone(days);

  const defaultKeys = days.map((day) => day.key).join("|");
  const savedKeys = saved.map((day) => day.key).join("|");
  if (defaultKeys !== savedKeys) return clone(days);

  const migrated = migrateStoredTripDays(saved);
  if (JSON.stringify(migrated) !== JSON.stringify(saved)) {
    writeJson(STORAGE_KEYS.itinerary, migrated);
  }
  return migrated;
}

function saveTripDays(dayKey = state.activeDay, immediate = false) {
  writeJson(STORAGE_KEYS.itinerary, tripDays);
  state.shoppingSync.deferredItineraryPayloads.delete(dayKey);
  scheduleItinerarySync(dayKey, immediate);
}

function normalizeExpensePayer(payer) {
  const legacyPayers = {
    我: "XUN",
    同行者: "UT"
  };
  const normalizedPayer = legacyPayers[payer] || payer;
  return expensePayers.includes(normalizedPayer) ? normalizedPayer : expenseMembers[0];
}

function normalizeExpenseMember(member) {
  const normalized = normalizeExpensePayer(member);
  return expenseMembers.includes(normalized) ? normalized : expenseMembers[0];
}

function loadExpenses() {
  const saved = readJson(STORAGE_KEYS.expenses, []);
  if (!Array.isArray(saved)) return [];

  return saved
    .map((expense) => {
      const payer = normalizeExpensePayer(expense.payer);
      const split = typeof expense.split === "boolean" ? expense.split : Number(expense.people || 1) > 1;
      const hasSavedOwner = expenseMembers.includes(expense.owner) || ["我", "同行者"].includes(expense.owner);
      const owner = split
        ? ""
        : hasSavedOwner
          ? normalizeExpenseMember(expense.owner)
          : payer === publicExpenseAccount
            ? expenseMembers[0]
            : payer;
      return {
        id: String(expense.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
        date: String(expense.date || tripDays[0]?.date || ""),
        category: expenseCategories.includes(expense.category) ? expense.category : "其他",
        payer,
        split,
        owner,
        amount: Math.round(Number(expense.amount)) || 0,
        name: String(expense.name || "").trim(),
        note: String(expense.note || "").trim(),
        createdAt: String(expense.createdAt || new Date().toISOString())
      };
    })
    .filter((expense) => expense.amount > 0 && expense.name);
}

function saveExpenses(expenses) {
  writeJson(STORAGE_KEYS.expenses, expenses);
}

function loadPublicFundDeposits() {
  const saved = readJson(STORAGE_KEYS.publicFund, []);
  if (!Array.isArray(saved)) return [];

  return saved
    .map((deposit) => ({
      id: String(deposit.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
      date: String(deposit.date || tripDays[0]?.date || ""),
      member: normalizeExpenseMember(deposit.member),
      amount: Math.round(Number(deposit.amount)) || 0,
      note: String(deposit.note || "").trim(),
      createdAt: String(deposit.createdAt || new Date().toISOString())
    }))
    .filter((deposit) => deposit.amount > 0);
}

function savePublicFundDeposits(deposits) {
  writeJson(STORAGE_KEYS.publicFund, deposits);
}

function loadExchangeRateSettings() {
  const saved = readJson(STORAGE_KEYS.exchangeRate, {});
  const autoRate = Number(saved?.autoRate);
  return {
    autoRate: autoRate > 0 ? autoRate : null,
    rateDate: String(saved?.rateDate || ""),
    fetchedAt: Number(saved?.fetchedAt) || 0
  };
}

function saveExchangeRateSettings() {
  writeJson(STORAGE_KEYS.exchangeRate, exchangeRateSettings);
}

function getEffectiveExchangeRate() {
  return exchangeRateSettings.autoRate;
}

function formatYen(amount) {
  const rounded = Math.round(Number(amount || 0));
  const sign = rounded < 0 ? "-" : "";
  return `${sign}¥${Math.abs(rounded).toLocaleString("ja-JP")}`;
}

function formatTwd(amount) {
  const rounded = Math.round(Number(amount || 0));
  const sign = rounded < 0 ? "-" : "";
  return `${sign}NT$${Math.abs(rounded).toLocaleString("zh-TW")}`;
}

function convertYenToTwd(amount) {
  const rate = getEffectiveExchangeRate();
  return rate ? Number(amount || 0) * rate : null;
}

function renderTwdEstimate(amount, className = "twd-estimate") {
  const converted = convertYenToTwd(amount);
  return converted === null ? "" : `<span class="${className}">約 ${formatTwd(converted)}</span>`;
}

function sumAmounts(items) {
  return items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function splitYenEvenly(amount) {
  const total = Math.max(0, Math.round(Number(amount) || 0));
  const utShare = Math.floor(total / expenseMembers.length);
  return {
    XUN: total - utShare,
    UT: utShare
  };
}

function calculatePublicFund(expenses = loadExpenses(), deposits = loadPublicFundDeposits()) {
  const publicExpenses = expenses.filter((expense) => expense.payer === publicExpenseAccount);
  const sharedExpenseTotal = sumAmounts(publicExpenses.filter((expense) => expense.split));
  const sharedExpenseShares = splitYenEvenly(sharedExpenseTotal);
  const contributions = Object.fromEntries(
    expenseMembers.map((member) => [member, sumAmounts(deposits.filter((deposit) => deposit.member === member))])
  );
  const personalCosts = Object.fromEntries(
    expenseMembers.map((member) => [
      member,
      sumAmounts(publicExpenses.filter((expense) => !expense.split && expense.owner === member))
    ])
  );
  const liabilities = Object.fromEntries(
    expenseMembers.map((member) => [member, personalCosts[member] + sharedExpenseShares[member]])
  );
  const totalDeposits = sumAmounts(deposits);
  const totalExpenses = sumAmounts(publicExpenses);
  const balance = totalDeposits - totalExpenses;

  return {
    deposits,
    publicExpenses,
    contributions,
    personalCosts,
    sharedExpenseShares,
    liabilities,
    totalDeposits,
    totalExpenses,
    sharedExpenseTotal,
    balance
  };
}

function calculatePublicFundClosure(fund = calculatePublicFund()) {
  const needsTopUp = fund.balance < 0;
  const adjustmentShares = splitYenEvenly(Math.abs(fund.balance));
  const refundShares = Object.fromEntries(
    expenseMembers.map((member) => [member, fund.balance > 0 ? adjustmentShares[member] : 0])
  );
  const topUpShares = Object.fromEntries(
    expenseMembers.map((member) => [member, needsTopUp ? adjustmentShares[member] : 0])
  );
  const members = expenseMembers.map((member) => ({
    member,
    action: fund.liabilities[member] - fund.contributions[member],
    balance:
      fund.contributions[member]
      - fund.liabilities[member]
      - refundShares[member]
      + topUpShares[member]
  }));

  const creditor = members.find((item) => Number(item.balance) > 0);
  const debtor = members.find((item) => Number(item.balance) < 0);
  const settlementText =
    creditor && debtor
      ? `公帳差額：${debtor.member} 補 ${formatYen(Math.min(creditor.balance, Math.abs(debtor.balance)))} 給 ${creditor.member}`
      : "公帳投入已平衡";
  return { needsTopUp, refundShares, topUpShares, members, settlementText };
}

function calculateTripSettlement(expenses = loadExpenses()) {
  const directSharedExpenses = expenses.filter(
    (expense) => expense.split && expenseMembers.includes(expense.payer)
  );
  const total = sumAmounts(directSharedExpenses);
  const members = expenseMembers.map((member) => {
    const paid = sumAmounts(directSharedExpenses.filter((expense) => expense.payer === member));
    const share = directSharedExpenses.reduce((sum, expense) => {
      const otherShare = Math.floor(expense.amount / expenseMembers.length);
      return sum + (expense.payer === member ? expense.amount - otherShare : otherShare);
    }, 0);
    return { member, paid, share, balance: paid - share };
  });
  const creditor = members.find((item) => item.balance > 0);
  const debtor = members.find((item) => item.balance < 0);
  const settlementText =
    creditor && debtor
      ? `${debtor.member} 補 ${formatYen(Math.min(creditor.balance, Math.abs(debtor.balance)))} 給 ${creditor.member}`
      : "目前不用互補";
  return { total, members, settlementText };
}

function calculateOverallSettlement(expenses = loadExpenses(), deposits = loadPublicFundDeposits()) {
  const direct = calculateTripSettlement(expenses);
  const publicFund = calculatePublicFund(expenses, deposits);
  const publicClosure = calculatePublicFundClosure(publicFund);
  const members = expenseMembers.map((member) => {
    const directMember = direct.members.find((item) => item.member === member);
    const publicMember = publicClosure.members.find((item) => item.member === member);
    return {
      member,
      balance: directMember.balance + publicMember.balance
    };
  });
  const creditor = members.find((item) => item.balance > 0);
  const debtor = members.find((item) => item.balance < 0);
  const settlementText =
    creditor && debtor
      ? `${debtor.member} 最終補 ${formatYen(Math.min(creditor.balance, Math.abs(debtor.balance)))} 給 ${creditor.member}`
      : "整趟帳目已平衡";
  return { direct, publicFund, publicClosure, members, settlementText };
}

function getTripIsoDate(day) {
  const [month, date] = String(day.date).split("/").map(Number);
  return `${TRIP_YEAR}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
}

function getTodayIsoDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function getTodayTripDayKey() {
  const today = getTodayIsoDate();
  return tripDays.find((day) => getTripIsoDate(day) === today)?.key || "";
}

function getInitialActiveDayKey() {
  return getTodayTripDayKey() || tripDays[0]?.key || defaultDays[0].key;
}

function getActiveDay() {
  return tripDays.find((item) => item.key === state.activeDay) || tripDays[0];
}

function getDefaultDay(key) {
  return defaultDays.find((item) => item.key === key) || defaultDays[0];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function focusEditor(selector) {
  requestAnimationFrame(() => {
    const input = document.querySelector(selector);
    if (!input) return;
    input.focus();
    if (typeof input.select === "function") input.select();
  });
}

function swapItems(items, index, direction) {
  const target = index + direction;
  if (target < 0 || target >= items.length) return false;
  [items[index], items[target]] = [items[target], items[index]];
  return true;
}

function setTab(tabName) {
  state.activeTab = tabName;
  $all(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  $all(".view").forEach((view) => view.classList.toggle("active", view.id === tabName));
  if (tabName === "trip") renderTripWeather();
}

function syncEditButton() {
  const button = $("#editModeToggle");
  button.textContent = state.editMode ? "完成" : "編輯";
  button.classList.toggle("active-edit", state.editMode);
  button.setAttribute("aria-pressed", String(state.editMode));
}

function getMapSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function getMapDirectionsUrl(origin, destination, travelMode = "transit") {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: travelMode
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function getTicketMeta(day) {
  return itineraryTicketMeta[day.key] || {
    headline: day.title,
    from: "岡山",
    fromEn: "OKAYAMA",
    to: day.title,
    toEn: "DESTINATION"
  };
}

function getTripDayLabel(day) {
  const dayIndex = tripDays.findIndex((item) => item.key === day.key);
  return `DAY ${Math.max(0, dayIndex) + 1} / ${tripDays.length}`;
}

function renderWeatherIcon() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  `;
}

function renderItineraryHeader(day) {
  const header = $("#itineraryScreenHeader");
  if (!header) return;
  const meta = getTicketMeta(day);
  header.innerHTML = `
    <div>
      <p class="eyebrow">${escapeHtml(day.weekday)} · ${escapeHtml(day.date)} · ${escapeHtml(day.pass)}</p>
      <h2>${escapeHtml(meta.headline)}</h2>
    </div>
    <button class="current-weather" type="button" data-weather-compact-day="${escapeAttr(day.key)}" aria-label="更新${escapeAttr(weatherLocations[day.key]?.name || "目的地")}現在溫度">
      ${renderWeatherIcon()}
      <strong>--°</strong>
    </button>
  `;
  header.querySelector("[data-weather-compact-day]")?.addEventListener("click", () => loadWeather(day, true));
}

function renderDayTicket(day) {
  const meta = getTicketMeta(day);
  const firstTime = day.schedule[0]?.[0] || "--:--";
  const lastTime = day.schedule[day.schedule.length - 1]?.[0] || "--:--";
  return `
    <section class="route-ticket ${day.passCovered ? "pass-valid" : "self-paid"}" aria-label="${escapeAttr(meta.from)}到${escapeAttr(meta.to)}路線票券">
      <div class="route-ticket-topline">
        <span>${day.passCovered ? "JR-WEST AREA PASS" : "TRIP ROUTE"}</span>
        <span>${escapeHtml(getTripDayLabel(day))}</span>
      </div>
      <div class="route-ticket-route">
        <div><strong>${escapeHtml(meta.from)}</strong><small>${escapeHtml(meta.fromEn)}</small></div>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 12h16M15 7l5 5-5 5" /></svg>
        <div><strong>${escapeHtml(meta.to)}</strong><small>${escapeHtml(meta.toEn)}</small></div>
      </div>
      <div class="route-ticket-footer">
        <span>${escapeHtml(firstTime)}</span>
        <span>${escapeHtml(lastTime)}</span>
        <b>${day.passCovered ? "VALID" : "SELF"}</b>
      </div>
    </section>
  `;
}

function renderNextStopCard(day) {
  const nextStop = getNextScheduleStop(day);
  const time = day.schedule[nextStop.index]?.[0] || "未定";
  return `
    <section class="next-stop-card" aria-label="下一站">
      <div>
        <p>下一站 · 行程 ${nextStop.index + 1}/${day.schedule.length}</p>
        <strong>${escapeHtml(nextStop.text)}</strong>
        <small>${escapeHtml(time)}</small>
      </div>
      <a class="next-stop-action" href="${escapeAttr(nextStop.url)}" target="_blank" rel="noreferrer">導航</a>
    </section>
  `;
}

function renderScheduleMapButton(day, text, transport) {
  const mapLabel = transport?.from && transport?.to ? `${transport.from}到${transport.to}` : text;
  return `
    <a class="slot-map-link" href="${escapeAttr(getScheduleMapUrl(day, text, transport))}" target="_blank" rel="noreferrer" aria-label="導航${escapeAttr(mapLabel)}" title="${transport ? "交通導航" : "景點地圖"}">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15M15 6v15" /></svg>
    </a>
  `;
}

function renderScheduleHeading(day) {
  return `
    <div class="schedule-heading">
      <div><h3>今日行程</h3><span>${day.schedule.length} 個項目</span></div>
      <a href="${escapeAttr(getDayRouteUrl(day))}" target="_blank" rel="noreferrer">今日地圖</a>
    </div>
  `;
}

function getDayRouteUrl(day) {
  const stops = (dayMapQueries[day.key] || [[day.title, day.title]])
    .filter((item) => item[2] !== false)
    .map((item) => item[1]);
  if (stops.length <= 1) return getMapSearchUrl(stops[0]);

  const origin = stops[0];
  const destination = stops[stops.length - 1];
  const waypoints = stops.slice(1, -1).join("|");
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "transit"
  });
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function normalizeMapText(value) {
  return String(value || "")
    .replace(/[0-9０-９:：/／\-–—~～\s]/g, "")
    .replace(/[，。；、,.()（）]/g, "")
    .toLowerCase();
}

function getScheduleSearchQuery(day, text) {
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();
  const normalizedText = normalizeMapText(cleanText);
  const candidates = dayMapQueries[day.key] || [];
  const match = candidates.find(([label]) => {
    const normalizedLabel = normalizeMapText(label);
    return normalizedLabel && (normalizedText.includes(normalizedLabel) || normalizedLabel.includes(normalizedText.slice(0, 6)));
  });
  if (match) return match[1];

  return `${cleanText} ${day.title}`.trim();
}

function getScheduleMapUrl(day, text, transport) {
  if (transport?.from && transport?.to) {
    return getMapDirectionsUrl(transport.from, transport.to, transport.travelMode || "transit");
  }
  return getMapSearchUrl(getScheduleSearchQuery(day, text));
}

function parseScheduleStartMinutes(time) {
  const match = String(time || "").match(/(\d{1,2})[:：](\d{2})/);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

function getNextScheduleStop(day) {
  const fallback = day.schedule[0] || ["", day.title];
  const isToday = getTripIsoDate(day) === getTodayIsoDate();
  if (!isToday) {
    return { index: 0, text: fallback[1], url: getScheduleMapUrl(day, fallback[1], fallback[2]) };
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const index = day.schedule.findIndex(([time]) => {
    const start = parseScheduleStartMinutes(time);
    return start !== null && start >= currentMinutes - 10;
  });
  const scheduleIndex = index >= 0 ? index : Math.max(0, day.schedule.length - 1);
  const item = day.schedule[scheduleIndex] || fallback;
  return { index: scheduleIndex, text: item[1], url: getScheduleMapUrl(day, item[1], item[2]) };
}

function renderDayMapLinks(day) {
  const links = dayMapQueries[day.key] || [[day.title, day.title]];
  return `
    <section class="map-panel" aria-label="${escapeAttr(day.title)}景點地圖">
      <div class="map-panel-heading">
        <h3>景點地圖</h3>
        <span>${links.length} 個點</span>
      </div>
      <div class="map-chip-list">
        ${links
          .map(
            ([label, query]) => `
              <a class="map-chip" href="${escapeAttr(getMapSearchUrl(query))}" target="_blank" rel="noreferrer">
                ${escapeHtml(label)}
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWeatherPanel(day) {
  const location = weatherLocations[day.key];
  if (!location) return "";

  return `
    <section class="weather-panel" id="tripWeatherPanel" data-weather-day="${escapeAttr(day.key)}">
      <div>
        <h3>${escapeHtml(location.name)}天氣</h3>
        <p class="meta">讀取溫度中...</p>
      </div>
      <button class="text-button weather-refresh" type="button" data-refresh-weather>更新</button>
    </section>
  `;
}

function renderTripWeather() {
  const host = $("#tripWeatherHost");
  const day = getActiveDay();
  if (!host || !day) return;
  host.innerHTML = renderWeatherPanel(day);
  loadWeather(day);
}

function getWeatherLabel(code) {
  return weatherCodeLabels[Number(code)] || "天氣更新";
}

function getWeatherCacheKey(day) {
  return `${day.key}:${getTripIsoDate(day)}`;
}

function getCachedWeather(day) {
  const cache = readJson(STORAGE_KEYS.weather, {});
  const item = cache[getWeatherCacheKey(day)];
  if (!item || !item.data || !item.savedAt) return null;
  return item;
}

function saveWeatherCache(day, data) {
  const cache = readJson(STORAGE_KEYS.weather, {});
  cache[getWeatherCacheKey(day)] = {
    savedAt: new Date().toISOString(),
    data
  };
  writeJson(STORAGE_KEYS.weather, cache);
}

function isFreshWeatherCache(item) {
  return Date.now() - new Date(item.savedAt).getTime() < 30 * 60 * 1000;
}

function renderWeatherData(day, data, stale = false) {
  const panel = document.querySelector(`[data-weather-day="${escapeAttr(day.key)}"]`);
  const location = weatherLocations[day.key];
  const current = data.current || {};
  const daily = data.daily || {};
  const dailyIndex = Array.isArray(daily.time) ? daily.time.indexOf(getTripIsoDate(day)) : -1;
  const hasDaily = dailyIndex >= 0;
  const temp = Number.isFinite(Number(current.temperature_2m)) ? `${Math.round(Number(current.temperature_2m))}°C` : "--";
  const apparent = Number.isFinite(Number(current.apparent_temperature)) ? `${Math.round(Number(current.apparent_temperature))}°C` : "--";
  const humidity = Number.isFinite(Number(current.relative_humidity_2m)) ? `${Math.round(Number(current.relative_humidity_2m))}%` : "--";
  const rain = Number.isFinite(Number(current.precipitation)) ? `${Number(current.precipitation).toFixed(1)}mm` : "--";
  const dailyMin = Number(daily.temperature_2m_min?.[dailyIndex]);
  const dailyMax = Number(daily.temperature_2m_max?.[dailyIndex]);
  const dailyRain = daily.precipitation_probability_max?.[dailyIndex] ?? "--";
  const dailyText = hasDaily
    ? `${Number.isFinite(dailyMin) ? Math.round(dailyMin) : "--"}-${Number.isFinite(dailyMax) ? Math.round(dailyMax) : "--"}°C / 降雨 ${dailyRain}%`
    : "行程日前 16 天內會顯示當日預報";

  const compact = document.querySelector(`[data-weather-compact-day="${escapeAttr(day.key)}"]`);
  if (compact) {
    compact.innerHTML = `${renderWeatherIcon()}<strong>${escapeHtml(temp.replace("C", ""))}</strong>`;
    compact.title = `${location.name}現在 ${temp}，${getWeatherLabel(current.weather_code)}${stale ? "（快取）" : ""}`;
  }

  if (!panel) return;

  panel.innerHTML = `
    <div>
      <h3>${escapeHtml(location.name)}天氣</h3>
      <div class="weather-grid">
        <div><span>現在</span><strong>${escapeHtml(temp)}</strong><small>${escapeHtml(getWeatherLabel(current.weather_code))}</small></div>
        <div><span>體感</span><strong>${escapeHtml(apparent)}</strong><small>濕度 ${escapeHtml(humidity)}</small></div>
        <div><span>${escapeHtml(day.date)} 預報</span><strong>${escapeHtml(dailyText)}</strong><small>目前雨量 ${escapeHtml(rain)}</small></div>
      </div>
      <p class="meta">資料來源 Open-Meteo${stale ? "，目前顯示快取資料" : ""}</p>
    </div>
    <button class="text-button weather-refresh" type="button" data-refresh-weather>更新</button>
  `;
  panel.querySelector("[data-refresh-weather]").addEventListener("click", () => loadWeather(day, true));
}

function renderWeatherError(day, message) {
  const panel = document.querySelector(`[data-weather-day="${escapeAttr(day.key)}"]`);
  const location = weatherLocations[day.key];
  const compact = document.querySelector(`[data-weather-compact-day="${escapeAttr(day.key)}"]`);
  if (compact) {
    compact.innerHTML = `${renderWeatherIcon()}<strong>--°</strong>`;
    compact.title = message;
  }
  if (!panel) return;
  panel.innerHTML = `
    <div>
      <h3>${escapeHtml(location.name)}天氣</h3>
      <p class="meta">${escapeHtml(message)}</p>
    </div>
    <button class="text-button weather-refresh" type="button" data-refresh-weather>重試</button>
  `;
  panel.querySelector("[data-refresh-weather]").addEventListener("click", () => loadWeather(day, true));
}

async function loadWeather(day, force = false) {
  const location = weatherLocations[day.key];
  if (!location) return;

  const cached = getCachedWeather(day);
  if (!force && cached && isFreshWeatherCache(cached)) {
    renderWeatherData(day, cached.data);
    return;
  }

  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", String(location.latitude));
    url.searchParams.set("longitude", String(location.longitude));
    url.searchParams.set("current", "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m");
    url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code");
    url.searchParams.set("timezone", "Asia/Tokyo");
    url.searchParams.set("forecast_days", "16");

    const response = await fetch(url);
    if (!response.ok) throw new Error("weather fetch failed");
    const data = await response.json();
    saveWeatherCache(day, data);
    renderWeatherData(day, data);
  } catch {
    if (cached) {
      renderWeatherData(day, cached.data, true);
      return;
    }
    renderWeatherError(day, "目前無法取得天氣；有網路時可以再更新。");
  }
}

function renderDayNav() {
  const nav = $("#dayNav");
  const todayKey = getTodayTripDayKey();
  nav.innerHTML = tripDays
    .map(
      (day) => `
      <button class="day-button ${day.key === state.activeDay ? "active" : ""} ${day.key === todayKey ? "today" : ""}" type="button" data-day="${escapeAttr(day.key)}">
        <strong>${escapeHtml(day.date.split("/")[1])}</strong>
        <span>${escapeHtml(day.weekday)}</span>
        <span class="day-destination">${escapeHtml(day.title)}</span>
        ${day.key === todayKey ? `<span class="today-marker">今天</span>` : ""}
      </button>`
    )
    .join("");

  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDay = button.dataset.day;
      renderDayNav();
      renderDayDetail();
    });
  });
}

function renderScheduleCopy(text, transport) {
  if (!transport) return `<div class="schedule-copy">${escapeHtml(text)}</div>`;

  return `
    <div class="transport-copy">
      <div class="transport-heading">
        <span class="transport-mode">${escapeHtml(transport.mode || "交通")}</span>
        <strong>${escapeHtml(transport.from || "")}<span aria-hidden="true"> → </span>${escapeHtml(transport.to || "")}</strong>
      </div>
      <span>${escapeHtml(text)}</span>
      ${transport.note ? `<small>${escapeHtml(transport.note)}</small>` : ""}
    </div>
  `;
}

function renderTransportEditor(transport, index) {
  if (!transport) return "";

  return `
    <div class="transport-editor">
      <label>
        <span>交通種類</span>
        <input type="text" value="${escapeAttr(transport.mode || "")}" data-schedule-transport="mode" data-index="${index}" />
      </label>
      <label>
        <span>上車／起點</span>
        <input type="text" value="${escapeAttr(transport.from || "")}" data-schedule-transport="from" data-index="${index}" />
      </label>
      <label>
        <span>下車／終點</span>
        <input type="text" value="${escapeAttr(transport.to || "")}" data-schedule-transport="to" data-index="${index}" />
      </label>
      <label class="transport-note-field">
        <span>月台／轉乘提醒</span>
        <input type="text" value="${escapeAttr(transport.note || "")}" data-schedule-transport="note" data-index="${index}" />
      </label>
    </div>
  `;
}

function renderDayDetail() {
  const day = getActiveDay();
  const detail = $("#dayDetail");
  renderItineraryHeader(day);

  if (!state.editMode) {
    detail.innerHTML = `
      ${renderDayTicket(day)}
      ${renderNextStopCard(day)}
      ${renderScheduleHeading(day)}
      <div class="schedule">
        ${day.schedule
          .map(
            ([time, text, transport], index) => `
            <div class="slot ${index === getNextScheduleStop(day).index ? "next-slot" : ""}">
              <time>${escapeHtml(time)}</time>
              <div class="slot-main">
                ${renderScheduleCopy(text, transport)}
                ${renderScheduleMapButton(day, text, transport)}
              </div>
            </div>`
          )
          .join("")}
      </div>
      ${renderDayMapLinks(day)}
      <div class="detail-grid">
        ${renderCleanInfoBlock("動線", day.route)}
        ${renderCleanInfoBlock("餐食", day.meals)}
        ${renderCleanInfoBlock("備案", day.backup)}
      </div>
    `;
    loadWeather(day);
    if (state.activeTab === "trip") renderTripWeather();
    return;
  }

  detail.innerHTML = `
    ${renderDayTicket(day)}
    <div class="edit-toolbar">
      <button class="text-button" type="button" data-add-schedule>新增行程</button>
      <button class="text-button" type="button" data-add-list="meals">新增餐廳</button>
      <button class="text-button" type="button" data-add-list="backup">新增景點/備案</button>
      <button class="text-button subtle" type="button" data-reset-day>還原本日</button>
    </div>
    ${renderScheduleHeading(day)}
    <div class="schedule editable-schedule">
      ${day.schedule
        .map(
          ([time, text, transport], index) => `
          <div class="slot editable-slot" data-schedule-row="${index}">
            <div class="slot-fields">
              <label>
                <span>時間</span>
                <input class="time-input" type="text" value="${escapeAttr(time)}" data-schedule-field="time" data-index="${index}" />
              </label>
              <label>
                <span>內容</span>
                <textarea class="item-input" rows="2" data-schedule-field="text" data-index="${index}">${escapeHtml(text)}</textarea>
              </label>
              ${renderTransportEditor(transport, index)}
            </div>
            <div class="row-actions">
              ${renderMoveButton("schedule", index, -1, "上移", index === 0)}
              ${renderMoveButton("schedule", index, 1, "下移", index === day.schedule.length - 1)}
              <button class="mini-button danger" type="button" data-delete-schedule="${index}" aria-label="刪除行程" title="刪除">×</button>
            </div>
          </div>`
        )
        .join("")}
    </div>
    ${renderDayMapLinks(day)}
    <div class="detail-grid">
      ${renderInfoBlock("動線", day.route, "route")}
      ${renderInfoBlock("餐食", day.meals, "meals")}
      ${renderInfoBlock("備案", day.backup, "backup")}
    </div>
  `;

  bindDayEditor(day);
  loadWeather(day);
}

function renderCleanInfoBlock(title, items) {
  return `
    <section class="info-block">
      <h3>${escapeHtml(title)}</h3>
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderMoveButton(type, index, direction, label, disabled) {
  return `
    <button
      class="mini-button"
      type="button"
      data-move-${type}="${index}"
      data-direction="${direction}"
      aria-label="${label}"
      title="${label}"
      ${disabled ? "disabled" : ""}
    >${direction < 0 ? "↑" : "↓"}</button>
  `;
}

function renderInfoBlock(title, items, field) {
  return `
    <section class="info-block" data-list-block="${field}">
      <div class="info-heading">
        <h3>${escapeHtml(title)}</h3>
        <button class="mini-button add" type="button" data-add-list="${field}" aria-label="新增${escapeAttr(title)}" title="新增">＋</button>
      </div>
      <div class="editable-list">
        ${items
          .map(
            (item, index) => `
            <div class="list-row">
              <input class="item-input" type="text" value="${escapeAttr(item)}" data-list-field="${field}" data-index="${index}" />
              <div class="row-actions">
                ${renderMoveButton("list", index, -1, "上移", index === 0).replace(`data-move-list="${index}"`, `data-move-list="${field}:${index}"`)}
                ${renderMoveButton("list", index, 1, "下移", index === items.length - 1).replace(`data-move-list="${index}"`, `data-move-list="${field}:${index}"`)}
                <button class="mini-button danger" type="button" data-delete-list="${field}:${index}" aria-label="刪除${escapeAttr(title)}" title="刪除">×</button>
              </div>
            </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function bindDayEditor(day) {
  const detail = $("#dayDetail");

  detail.querySelector("[data-add-schedule]").addEventListener("click", () => {
    day.schedule.push(["", ""]);
    saveTripDays(day.key, true);
    renderDayDetail();
    focusEditor(`[data-schedule-field="time"][data-index="${day.schedule.length - 1}"]`);
  });

  detail.querySelector("[data-reset-day]").addEventListener("click", () => {
    if (!confirm("還原本日行程？這會刪除本日的手機本機修改。")) return;
    const dayIndex = tripDays.findIndex((item) => item.key === day.key);
    tripDays[dayIndex] = clone(getDefaultDay(day.key));
    saveTripDays(day.key, true);
    renderDayNav();
    renderDayDetail();
  });

  detail.querySelectorAll("[data-schedule-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.index);
      const fieldIndex = input.dataset.scheduleField === "time" ? 0 : 1;
      day.schedule[index][fieldIndex] = input.value;
      saveTripDays(day.key);
    });
  });

  detail.querySelectorAll("[data-schedule-transport]").forEach((input) => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.index);
      const field = input.dataset.scheduleTransport;
      if (!day.schedule[index][2]) day.schedule[index][2] = {};
      day.schedule[index][2][field] = input.value;
      saveTripDays(day.key);
    });
  });

  detail.querySelectorAll("[data-delete-schedule]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!confirm("刪除這個行程項目？")) return;
      day.schedule.splice(Number(button.dataset.deleteSchedule), 1);
      saveTripDays(day.key, true);
      renderDayDetail();
    });
  });

  detail.querySelectorAll("[data-move-schedule]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.moveSchedule);
      const direction = Number(button.dataset.direction);
      if (swapItems(day.schedule, index, direction)) {
        saveTripDays(day.key, true);
        renderDayDetail();
      }
    });
  });

  detail.querySelectorAll("[data-add-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.addList;
      day[field].push("");
      saveTripDays(day.key, true);
      renderDayDetail();
      focusEditor(`[data-list-field="${field}"][data-index="${day[field].length - 1}"]`);
    });
  });

  detail.querySelectorAll("[data-list-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const field = input.dataset.listField;
      const index = Number(input.dataset.index);
      day[field][index] = input.value;
      saveTripDays(day.key);
    });
  });

  detail.querySelectorAll("[data-delete-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const [field, rawIndex] = button.dataset.deleteList.split(":");
      if (!confirm("刪除這個項目？")) return;
      day[field].splice(Number(rawIndex), 1);
      saveTripDays(day.key, true);
      renderDayDetail();
    });
  });

  detail.querySelectorAll("[data-move-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const [field, rawIndex] = button.dataset.moveList.split(":");
      const direction = Number(button.dataset.direction);
      if (swapItems(day[field], Number(rawIndex), direction)) {
        saveTripDays(day.key, true);
        renderDayDetail();
      }
    });
  });
}

function loadShoppingList() {
  const saved = readJson(STORAGE_KEYS.shopping, []);
  if (!Array.isArray(saved)) return [];
  const items = saved
    .map((item, index) => {
      if (typeof item === "string") {
        return { id: `legacy-${index}`, name: item.trim(), done: false, image: "" };
      }
      const image = String(item?.image || "");
      return {
        id: String(item?.id || `item-${index}`),
        name: String(item?.name || "").trim(),
        done: Boolean(item?.done),
        image: image.startsWith("./assets/shopping/") ? image : ""
      };
    })
    .filter((item) => item.name);

  if (localStorage.getItem(STORAGE_KEYS.shoppingSeed) !== "1") {
    [...bundledShoppingItems].reverse().forEach((bundledItem) => {
      const exists = items.some((item) => item.id === bundledItem.id || item.name === bundledItem.name);
      if (!exists) items.unshift({ ...bundledItem, done: false });
    });
    saveShoppingList(items);
    localStorage.setItem(STORAGE_KEYS.shoppingSeed, "1");
  }

  return items;
}

function saveShoppingList(items) {
  writeJson(STORAGE_KEYS.shopping, items);
}

function getBundledShoppingImage(id, name) {
  return bundledShoppingItems.find((item) => item.id === id || item.name === name)?.image || "";
}

function setShoppingSyncMessage(message, isError = false) {
  const element = $("#shoppingSyncMessage");
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function renderShoppingSyncState(message = "") {
  const sync = state.shoppingSync;
  const panel = $("#shoppingSyncPanel");
  if (!panel) return;

  panel.classList.toggle("is-connected", sync.connected);
  $("#shoppingSyncTitle").textContent = sync.connected ? `${sync.identity} 同步中` : sync.available ? "同步未登入" : "本機模式";
  $("#shoppingSyncMeta").textContent = sync.connected
    ? sync.pending
      ? `${sync.pending} 筆等待同步`
      : "旅行資料已同步"
    : sync.available
      ? "XUN／UT 共用旅行資料"
      : "這支手機上的旅行資料";

  $("#shoppingSyncFields").hidden = sync.connected;
  $("#shoppingSyncPasswordToggle").hidden = sync.connected;
  $("#shoppingSyncLogin").hidden = sync.connected;
  $("#shoppingSyncLogout").hidden = !sync.connected;

  const disabled = !sync.available || sync.connected;
  $("#shoppingSyncIdentity").disabled = disabled;
  $("#shoppingSyncPassword").disabled = disabled;
  $("#shoppingSyncShowPassword").disabled = disabled;
  $("#shoppingSyncLogin").disabled = disabled;

  const ledgerSyncLabel = $("#expenseSummary .ledger-ticket-topline span:last-child");
  if (ledgerSyncLabel) {
    ledgerSyncLabel.textContent = sync.connected ? `${sync.identity} SYNC` : "LOCAL";
  }

  if (message) {
    setShoppingSyncMessage(message);
  } else if (sync.connected) {
    setShoppingSyncMessage(sync.pending ? "變更會在恢復網路後送出" : "Firestore 即時同步");
  } else if (sync.available) {
    setShoppingSyncMessage("登入後會先合併這支手機的購物、記帳、行程與備忘錄");
  } else {
    setShoppingSyncMessage("同步尚未設定，旅行資料仍可離線使用");
  }
}

function disconnectShoppingSubscription() {
  const sync = state.shoppingSync;
  sync.unsubscribe?.();
  sync.expenseUnsubscribe?.();
  sync.publicFundUnsubscribe?.();
  sync.itineraryUnsubscribe?.();
  sync.memoUnsubscribe?.();
  sync.unsubscribe = null;
  sync.expenseUnsubscribe = null;
  sync.publicFundUnsubscribe = null;
  sync.itineraryUnsubscribe = null;
  sync.memoUnsubscribe = null;
  sync.deferredItineraryPayloads.clear();
  sync.deferredMemoText = null;
  sync.pending = 0;
  Object.keys(sync.pendingScopes).forEach((scope) => {
    sync.pendingScopes[scope] = 0;
  });
}

function cloudShoppingItem(itemDoc) {
  const data = itemDoc.data();
  const id = itemDoc.id;
  const name = String(data.text || "").trim();
  return {
    id,
    name,
    done: Boolean(data.done),
    image: getBundledShoppingImage(id, name)
  };
}

function safeCloudDocumentId(id) {
  return String(id).replaceAll("/", "_").slice(0, 120);
}

function localCreatedAtMillis(value) {
  const parsed = Date.parse(String(value || ""));
  return Number.isFinite(parsed) ? parsed : Date.now();
}

function cloudCreatedAtIso(value) {
  const millis =
    typeof value === "number"
      ? value
      : typeof value?.toMillis === "function"
        ? value.toMillis()
        : Date.now();
  return new Date(millis).toISOString();
}

function updateSyncPendingScope(scope, snapshot) {
  const sync = state.shoppingSync;
  const pendingDocuments = snapshot.docs.filter((itemDoc) => itemDoc.metadata.hasPendingWrites).length;
  sync.pendingScopes[scope] = snapshot.metadata.hasPendingWrites ? Math.max(1, pendingDocuments) : 0;
  sync.pending = Object.values(sync.pendingScopes).reduce((sum, count) => sum + count, 0);
}

function cloudExpense(expenseDoc) {
  const data = expenseDoc.data();
  const payer = normalizeExpensePayer(data.payer);
  const split = Boolean(data.split);
  return {
    id: expenseDoc.id,
    date: String(data.date || tripDays[0]?.date || ""),
    category: expenseCategories.includes(data.category) ? data.category : "其他",
    payer,
    split,
    owner: split ? "" : normalizeExpenseMember(data.owner || payer),
    amount: Math.round(Number(data.amount)) || 0,
    name: String(data.name || "").trim(),
    note: String(data.note || "").trim(),
    createdAt: cloudCreatedAtIso(data.createdAt)
  };
}

function cloudPublicFundDeposit(depositDoc) {
  const data = depositDoc.data();
  return {
    id: depositDoc.id,
    date: String(data.date || tripDays[0]?.date || ""),
    member: normalizeExpenseMember(data.member),
    amount: Math.round(Number(data.amount)) || 0,
    note: String(data.note || "").trim(),
    createdAt: cloudCreatedAtIso(data.createdAt)
  };
}

function loadItinerarySyncDirtyKeys() {
  const saved = readJson(STORAGE_KEYS.itinerarySyncDirty, []);
  return new Set(Array.isArray(saved) ? saved.filter((key) => defaultDays.some((day) => day.key === key)) : []);
}

function markItinerarySyncDirty(dayKey) {
  if (!defaultDays.some((day) => day.key === dayKey)) return;
  const dirtyKeys = loadItinerarySyncDirtyKeys();
  dirtyKeys.add(dayKey);
  writeJson(STORAGE_KEYS.itinerarySyncDirty, [...dirtyKeys]);
}

function clearItinerarySyncDirty(dayKey) {
  const dirtyKeys = loadItinerarySyncDirtyKeys();
  dirtyKeys.delete(dayKey);
  if (dirtyKeys.size) {
    writeJson(STORAGE_KEYS.itinerarySyncDirty, [...dirtyKeys]);
  } else {
    localStorage.removeItem(STORAGE_KEYS.itinerarySyncDirty);
  }
}

function setMemoSyncDirty(isDirty) {
  if (isDirty) {
    localStorage.setItem(STORAGE_KEYS.memoSyncDirty, "1");
  } else {
    localStorage.removeItem(STORAGE_KEYS.memoSyncDirty);
  }
}

function buildItinerarySyncPayload(day) {
  return JSON.stringify({
    schedule: day.schedule,
    route: day.route,
    meals: day.meals,
    backup: day.backup
  });
}

function sanitizeSyncedTransport(transport) {
  if (!transport || typeof transport !== "object" || Array.isArray(transport)) return undefined;
  const sanitized = {};
  ["mode", "from", "to", "note", "travelMode"].forEach((field) => {
    if (field in transport) sanitized[field] = String(transport[field] || "").slice(0, 1000);
  });
  return Object.keys(sanitized).length ? sanitized : undefined;
}

function applyItinerarySyncPayload(dayKey, payload) {
  const dayIndex = tripDays.findIndex((day) => day.key === dayKey);
  if (dayIndex < 0) return false;

  let parsed;
  try {
    parsed = JSON.parse(String(payload || ""));
  } catch {
    return false;
  }
  if (
    !parsed
    || !Array.isArray(parsed.schedule)
    || !Array.isArray(parsed.route)
    || !Array.isArray(parsed.meals)
    || !Array.isArray(parsed.backup)
  ) {
    return false;
  }

  const schedule = parsed.schedule
    .filter((item) => Array.isArray(item) && item.length >= 2)
    .map((item) => {
      const syncedItem = [String(item[0] || "").slice(0, 1000), String(item[1] || "").slice(0, 5000)];
      const transport = sanitizeSyncedTransport(item[2]);
      if (transport) syncedItem.push(transport);
      return syncedItem;
    });
  const stringList = (items) => items.map((item) => String(item || "").slice(0, 5000));

  tripDays[dayIndex] = {
    ...tripDays[dayIndex],
    schedule,
    route: stringList(parsed.route),
    meals: stringList(parsed.meals),
    backup: stringList(parsed.backup)
  };
  return true;
}

function updateDocumentSyncPendingScope(scope, snapshot) {
  const sync = state.shoppingSync;
  sync.pendingScopes[scope] = snapshot.metadata.hasPendingWrites ? 1 : 0;
  sync.pending = Object.values(sync.pendingScopes).reduce((sum, count) => sum + count, 0);
}

async function migrateShoppingListToCloud() {
  if (localStorage.getItem(STORAGE_KEYS.shoppingSyncMigration) === "1") return;
  const sync = state.shoppingSync;
  const { getDocsFromServer, setDoc, doc, serverTimestamp } = sync.services;
  const cloudSnapshot = await getDocsFromServer(sync.itemsRef);
  const cloudIds = new Set(cloudSnapshot.docs.map((itemDoc) => itemDoc.id));
  const cloudNames = new Set(cloudSnapshot.docs.map((itemDoc) => String(itemDoc.data().text || "").trim()));
  const localItems = loadShoppingList();
  const createdAt = Date.now();

  const missingItems = localItems.filter((item) => !cloudIds.has(item.id) && !cloudNames.has(item.name));
  await Promise.all(
    missingItems.map((item, index) =>
      setDoc(doc(sync.itemsRef, safeCloudDocumentId(item.id)), {
        text: item.name,
        done: item.done,
        createdAt: createdAt + index,
        updatedAt: serverTimestamp(),
        updatedBy: sync.identity
      })
    )
  );
  localStorage.setItem(STORAGE_KEYS.shoppingSyncMigration, "1");
}

async function migrateLedgerToCloud() {
  if (localStorage.getItem(STORAGE_KEYS.ledgerSyncMigration) === "1") return;
  const sync = state.shoppingSync;
  const { doc, getDocsFromServer, serverTimestamp, setDoc } = sync.services;
  const [expenseSnapshot, publicFundSnapshot] = await Promise.all([
    getDocsFromServer(sync.expensesRef),
    getDocsFromServer(sync.publicFundRef)
  ]);
  const cloudExpenseIds = new Set(expenseSnapshot.docs.map((expenseDoc) => expenseDoc.id));
  const cloudDepositIds = new Set(publicFundSnapshot.docs.map((depositDoc) => depositDoc.id));
  const missingExpenses = loadExpenses().filter((expense) => !cloudExpenseIds.has(safeCloudDocumentId(expense.id)));
  const missingDeposits = loadPublicFundDeposits().filter(
    (deposit) => !cloudDepositIds.has(safeCloudDocumentId(deposit.id))
  );

  await Promise.all([
    ...missingExpenses.map((expense) =>
      setDoc(doc(sync.expensesRef, safeCloudDocumentId(expense.id)), {
        date: expense.date,
        category: expense.category,
        payer: expense.payer,
        split: expense.split,
        owner: expense.owner,
        amount: expense.amount,
        name: expense.name,
        note: expense.note,
        createdAt: localCreatedAtMillis(expense.createdAt),
        updatedAt: serverTimestamp(),
        updatedBy: sync.identity
      })
    ),
    ...missingDeposits.map((deposit) =>
      setDoc(doc(sync.publicFundRef, safeCloudDocumentId(deposit.id)), {
        date: deposit.date,
        member: deposit.member,
        amount: deposit.amount,
        note: deposit.note,
        createdAt: localCreatedAtMillis(deposit.createdAt),
        updatedAt: serverTimestamp(),
        updatedBy: sync.identity
      })
    )
  ]);
  localStorage.setItem(STORAGE_KEYS.ledgerSyncMigration, "1");
}

async function migrateContentToCloud() {
  const sync = state.shoppingSync;
  const { doc, getDocFromServer, getDocsFromServer, serverTimestamp, setDoc } = sync.services;
  const [itinerarySnapshot, memoSnapshot] = await Promise.all([
    getDocsFromServer(sync.itineraryRef),
    getDocFromServer(sync.memoRef)
  ]);
  const cloudDayKeys = new Set(itinerarySnapshot.docs.map((dayDoc) => dayDoc.id));
  const dirtyDayKeys = loadItinerarySyncDirtyKeys();
  const dayWrites = tripDays
    .filter((day) => !cloudDayKeys.has(day.key) || dirtyDayKeys.has(day.key))
    .map((day) => {
      const payload = buildItinerarySyncPayload(day);
      return setDoc(doc(sync.itineraryRef, day.key), {
        payload,
        updatedAt: serverTimestamp(),
        updatedBy: sync.identity
      }).then(() => {
        const currentDay = tripDays.find((item) => item.key === day.key);
        if (currentDay && buildItinerarySyncPayload(currentDay) === payload) {
          clearItinerarySyncDirty(day.key);
        }
      });
    });

  const memoText = String(localStorage.getItem(STORAGE_KEYS.memo) || "").slice(0, 5000);
  const shouldWriteMemo = !memoSnapshot.exists() || localStorage.getItem(STORAGE_KEYS.memoSyncDirty) === "1";
  const memoWrite = shouldWriteMemo
    ? setDoc(sync.memoRef, {
        text: memoText,
        updatedAt: serverTimestamp(),
        updatedBy: sync.identity
      }).then(() => {
        if (String(localStorage.getItem(STORAGE_KEYS.memo) || "").slice(0, 5000) === memoText) {
          setMemoSyncDirty(false);
        }
      })
    : Promise.resolve();

  await Promise.all([...dayWrites, memoWrite]);
  localStorage.setItem(STORAGE_KEYS.contentSyncMigration, "1");
}

function subscribeShoppingList() {
  const sync = state.shoppingSync;
  const { onSnapshot, orderBy, query } = sync.services;
  disconnectShoppingSubscription();
  sync.unsubscribe = onSnapshot(
    query(sync.itemsRef, orderBy("createdAt", "asc")),
    { includeMetadataChanges: true },
    (snapshot) => {
      const items = snapshot.docs.map(cloudShoppingItem).filter((item) => item.name);
      updateSyncPendingScope("shopping", snapshot);
      saveShoppingList(items);
      renderShoppingList();
      renderShoppingSyncState();
    },
    (error) => {
      setShoppingSyncMessage(`同步讀取失敗：${error.code || error.message}`, true);
    }
  );
}

function subscribeLedger() {
  const sync = state.shoppingSync;
  const { onSnapshot, orderBy, query } = sync.services;
  sync.expenseUnsubscribe?.();
  sync.publicFundUnsubscribe?.();

  sync.expenseUnsubscribe = onSnapshot(
    query(sync.expensesRef, orderBy("createdAt", "desc")),
    { includeMetadataChanges: true },
    (snapshot) => {
      const expenses = snapshot.docs.map(cloudExpense).filter((expense) => expense.amount > 0 && expense.name);
      updateSyncPendingScope("expenses", snapshot);
      saveExpenses(expenses);
      renderExpenses();
      renderPublicFund();
      renderShoppingSyncState();
    },
    (error) => {
      setShoppingSyncMessage(`記帳同步讀取失敗：${error.code || error.message}`, true);
    }
  );

  sync.publicFundUnsubscribe = onSnapshot(
    query(sync.publicFundRef, orderBy("createdAt", "desc")),
    { includeMetadataChanges: true },
    (snapshot) => {
      const deposits = snapshot.docs.map(cloudPublicFundDeposit).filter((deposit) => deposit.amount > 0);
      updateSyncPendingScope("publicFund", snapshot);
      savePublicFundDeposits(deposits);
      renderPublicFund();
      renderExpenses();
      renderShoppingSyncState();
    },
    (error) => {
      setShoppingSyncMessage(`公帳同步讀取失敗：${error.code || error.message}`, true);
    }
  );
}

function subscribeContent() {
  const sync = state.shoppingSync;
  const { onSnapshot } = sync.services;
  sync.itineraryUnsubscribe?.();
  sync.memoUnsubscribe?.();

  sync.itineraryUnsubscribe = onSnapshot(
    sync.itineraryRef,
    { includeMetadataChanges: true },
    (snapshot) => {
      updateSyncPendingScope("itinerary", snapshot);
      const dirtyDayKeys = loadItinerarySyncDirtyKeys();
      const activeEditorHasFocus =
        state.editMode && $("#dayDetail")?.contains(document.activeElement);
      let changed = false;

      snapshot.docs.forEach((dayDoc) => {
        if (dayDoc.metadata.hasPendingWrites || dirtyDayKeys.has(dayDoc.id)) return;
        if (activeEditorHasFocus && dayDoc.id === state.activeDay) {
          sync.deferredItineraryPayloads.set(dayDoc.id, dayDoc.data().payload);
          return;
        }
        sync.deferredItineraryPayloads.delete(dayDoc.id);
        if (applyItinerarySyncPayload(dayDoc.id, dayDoc.data().payload)) changed = true;
      });

      if (changed) {
        writeJson(STORAGE_KEYS.itinerary, tripDays);
        renderDayNav();
        renderDayDetail();
      }
      renderShoppingSyncState();
    },
    (error) => {
      setShoppingSyncMessage(`行程同步讀取失敗：${error.code || error.message}`, true);
    }
  );

  sync.memoUnsubscribe = onSnapshot(
    sync.memoRef,
    { includeMetadataChanges: true },
    (snapshot) => {
      updateDocumentSyncPendingScope("memo", snapshot);
      const memo = $("#tripMemo");
      if (
        snapshot.exists()
        && !snapshot.metadata.hasPendingWrites
        && localStorage.getItem(STORAGE_KEYS.memoSyncDirty) !== "1"
      ) {
        const remoteText = String(snapshot.data().text || "").slice(0, 5000);
        if (memo && document.activeElement === memo) {
          sync.deferredMemoText = remoteText;
        } else {
          localStorage.setItem(STORAGE_KEYS.memo, remoteText);
          if (memo) memo.value = remoteText;
          sync.deferredMemoText = null;
        }
      }
      renderShoppingSyncState();
    },
    (error) => {
      setShoppingSyncMessage(`備忘錄同步讀取失敗：${error.code || error.message}`, true);
    }
  );
}

async function connectShoppingSyncUser(user) {
  const sync = state.shoppingSync;
  const identity = Object.entries(sync.users).find(([, email]) => email === user.email)?.[0];
  if (!identity) {
    await sync.services.signOut(sync.services.auth);
    setShoppingSyncMessage("這個帳號沒有購物清單權限", true);
    return;
  }

  sync.identity = identity;
  sync.connected = true;
  renderShoppingSyncState("正在載入共用旅行資料");

  const migrations = await Promise.allSettled([
    migrateShoppingListToCloud(),
    migrateLedgerToCloud(),
    migrateContentToCloud()
  ]);
  const failedMigration = migrations.find((result) => result.status === "rejected");
  if (failedMigration) {
    setShoppingSyncMessage(`本機資料合併失敗：${failedMigration.reason?.code || failedMigration.reason?.message}`, true);
  }

  subscribeShoppingList();
  subscribeLedger();
  subscribeContent();
  $("#shoppingSyncPanel").open = false;
}

async function loginShoppingSync(event) {
  event.preventDefault();
  const sync = state.shoppingSync;
  if (!sync.available) return;

  const identity = $("#shoppingSyncIdentity").value;
  const passwordInput = $("#shoppingSyncPassword");
  const password = passwordInput.value;
  if (!password) {
    setShoppingSyncMessage("請輸入測試密碼", true);
    passwordInput.focus();
    return;
  }

  $("#shoppingSyncLogin").disabled = true;
  setShoppingSyncMessage("登入中");
  try {
    const email = sync.users[identity];
    await sync.services.setPersistence(sync.services.auth, sync.services.browserLocalPersistence);
    await sync.services.signInWithEmailAndPassword(sync.services.auth, email, password);
    passwordInput.value = "";
    passwordInput.type = "password";
    $("#shoppingSyncShowPassword").checked = false;
  } catch (error) {
    const message = error.code === "auth/invalid-credential" ? "身分或密碼不正確" : `登入失敗：${error.code || error.message}`;
    setShoppingSyncMessage(message, true);
    $("#shoppingSyncLogin").disabled = false;
  }
}

async function logoutShoppingSync(silent = false) {
  const sync = state.shoppingSync;
  disconnectShoppingSubscription();
  sync.connected = false;
  sync.identity = "";
  if (sync.services?.auth) await sync.services.signOut(sync.services.auth);
  renderShoppingSyncState(silent ? "" : "已登出，保留這支手機目前的旅行資料");
}

function handleShoppingSyncWrite(promise, onSuccess) {
  setShoppingSyncMessage("變更正在同步");
  return promise
    .then((result) => {
      onSuccess?.(result);
      return result;
    })
    .catch((error) => {
      setShoppingSyncMessage(`同步寫入失敗：${error.code || error.message}`, true);
      return null;
    });
}

function syncItineraryDay(dayKey) {
  const sync = state.shoppingSync;
  if (!sync.connected) return Promise.resolve(null);
  const day = tripDays.find((item) => item.key === dayKey);
  if (!day) return Promise.resolve(null);
  const payload = buildItinerarySyncPayload(day);
  if (payload.length > 100000) {
    setShoppingSyncMessage("本日行程內容過長，已保留本機但尚未同步", true);
    return Promise.resolve(null);
  }

  const { doc, serverTimestamp, setDoc } = sync.services;
  return handleShoppingSyncWrite(
    setDoc(doc(sync.itineraryRef, dayKey), {
      payload,
      updatedAt: serverTimestamp(),
      updatedBy: sync.identity
    }),
    () => {
      const currentDay = tripDays.find((item) => item.key === dayKey);
      if (currentDay && buildItinerarySyncPayload(currentDay) === payload) {
        clearItinerarySyncDirty(dayKey);
      }
    }
  );
}

function scheduleItinerarySync(dayKey, immediate = false) {
  markItinerarySyncDirty(dayKey);
  const sync = state.shoppingSync;
  const existingTimer = sync.itineraryWriteTimers.get(dayKey);
  if (existingTimer) clearTimeout(existingTimer);
  sync.itineraryWriteTimers.delete(dayKey);
  if (!sync.connected) return;

  if (immediate) {
    void syncItineraryDay(dayKey);
    return;
  }
  const timer = setTimeout(() => {
    sync.itineraryWriteTimers.delete(dayKey);
    void syncItineraryDay(dayKey);
  }, 600);
  sync.itineraryWriteTimers.set(dayKey, timer);
}

function syncTripMemo() {
  const sync = state.shoppingSync;
  if (!sync.connected) return Promise.resolve(null);
  const text = String(localStorage.getItem(STORAGE_KEYS.memo) || "").slice(0, 5000);
  const { serverTimestamp, setDoc } = sync.services;
  return handleShoppingSyncWrite(
    setDoc(sync.memoRef, {
      text,
      updatedAt: serverTimestamp(),
      updatedBy: sync.identity
    }),
    () => {
      if (String(localStorage.getItem(STORAGE_KEYS.memo) || "").slice(0, 5000) === text) {
        setMemoSyncDirty(false);
      }
    }
  );
}

function applyDeferredItinerarySync() {
  const sync = state.shoppingSync;
  const detail = $("#dayDetail");
  if (!sync.connected || !detail || detail.contains(document.activeElement)) return;
  const payload = sync.deferredItineraryPayloads.get(state.activeDay);
  if (payload === undefined || loadItinerarySyncDirtyKeys().has(state.activeDay)) return;
  sync.deferredItineraryPayloads.delete(state.activeDay);
  if (!applyItinerarySyncPayload(state.activeDay, payload)) return;
  writeJson(STORAGE_KEYS.itinerary, tripDays);
  renderDayNav();
  renderDayDetail();
}

function scheduleTripMemoSync(immediate = false) {
  const sync = state.shoppingSync;
  setMemoSyncDirty(true);
  if (sync.memoWriteTimer) clearTimeout(sync.memoWriteTimer);
  sync.memoWriteTimer = null;
  if (!sync.connected) return;

  if (immediate) {
    void syncTripMemo();
    return;
  }
  sync.memoWriteTimer = setTimeout(() => {
    sync.memoWriteTimer = null;
    void syncTripMemo();
  }, 700);
}

function flushScheduledContentWrites() {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const dayKeys = [...sync.itineraryWriteTimers.keys()];
  sync.itineraryWriteTimers.forEach((timer) => clearTimeout(timer));
  sync.itineraryWriteTimers.clear();
  dayKeys.forEach((dayKey) => void syncItineraryDay(dayKey));
  if (sync.memoWriteTimer) {
    clearTimeout(sync.memoWriteTimer);
    sync.memoWriteTimer = null;
    void syncTripMemo();
  }
}

function syncShoppingItemCreate(item) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { doc, serverTimestamp, setDoc } = sync.services;
  const itemId = item.id.replaceAll("/", "_").slice(0, 120);
  handleShoppingSyncWrite(
    setDoc(doc(sync.itemsRef, itemId), {
      text: item.name,
      done: item.done,
      createdAt: Date.now(),
      updatedAt: serverTimestamp(),
      updatedBy: sync.identity
    })
  );
}

function syncShoppingItemUpdate(item) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { doc, serverTimestamp, updateDoc } = sync.services;
  handleShoppingSyncWrite(
    updateDoc(doc(sync.itemsRef, item.id), {
      done: item.done,
      updatedAt: serverTimestamp(),
      updatedBy: sync.identity
    })
  );
}

function syncShoppingItemDelete(itemId) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { deleteDoc, doc } = sync.services;
  handleShoppingSyncWrite(deleteDoc(doc(sync.itemsRef, itemId)));
}

function syncExpenseCreate(expense) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { doc, serverTimestamp, setDoc } = sync.services;
  handleShoppingSyncWrite(
    setDoc(doc(sync.expensesRef, safeCloudDocumentId(expense.id)), {
      date: expense.date,
      category: expense.category,
      payer: expense.payer,
      split: expense.split,
      owner: expense.owner,
      amount: expense.amount,
      name: expense.name,
      note: expense.note,
      createdAt: localCreatedAtMillis(expense.createdAt),
      updatedAt: serverTimestamp(),
      updatedBy: sync.identity
    })
  );
}

function syncExpenseDelete(expenseId) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { deleteDoc, doc } = sync.services;
  handleShoppingSyncWrite(deleteDoc(doc(sync.expensesRef, safeCloudDocumentId(expenseId))));
}

function syncPublicFundDepositCreate(deposit) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { doc, serverTimestamp, setDoc } = sync.services;
  handleShoppingSyncWrite(
    setDoc(doc(sync.publicFundRef, safeCloudDocumentId(deposit.id)), {
      date: deposit.date,
      member: deposit.member,
      amount: deposit.amount,
      note: deposit.note,
      createdAt: localCreatedAtMillis(deposit.createdAt),
      updatedAt: serverTimestamp(),
      updatedBy: sync.identity
    })
  );
}

function syncPublicFundDepositDelete(depositId) {
  const sync = state.shoppingSync;
  if (!sync.connected) return;
  const { deleteDoc, doc } = sync.services;
  handleShoppingSyncWrite(deleteDoc(doc(sync.publicFundRef, safeCloudDocumentId(depositId))));
}

async function initShoppingSync() {
  $("#shoppingSyncForm").addEventListener("submit", loginShoppingSync);
  $("#shoppingSyncLogout").addEventListener("click", () => logoutShoppingSync());
  $("#shoppingSyncShowPassword").addEventListener("change", (event) => {
    $("#shoppingSyncPassword").type = event.target.checked ? "text" : "password";
  });
  window.addEventListener("pagehide", flushScheduledContentWrites);
  renderShoppingSyncState("正在檢查同步設定");

  try {
    const configUrl = new URL("./firebase-config.js", window.location.href);
    const configResponse = await fetch(configUrl, { cache: "no-store" });
    const contentType = configResponse.headers.get("content-type") || "";
    if (!configResponse.ok || !contentType.includes("javascript")) throw new Error("sync-not-configured");

    const [configModule, appModule, authModule, firestoreModule] = await Promise.all([
      import(configUrl.href),
      import("https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js")
    ]);
    const firebaseApp = appModule.initializeApp(configModule.firebaseConfig, "okayama-shopping-sync");
    const auth = authModule.getAuth(firebaseApp);
    let db;
    try {
      db = firestoreModule.initializeFirestore(firebaseApp, {
        localCache: firestoreModule.persistentLocalCache({
          tabManager: firestoreModule.persistentMultipleTabManager()
        })
      });
    } catch {
      db = firestoreModule.getFirestore(firebaseApp);
    }

    Object.assign(state.shoppingSync, {
      available: true,
      services: {
        ...authModule,
        ...firestoreModule,
        auth,
        db
      },
      users: configModule.shoppingSyncUsers,
      itemsRef: firestoreModule.collection(db, "trips", "okayama-sync-test", "items"),
      expensesRef: firestoreModule.collection(db, "trips", "okayama-sync-test", "expenses"),
      publicFundRef: firestoreModule.collection(db, "trips", "okayama-sync-test", "publicFund"),
      itineraryRef: firestoreModule.collection(db, "trips", "okayama-sync-test", "itinerary"),
      memoRef: firestoreModule.doc(db, "trips", "okayama-sync-test", "meta", "tripMemo")
    });
    renderShoppingSyncState();

    state.shoppingSync.authUnsubscribe = authModule.onAuthStateChanged(auth, async (user) => {
      if (user) {
        await connectShoppingSyncUser(user);
      } else {
        disconnectShoppingSubscription();
        state.shoppingSync.connected = false;
        state.shoppingSync.identity = "";
        renderShoppingSyncState();
      }
    });
  } catch (error) {
    state.shoppingSync.available = false;
    renderShoppingSyncState();
    if (error.message !== "sync-not-configured") {
      setShoppingSyncMessage("目前無法載入同步服務，購物清單維持本機模式", true);
    }
  }
}

function getWalletStatus(percentage, itemCount) {
  if (!itemCount) return "購物雷達目前一片寧靜";
  if (percentage === 0) return "錢包目前平安無事";
  if (percentage < 40) return "錢包開始感受到壓力";
  if (percentage < 70) return "錢包正在快速變薄";
  if (percentage < 100) return "錢包只剩最後一口氣";
  return "錢包已光榮完成任務";
}

function renderShoppingProgress(items, completed) {
  const percentage = items.length ? Math.round((completed / items.length) * 100) : 0;
  $("#shoppingProgress").innerHTML = `
    <div class="wallet-progress-topline">
      <span>WALLET STATUS</span>
      <strong>${percentage}%</strong>
    </div>
    <div class="wallet-progress-title">
      <strong>錢包枯竭度</strong>
      <span>${completed} / ${items.length}</span>
    </div>
    <p>${getWalletStatus(percentage, items.length)}</p>
    <div class="wallet-progress-track" role="progressbar" aria-label="錢包枯竭度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}">
      <span style="width: ${percentage}%"></span>
    </div>
  `;
}

function renderShoppingList() {
  const items = loadShoppingList();
  const completed = items.filter((item) => item.done).length;
  renderShoppingProgress(items, completed);
  $("#shoppingCount").textContent = `${items.length} 項 · 已買 ${completed}`;
  $("#shoppingList").innerHTML = items.length
    ? items
        .map(
          (item) => {
            const hasImage = Boolean(item.image);
            const expanded = hasImage && state.expandedShoppingImages.has(item.id);
            return `
            <article class="shopping-item ${item.done ? "done" : ""}">
              <div class="shopping-item-row ${hasImage ? "has-image" : ""}">
                <label>
                  <input type="checkbox" data-shopping-check="${escapeAttr(item.id)}" ${item.done ? "checked" : ""} />
                  <span>${escapeHtml(item.name)}</span>
                </label>
                ${
                  hasImage
                    ? `
                      <button class="shopping-image-toggle" type="button" data-shopping-image-toggle="${escapeAttr(item.id)}" aria-expanded="${expanded}" aria-controls="shopping-image-${escapeAttr(item.id)}" aria-label="${expanded ? "收合" : "展開"} ${escapeAttr(item.name)}圖片" title="${expanded ? "收合圖片" : "查看圖片"}">
                        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m8 10 4 4 4-4" /></svg>
                      </button>
                    `
                    : ""
                }
                <button class="shopping-delete" type="button" data-shopping-delete="${escapeAttr(item.id)}" aria-label="刪除 ${escapeAttr(item.name)}" title="刪除">
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12" /></svg>
                </button>
              </div>
              ${
                hasImage
                  ? `
                    <div class="shopping-image-panel" id="shopping-image-${escapeAttr(item.id)}" ${expanded ? "" : "hidden"}>
                      <img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.name)}參考圖片" loading="lazy" />
                    </div>
                  `
                  : ""
              }
            </article>
          `;
          }
        )
        .join("")
    : `<p class="empty-state">還沒有項目，先加入想買的伴手禮或用品。</p>`;

  $all("[data-shopping-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const updated = loadShoppingList();
      const item = updated.find((entry) => entry.id === input.dataset.shoppingCheck);
      if (!item) return;
      item.done = input.checked;
      saveShoppingList(updated);
      renderShoppingList();
      syncShoppingItemUpdate(item);
    });
  });

  $all("[data-shopping-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.shoppingDelete;
      state.expandedShoppingImages.delete(itemId);
      const updated = loadShoppingList().filter((item) => item.id !== itemId);
      saveShoppingList(updated);
      renderShoppingList();
      syncShoppingItemDelete(itemId);
    });
  });

  $all("[data-shopping-image-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.dataset.shoppingImageToggle;
      const panel = document.getElementById(`shopping-image-${itemId}`);
      if (!panel) return;
      const expanded = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(expanded));
      button.setAttribute("aria-label", `${expanded ? "收合" : "展開"}圖片`);
      button.setAttribute("title", expanded ? "收合圖片" : "查看圖片");
      panel.hidden = !expanded;
      if (expanded) {
        state.expandedShoppingImages.add(itemId);
      } else {
        state.expandedShoppingImages.delete(itemId);
      }
    });
  });
}

function addShoppingItem(event) {
  event.preventDefault();
  const input = $("#shoppingItemInput");
  const name = input.value.trim();
  if (!name) return;
  const items = loadShoppingList();
  const item = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    done: false,
    image: ""
  };
  items.push(item);
  saveShoppingList(items);
  input.value = "";
  renderShoppingList();
  syncShoppingItemCreate(item);
  input.focus();
}

function renderBudget() {
  const coveredCount = budgetItems.filter((item) => item[3].includes("Pass 覆蓋")).length;

  $("#budgetSummary").innerHTML = `
    <div class="stat"><span>Pass 覆蓋項</span><strong>${coveredCount}</strong><span class="meta">JR/渡輪移動</span></div>
  `;

  $("#budgetList").innerHTML = budgetItems
    .map(
      ([date, item, route, _status, amount, note]) => `
        <article class="budget-item">
          <div><strong>${escapeHtml(date)}</strong></div>
          <div>
            <h3>${escapeHtml(item)}</h3>
            <div class="meta">${escapeHtml(route)}<br>${escapeHtml(note)}</div>
          </div>
          <div class="money">${amount === "0" ? "Pass" : amount === "-" ? "—" : `¥${escapeHtml(amount)}`}</div>
        </article>
      `
    )
    .join("");
}

function renderExpenseControls() {
  const dateOptions = tripDays
    .map((day) => `<option value="${escapeAttr(day.date)}">${escapeHtml(`${day.date} ${day.title}`)}</option>`)
    .join("");
  const categoryOptions = expenseCategories
    .map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`)
    .join("");
  const payerOptions = expensePayers
    .map((payer) => `<option value="${escapeAttr(payer)}">${escapeHtml(payer)}</option>`)
    .join("");
  const memberOptions = expenseMembers
    .map((member) => `<option value="${escapeAttr(member)}">${escapeHtml(member)}</option>`)
    .join("");
  const splitSelectOptions = splitOptions
    .map(([value, label]) => `<option value="${escapeAttr(value)}">${escapeHtml(label)}</option>`)
    .join("");

  $("#expenseDate").innerHTML = dateOptions;
  $("#expenseDate").value = getActiveDay()?.date || tripDays[0]?.date || "";
  $("#expenseCategory").innerHTML = categoryOptions;
  $("#expensePayer").innerHTML = payerOptions;
  $("#expensePayer").value = expenseMembers[0];
  $("#expenseSplit").innerHTML = splitSelectOptions;
  $("#expenseSplit").value = "split";
  $("#expenseOwner").innerHTML = memberOptions;
  $("#expenseOwner").value = expenseMembers[0];
  $("#publicFundDate").innerHTML = dateOptions;
  $("#publicFundDate").value = getActiveDay()?.date || tripDays[0]?.date || "";
  $("#publicFundMember").innerHTML = memberOptions;
  $("#publicFundMember").value = expenseMembers[0];
  $("#expenseDayFilter").innerHTML = `<option value="${escapeAttr(allExpenseDays)}">${escapeHtml(allExpenseDays)}</option>${dateOptions}`;
  $("#expenseCategoryFilter").innerHTML = `<option value="${escapeAttr(allExpenseCategories)}">${escapeHtml(allExpenseCategories)}</option>${categoryOptions}`;
  $("#expensePayerFilter").innerHTML = `<option value="${escapeAttr(allExpensePayers)}">${escapeHtml(allExpensePayers)}</option>${payerOptions}`;

  if ($("#expenseForm").dataset.bound !== "true") {
    $("#expenseDate").addEventListener("change", renderExpenses);
    $("#expenseDayFilter").addEventListener("change", renderExpenses);
    $("#expenseCategoryFilter").addEventListener("change", renderExpenses);
    $("#expensePayerFilter").addEventListener("change", renderExpenses);
    $("#expensePayer").addEventListener("change", updateExpenseOwnerVisibility);
    $("#expenseSplit").addEventListener("change", updateExpenseOwnerVisibility);
    $("#expenseForm").addEventListener("submit", addExpense);
    $("#publicFundForm").addEventListener("submit", addPublicFundDeposit);
    $("#expenseAddToggle").addEventListener("click", () => {
      const panel = $("#expenseAddPanel");
      panel.open = true;
      $("#expenseAddToggle").setAttribute("aria-expanded", "true");
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
      requestAnimationFrame(() => $("#expenseAmount").focus());
    });
    $("#expenseAddPanel").addEventListener("toggle", (event) => {
      $("#expenseAddToggle").setAttribute("aria-expanded", String(event.currentTarget.open));
    });
    $("#expenseForm").dataset.bound = "true";
  }
  updateExpenseOwnerVisibility();
}

function updateExpenseOwnerVisibility() {
  const ownerField = $("#expenseOwnerField");
  const ownerSelect = $("#expenseOwner");
  const needsOwner =
    $("#expensePayer").value === publicExpenseAccount && $("#expenseSplit").value === "personal";
  ownerField.hidden = !needsOwner;
  ownerSelect.disabled = !needsOwner;
  ownerSelect.required = needsOwner;
  if (needsOwner && !expenseMembers.includes(ownerSelect.value)) ownerSelect.value = expenseMembers[0];
}

function addPublicFundDeposit(event) {
  event.preventDefault();
  const amount = Math.round(Number($("#publicFundAmount").value));
  if (!amount || amount < 1) return;

  const deposit = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: $("#publicFundDate").value,
    member: normalizeExpenseMember($("#publicFundMember").value),
    amount,
    note: $("#publicFundNote").value.trim(),
    createdAt: new Date().toISOString()
  };
  const deposits = loadPublicFundDeposits();
  deposits.unshift(deposit);
  savePublicFundDeposits(deposits);
  syncPublicFundDepositCreate(deposit);

  event.currentTarget.reset();
  $("#publicFundDate").value = deposit.date;
  $("#publicFundMember").value = deposit.member;
  $("#publicFundAmount").focus();
  renderPublicFund();
  renderExpenses();
}

function deletePublicFundDeposit(id) {
  savePublicFundDeposits(loadPublicFundDeposits().filter((deposit) => deposit.id !== id));
  syncPublicFundDepositDelete(id);
  renderPublicFund();
  renderExpenses();
}

function renderPublicFund() {
  const fund = calculatePublicFund();
  const closure = calculatePublicFundClosure(fund);
  const balanceClass = fund.balance < 0 ? "negative" : fund.balance > 0 ? "positive" : "";
  $("#publicFundSummary").innerHTML = `
    <div class="public-fund-metric ${balanceClass}">
      <span>公帳餘額</span>
      <strong>${formatYen(fund.balance)}</strong>
      ${renderTwdEstimate(fund.balance)}
    </div>
    ${expenseMembers
      .map(
        (member) => `
          <div class="public-fund-metric">
            <span>${escapeHtml(member)} 投入</span>
            <strong>${formatYen(fund.contributions[member])}</strong>
            ${renderTwdEstimate(fund.contributions[member])}
          </div>
        `
      )
      .join("")}
  `;

  if (fund.balance < 0) {
    const topUps = expenseMembers
      .map((member) => `${member} ${formatYen(closure.topUpShares[member])}`)
      .join("，");
    $("#publicFundStatus").className = "public-fund-status warning";
    $("#publicFundStatus").textContent =
      `公帳不足 ${formatYen(Math.abs(fund.balance))} · 每人先補：${topUps} · ${closure.settlementText}`;
  } else if (fund.balance > 0) {
    const refunds = expenseMembers
      .map((member) => `${member} ${formatYen(closure.refundShares[member])}`)
      .join("，");
    $("#publicFundStatus").className = "public-fund-status ready";
    $("#publicFundStatus").textContent = `公帳剩餘 ${formatYen(fund.balance)} · 退回：${refunds} · ${closure.settlementText}`;
  } else {
    $("#publicFundStatus").className = "public-fund-status";
    $("#publicFundStatus").textContent = fund.totalDeposits
      ? `公帳餘額已用完 · ${closure.settlementText}`
      : "尚未補入公帳";
  }

  const ledger = [
    ...fund.deposits.map((deposit) => ({ ...deposit, type: "deposit" })),
    ...fund.publicExpenses.map((expense) => ({ ...expense, type: "expense" }))
  ].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  $("#publicFundLedgerSummary").textContent = `公帳明細（${ledger.length}）`;
  $("#publicFundLedger").innerHTML = ledger.length
    ? ledger
        .map((entry) => {
          const isDeposit = entry.type === "deposit";
          const detail = isDeposit
            ? `${entry.member} 補入`
            : `${entry.category} · ${entry.split ? "共同分帳" : `${entry.owner} 個人`}`;
          const title = isDeposit ? entry.note || "補入公帳" : entry.name;
          return `
            <article class="public-fund-entry ${entry.type}">
              <div>
                <strong>${escapeHtml(entry.date)}</strong>
                <div class="meta">${escapeHtml(detail)}</div>
              </div>
              <div>
                <h3>${escapeHtml(title)}</h3>
                ${!isDeposit && entry.note ? `<div class="meta">${escapeHtml(entry.note)}</div>` : ""}
              </div>
              <div class="public-fund-entry-amount ${entry.type}">
                <span>${isDeposit ? "+" : "-"}${formatYen(entry.amount)}</span>
                ${renderTwdEstimate(entry.amount)}
              </div>
              ${
                isDeposit
                  ? `<button class="text-button danger-action public-fund-delete" type="button" data-public-fund-id="${escapeAttr(entry.id)}">刪除補入</button>`
                  : ""
              }
            </article>
          `;
        })
        .join("")
    : `<p class="empty-state">尚無公帳補入或支出。</p>`;

  $all(".public-fund-delete").forEach((button) => {
    button.addEventListener("click", () => deletePublicFundDeposit(button.dataset.publicFundId));
  });
}

function renderExchangeCalculator() {
  const output = $("#exchangeCalculatorTwd");
  if (!output) return;
  const amount = Math.max(0, Number($("#exchangeCalculatorYen")?.value) || 0);
  const converted = convertYenToTwd(amount);
  output.value = converted === null ? "等待匯率" : `約 ${formatTwd(converted)}`;
}

function renderExchangeRatePanel() {
  const display = $("#exchangeRateDisplay");
  if (!display) return;

  const rate = getEffectiveExchangeRate();
  const refreshButton = $("#refreshExchangeRate");

  refreshButton.disabled = exchangeRateRequestStatus === "loading";
  display.textContent = rate ? `¥1 = NT$${rate.toFixed(4)}` : "尚未取得匯率";

  let statusText = "連線後會自動取得每日參考匯率";
  if (exchangeRateRequestStatus === "loading") {
    statusText = exchangeRateSettings.autoRate ? "正在檢查最新匯率" : "正在取得每日參考匯率";
  } else if (exchangeRateRequestStatus === "error") {
    statusText = exchangeRateSettings.autoRate ? "目前離線，沿用上次匯率" : "目前無法取得匯率";
  } else if (exchangeRateSettings.autoRate) {
    statusText = `參考日 ${exchangeRateSettings.rateDate || "未知"} · Frankfurter`;
  }
  $("#exchangeRateStatus").textContent = statusText;
  renderExchangeCalculator();
}

async function fetchExchangeRate(force = false) {
  const cacheIsFresh =
    exchangeRateSettings.autoRate && Date.now() - exchangeRateSettings.fetchedAt < EXCHANGE_RATE_MAX_AGE;
  if (!force && cacheIsFresh) {
    renderExchangeRatePanel();
    return;
  }

  exchangeRateRequestStatus = "loading";
  renderExchangeRatePanel();
  try {
    const response = await fetch(EXCHANGE_RATE_API, { cache: "no-store" });
    if (!response.ok) throw new Error(`exchange rate ${response.status}`);
    const data = await response.json();
    const rate = Number(data.rate);
    if (!Number.isFinite(rate) || rate <= 0) throw new Error("invalid exchange rate");

    exchangeRateSettings.autoRate = rate;
    exchangeRateSettings.rateDate = String(data.date || "");
    exchangeRateSettings.fetchedAt = Date.now();
    saveExchangeRateSettings();
    exchangeRateRequestStatus = "success";
  } catch {
    exchangeRateRequestStatus = "error";
  }
  renderExchangeRatePanel();
  renderExpenses();
  renderPublicFund();
}

function initExchangeRate() {
  $("#exchangeCalculatorYen").addEventListener("input", renderExchangeCalculator);
  $("#refreshExchangeRate").addEventListener("click", () => fetchExchangeRate(true));
  renderExchangeRatePanel();
  fetchExchangeRate();
}

function addExpense(event) {
  event.preventDefault();

  const amount = Math.round(Number($("#expenseAmount").value));
  const name = $("#expenseName").value.trim();
  if (!amount || amount < 1 || !name) return;
  const payer = $("#expensePayer").value;
  const split = $("#expenseSplit").value === "split";

  const expense = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: $("#expenseDate").value,
    category: $("#expenseCategory").value,
    payer,
    split,
    owner: split ? "" : payer === publicExpenseAccount ? normalizeExpenseMember($("#expenseOwner").value) : payer,
    amount,
    name,
    note: $("#expenseNote").value.trim(),
    createdAt: new Date().toISOString()
  };

  const expenses = loadExpenses();
  expenses.unshift(expense);
  saveExpenses(expenses);
  syncExpenseCreate(expense);

  event.currentTarget.reset();
  $("#expenseDate").value = expense.date;
  $("#expenseCategory").value = expense.category;
  $("#expensePayer").value = expense.payer;
  $("#expenseSplit").value = expense.split ? "split" : "personal";
  $("#expenseOwner").value = expense.owner || expenseMembers[0];
  updateExpenseOwnerVisibility();
  $("#expenseName").focus();
  renderExpenses();
  renderPublicFund();
}

function deleteExpense(id) {
  saveExpenses(loadExpenses().filter((expense) => expense.id !== id));
  syncExpenseDelete(id);
  renderExpenses();
  renderPublicFund();
}

function renderExpenses() {
  const expenses = loadExpenses();
  const selectedDay = $("#expenseDayFilter").value || allExpenseDays;
  const selectedCategory = $("#expenseCategoryFilter").value || allExpenseCategories;
  const selectedPayer = $("#expensePayerFilter").value || allExpensePayers;
  const activeExpenseDate = $("#expenseDate").value || getActiveDay()?.date || tripDays[0]?.date || "";
  const filtered = expenses.filter((expense) => {
    const dayMatch = selectedDay === allExpenseDays || expense.date === selectedDay;
    const categoryMatch = selectedCategory === allExpenseCategories || expense.category === selectedCategory;
    const payerMatch = selectedPayer === allExpensePayers || expense.payer === selectedPayer;
    return dayMatch && categoryMatch && payerMatch;
  });
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const filteredTotal = filtered.reduce((sum, expense) => sum + expense.amount, 0);
  const activeDayTotal = expenses
    .filter((expense) => expense.date === activeExpenseDate)
    .reduce((sum, expense) => sum + expense.amount, 0);
  const groupTotal = filtered.filter((expense) => expense.split).reduce((sum, expense) => sum + expense.amount, 0);
  const personalTotal = filtered.filter((expense) => !expense.split).reduce((sum, expense) => sum + expense.amount, 0);
  const publicAccountPaid = filtered
    .filter((expense) => expense.payer === publicExpenseAccount)
    .reduce((sum, expense) => sum + expense.amount, 0);
  const filteredDirectSettlement = calculateTripSettlement(filtered);
  const filteredPublicFund = calculatePublicFund(filtered, []);
  const groupShares = Object.fromEntries(
    expenseMembers.map((member) => [
      member,
      filteredDirectSettlement.members.find((item) => item.member === member).share
        + filteredPublicFund.sharedExpenseShares[member]
    ])
  );
  const categoryTotals = expenseCategories.map((category) => [
    category,
    filtered.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0)
  ]);
  const payerTotals = expensePayers.map((payer) => [
    payer,
    filtered.filter((expense) => expense.payer === payer).reduce((sum, expense) => sum + expense.amount, 0)
  ]);
  const allPayerTotals = expensePayers.map((payer) => [
    payer,
    expenses.filter((expense) => expense.payer === payer).reduce((sum, expense) => sum + expense.amount, 0)
  ]);
  const settlement = calculateTripSettlement(expenses);
  const overallSettlement = calculateOverallSettlement(expenses, loadPublicFundDeposits());
  const hasPublicFundActivity =
    overallSettlement.publicFund.totalDeposits > 0 || overallSettlement.publicFund.totalExpenses > 0;
  const publicFundAdjustmentText = overallSettlement.publicFund.balance > 0
    ? `公帳先退回：${expenseMembers.map((member) => `${member} ${formatYen(overallSettlement.publicClosure.refundShares[member])}`).join("，")}`
    : overallSettlement.publicFund.balance < 0
      ? `公帳先補：${expenseMembers.map((member) => `${member} ${formatYen(overallSettlement.publicClosure.topUpShares[member])}`).join("，")}`
      : hasPublicFundActivity
        ? "公帳餘額已歸零"
        : "";
  const recentExpenses = expenses.slice(0, 5);
  const recentTotal = recentExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  $("#expenseHeaderDate").textContent = `${activeExpenseDate || "旅行"} · JPY`;
  $("#recentExpenseTotal").textContent = recentExpenses.length
    ? `${recentExpenses.length} 筆 · ${formatYen(recentTotal)}`
    : "尚無記帳";

  $("#expenseSummary").innerHTML = `
    <section class="ledger-ticket" aria-label="旅行付款摘要">
      <div class="ledger-ticket-topline"><span>TRIP LEDGER</span><span>${state.shoppingSync.connected ? `${escapeHtml(state.shoppingSync.identity)} SYNC` : "LOCAL"}</span></div>
      <div class="ledger-payer-grid">
        ${allPayerTotals
          .map(
            ([payer, amount]) => `
              <div><span>${escapeHtml(payer)} 已付</span><strong>${formatYen(amount)}</strong></div>
            `
          )
          .join("")}
      </div>
      <div class="ledger-settlement">
        ${overallSettlement.members
          .map(({ member, balance }) => {
            const label = balance > 0 ? "整趟應收" : balance < 0 ? "整趟應付" : "已結清";
            return `<div><span>${escapeHtml(member)} ${label}</span><strong>${formatYen(Math.abs(balance))}</strong></div>`;
          })
          .join("")}
      </div>
      ${publicFundAdjustmentText ? `<div class="ledger-fund-note">${escapeHtml(publicFundAdjustmentText)}</div>` : ""}
    </section>
  `;

  $("#expenseDetailSummary").innerHTML = `
    <div class="stat"><span>總支出</span><strong>${formatYen(total)}</strong>${renderTwdEstimate(total)}<span class="meta">${state.shoppingSync.connected ? "兩人同步的全部記帳" : "這支手機上的全部記帳"}</span></div>
    <div class="stat"><span>目前日期</span><strong>${formatYen(activeDayTotal)}</strong>${renderTwdEstimate(activeDayTotal)}<span class="meta">${escapeHtml(activeExpenseDate || "未選日期")}</span></div>
    <div class="stat"><span>目前篩選</span><strong>${formatYen(filteredTotal)}</strong>${renderTwdEstimate(filteredTotal)}<span class="meta">${filtered.length} 筆</span></div>
    <div class="stat"><span>團體分帳</span><strong>${formatYen(groupTotal)}</strong>${renderTwdEstimate(groupTotal)}<span class="meta">XUN ${formatYen(groupShares.XUN)}／UT ${formatYen(groupShares.UT)}</span></div>
    <div class="stat"><span>個人支出</span><strong>${formatYen(personalTotal)}</strong>${renderTwdEstimate(personalTotal)}<span class="meta">不分帳項目</span></div>
    <div class="stat"><span>公帳支付</span><strong>${formatYen(publicAccountPaid)}</strong>${renderTwdEstimate(publicAccountPaid)}<span class="meta">目前篩選結果</span></div>
    <div class="stat"><span>直接代付結算</span><strong>${escapeHtml(settlement.settlementText)}</strong><span class="meta">只計 XUN / UT 直接代付的共同分帳</span></div>
    <div class="stat"><span>整趟最終結算</span><strong>${escapeHtml(overallSettlement.settlementText)}</strong><span class="meta">已合併直接代付、公帳投入、公帳支出與餘額調整</span></div>
    <div class="expense-breakdown payer-breakdown" aria-label="付款人小計">
      ${payerTotals
        .map(
          ([payer, amount]) => `
            <span>
              <b>${escapeHtml(payer)}</b>
              ${formatYen(amount)}
              ${renderTwdEstimate(amount, "breakdown-twd")}
            </span>
          `
        )
        .join("")}
    </div>
    <div class="expense-breakdown member-breakdown" aria-label="XUN 與 UT 直接代付結算">
      ${settlement.members
        .map(
          ({ member, paid, share, balance }) => {
            const result = balance > 0
              ? `結清後應收 ${formatYen(balance)}`
              : balance < 0
                ? `結清後應付 ${formatYen(Math.abs(balance))}`
                : "結清後無需收付";
            return `
              <span>
                <b>${escapeHtml(member)}</b>
                分帳代付 ${formatYen(paid)}<br>
                兩人各分攤 ${formatYen(share)}<br>
                ${result}
              </span>
            `;
          }
        )
        .join("")}
    </div>
    <div class="expense-breakdown" aria-label="分類小計">
      ${categoryTotals
        .map(
          ([category, amount]) => `
            <span>
              <b>${escapeHtml(category)}</b>
              ${formatYen(amount)}
            </span>
          `
        )
        .join("")}
    </div>
  `;

  $("#expenseRecentList").innerHTML = recentExpenses.length
    ? recentExpenses
        .map(
          (expense) => `
            <article class="recent-expense-item">
              <span class="recent-expense-category">${escapeHtml(expense.category)}</span>
              <div>
                <strong>${escapeHtml(expense.name)}</strong>
                <small>${escapeHtml(expense.payer)} 付 · ${expense.split ? "分帳" : "個人"}${expense.note ? ` · ${escapeHtml(expense.note)}` : ""}</small>
              </div>
              <b>${formatYen(expense.amount)}</b>
            </article>
          `
        )
        .join("")
    : `<p class="empty-state">還沒有記帳。點右上角加號新增第一筆支出。</p>`;

  $("#expenseList").innerHTML = filtered.length
    ? filtered
        .map(
          (expense) => `
            <article class="expense-item">
              <div>
                <strong>${escapeHtml(expense.date)}</strong>
                <div class="meta">${escapeHtml(expense.category)} / ${escapeHtml(expense.payer)} 付</div>
              </div>
              <div>
                <h3>${escapeHtml(expense.name)}</h3>
                <div class="meta">${expense.note ? `${escapeHtml(expense.note)}<br>` : ""}${expense.split ? `要分帳，每人約 ${formatYen(expense.amount / expenseMembers.length)}` : `不分帳，算 ${escapeHtml(expense.owner)} 的個人支出`}</div>
              </div>
              <div class="expense-amount"><span>${formatYen(expense.amount)}</span>${renderTwdEstimate(expense.amount)}</div>
              <button class="text-button danger-action expense-delete" type="button" data-expense-id="${escapeAttr(expense.id)}">刪除</button>
            </article>
          `
        )
        .join("")
    : `<p class="empty-state">還沒有符合條件的記帳。${state.shoppingSync.connected ? "新增後會同步到兩人的共用帳本。" : "新增後會存在這支手機的 Safari 網站資料裡。"}</p>`;

  $all(".expense-delete").forEach((button) => {
    button.addEventListener("click", () => deleteExpense(button.dataset.expenseId));
  });
}

function triggerDownload(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value ?? "");
  const safeText = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replace(/"/g, '""')}"`;
}

function exportExpensesCsv() {
  const rate = getEffectiveExchangeRate();
  const records = [
    ...loadExpenses().map((expense) => ({
      type: "支出",
      date: expense.date,
      category: expense.category,
      payer: expense.payer,
      owner: expense.split ? "共同" : expense.owner,
      split: expense.split ? "要分帳" : "不分帳",
      name: expense.name,
      amount: expense.amount,
      share: expense.split ? Math.round(expense.amount / expenseMembers.length) : expense.amount,
      note: expense.note,
      createdAt: expense.createdAt
    })),
    ...loadPublicFundDeposits().map((deposit) => ({
      type: "公帳補入",
      date: deposit.date,
      category: "公帳",
      payer: deposit.member,
      owner: "公帳",
      split: "",
      name: "補入公帳",
      amount: deposit.amount,
      share: "",
      note: deposit.note,
      createdAt: deposit.createdAt
    }))
  ].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  const rows = [
    ["紀錄類型", "日期", "分類", "付款來源", "歸屬", "是否分帳", "項目", "金額 JPY", "台幣估算", "採用匯率", "每人分攤 JPY", "備註", "建立時間"],
    ...records.map((record) => [
      record.type,
      record.date,
      record.category,
      record.payer,
      record.owner,
      record.split,
      record.name,
      record.amount,
      rate ? Math.round(record.amount * rate) : "",
      rate || "",
      record.share,
      record.note,
      record.createdAt
    ])
  ];
  const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(",")).join("\n")}`;
  triggerDownload("okayama-expenses.csv", csv, "text/csv;charset=utf-8");
}

function buildLocalBackup() {
  return {
    app: "okayama-travel-app",
    version: 6,
    exportedAt: new Date().toISOString(),
    data: {
      itinerary: tripDays,
      checklist: readJson(STORAGE_KEYS.checklist, {}),
      shopping: loadShoppingList(),
      memo: localStorage.getItem(STORAGE_KEYS.memo) || "",
      expenses: loadExpenses(),
      exchangeRate: exchangeRateSettings,
      publicFund: loadPublicFundDeposits()
    }
  };
}

function exportLocalBackup() {
  const backup = buildLocalBackup();
  triggerDownload("okayama-travel-backup.json", JSON.stringify(backup, null, 2), "application/json;charset=utf-8");
}

function restoreLocalBackup(backup) {
  const data = backup?.data || backup;
  if (!data || !Array.isArray(data.itinerary) || !Array.isArray(data.expenses)) {
    throw new Error("invalid backup");
  }

  writeJson(STORAGE_KEYS.itinerary, data.itinerary);
  writeJson(STORAGE_KEYS.checklist, data.checklist || {});
  writeJson(STORAGE_KEYS.shopping, Array.isArray(data.shopping) ? data.shopping : []);
  localStorage.removeItem(STORAGE_KEYS.shoppingSyncMigration);
  localStorage.removeItem(STORAGE_KEYS.ledgerSyncMigration);
  localStorage.removeItem(STORAGE_KEYS.contentSyncMigration);
  localStorage.setItem(STORAGE_KEYS.memo, String(data.memo || "").slice(0, 5000));
  writeJson(STORAGE_KEYS.itinerarySyncDirty, data.itinerary.map((day) => day.key));
  setMemoSyncDirty(true);
  writeJson(STORAGE_KEYS.expenses, data.expenses);
  writeJson(STORAGE_KEYS.publicFund, Array.isArray(data.publicFund) ? data.publicFund : []);
  if (data.exchangeRate && typeof data.exchangeRate === "object") {
    writeJson(STORAGE_KEYS.exchangeRate, data.exchangeRate);
  } else {
    localStorage.removeItem(STORAGE_KEYS.exchangeRate);
  }

  tripDays = loadTripDays();
  exchangeRateSettings = loadExchangeRateSettings();
  state.activeDay = getInitialActiveDayKey();
  const memo = $("#tripMemo");
  if (memo) memo.value = localStorage.getItem(STORAGE_KEYS.memo) || "";
  renderDayNav();
  renderDayDetail();
  renderShoppingList();
  renderExpenseControls();
  renderExchangeRatePanel();
  renderPublicFund();
  renderExpenses();
  fetchExchangeRate();
}

async function importLocalBackup(file) {
  if (!file) return;
  try {
    const backup = JSON.parse(await file.text());
    if (!confirm("匯入備份會覆蓋這支手機目前的行程修改、記帳、公帳、購物清單與備忘錄，要繼續嗎？")) return;
    if (state.shoppingSync.connected) await logoutShoppingSync(true);
    restoreLocalBackup(backup);
    alert("備份已匯入。");
  } catch {
    alert("無法匯入這個備份檔，請確認是 okayama-travel-backup.json。");
  } finally {
    $("#backupFileInput").value = "";
  }
}

function initTripMemo() {
  const memo = $("#tripMemo");
  if (!memo) return;
  memo.value = localStorage.getItem(STORAGE_KEYS.memo) || "";
  memo.addEventListener("input", () => {
    const text = memo.value.slice(0, 5000);
    localStorage.setItem(STORAGE_KEYS.memo, text);
    scheduleTripMemoSync();
  });
  memo.addEventListener("blur", () => {
    const sync = state.shoppingSync;
    if (localStorage.getItem(STORAGE_KEYS.memoSyncDirty) === "1") {
      sync.deferredMemoText = null;
      scheduleTripMemoSync(true);
      return;
    }
    if (sync.deferredMemoText !== null) {
      memo.value = sync.deferredMemoText;
      localStorage.setItem(STORAGE_KEYS.memo, sync.deferredMemoText);
      sync.deferredMemoText = null;
    }
  });
}

async function clearLocalData() {
  if (!confirm("清除這支手機上的行程修改、記帳、公帳、購物清單與離線快取？")) return;
  if (state.shoppingSync.connected) await logoutShoppingSync(true);
  localStorage.removeItem(STORAGE_KEYS.itinerary);
  localStorage.removeItem(STORAGE_KEYS.checklist);
  localStorage.removeItem(STORAGE_KEYS.shopping);
  localStorage.removeItem(STORAGE_KEYS.shoppingSeed);
  localStorage.removeItem(STORAGE_KEYS.shoppingSyncMigration);
  localStorage.removeItem(STORAGE_KEYS.ledgerSyncMigration);
  localStorage.removeItem(STORAGE_KEYS.contentSyncMigration);
  localStorage.removeItem(STORAGE_KEYS.itinerarySyncDirty);
  localStorage.removeItem(STORAGE_KEYS.memoSyncDirty);
  localStorage.removeItem(STORAGE_KEYS.memo);
  localStorage.removeItem(STORAGE_KEYS.expenses);
  localStorage.removeItem(STORAGE_KEYS.weather);
  localStorage.removeItem(STORAGE_KEYS.exchangeRate);
  localStorage.removeItem(STORAGE_KEYS.publicFund);
  if ("caches" in window) {
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys.filter((key) => key.startsWith("okayama-trip")).map((key) => caches.delete(key)));
  }
  tripDays = clone(defaultDays);
  exchangeRateSettings = loadExchangeRateSettings();
  exchangeRateRequestStatus = "idle";
  state.activeDay = tripDays[0].key;
  const memo = $("#tripMemo");
  if (memo) memo.value = "";
  renderDayNav();
  renderDayDetail();
  renderShoppingList();
  renderExchangeRatePanel();
  renderPublicFund();
  renderExpenses();
  fetchExchangeRate(true);
}

function init() {
  $all(".tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      setTab(tab.dataset.tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
  );
  $("#printBtn").addEventListener("click", () => window.print());
  $("#editModeToggle").addEventListener("click", () => {
    state.editMode = !state.editMode;
    syncEditButton();
    renderDayDetail();
  });
  $("#dayDetail").addEventListener("focusout", () => {
    setTimeout(applyDeferredItinerarySync);
  });
  $("#clearLocalData").addEventListener("click", clearLocalData);
  $("#exportExpensesCsv").addEventListener("click", exportExpensesCsv);
  $("#exportBackup").addEventListener("click", exportLocalBackup);
  $("#importBackup").addEventListener("click", () => $("#backupFileInput").click());
  $("#backupFileInput").addEventListener("change", (event) => importLocalBackup(event.target.files?.[0]));
  $("#shoppingForm").addEventListener("submit", addShoppingItem);
  void initShoppingSync();

  renderDayNav();
  syncEditButton();
  initTripMemo();
  renderDayDetail();
  renderShoppingList();
  renderBudget();
  renderExpenseControls();
  initExchangeRate();
  renderPublicFund();
  renderExpenses();
  renderTripWeather();
}

init();
