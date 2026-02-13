# SBML Lab Website - 완전 관리자 매뉴얼

**Systems Biology and Machine Learning Lab (UNIST)** 공식 웹사이트 소스코드입니다.

이 웹사이트는 **HTML(구조)**과 **JavaScript 데이터(내용)**가 완전히 분리되어 있어, 
**코딩 지식이 없어도 데이터 파일만 수정하면 누구나 쉽게 내용을 업데이트할 수 있도록 설계**되었습니다.

---

## 📚 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [폴더 및 파일 구조](#폴더-및-파일-구조)
3. [페이지별 설명](#페이지별-설명)
4. [내용 업데이트 방법](#내용-업데이트-방법)
5. [디자인 수정 가이드](#디자인-수정-가이드)
6. [이미지 관리 가이드](#이미지-관리-가이드)
7. [배포 방법](#배포-방법)
8. [문제 해결 (Troubleshooting)](#문제-해결)

---

## 🎯 프로젝트 개요

### 주요 특징
- **데이터 중심 설계**: HTML 수정 없이 `.js` 데이터 파일만 편집
- **반응형 웹**: PC, 태블릿, 모바일 모든 기기에서 최적화
- **애니메이션**: 메인 페이지에 Deep Learning ↔ Metabolic Network 모핑 애니메이션
- **필터링**: 뉴스 페이지에서 연도 및 카테고리별 필터 기능
- **모달 갤러리**: 사진 클릭 시 전체 화면 슬라이드쇼
- **GitHub Pages 배포**: 무료 호스팅 가능

### 기술 스택
- **HTML5**: 웹 페이지 구조
- **CSS3**: 스타일링 및 반응형 레이아웃
- **Vanilla JavaScript**: 동적 기능 구현 (프레임워크 없음)
- **Remix Icon**: 아이콘 라이브러리
- **Canvas API**: 홈 페이지 애니메이션

---

## 📂 폴더 및 파일 구조

```
root/
│
├── index.html                    # 메인 홈페이지 (최신 뉴스/논문 자동 표시)
├── research.html                 # 연구 분야 상세 소개 (6개 분야)
├── publications.html             # 논문 및 특허 목록 (83+ 편)
├── members.html                  # 구성원 소개 (PI, 학생, 졸업생)
├── news.html                     # 뉴스 및 수상 실적 (필터 기능 포함)
├── gallery.html                  # 연구실 활동 사진 갤러리 (앨범 형태)
├── software.html                 # 소프트웨어 및 툴 소개 (DiffExo, BOARDS 등)
├── contact.html                  # 연락처 및 오시는 길
│
├── style.css                     # 🎨 전체 사이트 디자인 (색상, 폰트, 레이아웃)
├── common.js                     # 🔧 네비게이션 & 푸터 자동 생성
├── home-animation.js             # 🎬 메인 페이지 네트워크 애니메이션
│
├── [데이터 파일들 - 여기만 수정하면 됩니다!]
│   ├── members-data.js           # 📝 멤버 정보 (이름, 직책, 사진, 이메일 등)
│   ├── publications-data.js      # 📝 논문 목록 (연도별, DOI 링크 등)
│   ├── news-data.js              # 📝 뉴스/수상 목록 (연도, 태그, 설명)
│   ├── gallery-data.js           # 📝 갤러리 앨범 및 사진 목록
│   ├── software-data.js          # 📝 소프트웨어 정보 (이름, 설명, GitHub)
│   ├── research-data.js          # 📝 연구 분야 데이터 (제목, 설명, 이미지)
│   └── lab-members-list.js       # 📝 멤버 단순 목록 (연구 분야 페이지용)
│
├── [이미지 폴더들]
│   ├── member-photo/             # 🖼️ 멤버 프로필 사진 (JPG, PNG)
│   ├── research-photo/           # 🖼️ 연구 분야 이미지
│   ├── software-photo/           # 🖼️ 소프트웨어 스크린샷
│   ├── gallery-photo/            # 🖼️ 갤러리 행사 사진
│   └── icons/                    # 🖼️ 아이콘 및 로고
│
└── [레퍼런스 파일들 - 수정하지 마세요]
    ├── systemskimlab-*.html      # 기존 실험실 홈페이지 (참고용)
    └── README.md                 # 📖 이 파일
```

---

## 🌐 페이지별 설명

### 1. **index.html** (메인 홈)
- **기능**: 
  - Hero 섹션에 대형 네트워크 애니메이션
  - 6개 연구 분야 요약 카드
  - 최신 뉴스 3개 자동 표시
  - 최신 논문 5개 자동 표시
- **데이터 소스**: `research-data.js`, `news-data.js`, `publications-data.js`
- **애니메이션**: `home-animation.js` (Blue Deep Learning Network ↔ Green Metabolic Network, 5초마다 전환)

### 2. **research.html** (연구 분야)
- **기능**: 
  - 6개 연구 분야 상세 설명
  - 각 분야별 이미지 및 리스트
  - 랩 멤버 목록 표시
- **데이터 소스**: `research-data.js`, `lab-members-list.js`
- **연구 분야**:
  1. Transcriptional Regulatory Network Reconstruction
  2. Genome-Scale Metabolic Modeling
  3. Characterization of High-Value Bacterial Strains
  4. Anti-Microbial Resistance
  5. Machine Learning for Biological Data
  6. Energy Systems (선택적)

### 3. **publications.html** (논문 목록)
- **기능**: 
  - 연도별 논문 그룹화
  - DOI 링크 자동 생성
  - 저자 자동 볼드 처리 (Kim D 등)
- **데이터 소스**: `publications-data.js`
- **섹션**: Submitted, 2025, 2024, 2023, ... (연도 역순)

### 4. **members.html** (구성원)
- **기능**: 
  - PI (Principal Investigator) 프로필
  - 현재 학생 목록 (PhD, MS, Undergrad)
  - 졸업생 목록 (Alumni)
  - 이메일 링크 자동 생성
- **데이터 소스**: `members-data.js`

### 5. **news.html** (뉴스)
- **기능**: 
  - 연도별 필터 (2025, 2024, 2023 등)
  - 카테고리 필터 (Award, Publication, Conference, Event 등)
  - 시간순 정렬
- **데이터 소스**: `news-data.js`
- **필터 타입**: All, Award, Publication, Conference, Event, Grant

### 6. **gallery.html** (갤러리)
- **기능**: 
  - 앨범 기반 사진 관리
  - 클릭 시 모달 슬라이드쇼
  - 썸네일 자동 생성
  - 이전/다음 네비게이션
- **데이터 소스**: `gallery-data.js`

### 7. **software.html** (소프트웨어)
- **기능**: 
  - 연구실 개발 툴 소개
  - GitHub 링크
  - 사용 방법 및 스크린샷
- **데이터 소스**: `software-data.js`
- **주요 툴**: DiffExo, BOARDS, DEOCSU, ChEAP, MetaScope

### 8. **contact.html** (연락처)
- **기능**: 
  - 연구실 주소 및 연락처
  - 오시는 길 (지도 임베드 가능)
  - 이메일 링크

---

## 🛠️ 내용 업데이트 방법

> **핵심 원칙**: HTML 파일은 건드리지 않습니다! 아래의 **데이터 파일(`.js`)만 편집**하세요.

### 1. 멤버 추가/졸업 처리 (`members-data.js`)

#### 📝 파일 열기
```bash
메모장, VS Code, Sublime Text 등으로 members-data.js 열기
```

#### 신규 멤버 추가
```javascript
// students 배열에 추가
{
    name: "홍길동",
    role: "PhD Student",
    img: "hong.jpg",  // member-photo/hong.jpg 파일 필요
    email: "hong@unist.ac.kr",
    interests: "Machine Learning, Metabolic Engineering"
}
```

#### 졸업 처리
1. `students` 배열에서 해당 멤버 정보를 **복사**
2. `alumni` 배열에 **붙여넣기**
3. `students` 배열에서 **삭제**
4. 필요시 `graduationYear: "2025"` 추가

#### 💡 팁
- **사진 파일명**: 영문 소문자, 공백 없이 (예: `hong_gildong.jpg`)
- **이메일 없으면**: `email: ""` (빈 문자열)
- **관심분야 없으면**: `interests: ""` (빈 문자열)

---

### 2. 논문 업데이트 (`publications-data.js`)

#### 새 논문 추가
```javascript
// 해당 연도 배열에 추가 (예: publications["2025"])
{
    authors: "Kim D*, Lee J, Park S",  // *는 corresponding author
    title: "Deep Learning for Metabolic Network Prediction",
    journal: "Nature Biotechnology",
    year: 2025,
    volume: "43",
    pages: "123-135",
    doi: "10.1038/nbt.2025.001"  // DOI만 입력 (자동 링크 생성)
}
```

#### 새 연도 추가
```javascript
// publications 객체에 새 키 추가
const publications = {
    "submitted": [ /* ... */ ],
    "2026": [  // ← 새로 추가
        { /* 논문 정보 */ }
    ],
    "2025": [ /* ... */ ],
    // ...
}
```

#### 💡 팁
- **저자 볼드**: `Kim D`, `Kim DH` 등은 자동으로 볼드 처리됩니다
- **DOI 없으면**: `doi: ""` (링크 없이 표시)
- **정렬**: 각 연도 내에서 최신 논문이 위에 오도록 배치

---

### 3. 뉴스/수상 업데이트 (`news-data.js`)

#### 뉴스 추가
```javascript
// newsData 배열 맨 위에 추가 (최신 뉴스가 먼저 표시됨)
{
    year: 2025,
    month: "March",
    title: "Best Paper Award at ISMB 2025",
    desc: "홍길동 학생이 ISMB 2025에서 Best Paper Award를 수상했습니다.",
    tag: "Award"  // Award, Publication, Conference, Event, Grant
}
```

#### 💡 팁
- **태그 종류**: `Award`, `Publication`, `Conference`, `Event`, `Grant`
- **자동 반영**: 메인 페이지(index.html)와 뉴스 페이지(news.html) 모두 자동 업데이트
- **필터링**: 태그별로 자동 필터링 가능

---

### 4. 갤러리 사진 추가 (`gallery-data.js`)

#### 앨범 생성
```javascript
// galleryAlbums 배열에 추가
{
    title: "2025 Spring MT",
    date: "April 2025",
    cover: "mt_cover.jpg",  // 대표 이미지 (첫 번째 이미지가 자동 커버)
    images: [
        "mt_1.jpg",
        "mt_2.jpg",
        "mt_group.jpg"
    ]
}
```

#### 사진 준비
1. `gallery-photo/` 폴더에 이미지 파일 저장
2. 파일명을 `images` 배열에 추가

#### 💡 팁
- **권장 크기**: 1920x1080 이하 (로딩 속도 최적화)
- **파일 형식**: JPG (용량 작음) 또는 PNG (투명 배경)
- **순서**: 배열 순서대로 슬라이드쇼 재생

---

### 5. 소프트웨어 추가 (`software-data.js`)

#### 소프트웨어 추가
```javascript
// softwareData 배열에 추가
{
    name: "MetaPredictor",
    description: "AI-based metabolite prediction tool using deep learning",
    features: [
        "Automated metabolite identification",
        "High accuracy prediction",
        "User-friendly interface"
    ],
    github: "https://github.com/systemskimlab/MetaPredictor",
    demo: "https://metapredictor.example.com",
    image: "metapredictor.png"  // software-photo/metapredictor.png
}
```

#### 💡 팁
- **GitHub 링크 필수**: 없으면 `github: ""` (빈 문자열)
- **데모 선택**: 데모 사이트 있으면 `demo: "URL"`, 없으면 `demo: ""`
- **이미지 권장**: 스크린샷 또는 로고 (16:9 비율 권장)

---

### 6. 연구 분야 수정 (`research-data.js`)

#### 연구 분야 수정
```javascript
// researchData 배열 수정
{
    id: "genome-modeling",  // HTML ID (변경 금지)
    icon: "ri-flask-line",  // Remix Icon 클래스
    title: "Genome-Scale Metabolic Modeling",
    description: "Genome-scale models (GSMs) are...",
    sections: [
        {
            heading: "Research Topics",
            items: [
                "Model reconstruction",
                "Pathway analysis"
            ]
        }
    ],
    images: ["research-photo/GSM.png"]
}
```

#### 💡 팁
- **아이콘 변경**: [Remix Icon](https://remixicon.com/)에서 검색
- **이미지 여러 개**: `images: ["img1.png", "img2.png"]`

---

## 🎨 디자인 수정 가이드

### 사이트 색상 변경 (`style.css`)

#### 파일 열기: `style.css`

#### 색상 변수 수정 (파일 맨 위)
```css
:root {
    /* 메인 컬러 */
    --primary: #3D7684;      /* 청록색 (네비게이션, 버튼) */
    --primary-dark: #2C5A66; /* 어두운 청록색 (호버 효과) */
    --primary-light: #E8F4F6;/* 연한 청록색 (배경) */
    
    /* 강조 컬러 */
    --accent: #FF6F00;       /* 주황색 (하이라이트) */
    --accent-light: #FFF3E0; /* 연한 주황색 */
    
    /* 그레이스케일 */
    --text-primary: #1A1A1A;
    --text-secondary: #666666;
    --border-color: #E0E0E0;
    --bg-white: #FFFFFF;
}
```

#### 💡 색상 예시
- **파란색 계열**: `#3D7684` → `#0066CC`
- **초록색 계열**: `#3D7684` → `#00A86B`
- **보라색 계열**: `#3D7684` → `#6A4C93`

---

### 폰트 변경 (`style.css`)

```css
body {
    font-family: 'Pretendard', -apple-system, sans-serif;  /* 한글 폰트 */
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', 'Pretendard', sans-serif;  /* 영문 제목 폰트 */
}
```

---

### 네비게이션 메뉴 수정 (`common.js`)

#### 메뉴 항목 추가/삭제
```javascript
// navLinks 배열 수정
const navLinks = [
    { text: 'Home', href: 'index.html' },
    { text: 'Research', href: 'research.html' },
    { text: 'Publications', href: 'publications.html' },
    { text: 'Software', href: 'software.html' },
    { text: 'Members', href: 'members.html' },
    { text: 'News', href: 'news.html' },
    { text: 'Gallery', href: 'gallery.html' },
    { text: 'Contact', href: 'contact.html' }
    // 여기에 새 메뉴 추가 가능
];
```

#### 💡 팁
- 메뉴 순서 변경: 배열 순서 바꾸기
- 메뉴 삭제: 해당 줄 삭제 또는 주석 처리 (`//`)

---

### 홈 페이지 애니메이션 수정 (`home-animation.js`)

#### 애니메이션 속도 조절
```javascript
const cfg = {
    morphSpeed: 0.006,        // 모핑 속도 (작을수록 느림)
    particleSpeed: 0.008,     // 파티클 속도
    particleCount: 40,        // 파티클 개수
    blueColor: { r: 60, g: 130, b: 250 },    // 파란색 네트워크
    greenColor: { r: 0, g: 255, b: 150 },    // 초록색 네트워크
    nodeBaseSize: 4           // 노드 기본 크기
};

const HOLD_DURATION = 150;    // 각 네트워크 유지 시간 (프레임 수)
```

#### 💡 팁
- **느리게**: `morphSpeed: 0.003`
- **빠르게**: `morphSpeed: 0.01`
- **파티클 많이**: `particleCount: 80`

---

## 🖼️ 이미지 관리 가이드

### 이미지 파일 규칙

| 폴더 | 용도 | 권장 크기 | 파일명 규칙 |
|------|------|-----------|-------------|
| `member-photo/` | 멤버 프로필 사진 | 400x400 정사각형 | `lastname_firstname.jpg` |
| `research-photo/` | 연구 분야 이미지 | 1200x800 | `research_topic.png` |
| `software-photo/` | 소프트웨어 스크린샷 | 1920x1080 | `software_name.png` |
| `gallery-photo/` | 갤러리 행사 사진 | 1920x1080 이하 | `event_yyyymmdd_01.jpg` |
| `icons/` | 로고 및 아이콘 | 다양 | `logo.png` |

### 이미지 최적화

#### 1. 파일 크기 줄이기
- **온라인 도구**: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)
- **권장 용량**: 500KB 이하

#### 2. 파일 형식 선택
- **사진**: JPG (용량 작음)
- **로고/아이콘**: PNG (투명 배경)
- **고화질**: WebP (최신 브라우저)

#### 3. 파일명 규칙
```
✅ 좋은 예:
  - kim_donghyuk.jpg
  - research_metabolic_network.png
  - mt_20250315_group.jpg

❌ 나쁜 예:
  - 김동혁 교수님.jpg (한글, 공백)
  - IMG_1234.JPG (의미 없음)
  - research 이미지 (1).png (공백, 특수문자)
```

---

## 🚀 배포 방법

### GitHub Pages 배포 (무료, 추천)

#### 1. GitHub 저장소 생성
1. [GitHub](https://github.com) 로그인
2. 우측 상단 `+` → `New repository`
3. Repository name: `sbml-website` (원하는 이름)
4. Public 선택
5. `Create repository` 클릭

#### 2. 파일 업로드
```bash
# 방법 1: 웹 인터페이스 사용
GitHub 저장소 페이지 → Add file → Upload files
→ 모든 파일 드래그 & 드롭

# 방법 2: Git 사용 (터미널)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/sbml-website.git
git push -u origin main
```

#### 3. GitHub Pages 활성화
1. 저장소 페이지 → `Settings` 탭
2. 왼쪽 메뉴 → `Pages`
3. Source: `Deploy from a branch`
4. Branch: `main` / `/ (root)`
5. `Save` 클릭

#### 4. 배포 완료
- 약 1~3분 후 자동 배포
- 주소: `https://username.github.io/sbml-website/`
- 확인: 녹색 체크마크 표시되면 성공

---

### 커스텀 도메인 연결 (선택)

#### 도메인이 있는 경우
1. DNS 설정:
   ```
   Type: CNAME
   Name: www
   Value: username.github.io
   ```
2. GitHub Pages 설정:
   - Custom domain: `www.yourdomain.com`
   - Enforce HTTPS 체크

---

## 🔧 문제 해결 (Troubleshooting)

### 1. 이미지가 안 보여요
```
증상: 웹사이트에서 이미지 깨짐 아이콘 표시

해결 방법:
✅ 1. 파일 경로 확인
  - member-photo/hong.jpg ← 올바름
  - member-photo\hong.jpg ← 틀림 (역슬래시)
  - /member-photo/hong.jpg ← 틀림 (앞에 / 없어야 함)

✅ 2. 파일명 대소문자 확인
  - hong.jpg ≠ Hong.jpg ≠ HONG.JPG
  - 데이터 파일과 실제 파일명이 정확히 일치해야 함

✅ 3. 파일 존재 확인
  - 해당 폴더에 파일이 실제로 있는지 확인
```

---

### 2. 데이터를 수정했는데 반영이 안 돼요
```
증상: .js 파일을 수정했는데 웹사이트에서 변화 없음

해결 방법:
✅ 1. 브라우저 캐시 삭제
  - Windows: Ctrl + Shift + Delete
  - Mac: Cmd + Shift + Delete
  - 또는 시크릿 모드로 확인 (Ctrl/Cmd + Shift + N)

✅ 2. 하드 리프레시
  - Windows: Ctrl + F5
  - Mac: Cmd + Shift + R

✅ 3. 문법 오류 확인
  - 브라우저 개발자 도구 (F12) → Console 탭
  - 빨간색 에러 메시지 확인
  - 흔한 실수:
    * 마지막 항목 뒤에 쉼표(,) 있음
    * 따옴표(") 짝이 안 맞음
    * 중괄호({}) 괄호(()) 짝이 안 맞음
```

---

### 3. GitHub Pages 배포가 안 돼요
```
증상: 404 에러 또는 페이지가 안 뜸

해결 방법:
✅ 1. index.html 위치 확인
  - root 폴더에 index.html이 있어야 함
  - 하위 폴더에 있으면 안 됨

✅ 2. 배포 상태 확인
  - Actions 탭에서 초록색 체크마크 확인
  - 노란색(진행 중), 빨간색(실패) 표시 있으면 대기

✅ 3. 파일명 대소문자
  - index.html ← 올바름
  - Index.html, INDEX.html ← 틀릴 수 있음
```

---

### 4. 모바일에서 레이아웃이 깨져요
```
증상: 핸드폰에서 보면 글자 겹침, 버튼 잘림

해결 방법:
✅ style.css에 이미 반응형 설정 완료
  - 문제 발생 시 브라우저 개발자 도구로 확인
  - 특정 CSS 충돌 시 스타일 우선순위 조정

✅ 테스트 방법:
  - PC 브라우저에서 F12 → 모바일 아이콘 클릭
  - 다양한 화면 크기로 테스트
```

---

### 5. 애니메이션이 느려요
```
증상: 메인 페이지 네트워크 애니메이션 끊김

해결 방법:
✅ home-animation.js 수정
  - particleCount: 40 → 20 (파티클 줄이기)
  - 오래된 PC/모바일에서는 성능 저하 가능
```

---

## 📌 자주 묻는 질문 (FAQ)

### Q1. HTML을 전혀 몰라도 수정할 수 있나요?
**A:** 네! 데이터 파일(`.js`)만 메모장으로 열어서 기존 양식대로 복사-붙여넣기하면 됩니다.

### Q2. 새 페이지를 추가하고 싶어요
**A:** 
1. 기존 HTML 파일 하나를 복사
2. 파일명 변경 (예: `collaboration.html`)
3. `common.js`의 `navLinks` 배열에 메뉴 추가
4. 내용 수정

### Q3. 로고를 바꾸고 싶어요
**A:** 
1. `icons/` 폴더에 새 로고 저장 (예: `logo_new.png`)
2. `common.js`에서 로고 경로 수정:
   ```javascript
   <img src="icons/logo_new.png" alt="SBML Lab">
   ```

### Q4. 구글 애널리틱스를 추가하고 싶어요
**A:** 모든 HTML 파일의 `<head>` 태그 안에 추적 코드 삽입

### Q5. SEO 최적화를 하고 싶어요
**A:** 각 HTML 파일 `<head>` 섹션에 메타 태그 추가:
```html
<meta name="description" content="Systems Biology and Machine Learning Lab at UNIST">
<meta name="keywords" content="systems biology, machine learning, UNIST, metabolic engineering">
```

---

## 📞 지원 및 문의

### 기술 지원
- **GitHub Issues**: [저장소 Issues 탭](https://github.com/username/sbml-website/issues)
- **이메일**: webmaster@unist.ac.kr (예시)

### 유용한 자료
- [Remix Icon 라이브러리](https://remixicon.com/)
- [GitHub Pages 문서](https://docs.github.com/pages)
- [Markdown 가이드](https://www.markdownguide.org/)

---

## 📝 변경 이력

| 버전 | 날짜 | 변경 사항 |
|------|------|-----------|
| 1.0.0 | 2025-01-02 | 초기 버전 완성 (메인, 연구, 논문, 멤버, 뉴스, 갤러리, 소프트웨어, 연락처) |
| 1.1.0 | TBD | 추가 기능 업데이트 예정 |

---

## 🌟 크레딧

- **디자인 참고**: GEL Lab (KAIST)
- **개발**: Systems Biology and Machine Learning Lab (UNIST)
- **기술 스택**: HTML5, CSS3, Vanilla JavaScript
- **아이콘**: [Remix Icon](https://remixicon.com/)
- **호스팅**: GitHub Pages

---

**Copyright © 2025 Systems Biology and Machine Learning Lab | UNIST**  
*Website developed with Claude AI*

---

## 🚨 중요 알림

### 파일 수정 전 백업 필수!
```bash
# 수정 전에 항상 복사본 저장
members-data.js → members-data_backup_20250102.js
```

### Git 사용 시 버전 관리
```bash
git add .
git commit -m "Update members: Add 홍길동, Graduate 김철수"
git push
```

이렇게 하면 언제든지 이전 버전으로 되돌릴 수 있습니다! 🎉
