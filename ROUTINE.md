# PIT WALL 데일리 루틴 — F1 브리핑 생성 + 허브 갱신 + 커밋

매일 아침(KST 09:00) 실행. 저장소 루트에서 작업한다. 이 문서만 보고 처음부터 끝까지 수행한다.

> **최우선 원칙: 스포일러 차단.**
> 사용자는 레이스를 나중에 본다. 브리핑 본문·`data.js`·커밋 메시지·PR 본문 어디에서도 레이스 결과, 우승자, 포디움, 챔피언십 순위, 최근 승자를 암시하는 표현이 노출되면 안 된다. 애매하면 스포일러로 취급한다.

---

## 0. 작업 환경

저장소 루트 구조:

```
index.html      대시보드 (수정 금지)
circuit.html    서킷 가이드 (수정 금지)
circuits.js     서킷 데이터 (수정 금지)
data.js         ← 매일 갱신
briefings/      ← 오늘 브리핑 추가
```

- 오늘 날짜는 KST 기준. 파일명·`meta.updatedAt`·`briefings[].date` 모두 `YYYY-MM-DD`.
- 파일 편집은 Edit로 최소 범위만 수정한다. `data.js` 구조를 바꾸지 않는다.

## 1. 기사 수집 — 2단계 필수

### 1-A. 검색 (WebSearch)
고정 매체: Formula1.com, The Race, Autosport, Motorsport.com, RaceFans, PlanetF1, Crash.net, GPFans. 그 밖의 매체도 발견되면 출처 명시하고 수집.
쿼리 예: `F1 Formula 1 latest news today`, `F1 transfer news`, `F1 technical regulations`, `{다음 GP명} preview`.

### 1-B. 기사 페이지 fetch — 생략 금지
카드로 실을 기사는 각 페이지를 반드시 연다. 두 도구를 나눠 쓴다.
- **메타 태그 → Bash `curl`** (WebFetch는 페이지를 마크다운으로 바꾸면서 `<meta>`를 버리므로 og:image를 못 준다 — 2026-09-03 검증). `og:image`(썸네일), `og:url`/canonical(정식 URL), `og:title`, `article:published_time`을 뽑는다:
  ```bash
  curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128 Safari/537.36" --max-time 25 "$URL" | grep -oiE '<meta[^>]+(og:image|og:url|og:title|article:published_time)[^>]*>|<link[^>]+canonical[^>]*>'
  ```
  여러 URL은 for 루프로 한 번에 돌린다.
- **본문 → WebFetch** (prompt에 "본문을 요약하고, 순위·최근 레이스 결과 언급이 있으면 그대로 인용"을 넣는다). 본문은 스포일러 판별 근거이자 상세 번역 재료다.
- fetch는 3~4개씩 병렬. 큰 사이트 한 곳을 열면 "Latest/Related" 목록에서 실제 기사 URL을 대량 확보할 수 있다.
- PlanetF1 `-496x280.jpg` 썸네일은 저해상도 → 접미사 제거 또는 `-1320x742.jpg`. Formula1.com Cloudinary는 `w_352`→`w_960` 가능.
- **og:image를 못 얻은 기사는 싣지 않는다.** 플레이스홀더로 채우고 둘러대지 않는다.

## 2. 선별·분류
최대 20건, 중복 제거. `data-cat`: `race`(🏁 레이스 위크) / `transfer`(🔄 이적·계약) / `tech`(🔧 기술·규정) / `people`(👤 드라이버·팀) / `fia`(⚖️ FIA·거버넌스) / `etc`(📰 기타). 기사 있는 카테고리만 만든다.
결승 다음 날은 대부분 스포일러다. 프랙티스·예선·다음 GP 라인업·기술 기사를 의도적으로 찾아 레이스 위크 섹션이 잠긴 카드만 남지 않게 한다. 휴식기라 기사가 적으면 있는 것만으로 만들고 안내문에 밝힌다.

## 3. 스포일러 판별 — 엄격
**스포일러 → `<details class="spoiler">`**: 우승자·포디움·최종 순위 / 챔피언십 포인트 순위 / 직전 우승자 암시("3연승", "back-to-back", "extending lead") / 레이스 후 분석·반응·팀 무전 / 순위를 맥락으로 포함하는 프리뷰 / **카테고리 불문, 본문에 순위·최근 결과가 섞인 기사**. 같은 주제를 순위 없이 다룬 다른 매체 기사가 있으면 그것을 비스포일러 카드로 쓴다.
**스포일러 아님**: FP1~3 결과, 예선 결과·그리드 / 기술·규정·이적·팀 운영·캘린더 / 순위 언급 없는 프리뷰 / 다음 GP 라인업·FP1 대체 출전·그리드 페널티 예고.
> 기준: 보여줬을 때 최근 레이스 승자를 간접적으로라도 알게 되면 스포일러.

## 4. 번역
고유명사 영문 병기(막스 페르스타펜(Max Verstappen)). `.sum` 2~3문장, 비스포일러 카드는 `.detail-body` 3~4문단 상세. 전문 번역 금지, 자기 말로 풀어 정리.

## 5. 브리핑 HTML 생성
`briefings/f1-news-YYYY-MM-DD.html`. **기존 브리핑(`briefings/` 최신 파일)을 열어 `<style>`·`<script>`와 구조를 그대로 복사**하고 본문만 교체한다. 지켜야 할 것:
- 헤더 kicker에 `<a href="../index.html">← PIT WALL</a>` 링크
- 카드는 썸네일 위·본문 아래. `img`에는 `loading="lazy"`만. `referrerpolicy`, `<meta name="referrer">`, `onerror` 숨기기 금지.
- 비스포일러 카드마다 `<details class="more">` 상세 번역
- **스포일러 카드**: `<summary>`에 원제목 금지, 중립 설명만(`⚠️ 스포일러 주의: OO GP 결승 결과`). 우승자·순위·포인트 표현 금지. 썸네일·상세 번역 넣지 않음. 중립 요약 + 원문 링크만.
- "오늘의 요약" 3줄: 스포일러 항목은 `🏁 OO GP 관련 소식 N건 — 아래 스포일러 섹션을 열어 확인하세요.` 형식만
- 용어 사전: 그날 기사에 실제 등장한 용어만, `한국어 (English) — 1~2문장`
- 칩·섹션은 기사 있는 카테고리만. 건수 배지 정확히.

## 6. data.js 갱신
1. `meta.updatedAt` ← 오늘
2. `briefings` 배열 **맨 앞**에 `{ date, file: "briefings/f1-news-YYYY-MM-DD.html", count, spoilers, headline }` 추가. `headline`은 비스포일러 헤드라인 2~3개를 ` · `로 연결. 결과·순위·우승자 금지.
3. **결승이 끝난 뒤 첫 실행**(캘린더에서 `end` < 오늘인 최신 라운드가 `meta.standingsAsOf.round`보다 클 때): `https://www.formula1.com/en/results/2026/drivers`와 `/team`을 fetch해 `drivers`·`constructors` 전체를 새 값으로 교체하고 `meta.standingsAsOf`를 그 라운드로. 순위는 data.js에만 쓴다.
4. 캘린더 변경(취소·일정 변경·스프린트 변경)이 확인되면 `calendar` 수정.
5. 서킷 랩 레코드가 갱신됐다는 확실한 보도가 있으면 `circuits.js`의 해당 `record`만 수정(선택).

## 7. 커밋·푸시
```
git add briefings/ data.js circuits.js
git commit -m "brief: YYYY-MM-DD"
git push
```
- 커밋 메시지 본문에는 **비스포일러 헤드라인 3개**만 쓴다. 스포일러 항목은 `🏁 OO GP 관련 소식 — 스포일러 섹션 참조` 형식.
- 푸시 대상은 `main`. 브랜치가 다르게 잡히면 PR을 만들되 제목·본문에도 같은 스포일러 규칙 적용.
- 푸시 실패 시 원인을 그대로 보고하고 둘러대지 않는다.
- 실행 종료 시 채팅 보고문에도 같은 스포일러 규칙을 적용한다. 스포일러 항목은 `🏁 OO GP 관련 소식 — 스포일러 섹션 참조` 형식만.

## 8. 마무리 검증 (생략 금지)
1. 모든 `<summary>`에 결과 표현 없음
2. "오늘의 요약" 3줄에 결과·순위 없음
3. `data.js` `headline`·커밋 메시지에 결과·순위 없음
4. 스포일러 기사가 펼쳐진 채 남지 않음 / 스포일러 카드에 썸네일·상세 없음
5. 비스포일러 카드 전부 실제 og:image (`data:image/svg` 금지)
6. 모든 `href`가 개별 기사 URL (홈페이지 루트 금지)
7. `node -e "global.window={};require('./data.js');console.log(window.F1DATA.briefings[0])"` 로 data.js 유효성 확인
8. `briefings[0].file` 파일이 실제 존재
하나라도 걸리면 고친 뒤 커밋한다. 못 채운 항목은 보고에 그대로 쓴다.
