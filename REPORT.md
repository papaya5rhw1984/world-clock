# 발전 스튜디오 — World Clock v.u.1.0 (5역할 발전)

> 발전 정책: 버전 안 올리고 **`day-017-world-clock-v.u.1.0` 한 폴더만 제자리 갱신**. 원본 day-016-world-clock-v1.1.
> 위치: `F:\IntelliJIDE-workspace\ai-app-studio\companies\company-c\apps\day-017-world-clock-v.u.1.0\`
> 플레이: 같은 폴더 `index.html`

## [2026-06-03] 전체 역할 순차 발전 #1 (v1.1 → v.u.1.0)

**✨ 폴리시** — 카드에 `cursor:pointer`·누름 피드백, 복사 시 토스트 안내. 발견성↑.

**🧩 콘텐츠** — ① **카드 탭하면 그 도시 시간 복사**("도시 HH:MM (날짜, 오프셋)", clipboard+execCommand 폴백). ② **미팅 플래너 업무시간 강조**: 플래너 모드에서 해당 도시가 09–18시면 "🟢 업무중" 표시 → 미팅 잡기 한눈에.

**🎨 그래픽** — 토스트 UI(슬라이드 업), 기존 낮밤 톤·카드 디자인 유지.

**⚙️ 엔진** — v1.1 렌더 리팩토링(카드 1회 생성·텍스트만 갱신) 유지. 복사 폴백으로 file://·비보안 컨텍스트 동작. 카드 클릭과 삭제 버튼 이벤트 분리(stopPropagation).

**📱 QA·모바일** — localStorage 키 동일(worldclock_cities_v1/fmt_v1) → 마이그 무충돌. 삭제 버튼 탭이 복사로 오작동하지 않게 가드.

> 검증: 새 폴더 fresh write → bash `node --check`/`new Function` 파싱 OK(JS_OK), manifest JSON OK, 신규 기능 grep 확인(12곳). 플래너 변환·낮밤 산식은 상위 버전에서 실증(불변). manifest `(v.u.1.0)`, sw CACHE `world-clock-v-u-1-0`.
> 참고: 첨부 제보(Combo Pop 방향키)는 본 대상과 무관 → 미반영.

## 자체 추정: 91 → 93 (+2)
