이 파일을 프로젝트 폴더의 최상위에 두시면, 추후 연구실의 다른 관리자가 오더라도 쉽게 홈페이지를 유지보수할 수 있습니다.

````markdown
# SBML Lab Website - 관리자 매뉴얼

**Systems Biology and Machine Learning Lab (UNIST)** 공식 웹사이트 소스코드입니다.
이 웹사이트는 **HTML(구조)**과 **JavaScript 데이터(내용)**가 분리되어 있어, 코딩을 몰라도 데이터 파일만 수정하면 누구나 쉽게 내용을 업데이트할 수 있도록 설계되었습니다.

---

## 📂 폴더 및 파일 구조

```text
root/
├── index.html          # 메인 홈 (연구분야 요약, 최신 뉴스/논문 자동 노출)
├── research.html       # 연구 분야 상세 소개
├── publications.html   # 논문 및 특허 목록
├── members.html        # 구성원 소개 (교수님, 학생, 졸업생)
├── news.html           # 뉴스 및 수상 실적 (텍스트 리스트)
├── gallery.html        # [NEW] 연구실 활동 사진첩 (앨범 형태)
├── software.html       # 소프트웨어 및 툴 소개
├── contact.html        # 오시는 길 및 연락처
│
├── style.css           # [핵심] 모든 페이지의 디자인(색상, 폰트, 레이아웃) 통합 관리
├── common.js           # [핵심] 상단 메뉴(Nav)와 하단(Footer) 자동 생성 스크립트
│
├── js/ (데이터 파일들)
│   ├── members-data.js       # [수정] 멤버 정보
│   ├── publications-data.js  # [수정] 논문 목록
│   ├── news-data.js          # [수정] 뉴스/실적 목록
│   ├── gallery-data.js       # [수정] 갤러리 앨범 및 사진 목록
│   └── software-data.js      # [수정] 소프트웨어 정보
│
├── member-photo/       # [폴더] 멤버 프로필 사진 저장소
└── gallery-photo/         # [폴더] 갤러리 및 활동 사진 저장소
````

-----

## 🛠️ 내용 업데이트 방법 (핵심)

HTML 파일을 직접 열 필요가 없습니다. 아래의 \*\*데이터 파일(`.js`)\*\*만 메모장이나 코드 에디터로 열어서 수정하세요.

### 1\. 멤버 추가/졸업 (`members-data.js`)

  * **사진 추가:** `member-photo` 폴더에 사진(예: `hong.jpg`)을 넣고, 코드에 `img: "hong.jpg"`라고 적습니다.
  * **졸업 처리:** `students` 배열에 있는 정보를 복사해서 `alumni` 영역으로 옮기면 됩니다.

### 2\. 논문 실적 업데이트 (`publications-data.js`)

  * `submitted`, `2025`, `2024` 등 연도별로 정리되어 있습니다.
  * 새로운 연도가 되면 `"2026": { ... }` 형태의 그룹을 만들어 추가하면 됩니다.

### 3\. 뉴스 및 수상 소식 (`news-data.js`)

  * 이곳에 내용을 추가하면 \*\*메인 페이지(Home)\*\*와 \*\*뉴스 페이지(News)\*\*에 동시에 자동으로 업데이트됩니다.
  * 형식: `{ year: 2025, month: "March", title: "...", desc: "...", tag: "Award" }`

### 4\. 갤러리 사진 올리기 (`gallery-data.js`)

  * **사진 준비:** `gallery-photo` 폴더에 행사 사진들을 넣습니다.
  * **앨범 생성:** 아래와 같이 입력하면 앨범이 생성되고, 클릭 시 슬라이드쇼가 뜹니다.
    ```javascript
    {
        title: "2025 Spring MT",
        date: "April 2025",
        images: ["mt_1.jpg", "mt_2.jpg", "mt_group.jpg"] // 파일명 나열
    }
    ```

### 5\. 소프트웨어 추가 (`software-data.js`)

  * 개발한 툴의 이름, 설명, 깃허브 링크 등을 객체 형태로 추가하면 카드가 자동 생성됩니다.

-----

## 🎨 디자인 및 공통 요소 수정

### 메뉴 이름이나 순서를 바꾸고 싶을 때

  * **`common.js`** 파일 하나만 수정하면 모든 페이지(8개)의 메뉴가 한 번에 바뀝니다.

### 사이트 색상을 바꾸고 싶을 때

  * **`style.css`** 파일 맨 위의 `:root` 변수만 수정하세요.
    ```css
    :root {
        --primary: #3D7684;  /* 현재 메인 컬러 (청록색) */
        --accent: #FF6F00;   /* 강조 컬러 (주황색) */
    }
    ```

-----

## 🚀 배포 방법 (GitHub Pages 추천)

1.  이 폴더의 모든 파일을 GitHub 저장소(Repository)에 업로드합니다.
2.  저장소의 **Settings \> Pages** 메뉴로 이동합니다.
3.  **Source**를 `main` (또는 `master`) 브랜치로 설정하고 저장(Save)합니다.
4.  약 1\~3분 뒤 생성된 주소로 접속하면 홈페이지가 보입니다.

-----

## ℹ️ 기타 정보

  * **반응형 웹:** PC, 태블릿, 모바일 화면 크기에 맞춰 레이아웃이 자동으로 최적화됩니다.
  * **브라우저:** Chrome, Edge, Safari, Firefox 최신 버전을 지원합니다.

-----

**Copyright © 2025 Systems Biology and Machine Learning Lab | UNIST**
*Generated with Claude and Gemini*

```

```

