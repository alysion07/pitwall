// ============================================================
//  2026 팀 & 머신 데이터 — teams.html이 읽습니다.
//  키 = data.js teams의 키. 순위·포인트·우승 수 같은 이번 시즌 결과는 넣지 않습니다.
//  출처: Formula1.com 팀 페이지(2026-09-03 기준). drivers는 시즌 개막 정규 라인업.
// ============================================================
window.F1TEAMS = {
  "Mercedes": {
    slug:"mercedes", full:"Mercedes-AMG PETRONAS Formula One Team", base:"브래클리, 영국", chief:"토토 볼프 (Toto Wolff)", tech:"제임스 앨리슨 (James Allison)",
    chassis:"W17", pu:"메르세데스 (Mercedes)", first:1970, titles:8,
    drivers:["조지 러셀 (George Russell)", "키미 안토넬리 (Kimi Antonelli)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedescarright.jpg",
    intro:"2026년 새 파워유닛 규정에서 가장 준비가 잘 됐다고 평가받는 메르세데스 엔진의 본가. 자체 엔진을 쓰는 워크스 팀이자 맥라렌·알핀·윌리엄스에도 같은 엔진을 공급한다. 러셀과 2년차 안토넬리의 젊은 라인업."
  },
  "Ferrari": {
    slug:"ferrari", full:"Scuderia Ferrari HP", base:"마라넬로, 이탈리아", chief:"프레드 바수르 (Frédéric Vasseur)", tech:"로익 세라 (Loïc Serra) / 엔리코 괄티에리 (Enrico Gualtieri)",
    chassis:"SF-26", pu:"페라리 (Ferrari)", first:1950, titles:16,
    drivers:["샤를 르클레르 (Charles Leclerc)", "루이스 해밀턴 (Lewis Hamilton)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/ferrari/2026ferraricarright.jpg",
    intro:"1950년 첫 시즌부터 빠지지 않은 유일한 팀. 2026년에는 180도 회전하는 리어윙을 가장 먼저 실전에 들고나와 다른 팀들이 뒤따라 베끼는 등 공력 설계에서 화제를 모았다. 엔진은 ADUO 제도로 시즌 중 추가 업그레이드 기회를 받았고, 해밀턴은 팀 2년차."
  },
  "McLaren": {
    slug:"mclaren", full:"McLaren Mastercard F1 Team", base:"워킹, 영국", chief:"안드레아 스텔라 (Andrea Stella)", tech:"피터 프로드로무 (Peter Prodromou) / 닐 훌디 (Neil Houldey)",
    chassis:"MCL40", pu:"메르세데스 (Mercedes)", first:1966, titles:10,
    drivers:["랜도 노리스 (Lando Norris)", "오스카 피아스트리 (Oscar Piastri)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarencarright.jpg",
    intro:"2024·2025 컨스트럭터 챔피언 팀이자 2025 드라이버 챔피언 노리스의 소속팀. 메르세데스 고객 엔진을 쓰며, 2026년에는 페라리식 회전 리어윙을 자기 식으로 해석한 'H-윙'을 개발해 몬차에서 첫 실전 투입했다. 노리스는 2030년까지 재계약."
  },
  "Red Bull": {
    slug:"redbullracing", full:"Oracle Red Bull Racing", base:"밀턴 케인스, 영국", chief:"로랑 메키스 (Laurent Mekies)", tech:"피에르 와셰 (Pierre Waché)",
    chassis:"RB22", pu:"레드불 포드 (Red Bull Ford Powertrains)", first:1997, titles:6,
    drivers:["막스 페르스타펜 (Max Verstappen)", "이자크 하자르 (Isack Hadjar)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.jpg",
    intro:"2026년부터 혼다와 결별하고 포드와 함께 만든 자체 파워유닛 'Red Bull Ford Powertrains'로 달리는 첫 시즌. FIA 기준 평가에서 가장 강한 엔진으로 분류돼 ADUO 업그레이드 대상에서 제외됐다. 페르스타펜은 2030년까지 재계약, 2년차 하자르가 자매팀에서 승격."
  },
  "Racing Bulls": {
    slug:"racingbulls", full:"Visa Cash App Racing Bulls Formula One Team", base:"파엔차, 이탈리아", chief:"앨런 퍼메인 (Alan Permane)", tech:"팀 고스 (Tim Goss)",
    chassis:"VCARB 03", pu:"레드불 포드 (Red Bull Ford Powertrains)", first:1985, titles:0,
    drivers:["리암 로슨 (Liam Lawson)", "아르비드 린드블라드 (Arvid Lindblad)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.jpg",
    intro:"레드불의 자매팀(옛 미나르디·토로 로소·알파타우리). 레드불 주니어 드라이버가 F1에 데뷔하는 관문으로, 2026년에는 로슨과 루키 린드블라드 조합. 레드불과 같은 파워유닛을 쓴다. 리저브 유키 츠노다(Yuki Tsunoda)가 부상·결장 시 대체 출전한다."
  },
  "Alpine": {
    slug:"alpine", full:"BWT Alpine Formula One Team", base:"엔스톤, 영국", chief:"플라비오 브리아토레 (Flavio Briatore, 총괄 고문) / 스티브 닐슨 (Steve Nielsen, MD)", tech:"다비드 산체스 (David Sanchez)",
    chassis:"A526", pu:"메르세데스 (Mercedes)", first:1986, titles:2,
    drivers:["피에르 가슬리 (Pierre Gasly)", "프랑코 콜라핀토 (Franco Colapinto)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/alpine/2026alpinecarright.jpg",
    intro:"르노 그룹 소속이지만 2026년부터 르노 엔진 프로그램을 접고 메르세데스 고객 엔진으로 전환했다. 엔스톤 공장은 베네통·르노 시절 두 차례 컨스트럭터 타이틀을 딴 곳. 아르헨티나 출신 콜라핀토의 활약이 본국의 F1 복귀 추진에 불을 붙이고 있다."
  },
  "Haas": {
    slug:"haas", full:"TGR Haas F1 Team", base:"캐너폴리스, 미국", chief:"고마쓰 아야오 (Ayao Komatsu)", tech:"안드레아 데 조르도 (Andrea De Zordo)",
    chassis:"VF-26", pu:"페라리 (Ferrari)", first:2016, titles:0,
    drivers:["에스테반 오콘 (Esteban Ocon)", "올리버 베어먼 (Oliver Bearman)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/haas/2026haascarright.jpg",
    intro:"미국 자본의 소규모 팀. 페라리 파워유닛과 기어박스 등 핵심 부품을 공급받고, 토요타 가주 레이싱(TGR)과 기술 제휴를 맺어 팀명에도 TGR이 붙었다. 팀 대표 고마쓰는 2026년 개발을 포기하고 2027로 넘어가자는 제안을 거부하고 시즌 중 업그레이드를 이어가고 있다."
  },
  "Audi": {
    slug:"audi", full:"Audi Revolut F1 Team", base:"힌빌, 스위스", chief:"마티아 비노토 (Mattia Binotto)", tech:"제임스 키 (James Key)",
    chassis:"R26", pu:"아우디 (Audi)", first:2026, titles:0,
    drivers:["니코 휠켄베르크 (Nico Hülkenberg)", "가브리엘 보르톨레토 (Gabriel Bortoleto)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/audi/2026audicarright.jpg",
    intro:"자우버(옛 알파로메오)를 인수해 2026년 워크스 팀으로 새 출발. 섀시는 스위스 힌빌, 파워유닛은 독일 노이부르크에서 자체 개발한다. 새 규정 첫해라 엔진 출력이 뒤처진 것으로 판정돼 ADUO 업그레이드 기회를 받았지만, 팀은 2027년 개발에 무게를 두고 있다."
  },
  "Williams": {
    slug:"williams", full:"Atlassian Williams F1 Team", base:"그로브, 영국", chief:"제임스 보울스 (James Vowles)", tech:"팻 프라이 (Pat Fry)",
    chassis:"FW48", pu:"메르세데스 (Mercedes)", first:1978, titles:8,
    drivers:["카를로스 사인츠 (Carlos Sainz)", "알렉산더 알본 (Alexander Albon)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/williams/2026williamscarright.jpg",
    intro:"컨스트럭터 타이틀 8회의 명문이지만 2010년대 후반 침체를 겪었고, 전 메르세데스 전략가 보울스가 재건을 이끌고 있다. 2026년 새 규정 초반 신뢰성 문제로 어려움을 겪었다. 사인츠와 알본 모두 2027년 계약을 마쳐 라인업이 안정적이다."
  },
  "Aston Martin": {
    slug:"astonmartin", full:"Aston Martin Aramco Formula One Team", base:"실버스톤, 영국", chief:"에이드리언 뉴이 (Adrian Newey)", tech:"엔리코 카르딜레 (Enrico Cardile)",
    chassis:"AMR26", pu:"혼다 (Honda)", first:2018, titles:0,
    drivers:["페르난도 알론소 (Fernando Alonso)", "랜스 스트롤 (Lance Stroll)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.jpg",
    intro:"2026년부터 혼다 워크스 파워유닛을 독점 공급받는 첫 시즌. 전설적 설계자 뉴이가 팀 대표까지 맡아 실버스톤 신사옥에서 머신을 설계했다. 혼다의 B스펙 엔진이 시즌 중반 투입됐고, 업그레이드 지출 규모는 그리드 최상위권으로 평가된다."
  },
  "Cadillac": {
    slug:"cadillac", full:"Cadillac Formula 1 Team", base:"실버스톤, 영국 (미국 인디애나폴리스 병행)", chief:"마르친 부트코프스키 (Marcin Budkowski)", tech:"닉 체스터 (Nick Chester)",
    chassis:"MAC-26", pu:"페라리 (Ferrari)", first:2026, titles:0,
    drivers:["세르히오 페레스 (Sergio Pérez)", "발테리 보타스 (Valtteri Bottas)"],
    car:"https://media.formula1.com/image/upload/c_fill,w_1200,h_430/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaccarright.jpg",
    intro:"GM 산하 캐딜락 브랜드로 2026년 데뷔한 11번째 팀. 초기 몇 년은 페라리 파워유닛을 쓰고 자체 엔진은 이후에 투입할 계획이다. 베테랑 페레스와 보타스로 라인업을 꾸렸고, 인디카 출신 콜튼 허타(Colton Herta)가 리저브로 FP1 주행을 맡는다."
  }
};
