// ============================================================
//  F1 허브 데이터 — 매일 아침 브리핑 작업이 이 파일을 갱신합니다.
//  index.html은 이 파일만 읽습니다. 구조를 바꾸지 마세요.
// ============================================================
window.F1DATA = {

  // 마지막 갱신 정보
  meta: {
    updatedAt: "2026-09-03",
    season: 2026,
    standingsAsOf: { round: 12, name: "네덜란드 GP" }   // 순위표 기준 시점 (결과 노출 없음)
  },

  // 날짜별 브리핑 목록 — 최신이 위. 파일은 briefings/ 폴더에.
  briefings: [
    { date: "2026-09-03", file: "briefings/f1-news-2026-09-03.html", count: 20, spoilers: 5,
      headline: "레드불 몬차 라인업 확정 — FP1 이와사·결승 로슨 · 페라리 ADUO 2차 엔진 업그레이드 · 맥라렌 H-윙 첫 실전 투입" },
    { date: "2026-08-22", file: "briefings/f1-news-2026-08-22.html", count: 15, spoilers: 1,
      headline: "페르스타펜, 레드불과 2030년까지 재계약 · 하자르 손목 부상 — 로슨·츠노다 긴급 투입" },
    { date: "2026-08-19", file: "briefings/f1-news-2026-08-19.html", count: 15, spoilers: 3,
      headline: "알본, 윌리엄스 2027 재계약 · 잔드보르트 고별 주간 — 첫 스프린트 주말, 혼다 신형 PU 투입" }
  ],

  // 시즌 캘린더 — start/end는 현지 기준 주말 날짜. sprint: 스프린트 주말.
  // times: 세션 시작 시각(UTC). 키 = FP1/FP2/FP3/SQ(스프린트 예선)/S(스프린트)/Q(예선)/R(결승). index.html이 한국 시간으로 바꿔 표시.
  // sessions는 요일별 세션. 생략하면 표준(금 FP1·FP2 / 토 FP3·예선 / 일 결승)으로 자동 생성.
  calendar: [
    { round: 1,  key: "australia",   flag: "🇦🇺", name: "호주",       gp: "Australian GP",    circuit: "앨버트 파크",         start: "2026-03-06", end: "2026-03-08",
      times: { FP1:"2026-03-06T01:30:00Z", FP2:"2026-03-06T05:00:00Z", FP3:"2026-03-07T01:30:00Z", Q:"2026-03-07T05:00:00Z", R:"2026-03-08T04:00:00Z" } },
    { round: 2,  key: "china",       flag: "🇨🇳", name: "중국",       gp: "Chinese GP",       circuit: "상하이",              start: "2026-03-13", end: "2026-03-15",
      times: { FP1:"2026-03-13T03:30:00Z", SQ:"2026-03-13T07:30:00Z", S:"2026-03-14T03:00:00Z", Q:"2026-03-14T07:00:00Z", R:"2026-03-15T07:00:00Z" }, sprint: true },
    { round: 3,  key: "japan",       flag: "🇯🇵", name: "일본",       gp: "Japanese GP",      circuit: "스즈카",              start: "2026-03-27", end: "2026-03-29",
      times: { FP1:"2026-03-27T02:30:00Z", FP2:"2026-03-27T06:00:00Z", FP3:"2026-03-28T02:30:00Z", Q:"2026-03-28T06:00:00Z", R:"2026-03-29T05:00:00Z" } },
    { round: 4,  key: "miami",       flag: "🇺🇸", name: "마이애미",   gp: "Miami GP",         circuit: "마이애미",            start: "2026-05-01", end: "2026-05-03",
      times: { FP1:"2026-05-01T16:00:00Z", SQ:"2026-05-01T20:30:00Z", S:"2026-05-02T16:00:00Z", Q:"2026-05-02T20:00:00Z", R:"2026-05-03T20:00:00Z" }, sprint: true },
    { round: 5,  key: "canada",      flag: "🇨🇦", name: "캐나다",     gp: "Canadian GP",      circuit: "질 빌뇌브",           start: "2026-05-22", end: "2026-05-24",
      times: { FP1:"2026-05-22T16:30:00Z", SQ:"2026-05-22T20:30:00Z", S:"2026-05-23T16:00:00Z", Q:"2026-05-23T20:00:00Z", R:"2026-05-24T20:00:00Z" }, sprint: true },
    { round: 6,  key: "monaco",      flag: "🇲🇨", name: "모나코",     gp: "Monaco GP",        circuit: "몬테카를로",          start: "2026-06-05", end: "2026-06-07",
      times: { FP1:"2026-06-05T11:30:00Z", FP2:"2026-06-05T15:00:00Z", FP3:"2026-06-06T10:30:00Z", Q:"2026-06-06T14:00:00Z", R:"2026-06-07T13:00:00Z" } },
    { round: 7,  key: "barcelona",   flag: "🇪🇸", name: "바르셀로나", gp: "Barcelona-Catalunya GP", circuit: "카탈루냐",     start: "2026-06-12", end: "2026-06-14",
      times: { FP1:"2026-06-12T11:30:00Z", FP2:"2026-06-12T15:00:00Z", FP3:"2026-06-13T10:30:00Z", Q:"2026-06-13T14:00:00Z", R:"2026-06-14T13:00:00Z" } },
    { round: 8,  key: "austria",     flag: "🇦🇹", name: "오스트리아", gp: "Austrian GP",      circuit: "레드불링",            start: "2026-06-26", end: "2026-06-28",
      times: { FP1:"2026-06-26T11:30:00Z", FP2:"2026-06-26T15:00:00Z", FP3:"2026-06-27T10:30:00Z", Q:"2026-06-27T14:00:00Z", R:"2026-06-28T13:00:00Z" } },
    { round: 9,  key: "britain",     flag: "🇬🇧", name: "영국",       gp: "British GP",       circuit: "실버스톤",            start: "2026-07-03", end: "2026-07-05",
      times: { FP1:"2026-07-03T11:30:00Z", SQ:"2026-07-03T15:30:00Z", S:"2026-07-04T11:00:00Z", Q:"2026-07-04T15:00:00Z", R:"2026-07-05T14:00:00Z" }, sprint: true },
    { round: 10, key: "belgium",     flag: "🇧🇪", name: "벨기에",     gp: "Belgian GP",       circuit: "스파-프랑코르샹",     start: "2026-07-17", end: "2026-07-19",
      times: { FP1:"2026-07-17T11:30:00Z", FP2:"2026-07-17T15:00:00Z", FP3:"2026-07-18T10:30:00Z", Q:"2026-07-18T14:00:00Z", R:"2026-07-19T13:00:00Z" } },
    { round: 11, key: "hungary",     flag: "🇭🇺", name: "헝가리",     gp: "Hungarian GP",     circuit: "헝가로링",            start: "2026-07-24", end: "2026-07-26",
      times: { FP1:"2026-07-24T11:30:00Z", FP2:"2026-07-24T15:00:00Z", FP3:"2026-07-25T10:30:00Z", Q:"2026-07-25T14:00:00Z", R:"2026-07-26T13:00:00Z" } },
    { round: 12, key: "netherlands", flag: "🇳🇱", name: "네덜란드",   gp: "Dutch GP",         circuit: "잔드보르트",          start: "2026-08-21", end: "2026-08-23",
      times: { FP1:"2026-08-21T10:30:00Z", SQ:"2026-08-21T14:30:00Z", S:"2026-08-22T10:00:00Z", Q:"2026-08-22T14:00:00Z", R:"2026-08-23T13:00:00Z" }, sprint: true },
    { round: 13, key: "italy",       flag: "🇮🇹", name: "이탈리아",   gp: "Italian GP",       circuit: "몬차",                start: "2026-09-04", end: "2026-09-06",
      times: { FP1:"2026-09-04T10:30:00Z", FP2:"2026-09-04T14:00:00Z", FP3:"2026-09-05T10:30:00Z", Q:"2026-09-05T14:00:00Z", R:"2026-09-06T13:00:00Z" } },
    { round: 14, key: "spain",       flag: "🇪🇸", name: "스페인",     gp: "Spanish GP",       circuit: "마드링 (마드리드)",   start: "2026-09-11", end: "2026-09-13",
      times: { FP1:"2026-09-11T11:30:00Z", FP2:"2026-09-11T15:00:00Z", FP3:"2026-09-12T10:30:00Z", Q:"2026-09-12T14:00:00Z", R:"2026-09-13T13:00:00Z" } },
    { round: 15, key: "azerbaijan",  flag: "🇦🇿", name: "아제르바이잔", gp: "Azerbaijan GP",  circuit: "바쿠",                start: "2026-09-24", end: "2026-09-26",
      times: { FP1:"2026-09-24T08:30:00Z", FP2:"2026-09-24T12:00:00Z", FP3:"2026-09-25T08:30:00Z", Q:"2026-09-25T12:00:00Z", R:"2026-09-26T11:00:00Z" } },
    { round: 16, key: "bahrain",     flag: "🇧🇭", name: "바레인",     gp: "Bahrain GP",       circuit: "사키르",              start: "2026-10-02", end: "2026-10-04",
      times: { FP1:"2026-10-02T04:30:00Z", FP2:"2026-10-02T08:00:00Z", FP3:"2026-10-03T04:30:00Z", Q:"2026-10-03T08:00:00Z", R:"2026-10-04T07:00:00Z" } },
    { round: 17, key: "singapore",   flag: "🇸🇬", name: "싱가포르",   gp: "Singapore GP",     circuit: "마리나 베이",         start: "2026-10-09", end: "2026-10-11",
      times: { FP1:"2026-10-09T08:30:00Z", SQ:"2026-10-09T12:30:00Z", S:"2026-10-10T09:00:00Z", Q:"2026-10-10T13:00:00Z", R:"2026-10-11T12:00:00Z" }, sprint: true },
    { round: 18, key: "usa",         flag: "🇺🇸", name: "미국",       gp: "United States GP", circuit: "COTA (오스틴)",       start: "2026-10-23", end: "2026-10-25",
      times: { FP1:"2026-10-23T17:30:00Z", FP2:"2026-10-23T21:00:00Z", FP3:"2026-10-24T17:30:00Z", Q:"2026-10-24T21:00:00Z", R:"2026-10-25T20:00:00Z" } },
    { round: 19, key: "mexico",      flag: "🇲🇽", name: "멕시코",     gp: "Mexico City GP",   circuit: "에르마노스 로드리게스", start: "2026-10-30", end: "2026-11-01",
      times: { FP1:"2026-10-30T18:30:00Z", FP2:"2026-10-30T22:00:00Z", FP3:"2026-10-31T17:30:00Z", Q:"2026-10-31T21:00:00Z", R:"2026-11-01T20:00:00Z" } },
    { round: 20, key: "brazil",      flag: "🇧🇷", name: "브라질",     gp: "São Paulo GP",     circuit: "인테르라고스",        start: "2026-11-06", end: "2026-11-08",
      times: { FP1:"2026-11-06T15:30:00Z", FP2:"2026-11-06T19:00:00Z", FP3:"2026-11-07T14:30:00Z", Q:"2026-11-07T18:00:00Z", R:"2026-11-08T17:00:00Z" } },
    { round: 21, key: "lasvegas",    flag: "🇺🇸", name: "라스베이거스", gp: "Las Vegas GP",   circuit: "라스베이거스 스트립", start: "2026-11-19", end: "2026-11-21",
      times: { FP1:"2026-11-20T00:30:00Z", FP2:"2026-11-20T04:00:00Z", FP3:"2026-11-21T00:30:00Z", Q:"2026-11-21T04:00:00Z", R:"2026-11-22T04:00:00Z" },
      sessions: [ { date: "2026-11-19", list: ["FP1","FP2"] }, { date: "2026-11-20", list: ["FP3","예선"] }, { date: "2026-11-21", list: ["결승"] } ] },
    { round: 22, key: "qatar",       flag: "🇶🇦", name: "카타르",     gp: "Qatar GP",         circuit: "루사일",              start: "2026-11-27", end: "2026-11-29",
      times: { FP1:"2026-11-27T13:30:00Z", FP2:"2026-11-27T17:00:00Z", FP3:"2026-11-28T14:30:00Z", Q:"2026-11-28T18:00:00Z", R:"2026-11-29T16:00:00Z" } },
    { round: 23, key: "abudhabi",    flag: "🇦🇪", name: "아부다비",   gp: "Abu Dhabi GP",     circuit: "야스 마리나",         start: "2026-12-04", end: "2026-12-06",
      times: { FP1:"2026-12-04T09:30:00Z", FP2:"2026-12-04T13:00:00Z", FP3:"2026-12-05T10:30:00Z", Q:"2026-12-05T14:00:00Z", R:"2026-12-06T13:00:00Z" } }
  ],

  // 팀 색상
  teams: {
    "Mercedes":     { ko: "메르세데스",   color: "#27F4D2" },
    "Ferrari":      { ko: "페라리",       color: "#E8002D" },
    "McLaren":      { ko: "맥라렌",       color: "#FF8000" },
    "Red Bull":     { ko: "레드불",       color: "#3671C6" },
    "Racing Bulls": { ko: "레이싱 불스",  color: "#6692FF" },
    "Alpine":       { ko: "알핀",         color: "#0093CC" },
    "Haas":         { ko: "하스",         color: "#B6BABD" },
    "Audi":         { ko: "아우디",       color: "#C40000" },
    "Williams":     { ko: "윌리엄스",     color: "#64C4FF" },
    "Aston Martin": { ko: "애스턴 마틴",  color: "#229971" },
    "Cadillac":     { ko: "캐딜락",       color: "#B8A15A" }
  },

  // ⚠️ 스포일러 — 드라이버 순위 (standingsAsOf 기준)
  drivers: [
    { pos: 1,  code: "ANT", name: "키미 안토넬리",     en: "Kimi Antonelli",    team: "Mercedes",     pts: 242 },
    { pos: 2,  code: "RUS", name: "조지 러셀",         en: "George Russell",    team: "Mercedes",     pts: 183 },
    { pos: 3,  code: "HAM", name: "루이스 해밀턴",     en: "Lewis Hamilton",    team: "Ferrari",      pts: 183 },
    { pos: 4,  code: "NOR", name: "랜도 노리스",       en: "Lando Norris",      team: "McLaren",      pts: 159 },
    { pos: 5,  code: "LEC", name: "샤를 르클레르",     en: "Charles Leclerc",   team: "Ferrari",      pts: 155 },
    { pos: 6,  code: "VER", name: "막스 페르스타펜",   en: "Max Verstappen",    team: "Red Bull",     pts: 112 },
    { pos: 7,  code: "PIA", name: "오스카 피아스트리", en: "Oscar Piastri",     team: "McLaren",      pts: 104 },
    { pos: 8,  code: "HAD", name: "이자크 하자르",     en: "Isack Hadjar",      team: "Red Bull",     pts: 68 },
    { pos: 9,  code: "LAW", name: "리암 로슨",         en: "Liam Lawson",       team: "Racing Bulls", pts: 49 },
    { pos: 10, code: "GAS", name: "피에르 가슬리",     en: "Pierre Gasly",      team: "Alpine",       pts: 44 },
    { pos: 11, code: "LIN", name: "아르비드 린드블라드", en: "Arvid Lindblad",  team: "Racing Bulls", pts: 23 },
    { pos: 12, code: "COL", name: "프랑코 콜라핀토",   en: "Franco Colapinto",  team: "Alpine",       pts: 19 },
    { pos: 13, code: "BEA", name: "올리버 베어먼",     en: "Oliver Bearman",    team: "Haas",         pts: 18 },
    { pos: 14, code: "BOR", name: "가브리엘 보르톨레토", en: "Gabriel Bortoleto", team: "Audi",       pts: 10 },
    { pos: 15, code: "HUL", name: "니코 휠켄베르크",   en: "Nico Hulkenberg",   team: "Audi",         pts: 6 },
    { pos: 16, code: "SAI", name: "카를로스 사인츠",   en: "Carlos Sainz",      team: "Williams",     pts: 6 },
    { pos: 17, code: "ALB", name: "알렉산더 알본",     en: "Alexander Albon",   team: "Williams",     pts: 5 },
    { pos: 18, code: "OCO", name: "에스테반 오콘",     en: "Esteban Ocon",      team: "Haas",         pts: 3 },
    { pos: 19, code: "ALO", name: "페르난도 알론소",   en: "Fernando Alonso",   team: "Aston Martin", pts: 3 },
    { pos: 20, code: "TSU", name: "유키 츠노다",       en: "Yuki Tsunoda",      team: "Racing Bulls", pts: 0 },
    { pos: 21, code: "STR", name: "랜스 스트롤",       en: "Lance Stroll",      team: "Aston Martin", pts: 0 },
    { pos: 22, code: "BOT", name: "발테리 보타스",     en: "Valtteri Bottas",   team: "Cadillac",     pts: 0 },
    { pos: 23, code: "PER", name: "세르히오 페레스",   en: "Sergio Perez",      team: "Cadillac",     pts: 0 }
  ],

  // ⚠️ 스포일러 — 컨스트럭터 순위
  constructors: [
    { pos: 1,  team: "Mercedes",     pts: 425 },
    { pos: 2,  team: "Ferrari",      pts: 338 },
    { pos: 3,  team: "McLaren",      pts: 263 },
    { pos: 4,  team: "Red Bull",     pts: 186 },
    { pos: 5,  team: "Racing Bulls", pts: 66 },
    { pos: 6,  team: "Alpine",       pts: 63 },
    { pos: 7,  team: "Haas",         pts: 21 },
    { pos: 8,  team: "Audi",         pts: 16 },
    { pos: 9,  team: "Williams",     pts: 11 },
    { pos: 10, team: "Aston Martin", pts: 3 },
    { pos: 11, team: "Cadillac",     pts: 0 }
  ]
};
