const days = [
  {
    key: "0813",
    date: "8/13",
    weekday: "四",
    title: "抵達岡山",
    theme: "抵達、採買、蓋章",
    pass: "未啟用",
    passCovered: false,
    summary: "岡山機場進、岡山站西口巴士到市區。第一晚只排飯店、永旺夢樂城、Myojinmaru 和超市採買。",
    schedule: [
      ["15:05", "抵達岡山桃太郎機場"],
      ["15:55 / 16:55", "搭機場巴士往岡山站西口，自費 1,000 日圓，約 30 分"],
      ["16:25 / 17:25", "抵達岡山站西口，步行到岡山站前大和 Roynet 飯店"],
      ["17:30", "岡山站觀光案內所蓋紀念章，拿紙本地圖"],
      ["18:00", "永旺夢樂城岡山，晚餐 Myojinmaru 明神丸"],
      ["20:00", "Yours 或站內超市採買水、早餐、電解質飲料"]
    ],
    route: ["岡山機場", "岡山站西口", "飯店", "永旺夢樂城"],
    meals: ["Myojinmaru 明神丸", "Yours 超市", "站內便利商店"],
    backup: ["入境較慢就搭 16:55 巴士", "太累就只吃飯和採買", "紀念章可移到 8/17"]
  },
  {
    key: "0814",
    date: "8/14",
    weekday: "五",
    title: "宮島日歸",
    theme: "大鳥居、纜車、牡蠣",
    pass: "Pass Day 1",
    passCovered: true,
    summary: "早出發，目標 10:30-11:30 在嚴島神社與大鳥居一帶。JR 到廣島、宮島口與 JR 宮島渡輪由 pass 覆蓋。",
    schedule: [
      ["07:15", "飯店出門，岡山站買早餐和水"],
      ["07:30-08:00", "岡山搭山陽新幹線往廣島，建議劃指定席"],
      ["08:15-09:00", "廣島轉 JR 山陽本線到宮島口"],
      ["09:30-10:20", "宮島口搭 JR 西日本宮島渡輪，船資 pass 覆蓋，訪問稅 100 日圓另付"],
      ["10:30-11:45", "嚴島神社、大鳥居、海邊拍照"],
      ["11:45-13:15", "表參道商店街午餐：牡蠣、穴子飯、紅葉饅頭"],
      ["13:15-15:30", "宮島纜車與紅葉谷公園；太熱就只到獅子岩展望台"],
      ["17:00-19:00", "回廣島站，視體力吃晚餐或直接回岡山"]
    ],
    route: ["岡山", "廣島", "宮島口", "JR 宮島渡輪", "宮島"],
    meals: ["焼がきのはやし", "牡蠣屋", "紅葉堂", "藤い屋"],
    backup: ["取消纜車，改商店街和咖啡", "風雨時和 8/18 廣島市區交換", "潮汐時間出發前再確認"]
  },
  {
    key: "0815",
    date: "8/15",
    weekday: "六",
    title: "姬路 + 吉備津",
    theme: "姬路城、吉備津彥、吉備津",
    pass: "Pass Day 2",
    passCovered: true,
    summary: "這天偏滿。早上姬路城優先，下午視體力跑吉備津兩社；熱到不舒服就只做姬路。",
    schedule: [
      ["08:00", "岡山搭山陽新幹線往姬路，pass 覆蓋"],
      ["09:00-11:30", "姬路城，先進天守，再看外圍"],
      ["11:30-12:30", "姬路城周邊或姬路站午餐"],
      ["12:30-13:30", "返回岡山"],
      ["14:00-15:00", "JR 桃太郎線到備前一宮站，參拜吉備津彥神社"],
      ["15:00-16:30", "JR 或短程計程車到吉備津神社"],
      ["16:30-17:30", "回岡山站，晚上早點休息"]
    ],
    route: ["岡山", "姬路", "岡山", "備前一宮", "吉備津"],
    meals: ["姬路站午餐", "岡山站晚餐", "便利商店補水"],
    backup: ["只做姬路城 + 好古園", "吉備津兩社移到 8/17 上午", "兩社之間夏天不硬走山路"]
  },
  {
    key: "0816",
    date: "8/16",
    weekday: "日",
    title: "倉敷慢遊",
    theme: "美觀地區、阿智神社、Outlet",
    pass: "Pass Day 3",
    passCovered: true,
    summary: "倉敷站南口去美觀地區，北口去 Outlet。先老街和阿智神社，午後把 Outlet 當避暑點。",
    schedule: [
      ["09:00", "岡山搭 JR 山陽本線到倉敷，pass 覆蓋"],
      ["09:45-10:30", "阿智神社，先處理爬坡段"],
      ["10:30-12:30", "倉敷美觀地區、白壁街道、運河、雜貨店"],
      ["12:30-13:30", "午餐：岩むら或美觀地區附近和食"],
      ["13:30-15:30", "大原美術館或咖啡休息"],
      ["15:30-17:30", "回倉敷站，北口 Mitsui Outlet Park 倉敷"],
      ["17:30-19:00", "倉敷晚餐或回岡山站吃"]
    ],
    route: ["岡山", "倉敷南口", "美觀地區", "倉敷北口", "Outlet"],
    meals: ["御食事処 岩むら", "可樂餅/炸肉餅", "倉敷布丁", "白桃甜點"],
    backup: ["下雨就大原美術館 + 咖啡", "太熱取消阿智神社", "紅葉饅頭改在宮島或廣島買"]
  },
  {
    key: "0817",
    date: "8/17",
    weekday: "一",
    title: "岡山市區",
    theme: "後樂園、岡山城、表町",
    pass: "Pass Day 4",
    passCovered: true,
    summary: "JR pass 還有效，但岡山市電/巴士另付。早上先後樂園避暑，再進岡山城，晚上安排壽喜燒。",
    schedule: [
      ["08:00", "飯店出門，市電/巴士到後樂園或城下"],
      ["08:30-10:00", "岡山後樂園，先走庭園和岡山城借景"],
      ["10:00-11:30", "岡山城天守"],
      ["11:30-12:30", "城下或後樂園周邊午餐/茶屋"],
      ["12:30-14:30", "表町商店街、天滿屋、咖啡休息"],
      ["14:30-16:00", "回飯店午休或補岡山站紀念章"],
      ["晚上", "壽喜燒晚餐，需事前預約"]
    ],
    route: ["飯店", "後樂園", "岡山城", "表町", "飯店"],
    meals: ["壽喜燒預約", "後樂園茶屋", "表町咖啡"],
    backup: ["下雨就岡山城 + 表町 + 天滿屋", "後樂園縮短到 60-75 分", "訂不到壽喜燒就回岡山站或永旺"]
  },
  {
    key: "0818",
    date: "8/18",
    weekday: "二",
    title: "廣島市區",
    theme: "和平紀念公園、本通、伴手禮",
    pass: "Pass Day 5",
    passCovered: true,
    summary: "第二次往廣島，這天不再去宮島。重點是和平紀念公園與資料館，午後本通/紙屋町或廣島站 ekie。",
    schedule: [
      ["08:30", "岡山搭山陽新幹線往廣島，pass 覆蓋"],
      ["09:15-10:00", "廣島站轉市電/巴士往和平紀念公園，多數情況另付"],
      ["10:00-12:30", "原爆圓頂館、和平紀念公園、和平紀念資料館"],
      ["12:30-13:30", "本通/紙屋町午餐"],
      ["13:30-15:30", "本通商店街、紙屋町、廣島城外觀或縮景園二選一"],
      ["15:30-17:30", "廣島站 ekie 補買紅葉饅頭和伴手禮"],
      ["18:00-20:00", "新幹線回岡山"]
    ],
    route: ["岡山", "廣島", "和平紀念公園", "本通", "廣島站"],
    meals: ["廣島燒", "廣島站 ekie", "牡蠣備案", "紅葉饅頭"],
    backup: ["下雨就資料館 + 本通 + 廣島站", "資料館排隊太長先走公園", "太累就取消廣島城/縮景園"]
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
      ["12:55", "搭岡山站西口往岡山機場巴士，自費 1,000 日圓"],
      ["13:25", "抵達岡山機場"],
      ["15:55", "起飛"]
    ],
    route: ["飯店", "岡山站西口", "岡山機場"],
    meals: ["岡山站早餐", "機場或站內輕食"],
    backup: ["想更保守就提前一班巴士", "上午只留岡山站周邊", "行李前一晚整理好"]
  }
];

const points = [
  ["8/13", "岡山", "飯店", "Daiwa Roynet Hotel Okayama Ekimae", "ダイワロイネットホテル岡山駅前", "6 晚基地"],
  ["8/13", "岡山", "交通", "岡山桃太郎機場", "岡山桃太郎空港", "機場巴士自費"],
  ["8/13", "岡山", "交通", "岡山站西口 21 號巴士站", "岡山駅西口 21番 のりば 岡山空港", "最後一天也會用"],
  ["8/13", "岡山", "蓋章", "岡山站觀光案內所", "岡山駅 観光案内所", "蓋紀念章與拿地圖"],
  ["8/13", "岡山", "購物", "AEON MALL 岡山", "イオンモール岡山", "晚餐與採買"],
  ["8/13", "岡山", "餐廳", "Myojinmaru AEON MALL 岡山", "明神丸 イオンモール岡山店", "第一晚晚餐"],
  ["8/14", "宮島", "交通", "JR 宮島渡輪", "JR西日本宮島フェリー 宮島口", "船資 pass 覆蓋，稅另付"],
  ["8/14", "宮島", "景點", "嚴島神社 / 大鳥居", "厳島神社 大鳥居", "目標 10:30-11:30"],
  ["8/14", "宮島", "餐廳", "焼がきのはやし", "焼がきのはやし 宮島", "牡蠣候選"],
  ["8/14", "宮島", "餐廳", "牡蠣屋", "牡蠣屋 宮島", "牡蠣候選"],
  ["8/14", "宮島", "甜點", "紅葉堂", "紅葉堂 宮島", "紅葉饅頭"],
  ["8/14", "宮島", "景點", "宮島纜車", "宮島ロープウェー 紅葉谷駅", "天候不佳就取消"],
  ["8/15", "姬路", "景點", "姬路城", "姫路城", "無空調/樓梯陡"],
  ["8/15", "姬路", "景點", "好古園", "好古園 姫路", "可和姬路城套票"],
  ["8/15", "岡山", "神社", "吉備津彥神社", "吉備津彦神社", "備前一宮站附近"],
  ["8/15", "岡山", "神社", "吉備津神社", "吉備津神社", "吉備津站附近"],
  ["8/16", "倉敷", "景點", "倉敷美觀地區", "倉敷美観地区", "南口方向"],
  ["8/16", "倉敷", "神社", "阿智神社", "阿智神社 倉敷", "早上先爬坡"],
  ["8/16", "倉敷", "博物館", "大原美術館", "大原美術館", "雨天/高溫備案"],
  ["8/16", "倉敷", "餐廳", "御食事処 岩むら", "御食事処 岩むら 倉敷", "午餐候選"],
  ["8/16", "倉敷", "購物", "Mitsui Outlet Park 倉敷", "三井アウトレットパーク 倉敷", "北口方向"],
  ["8/17", "岡山", "景點", "岡山後樂園", "岡山後楽園", "早上先去"],
  ["8/17", "岡山", "景點", "岡山城", "岡山城", "與後樂園搭配"],
  ["8/17", "岡山", "購物", "表町商店街", "岡山 表町商店街", "午後避暑"],
  ["8/17", "岡山", "購物", "天滿屋岡山本店", "天満屋 岡山本店", "百貨與休息"],
  ["8/17", "岡山", "餐廳", "壽喜燒候選區", "岡山駅 すき焼き 予約", "需出發前預約"],
  ["8/18", "廣島", "景點", "原爆圓頂館", "原爆ドーム", "和平紀念公園一帶"],
  ["8/18", "廣島", "景點", "和平紀念公園", "広島平和記念公園", "留安靜時間"],
  ["8/18", "廣島", "博物館", "和平紀念資料館", "広島平和記念資料館", "查排隊與開館"],
  ["8/18", "廣島", "購物", "本通商店街", "広島 本通商店街", "午餐/咖啡"],
  ["8/18", "廣島", "購物", "ekie 廣島", "ekie 広島", "紅葉饅頭與伴手禮"],
  ["8/19", "岡山", "交通", "岡山站西口 21 號巴士站", "岡山駅西口 21番 のりば 岡山空港", "建議 12:55 巴士"]
];

const dayMapQueries = {
  "0813": [
    ["岡山桃太郎機場", "岡山桃太郎空港"],
    ["飯店", "ダイワロイネットホテル岡山駅前"],
    ["永旺夢樂城", "イオンモール岡山"],
    ["Yours 超市", "ユアーズ さんすて岡山店"]
  ],
  "0814": [
    ["岡山站", "岡山駅"],
    ["廣島站", "広島駅"],
    ["宮島口站", "宮島口駅"],
    ["嚴島神社 / 大鳥居", "厳島神社 大鳥居"],
    ["表參道商店街", "宮島 表参道商店街"]
  ],
  "0815": [
    ["岡山站", "岡山駅"],
    ["姬路城", "姫路城"],
    ["好古園", "好古園 姫路"],
    ["吉備津彥神社", "吉備津彦神社"],
    ["吉備津神社", "吉備津神社"]
  ],
  "0816": [
    ["倉敷站", "倉敷駅"],
    ["阿智神社", "阿智神社 倉敷"],
    ["倉敷美觀地區", "倉敷美観地区"],
    ["岩むら", "御食事処 岩むら 倉敷"],
    ["倉敷 Outlet", "三井アウトレットパーク 倉敷"]
  ],
  "0817": [
    ["飯店", "ダイワロイネットホテル岡山駅前"],
    ["岡山後樂園", "岡山後楽園"],
    ["岡山城", "岡山城"],
    ["表町商店街", "岡山 表町商店街"],
    ["天滿屋", "天満屋 岡山本店"]
  ],
  "0818": [
    ["廣島站", "広島駅"],
    ["原爆圓頂館", "原爆ドーム"],
    ["和平紀念公園", "広島平和記念公園"],
    ["和平紀念資料館", "広島平和記念資料館"],
    ["本通商店街", "広島 本通商店街"],
    ["ekie 廣島", "ekie 広島"]
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
  ["8/14", "宮島纜車", "來回估算", "另付", "2500", "出發前確認"],
  ["8/15", "岡山 -> 姬路", "新幹線來回", "Pass 覆蓋", "0", "建議劃位"],
  ["8/15", "姬路城", "門票", "另付", "2500", "好古園套票約 2600"],
  ["8/15", "桃太郎線", "岡山 -> 吉備津一帶", "Pass 覆蓋", "0", "熱時可搭短程計程車"],
  ["8/16", "岡山 -> 倉敷", "JR 來回", "Pass 覆蓋", "0", "山陽本線"],
  ["8/16", "大原美術館", "選配門票", "另付", "2000", "雨天/高溫備案"],
  ["8/17", "岡山市電/巴士", "岡山站 -> 城下/後樂園", "另付", "160-300", "IC 卡或現金"],
  ["8/17", "後樂園 + 岡山城", "套票估算", "另付", "800", "確認當日販售"],
  ["8/18", "岡山 -> 廣島", "新幹線來回", "Pass 覆蓋", "0", "Pass 最後一天"],
  ["8/18", "廣島市內交通", "市電/巴士", "另付", "240-500", "多數情況另付"],
  ["8/19", "岡山機場巴士", "岡山站西口 -> 機場", "另付", "1000", "建議 12:55"]
];

const checklist = [
  "護照、JR-WEST pass 兌換資料、付款信用卡放進小包",
  "確認 pass 啟用日為 2026/8/14",
  "劃位：8/14 岡山-廣島",
  "劃位：8/15 岡山-姬路",
  "劃位：8/18 岡山-廣島",
  "查 8/14 宮島潮汐與 JR 宮島渡輪營運",
  "查宮島纜車天候與末班時間",
  "預約 8/17 岡山壽喜燒晚餐",
  "把重要點位存到 Google Maps，或直接使用 App 內的景點地圖",
  "準備帽子、防曬、濕紙巾、電解質粉或鹽糖",
  "最後一天確認岡山站西口 12:55 機場巴士"
];

const phrases = [
  ["請問這班車可以用 JR-WEST pass 嗎？", "この列車はJR-WESTパスで乗れますか。"],
  ["我想劃指定席，岡山到廣島。", "岡山から広島まで指定席を予約したいです。"],
  ["請問往岡山機場的巴士站在哪裡？", "岡山空港行きのバス乗り場はどこですか。"],
  ["有沒有兩位的座位？", "二名ですが、席はありますか。"],
  ["我有預約。", "予約しています。"]
];

const STORAGE_KEYS = {
  itinerary: "okayamaItineraryV2",
  checklist: "okayamaChecklist",
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
  editMode: false
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

function loadTripDays() {
  const saved = readJson(STORAGE_KEYS.itinerary, null);
  if (!Array.isArray(saved) || saved.length !== days.length) return clone(days);

  const defaultKeys = days.map((day) => day.key).join("|");
  const savedKeys = saved.map((day) => day.key).join("|");
  return defaultKeys === savedKeys ? saved : clone(days);
}

function saveTripDays() {
  writeJson(STORAGE_KEYS.itinerary, tripDays);
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
        amount: Number(expense.amount) || 0,
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
      amount: Number(deposit.amount) || 0,
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
  const manualRate = Number(saved?.manualRate);
  return {
    mode: saved?.mode === "manual" ? "manual" : "auto",
    autoRate: autoRate > 0 ? autoRate : null,
    manualRate: manualRate > 0 ? manualRate : null,
    rateDate: String(saved?.rateDate || ""),
    fetchedAt: Number(saved?.fetchedAt) || 0
  };
}

function saveExchangeRateSettings() {
  writeJson(STORAGE_KEYS.exchangeRate, exchangeRateSettings);
}

function getEffectiveExchangeRate() {
  if (exchangeRateSettings.mode === "manual" && exchangeRateSettings.manualRate) {
    return exchangeRateSettings.manualRate;
  }
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

function calculatePublicFund(expenses = loadExpenses(), deposits = loadPublicFundDeposits()) {
  const publicExpenses = expenses.filter((expense) => expense.payer === publicExpenseAccount);
  const sharedExpenseTotal = sumAmounts(publicExpenses.filter((expense) => expense.split));
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
    expenseMembers.map((member) => [member, personalCosts[member] + sharedExpenseTotal / expenseMembers.length])
  );
  const totalDeposits = sumAmounts(deposits);
  const totalExpenses = sumAmounts(publicExpenses);
  const balance = totalDeposits - totalExpenses;

  return {
    deposits,
    publicExpenses,
    contributions,
    personalCosts,
    liabilities,
    totalDeposits,
    totalExpenses,
    sharedExpenseTotal,
    balance
  };
}

function calculatePublicFundClosure(fund = calculatePublicFund()) {
  const needsTopUp = fund.balance < 0;
  const refundShare = needsTopUp ? 0 : fund.balance / expenseMembers.length;
  const members = expenseMembers.map((member) => ({
    member,
    action: fund.liabilities[member] - fund.contributions[member],
    balance: needsTopUp ? null : fund.contributions[member] - fund.liabilities[member] - refundShare
  }));
  if (needsTopUp) return { needsTopUp, refundShare, members, settlementText: "" };

  const creditor = members.find((item) => Number(item.balance) > 0.5);
  const debtor = members.find((item) => Number(item.balance) < -0.5);
  const settlementText =
    creditor && debtor
      ? `公帳差額：${debtor.member} 補 ${formatYen(Math.min(creditor.balance, Math.abs(debtor.balance)))} 給 ${creditor.member}`
      : "公帳投入已平衡";
  return { needsTopUp, refundShare, members, settlementText };
}

function calculateTripSettlement(expenses = loadExpenses()) {
  const directSharedExpenses = expenses.filter(
    (expense) => expense.split && expenseMembers.includes(expense.payer)
  );
  const total = sumAmounts(directSharedExpenses);
  const sharePerPerson = total / expenseMembers.length;
  const members = expenseMembers.map((member) => {
    const paid = sumAmounts(directSharedExpenses.filter((expense) => expense.payer === member));
    return { member, paid, share: sharePerPerson, balance: paid - sharePerPerson };
  });
  const creditor = members.find((item) => item.balance > 0.5);
  const debtor = members.find((item) => item.balance < -0.5);
  const settlementText =
    creditor && debtor
      ? `${debtor.member} 補 ${formatYen(Math.min(creditor.balance, Math.abs(debtor.balance)))} 給 ${creditor.member}`
      : "目前不用互補";
  return { total, sharePerPerson, members, settlementText };
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

function renderDayActions(day) {
  const nextStop = getNextScheduleStop(day);
  return `
    <div class="day-actions">
      <span class="badge ${day.passCovered ? "" : "self"}">${escapeHtml(day.pass)}</span>
      <a class="text-button map-action" href="${escapeAttr(nextStop.url)}" target="_blank" rel="noreferrer">下一站</a>
      <a class="text-button map-action" href="${escapeAttr(getDayRouteUrl(day))}" target="_blank" rel="noreferrer">今日地圖</a>
    </div>
  `;
}

function getDayRouteUrl(day) {
  const stops = (dayMapQueries[day.key] || [[day.title, day.title]]).map((item) => item[1]);
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

function getScheduleMapUrl(day, text) {
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
    return { index: 0, text: fallback[1], url: getScheduleMapUrl(day, fallback[1]) };
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const index = day.schedule.findIndex(([time]) => {
    const start = parseScheduleStartMinutes(time);
    return start !== null && start >= currentMinutes - 10;
  });
  const scheduleIndex = index >= 0 ? index : Math.max(0, day.schedule.length - 1);
  const item = day.schedule[scheduleIndex] || fallback;
  return { index: scheduleIndex, text: item[1], url: getScheduleMapUrl(day, item[1]) };
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
    <section class="weather-panel" id="weatherPanel" data-weather-day="${escapeAttr(day.key)}">
      <div>
        <h3>${escapeHtml(location.name)}天氣</h3>
        <p class="meta">讀取溫度中...</p>
      </div>
      <button class="text-button weather-refresh" type="button" data-refresh-weather>更新</button>
    </section>
  `;
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
  if (!panel) return;

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
  if (!panel) return;
  const location = weatherLocations[day.key];
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
  if (!location || !$("#weatherPanel")) return;

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
        <strong>${escapeHtml(day.date)} ${escapeHtml(day.weekday)}</strong>
        <span>${escapeHtml(day.title)}</span>
        <span>${escapeHtml(day.pass)}</span>
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

function renderDayDetail() {
  const day = getActiveDay();
  const detail = $("#dayDetail");

  if (!state.editMode) {
    detail.innerHTML = `
      <div class="day-heading">
        <div>
          <p class="eyebrow">${escapeHtml(day.date)} 星期${escapeHtml(day.weekday)}</p>
          <h2>${escapeHtml(day.title)}</h2>
          <p>${escapeHtml(day.summary)}</p>
        </div>
        ${renderDayActions(day)}
      </div>
      ${renderWeatherPanel(day)}
      <div class="schedule">
        ${day.schedule
          .map(
            ([time, text], index) => `
            <div class="slot ${index === getNextScheduleStop(day).index ? "next-slot" : ""}">
              <time>${escapeHtml(time)}</time>
              <div>
                <div>${escapeHtml(text)}</div>
                <a class="slot-map-link" href="${escapeAttr(getScheduleMapUrl(day, text))}" target="_blank" rel="noreferrer">導航</a>
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
    return;
  }

  detail.innerHTML = `
    <div class="day-heading">
      <div>
        <p class="eyebrow">${escapeHtml(day.date)} 星期${escapeHtml(day.weekday)}</p>
        <h2>${escapeHtml(day.title)}</h2>
        <p>${escapeHtml(day.summary)}</p>
      </div>
      ${renderDayActions(day)}
    </div>
    <div class="edit-toolbar">
      <button class="text-button" type="button" data-add-schedule>新增行程</button>
      <button class="text-button" type="button" data-add-list="meals">新增餐廳</button>
      <button class="text-button" type="button" data-add-list="backup">新增景點/備案</button>
      <button class="text-button subtle" type="button" data-reset-day>還原本日</button>
    </div>
    ${renderWeatherPanel(day)}
    <div class="schedule editable-schedule">
      ${day.schedule
        .map(
          ([time, text], index) => `
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
    saveTripDays();
    renderDayDetail();
    focusEditor(`[data-schedule-field="time"][data-index="${day.schedule.length - 1}"]`);
  });

  detail.querySelector("[data-reset-day]").addEventListener("click", () => {
    if (!confirm("還原本日行程？這會刪除本日的手機本機修改。")) return;
    const dayIndex = tripDays.findIndex((item) => item.key === day.key);
    tripDays[dayIndex] = clone(getDefaultDay(day.key));
    saveTripDays();
    renderDayNav();
    renderDayDetail();
  });

  detail.querySelectorAll("[data-schedule-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.index);
      const fieldIndex = input.dataset.scheduleField === "time" ? 0 : 1;
      day.schedule[index][fieldIndex] = input.value;
      saveTripDays();
    });
  });

  detail.querySelectorAll("[data-delete-schedule]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!confirm("刪除這個行程項目？")) return;
      day.schedule.splice(Number(button.dataset.deleteSchedule), 1);
      saveTripDays();
      renderDayDetail();
    });
  });

  detail.querySelectorAll("[data-move-schedule]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.moveSchedule);
      const direction = Number(button.dataset.direction);
      if (swapItems(day.schedule, index, direction)) {
        saveTripDays();
        renderDayDetail();
      }
    });
  });

  detail.querySelectorAll("[data-add-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.addList;
      day[field].push("");
      saveTripDays();
      renderDayDetail();
      focusEditor(`[data-list-field="${field}"][data-index="${day[field].length - 1}"]`);
    });
  });

  detail.querySelectorAll("[data-list-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const field = input.dataset.listField;
      const index = Number(input.dataset.index);
      day[field][index] = input.value;
      saveTripDays();
    });
  });

  detail.querySelectorAll("[data-delete-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const [field, rawIndex] = button.dataset.deleteList.split(":");
      if (!confirm("刪除這個項目？")) return;
      day[field].splice(Number(rawIndex), 1);
      saveTripDays();
      renderDayDetail();
    });
  });

  detail.querySelectorAll("[data-move-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const [field, rawIndex] = button.dataset.moveList.split(":");
      const direction = Number(button.dataset.direction);
      if (swapItems(day[field], Number(rawIndex), direction)) {
        saveTripDays();
        renderDayDetail();
      }
    });
  });
}

function renderFilters() {
  const dayFilter = $("#pointDayFilter");
  const categoryFilter = $("#pointCategoryFilter");
  const dayOptions = ["全部", ...new Set(points.map((point) => point[0]))];
  const categoryOptions = ["全部", ...new Set(points.map((point) => point[2]))];

  dayFilter.innerHTML = dayOptions.map((value) => `<option value="${escapeAttr(value)}">${escapeHtml(value)}</option>`).join("");
  categoryFilter.innerHTML = categoryOptions.map((value) => `<option value="${escapeAttr(value)}">${escapeHtml(value)}</option>`).join("");
  if (dayFilter.dataset.bound !== "true") {
    dayFilter.addEventListener("change", renderPoints);
    categoryFilter.addEventListener("change", renderPoints);
    dayFilter.dataset.bound = "true";
  }
}

function renderPoints() {
  const selectedDay = $("#pointDayFilter").value;
  const selectedCategory = $("#pointCategoryFilter").value;
  const filtered = points.filter((point) => {
    const dayMatch = selectedDay === "全部" || point[0] === selectedDay;
    const categoryMatch = selectedCategory === "全部" || point[2] === selectedCategory;
    return dayMatch && categoryMatch;
  });

  $("#pointList").innerHTML = filtered
    .map(([date, area, category, name, query, note]) => {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      return `
        <article class="point-item">
          <div>
            <h3>${escapeHtml(name)}</h3>
            <div class="meta">${escapeHtml(date)} · ${escapeHtml(area)} · ${escapeHtml(category)}<br>${escapeHtml(note)}</div>
          </div>
          <a class="map-link" href="${mapsUrl}" target="_blank" rel="noreferrer" aria-label="在 Google Maps 開啟 ${escapeAttr(name)}" title="開啟地圖">↗</a>
        </article>
      `;
    })
    .join("");
}

function renderBudget() {
  const coveredCount = budgetItems.filter((item) => item[3].includes("Pass 覆蓋")).length;

  $("#budgetSummary").innerHTML = `
    <div class="stat"><span>Pass 覆蓋項</span><strong>${coveredCount}</strong><span class="meta">JR/渡輪移動</span></div>
  `;

  $("#budgetList").innerHTML = budgetItems
    .map(
      ([date, item, route, status, amount, note]) => `
        <article class="budget-item">
          <div><strong>${escapeHtml(date)}</strong><div class="meta">${escapeHtml(status)}</div></div>
          <div>
            <h3>${escapeHtml(item)}</h3>
            <div class="meta">${escapeHtml(route)}<br>${escapeHtml(note)}</div>
          </div>
          <div class="money">${amount === "0" ? "Pass" : `¥${escapeHtml(amount)}`}</div>
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

  event.currentTarget.reset();
  $("#publicFundDate").value = deposit.date;
  $("#publicFundMember").value = deposit.member;
  $("#publicFundAmount").focus();
  renderPublicFund();
  renderExpenses();
}

function deletePublicFundDeposit(id) {
  savePublicFundDeposits(loadPublicFundDeposits().filter((deposit) => deposit.id !== id));
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
    <div class="public-fund-metric">
      <span>公帳支出</span>
      <strong>${formatYen(fund.totalExpenses)}</strong>
      ${renderTwdEstimate(fund.totalExpenses)}
    </div>
  `;

  if (fund.balance < 0) {
    const actions = closure.members
      .map(({ member, action }) => {
        if (action > 0.5) return `${member} 應補 ${formatYen(action)}`;
        if (action < -0.5) return `${member} 多投入 ${formatYen(Math.abs(action))}`;
        return `${member} 已平衡`;
      })
      .join("，");
    $("#publicFundStatus").className = "public-fund-status warning";
    $("#publicFundStatus").textContent = `公帳不足 ${formatYen(Math.abs(fund.balance))} · ${actions}`;
  } else if (fund.balance > 0) {
    $("#publicFundStatus").className = "public-fund-status ready";
    $("#publicFundStatus").textContent = `餘額每人退 ${formatYen(closure.refundShare)} · ${closure.settlementText}`;
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
  const isManual = exchangeRateSettings.mode === "manual";
  const modeSelect = $("#exchangeRateMode");
  const manualField = $("#manualExchangeRateField");
  const manualInput = $("#manualExchangeRate");
  const refreshButton = $("#refreshExchangeRate");

  modeSelect.value = exchangeRateSettings.mode;
  manualField.hidden = !isManual;
  if (document.activeElement !== manualInput) {
    manualInput.value = exchangeRateSettings.manualRate || exchangeRateSettings.autoRate || "";
  }
  refreshButton.disabled = exchangeRateRequestStatus === "loading";
  display.textContent = rate ? `¥1 = NT$${rate.toFixed(4)}` : "尚未取得匯率";

  let statusText = "連線後會自動取得每日參考匯率";
  if (isManual && rate) {
    statusText = "使用這支手機的自訂匯率";
  } else if (exchangeRateRequestStatus === "loading") {
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
  $("#exchangeRateMode").addEventListener("change", (event) => {
    exchangeRateSettings.mode = event.target.value === "manual" ? "manual" : "auto";
    if (exchangeRateSettings.mode === "manual" && !exchangeRateSettings.manualRate) {
      exchangeRateSettings.manualRate = exchangeRateSettings.autoRate || 0.2;
    }
    saveExchangeRateSettings();
    renderExchangeRatePanel();
    renderExpenses();
    renderPublicFund();
    if (exchangeRateSettings.mode === "auto") fetchExchangeRate();
  });
  $("#manualExchangeRate").addEventListener("change", (event) => {
    const rate = Number(event.target.value);
    if (!Number.isFinite(rate) || rate <= 0) {
      event.target.value = exchangeRateSettings.manualRate || exchangeRateSettings.autoRate || "";
      return;
    }
    exchangeRateSettings.manualRate = rate;
    saveExchangeRateSettings();
    renderExchangeRatePanel();
    renderExpenses();
    renderPublicFund();
  });
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
  const sharePerPerson = groupTotal / expenseMembers.length;
  const categoryTotals = expenseCategories.map((category) => [
    category,
    filtered.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0)
  ]);
  const payerTotals = expensePayers.map((payer) => [
    payer,
    filtered.filter((expense) => expense.payer === payer).reduce((sum, expense) => sum + expense.amount, 0)
  ]);
  const settlement = calculateTripSettlement(expenses);

  $("#expenseSummary").innerHTML = `
    <div class="stat"><span>總支出</span><strong>${formatYen(total)}</strong>${renderTwdEstimate(total)}<span class="meta">這支手機上的全部記帳</span></div>
    <div class="stat"><span>目前日期</span><strong>${formatYen(activeDayTotal)}</strong>${renderTwdEstimate(activeDayTotal)}<span class="meta">${escapeHtml(activeExpenseDate || "未選日期")}</span></div>
    <div class="stat"><span>目前篩選</span><strong>${formatYen(filteredTotal)}</strong>${renderTwdEstimate(filteredTotal)}<span class="meta">${filtered.length} 筆</span></div>
    <div class="stat"><span>團體分帳</span><strong>${formatYen(groupTotal)}</strong>${renderTwdEstimate(groupTotal)}<span class="meta">兩人結算每人 ${formatYen(sharePerPerson)}</span></div>
    <div class="stat"><span>個人支出</span><strong>${formatYen(personalTotal)}</strong>${renderTwdEstimate(personalTotal)}<span class="meta">不分帳項目</span></div>
    <div class="stat"><span>公帳支付</span><strong>${formatYen(publicAccountPaid)}</strong>${renderTwdEstimate(publicAccountPaid)}<span class="meta">由公帳餘額扣除</span></div>
    <div class="stat"><span>兩人結算</span><strong>${escapeHtml(settlement.settlementText)}</strong><span class="meta">只計 XUN / UT 直接代付的分帳</span></div>
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
            const result = balance > 0.5
              ? `結清後應收 ${formatYen(balance)}`
              : balance < -0.5
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
    : `<p class="empty-state">還沒有符合條件的記帳。新增一筆後會存在這支手機的 Safari 網站資料裡。</p>`;

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
    version: 3,
    exportedAt: new Date().toISOString(),
    data: {
      itinerary: tripDays,
      checklist: readJson(STORAGE_KEYS.checklist, {}),
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
  localStorage.setItem(STORAGE_KEYS.memo, String(data.memo || ""));
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
  renderFilters();
  renderPoints();
  renderExpenseControls();
  renderExchangeRatePanel();
  renderPublicFund();
  renderExpenses();
  renderChecklist();
  fetchExchangeRate();
}

async function importLocalBackup(file) {
  if (!file) return;
  try {
    const backup = JSON.parse(await file.text());
    if (!confirm("匯入備份會覆蓋這支手機目前的行程修改、記帳、公帳、清單與備忘錄，要繼續嗎？")) return;
    restoreLocalBackup(backup);
    alert("備份已匯入。");
  } catch {
    alert("無法匯入這個備份檔，請確認是 okayama-travel-backup.json。");
  } finally {
    $("#backupFileInput").value = "";
  }
}

function renderChecklist() {
  const saved = readJson(STORAGE_KEYS.checklist, {});
  $("#checklistItems").innerHTML = checklist
    .map(
      (item, index) => `
        <article class="check-item ${saved[index] ? "done" : ""}">
          <label>
            <input type="checkbox" data-check="${index}" ${saved[index] ? "checked" : ""} />
            <span>${escapeHtml(item)}</span>
          </label>
        </article>
      `
    )
    .join("");

  $("#checklistItems").querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      saved[input.dataset.check] = input.checked;
      writeJson(STORAGE_KEYS.checklist, saved);
      renderChecklist();
    });
  });
}

function renderPhrases() {
  $("#phraseList").innerHTML = phrases
    .map(
      ([zh, ja]) => `
        <div class="phrase">
          <div>
            <strong>${escapeHtml(zh)}</strong>
            <code>${escapeHtml(ja)}</code>
          </div>
          <button class="icon-button copy-phrase" type="button" data-copy="${escapeAttr(ja)}" aria-label="複製日文句子" title="複製">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <rect x="9" y="9" width="13" height="13" rx="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      `
    )
    .join("");

  $all(".copy-phrase").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.title = "已複製";
      } catch {
        button.title = "瀏覽器不允許複製";
      }
    });
  });
}

function initTripMemo() {
  const memo = $("#tripMemo");
  if (!memo) return;
  memo.value = localStorage.getItem(STORAGE_KEYS.memo) || "";
  memo.addEventListener("input", () => {
    localStorage.setItem(STORAGE_KEYS.memo, memo.value);
  });
}

async function clearLocalData() {
  if (!confirm("清除這支手機上的行程修改、記帳、公帳、清單勾選與離線快取？")) return;
  localStorage.removeItem(STORAGE_KEYS.itinerary);
  localStorage.removeItem(STORAGE_KEYS.checklist);
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
  renderExchangeRatePanel();
  renderPublicFund();
  renderExpenses();
  renderChecklist();
  fetchExchangeRate(true);
}

function init() {
  $all(".tab").forEach((tab) => tab.addEventListener("click", () => setTab(tab.dataset.tab)));
  $("#printBtn").addEventListener("click", () => window.print());
  $("#editModeToggle").addEventListener("click", () => {
    state.editMode = !state.editMode;
    syncEditButton();
    renderDayDetail();
  });
  $("#resetChecklist").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.checklist);
    renderChecklist();
  });
  $("#clearLocalData").addEventListener("click", clearLocalData);
  $("#exportExpensesCsv").addEventListener("click", exportExpensesCsv);
  $("#exportBackup").addEventListener("click", exportLocalBackup);
  $("#importBackup").addEventListener("click", () => $("#backupFileInput").click());
  $("#backupFileInput").addEventListener("change", (event) => importLocalBackup(event.target.files?.[0]));

  renderDayNav();
  syncEditButton();
  initTripMemo();
  renderDayDetail();
  renderFilters();
  renderPoints();
  renderBudget();
  renderExpenseControls();
  initExchangeRate();
  renderPublicFund();
  renderExpenses();
  renderChecklist();
  renderPhrases();
}

init();
