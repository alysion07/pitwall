# PIT WALL — F1 데일리 브리핑 허브

스포일러 없이 F1을 따라가기 위한 개인 대시보드. 매일 아침 해외 매체 기사를 한국어로 정리한 브리핑을 쌓고, 달력·일정·순위표·서킷 가이드를 한 화면에서 본다.

## 구조

```
index.html        대시보드 (달력 · 다음 레이스 · 시즌 진행 · 순위표 · 아카이브)
circuit.html      서킷 가이드 템플릿 — circuit.html?round=13
data.js           시즌 일정 · 순위 · 브리핑 목록  ← 매일 갱신
circuits.js       23개 서킷 데이터 (코너 · 역사 · 관전 포인트 · 트랙맵 URL)
briefings/        날짜별 브리핑 HTML
ROUTINE.md        매일 실행되는 자동화 프롬프트
```

순수 정적 사이트. 빌드 없음. 외부 의존성은 Pretendard 웹폰트(jsDelivr)와 Formula1.com 이미지 핫링크뿐.

## 스포일러 원칙

- 순위표는 기본 가림. 사용자가 직접 열어야 보인다.
- 브리핑에서 레이스 결과·챔피언십 순위가 드러나는 기사는 접힌 카드로.
- `data.js`의 `briefings[].headline`, 커밋 메시지, README 어디에도 결과·우승자·순위를 쓰지 않는다.

## 자동화

`ROUTINE.md`가 매일 아침 실행 지침. 기사 수집 → 브리핑 HTML 생성 → `data.js` 갱신 → 커밋·푸시. 푸시되면 Cloudflare Pages가 자동 배포.

## 배포

Cloudflare Pages · Git 연동 · 프로덕션 브랜치 `main` · 빌드 명령 없음 · 출력 디렉터리 `/`
