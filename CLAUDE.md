# Claude Code 편집 가이드

> 이 문서는 SBML Lab 웹사이트를 Claude Code로 편집할 때 참고할 가이드입니다.

## 프로젝트 개요

**SBML Lab Website v0.3.3**
- UNIST 시스템대사공학연구실 (Systems and Synthetic Biology of Microbes Lab) 공식 웹사이트
- GitHub Pages 기반 정적 사이트
- 순수 HTML, CSS, JavaScript로 구성 (프레임워크 없음)

## 폴더 구조 (v0.3.3 - 2025년 폴더 재편)

```
sbml_website_v0.3.3/
├── index.html              # 홈페이지
├── research.html           # 연구 분야
├── members.html            # 연구진
├── publications.html       # 논문 목록
├── software.html           # 소프트웨어
├── news.html              # 뉴스
├── gallery.html           # 갤러리
├── contact.html           # 연락처
├── assets/                # 모든 정적 자산
│   ├── css/              # 스타일시트
│   │   ├── style.css     # 메인 스타일
│   │   └── ...
│   ├── js/
│   │   ├── data/         # 데이터 파일 (JSON 형식의 JS)
│   │   │   ├── gallery-data.js
│   │   │   ├── members-data.js
│   │   │   ├── news-data.js
│   │   │   ├── publications-data.js
│   │   │   ├── research-data.js
│   │   │   └── software-data.js
│   │   └── scripts/      # 기능 스크립트
│   │       ├── common.js        # 네비게이션, 푸터 등
│   │       ├── analytics.js     # Google Analytics
│   │       └── optimize-images.js
│   └── images/           # 이미지 자산
│       ├── gallery/      # 갤러리 이미지 (연도별 폴더)
│       ├── members/      # 멤버 사진
│       ├── research/     # 연구 관련 이미지
│       ├── software/     # 소프트웨어 스크린샷
│       └── icons/        # 로고 및 아이콘
└── docs/                 # 문서 파일
    ├── README.md
    ├── CHANGELOG.md
    ├── PUBLICATIONS_GUIDE.md
    ├── SETUP_GUIDE.md
    ├── SECURITY.md
    └── RESTRUCTURE_GUIDE.md
```

## 중요: 이미지 경로 규칙

⚠️ **모든 이미지는 반드시 `assets/images/` 하위 경로를 사용해야 합니다!**

```javascript
// ✅ 올바른 경로
"assets/images/gallery/2025/202512_017_ASBA.jpg"
"assets/images/members/professor.jpg"
"assets/images/research/TRN.png"
"assets/images/software/diffexo.png"
"assets/images/icons/logo.png"

// ❌ 잘못된 경로 (구버전, 사용 금지)
"gallery-photo/2025/..."
"member-photo/..."
"research-photo/..."
```

## 데이터 파일 구조

### 1. gallery-data.js
```javascript
const galleryData = [
    {
        year: 2026,  // 연도
        albums: [    // 해당 연도의 앨범들
            {
                title: "앨범 제목",
                date: "날짜 (예: February 2026)",
                description: "설명",
                cover: "assets/images/gallery/2026/커버이미지.jpg",
                photos: [
                    "assets/images/gallery/2026/사진1.jpg",
                    "assets/images/gallery/2026/사진2.jpg"
                ]
            }
        ]
    }
];
```

### 2. members-data.js
```javascript
const piData = { /* PI 정보 */ };
const currentMembers = [
    {
        name: "이름",
        position: "직책",
        photo: "assets/images/members/사진.jpg",
        email: "이메일",
        research: "연구 분야"
    }
];
const alumniData = [ /* 졸업생 정보 */ ];
```

### 3. publications-data.js
```javascript
const publicationsData = [
    {
        year: 2025,
        period: "2025~2020",  // 5년 단위 기간 표시
        publications: [
            {
                authors: "저자들",
                title: "논문 제목",
                journal: "저널명",
                badges: ["Corresponding", "First"],  // 배지
                doi: "DOI 링크",
                pdf: "PDF 링크",
                code: "코드 링크"
            }
        ]
    }
];
```

## UI 컴포넌트 패턴

### Year 드롭다운 (publications, news, gallery 공통)

모든 페이지는 동일한 드롭다운 스타일을 사용합니다:

```html
<div class="filter-container">
    <span style="font-weight: 600; margin-right: 10px;">Year:</span>
    <div class="year-dropdown-wrapper">
        <button id="year-dropdown-btn" class="filter-btn">
            <span id="year-label">All</span>
            <i class="ri-arrow-down-s-line"></i>
        </button>
        <div id="year-dropdown-menu" class="year-dropdown-menu">
            <!-- JS로 채워짐 -->
        </div>
    </div>
</div>
```

**JavaScript 패턴:**
```javascript
// 1. 연도 추출 (배열에서)
const years = [...new Set(data.map(item => item.year))].sort((a, b) => b - a);

// 2. 드롭다운 메뉴 생성
const dropdownMenu = document.getElementById('year-dropdown-menu');
let optionsHtml = '<button class="year-option active" data-year="all">All</button>';
years.forEach(year => {
    optionsHtml += `<button class="year-option" data-year="${year}">${year}</button>`;
});
dropdownMenu.innerHTML = optionsHtml;

// 3. 이벤트 리스너 (토글, 선택, 외부 클릭)
// ... 구현 코드
```

## 최근 주요 변경사항 (v0.3.3)

### 2025년 2월 13일
1. **폴더 구조 대규모 재편**
   - 루트 39개 항목 → 13개 항목으로 정리 (67% 감소)
   - `assets/` 폴더 신설: 모든 CSS, JS, 이미지 통합
   - `docs/` 폴더 신설: 모든 문서 분리

2. **Year 필터 드롭다운 전환**
   - publications, news, gallery 페이지에 드롭다운 적용
   - 기존 버튼 리스트 방식에서 드롭다운 메뉴로 변경
   - 일관된 UI/UX 제공

3. **이미지 경로 전면 수정**
   - 모든 데이터 파일의 이미지 경로를 `assets/images/` 하위로 변경
   - gallery-data.js, members-data.js, research-data.js, software-data.js 업데이트

4. **로고 경로 수정**
   - common.js의 로고 경로를 `assets/images/icons/logo.png`로 업데이트

5. **2026년 갤러리 추가**
   - gallery-data.js에 2026년 섹션 추가
   - 샘플 그룹 사진 항목 포함

## 개발 가이드라인

### 새로운 갤러리 앨범 추가하기

1. 이미지를 `assets/images/gallery/[연도]/` 폴더에 업로드
2. `assets/js/data/gallery-data.js` 파일 열기
3. 해당 연도의 `albums` 배열에 새 객체 추가:
   ```javascript
   {
       title: "앨범 제목",
       date: "날짜",
       description: "설명",
       cover: "assets/images/gallery/[연도]/커버.jpg",
       photos: [
           "assets/images/gallery/[연도]/사진1.jpg",
           // ...
       ]
   }
   ```

### 새로운 멤버 추가하기

1. 멤버 사진을 `assets/images/members/` 폴더에 업로드
2. `assets/js/data/members-data.js`의 `currentMembers` 배열에 추가
3. 졸업 시 `alumniData` 배열로 이동

### 새로운 논문 추가하기

1. `assets/js/data/publications-data.js` 열기
2. 해당 연도 찾기 (없으면 새로 생성)
3. `publications` 배열 맨 위에 추가 (최신순)
4. `period` 확인 (5년 단위: 2025~2020, 2020~2015 등)

## 주의사항 ⚠️

### 절대 하지 말아야 할 것

1. ❌ **HTML 파일의 위치 이동**
   - GitHub Pages는 루트의 index.html을 요구
   - 모든 페이지 HTML은 루트에 유지

2. ❌ **이미지 경로를 `assets/images/` 외부로 설정**
   - 폴더 재편 후 모든 이미지는 assets/images/ 하위에 위치
   - 구버전 경로(gallery-photo/, member-photo/ 등) 사용 금지

3. ❌ **데이터 파일 구조 변경**
   - 기존 JavaScript 코드가 특정 구조를 기대함
   - 필드명이나 중첩 구조 변경 시 모든 페이지 확인 필요

4. ❌ **CSS 클래스명 임의 변경**
   - JavaScript에서 클래스명으로 요소를 선택하는 경우 많음
   - 변경 시 모든 JS 파일 확인 필요

### 반드시 확인해야 할 것

1. ✅ **이미지 경로 일관성**
   - 새 이미지 추가 시 반드시 `assets/images/[카테고리]/` 경로 사용

2. ✅ **연도 정렬**
   - 모든 데이터는 최신 연도가 배열의 앞에 위치 (내림차순)

3. ✅ **드롭다운 JavaScript 패턴**
   - year 필터 추가/수정 시 동일한 패턴 유지
   - `Object.keys()` 사용 금지 → 배열에서 `map()`으로 추출

4. ✅ **파일 수정 후 로컬 테스트**
   - 브라우저에서 페이지 열어 확인
   - 콘솔 오류 확인 (F12)

## 디버깅 팁

### 갤러리가 표시되지 않을 때

1. 브라우저 콘솔 열기 (F12)
2. 오류 메시지 확인
3. 주요 체크 포인트:
   - `galleryData` 변수가 정의되어 있는가?
   - 이미지 경로가 올바른가?
   - JavaScript 오류가 있는가?

### 드롭다운이 작동하지 않을 때

1. 연도 추출 코드 확인:
   ```javascript
   // ❌ 잘못된 방식
   const years = Object.keys(galleryData).sort(...);

   // ✅ 올바른 방식
   const years = [...new Set(galleryData.map(item => item.year))].sort(...);
   ```

2. HTML 요소 ID 확인:
   - `year-dropdown-btn`
   - `year-dropdown-menu`
   - `year-label`

### 이미지가 로드되지 않을 때

1. 경로 확인: `assets/images/`로 시작하는가?
2. 파일 존재 확인: 실제로 해당 경로에 파일이 있는가?
3. 대소문자 확인: 파일명 대소문자가 정확한가?

## 문서 참조

- **전체 가이드**: `docs/README.md`
- **변경 이력**: `docs/CHANGELOG.md`
- **폴더 재편 상세**: `docs/RESTRUCTURE_GUIDE.md`
- **논문 추가 가이드**: `docs/PUBLICATIONS_GUIDE.md`
- **설치 가이드**: `docs/SETUP_GUIDE.md`

## Git 커밋 컨벤션

```bash
# 기능 추가
git commit -m "feat: 2026년 갤러리 앨범 추가"

# 버그 수정
git commit -m "fix: 갤러리 드롭다운 오류 수정"

# 스타일 변경
git commit -m "style: 필터 버튼 간격 조정"

# 문서 업데이트
git commit -m "docs: CLAUDE.md 작성"

# 리팩토링
git commit -m "refactor: 이미지 경로 통일"
```

## 향후 작업 제안

- [ ] 반응형 디자인 개선 (모바일 최적화)
- [ ] 다크 모드 지원
- [ ] 검색 기능 추가
- [ ] 페이지 로딩 성능 최적화
- [ ] 이미지 lazy loading 구현
- [ ] SEO 메타태그 강화

---

**마지막 업데이트**: 2025년 2월 13일
**작성자**: Claude (Sonnet 4.5)
**버전**: v0.3.3
