# Publications 페이지 가이드

Publications 페이지의 구조, Period 시스템, 필터 기능을 설명합니다.

---

## 📋 목차
1. [Period 시스템](#period-시스템)
2. [섹션 구조](#섹션-구조)
3. [2018년 특수 처리](#2018년-특수-처리)
4. [필터 UI](#필터-ui)
5. [색상 팔레트](#색상-팔레트)
6. [미래 확장성](#미래-확장성)

---

## Period 시스템

### 개요
연구실의 역사적 변천을 논문에 표시하는 시스템입니다.

### Period 분류

| Period Code | 표시명 | 시기 | 배지 색상 | 설명 |
|-------------|--------|------|-----------|------|
| `unist` | UNIST | 2025~ | #3D7684 (Primary) | 현재 UNIST 시기 |
| `before-unist2` | Before UNIST2 | 2020-2024 | #516F75 (Secondary) | UNIST 초중기 |
| `before-unist` | Before UNIST | ~2019 | #94a3b8 (Slate Gray) | UNIST 이전 (Kyung Hee Univ.) |

### Period Badge CSS
```css
.period-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    margin-left: 10px;
}

.period-badge.period-unist {
    background: #3D7684;
    color: white;
}

.period-badge.period-before-unist2 {
    background: #516F75;
    color: white;
}

.period-badge.period-before-unist {
    background: #94a3b8;
    color: white;
}
```

---

## 섹션 구조

### publications-data.js 구조

```javascript
{
    "2026": { title: "2026", period: "before-unist2", items: [] },
    "submitted": { title: "Submitted", items: [...] },
    "2025": { title: "2025", period: "before-unist2", items: [...] },
    "2024": { title: "2024", period: "before-unist2", items: [...] },
    "2023": { title: "2023", period: "before-unist2", items: [...] },
    "2022": { title: "2022", period: "before-unist2", items: [...] },
    "2021": { title: "2021", period: "before-unist2", items: [...] },
    "2020": { title: "2020", period: "before-unist2", items: [...] },
    "2019": { title: "2019", period: "before-unist", items: [...] },
    "2018": { title: "2018", items: [...] },  // ⚠️ period 없음 (특수 처리)
    "2017": { title: "2017", period: "before-unist", items: [...] },
    "older": { title: "2016 - 2009", period: "before-unist", items: [...] },
    "patents": { title: "Patents", items: [...] },
    "conference": { title: "Conference Papers", items: [...] }
}
```

### 논문 번호 매기기

**numberedCategories**: 논문 번호가 매겨지는 섹션
```javascript
const numberedCategories = [
    "2026", "2025", "2024", "2023", "2022", "2021", "2020",
    "2019", "2018", "2017", "older"
];
```

**displayOrder**: 화면에 표시되는 순서
```javascript
const displayOrder = [
    "2026", "submitted",
    "2025", "2024", "2023", "2022", "2021", "2020",
    "2019", "2018", "2017",
    "older",
    "patents", "conference"
];
```

---

## 2018년 특수 처리

### 배경
- PI가 2018년 7월에 Kyung Hee University → UNIST로 이동
- 2018년 논문들이 두 시기에 걸쳐 있음

### 해결 방법
**섹션**: 2018년은 하나의 섹션으로 유지
**배지**: 월별로 다른 period 배지 자동 할당

```javascript
// JavaScript에서 동적으로 period 할당
if (key === '2018' && item.publishedDate) {
    if (item.publishedDate.includes('Sep') ||
        item.publishedDate.includes('Oct') ||
        item.publishedDate.includes('Nov')) {
        itemPeriod = 'before-unist2';  // 9-11월
    } else {
        itemPeriod = 'before-unist';   // 1-7월
    }
}
```

### 2018년 논문 분포

| 월 | 논문 수 | Period | Badge |
|----|---------|--------|-------|
| Nov | 1 | before-unist2 | Before UNIST2 |
| Oct | 2 | before-unist2 | Before UNIST2 |
| Sep | 2 | before-unist2 | Before UNIST2 |
| Jul | 2 | before-unist | Before UNIST |
| May | 2 | before-unist | Before UNIST |
| Apr | 3 | before-unist | Before UNIST |
| Feb | 1 | before-unist | Before UNIST |
| Jan | 1 | before-unist | Before UNIST |
| **합계** | **14** | - | - |

---

## 필터 UI

### 레이아웃 (2026-02-13 업데이트)

```
[All] [Submitted] │ [Year ▼] │ [Before UNIST2] [Before UNIST] │ [Patents] [Conference]
```

### Year 드롭다운

드롭다운 메뉴에 포함된 연도:
- 2026
- 2025
- 2024
- 2023
- 2022
- 2021
- 2020
- 2019
- 2018
- 2017
- 2016-2009

### 구현 세부사항

#### HTML 구조
```html
<div class="year-dropdown-wrapper">
    <button id="year-dropdown-btn" class="filter-btn">
        <span id="year-label">Year</span>
        <i class="ri-arrow-down-s-line"></i>
    </button>
    <div id="year-dropdown-menu" class="year-dropdown-menu">
        <button class="year-option" data-filter="2026">2026</button>
        <!-- ... -->
    </div>
</div>
```

#### 애니메이션
- 드롭다운 열림: fade-in + slide-down
- 화살표 아이콘: 180도 회전
- 호버 효과: 배경색 변화

#### 동작
1. Year 버튼 클릭 → 드롭다운 열림 (필터 변경 없음)
2. 연도 선택 → 해당 연도로 필터 + 라벨 업데이트
3. 다른 필터 클릭 → Year 라벨 "Year"로 리셋

---

## 색상 팔레트

### 홈페이지 주요 색상
- **Primary**: #3D7684 (청록)
- **Primary Light**: #6fbccf (밝은 청록)
- **Primary Dark**: #2d5661 (어두운 청록)
- **Secondary**: #516F75 (회색빛 청록)

### Period Badge 색상
- **Before UNIST2**: #516F75 (차분한 청록 - Secondary 색상)
- **Before UNIST**: #94a3b8 (슬레이트 그레이)
- **UNIST** (미래): #3D7684 (Primary 색상)

**디자인 원칙**: 모든 배지 색상을 청록-회색 계열로 통일하여 홈페이지와 조화

---

## 미래 확장성

### KAIST 이전 시 대응 방안

#### 1. publications-data.js
```javascript
// 새 섹션 추가 (2026년 이후)
"2026": {
    title: "2026",
    period: "kaist",  // 새 period
    items: [...]
}
```

#### 2. publications.html CSS
```css
.period-badge.period-kaist {
    background: #FF6B6B;  /* 예: KAIST 빨간색 */
    color: white;
}
```

#### 3. JavaScript
```javascript
function getPeriodLabel(period) {
    const labels = {
        'kaist': 'KAIST',           // 추가
        'unist': 'UNIST',
        'before-unist2': 'Before UNIST2',
        'before-unist': 'Before UNIST'
    };
    return labels[period] || '';
}
```

#### 4. 필터 버튼
```html
<button class="filter-btn" data-filter="kaist">KAIST</button>
```

### Period 계층 구조 (미래 예시)
```
kaist (2026~)
  └─ unist (2025)
      └─ before-unist2 (2018 Sep ~ 2024)
          └─ 2018 (Sep-Nov)
          └─ 2020-2024
      └─ before-unist (~2018 Jul)
          └─ 2018 (Jan-Jul)
          └─ 2017-2009
```

---

## 📝 주요 파일

### publications-data.js
- 모든 논문 데이터
- Period 정보 저장
- Section별 구조화

### publications.html
- Period badge CSS
- 필터 버튼 레이아웃
- Year 드롭다운 구조
- JavaScript 필터 로직
- 2018년 특수 처리 로직

---

## 🎯 핵심 특징

1. **시기 구분**: Period 시스템으로 연구실 역사 표현
2. **유연한 구조**: 기관 이전 시 최소 수정으로 대응 가능
3. **2018년 특수 처리**: 섹션은 하나, 배지는 월별 자동 할당
4. **깔끔한 UI**: 드롭다운과 구분선으로 간결한 레이아웃
5. **색상 조화**: 홈페이지 테마와 통일된 청록-회색 계열

---

**최종 업데이트**: 2026-02-13
